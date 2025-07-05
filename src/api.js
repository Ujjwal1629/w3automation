import axios from 'axios';

// Define the base URL based on environment
const getBaseURL = () => {
  if (import.meta.env.DEV) {
    return 'http://localhost:5001/api';
  } else {
    return 'https://w3automation.onrender.com/api';
  }
};

const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
});

export default api;
