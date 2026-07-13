import React, { useState } from 'react';
import { FiZap, FiAward, FiStar, FiTrendingUp } from 'react-icons/fi';

const MotivationCard = ({ targetCompany, score }) => {
  // Choosing a random icon upon mount
  const [selectedIcon] = useState(() => {
    const icons = [FiZap, FiAward, FiStar, FiTrendingUp];
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
  });

  const IconComponent = selectedIcon;

  // Static enriched motivation items for professional context
  const successFact = `Final year students using structured daily schedules report a 40% higher placement rate in companies like ${targetCompany}.`;
  const productivityTip = "Complete one core subject revision topic before switching to complex programming algorithms.";
  const reminder = "Small consistency beats long irregular sessions. Spend at least 30 minutes on revision daily.";

  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-6 rounded-2xl space-y-4 text-left shadow-xl relative overflow-hidden flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center space-x-2.5 border-b border-slate-800/40 pb-3">
        <IconComponent className="w-4 h-4 text-yellow-500 animate-pulse" />
        <h3 className="text-sm font-bold text-slate-200">Daily Motivation</h3>
      </div>
      
      {/* Motivation Blocks */}
      <div className="space-y-3.5 text-xs">
        {/* Success Fact */}
        <div className="space-y-1">
          <span className="text-[9px] text-sky-400 font-extrabold uppercase tracking-wide block">Success Fact</span>
          <div className="p-3 bg-slate-950/60 border border-slate-850 rounded-xl">
            <p className="text-slate-300 font-semibold leading-relaxed">
              "{successFact}"
            </p>
          </div>
        </div>

        {/* Small Productivity Tip */}
        <div className="space-y-1">
          <span className="text-[9px] text-amber-500 font-extrabold uppercase tracking-wide block">Productivity Tip</span>
          <div className="p-3 bg-slate-950/60 border border-slate-850 rounded-xl">
            <p className="text-slate-300 font-semibold leading-relaxed">
              "{productivityTip}"
            </p>
          </div>
        </div>

        {/* Today's Reminder */}
        <div className="space-y-1">
          <span className="text-[9px] text-emerald-400 font-extrabold uppercase tracking-wide block">Today's Reminder</span>
          <div className="p-3 bg-emerald-950/10 border border-emerald-900/20 rounded-xl">
            <p className="text-emerald-400/90 font-semibold leading-relaxed">
              {reminder}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotivationCard;
