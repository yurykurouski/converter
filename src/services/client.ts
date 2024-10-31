import axios from "axios";

// Create an Axios instance with default configurations
const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL, // Replace with your API base URL
  timeout: 5000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Modify request config if needed, e.g., add authorization token
    // config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Handle response data
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default apiClient;
