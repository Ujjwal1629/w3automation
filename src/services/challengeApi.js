// API service for challenge submissions
const API_BASE_URL = import.meta.env.MODE === 'development' 
  ? 'http://localhost:5001' 
  : '';

// LeetCode-style code validation function
const validateCodeImplementation = (code, language) => {
  // Remove all whitespace and normalize for comparison
  const normalizeCode = (str) => str.replace(/\s+/g, ' ').trim().toLowerCase();
  
  // Remove comments
  const codeWithoutComments = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
  
  // Check if code is empty or only whitespace
  if (!codeWithoutComments || codeWithoutComments.trim().length === 0) {
    return {
      isValid: false,
      message: 'Please write some code before submitting'
    };
  }
  
  const normalizedCode = normalizeCode(codeWithoutComments);
  
  // Language-specific validation
  if (language === 'javascript') {
    // Check for JavaScript-specific patterns that indicate no implementation
    
    // Common starter code patterns that should be considered "empty"
    const jsStarterPatterns = [
      // Basic function with empty body or just comments
      /function\s+\w+\s*\([^)]*\)\s*{\s*}$/,
      /function\s+\w+\s*\([^)]*\)\s*{\s*\/\/[^}]*}$/,
      /function\s+\w+\s*\([^)]*\)\s*{\s*\/\*[^}]*\*\/\s*}$/,
      
      // Arrow function patterns
      /=>\s*{\s*}$/,
      /=>\s*{\s*\/\/[^}]*}$/,
      /=>\s*{\s*\/\*[^}]*\*\/\s*}$/,
    ];
    
    // Check against starter patterns
    for (const pattern of jsStarterPatterns) {
      if (pattern.test(normalizedCode)) {
        return {
          isValid: false,
          message: 'Please implement the function body'
        };
      }
    }
    
    // Check for specific placeholder comments that indicate no implementation
    const placeholderComments = [
      'write your solution here',
      'write your code here',
      'implement your solution',
      'todo',
      'your code goes here',
      'add your code here'
    ];
    
    const hasOnlyPlaceholders = placeholderComments.some(placeholder => {
      const codeWithoutPlaceholder = normalizedCode.replace(new RegExp(placeholder, 'gi'), '').trim();
      // If after removing placeholder comments, we only have function signature, it's not implemented
      return codeWithoutPlaceholder.match(/^function\s+\w+\s*\([^)]*\)\s*{\s*}$/) || 
             codeWithoutPlaceholder.match(/^=>\s*{\s*}$/);
    });
    
    if (hasOnlyPlaceholders) {
      return {
        isValid: false,
        message: 'Please replace the placeholder comments with actual code'
      };
    }
    
    // Check for meaningful code content
    // Must have some logic beyond just function declaration
    const hasReturnStatement = /return\s+(?!$|;|\s*})/.test(normalizedCode);
    const hasVariableDeclaration = /\b(?:let|const|var)\s+\w+/.test(normalizedCode);
    const hasLoop = /\b(?:for|while|do)\s*[\(\{]/.test(normalizedCode);
    const hasConditional = /\b(?:if|switch)\s*[\(\{]/.test(normalizedCode);
    const hasMethodCall = /\w+\.\w+\s*\(/.test(normalizedCode);
    const hasArrayAccess = /\w+\[\w*\]/.test(normalizedCode);
    const hasMathOperation = /[\+\-\*\/\%]\s*\w+/.test(normalizedCode);
    
    // Must have at least one meaningful programming construct
    if (!hasReturnStatement && !hasVariableDeclaration && !hasLoop && 
        !hasConditional && !hasMethodCall && !hasArrayAccess && !hasMathOperation) {
      return {
        isValid: false,
        message: 'Please implement the function with actual logic'
      };
    }
    
  } else if (language === 'java') {
    // Java-specific validation
    const javaStarterPatterns = [
      /class\s+\w+\s*{\s*public\s+[\w\[\]]+\s+\w+\s*\([^)]*\)\s*{\s*}\s*}$/,
      /public\s+[\w\[\]]+\s+\w+\s*\([^)]*\)\s*{\s*}$/,
    ];
    
    for (const pattern of javaStarterPatterns) {
      if (pattern.test(normalizedCode)) {
        return {
          isValid: false,
          message: 'Please implement the method body'
        };
      }
    }
    
    // Check for meaningful Java code
    const hasReturnStatement = /return\s+(?!$|;|\s*})/.test(normalizedCode);
    const hasVariableDeclaration = /\b(?:int|string|boolean|double|float|char|long)\s+\w+/.test(normalizedCode);
    const hasLoop = /\b(?:for|while|do)\s*[\(\{]/.test(normalizedCode);
    const hasConditional = /\b(?:if|switch)\s*[\(\{]/.test(normalizedCode);
    const hasMethodCall = /\w+\.\w+\s*\(/.test(normalizedCode);
    const hasArrayAccess = /\w+\[\w*\]/.test(normalizedCode);
    
    if (!hasReturnStatement && !hasVariableDeclaration && !hasLoop && 
        !hasConditional && !hasMethodCall && !hasArrayAccess) {
      return {
        isValid: false,
        message: 'Please implement the method with actual logic'
      };
    }
  }
  
  // If we get here, the code appears to have meaningful implementation
  return {
    isValid: true,
    message: 'Code validation passed'
  };
};

export const challengeApi = {
  // Submit solution to backend
  submitSolution: async (challengeId, code, language) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/submit-solution`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
      const response = await fetch(`${API_BASE_URL}/api/run-tests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
  saveProgress: async (userId, challengeId, status = "solved") => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/save-progress`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          challengeId,
          status,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Simulate successful progress saving for demo
      console.log('Save progress API call failed (expected in demo), simulating response:', error.message);
      
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
      const response = await fetch(`${API_BASE_URL}/api/leaderboard?timeframe=${timeframe}`, {
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
      // Simulate leaderboard data for demo
      console.log('Get leaderboard API call failed (expected in demo), simulating response:', error.message);
      
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
        lastUpdated: new Date().toISOString()
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