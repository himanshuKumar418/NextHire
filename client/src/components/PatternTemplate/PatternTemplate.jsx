import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiAward, FiArrowRight } from 'react-icons/fi';
import { getLocalItem, setLocalItem } from '../../utils/localStorageHelper.js';
import PatternHero from './PatternHero.jsx';
import ConceptGrid from './ConceptGrid.jsx';
import PatternRecognition from './PatternRecognition.jsx';
import Simulation from './Simulation.jsx';
import SyntaxTemplate from './SyntaxTemplate.jsx';
import QuestionsChecklist from './QuestionsChecklist.jsx';
import CompanyStats from './CompanyStats.jsx';
import Timeline from './Timeline.jsx';
import Pitfalls from './Pitfalls.jsx';
import Achievements from './Achievements.jsx';
import { 
  getPatternSolvedCount, 
  getPatternProgress, 
  getOverallArraysProgress 
} from '../../data/patternRegistry.js';
import { useDashboard } from '../../context/DashboardContext.jsx';

const PatternTemplate = ({ pattern }) => {
  const navigate = useNavigate();

  const { displayXp: localXp, updateXp } = useDashboard();

  // Modals state
  const [showPatternModal, setShowPatternModal] = useState(false);
  const [showArrayModal, setShowArrayModal] = useState(false);

  // floating XP coordinates state
  const [floats, setFloats] = useState([]);

  // Handle question checking triggers
  const handleToggleSolved = (qId, isSolvedNow, xpDelta, e) => {
    // Determine activity type based on question difficulty/xpDelta
    let activityType = 'easy-q';
    if (xpDelta >= 40) activityType = 'hard-q';
    else if (xpDelta >= 20) activityType = 'medium-q';

    // Persist solved question in DB & context state
    updateXp(activityType, xpDelta, isSolvedNow, qId).catch(err => {
      console.error('Failed to update stats on question toggle:', err);
    });

    // Trigger float animation on screen
    if (isSolvedNow) {
      const id = Date.now() + Math.random();
      setFloats((prev) => [...prev, { id, x: window.innerWidth / 2, y: window.innerHeight / 2, value: `+${xpDelta} XP` }]);
      setTimeout(() => {
        setFloats((prev) => prev.filter((f) => f.id !== id));
      }, 1000);
    }

    // 2. Recalculate pattern progress
    const activePatternId = pattern.nextPattern 
      ? (pattern.nextPattern.name === 'Sliding Window' ? 'two-pointer' : pattern.nextPattern.name === 'Prefix Sum' ? 'sliding-window' : pattern.nextPattern.name === "Kadane's Algorithm" ? 'prefix-sum' : pattern.nextPattern.name === 'Binary Search' ? 'kadane' : 'binary-search')
      : 'binary-search';
      
    const activeProg = getPatternProgress(activePatternId);

    if (activeProg === 100) {
      // Check if already marked as completed to prevent double bonuses
      let completedPatterns = getLocalItem('dsa_completed_patterns', []);

      if (!completedPatterns.includes(activePatternId)) {
        completedPatterns.push(activePatternId);
        setLocalItem('dsa_completed_patterns', completedPatterns);

        // Award +100 XP Pattern Completion Bonus
        updateXp('bonus', 100, true).catch(err => {
          console.error('Failed to award pattern bonus:', err);
        });

        // Unlock Achievement Badge in Local Storage
        let achievements = getLocalItem('dsa_achievements', []);
        
        const badgeName = `${pattern.title.replace(' Pattern', '')} Master`;
        if (!achievements.includes(badgeName)) {
          achievements.push(badgeName);
          setLocalItem('dsa_achievements', achievements);
        }

        // Open pattern mastery modal
        setShowPatternModal(true);

        // Check if all 5 patterns are completed
        const allCompleted = ['two-pointer', 'sliding-window', 'prefix-sum', 'kadane', 'binary-search'].every(id => 
          completedPatterns.includes(id)
        );

        if (allCompleted) {
          const arraysDone = getLocalItem('dsa_completed_arrays', 'false') === 'true';
          if (!arraysDone) {
            setLocalItem('dsa_completed_arrays', 'true');

            // Award +250 XP Array Completion Bonus
            updateXp('bonus', 250, true).catch(err => {
              console.error('Failed to award category bonus:', err);
            });

            // Unlock Array Specialist Achievement
            if (!achievements.includes('Array Specialist')) {
              achievements.push('Array Specialist');
              setLocalItem('dsa_achievements', achievements);
            }

            // Open overall Array Mastered modal
            setShowArrayModal(true);
          }
        }
      }
    }
  };

  const solvedCount = pattern.questions.filter(q => {
    const solved = getLocalItem('dsa_solved_questions', []);
    return solved.includes(q.id);
  }).length;

  const currentPatternProgress = Math.round((solvedCount / pattern.questions.length) * 100);

  return (
    <div className="space-y-6 text-left pb-10 relative">
      
      {/* Floating XP Indicators */}
      {floats.map((f) => (
        <div 
          key={f.id} 
          className="xp-float fixed z-50 text-amber-400 font-extrabold text-sm pointer-events-none drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)] flex items-center gap-1"
          style={{ left: f.x - 20, top: f.y - 20, animation: 'floatUp 1s forwards' }}
        >
          <span>🪙</span>
          <span>{f.value}</span>
        </div>
      ))}

      {/* 1. Hero Summary */}
      <PatternHero pattern={pattern} solvedCount={solvedCount} />

      {/* 2 & 3. Concept study grid & Keywords */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8">
          <ConceptGrid conceptCards={pattern.conceptCards} />
        </div>
        <div className="lg:col-span-4 flex items-stretch">
          <PatternRecognition recognitionKeywords={pattern.recognitionKeywords} />
        </div>
      </div>

      {/* 4. Visual step animation */}
      <Simulation simulation={pattern.simulation} />

      {/* 5. Syntax tab structures */}
      <SyntaxTemplate syntax={pattern.syntax} />

      {/* 6. Checklist questions */}
      <QuestionsChecklist 
        questions={pattern.questions} 
        onToggleSolved={handleToggleSolved} 
      />

      {/* 7, 8, 9. Frequencies, Timelines, Pitfalls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <CompanyStats companyFrequency={pattern.companyFrequency} />
        <Timeline pyqs={pattern.pyqs} />
        <Pitfalls pitfalls={pattern.pitfalls} />
      </div>

      {/* 10. Achievements badges */}
      <Achievements achievements={pattern.achievements} />

      {/* MODAL 1: PATTERN COMPLETION SCREEN */}
      {showPatternModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-sm w-full space-y-5 shadow-2xl text-center relative overflow-hidden border-t-4 border-t-sky-500">
            <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-3xl mx-auto animate-bounce">
              🎉
            </div>
            
            <div className="space-y-1">
              <h3 className="text-lg font-black text-slate-100">Congratulations!</h3>
              <p className="text-xs text-slate-450 text-slate-400">You mastered the <span className="text-sky-400 font-bold">{pattern.title}</span> roadmap.</p>
            </div>

            {/* Rewards */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 text-xs font-semibold text-left space-y-2">
              <span className="text-[8.5px] text-slate-500 font-bold uppercase block tracking-wider">Mastery Rewards</span>
              <div className="flex justify-between items-center text-slate-300">
                <span>Pattern Completion</span>
                <span className="text-emerald-404 text-emerald-400 font-bold">+100 XP</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Earned Badge</span>
                <span className="text-sky-400 font-bold">{pattern.title.replace(' Pattern', '')} Master</span>
              </div>
              {pattern.nextPattern && (
                <div className="flex justify-between items-center text-slate-300 pt-1 border-t border-slate-900">
                  <span>Unlocked next path</span>
                  <span className="text-purple-400 font-bold">{pattern.nextPattern.name}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 pt-1.5">
              {pattern.nextPattern ? (
                <button
                  onClick={() => {
                    setShowPatternModal(false);
                    navigate(pattern.nextPattern.path);
                  }}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-slate-955 text-slate-950 font-black py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors duration-200"
                >
                  <span>Next Pattern</span>
                  <FiArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowPatternModal(false);
                    navigate('/prepare/patterns/arrays');
                  }}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-slate-955 text-slate-955 text-slate-950 font-black py-2.5 rounded-xl text-xs transition-colors duration-200"
                >
                  Back to Arrays
                </button>
              )}
              
              <button
                onClick={() => setShowPatternModal(false)}
                className="w-full bg-slate-950 border border-slate-700 hover:bg-slate-850 text-slate-300 font-semibold py-2.5 rounded-xl text-xs transition-colors duration-200"
              >
                Continue Reviewing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: ARRAY COMPLETION SCREEN */}
      {showArrayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-sm w-full space-y-5 shadow-2xl text-center border-t-4 border-t-emerald-500">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl mx-auto animate-pulse">
              👑
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-100">🎉 Arrays Mastered!</h3>
              <p className="text-xs text-slate-400">You completed all 5 Array patterns required for placement preparation!</p>
            </div>

            {/* Rewards */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-855 border-slate-850 text-xs font-semibold text-left space-y-2">
              <span className="text-[8.5px] text-slate-500 font-bold uppercase block tracking-wider">Arrays Mastery rewards</span>
              <div className="flex justify-between items-center text-slate-300">
                <span>Arrays Complete</span>
                <span className="text-emerald-400 font-bold">+250 XP</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Earned Title</span>
                <span className="text-sky-400 font-bold">Array Specialist</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 pt-1 border-t border-slate-900">
                <span>Next Module Unlocked</span>
                <span className="text-purple-400 font-bold">Strings Module</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1.5">
              <button
                onClick={() => {
                  setShowArrayModal(false);
                  navigate('/prepare/patterns');
                }}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-955 text-slate-950 font-black py-2.5 rounded-xl text-xs transition-colors duration-200"
              >
                Back to Syllabus
              </button>
              
              <button
                onClick={() => setShowArrayModal(false)}
                className="w-full bg-slate-950 border border-slate-700 hover:bg-slate-850 text-slate-300 font-semibold py-2.5 rounded-xl text-xs transition-colors duration-200"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PatternTemplate;
