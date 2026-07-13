import jwt from 'jsonwebtoken';

/**
 * Generate a JWT token for a user
 * @param {string} id - User ID
 * @returns {string} - JWT Token
 */
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};
