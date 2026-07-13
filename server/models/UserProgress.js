import mongoose from 'mongoose';

const UserProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  companyName: {
    type: String,
    required: true,
    default: 'Wipro'
  },
  xp: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  readiness: {
    type: Number,
    default: 0
  },
  codingProgress: {
    type: Number,
    default: 0
  },
  coreProgress: {
    type: Number,
    default: 0
  },
  aptitudeProgress: {
    type: Number,
    default: 0
  },
  interviewProgress: {
    type: Number,
    default: 0
  },
  streak: {
    type: Number,
    default: 0
  },
  completedTasks: {
    type: [String],
    default: []
  },
  completedPyqs: {
    type: [String],
    default: []
  },
  completedChallenges: {
    type: [String],
    default: []
  },
  topicStats: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
}, {
  timestamps: true
});

// Ensure a user has only one progress document per target company
UserProgressSchema.index({ userId: 1, companyName: 1 }, { unique: true });

const UserProgress = mongoose.model('UserProgress', UserProgressSchema);
export default UserProgress;
