import api from './api';

/**
 * Fetch dashboard data for the logged-in user
 * @returns {Promise<Object>} - Dashboard response data containing user and stats
 */
export const getDashboardData = async () => {
  const response = await api.get('/dashboard');
  return response.data;
};

/**
 * Update user XP on completed activity
 * @param {string} activityType 
 * @param {number} rewardXp 
 * @param {boolean} isAdd 
 * @returns {Promise<Object>}
 */
export const updateXp = async (activityType, rewardXp, isAdd = true, itemId = null) => {
  const response = await api.post('/dashboard/update-xp', { activityType, rewardXp, isAdd, itemId });
  return response.data;
};
