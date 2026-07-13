import React from 'react';

const PatternHero = ({ pattern, solvedCount }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest block">{pattern.category} Pattern</span>
            <h1 className="text-2xl font-black text-slate-100 tracking-tight">
              {pattern.title}
            </h1>
          </div>
          <span className="text-[9px] font-black text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
            MASTERED
          </span>
        </div>

        {/* Compact HUD row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-3 rounded-xl border border-slate-850 text-xs font-semibold">
          <div>
            <span className="text-[8px] text-slate-500 uppercase tracking-wider block mb-0.5">Difficulty</span>
            <span className="text-sky-400 font-bold">{pattern.difficulty}</span>
          </div>
          <div>
            <span className="text-[8px] text-slate-500 uppercase tracking-wider block mb-0.5">Required Time</span>
            <span className="text-slate-200">{pattern.estimatedTime}</span>
          </div>
          <div>
            <span className="text-[8px] text-slate-500 uppercase tracking-wider block mb-0.5">Completion Reward</span>
            <span className="text-emerald-405 text-emerald-400 font-bold">+{pattern.rewardXP} XP</span>
          </div>
          <div>
            <span className="text-[8px] text-slate-500 uppercase tracking-wider block mb-0.5">Checklist Progress</span>
            <span className="text-slate-202 text-slate-200">{solvedCount} / {pattern.questions.length} Solved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternHero;
