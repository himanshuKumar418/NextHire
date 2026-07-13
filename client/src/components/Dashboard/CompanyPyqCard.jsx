import React from 'react';
import { Link } from 'react-router-dom';



const CompanyPyqCard = ({ targetCompany, data, isSolved, onMarkSolved, xp }) => {
  if (!data) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-4 shadow-xl relative overflow-hidden group flex flex-col justify-between h-full">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-sky-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
          <div className="space-y-0.5">
            <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest block">Previous Year Questions</span>
            <h3 className="text-base font-bold text-slate-200">Today's {targetCompany} PYQ</h3>
          </div>
          <span className="text-[9px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
            Core PYQ
          </span>
        </div>

        {/* Question Details */}
        <div className="space-y-2">
          <h4 className="text-base font-black text-slate-100 group-hover:text-sky-400 transition-colors duration-200">{data.title}</h4>
          <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 font-bold">
            <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-850">Asked in {data.year}</span>
            <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-850">Target: {targetCompany}</span>
          </div>
        </div>

        {/* Detailed Stats Grid */}
        <div className="grid grid-cols-2 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-850 text-xs font-semibold">
          <div>
            <span className="text-[9px] text-slate-550 text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Difficulty</span>
            <span className={`font-bold ${
              data.difficulty === 'Hard' ? 'text-rose-400' : data.difficulty === 'Medium' ? 'text-amber-400' : 'text-emerald-400'
            }`}>{data.difficulty}</span>
          </div>
          
          <div>
            <span className="text-[9px] text-slate-550 text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Acceptance</span>
            <span className="text-slate-200">{data.acceptance}</span>
          </div>
          
          <div>
            <span className="text-[9px] text-slate-550 text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Solved By</span>
            <span className="text-slate-200">{xp > 0 ? (data.solvedBy || 1420) : 0} students</span>
          </div>
          
          <div>
            <span className="text-[9px] text-slate-550 text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Average Time</span>
            <span className="text-slate-200">{data.avgTime}</span>
          </div>

          <div>
            <span className="text-[9px] text-slate-550 text-slate-500 font-bold uppercase tracking-wider block mb-0.5">XP Reward</span>
            <span className="text-emerald-450 text-emerald-400">+{data.xpReward} XP</span>
          </div>

          <div>
            <span className="text-[9px] text-slate-550 text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Skill Reward</span>
            <span className="text-sky-400">{data.skillReward}</span>
          </div>
        </div>

        {/* Expected Pattern chips */}
        <div className="space-y-1.5 pt-1 text-left">
          <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Expected Pattern</span>
          <div className="flex flex-wrap gap-1.5">
            {(data.patterns || ['Arrays', 'Two Pointer', 'Strings']).map((pat) => (
              <span key={pat} className="bg-slate-950 text-sky-400 text-[9px] font-bold px-2.5 py-1 rounded border border-slate-850">
                {pat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-2">
        <div className="flex gap-3">
          <Link 
            to="/prepare/dsa"
            className="flex-grow flex-1 bg-slate-950 border border-slate-750 hover:bg-slate-850 text-slate-300 font-semibold py-2.5 rounded-xl text-xs text-center transition-colors duration-200"
          >
            View Similar
          </Link>
          <a 
            href={data.leetcodeUrl || 'https://leetcode.com/'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow flex-1 bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-2.5 rounded-xl text-xs text-center shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            Solve on LeetCode
          </a>
        </div>

        <button
          onClick={onMarkSolved}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
            isSolved
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10'
              : 'bg-slate-950 border border-slate-800 hover:border-sky-500/30 text-slate-300'
          }`}
        >
          <span>{isSolved ? '✔ Solved' : '□ Mark as Solved'}</span>
          {!isSolved && <span className="text-[10px] text-slate-500 font-semibold">(+70 XP)</span>}
        </button>
      </div>
    </div>
  );
};

export default CompanyPyqCard;
