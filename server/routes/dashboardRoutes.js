import express from 'express';
import { getDashboardData, updateDashboardXp } from '../controllers/dashboardController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// GET /api/dashboard - Get dashboard statistics for current user
router.get('/', protect, getDashboardData);

// POST /api/dashboard/update-xp - Complete activity and gain XP
router.post('/update-xp', protect, updateDashboardXp);

export default router;
