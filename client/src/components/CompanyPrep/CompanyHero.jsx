import React from 'react';

const CompanyHero = ({ company, progress }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="space-y-6 relative z-10">
        {/* Title row */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-black text-sky-400 uppercase tracking-widest block">Company Prep track</span>
            <h1 className="text-3xl font-black text-slate-100 tracking-tight flex items-center gap-2">
              <span className="text-2xl">{company.logo}</span>
              <span>{company.name} Placement Preparation</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-lg">
                {i < company.difficulty ? '★' : '☆'}
              </span>
            ))}
          </div>
        </div>

        {/* Packages block */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {company.packages.map((pkg) => (
            <div key={pkg.title} className="bg-slate-950 p-3 rounded-xl border border-slate-850 text-xs font-semibold space-y-0.5">
              <span className="text-[8px] text-slate-500 uppercase tracking-wider block">{pkg.title}</span>
              <span className="text-slate-200 text-sm font-black text-sky-450 text-sky-400">{pkg.value}</span>
            </div>
          ))}
        </div>

        {/* Dynamic completion progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-400">Preparation Progress</span>
            <span className="text-sky-400 flex items-center gap-2">
              <span className="font-mono">
                {(() => {
                  const filled = Math.max(0, Math.min(10, Math.round(progress / 10)));
                  return '█'.repeat(filled) + '░'.repeat(Math.max(0, 10 - filled));
                })()}
              </span>
              <span>{progress}%</span>
            </span>
          </div>

          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-850 p-0.5">
            <div 
              className="bg-sky-500 h-full rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHero;
