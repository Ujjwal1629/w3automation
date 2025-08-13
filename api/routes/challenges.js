import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { executeCode } from '../services/codeExecutor.js';
import { getProblemTestCases } from '../services/problemsData.js';

const router = express.Router();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, user) => {
    if (err) {
      console.log('JWT verification error:', err.message);
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    console.log('JWT verified successfully for user:', user.userId);
    req.user = user;
    next();
  });
};

// Optional auth middleware (allows both authenticated and anonymous users)
const optionalAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (!err) {
        req.user = user;
      }
    });
  }
  next();
};

// GET /api/leaderboard - Get leaderboard data
router.get('/leaderboard', optionalAuth, async (req, res) => {
  try {
    const { timeframe = 'all-time' } = req.query;
    const limit = 50; // Show top 50 users

    // Build date filter for timeframe
    let dateFilter = {};
    const now = new Date();
    
    if (timeframe === 'weekly') {
      const weekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
      dateFilter = { lastSolvedDate: { $gte: weekAgo } };
    } else if (timeframe === 'monthly') {
      const monthAgo = new Date(now);
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      dateFilter = { lastSolvedDate: { $gte: monthAgo } };
    }

    // Aggregate users with progress
    const users = await User.aggregate([
      {
        $match: {
          $or: [
            { totalSolved: { $gt: 0 } }, // Users with solved problems
            { points: { $gt: 0 } }       // Users with points (fallback)
          ],
          ...dateFilter
        }
      },
      {
        $addFields: {
          // Ensure all fields have default values
          totalSolved: { $ifNull: ['$totalSolved', 0] },
          easy: { $ifNull: ['$easy', 0] },
          medium: { $ifNull: ['$medium', 0] },
          hard: { $ifNull: ['$hard', 0] },
          points: { $ifNull: ['$points', 0] },
          streak: { $ifNull: ['$streak', 0] },
          country: { $ifNull: ['$country', '🌍'] }
        }
      },
      {
        $addFields: {
          badge: {
            $switch: {
              branches: [
                { case: { $gte: ['$totalSolved', 200] }, then: 'Grand Master' },
                { case: { $gte: ['$totalSolved', 100] }, then: 'Expert' },
                { case: { $gte: ['$totalSolved', 50] }, then: 'Advanced' },
                { case: { $gte: ['$totalSolved', 10] }, then: 'Intermediate' }
              ],
              default: 'Beginner'
            }
          }
        }
      },
      {
        $sort: { 
          points: -1, 
          totalSolved: -1, 
          createdAt: 1 
        }
      },
      {
        $limit: limit
      },
      {
        $project: {
          username: 1,
          totalSolved: 1,
          easy: 1,
          medium: 1,
          hard: 1,
          points: 1,
          streak: 1,
          country: 1,
          badge: 1,
          createdAt: 1,
          lastSolvedDate: 1
        }
      }
    ]);

    // Add rank to each user
    const leaderboardData = users.map((user, index) => ({
      rank: index + 1,
      username: user.username,
      avatar: null,
      totalSolved: user.totalSolved,
      easy: user.easy,
      medium: user.medium,
      hard: user.hard,
      points: user.points,
      streak: user.streak,
      joinDate: user.createdAt ? user.createdAt.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Unknown',
      country: user.country || '🌍',
      badge: user.badge
    }));

    res.json({
      success: true,
      timeframe,
      data: leaderboardData,
      total: leaderboardData.length,
      lastUpdated: new Date().toISOString()
    });

  } catch (error) {
    console.error('Leaderboard error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch leaderboard data',
      error: error.message 
    });
  }
});

// POST /api/save-progress - Save user progress after solving a challenge
router.post('/save-progress', authenticateToken, async (req, res) => {
  try {
    const { challengeId, status, difficulty = 'easy' } = req.body;
    const userId = req.user.userId || req.user.id; // Handle both userId and id
    
    console.log('🔍 Save progress request:', { 
      challengeId, 
      status, 
      difficulty, 
      userId, 
      userFromToken: req.user 
    });

    if (!challengeId || !status) {
      return res.status(400).json({ 
        success: false, 
        message: 'challengeId and status are required' 
      });
    }

    // Find the user and initialize progress fields if missing
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found. Please log in again.' 
      });
    }

    // Initialize progress fields if they don't exist (migration for existing users)
    let userUpdated = false;
    if (user.totalSolved === undefined) {
      user.totalSolved = 0;
      userUpdated = true;
    }
    if (user.easy === undefined) {
      user.easy = 0;
      userUpdated = true;
    }
    if (user.medium === undefined) {
      user.medium = 0;
      userUpdated = true;
    }
    if (user.hard === undefined) {
      user.hard = 0;
      userUpdated = true;
    }
    if (user.points === undefined) {
      user.points = 0;
      userUpdated = true;
    }
    if (user.streak === undefined) {
      user.streak = 0;
      userUpdated = true;
    }
    if (user.solvedChallenges === undefined) {
      user.solvedChallenges = [];
      userUpdated = true;
    }
    if (user.country === undefined) {
      user.country = '🌍';
      userUpdated = true;
    }
    if (user.badge === undefined) {
      user.badge = 'Beginner';
      userUpdated = true;
    }

    // Save the user if we updated any fields
    if (userUpdated) {
      await user.save();
      console.log(`✅ Migrated user ${user.username} with progress fields`);
    }

    // Check if challenge already solved
    const existingSolution = user.solvedChallenges.find(
      challenge => challenge.challengeId === challengeId && challenge.status === 'solved'
    );

    let pointsEarned = 0;
    let isNewSolution = false;

    if (status === 'solved' && !existingSolution) {
      // New solution - award points and update stats
      isNewSolution = true;
      pointsEarned = user.calculatePoints(difficulty);
      
      // Update challenge record
      const existingChallengeIndex = user.solvedChallenges.findIndex(
        challenge => challenge.challengeId === challengeId
      );

      if (existingChallengeIndex >= 0) {
        // Update existing attempted challenge to solved
        user.solvedChallenges[existingChallengeIndex] = {
          challengeId,
          difficulty,
          status: 'solved',
          pointsEarned,
          solvedAt: new Date()
        };
      } else {
        // Add new solved challenge
        user.solvedChallenges.push({
          challengeId,
          difficulty,
          status: 'solved',
          pointsEarned,
          solvedAt: new Date()
        });
      }

      // Update user stats
      user.totalSolved += 1;
      user.points += pointsEarned;
      
      // Update difficulty count
      if (difficulty === 'easy') user.easy += 1;
      else if (difficulty === 'medium') user.medium += 1;
      else if (difficulty === 'hard') user.hard += 1;

      // Update streak
      user.updateStreak();

      // Update badge
      user.badge = user.calculateBadge();

    } else if (status === 'attempted') {
      // Just attempted - save attempt if not already saved
      const existingAttempt = user.solvedChallenges.find(
        challenge => challenge.challengeId === challengeId
      );

      if (!existingAttempt) {
        user.solvedChallenges.push({
          challengeId,
          difficulty,
          status: 'attempted',
          pointsEarned: 0,
          solvedAt: new Date()
        });
      }
    }

    // Save the updated user
    await user.save();

    res.json({
      success: true,
      message: isNewSolution ? 'Challenge solved! Progress saved.' : 'Progress saved.',
      userId,
      challengeId,
      status,
      pointsEarned,
      isNewSolution,
      userStats: {
        totalSolved: user.totalSolved,
        points: user.points,
        streak: user.streak,
        badge: user.badge
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Save progress error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to save progress',
      error: error.message 
    });
  }
});

// GET /api/user-progress/:userId - Get user progress
router.get('/user-progress/:userId', optionalAuth, async (req, res) => {
  try {
    const { userId } = req.params;
    
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.json({
      success: true,
      userId,
      username: user.username,
      totalSolved: user.totalSolved,
      easySolved: user.easy,
      mediumSolved: user.medium,
      hardSolved: user.hard,
      currentStreak: user.streak,
      totalPoints: user.points,
      badge: user.badge,
      country: user.country,
      joinDate: user.createdAt,
      lastSolvedDate: user.lastSolvedDate,
      solvedChallenges: user.solvedChallenges
    });

  } catch (error) {
    console.error('User progress error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch user progress',
      error: error.message 
    });
  }
});

// POST /api/submit-solution - Submit and test a solution with actual execution
router.post('/submit-solution', optionalAuth, async (req, res) => {
  try {
    const { challengeId, code, language } = req.body;

    if (!challengeId || !code || !language) {
      return res.status(400).json({
        success: false,
        message: 'challengeId, code, and language are required'
      });
    }

    // Get test cases for the problem
    const problemData = getProblemTestCases(challengeId);
    const testCases = problemData.testCases;

    // Execute the code with actual test cases
    let testResults;
    try {
      const executionResults = await executeCode(code, language, testCases, challengeId);
      const passedCount = executionResults.filter(t => t.status === 'passed').length;
      
      testResults = {
        testsPassed: passedCount,
        totalTests: executionResults.length,
        executionTime: executionResults.reduce((sum, t) => sum + parseInt(t.executionTime), 0) + 'ms',
        memoryUsage: '12.3MB'
      };
    } catch (execError) {
      // If code execution fails completely
      testResults = {
        testsPassed: 0,
        totalTests: testCases.length,
        executionTime: '0ms',
        memoryUsage: '0MB'
      };
    }

    res.json({
      success: true,
      message: 'Solution submitted successfully!',
      submissionId: `sub_${Date.now()}`,
      challengeId,
      language,
      status: 'received',
      results: testResults
    });

  } catch (error) {
    console.error('Submit solution error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit solution',
      error: error.message
    });
  }
});

// POST /api/run-tests - Run code tests with actual execution
router.post('/run-tests', optionalAuth, async (req, res) => {
  try {
    const { challengeId, code, language } = req.body;

    if (!challengeId || !code || !language) {
      return res.status(400).json({
        success: false,
        message: 'challengeId, code, and language are required'
      });
    }

    // Get test cases for the problem
    const problemData = getProblemTestCases(challengeId);
    const testCases = problemData.testCases;

    // Execute the code with actual test cases
    try {
      const testResults = await executeCode(code, language, testCases, challengeId);
      
      res.json({
        success: true,
        results: testResults,
        summary: {
          passed: testResults.filter(t => t.status === 'passed').length,
          total: testResults.length,
          executionTime: testResults.reduce((sum, t) => sum + parseInt(t.executionTime), 0) + 'ms',
          memoryUsage: '12.3MB'
        }
      });
    } catch (execError) {
      // If code execution fails completely
      const failedResults = testCases.map((_, index) => ({
        testCase: index + 1,
        status: 'failed',
        input: 'Test Case ' + (index + 1),
        expected: 'Expected Output',
        actual: `Error: ${execError.message}`,
        executionTime: '0ms'
      }));

      res.json({
        success: true,
        results: failedResults,
        summary: {
          passed: 0,
          total: failedResults.length,
          executionTime: '0ms',
          memoryUsage: '0MB'
        }
      });
    }

  } catch (error) {
    console.error('Run tests error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to run tests',
      error: error.message
    });
  }
});

// POST /api/migrate-users - Migrate all existing users to have progress fields
router.post('/migrate-users', async (req, res) => {
  try {
    // Find all users without progress fields
    const users = await User.find({});
    let migratedCount = 0;

    for (const user of users) {
      let userUpdated = false;
      
      // Add missing fields with default values
      if (user.totalSolved === undefined) {
        user.totalSolved = 0;
        userUpdated = true;
      }
      if (user.easy === undefined) {
        user.easy = 0;
        userUpdated = true;
      }
      if (user.medium === undefined) {
        user.medium = 0;
        userUpdated = true;
      }
      if (user.hard === undefined) {
        user.hard = 0;
        userUpdated = true;
      }
      if (user.points === undefined) {
        user.points = 0;
        userUpdated = true;
      }
      if (user.streak === undefined) {
        user.streak = 0;
        userUpdated = true;
      }
      if (user.lastSolvedDate === undefined) {
        user.lastSolvedDate = null;
        userUpdated = true;
      }
      if (!user.solvedChallenges || user.solvedChallenges.length === 0) {
        user.solvedChallenges = [];
        userUpdated = true;
      }
      if (user.country === undefined) {
        user.country = '🌍';
        userUpdated = true;
      }
      if (user.badge === undefined) {
        user.badge = 'Beginner';
        userUpdated = true;
      }

      if (userUpdated) {
        await user.save();
        migratedCount++;
        console.log(`✅ Migrated user: ${user.username}`);
      }
    }

    res.json({
      success: true,
      message: `Migration completed. Updated ${migratedCount} users.`,
      totalUsers: users.length,
      migratedUsers: migratedCount
    });

  } catch (error) {
    console.error('Migration error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to migrate users',
      error: error.message
    });
  }
});

// GET /api/debug-user/:userId - Debug user by ID
router.get('/debug-user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(`🔍 Looking for user with ID: ${userId}`);
    
    const user = await User.findById(userId);
    if (!user) {
      console.log(`❌ User not found with ID: ${userId}`);
      return res.status(404).json({ 
        success: false, 
        message: 'User not found',
        userId 
      });
    }

    console.log(`✅ Found user:`, user.username);
    const { password, ...userInfo } = user.toObject();
    res.json({
      success: true,
      user: userInfo
    });

  } catch (error) {
    console.error('Debug user error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to debug user',
      error: error.message
    });
  }
});

export default router;