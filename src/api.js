import axios from 'axios';

// Define the base URL based on environment
const getBaseURL = () => {
  return 'https://w3-backend-salvatores-projects-9d7f38e8.vercel.app/api';
};

const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
});

export default api;
