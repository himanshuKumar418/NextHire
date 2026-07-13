import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecommendationCard = ({ targetCompany, recommendations, onTriggerXp }) => {
  // Choose a random recommendation upon mount
  const [selectedRec] = useState(() => {
    if (!recommendations || recommendations.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * recommendations.length);
    return recommendations[randomIndex];
  });

  if (!selectedRec) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-left space-y-4 shadow-xl relative overflow-hidden group">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-300"></div>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
        <h3 className="text-sm font-bold text-slate-200">Today's Recommendation</h3>
        <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
          Daily Pick
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3.5">
        <div className="space-y-1">
          <h4 className="text-base font-black text-sky-400">{selectedRec.name}</h4>
          <div className="text-xs text-slate-400 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-850">
            <span className="text-slate-500 font-bold block text-[9px] uppercase tracking-wider mb-1">Reason</span>
            {selectedRec.reason.replace('Target Company', targetCompany)}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-850/80 text-xs font-semibold">
          <div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Est. Time</span>
            <span className="text-slate-200">{selectedRec.time}</span>
          </div>
          <div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Difficulty</span>
            <span className="text-amber-400 font-bold">{selectedRec.difficulty}</span>
          </div>
          <div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">XP Reward</span>
            <span className="text-emerald-450 text-emerald-400 font-bold">+{selectedRec.xpReward} XP</span>
          </div>
        </div>
      </div>

      <Link 
        to={selectedRec.path}
        onClick={(e) => onTriggerXp(e)}
        className="block w-full bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-2.5 rounded-xl text-xs text-center shadow-md hover:-translate-y-0.5 transition-all duration-200"
      >
        Start Practice
      </Link>
    </div>
  );
};

export default RecommendationCard;
