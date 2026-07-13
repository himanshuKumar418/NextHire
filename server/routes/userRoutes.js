import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import {
  getUserProfile,
  updateUserProfile,
  changePassword,
  deleteAccount
} from '../controllers/userController.js';

const router = express.Router();

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
  .delete(protect, deleteAccount);

router.put('/profile/change-password', protect, changePassword);

export default router;
