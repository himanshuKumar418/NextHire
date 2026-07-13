import React from 'react';

const ConceptGrid = ({ conceptCards }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl">
      <div className="border-b border-slate-800/60 pb-2">
        <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Concept Study Grid</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 space-y-1">
          <span className="text-[8px] text-sky-400 font-extrabold uppercase block">WHAT</span>
          <p className="text-slate-300 font-semibold leading-normal">{conceptCards.what}</p>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 space-y-1">
          <span className="text-[8px] text-sky-400 font-extrabold uppercase block">WHEN</span>
          <p className="text-slate-300 font-semibold leading-normal">{conceptCards.when}</p>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 space-y-1">
          <span className="text-[8px] text-sky-400 font-extrabold uppercase block">WHY</span>
          <p className="text-slate-300 font-semibold leading-normal">{conceptCards.why}</p>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 space-y-1">
          <span className="text-[8px] text-emerald-400 font-extrabold uppercase block">TIME COMPLEXITY</span>
          <p className="text-slate-200 font-bold leading-normal">{conceptCards.time}</p>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 space-y-1">
          <span className="text-[8px] text-emerald-400 font-extrabold uppercase block">SPACE COMPLEXITY</span>
          <p className="text-slate-200 font-bold leading-normal">{conceptCards.space}</p>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 space-y-1">
          <span className="text-[8px] text-purple-400 font-extrabold uppercase block">ADVANTAGES</span>
          <p className="text-slate-300 font-semibold leading-normal">{conceptCards.advantages}</p>
        </div>
        <div className="bg-slate-955 bg-slate-950 p-3 rounded-xl border border-slate-850 space-y-1 col-span-1 sm:col-span-2 lg:col-span-3">
          <span className="text-[8px] text-rose-400 font-extrabold uppercase block">LIMITATIONS</span>
          <p className="text-slate-300 font-semibold leading-normal">{conceptCards.limitations}</p>
        </div>
      </div>
    </div>
  );
};

export default ConceptGrid;
