import express from 'express';
import cors from 'cors';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';


const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Parse incoming request payloads as JSON
app.use(express.json());

// Parse URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Status check route
app.get('/api/status', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'NextHire API Server is running and healthy',
    timestamp: new Date()
  });
});

// Auth routing rules
app.use('/api/auth', authRoutes);

// Dashboard routing rules
app.use('/api/dashboard', dashboardRoutes);

// User routing rules
import userRoutes from './routes/userRoutes.js';
app.use('/api/user', userRoutes);

// Register Fallback Routing Handlers for Unmatched Requests
app.use(notFound);
app.use(errorHandler);

export default app;
