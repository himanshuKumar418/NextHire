import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowRight, FiLock, FiInfo } from 'react-icons/fi';
import PatternLayout from '../components/PatternDsa/PatternLayout.jsx';
import { categoriesList } from '../components/PatternDsa/patternData.js';
import { 
  getPatternProgress, 
  isPatternUnlocked, 
  getOverallArraysProgress,
  getPatternData 
} from '../data/patternRegistry.js';

const PatternCategory = ({ categoryProp }) => {
  const params = useParams();
  const category = categoryProp || params.category;

  // Find active category configuration (fallback to arrays)
  const activeCategory = categoriesList.find((cat) => cat.id === category) || categoriesList[0];

  const patternsList = [
    { id: 'two-pointer', name: 'Two Pointer', estTime: '2.5 Hours', xpReward: 100 },
    { id: 'sliding-window', name: 'Sliding Window', estTime: '2.0 Hours', xpReward: 80 },
    { id: 'prefix-sum', name: 'Prefix Sum', estTime: '1.5 Hours', xpReward: 50 },
    { id: 'kadane', name: "Kadane's Algorithm", estTime: '1.0 Hours', xpReward: 40 },
    { id: 'binary-search', name: 'Binary Search', estTime: '2.5 Hours', xpReward: 90 }
  ];

  // Local state to re-render when local storage XP changes
  const [xpUpdate, setXpUpdate] = useState(0);

  useEffect(() => {
    const handleXpChanged = () => {
      setXpUpdate((p) => p + 1);
    };
    window.addEventListener('xp-changed', handleXpChanged);
    return () => window.removeEventListener('xp-changed', handleXpChanged);
  }, []);

  const overallProgress = category === 'arrays' ? getOverallArraysProgress() : activeCategory.progress;
  const progressBlocks = Math.max(0, Math.min(10, Math.round(overallProgress / 10)));
  const progressBlocksString = '█'.repeat(progressBlocks) + '░'.repeat(10 - progressBlocks);

  return (
    <PatternLayout>
      <div className="space-y-8 text-left">
        
        {/* Category Hero Block */}
        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-6 relative z-10">
            <div className="space-y-1">
              <span className="text-xs font-black text-sky-400 uppercase tracking-widest block">Category roadmap</span>
              <h1 className="text-3xl font-black text-slate-100 tracking-tight">
                {activeCategory.name}
              </h1>
              <p className="text-sm text-slate-400 max-w-lg leading-relaxed font-medium">
                Master all {activeCategory.name} patterns required for placements. Master conceptual foundations, dry-run pointer visualizers, and build coding consistency.
              </p>
            </div>

            {/* Metrics HUD */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-850 text-xs font-semibold">
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Total Questions</span>
                <span className="text-slate-202 text-slate-200 text-sm font-black">75 Questions</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Time Required</span>
                <span className="text-slate-202 text-slate-200 text-sm font-black">12 Hours</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Category XP</span>
                <span className="text-amber-400 text-sm font-black">+{activeCategory.xp} XP</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Average Difficulty</span>
                <span className="text-slate-202 text-slate-200 text-sm font-black">{activeCategory.difficulty}</span>
              </div>
            </div>

            {/* Overall Progress */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-400">Overall Progress</span>
                <span className="text-sky-400 flex items-center gap-2">
                  <span className="font-mono">{progressBlocksString}</span>
                  <span>{overallProgress}%</span>
                </span>
              </div>
              
              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-850 p-0.5">
                <div 
                  className="bg-sky-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Patterns List grid */}
        <div className="space-y-4">
          <div className="border-b border-slate-900 pb-2">
            <h2 className="text-lg font-black text-slate-205 text-slate-200 uppercase tracking-wider">Algorithmic Patterns</h2>
            <p className="text-xs text-slate-400">Complete each pattern module systematically to establish structural fluency.</p>
          </div>

          {category === 'arrays' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {patternsList.map((pat) => {
                const unlocked = isPatternUnlocked(pat.id);
                const progress = getPatternProgress(pat.id);
                const pData = getPatternData('arrays', pat.id);

                return (
                  <div 
                    key={pat.id}
                    className={`bg-slate-900 border p-6 rounded-2xl flex flex-col justify-between space-y-5 hover:-translate-y-1 transition-all duration-300 group ${
                      unlocked ? 'border-slate-800 hover:border-sky-500/20' : 'border-slate-900 opacity-60'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest">
                          {activeCategory.name} Track
                        </span>
                        
                        {unlocked ? (
                          <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                            pData.difficulty === 'Hard' 
                              ? 'text-rose-400 bg-rose-500/10 border-rose-500/20' 
                              : pData.difficulty === 'Medium' 
                                ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                                : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                          }`}>
                            {pData.difficulty}
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[9px] font-black text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-850">
                            <FiLock className="w-2.5 h-2.5" />
                            LOCKED
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-black text-slate-200 group-hover:text-sky-400 transition-colors duration-200">
                        {pat.name}
                      </h3>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-2 bg-slate-950 p-3 rounded-xl border border-slate-850 text-[10px] font-bold">
                        <div>
                          <span className="text-slate-500 block">Questions</span>
                          <span className="text-slate-202 text-slate-200">15 Questions</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Est. Time</span>
                          <span className="text-slate-202 text-slate-200">{pat.estTime}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">XP Reward</span>
                          <span className="text-emerald-400 font-bold">+{pat.xpReward} XP</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions & progress bars */}
                    <div className="space-y-3.5 pt-1">
                      {unlocked && (
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[9px] font-bold text-slate-400">
                            <span>Pattern Progress</span>
                            <span>{progress}%</span>
                          </div>
                          <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                            <div className="bg-sky-500 h-full rounded-full" style={{ width: `${progress}%` }}></div>
                          </div>
                        </div>
                      )}

                      {unlocked ? (
                        <Link 
                          to={`/prepare/patterns/arrays/${pat.id}`}
                          className="w-full bg-slate-955 bg-slate-950 border border-slate-700 hover:bg-slate-850 text-sky-400 hover:text-sky-300 font-semibold py-2.5 rounded-xl text-xs text-center flex items-center justify-center gap-1.5 transition-colors duration-200"
                        >
                          <span>{progress > 0 ? 'Continue Pattern' : 'Start Pattern'}</span>
                          <FiArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <button 
                          disabled
                          className="w-full bg-slate-950 border border-slate-850 text-slate-600 font-semibold py-2.5 rounded-xl text-xs text-center flex items-center justify-center gap-1.5 cursor-not-allowed select-none"
                        >
                          <FiLock className="w-3.5 h-3.5 text-slate-600" />
                          <span>Locked (Reach 80% on previous pattern)</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center space-y-3">
              <FiInfo className="w-8 h-8 text-sky-400 mx-auto animate-bounce" />
              <h3 className="text-base font-bold text-slate-200">Syllabus Expansion Active</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                Patterns for {activeCategory.name} are currently being compiled. Review the completed Arrays track for placement prep samples.
              </p>
              <Link 
                to="/prepare/patterns/arrays"
                className="inline-block bg-sky-500 hover:bg-sky-600 text-slate-955 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors duration-200"
              >
                Go to Arrays Patterns
              </Link>
            </div>
          )}
        </div>

      </div>
    </PatternLayout>
  );
};

export default PatternCategory;
