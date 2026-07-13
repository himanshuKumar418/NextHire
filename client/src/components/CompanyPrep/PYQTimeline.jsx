import React, { useState } from 'react';
import { FiExternalLink, FiBookmark } from 'react-icons/fi';
import { getLocalItem, setLocalItem } from '../../utils/localStorageHelper.js';

const PYQTimeline = ({ pyqs }) => {
  const [bookmarkedPyqs, setBookmarkedPyqs] = useState(() => {
    return getLocalItem('company_pyq_bookmarks', []);
  });

  const toggleBookmark = (slug, e) => {
    e.stopPropagation();
    let updated;
    if (bookmarkedPyqs.includes(slug)) {
      updated = bookmarkedPyqs.filter(s => s !== slug);
    } else {
      updated = [...bookmarkedPyqs, slug];
    }
    setLocalItem('company_pyq_bookmarks', updated);
    setBookmarkedPyqs(updated);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl text-left h-full flex flex-col justify-between transition-all duration-300">
      <div className="w-full h-full flex flex-col justify-between">
        
        {/* Header */}
        <div className="border-b border-slate-800/60 pb-3 flex-shrink-0">
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Previous Year Questions</h3>
        </div>

        {/* Scrollable Container without timeline lines */}
        <div className="flex-grow overflow-y-auto pr-1 scrollbar-thin mt-4 space-y-3.5 h-[1px]">
          {pyqs && pyqs.length > 0 ? (
            pyqs.map((pyq, idx) => {
              const isBookmarked = bookmarkedPyqs.includes(pyq.slug);

              // Assign modern semantic badges
              let badgeText = '';
              let badgeStyle = '';
              if (pyq.frequentlyAsked) {
                badgeText = 'Frequently Asked';
                badgeStyle = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
              } else if (pyq.year.toString() === '2025') {
                badgeText = 'Recent';
                badgeStyle = 'bg-sky-500/10 text-sky-400 border-sky-500/20';
              } else if (pyq.role === 'SP') {
                badgeText = 'Very Common';
                badgeStyle = 'bg-purple-500/10 text-purple-400 border-purple-500/20';
              } else {
                badgeText = 'Rare';
                badgeStyle = 'bg-slate-800 text-slate-400 border-slate-700/60';
              }

              return (
                <div 
                  key={idx} 
                  className={`p-4 rounded-[14px] border border-slate-850 flex flex-col justify-between min-h-[115px] transition-all duration-300 hover:-translate-y-[3px] hover:border-sky-500/30 hover:shadow-[0_4px_20px_rgba(56,189,248,0.04)] group ${
                    idx % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900/25'
                  }`}
                >
                  {/* Top Row: Question Name & Difficulty */}
                  <div className="flex justify-between items-center gap-2">
                    <h4 className="text-slate-100 font-extrabold text-[12.5px] tracking-tight truncate group-hover:text-sky-400 transition-colors flex-grow">
                      {pyq.name}
                    </h4>
                    <span className={`text-[8.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded border shrink-0 ${
                      pyq.diff === 'Hard' 
                        ? 'text-rose-400 bg-rose-500/10 border-rose-500/20' 
                        : pyq.diff === 'Medium' 
                          ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                          : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                    }`}>
                      {pyq.diff}
                    </span>
                  </div>

                  {/* Second Row: Metadata Info */}
                  <div className="text-[9.5px] font-bold text-slate-500 flex items-center gap-1.5 flex-wrap">
                    <span>{pyq.company} {pyq.year}</span>
                    <span className="text-slate-700">•</span>
                    <span>{pyq.round}</span>
                    <span className="text-slate-700">•</span>
                    <span>{pyq.role}</span>
                    <span className="text-slate-700">•</span>
                    <span className="text-slate-400">{pyq.topic}</span>
                  </div>

                  {/* Third Row: Ellipsis Description */}
                  <p className="text-[10.5px] text-slate-400 leading-normal font-semibold truncate">
                    {pyq.desc}
                  </p>

                  {/* Bottom Row: Badges & Inline Actions */}
                  <div className="flex justify-between items-center pt-2 border-t border-slate-900/60 mt-1">
                    {/* Badge Column */}
                    <div>
                      {badgeText && (
                        <span className={`text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded border ${badgeStyle}`}>
                          {badgeText}
                        </span>
                      )}
                    </div>

                    {/* Inline Actions Column */}
                    <div className="flex items-center gap-2">
                      {/* Bookmark Inline */}
                      <button 
                        onClick={(e) => toggleBookmark(pyq.slug, e)}
                        className="text-slate-500 hover:text-amber-500 transition-colors p-1 rounded hover:bg-slate-900"
                        title="Bookmark"
                      >
                        <FiBookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                      </button>

                      {/* Leetcode Link Inline */}
                      {pyq.leetcodeUrl && (
                        <a 
                          href={pyq.leetcodeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 font-extrabold px-2 py-0.5 rounded border border-sky-500/20 text-[9px] uppercase tracking-wider transition-colors"
                          title="Solve on LeetCode"
                        >
                          <FiExternalLink className="w-3 h-3" />
                          <span>LeetCode</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-500 font-bold text-xs">
              No previous year questions available.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default PYQTimeline;
