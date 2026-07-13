import React from 'react';

const CompanyStats = ({ companyFrequency }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl">
      <div className="border-b border-slate-800/60 pb-2 text-left">
        <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Company Frequency</h3>
      </div>

      <div className="space-y-3.5 text-xs">
        {companyFrequency.map((c) => (
          <div key={c.name} className="space-y-1 text-left font-semibold">
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-slate-350 text-slate-300">{c.name}</span>
              <span className="text-sky-400 font-bold">{c.percent}%</span>
            </div>

            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850 flex items-stretch">
              <div 
                className="bg-sky-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${c.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyStats;
