import React from 'react';
import { FiCpu } from 'react-icons/fi';

const AiMentorCard = ({ targetCompany, data }) => {
  if (!data) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-5 shadow-xl relative overflow-hidden group flex flex-col justify-between h-full">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
          <div className="space-y-0.5">
            <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest block">AI Mentor</span>
            <h3 className="text-base font-bold text-slate-200">🤖 {targetCompany} Prep</h3>
          </div>
          <span className="flex items-center gap-1.5 text-[9px] font-black text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.1)]">
            <FiCpu className="w-3 h-3 text-sky-400" />
            ACTIVE
          </span>
        </div>

        {/* Mentorship Content */}
        <div className="space-y-3.5 text-xs">
          {/* DSA block */}
          <div className="bg-slate-950/60 border border-slate-850 p-3.5 rounded-xl space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-sky-400 font-extrabold uppercase tracking-wide">DSA</span>
              <span className="text-[9px] text-slate-500">Solve Recommended</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {(data.dsaProblems || []).map((problem) => (
                <span key={problem} className="bg-slate-900 border border-slate-800 text-slate-300 font-semibold px-2 py-1 rounded">
                  • {problem}
                </span>
              ))}
            </div>
          </div>

          {/* Core Subject block */}
          <div className="bg-slate-950/60 border border-slate-850 p-3.5 rounded-xl space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-sky-400 font-extrabold uppercase tracking-wide">Core Subject</span>
              <span className="text-[9px] text-slate-500">Revision Targets</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {(data.coreTopics || []).map((topic) => (
                <span key={topic} className="bg-slate-900 border border-slate-800 text-slate-300 font-semibold px-2 py-1 rounded">
                  • {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Aptitude block */}
          <div className="bg-slate-950/60 border border-slate-850 p-3.5 rounded-xl space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-sky-400 font-extrabold uppercase tracking-wide">Aptitude</span>
              <span className="text-[9px] text-slate-500">Target Company Prep</span>
            </div>
            <div className="pt-1 flex items-center justify-between text-slate-300">
              <span className="font-semibold">{data.aptitudeGoal}</span>
              <span className="text-[10px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-amber-500 font-bold">{data.aptitudeVal}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Goal Summary HUD Section */}
      <div className="space-y-2 pt-1">
        <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-wider block">Today's Goal Summary</h4>
        <div className="grid grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-850 text-xs font-semibold">
          <div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Est. Study Time</span>
            <span className="text-slate-200">{data.estStudyTime}</span>
          </div>
          <div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Potential XP</span>
            <span className="text-emerald-400 font-bold">+{data.potentialXp} XP</span>
          </div>
          <div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Difficulty</span>
            <span className="text-amber-400 font-bold">{data.difficulty}</span>
          </div>
          <div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Completion Bonus</span>
            <span className="text-emerald-400 font-bold">+{data.completionBonus} XP</span>
          </div>
          <div className="col-span-2 border-t border-slate-800/80 pt-2 flex justify-between items-center text-[10px]">
            <span className="text-slate-400">Daily Streak Bonus</span>
            <span className="text-emerald-400 font-black">+{data.streakBonus} XP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiMentorCard;
