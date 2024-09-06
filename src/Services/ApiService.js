import axios from "axios";

//const MOCK_DATA = "./mockData.js";
const API_END_POINT = "http://localhost:5000";

const apiService = {
  getUserData: async (userId) => {
    try {
      const response = await axios.get(`${API_END_POINT}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Erreur fetch user data", error);
      throw error;
    }
  },
  getUserActivity: async (userId) => {
    try {
      const response = await axios.get(
        `${API_END_POINT}/user/${userId}/activity`
      );
      return response.data;
    } catch (error) {
      console.error("Erreur fetch user data", error);
      throw error;
    }
  },
  getUserAverageSessions: async (userId) => {
    try {
      const response = await axios.get(
        `${API_END_POINT}/user/${userId}/average-sessions`
      );
      return response.data;
    } catch (error) {
      console.error("Erreur fetch user average-sessions", error);
      throw error;
    }
  },
};

export default apiService;
