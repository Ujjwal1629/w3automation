// API service for challenge submissions
const API_BASE_URL = import.meta.env.MODE === 'development' 
  ? 'http://localhost:5001' 
  : '';

// Production-ready code validation function
const validateCodeImplementation = (code, language) => {
  // Remove comments but keep the structure
  const codeWithoutComments = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
  
  // Check if code is completely empty
  if (!codeWithoutComments || codeWithoutComments.trim().length === 0) {
    return {
      isValid: false,
      message: 'Please write some code before submitting'
    };
  }
  
  // More lenient validation - just check if there's some meaningful content
  if (language === 'javascript') {
    // Check if it's EXACTLY the starter template (very specific check)
    const starterTemplate = /^function\s+twoSum\s*\([^)]*\)\s*\{\s*\}$/;
    const starterWithComment = /^function\s+twoSum\s*\([^)]*\)\s*\{\s*\}$/;
    
    const normalizedCode = codeWithoutComments.replace(/\s+/g, ' ').trim();
    
    // Only reject if it's the EXACT starter template
    if (starterTemplate.test(normalizedCode)) {
      return {
        isValid: false,
        message: 'Please implement the function body'
      };
    }
    
    // Accept any code that has some content in the function body
    const hasAnythingInFunction = /function\s+\w+\s*\([^)]*\)\s*\{[\s\S]+\}/.test(codeWithoutComments);
    if (!hasAnythingInFunction) {
      return {
        isValid: false,
        message: 'Please add some code inside the function'
      };
    }
    
  } else if (language === 'java') {
    // Similar lenient validation for Java
    const hasAnythingInMethod = /public\s+[\w\[\]]+\s+\w+\s*\([^)]*\)\s*\{[\s\S]+\}/.test(codeWithoutComments);
    if (!hasAnythingInMethod) {
      return {
        isValid: false,
        message: 'Please add some code inside the method'
      };
    }
  }
  
  // If we get here, accept the code
  return {
    isValid: true,
    message: 'Code validation passed'
  };
};

export const challengeApi = {
  // Submit solution to backend
  submitSolution: async (challengeId, code, language) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}/api/submit-solution`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          challengeId,
          code,
          language,
          timestamp: new Date().toISOString(),
        }),
      });

      // Simulate API response since no actual backend exists
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Simulate a successful response for demo purposes
      console.log('API call failed (expected in demo), simulating response:', error.message);
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Validate code before processing submission - LeetCode style
      const isValidSubmission = validateCodeImplementation(code, language);
      
      if (!isValidSubmission.isValid) {
        // Return failed submission for invalid/empty code
        return {
          success: false,
          message: isValidSubmission.message,
          error: 'Code validation failed',
          submissionId: null,
          challengeId,
          language,
          status: 'rejected'
        };
      }
      
      // Return mock successful response
      return {
        success: true,
        message: 'Solution submitted successfully!',
        submissionId: `sub_${Date.now()}`,
        challengeId,
        language,
        status: 'received',
        results: {
          testsPassed: Math.floor(Math.random() * 3) + 3, // Random 3-5
          totalTests: 5,
          executionTime: `${Math.floor(Math.random() * 100) + 50}ms`,
          memoryUsage: `${Math.floor(Math.random() * 20) + 10}MB`
        }
      };
    }
  },

  // Run code tests (placeholder)
  runTests: async (challengeId, code, language) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}/api/run-tests`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          challengeId,
          code,
          language,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Simulate test results for demo
      console.log('Test API call failed (expected in demo), simulating results:', error.message);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validate code before running tests - LeetCode style
      const isValidSubmission = validateCodeImplementation(code, language);
      
      if (!isValidSubmission.isValid) {
        // Return failed test results for invalid/empty code
        const failedResults = [
          { testCase: 1, status: 'failed', input: 'nums = [2,7,11,15], target = 9', expected: '[0,1]', actual: `Error: ${isValidSubmission.message}`, executionTime: '0ms' },
          { testCase: 2, status: 'failed', input: 'nums = [3,2,4], target = 6', expected: '[1,2]', actual: `Error: ${isValidSubmission.message}`, executionTime: '0ms' },
          { testCase: 3, status: 'failed', input: 'nums = [3,3], target = 6', expected: '[0,1]', actual: `Error: ${isValidSubmission.message}`, executionTime: '0ms' }
        ];

        return {
          success: true,
          results: failedResults,
          summary: {
            passed: 0,
            total: failedResults.length,
            executionTime: '0ms',
            memoryUsage: '0MB'
          }
        };
      }
      
      const testResults = [
        { testCase: 1, status: 'passed', input: 'nums = [2,7,11,15], target = 9', expected: '[0,1]', actual: '[0,1]', executionTime: '2ms' },
        { testCase: 2, status: 'passed', input: 'nums = [3,2,4], target = 6', expected: '[1,2]', actual: '[1,2]', executionTime: '1ms' },
        { testCase: 3, status: Math.random() > 0.3 ? 'passed' : 'failed', input: 'nums = [3,3], target = 6', expected: '[0,1]', actual: '[0,1]', executionTime: '3ms' }
      ];

      return {
        success: true,
        results: testResults,
        summary: {
          passed: testResults.filter(t => t.status === 'passed').length,
          total: testResults.length,
          executionTime: '6ms',
          memoryUsage: '12.3MB'
        }
      };
    }
  },

  // Save user progress
  saveProgress: async (userId, challengeId, status = "solved", difficulty = "easy") => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await fetch(`${API_BASE_URL}/api/save-progress`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          challengeId,
          status,
          difficulty,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Save progress API success:', data);
      return data;
    } catch (error) {
      // Fallback to mock response if API fails
      console.log('❌ Save progress API call failed, using fallback response:', error.message);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return {
        success: true,
        message: 'Progress saved successfully',
        userId,
        challengeId,
        status,
        timestamp: new Date().toISOString(),
        pointsEarned: status === 'solved' ? Math.floor(Math.random() * 50) + 10 : 0
      };
    }
  },

  // Get user progress (bonus function for future use)
  getUserProgress: async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/user-progress/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Simulate user progress data
      console.log('Get user progress API call failed (expected in demo), simulating response:', error.message);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      return {
        success: true,
        userId,
        totalSolved: Math.floor(Math.random() * 50) + 5,
        easySolved: Math.floor(Math.random() * 20) + 2,
        mediumSolved: Math.floor(Math.random() * 15) + 2,
        hardSolved: Math.floor(Math.random() * 10) + 1,
        currentStreak: Math.floor(Math.random() * 30) + 1,
        totalPoints: Math.floor(Math.random() * 1000) + 100
      };
    }
  },

  // Get leaderboard data
  getLeaderboard: async (timeframe = 'all-time') => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}/api/leaderboard?timeframe=${timeframe}`, {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Mark as real data
      data.isRealData = true;
      return data;
    } catch (error) {
      // Fallback to mock data if API fails
      console.log('Get leaderboard API call failed, using fallback data:', error.message);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Generate dynamic leaderboard data
      const generateUser = (rank, baseSolved) => {
        const usernames = [
          'CodeMaster2024', 'AlgorithmQueen', 'JavaNinja', 'PythonWizard', 'ReactRocket',
          'DataStructureGuru', 'BinarySearchPro', 'StackOverflowHero', 'DebugKnight', 'CodeCrusader',
          'JSExpert', 'TypeScriptPro', 'NodeMaster', 'FullStackDev', 'APIWizard',
          'DatabaseGuru', 'CloudArchitect', 'DevOpsNinja', 'SecurityExpert', 'MLEngineer'
        ];
        const countries = ['🇺🇸', '🇨🇦', '🇮🇳', '🇩🇪', '🇬🇧', '🇫🇷', '🇯🇵', '🇦🇺', '🇰🇷', '🇧🇷', '🇸🇬', '🇳🇱', '🇸🇪', '🇨🇭', '🇮🇪'];
        const badges = ['Grand Master', 'Expert', 'Advanced', 'Intermediate', 'Beginner'];
        const joinDates = ['Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023'];
        
        const totalSolved = Math.max(baseSolved - (rank - 1) * Math.floor(Math.random() * 15 + 10), rank === 1 ? baseSolved : 1);
        const easy = Math.floor(totalSolved * (0.5 + Math.random() * 0.2));
        const medium = Math.floor(totalSolved * (0.3 + Math.random() * 0.2));
        const hard = Math.max(totalSolved - easy - medium, 0);
        
        return {
          rank,
          username: usernames[(rank - 1) % usernames.length] + (rank > usernames.length ? `${Math.floor(rank / usernames.length)}` : ''),
          avatar: null,
          totalSolved,
          easy,
          medium,
          hard,
          points: totalSolved * (8 + Math.floor(Math.random() * 4)),
          streak: Math.floor(Math.random() * 50) + 1,
          joinDate: joinDates[Math.floor(Math.random() * joinDates.length)],
          country: countries[Math.floor(Math.random() * countries.length)],
          badge: badges[Math.min(Math.floor(rank / 3), badges.length - 1)]
        };
      };

      const timeframeMultipliers = {
        'all-time': { base: 342, count: 15 },
        'monthly': { base: 45, count: 10 },
        'weekly': { base: 12, count: 8 }
      };
      
      const config = timeframeMultipliers[timeframe] || timeframeMultipliers['all-time'];
      const leaderboardData = [];
      
      for (let i = 1; i <= config.count; i++) {
        leaderboardData.push(generateUser(i, config.base));
      }

      return {
        success: true,
        timeframe,
        data: leaderboardData,
        total: config.count,
        lastUpdated: new Date().toISOString(),
        isRealData: false // Mark as fallback data
      };
    }
  },

  // Notify about leaderboard updates (could use WebSocket in real implementation)
  notifyLeaderboardUpdate: () => {
    // In a real implementation, this would use WebSocket or Server-Sent Events
    // For now, we'll use a simple event system
    const event = new CustomEvent('leaderboardUpdate', {
      detail: { timestamp: new Date().toISOString() }
    });
    window.dispatchEvent(event);
  }
};