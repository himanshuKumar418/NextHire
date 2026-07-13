import React from 'react';

const Timeline = ({ pyqs }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between h-full">
      <div className="space-y-3.5 w-full">
        <div className="border-b border-slate-800/60 pb-2 text-left">
          <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">timeline PYQs</h3>
        </div>

        {/* Vertical timeline steps */}
        <div className="relative pl-5 space-y-3.5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800 text-left">
          {pyqs.map((pyq) => (
            <div key={pyq.title} className="relative text-xs">
              <div className="absolute -left-5 top-1.5 w-2 h-2 rounded-full bg-sky-500 ring-4 ring-slate-900"></div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-850 space-y-0.5">
                <div className="flex justify-between items-center text-[9px] font-bold text-slate-500">
                  <span>{pyq.company} ({pyq.year})</span>
                  <span className="text-sky-400 font-extrabold">{pyq.diff}</span>
                </div>
                <h4 className="text-slate-202 text-slate-200 font-extrabold">{pyq.title}</h4>
                <span className="text-[9.5px] text-slate-550 text-slate-500 font-semibold block">{pyq.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
