import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiBookmark } from 'react-icons/fi';
import { getSolvedQuestions } from '../../data/patternRegistry.js';
import { getLocalItem, setLocalItem } from '../../utils/localStorageHelper.js';

const QuestionsChecklist = ({ questions, onToggleSolved }) => {
  const [solvedList, setSolvedList] = useState(() => getSolvedQuestions());
  const [bookmarkedList, setBookmarkedList] = useState(() => {
    return getLocalItem('dsa_bookmarked_questions', []);
  });

  // Keep solved list synced when parent updates
  useEffect(() => {
    const handleXpSync = () => {
      setSolvedList(getSolvedQuestions());
    };
    window.addEventListener('xp-changed', handleXpSync);
    return () => window.removeEventListener('xp-changed', handleXpSync);
  }, []);

  const handleCheckboxClick = (q, e) => {
    const isSolvedNow = !solvedList.includes(q.id);
    let updatedSolved = [];

    if (isSolvedNow) {
      updatedSolved = [...solvedList, q.id];
    } else {
      updatedSolved = solvedList.filter((id) => id !== q.id);
    }

    setLocalItem('dsa_solved_questions', updatedSolved);
    setSolvedList(updatedSolved);

    // Calculate XP reward values dynamically
    let xpDelta = 10;
    if (q.difficulty === 'Medium') xpDelta = 20;
    if (q.difficulty === 'Hard') xpDelta = 30;

    // Trigger parent callback to show animations and modals
    onToggleSolved(q.id, isSolvedNow, xpDelta, e);
  };

  const toggleBookmark = (qId) => {
    let updated = [];
    if (bookmarkedList.includes(qId)) {
      updated = bookmarkedList.filter((id) => id !== qId);
    } else {
      updated = [...bookmarkedList, qId];
    }
    setLocalItem('dsa_bookmarked_questions', updated);
    setBookmarkedList(updated);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl">
      <div className="border-b border-slate-800/60 pb-2 text-left">
        <h3 className="text-xs font-bold text-slate-205 text-slate-202 text-slate-200 uppercase tracking-wider">
          Practice Checklist Questions
        </h3>
      </div>

      <div className="space-y-2">
        {questions.map((q) => {
          const isSolved = solvedList.includes(q.id);
          const isBookmarked = bookmarkedList.includes(q.id);

          return (
            <div 
              key={q.id}
              className="bg-slate-950 border border-slate-850 p-3.5 rounded-xl flex items-center justify-between gap-3 text-xs transition-all duration-200 hover:border-sky-500/10"
            >
              <div className="flex items-center space-x-3 text-left">
                {/* Checkbox */}
                <button 
                  onClick={(e) => handleCheckboxClick(q, e)}
                  className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center font-bold text-xs ${
                    isSolved 
                      ? 'bg-sky-500 border-sky-500 text-slate-955 text-slate-950' 
                      : 'border-slate-700 hover:border-sky-500'
                  }`}
                >
                  {isSolved && '✔'}
                </button>
                
                <div className="space-y-0.5 text-left">
                  {q.leetcodeUrl ? (
                    <a 
                      href={q.leetcodeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`text-xs font-bold hover:text-sky-400 hover:underline transition-colors flex items-center gap-1.5 ${
                        isSolved ? 'text-slate-500 line-through font-normal' : 'text-slate-200'
                      }`}
                    >
                      <span>{q.name}</span>
                      <FiExternalLink className="w-3 h-3 text-slate-500 flex-shrink-0" />
                    </a>
                  ) : (
                    <span className={`text-xs font-bold text-slate-400 cursor-not-allowed ${isSolved ? 'line-through font-normal' : ''}`}>
                      {q.name} (Link unavailable)
                    </span>
                  )}

                  {q.companies && q.companies.length > 0 && (
                    <div className="flex flex-wrap gap-1 items-center">
                      {q.companies.map((comp) => (
                        <span key={comp} className="bg-slate-905 bg-slate-900 px-1.5 py-0.5 rounded text-[8px] text-slate-400 font-bold border border-slate-850">
                          {comp}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2.5 shrink-0">
                <span className={`text-[8.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${
                  q.difficulty === 'Hard' 
                    ? 'text-rose-455 text-rose-450 text-rose-400 bg-rose-500/10 border-rose-500/20' 
                    : q.difficulty === 'Medium' 
                      ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                      : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                }`}>
                  {q.difficulty}
                </span>
                
                <button 
                  onClick={() => toggleBookmark(q.id)}
                  className="text-slate-500 hover:text-amber-500 transition-colors"
                >
                  <FiBookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsChecklist;
