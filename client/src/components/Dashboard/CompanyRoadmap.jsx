import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';

const CompanyRoadmap = ({ targetCompany, roadmapList, onShowToast }) => {
  const navigate = useNavigate();

  if (!roadmapList) return null;

  const handleStepClick = (step) => {
    if (step.status === 'locked') {
      onShowToast('Complete previous stage first.');
    } else {
      navigate(step.path);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-5 shadow-xl">
      {/* Header */}
      <h3 className="text-lg font-bold text-slate-200 border-b border-slate-800/60 pb-3">
        {targetCompany} Roadmap
      </h3>

      {/* Vertical Timeline Steps */}
      <div className="space-y-3.5 pt-1">
        {roadmapList.map((step, index) => {
          let borderClass = 'border-slate-800/80 bg-slate-950/40 text-slate-500 opacity-60';
          let iconElement = <FiLock className="w-3.5 h-3.5 text-slate-600" />;
          let textClass = 'text-slate-500';
          let arrowClass = 'text-slate-800';
          
          if (step.status === 'completed') {
            borderClass = 'border-emerald-500/20 bg-emerald-500/[0.01] hover:border-emerald-500/50 hover:scale-[1.01]';
            iconElement = (
              <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                ✔
              </span>
            );
            textClass = 'text-slate-300 font-bold';
            arrowClass = 'text-emerald-500/40';
          } else if (step.status === 'current') {
            borderClass = 'border-sky-500 bg-sky-500/[0.01] hover:border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.06)] hover:scale-[1.01] font-black';
            iconElement = (
              <span className="text-[9px] font-black text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 animate-pulse">
                Current
              </span>
            );
            textClass = 'text-sky-400 font-black';
            arrowClass = 'text-sky-500/40';
          }

          return (
            <React.Fragment key={step.id}>
              {index > 0 && (
                <div className="flex justify-center -my-2">
                  <span className={`text-sm font-extrabold ${arrowClass}`}>↓</span>
                </div>
              )}
              
              <div 
                onClick={() => handleStepClick(step)}
                className={`border p-3.5 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-200 ${borderClass}`}
              >
                <div className="flex items-center space-x-3 text-left">
                  <span className="text-[10px] text-slate-500 font-bold">Step {index + 1}</span>
                  <span className={`text-sm ${textClass}`}>{step.name}</span>
                </div>
                {iconElement}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyRoadmap;
