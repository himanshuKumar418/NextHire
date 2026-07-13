import User from '../models/User.js';
import UserProgress from '../models/UserProgress.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt.js';


/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
export const registerUser = async (req, res, next) => {
  try {
    const { fullName, email, password, college, currentYear, targetCompany } = req.body;

    // 1. Basic Required Fields Check
    if (!fullName || !email || !password || !college || !currentYear) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // 2. Password Length Validation
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters'
      });
    }

    // 3. Unique Email Check
    const emailExists = await User.findOne({ email: email.toLowerCase() });
    if (emailExists) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }

    // 4. Create and Save User (hashing is handled by User model pre-save hook)
    const newUser = await User.create({
      name: fullName,
      email,
      password,
      college,
      currentYear,
      targetCompany: targetCompany || 'Wipro'
    });

    // 5. Automatically create UserProgress document
    await UserProgress.create({
      userId: newUser._id
    });

    return res.status(201).json({
      success: true,
      message: 'Registration Successful'
    });
  } catch (error) {
    // Forward error to express global error handler middleware
    next(error);
  }
};

/**
 * @desc    Login user & get token
 * @route   POST /api/auth/login
 * @access  Public
 */
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1. Validate both fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    // 2. Find user by email
    const user = await User.findOne({ email: email.toLowerCase() });

    // 3. If user does not exist: Return 401
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // 4. Compare password using bcrypt.compare()
    const isMatch = await bcrypt.compare(password, user.password);

    // 5. If password is incorrect: Return 401
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // 6. Generate JWT using the existing jwt utility
    const token = generateToken(user._id);

    // 7. Return success response
    return res.status(200).json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        college: user.college,
        currentYear: user.currentYear,
        targetCompany: user.targetCompany,
        role: user.role
      }
    });
  } catch (error) {
    next(error);
  }
};

