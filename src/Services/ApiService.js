import axios from "axios";
import PropTypes from "prop-types";

//const MOCK_DATA = "./mockData.js";
const API_END_POINT = "http://localhost:5000";

const apiService = {
  /**
   * Récupère les données d'un utilisateur.
   * @param {number} userId - L'ID de l'utilisateur.
   * @returns {Promise<Object>} Les données de l'utilisateur.
   * @throws {Error} Lance une erreur si la requête échoue.
   */
  getUserData: async (userId) => {
    try {
      const response = await axios.get(`${API_END_POINT}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Erreur fetch user data", error);
      throw error;
    }
  },

  /**
   * Récupère les activitées d'un utilisateur.
   * @param {number} userId - L'ID de l'utilisateur.
   * @returns {Promise<Object>} Les données de l'utilisateur.
   * @throws {Error} Lance une erreur si la requête échoue.
   */
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

  /**
   * Récupère les sessions d'un utilisateur.
   * @param {number} userId - L'ID de l'utilisateur.
   * @returns {Promise<Object>} Les données de l'utilisateur.
   * @throws {Error} Lance une erreur si la requête échoue.
   */
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

  /**
   * Récupère les performances d'un utilisateur.
   * @param {number} userId - L'ID de l'utilisateur.
   * @returns {Promise<Object>} Les données de l'utilisateur.
   * @throws {Error} Lance une erreur si la requête échoue.
   */
  getUserPerformance: async (userId) => {
    try {
      const response = await axios.get(
        `${API_END_POINT}/user/${userId}/performance`
      );
      return response.data;
    } catch (error) {
      console.error("Erreur fetch user performance", error);
      throw error;
    }
  },
};

apiService.getUserData.propTypes = {
  userId: PropTypes.number.isRequired,
};

apiService.getUserActivity.propTypes = {
  userId: PropTypes.number.isRequired,
};

apiService.getUserAverageSessions.propTypes = {
  userId: PropTypes.number.isRequired,
};

apiService.getUserPerformance.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default apiService;
