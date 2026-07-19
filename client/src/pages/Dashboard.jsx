import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDashboard } from '../context/DashboardContext.jsx';
import { updateUserProfile } from '../services/userService.js';
import { 
  FiCode, 
  FiBriefcase, 
  FiLayers, 
  FiBookOpen, 
  FiHelpCircle, 
  FiCompass, 
  FiZap,
  FiAward,
  FiLock,
  FiActivity
} from 'react-icons/fi';

// Central Data Imports
import { 
  weeklyStats
} from '../components/Dashboard/dashboardData.js';

// Reusable Sub-components imports
import ReadinessCard from '../components/Dashboard/ReadinessCard.jsx';
import WeeklyStats from '../components/Dashboard/WeeklyStats.jsx';
import MotivationCard from '../components/Dashboard/MotivationCard.jsx';
import AchievementsCard from '../components/Dashboard/AchievementsCard.jsx';

// New Sub-components
import AiMentorCard from '../components/Dashboard/AiMentorCard.jsx';
import CompanyPyqCard from '../components/Dashboard/CompanyPyqCard.jsx';
import CompanyProgressCard from '../components/Dashboard/CompanyProgressCard.jsx';
import InterviewTipCard from '../components/Dashboard/InterviewTipCard.jsx';
import DailyChallengeCard from '../components/Dashboard/DailyChallengeCard.jsx';
import MockTestCard from '../components/Dashboard/MockTestCard.jsx';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Consume single source of truth from DashboardContext
  const {
    dbData,
    loading,
    error,
    progress,
    dashboard,
    user: contextUser,
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
    displayWeakestTopic,
    displayWeeklyXp,
    completedTrackIds,
    completedQuestions,
    completedPYQs,
    completedMocks,
    weakTopics,
    updateXp,
    refreshData,
    currentCompanyConfig,
    resetCompanyProgress
  } = useDashboard();

  const userName = contextUser?.name || 'Student Developer';
  const completedCount = displayCompletedCount;
  
  const [targetCompany, setTargetCompany] = useState(() => {
    return currentCompanyConfig?.companyName || 'Infosys';
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
  }, [navigate]);

  // Sync targetCompany state when currentCompanyConfig updates from context
  useEffect(() => {
    if (currentCompanyConfig?.companyName) {
      setTargetCompany(currentCompanyConfig.companyName);
    }
  }, [currentCompanyConfig]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempCompany, setTempCompany] = useState(targetCompany);
  const [showMockUnderDevModal, setShowMockUnderDevModal] = useState(false);

  // Sync tempCompany when targetCompany changes from the context update
  useEffect(() => {
    if (targetCompany) {
      setTempCompany(targetCompany);
    }
  }, [targetCompany]);

  // Storing study plan section states dynamically mapped from backend completedTrackIds
  const baseStudySections = currentCompanyConfig?.studyPlan || [];

  const studySections = baseStudySections.map(sec => ({
    ...sec,
    completed: completedTrackIds.includes(sec.id)
  }));

  // Inline toast state
  const [toast, setToast] = useState(null);

  // Floating XP float position states
  const [floats, setFloats] = useState([]);

  // Available Target Companies
  const companiesList = [
    'Infosys',
    'TCS',
    'Accenture',
    'Cognizant',
    'Capgemini',
    'Wipro',
    'IBM',
    'LTIMindtree',
    'Deloitte'
  ];

  // Trigger floating XP indicator at cursor coordinates
  const triggerXpFloat = (e, value = 30, isAdd = true) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || (rect.left + rect.width / 2);
    const y = e.clientY || rect.top;
    
    const id = Date.now() + Math.random();
    const displayVal = isAdd ? `+${value} XP` : `-${value} XP`;
    const colorClass = isAdd ? 'text-amber-400 drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]' : 'text-rose-500 drop-shadow-[0_2px_8px_rgba(244,63,94,0.4)]';
    setFloats((prev) => [...prev, { id, x, y, value: displayVal, colorClass }]);
    
    // Clear element after animation ends (1s)
    setTimeout(() => {
      setFloats((prev) => prev.filter((f) => f.id !== id));
    }, 1000);
  };

  const showToast = (message, xp = 0, isAdd = true) => {
    setToast({ message, xp, isAdd });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  // Handle task section completion toggle
  const toggleSection = (id, e) => {
    const secObj = studySections.find(s => s.id === id);
    if (!secObj) return;
    const rewardVal = id === 'revision' ? 10 : 20;
    const isAdding = !secObj?.completed;
    
    triggerXpFloat(e, rewardVal, isAdding);
    if (isAdding) {
      showToast(`Completed ${secObj?.name || 'Task'} daily track`, rewardVal, true);
    } else {
      showToast(`Removed XP: Uncompleted ${secObj?.name || 'Task'} daily track`, rewardVal, false);
    }

    updateXp(id, rewardVal, isAdding).catch(err => {
      console.error('Failed to update stats on toggle:', err);
    });
  };

  const handleMarkPyqSolved = async (e) => {
    if (!activePyq) return;
    const pyqId = activePyq.id || activePyq.title;
    const isSolved = completedPYQs.includes(pyqId);
    const isAdding = !isSolved;
    const rewardVal = 30;
    
    try {
      const res = await updateXp('pyq', rewardVal, isAdding, pyqId);
      if (res && res.success) {
        triggerXpFloat(e, rewardVal, isAdding);
        showToast(isAdding ? `Solved PYQ: ${activePyq.title}!` : `Unmarked solved status for: ${activePyq.title}`, rewardVal, isAdding);
        refreshData();
      }
    } catch (err) {
      console.error('Failed to solve PYQ:', err);
    }
  };

  const handleMarkDailyChallengeSolved = async (e) => {
    if (!dailyChallengeData) return;
    const questionId = dailyChallengeData.id;
    const isSolved = completedQuestions.includes(questionId);
    const isAdding = !isSolved;
    const rewardVal = 70;
    
    try {
      const res = await updateXp('challenge', rewardVal, isAdding, questionId);
      if (res && res.success) {
        triggerXpFloat(e, rewardVal, isAdding);
        showToast(isAdding ? `Solved Daily Challenge: ${dailyChallengeData.title}!` : `Unmarked solved status for: ${dailyChallengeData.title}`, rewardVal, isAdding);
        refreshData();
      }
    } catch (err) {
      console.error('Failed to solve daily challenge:', err);
    }
  };

  const handleMarkMockCompleted = async (e) => {
    const mockId = upcomingMockTestData?.name || 'Full Mock Assessment';
    const rewardVal = 100;
    
    try {
      const res = await updateXp('mock', rewardVal, true, mockId);
      if (res && res.success) {
        triggerXpFloat(e, rewardVal, true);
        showToast(`Completed Mock: ${mockId}!`, rewardVal, true);
        refreshData();
      }
    } catch (err) {
      console.error('Failed to complete mock test:', err);
    }
  };

  const handleOpenModal = () => {
    setTempCompany(targetCompany);
    setIsModalOpen(true);
  };

  const handleSaveCompany = async () => {
    try {
      setTargetCompany(tempCompany);
      const localUser = JSON.parse(localStorage.getItem('user')) || {};
      localStorage.setItem('user', JSON.stringify({ ...localUser, targetCompany: tempCompany }));
      setIsModalOpen(false);
      showToast(`Target Company changed to ${tempCompany}`, 0, true);

      // Optimistically reset company-specific progress locally
      resetCompanyProgress(tempCompany);

      // Save target company to backend
      await updateUserProfile({ targetCompany: tempCompany });

      // Refresh Dashboard Context to sync Target Company
      refreshData();
    } catch (err) {
      console.error('Failed to update target company on backend:', err);
    }
  };

  // Click handler for top journey roadmap
  const handleJourneyStageClick = (stage) => {
    if (stage.status === 'locked') {
      showToast('Complete previous stage first.', 0, true);
    } else {
      navigate(stage.path);
    }
  };

  const journeyStages = [
    { name: 'Foundation', status: displayXp >= 200 ? 'completed' : 'current', path: '/prepare' },
    { name: 'DSA', status: displayXp >= 500 ? 'completed' : (displayXp >= 200 ? 'current' : 'locked'), path: '/prepare/dsa' },
    { name: 'Core Subjects', status: displayXp >= 800 ? 'completed' : (displayXp >= 500 ? 'current' : 'locked'), path: '/prepare/core' },
    { name: 'Aptitude', status: displayXp >= 1200 ? 'completed' : (displayXp >= 800 ? 'current' : 'locked'), path: '/prepare/aptitude' },
    { name: 'Interview', status: displayXp >= 1700 ? 'completed' : (displayXp >= 1200 ? 'current' : 'locked'), path: '/prepare/interview' },
    { name: 'Placement', status: displayXp >= 1700 ? 'current' : 'locked', path: '/prepare/company' }
  ];

  // Dynamic values mapped from currentCompanyConfig
  const activeReadiness = {
    ...currentCompanyConfig?.readiness,
    companyProgress: currentCompanyConfig?.companyProgress,
    score: currentCompanyConfig?.readiness?.score ?? displayReadiness
  };
  const activePyq = currentCompanyConfig?.pyq;
  const activeTip = currentCompanyConfig?.tip;
  const activeProgress = {
    ...currentCompanyConfig?.companyProgress,
    nextTargets: currentCompanyConfig?.nextTargets,
    readinessScore: currentCompanyConfig?.readiness?.score ?? displayReadiness
  };
  const dailyChallengeData = currentCompanyConfig?.dailyChallenge;
  const upcomingMockTestData = currentCompanyConfig?.mockAssessment;


  if (loading) {
    return (
      <div className="flex-grow flex items-center justify-center bg-slate-955 bg-slate-950 min-h-screen">
        <div className="flex flex-col items-center space-y-4">
          <svg className="animate-spin h-10 w-10 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-slate-400 text-sm font-bold">Loading Dashboard...</span>
        </div>
      </div>
    );
  }

  if (error || (!dashboard && !progress)) {
    return (
      <div className="flex-grow flex items-center justify-center bg-slate-955 bg-slate-950 min-h-screen">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-md w-full text-center shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 text-2xl mx-auto">
            ⚠
          </div>
          <h2 className="text-lg font-bold text-slate-200">Unable to load dashboard</h2>
          <p className="text-xs text-slate-400">{error || 'Could not retrieve your dashboard profile.'}</p>
          <button 
            onClick={() => {
              if (error) {
                window.location.reload();
              } else {
                refreshData();
              }
            }}
            className="w-full bg-sky-500 hover:bg-sky-600 text-slate-955 text-slate-950 font-bold py-2.5 rounded-xl text-xs transition-colors duration-200 shadow-md"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow bg-slate-955 bg-slate-950 px-4 sm:px-6 lg:px-8 py-10 relative select-none">
      
      {/* CSS Float-Up Keyframes Style */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(0) scale(0.9); }
          15% { opacity: 1; transform: translateY(-12px) scale(1.1); }
          85% { opacity: 1; transform: translateY(-32px) scale(1); }
          100% { opacity: 0; transform: translateY(-48px) scale(0.85); }
        }
        .xp-float {
          animation: floatUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      {/* Floating XP Rewards list */}
      {floats.map((f) => (
        <div 
          key={f.id} 
          className={`xp-float fixed z-50 font-extrabold text-sm pointer-events-none flex items-center gap-1 ${f.colorClass}`}
          style={{ left: f.x - 20, top: f.y - 20 }}
        >
          <span>🪙</span>
          <span>{f.value}</span>
        </div>
      ))}

      {/* Notification Toast */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 bg-slate-900 border border-slate-800 font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border-l-4 animate-slide-in ${
          toast.isAdd ? 'text-emerald-400 border-l-emerald-500' : 'text-rose-500 border-l-rose-500'
        }`}>
          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
            toast.isAdd ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
          }`}>
            {toast.isAdd ? '✔' : '✖'}
          </div>
          <div className="flex flex-col text-left">
            {toast.xp > 0 && (
              <span className="text-xs font-black text-slate-100">{toast.isAdd ? '+' : '-'}{toast.xp} XP</span>
            )}
            <span className="text-[10px] text-slate-400 font-semibold">{toast.message}</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-10 w-full">
        
        {/* 1. HERO SECTION (Premium welcome glass panel) */}
        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-6 sm:p-8 rounded-3xl text-left shadow-2xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="absolute top-0 left-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Left panel info */}
          <div className="space-y-4 relative z-10">
            <div className="space-y-1">
              <span className="text-sm font-bold text-sky-400 tracking-wide">Welcome Back</span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight flex items-center gap-2">
                👋 {userName}
              </h1>
              <p className="text-sm text-slate-400 max-w-md">
                Let's continue your placement preparation track and reach your goals.
              </p>
            </div>

            {/* Target Company pill */}
            <div className="inline-flex items-center gap-3 bg-slate-950/80 border border-slate-800 px-4 py-2 rounded-xl">
              <div className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Target:</span>
              <span className="text-xs font-black text-sky-400">{targetCompany}</span>
              <button 
                onClick={handleOpenModal}
                className="text-xs text-sky-400 hover:text-sky-300 font-bold border-l border-slate-800 pl-3 focus:outline-none transition-colors duration-200"
              >
                Change
              </button>
            </div>
          </div>

          {/* Right panel HUD parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 relative z-10 w-full lg:w-auto">
            {/* Gamified level card */}
            <div className="bg-slate-950/80 border border-slate-850 p-4 rounded-2xl flex flex-col justify-between space-y-3 min-w-[150px]">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-slate-500 font-black uppercase tracking-wider">Level</span>
                <FiAward className="w-4 h-4 text-sky-400" />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-100">Level {displayLevel}</h4>
                <div className="w-full bg-slate-900 h-1.5 rounded-full mt-2 overflow-hidden border border-slate-800">
                  <div className="bg-sky-500 h-full rounded-full transition-all duration-300" style={{ width: `${displayLevelProgressPct}%` }}></div>
                </div>
                <div className="flex items-center justify-between text-[9px] text-slate-500 mt-1 font-bold">
                  <span>{displayCurrentLevelXp} XP</span>
                  <span>{displayLevelTargetXp} XP</span>
                </div>
              </div>
            </div>

            {/* Target Company */}
            <div className="bg-slate-950/80 border border-slate-850 p-4 rounded-2xl flex flex-col justify-between space-y-3 min-w-[150px]">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-slate-500 font-black uppercase tracking-wider">Target Company</span>
                <FiBriefcase className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-100">{targetCompany}</h4>
                <div className="flex items-center gap-1.5 mt-2 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg w-max shadow-[0_0_10px_rgba(16,185,129,0.05)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Active</span>
                </div>
                <div className="flex items-center justify-between text-[9px] text-slate-500 mt-2.5 font-bold">
                  <span>Current Prep</span>
                  <span>Goal</span>
                </div>
              </div>
            </div>

            {/* Daily Goal */}
            <div className="bg-slate-950/80 border border-slate-850 p-4 rounded-2xl flex flex-col justify-between space-y-3 min-w-[150px]">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-slate-500 font-black uppercase tracking-wider">Today's Goal</span>
                <FiZap className="w-4 h-4 text-yellow-500" />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-100">{displayGoalProgressPct}%</h4>
                <div className="w-full bg-slate-900 h-1.5 rounded-full mt-2 overflow-hidden border border-slate-800">
                  <div className="bg-yellow-500 h-full rounded-full transition-all duration-300" style={{ width: `${displayGoalProgressPct}%` }}></div>
                </div>
                <div className="flex items-center justify-between text-[9px] text-slate-500 mt-1 font-bold">
                  <span>{displayCompletedCount} / {totalTodayGoalTracks} Tracks</span>
                  <span>Goal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. PLACEMENT JOURNEY (Visual Train mapping) */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 text-left shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Placement Journey</h3>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Stages 1-6</span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 mt-4">
            {journeyStages.map((stage, idx) => {
              let styleClass = '';
              let badge = null;
              let tooltipText = '';

              if (stage.status === 'completed') {
                styleClass = 'bg-slate-950 border border-emerald-500/30 text-emerald-450 hover:border-emerald-500/50 hover:scale-[1.01] hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]';
                badge = <span className="text-emerald-400 font-extrabold text-[9px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">✔ Completed</span>;
              } else if (stage.status === 'current') {
                styleClass = 'bg-slate-950 border-2 border-sky-500 text-sky-400 hover:border-sky-400 hover:scale-[1.01] shadow-[0_0_20px_rgba(56,189,248,0.2)] animate-pulse';
                badge = <span className="text-[9px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">Current</span>;
              } else {
                styleClass = 'bg-slate-955 bg-slate-950 border border-slate-900 hover:border-slate-800 opacity-50';
                badge = <FiLock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />;
                tooltipText = 'Complete previous stage first.';
              }

              return (
                <React.Fragment key={stage.name}>
                  <div 
                    onClick={() => handleJourneyStageClick(stage)}
                    title={tooltipText}
                    className={`flex-grow flex-1 w-full p-4 rounded-xl flex-shrink-0 flex items-center justify-between cursor-pointer transition-all duration-200 ${styleClass}`}
                  >
                    <div className="space-y-0.5 text-left">
                      <span className="text-[10px] font-bold text-sky-400/80 uppercase tracking-wider block">Stage {idx + 1}</span>
                      <h4 className={`text-sm font-bold ${stage.status === 'current' ? 'text-sky-400' : 'text-slate-200'}`}>
                        {stage.name}
                      </h4>
                    </div>
                    {badge}
                  </div>
                  
                  {idx < journeyStages.length - 1 && (
                    <div className="text-slate-700 font-bold text-lg lg:rotate-0 rotate-90 flex-shrink-0">&rarr;</div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Balanced Dashboard Row Grid */}
        <div className="space-y-6">
          
          {/* === ROW 1 === */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Today's Study Plan */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between space-y-4 shadow-xl h-full">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-slate-200">Today's Study Plan</h3>
                    <p className="text-[10px] text-slate-500 font-semibold">Track daily topic completion</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">Active</span>
                </div>
                
                {/* Task list */}
                <div className="space-y-3 pt-1">
                  {studySections.map((sec) => (
                    <div 
                      key={sec.id} 
                      className={`bg-slate-950 border ${
                        sec.completed ? 'border-sky-500/30 bg-sky-500/[0.01]' : 'border-slate-850'
                      } p-3 rounded-xl flex items-start justify-between gap-3 transition-all duration-200`}
                    >
                      <div className="flex items-start space-x-3 text-left">
                        {/* Checkbox */}
                        <button 
                          onClick={(e) => toggleSection(sec.id, e)}
                          className={`w-5 h-5 rounded border mt-0.5 flex-shrink-0 ${
                            sec.completed 
                              ? 'bg-sky-500 border-sky-500 text-slate-950 flex items-center justify-center font-bold text-xs' 
                              : 'border-slate-700 hover:border-sky-500'
                          } focus:outline-none transition-colors duration-200`}
                        >
                          {sec.completed && '✔'}
                        </button>
                        
                        <div className="space-y-1 text-left">
                          <div className="space-y-0.5">
                            <h4 className={`text-xs font-bold ${sec.completed ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                              {sec.name} ({sec.duration})
                            </h4>
                            <span className="text-[9px] text-sky-400 font-semibold uppercase tracking-wider block">{sec.topicTitle}</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {sec.topics.map((top) => (
                              <span key={top} className={`text-[9px] px-1.5 py-0.5 rounded ${
                                sec.completed ? 'bg-slate-900/50 text-slate-500 border border-slate-950' : 'bg-slate-900 text-slate-400 border border-slate-800'
                              }`}>
                                {top}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link 
                        to={sec.path}
                        className="text-[10px] text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 bg-slate-900 hover:bg-slate-850 px-2 py-1 rounded border border-slate-800 transition-colors duration-200 flex-shrink-0"
                      >
                        Start
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Today's Progress Section */}
              <div className="space-y-3 pt-3 border-t border-slate-800/40 text-xs text-left">
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Today's Progress</span>
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-sky-400 font-bold tracking-widest">
                      {(() => {
                        const filled = Math.max(0, Math.min(10, Math.round((displayGoalProgressPct / 10) || 0)));
                        return '█'.repeat(filled) + '░'.repeat(Math.max(0, 10 - filled));
                      })()}
                    </span>
                    <span className="text-slate-300 font-bold">{displayGoalProgressPct}%</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] font-semibold text-slate-400 pt-1">
                    <div className="flex justify-between">
                      <span>Completed:</span>
                      <span className="text-slate-200">{displayCompletedCount} / {totalTodayGoalTracks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="text-slate-200">
                        {(() => {
                          const totalMins = studySections.reduce((acc, sec) => {
                            if (!sec.completed) return acc;
                            if (sec.id === 'dsa') return acc + 120;
                            if (sec.id === 'revision') return acc + 30;
                            return acc + 90;
                          }, 0);
                          const hours = Math.floor(totalMins / 60);
                          const mins = totalMins % 60;
                          return hours > 0 ? `${hours}h ${mins > 0 ? mins + 'm' : ''}` : `${mins}m`;
                        })()} / 5.5h
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>XP:</span>
                      <span className="text-emerald-400">
                        +{studySections.reduce((acc, sec) => acc + (sec.completed ? sec.xpReward : 0), 0) + (completedCount === studySections.length ? 30 : 0)} XP
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Remaining:</span>
                      <span className="text-slate-200">
                        {(() => {
                          const remaining = Math.max(0, studySections.length - completedCount);
                          return `${remaining} ${remaining === 1 ? 'Task' : 'Tasks'}`;
                        })()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 2: AI Mentor Recommendation */}
            <AiMentorCard targetCompany={targetCompany} data={currentCompanyConfig?.aiMentor} />
            
            {/* Card 3: Placement Readiness */}
            <ReadinessCard data={activeReadiness} />
          </div>

          {/* === ROW 2 === */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 4: Today's Company PYQ */}
            <CompanyPyqCard 
              targetCompany={targetCompany} 
              data={activePyq} 
              isSolved={completedPYQs.includes(activePyq?.id || activePyq?.title)} 
              onMarkSolved={handleMarkPyqSolved} 
              xp={displayXp} 
            />
            
            {/* Card 5: Target Company Progress */}
            <CompanyProgressCard data={activeProgress} />
            
            {/* Card 9: Weekly Stats */}
            <WeeklyStats />
          </div>

          {/* === ROW 3 === */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 7: Daily Challenge */}
            <DailyChallengeCard 
              data={dailyChallengeData} 
              isSolved={completedQuestions.includes(dailyChallengeData?.id)} 
              onMarkSolved={handleMarkDailyChallengeSolved} 
              targetCompany={targetCompany} 
            />
            
            {/* Card 8: Upcoming Mock Test */}
            <MockTestCard 
              targetCompany={targetCompany} 
              data={upcomingMockTestData} 
              isCompleted={completedMocks.includes(upcomingMockTestData?.name || 'Full Mock Assessment')} 
              onMarkCompleted={handleMarkMockCompleted} 
              onStartMock={() => setShowMockUnderDevModal(true)}
            />
            
            {/* Card 10: Achievements */}
            <AchievementsCard />
          </div>

          {/* === ROW 4 === */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 11: Weakest Topic / Focus Area */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between h-full shadow-xl text-left space-y-4">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
                  <h3 className="text-sm font-bold text-slate-200">
                    {(displayQuestionsSolved ?? 0) < 20 ? 'Focus Area' : 'Weakest Topic'}
                  </h3>
                  <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">Needs Practice</span>
                </div>
                
                {(displayQuestionsSolved ?? 0) < 20 ? (
                  <div className="space-y-2 py-6 text-center">
                    <span className="text-2xl block">🔍</span>
                    <h4 className="text-xs font-bold text-slate-300">No performance data yet.</h4>
                    <p className="text-[10px] text-slate-500 mt-1 max-w-[200px] mx-auto leading-relaxed">
                      Complete at least 20 questions to identify your weakest topic.
                    </p>
                  </div>
                ) : weakTopics ? (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-slate-200">{weakTopics.topic}</h4>
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-850 text-xs font-semibold">
                      <div>
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Accuracy</span>
                        <span className="text-rose-400 font-black">{weakTopics.accuracy}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Remaining</span>
                        <span className="text-slate-200">{weakTopics.remaining}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Focus</span>
                        <span className="text-slate-200">{weakTopics.focus}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Revision Time</span>
                        <span className="text-slate-200">{weakTopics.revisionTime}</span>
                      </div>
                      <div className="col-span-2 border-t border-slate-800/60 pt-2 flex justify-between text-[10px]">
                        <span className="text-slate-500">Last Attempt</span>
                        <span className="text-slate-300 font-semibold">{weakTopics.lastAttempt}</span>
                      </div>
                    </div>

                    {/* AI Suggestion */}
                    <div className="p-3 bg-rose-950/20 border border-rose-900/20 rounded-xl space-y-1">
                      <span className="text-[9px] text-rose-400 font-extrabold uppercase tracking-wide block">AI Suggestion</span>
                      <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
                        "{weakTopics.suggestion}"
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 py-6 text-center">
                    <span className="text-2xl block">🌟</span>
                    <h4 className="text-xs font-bold text-slate-300">No Weak Topics Yet</h4>
                    <p className="text-[10px] text-slate-500 mt-1 max-w-[200px] mx-auto leading-relaxed">
                      Start solving coding challenges to analyze performance and map topic weaknesses.
                    </p>
                  </div>
                )}
              </div>
              <Link 
                to="/prepare/dsa"
                onClick={(e) => triggerXpFloat(e, 15)}
                className="block w-full bg-slate-950 border border-slate-700 hover:bg-slate-850 text-sky-400 font-semibold py-2.5 rounded-xl text-xs text-center transition-colors duration-200"
              >
                {(displayQuestionsSolved ?? 0) < 20 ? 'Start Practice' : 'Practice Now'}
              </Link>
            </div>
            
            {/* Card 6: Interview Tip */}
            <InterviewTipCard targetCompany={targetCompany} tip={activeTip} />
            
            {/* Card 12: Daily Motivation */}
            <MotivationCard targetCompany={targetCompany} score={activeReadiness.score} />
          </div>

        </div>

      </div>

      {/* 11. QUICK ACCESS (Premium icon links moved to bottom) */}
      <div className="max-w-7xl mx-auto space-y-6 pt-10 border-t border-slate-900">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest text-left">Quick Access</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          <Link to="/prepare/dsa" className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-200 group">
            <FiCode className="w-5 h-5 text-sky-400 group-hover:scale-110 duration-200" />
            <span className="text-[10px] font-bold text-slate-305 text-slate-300">Pattern DSA</span>
          </Link>
          <Link to="/prepare/company" className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-200 group">
            <FiBriefcase className="w-5 h-5 text-sky-400 group-hover:scale-110 duration-200" />
            <span className="text-[10px] font-bold text-slate-305 text-slate-300">Company Prep</span>
          </Link>
          <Link to="/prepare/aptitude" className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-200 group">
            <FiLayers className="w-5 h-5 text-sky-400 group-hover:scale-110 duration-200" />
            <span className="text-[10px] font-bold text-slate-305 text-slate-300">Aptitude</span>
          </Link>
          <Link to="/prepare/core" className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-200 group">
            <FiBookOpen className="w-5 h-5 text-sky-400 group-hover:scale-110 duration-200" />
            <span className="text-[10px] font-bold text-slate-305 text-slate-300">Core Subjects</span>
          </Link>
          <Link to="/prepare/interview" className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-200 group">
            <FiHelpCircle className="w-5 h-5 text-sky-400 group-hover:scale-110 duration-200" />
            <span className="text-[10px] font-bold text-slate-350 text-slate-300">Interview Qs</span>
          </Link>
          <Link to="/prepare/roadmaps" className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-200 group">
            <FiCompass className="w-5 h-5 text-sky-400 group-hover:scale-110 duration-200" />
            <span className="text-[10px] font-bold text-slate-305 text-slate-300">Study Roadmap</span>
          </Link>
        </div>

        {/* Quick Access Activity HUD Panel */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-left text-xs font-semibold space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
            <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest block">Quick Access Activity HUD</span>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Session Info</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Recent Activity</span>
              <span className="text-slate-200">Arrays Completed</span>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Completed Today</span>
              <span className="text-slate-202 text-slate-200">{displayCompletedCount} Tracks Completed</span>
            </div>
            <div className="bg-slate-955 bg-slate-950 p-3.5 rounded-xl border border-slate-850">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Current Streak</span>
              <span className="text-amber-400 font-bold">
                {progress?.streak !== undefined ? `${progress.streak} Days` : '0 Days'}
              </span>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Current XP</span>
              <span className="text-emerald-400 font-bold">{displayXp} XP</span>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 col-span-2 sm:col-span-1">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Last Solved Question</span>
              <span className="text-sky-400">Two Sum ({targetCompany})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Custom React Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-sm w-full space-y-4 shadow-2xl text-left">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-200">Change Target Company</h3>
              <p className="text-xs text-slate-400">Select your target company to customize roadmaps.</p>
            </div>
            
            <select 
              value={tempCompany}
              onChange={(e) => setTempCompany(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none cursor-pointer"
            >
              {companiesList.map((comp) => (
                <option key={comp} value={comp} className="bg-slate-950">{comp}</option>
              ))}
            </select>
            
            <div className="flex gap-3 pt-2">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-slate-950 border border-slate-700 hover:bg-slate-850 text-slate-300 font-semibold py-2.5 rounded-xl text-xs text-center transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveCompany}
                className="flex-1 bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-2.5 rounded-xl text-xs text-center transition-colors duration-200"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mock Under Dev Modal */}
      {showMockUnderDevModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-sm w-full space-y-5 shadow-2xl text-center relative overflow-hidden border-t-4 border-t-purple-500">
            <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-3xl mx-auto animate-bounce">
              🚀
            </div>
            
            <div className="space-y-2">
              <h3 className="text-base font-black text-slate-100">Mock Assessment</h3>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                This feature is under development.<br/>
                Company-wise timed mock tests will be available soon.
              </p>
            </div>

            <button
              onClick={() => setShowMockUnderDevModal(false)}
              className="w-full bg-purple-500 hover:bg-purple-600 text-slate-100 font-bold py-2.5 rounded-xl text-xs transition-colors duration-200"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
