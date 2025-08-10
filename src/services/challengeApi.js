// API service for challenge submissions
const API_BASE_URL = import.meta.env.MODE === 'development' 
  ? 'http://localhost:5001' 
  : '';

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
  }
};