import api from './api';

/**
 * Fetch profile data for the logged-in user
 */
export const getUserProfile = async () => {
  const response = await api.get('/user/profile');
  return response.data;
};

/**
 * Update profile data for the logged-in user
 */
export const updateUserProfile = async (profileData) => {
  const response = await api.put('/user/profile', profileData);
  return response.data;
};

/**
 * Change password for the logged-in user
 */
export const changePassword = async (passwords) => {
  const response = await api.put('/user/profile/change-password', passwords);
  return response.data;
};

/**
 * Delete account for the logged-in user
 */
export const deleteAccount = async () => {
  const response = await api.delete('/user/profile');
  return response.data;
};
