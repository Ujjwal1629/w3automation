// User service for handling user identification and authentication
export const userService = {
  // Get current user ID (from localStorage, JWT token, or generate temporary ID)
  getCurrentUserId: () => {
    // First, check if user is logged in via JWT token
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.userId || payload.id || payload.username || payload.email;
      } catch (error) {
        console.log('Invalid token, using anonymous user');
      }
    }

    // If no valid token, check for existing anonymous user ID
    let anonymousUserId = localStorage.getItem('anonymousUserId');
    if (!anonymousUserId) {
      // Generate a new anonymous user ID
      anonymousUserId = `anon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('anonymousUserId', anonymousUserId);
    }

    return anonymousUserId;
  },

  // Get current user info
  getCurrentUser: () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return {
          id: payload.userId || payload.id || payload.username || payload.email,
          username: payload.username || payload.name || payload.email || 'User',
          email: payload.email,
          isAuthenticated: true,
          isAnonymous: false
        };
      } catch (error) {
        console.log('Invalid token');
      }
    }

    // Return anonymous user
    const anonymousUserId = userService.getCurrentUserId();
    return {
      id: anonymousUserId,
      username: 'Anonymous User',
      email: null,
      isAuthenticated: false,
      isAnonymous: true
    };
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      // Check if token is expired
      const currentTime = Date.now() / 1000;
      if (payload.exp && payload.exp < currentTime) {
        localStorage.removeItem('token');
        return false;
      }
      return true;
    } catch (error) {
      localStorage.removeItem('token');
      return false;
    }
  }
};