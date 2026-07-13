import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Route mapping for /api/auth/register
router.post('/register', registerUser);

// Route mapping for /api/auth/login
router.post('/login', loginUser);

export default router;
