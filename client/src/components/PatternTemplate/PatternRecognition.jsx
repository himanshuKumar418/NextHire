import React from 'react';

const PatternRecognition = ({ recognitionKeywords }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl self-stretch flex flex-col justify-between h-full">
      <div className="space-y-3">
        <div className="border-b border-slate-800/60 pb-2 text-left">
          <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Pattern Recognition</h3>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-1">
          {recognitionKeywords.map((ind) => (
            <div 
              key={ind.title} 
              className="bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-850 text-[10px] font-bold text-sky-400 flex items-center gap-1.5 hover:border-sky-500/20 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
              <span>{ind.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 text-[10px] text-slate-400 font-semibold text-left mt-4">
        💡 Match these keyword signals inside problem statements to invoke this strategy.
      </div>
    </div>
  );
};

export default PatternRecognition;
