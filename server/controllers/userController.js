import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import UserProgress from '../models/UserProgress.js';

/**
 * @desc    Get user profile
 * @route   GET /api/user/profile
 * @access  Private
 */
export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update user profile
 * @route   PUT /api/user/profile
 * @access  Private
 */
export const resetCompanyProgress = async (userId, companyName = 'Wipro') => {
  await UserProgress.findOneAndUpdate(
    { userId, companyName },
    {
      $set: {
        readiness: 0,
        codingProgress: 0,
        coreProgress: 0,
        aptitudeProgress: 0,
        interviewProgress: 0,
        completedTasks: [],
        completedPyqs: [],
        completedChallenges: [],
        topicStats: {}
      }
    },
    { new: true, upsert: true }
  );
};

export const updateUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isCompanyChanged = req.body.targetCompany !== undefined && req.body.targetCompany !== user.targetCompany;

    const fieldsToUpdate = [
      'name', 'phone', 'college', 'branch', 'cgpa', 'graduationYear', 'city',
      'linkedin', 'github', 'portfolio', 'resume', 'skills', 'profilePicture',
      'targetCompany', 'packageGoal', 'preferredRole', 'preferredLocation'
    ];

    fieldsToUpdate.forEach((field) => {
      if (req.body[field] !== undefined) {
        user[field] = req.body[field];
      }
    });

    // If email is being changed, check uniqueness
    if (req.body.email && req.body.email.toLowerCase() !== user.email.toLowerCase()) {
      const emailExists = await User.findOne({ email: req.body.email.toLowerCase() });
      if (emailExists) {
        return res.status(400).json({ success: false, message: 'Email already exists' });
      }
      user.email = req.body.email.toLowerCase();
    }



    const updatedUser = await user.save();
    
    // Convert to object and omit password
    const userObj = updatedUser.toObject();
    delete userObj.password;

    return res.status(200).json({ success: true, user: userObj });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Change user password
 * @route   PUT /api/user/profile/change-password
 * @access  Private
 */
export const changePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({ success: false, message: 'Old and new passwords are required' });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Incorrect old password' });
    }

    user.password = newPassword;
    await user.save();

    return res.status(200).json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete user account
 * @route   DELETE /api/user/profile
 * @access  Private
 */
export const deleteAccount = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    await User.deleteOne({ _id: req.user.id });

    return res.status(200).json({ success: true, message: 'Account deleted successfully' });
  } catch (error) {
    next(error);
  }
};
