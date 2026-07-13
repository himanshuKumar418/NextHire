import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const HiringTimeline = ({ hiringProcess }) => {
  const steps = hiringProcess ?? [];

  if (steps.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl text-left">
        <div className="border-b border-slate-800/60 pb-2">
          <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Hiring Process Timeline</h3>
        </div>
        <p className="text-xs text-slate-400 font-semibold pt-4">No hiring process timeline available yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl text-left">
      <div className="border-b border-slate-800/60 pb-2">
        <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Hiring Process Timeline</h3>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-4 justify-between select-none">
        {steps.map((proc, idx) => {
          const isLast = idx === steps.length - 1;

          return (
            <React.Fragment key={proc.stage}>
              {/* Step Card */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 flex-grow flex flex-col justify-between space-y-2 w-full md:w-1/3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center text-[10px] font-black">
                      {idx + 1}
                    </span>
                    <h4 className="text-xs font-black text-slate-100">{proc.stage}</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
                    {proc.desc}
                  </p>
                </div>
              </div>

              {/* Connected Arrow */}
              {!isLast && (
                <div className="hidden md:flex items-center justify-center text-slate-700">
                  <FiChevronRight className="w-5 h-5 text-slate-600 animate-pulse" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default HiringTimeline;
