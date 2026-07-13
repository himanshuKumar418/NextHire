import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import PatternLayout from '../components/PatternDsa/PatternLayout.jsx';
import { categoriesList } from '../components/PatternDsa/patternData.js';
import { useDashboard } from '../context/DashboardContext.jsx';
import { getOverallArraysProgress, getPatternProgress } from '../data/patternRegistry.js';

const PatternHome = () => {
  const {
    displayXp,
    displayStreak,
    displayStudyHours
  } = useDashboard();

  // Dynamic spec calculations
  const totalPatterns = 17;
  const completedPatterns = ['two-pointer', 'sliding-window', 'prefix-sum', 'kadane', 'binary-search'].filter(
    id => getPatternProgress(id) > 0
  ).length;
  const totalXp = displayXp;
  const estHours = displayStudyHours;
  const currentStreak = displayStreak === 1 ? '1 Day' : `${displayStreak} Days`;
  const overallProgress = getOverallArraysProgress(); // percentage based on actual completed questions

  return (
    <PatternLayout>
      <div className="space-y-8 text-left">
        
        {/* Hero Welcome HUD block */}
        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-6 relative z-10">
            <div className="space-y-1.5">
              <span className="text-sm font-bold text-sky-400 tracking-wide uppercase">Interactive Roadmap</span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
                Pattern DSA
              </h1>
              <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
                Master the fundamental coding patterns frequently tested in quantitative, technical, and analytical placement assessments.
              </p>
            </div>

            {/* Quick specifications grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-850 text-xs font-semibold">
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Total Patterns</span>
                <span className="text-slate-202 text-slate-200 text-sm font-black">{totalPatterns} Patterns</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Completed</span>
                <span className="text-emerald-400 text-sm font-black">{completedPatterns} Pattern</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">XP Earned</span>
                <span className="text-amber-400 text-sm font-black">+{totalXp} XP</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Est. Hours</span>
                <span className="text-slate-202 text-slate-200 text-sm font-black">{estHours} Hours</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Current Streak</span>
                <span className="text-slate-202 text-slate-200 text-sm font-black">🔥 {currentStreak}</span>
              </div>
            </div>

            {/* Global progress tracker */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-400">Overall Progress</span>
                <span className="text-sky-400">{overallProgress}% Completed</span>
              </div>
              
              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-850 p-0.5">
                <div 
                  className="bg-sky-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(56,189,248,0.2)]"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-4">
          <div className="border-b border-slate-900 pb-2">
            <h2 className="text-lg font-black text-slate-200 uppercase tracking-wider">Pattern Categories</h2>
            <p className="text-xs text-slate-400">Choose a data structure below to start mastering its coding interview patterns.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {categoriesList.map((cat) => {
              const Icon = cat.icon;
              return (
                <div 
                  key={cat.id}
                  className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between space-y-5 hover:-translate-y-1 transition-all duration-300 hover:border-sky-500/20 group"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400">
                        <Icon className="w-5 h-5 text-sky-400" />
                      </div>
                      
                      <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${
                        cat.difficulty === 'Hard' 
                          ? 'text-rose-400 bg-rose-500/10 border-rose-500/20' 
                          : cat.difficulty === 'Medium' 
                            ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                            : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                      }`}>
                        {cat.difficulty}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-slate-200 group-hover:text-sky-400 transition-colors duration-200">
                      {cat.name}
                    </h3>

                    {/* Meta Specs Grid */}
                    <div className="grid grid-cols-3 gap-2 bg-slate-950 p-3 rounded-xl border border-slate-850 text-[10px] font-bold">
                      <div>
                        <span className="text-slate-500 block">Questions</span>
                        <span className="text-slate-300">{cat.questions} Qs</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Duration</span>
                        <span className="text-slate-300">{cat.hours} Hrs</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">XP Reward</span>
                        <span className="text-emerald-400">+{cat.xp} XP</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress & Trigger */}
                  <div className="space-y-3.5 pt-1">
                    {(() => {
                      const catProgressVal = cat.id === 'arrays' ? getOverallArraysProgress() : 0;
                      return (
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[9px] font-bold text-slate-400">
                            <span>Progress</span>
                            <span>{catProgressVal}%</span>
                          </div>
                          <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                            <div className="bg-sky-500 h-full rounded-full transition-all duration-500" style={{ width: `${catProgressVal}%` }}></div>
                          </div>
                        </div>
                      );
                    })()}

                    <Link 
                      to={`/prepare/patterns/${cat.id}`}
                      className="w-full bg-slate-950 border border-slate-700 hover:bg-slate-850 text-sky-400 hover:text-sky-300 font-semibold py-2.5 rounded-xl text-xs text-center flex items-center justify-center gap-1.5 transition-colors duration-200"
                    >
                      <span>Continue Category</span>
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </PatternLayout>
  );
};

export default PatternHome;
