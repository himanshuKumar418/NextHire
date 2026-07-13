import React from 'react';
import { useNavigate } from 'react-router-dom';

const TimelineCard = ({ timeline }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/prepare')}
      className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-4 shadow-xl cursor-pointer hover:border-sky-500/30 hover:scale-[1.005] transition-all duration-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
        <h3 className="text-sm font-bold text-slate-200">Preparation Timeline</h3>
        <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
          Weekly Map
        </span>
      </div>

      {/* Timeline List */}
      <div className="space-y-4 pl-1 max-h-[300px] overflow-y-auto pr-1">
        {timeline.map((item, index) => {
          let badge = null;
          let textColor = 'text-slate-400';
          let borderHighlight = 'border-slate-800';
          
          if (item.status === 'completed') {
            badge = (
              <span className="text-[8px] sm:text-[9px] font-bold text-emerald-400 uppercase bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 whitespace-nowrap">
                Completed
              </span>
            );
            textColor = 'text-slate-500 line-through';
            borderHighlight = 'border-emerald-500';
          } else if (item.status === 'current') {
            badge = (
              <span className="text-[8px] sm:text-[9px] font-bold text-sky-400 uppercase bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20 whitespace-nowrap">
                Current
              </span>
            );
            textColor = 'text-sky-400 font-bold';
            borderHighlight = 'border-sky-500';
          }

          return (
            <div key={item.week} className="flex gap-3 relative pb-2 last:pb-0">
              {/* Connector line */}
              {index < timeline.length - 1 && (
                <div className="absolute left-[7px] top-[14px] bottom-0 w-0.5 bg-slate-800/60"></div>
              )}
              {/* Node dot */}
              <div className={`w-3.5 h-3.5 rounded-full bg-slate-950 border-2 ${borderHighlight} mt-1 relative z-10 flex-shrink-0`}></div>
              
              <div className="flex items-center justify-between gap-3 flex-grow text-xs text-left">
                <div className="space-y-0.5">
                  <span className="text-[9px] text-slate-550 text-slate-500 font-bold block">{item.week}</span>
                  <span className={`${textColor} font-semibold`}>{item.topic}</span>
                </div>
                {badge}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineCard;
