import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import { categoriesList } from './patternData.js';
import { 
  getPatternProgress, 
  isPatternUnlocked, 
  getOverallArraysProgress 
} from '../../data/patternRegistry.js';

const PatternLayout = ({ children }) => {
  const location = useLocation();

  // Collapsible left navigation states
  const [expandedCategory, setExpandedCategory] = useState(() => {
    if (location.pathname.includes('/arrays')) return 'arrays';
    if (location.pathname.includes('/strings')) return 'strings';
    return null;
  });


  const patternsSublist = [
    { id: 'two-pointer', name: 'Two Pointer' },
    { id: 'sliding-window', name: 'Sliding Window' },
    { id: 'prefix-sum', name: 'Prefix Sum' },
    { id: 'kadane', name: "Kadane's Algorithm" },
    { id: 'binary-search', name: 'Binary Search' }
  ];

  return (
    <div className="flex-grow bg-slate-955 bg-slate-950 px-2 sm:px-4 py-8 w-full text-left">
      <div className="max-w-[1700px] mx-auto flex gap-6 w-full items-start">
        
        {/* 1. Left Sticky Sidebar: Collapsible Navigation */}
        <aside className="hidden lg:block w-60 bg-slate-900 border border-slate-800 p-4 rounded-xl sticky top-24 shrink-0 space-y-4">
          <div className="border-b border-slate-800/60 pb-2">
            <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest block">Syllabus</span>
            <h3 className="text-xs font-bold text-slate-205 text-slate-200">DSA Categories</h3>
          </div>

          <nav className="space-y-1 text-xs font-semibold">
            {categoriesList.map((cat) => {
              const Icon = cat.icon;
              const isCatActive = location.pathname.includes(`/prepare/patterns/${cat.id}`);
              const isExpanded = expandedCategory === cat.id;

              // Overall category progress
              const overallProgVal = cat.id === 'arrays' ? getOverallArraysProgress() : cat.progress;

              return (
                <div key={cat.id} className="space-y-0.5">
                  <button 
                    onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
                    className={`w-full flex items-center justify-between p-2 rounded-xl transition-all duration-200 ${
                      isCatActive 
                        ? 'bg-sky-500/10 text-sky-400 font-extrabold border border-sky-500/10 shadow-[0_0_15px_rgba(56,189,248,0.02)]' 
                        : 'hover:bg-slate-850 hover:text-slate-200 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-3.5 h-3.5 text-slate-500" />
                      <span>{cat.name}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[9px] text-sky-400">{overallProgVal}%</span>
                      <span className="text-[9px] text-slate-600 font-bold">
                        {isExpanded ? '▼' : '▶'}
                      </span>
                    </div>
                  </button>

                  {/* Arrays dynamic sublist */}
                  {isExpanded && cat.id === 'arrays' && (
                    <div className="pl-3.5 space-y-0.5 border-l border-slate-850 ml-3.5 mt-0.5">
                      {patternsSublist.map((pat) => {
                        const unlocked = isPatternUnlocked(pat.id);
                        const progress = getPatternProgress(pat.id);
                        const isActive = location.pathname.includes(`/${pat.id}`);
                        
                        return (
                          <div key={pat.id} className="w-full">
                            {unlocked ? (
                              <Link 
                                to={`/prepare/patterns/arrays/${pat.id}`}
                                className={`flex items-center justify-between py-1.5 px-2.5 rounded text-[11px] transition-colors ${
                                  isActive 
                                    ? 'text-sky-400 font-bold bg-slate-850/80 border-l border-sky-500' 
                                    : 'text-slate-500 hover:text-slate-300'
                                }`}
                              >
                                <div className="flex items-center space-x-1.5">
                                  {progress === 100 ? (
                                    <span className="text-emerald-400">✔</span>
                                  ) : (
                                    <span className="text-slate-500">○</span>
                                  )}
                                  <span className="truncate">{pat.name}</span>
                                </div>
                                <span className="text-[9px] text-slate-500 font-semibold">{progress}%</span>
                              </Link>
                            ) : (
                              <div className="flex items-center justify-between py-1.5 px-2.5 rounded text-[11px] text-slate-700 cursor-not-allowed select-none">
                                <div className="flex items-center space-x-1.5">
                                  <FiLock className="w-3 h-3 text-slate-700 flex-shrink-0" />
                                  <span className="truncate">{pat.name}</span>
                                </div>
                                <span className="text-[8px] font-black uppercase text-slate-700">LOCK</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {isExpanded && cat.id !== 'arrays' && (
                    <div className="pl-3.5 space-y-0.5 border-l border-slate-850 ml-3.5 mt-0.5">
                      <span className="block py-1 px-2.5 text-[10px] text-slate-600 italic">Unlocks after Arrays</span>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* 2. Main Content Viewport */}
        <div className="flex-grow min-w-0">
          {children}
        </div>

      </div>
    </div>
  );
};

export default PatternLayout;
