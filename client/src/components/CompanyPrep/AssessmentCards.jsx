import React from 'react';
import { Link } from 'react-router-dom';

const AssessmentCards = ({ assessmentPatterns }) => {
  const patterns = assessmentPatterns ?? [];

  if (patterns.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl text-left">
        <div className="border-b border-slate-800/60 pb-2">
          <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Online Assessment Pattern</h3>
        </div>
        <p className="text-xs text-slate-400 font-semibold pt-4">No online assessment patterns available yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl text-left">
      <div className="border-b border-slate-800/60 pb-2">
        <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Online Assessment Pattern</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {patterns.map((pat) => {
          const cardContent = (
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 flex flex-col justify-between space-y-3 h-full cursor-pointer transition-all duration-300 hover:border-sky-500/30 hover:bg-slate-900/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(56,189,248,0.05)] group">
              <h4 className="text-xs font-black text-slate-100 group-hover:text-sky-400 transition-colors">{pat.title}</h4>
              
              <div className="space-y-2 text-[10px] font-bold">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Weightage</span>
                  <span className="text-sky-400 font-extrabold">{pat.weightage}</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Difficulty</span>
                  <span className="text-slate-200">{pat.difficulty}</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Importance</span>
                  <span className={`px-1.5 py-0.5 rounded text-[8px] uppercase tracking-wider border ${
                    pat.importance === 'Critical' 
                      ? 'text-rose-400 bg-rose-500/10 border-rose-500/20' 
                      : pat.importance === 'High' 
                        ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' 
                        : 'text-sky-400 bg-sky-500/10 border-sky-500/20'
                  }`}>
                    {pat.importance}
                  </span>
                </div>
              </div>
            </div>
          );

          return pat.path ? (
            <Link to={pat.path} key={pat.title} className="block h-full">
              {cardContent}
            </Link>
          ) : (
            <div key={pat.title} className="h-full">
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssessmentCards;
