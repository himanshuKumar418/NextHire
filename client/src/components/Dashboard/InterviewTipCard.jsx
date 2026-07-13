import React, { useState, useEffect } from 'react';
import { FiInfo, FiLayers, FiAlertTriangle, FiCpu, FiMessageSquare } from 'react-icons/fi';

const InterviewTipCard = ({ targetCompany, tip }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // In case tip is a string (fallback safety)
  const hrTip = tip?.hrTip || tip || "Stay confident and speak clearly.";
  const techTip = tip?.techTip || "Always dry-run your code with edge cases.";
  const companySpecificTip = `${targetCompany} focuses heavily on OOP design patterns, relational schemas, and array puzzles.`;
  const commonMistake = tip?.commonMistake || "Starting to write code before clarifying time/space complexities.";
  const qotd = `Question of the Day: How do you detect and resolve deadlocks in SQL transaction blocks?`;

  const tabs = [
    { label: "Technical Tip", content: techTip, icon: FiCpu, color: "text-sky-400" },
    { label: "HR Tip", content: hrTip, icon: FiMessageSquare, color: "text-amber-500" },
    { label: "Company Tip", content: companySpecificTip, icon: FiLayers, color: "text-purple-400" },
    { label: "Common Mistake", content: commonMistake, icon: FiAlertTriangle, color: "text-rose-450 text-rose-400" },
    { label: "Question of the Day", content: qotd, icon: FiInfo, color: "text-emerald-450 text-emerald-400" }
  ];

  // Rotate automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [tabs.length]);

  const ActiveIcon = tabs[activeIndex].icon;

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-4 shadow-xl relative overflow-hidden group flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300 hover:border-sky-500/20">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-sky-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="space-y-4 flex-grow flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
          <div className="flex items-center space-x-2">
            <ActiveIcon className={`w-4 h-4 ${tabs[activeIndex].color} animate-pulse`} />
            <h3 className="text-sm font-bold text-slate-200">{targetCompany} Rotation HUD</h3>
          </div>
          <span className="text-[8px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 animate-pulse">
            ROTATING TIP
          </span>
        </div>

        {/* Carousel Content */}
        <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl flex-grow flex flex-col justify-center min-h-[100px] transition-all duration-300">
          <span className={`text-[8px] font-black uppercase tracking-wider block mb-1.5 ${tabs[activeIndex].color}`}>
            {tabs[activeIndex].label}
          </span>
          <p className="text-[11px] text-slate-200 font-semibold leading-relaxed transition-all duration-200">
            "{tabs[activeIndex].content}"
          </p>
        </div>

        {/* Interactive Indicator Tabs */}
        <div className="flex justify-center items-center gap-1.5 pt-2">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveIndex(idx)}
              title={tab.label}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? 'bg-sky-500 scale-125 shadow-[0_0_8px_rgba(56,189,248,0.5)]' 
                  : 'bg-slate-800 hover:bg-slate-750'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewTipCard;
