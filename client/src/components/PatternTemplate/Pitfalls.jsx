import React from 'react';

const Pitfalls = ({ pitfalls }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between h-full">
      <div className="space-y-3.5 w-full">
        <div className="border-b border-slate-800/60 pb-2 text-left">
          <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Pitfalls & Alerts</h3>
        </div>

        <div className="space-y-3 text-xs leading-normal">
          {pitfalls.map((mist, idx) => (
            <div key={idx} className="bg-slate-950 p-3 rounded-lg border border-slate-850 space-y-1.5 text-left">
              <div className="flex items-center gap-1.5 text-rose-450 text-rose-400 font-bold">
                <span>❌</span>
                <span>{mist.mistake}</span>
              </div>
              {mist.correct && (
                <div className="flex items-center gap-1.5 text-emerald-450 text-emerald-400 font-bold pt-1 border-t border-slate-900/60 mt-1">
                  <span>✔</span>
                  <span>{mist.correct}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pitfalls;
