import React, { createContext, useContext, useState, useEffect } from 'react';
import { getDashboardData, updateXp } from '../services/dashboardService.js';
import { companyConfigs as localCompanyConfigs } from '../components/Dashboard/dashboardData.js';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        setDbData(null);
        setLoading(false);
        return;
      }

      const res = await getDashboardData();
      setDbData(res);
      if (res?.user) {
        localStorage.setItem('user', JSON.stringify(res.user));
      }
      setError(null);
    } catch (err) {
      console.error('Failed to fetch dashboard data:', err);
      setError('Unable to load dashboard');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchDashboardData();
    } else {
      setLoading(false);
    }
  }, []);

  const refreshData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const res = await getDashboardData();
      setDbData(res);
      if (res?.user) {
        localStorage.setItem('user', JSON.stringify(res.user));
      }
    } catch (err) {
      console.error('Failed to refresh dashboard data:', err);
    }
  };

  const handleUpdateXp = async (activityType, rewardXp, isAdd, itemId = null) => {
    try {
      const res = await updateXp(activityType, rewardXp, isAdd, itemId);
      if (res.success) {
        setDbData(res);
        if (res.user) {
          localStorage.setItem('user', JSON.stringify(res.user));
        }
        return res;
      }
    } catch (err) {
      console.error('Failed to update stats:', err);
      throw err;
    }
  };

  const resetCompanyProgress = (company) => {
    setDbData(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        user: {
          ...prev.user,
          targetCompany: company
        },
        progress: {
          ...prev.progress,
          xp: 0,
          level: 1,
          readiness: 0,
          codingProgress: 0,
          coreProgress: 0,
          aptitudeProgress: 0,
          interviewProgress: 0,
          streak: 0,
          completedTasks: [],
          completedPyqs: [],
          completedChallenges: [],
          topicStats: {}
        }
      };
    });
  };

  const logout = () => {
    localStorage.clear();
    setDbData(null);
    setError(null);
    setLoading(false);
  };

  const progress = dbData?.progress;
  const dashboard = dbData?.progress; // Alias to progress for consistency/compatibility
  const user = dbData?.user;
  
  const localConfig = localCompanyConfigs[user?.targetCompany || 'Wipro'] || localCompanyConfigs.Wipro;
  const backendCompanyData = dbData?.companyData;
  const currentCompanyConfig = backendCompanyData ? {
    ...localConfig,
    companyName: backendCompanyData.companyName || localConfig?.companyName,
    studyPlan: backendCompanyData['Study Plan'] || backendCompanyData.studyPlan || localConfig?.studyPlan,
    aiMentor: backendCompanyData['AI Recommendation'] || backendCompanyData.aiRecommendation || backendCompanyData.aiMentor || localConfig?.aiMentor,
    pyq: backendCompanyData.PYQ || backendCompanyData.pyq || localConfig?.pyq,
    mockAssessment: backendCompanyData.Mock || backendCompanyData.mockAssessment || localConfig?.mockAssessment,
    roadmap: backendCompanyData.Roadmap || backendCompanyData.roadmap || localConfig?.roadmap,
    dailyChallenge: backendCompanyData['Daily Challenge'] || backendCompanyData.dailyChallenge || localConfig?.dailyChallenge,
  } : localConfig;

  const completedTasks = progress?.completedTasks || [];
  const completedPYQs = progress?.completedPyqs || [];
  const completedQuestions = progress?.completedChallenges || [];
  const completedMocks = progress?.completedTasks || [];
  const completedTrackIds = completedTasks;

  // Compute stats object
  const stats = {
    codingProgress: progress?.codingProgress ?? 0,
    coreProgress: progress?.coreProgress ?? 0,
    aptitudeProgress: progress?.aptitudeProgress ?? 0,
    interviewProgress: progress?.interviewProgress ?? 0,
    solved: completedPYQs.length + completedQuestions.length,
    hours: Math.round((1.5 + (completedTasks.length * 1.2)) * 10) / 10,
    accuracy: 85,
    bestTopic: 'Arrays',
    streak: progress?.streak ?? 0,
  };

  // Compute display variables from backend enriched progress
  const displayXp = progress?.xp ?? 0;
  const displayLevel = progress?.currentStage ?? 1;
  const displayCurrentLevelXp = progress?.currentXP ?? 0;
  const displayLevelTargetXp = progress?.nextStageXP ?? 200;
  const displayLevelProgressPct = progress?.progressPercentage ?? 0;

  const studyPlan = currentCompanyConfig?.studyPlan || [];
  const displayCompletedCount = studyPlan.filter(sec => completedTasks.includes(sec.id)).length;
  const totalTodayGoalTracks = studyPlan.length || 4;
  const displayGoalProgressPct = totalTodayGoalTracks > 0 
    ? Math.round((displayCompletedCount / totalTodayGoalTracks) * 100) 
    : 0;

  const displayStreak = progress?.streak ?? 0;
  const displayReadiness = progress?.readiness ?? 0;
  const displayQuestionsSolved = stats.solved;
  const displayStudyHours = stats.hours;
  const displayAccuracy = stats.accuracy;
  const displayBestTopic = stats.bestTopic;
  const displayWeeklyXp = displayXp;

  const topicStats = progress?.topicStats || {};
  let weakestTopicObj = null;
  
  if (displayQuestionsSolved >= 20) {
    let calculatedWeakestTopic = null;
    let calculatedWeakestAccuracy = 100;
    
    Object.entries(topicStats).forEach(([topic, statVal]) => {
      if (statVal && statVal.attempts > 0) {
        const accuracy = (statVal.solved / statVal.attempts) * 100;
        if (accuracy < calculatedWeakestAccuracy) {
          calculatedWeakestAccuracy = accuracy;
          calculatedWeakestTopic = topic;
        }
      }
    });
    
    if (calculatedWeakestTopic) {
      weakestTopicObj = {
        topic: calculatedWeakestTopic,
        accuracy: `${Math.round(calculatedWeakestAccuracy)}%`,
        remaining: '12 Questions',
        focus: 'Concepts & Practice',
        revisionTime: '1.5 Hours',
        lastAttempt: 'Recently',
        suggestion: `Your current accuracy in ${calculatedWeakestTopic} is ${Math.round(calculatedWeakestAccuracy)}%. Focus on completing more questions in this area to improve.`
      };
    }
  }

  return (
    <DashboardContext.Provider value={{
      dbData,
      loading,
      error,
      progress,
      dashboard,
      user,
      stats,
      displayXp,
      displayLevel,
      displayCurrentLevelXp,
      displayLevelTargetXp,
      displayLevelProgressPct,
      displayCompletedCount,
      totalTodayGoalTracks,
      displayGoalProgressPct,
      displayStreak,
      displayReadiness,
      displayQuestionsSolved,
      displayStudyHours,
      displayAccuracy,
      displayBestTopic,
      weakTopics: weakestTopicObj,
      displayWeeklyXp,
      completedTrackIds,
      completedQuestions,
      completedMocks,
      completedPYQs,
      updateXp: handleUpdateXp,
      resetCompanyProgress,
      refreshData,
      fetchDashboardData,
      logout,
      currentCompanyConfig
    }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
