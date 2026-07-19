import React from 'react';
import { FiAward } from 'react-icons/fi';

const DailyChallengeCard = ({ data, isSolved, onMarkSolved, targetCompany }) => {
  if (!data) return null;

  const getDifficultyClass = (diff) => {
    if (diff === 'Easy') return 'text-emerald-400';
    if (diff === 'Medium') return 'text-amber-400';
    return 'text-rose-400';
  };

  const getDifficultyBlocks = (diff) => {
    if (diff === 'Easy') return 'Easy █░░░';
    if (diff === 'Medium') return 'Medium ██░░';
    return 'Hard ████';
  };

  const patterns = typeof data.pattern === 'string'
    ? data.pattern.split(/[,\/]+/).map(p => p.trim())
    : (Array.isArray(data.pattern) ? data.pattern : (data.patterns || ['General']));

  const rewards = {
    completion: 30,
    bonus: 20,
    firstAttempt: 10,
    perfectSolution: 10,
  };

  const totalXp = rewards.completion + rewards.bonus + rewards.firstAttempt + rewards.perfectSolution;

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-4 shadow-xl relative overflow-hidden group flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300 hover:border-amber-500/20">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="space-y-4 flex-grow">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
          <div className="flex items-center space-x-2">
            <FiAward className="w-4 h-4 text-amber-500 animate-pulse" />
            <h3 className="text-sm font-bold text-slate-200">Daily Challenge</h3>
          </div>
          <span className="text-[9px] font-black text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
            PREMIUM
          </span>
        </div>

        {/* Challenge details */}
        <div className="space-y-3.5">
          <div className="space-y-1">
            <h4 className="text-base font-black text-slate-100 group-hover:text-amber-400 transition-colors duration-200">{data.title}</h4>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold">
              <span className="text-rose-400 border border-rose-500/10 bg-rose-500/[0.02] px-2 py-0.5 rounded">{data.difficulty}</span>
              <span>•</span>
              <span>Solved by 1,450 students</span>
            </div>
          </div>

          {/* Company Frequency */}
          <div className="space-y-1 text-left">
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Frequently Asked In</span>
            <div className="flex flex-wrap gap-1">
              {['Amazon', targetCompany ?? 'Infosys', 'TCS', 'Accenture'].map((c) => (
                <span key={c} className="bg-slate-950 text-slate-300 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-850">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Sizing & Difficulty Meter */}
          <div className="grid grid-cols-2 gap-3 bg-slate-950 p-3 rounded-xl border border-slate-850 text-[11px] font-semibold">
            <div>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Difficulty Meter</span>
              <span className={`${getDifficultyClass(data.difficulty)} font-black block`}>{getDifficultyBlocks(data.difficulty)}</span>
            </div>
            <div>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Success Rate</span>
              <span className="text-slate-200 block">{data.pct || '48% Acceptance'}</span>
            </div>
            <div>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Leaderboard Rank</span>
              <span className="text-amber-400 block">{data.rank || 'Top 12%'}</span>
            </div>
            <div>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Estimated Time</span>
              <span className="text-slate-200 block">{data.time || '35 mins'}</span>
            </div>
          </div>

          {/* Patterns Used */}
          <div className="space-y-1.5 pt-1 text-left">
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Patterns Used</span>
            <div className="flex flex-wrap gap-1">
              {patterns.map((pat) => (
                <span key={pat} className="bg-slate-950 text-sky-400 text-[9px] font-bold px-2 py-0.5 rounded border border-slate-850">
                  {pat}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed XP rewards breakdown */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 text-xs space-y-1.5 font-semibold">
            <div className="flex justify-between text-slate-400">
              <span>Base Completion</span>
              <span className="text-slate-200">+{rewards.completion} XP</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Time Bonus</span>
              <span className="text-slate-200">+{rewards.bonus} XP</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>First Attempt</span>
              <span className="text-sky-400">+{rewards.firstAttempt} XP</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Perfect Sub</span>
              <span className="text-emerald-400">+{rewards.perfectSolution} XP</span>
            </div>
            
            <div className="border-t border-slate-800/80 pt-2 flex items-center justify-between text-slate-200 font-black">
              <span className="text-amber-400">Total XP Reward</span>
              <span className="text-amber-400 text-sm font-black">+{totalXp} XP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-4 pt-2">
        <a 
          href={data.leetcodeUrl || "https://leetcode.com/"}
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 rounded-xl text-xs text-center transition-all duration-200 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]"
        >
          Solve on LeetCode
        </a>
        
        <button
          onClick={onMarkSolved}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
            isSolved
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10'
              : 'bg-slate-950 border border-slate-800 hover:border-amber-500/30 text-slate-300'
          }`}
        >
          <span>{isSolved ? '✔ Solved' : '□ Mark as Solved'}</span>
          {!isSolved && <span className="text-[10px] text-slate-500 font-semibold">(+70 XP)</span>}
        </button>
      </div>
    </div>
  );
};

export default DailyChallengeCard;
