import React from 'react';
import { Link } from 'react-router-dom';
import { FiCpu } from 'react-icons/fi';

const SmartNextStep = ({ targetCompany, data, onTriggerXp }) => {
  if (!data) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-5 shadow-xl relative overflow-hidden group">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-all duration-300"></div>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
        <div className="space-y-0.5">
          <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest block">AI Recommendation</span>
          <h3 className="text-lg font-bold text-slate-200">🎯 Smart Next Step</h3>
        </div>
        
        {/* Animated AI Badge */}
        <span className="flex items-center gap-1.5 text-[9px] font-black text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.1)] animate-pulse">
          <FiCpu className="w-3 h-3 text-sky-400" />
          AI SUGGESTED
        </span>
      </div>

      {/* Info Block */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-lg font-black text-sky-400 tracking-tight">{data.topic}</h4>
          <div className="text-xs text-slate-400 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-850">
            <span className="text-slate-500 font-bold block text-[9px] uppercase tracking-wider mb-1">Reason</span>
            {data.reason}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-950 p-3.5 rounded-xl border border-slate-850/80 text-xs font-semibold">
          <div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Difficulty</span>
            <span className="text-amber-400 font-bold">{data.difficulty}</span>
          </div>
          <div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Est. Time</span>
            <span className="text-slate-200">{data.time}</span>
          </div>
          <div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Remaining</span>
            <span className="text-slate-200">{data.remainingQs} Qs</span>
          </div>
          <div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Progress</span>
            <span className="text-emerald-455 text-emerald-400 font-bold">{data.solvedQs} / {data.totalQs}</span>
          </div>
        </div>
      </div>

      {/* Action and Progress Bar */}
      <div className="space-y-4 pt-1">
        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850">
          <div 
            className="bg-sky-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${(data.solvedQs / data.totalQs) * 100}%` }}
          ></div>
        </div>
        
        <Link 
          to={data.path}
          onClick={(e) => onTriggerXp(e)}
          className="block w-full bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-3 rounded-xl text-xs text-center shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          Continue Learning
        </Link>
      </div>
    </div>
  );
};

export default SmartNextStep;
