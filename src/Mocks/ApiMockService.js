import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mockData";

const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const apiService = {
  getUserData: async (userId) => {
    await simulateDelay(500);
    return USER_MAIN_DATA.find((user) => user.id === parseInt(userId));
  },
  getUserSessions: async (userId) => {
    await simulateDelay(500);
    return USER_ACTIVITY.find((user) => user.userId === parseInt(userId))
      ?.sessions;
  },
  getUserAverageSessions: async (userId) => {
    await simulateDelay(500);
    return USER_AVERAGE_SESSIONS.find(
      (user) => user.userId === parseInt(userId)
    )?.sessions;
  },
  getUserPerformance: async (userId) => {
    await simulateDelay(500);
    return USER_PERFORMANCE.find((user) => user.userId === parseInt(userId));
  },
  getUserCalories: async (userId) => {
    await simulateDelay(500);
    const userData = USER_MAIN_DATA.find(
      (user) => user.id === parseInt(userId)
    );
    return userData ? userData.keyData.calorieCount : null;
  },
};

export default apiService;
