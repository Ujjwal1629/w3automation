import axios from 'axios';

// Define the base URL based on environment
const getBaseURL = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5001/api';
  } else {
    // Replace with your actual Render backend URL
    return 'https://w3automation.onrender.com/api';
  }
};

const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
});

export default api;
