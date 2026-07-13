import React from 'react';

const Achievements = ({ achievements }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl text-left">
      <div className="border-b border-slate-800/60 pb-2">
        <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Achievements Badges</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs font-semibold">
        {achievements.map((ach) => (
          <div 
            key={ach.name}
            className={`bg-slate-955 bg-slate-950 p-3 rounded-xl border flex items-center gap-3.5 transition-all duration-300 ${
              ach.unlocked 
                ? 'border-sky-500/20 text-slate-202 hover:shadow-[0_0_15px_rgba(56,189,248,0.06)]' 
                : 'border-slate-900 opacity-45'
            }`}
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-base border ${
              ach.unlocked ? 'bg-slate-900 border-sky-500/20 text-sky-400' : 'bg-slate-900/40 border-slate-850 text-slate-605 text-slate-600'
            }`}>
              {ach.badge}
            </div>
            <div className="space-y-0.5 text-left font-semibold">
              <h4 className="font-extrabold text-slate-200">{ach.name}</h4>
              <span className="text-[8.5px] text-slate-500 block uppercase font-bold">{ach.req}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
