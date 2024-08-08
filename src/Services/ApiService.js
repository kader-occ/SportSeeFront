import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const apiService = {
  getUserData: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user data", error);
      throw error;
    }
  },
  getUserSessions: async (userId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/users/${userId}/sessions`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user sessions", error);
      throw error;
    }
  },
  getUserCalories: async (userId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/users/${userId}/calories`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user calories", error);
      throw error;
    }
  },
};

export default apiService;
