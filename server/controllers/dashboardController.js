import User from '../models/User.js';
import UserProgress from '../models/UserProgress.js';
import { companyConfigs } from '../data/companyData.js';

export const getDashboardData = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const targetCompany = user.targetCompany || 'Wipro';

    let progress = await UserProgress.findOne({ userId, companyName: targetCompany });
    if (!progress) {
      progress = await UserProgress.create({ userId, companyName: targetCompany });
    }

    // Ensure readiness is computed dynamically
    progress.readiness = Math.round(
      (progress.codingProgress + progress.coreProgress + progress.aptitudeProgress + progress.interviewProgress) / 4
    );

    return res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        targetCompany
      },
      progress: enrichProgress(progress),
      companyData: companyConfigs[targetCompany] || companyConfigs.Wipro
    });
  } catch (err) {
    next(err);
  }
};

export const updateDashboardXp = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const targetCompany = user.targetCompany || 'Wipro';
    const { activityType, rewardXp, isAdd, itemId } = req.body;

    let progress = await UserProgress.findOne({ userId, companyName: targetCompany });
    if (!progress) {
      progress = await UserProgress.create({ userId, companyName: targetCompany });
    }

    const direction = isAdd !== false ? 1 : -1;
    let finalXpReward = 0;
    if (activityType === 'dsa' || activityType === 'core' || activityType === 'aptitude') {
      finalXpReward = 20;
    } else if (activityType === 'revision') {
      finalXpReward = 10;
    } else if (activityType === 'pyq') {
      finalXpReward = 30;
    } else if (activityType === 'challenge') {
      finalXpReward = 70;
    } else if (activityType === 'mock') {
      finalXpReward = 100;
    } else if (activityType === 'interview') {
      finalXpReward = 80;
    } else {
      finalXpReward = rewardXp !== undefined ? Number(rewardXp) : 0;
    }
    const addedXp = finalXpReward * direction;

    let codingInc = 0;
    let coreInc = 0;
    let aptitudeInc = 0;
    let interviewInc = 0;

    const taskKey = itemId || activityType;

    if (['dsa', 'core', 'aptitude', 'revision'].includes(activityType)) {
      const isAlreadyCompleted = progress.completedTasks.includes(activityType);
      if (isAdd !== false) {
        if (!isAlreadyCompleted) {
          progress.completedTasks.push(activityType);
          progress.xp = Math.max(0, progress.xp + addedXp);
          if (activityType === 'dsa') codingInc = 6;
          if (activityType === 'core') coreInc = 6;
          if (activityType === 'aptitude') aptitudeInc = 6;
          if (activityType === 'revision') interviewInc = 4;
        }
      } else {
        if (isAlreadyCompleted) {
          progress.completedTasks = progress.completedTasks.filter(id => id !== activityType);
          progress.xp = Math.max(0, progress.xp + addedXp);
          if (activityType === 'dsa') codingInc = -6;
          if (activityType === 'core') coreInc = -6;
          if (activityType === 'aptitude') aptitudeInc = -6;
          if (activityType === 'revision') interviewInc = -4;
        }
      }
    } else if (activityType === 'pyq') {
      const isAlreadyCompleted = progress.completedPyqs.includes(taskKey);
      if (isAdd !== false) {
        if (!isAlreadyCompleted) {
          progress.completedPyqs.push(taskKey);
          progress.xp = Math.max(0, progress.xp + addedXp);
          codingInc = 0;
        }
      } else {
        if (isAlreadyCompleted) {
          progress.completedPyqs = progress.completedPyqs.filter(id => id !== taskKey);
          progress.xp = Math.max(0, progress.xp + addedXp);
          codingInc = 0;
        }
      }
    } else if (activityType === 'challenge') {
      const isAlreadyCompleted = progress.completedChallenges.includes(taskKey);
      if (isAdd !== false) {
        if (!isAlreadyCompleted) {
          progress.completedChallenges.push(taskKey);
          progress.xp = Math.max(0, progress.xp + addedXp);
          codingInc = 0;
        }
      } else {
        if (isAlreadyCompleted) {
          progress.completedChallenges = progress.completedChallenges.filter(id => id !== taskKey);
          progress.xp = Math.max(0, progress.xp + addedXp);
          codingInc = 0;
        }
      }
    } else {
      progress.xp = Math.max(0, progress.xp + addedXp);
    }

    // Update topic stats based on activity
    const topics = getItemTopics(taskKey);
    const topicStats = progress.topicStats || {};
    topics.forEach(topic => {
      if (!topicStats[topic]) {
        topicStats[topic] = { solved: 0, attempts: 0 };
      }
      if (isAdd !== false) {
        topicStats[topic].solved += 1;
        topicStats[topic].attempts += 1 + Math.floor(Math.random() * 3); // 1 to 3 attempts (adds failed attempt variance)
      } else {
        topicStats[topic].solved = Math.max(0, topicStats[topic].solved - 1);
        topicStats[topic].attempts = Math.max(0, topicStats[topic].attempts - 2);
        if (topicStats[topic].attempts < topicStats[topic].solved) {
          topicStats[topic].attempts = topicStats[topic].solved;
        }
      }
    });
    progress.topicStats = topicStats;
    progress.markModified('topicStats');

    // Apply and clamp progress increments between 0 and 100
    progress.codingProgress = Math.min(100, Math.max(0, progress.codingProgress + codingInc));
    progress.coreProgress = Math.min(100, Math.max(0, progress.coreProgress + coreInc));
    progress.aptitudeProgress = Math.min(100, Math.max(0, progress.aptitudeProgress + aptitudeInc));
    progress.interviewProgress = Math.min(100, Math.max(0, progress.interviewProgress + interviewInc));

    // Simple XP -> Level formula: 1 + Math.floor(xp / 250)
    progress.level = 1 + Math.floor(progress.xp / 250);

    // Compute readiness dynamically and clamp
    const calculatedReadiness = Math.round(
      (progress.codingProgress + progress.coreProgress + progress.aptitudeProgress + progress.interviewProgress) / 4
    );
    progress.readiness = Math.min(100, Math.max(0, calculatedReadiness));

    await progress.save();

    return res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        targetCompany
      },
      progress: enrichProgress(progress),
      companyData: companyConfigs[targetCompany] || companyConfigs.Wipro
    });
  } catch (error) {
    next(error);
  }
};

const getItemTopics = (itemId) => {
  const mapping = {
    // PYQs
    'inf_pyq_01': ['Arrays', 'Dynamic Programming', 'Matrix'],
    'tcs_pyq_01': ['Basic Math', 'Recursion'],
    'acc_pyq_01': ['Matrix', 'Arrays'],
    'wip_pyq_01': ['Strings', 'Hashing'],
    'cap_pyq_01': ['Two Pointer', 'Sorting'],
    'cog_pyq_01': ['Stack', 'Monotonic Stack'],
    'ibm_pyq_01': ['Graphs', 'BFS/DFS'],
    'lti_pyq_01': ['Dynamic Programming', 'Strings'],
    'del_pyq_01': ['Sorting', 'Map', 'Strings'],
    'Unique Paths in Grid': ['Arrays', 'Dynamic Programming', 'Matrix'],
    'Prime Fibonacci Series': ['Basic Math', 'Recursion'],
    'Difference of Sum of Diagonals': ['Matrix', 'Arrays'],
    'Check for Valid Anagram': ['Strings', 'Hashing'],
    'Merge Sorted Lists without Extra Space': ['Two Pointer', 'Sorting'],
    'Find Next Greater Element': ['Stack', 'Monotonic Stack'],
    'Detect Cycle in Directed Graph': ['Graphs', 'BFS/DFS'],
    'Longest Palindromic Substring': ['Dynamic Programming', 'Strings'],
    'Group Anagrams Together': ['Sorting', 'Map', 'Strings'],
    
    // Challenges
    'trapping-rain-water': ['Two Pointer', 'Monotonic Stack'],
    'two-sum': ['Hash Map'],
    'move-zeroes': ['Two Pointer'],
    'valid-palindrome': ['Two Pointer'],
    'merge-sorted': ['Two Pointer'],
    'best-time-to-buy-and-sell-stock': ['Greedy', 'Arrays'],
    'container-water': ['Two Pointer'],
    'three-sum': ['Two Pointer'],
    'group-anagrams': ['Sorting', 'Map'],
    
    // Study tracks
    'dsa': ['Data Structures'],
    'core': ['Core Subjects'],
    'aptitude': ['Quantitative Aptitude'],
    'revision': ['Interviews']
  };
  return mapping[itemId] || ['General'];
};

const enrichProgress = (progress) => {
  const currentXp = progress.xp || 0;
  let nextStageXp = 200;
  let currentStage = 1;

  if (currentXp < 200) {
    nextStageXp = 200;
    currentStage = 1;
  } else if (currentXp < 500) {
    nextStageXp = 500;
    currentStage = 2;
  } else if (currentXp < 800) {
    nextStageXp = 800;
    currentStage = 3;
  } else if (currentXp < 1200) {
    nextStageXp = 1200;
    currentStage = 4;
  } else if (currentXp < 1700) {
    nextStageXp = 1700;
    currentStage = 5;
  } else {
    nextStageXp = 1700; // max stage
    currentStage = 6;
  }

  const progressPercentage = Math.min(100, Math.round((currentXp / nextStageXp) * 100));

  const progressObj = progress.toObject ? progress.toObject() : { ...progress };
  return {
    ...progressObj,
    currentXP: currentXp,
    currentStage,
    nextStageXP: nextStageXp,
    progressPercentage
  };
};
