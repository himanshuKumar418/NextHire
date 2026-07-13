import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters']
    },
    college: {
      type: String,
      required: [true, 'College is required'],
      trim: true
    },
    currentYear: {
      type: String,
      required: [true, 'Current year is required'],
      enum: ['2nd Year', '3rd Year', '4th Year', 'Passout']
    },
    targetCompany: {
      type: String,
      required: [true, 'Target company is required'],
      default: 'Wipro',
      enum: ['Infosys', 'TCS', 'Accenture', 'Capgemini', 'Cognizant', 'Wipro', 'IBM', 'LTIMindtree', 'Deloitte', 'Other']
    },
     role: {
      type: String,
      required: true,
      default: 'student',
      enum: ['student', 'admin']
    },
    phone: {
      type: String,
      default: ''
    },
    branch: {
      type: String,
      default: ''
    },
    graduationYear: {
      type: String,
      default: ''
    },
    cgpa: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    linkedin: {
      type: String,
      default: ''
    },
    github: {
      type: String,
      default: ''
    },
    portfolio: {
      type: String,
      default: ''
    },
    resume: {
      type: String,
      default: ''
    },
    skills: {
      type: [String],
      default: []
    },
    profilePicture: {
      type: String,
      default: ''
    },
    packageGoal: {
      type: String,
      default: ''
    },
    preferredRole: {
      type: String,
      default: ''
    },
    preferredLocation: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

// Pre-save middleware to hash password before saving user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

export default User;
