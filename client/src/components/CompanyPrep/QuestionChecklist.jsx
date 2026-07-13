import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiBookmark, FiSearch } from 'react-icons/fi';
import { getCompanySolvedQuestions } from '../../data/company/companyRegistry.js';
import { getLocalItem, setLocalItem } from '../../utils/localStorageHelper.js';

const QuestionChecklist = ({ codingQuestions = [], onToggleSolved }) => {
  const qs = codingQuestions ?? [];

  if (qs.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl text-left">
        <div className="border-b border-slate-800/60 pb-2">
          <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Top 50 Most Important Questions</h3>
        </div>
        <p className="text-xs text-slate-400 font-semibold pt-4 font-semibold">No questions available yet.</p>
      </div>
    );
  }

  const [solvedList, setSolvedList] = useState(() => getCompanySolvedQuestions());
  const [bookmarkedList, setBookmarkedList] = useState(() => {
    return getLocalItem('company_bookmarked_questions', []);
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPattern, setSelectedPattern] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  useEffect(() => {
    const handleSync = () => {
      setSolvedList(getCompanySolvedQuestions());
    };
    window.addEventListener('company-xp-changed', handleSync);
    return () => window.removeEventListener('company-xp-changed', handleSync);
  }, []);

  const handleCheckboxClick = (q, e) => {
    const isSolvedNow = !solvedList.includes(q.id);
    let updatedSolved = [];

    if (isSolvedNow) {
      updatedSolved = [...solvedList, q.id];
    } else {
      updatedSolved = solvedList.filter((id) => id !== q.id);
    }

    setLocalItem('company_solved_questions', updatedSolved);
    setSolvedList(updatedSolved);

    let xpDelta = 10;
    if (q.difficulty === 'Medium') xpDelta = 20;
    if (q.difficulty === 'Hard') xpDelta = 30;

    onToggleSolved(q.id, isSolvedNow, xpDelta, e);
  };

  const toggleBookmark = (qId) => {
    let updated = [];
    if (bookmarkedList.includes(qId)) {
      updated = bookmarkedList.filter((id) => id !== qId);
    } else {
      updated = [...bookmarkedList, qId];
    }
    setLocalItem('company_bookmarked_questions', updated);
    setBookmarkedList(updated);
  };

  // Filtering logic
  const filteredQuestions = codingQuestions.filter((q) => {
    const matchesSearch = q.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPattern = selectedPattern === 'All' || q.pattern === selectedPattern;
    const matchesDifficulty = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
    return matchesSearch && matchesPattern && matchesDifficulty;
  });

  // Get unique patterns for filter dropdown
  const patternsList = ['All', ...new Set(codingQuestions.map((q) => q.pattern))];

  // Solved Count stats
  const totalQuestions = codingQuestions.length;
  const solvedCount = codingQuestions.filter((q) => solvedList.includes(q.id)).length;
  const progressPercent = totalQuestions > 0 ? Math.round((solvedCount / totalQuestions) * 100) : 0;

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-6 shadow-xl text-left">
      
      {/* Header and Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800/60 pb-4 gap-4">
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-extrabold">Top 50 Most Important Questions</h3>
          <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Selected across key DSA patterns mixed with Easy & Medium difficulties.</p>
        </div>
        
        {/* Progress Tracker Dashboard HUD */}
        <div className="flex items-center gap-3 bg-slate-950 p-2.5 rounded-xl border border-slate-850 text-xs w-full md:w-auto min-w-[200px]">
          <div className="flex-grow space-y-1">
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
              <span>Overall Coding Progress</span>
              <span className="text-sky-400">{solvedCount}/{totalQuestions} ({progressPercent}%)</span>
            </div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
              <div 
                className="bg-sky-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar Controls (Do not modify) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Search */}
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-slate-500 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-850 rounded-xl pl-9 pr-3 py-2 text-xs font-semibold focus:outline-none focus:border-sky-500 text-slate-200"
          />
        </div>

        {/* Pattern Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider shrink-0">Pattern</span>
          <select 
            value={selectedPattern}
            onChange={(e) => setSelectedPattern(e.target.value)}
            className="w-full bg-slate-950 border border-slate-850 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-sky-500 text-slate-200"
          >
            {patternsList.map((pat) => (
              <option key={pat} value={pat}>{pat}</option>
            ))}
          </select>
        </div>

        {/* Difficulty Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider shrink-0">Difficulty</span>
          <select 
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full bg-slate-950 border border-slate-850 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-sky-500 text-slate-200"
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
          </select>
        </div>
      </div>

      {/* Redesigned Premium Table Container */}
      <div className="overflow-y-auto overflow-x-hidden border border-slate-850 rounded-xl bg-slate-950 scrollbar-thin" style={{ height: '620px' }}>
        <table className="min-w-full divide-y divide-slate-855 divide-slate-850 text-xs text-left">
          <thead className="font-bold text-slate-400 sticky top-0 z-10 shadow-[0_1px_0_rgba(255,255,255,0.05)]">
            <tr>
              <th scope="col" className="bg-slate-900 px-4 py-4 text-center w-14">☐</th>
              <th scope="col" className="bg-slate-900 px-4 py-4">Question</th>
              <th scope="col" className="bg-slate-900 px-3 py-4 w-28">Difficulty</th>
              <th scope="col" className="bg-slate-900 px-3 py-4 w-36">Pattern</th>
              <th scope="col" className="bg-slate-900 px-3 py-4 w-44">Companies</th>
              <th scope="col" className="bg-slate-900 px-4 py-4 text-center w-20">Bookmark</th>
              <th scope="col" className="bg-slate-900 px-4 py-4 text-center w-20">LeetCode</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-850 font-semibold text-slate-300">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((q) => {
                const isSolved = solvedList.includes(q.id);
                const isBookmarked = bookmarkedList.includes(q.id);

                return (
                  <tr 
                    key={q.id} 
                    className={`h-[76px] hover:bg-slate-900/40 hover:shadow-[inset_0_0_15px_rgba(56,189,248,0.03)] border-b border-slate-850 cursor-pointer transition-all duration-200 group ${
                      isSolved ? 'bg-slate-950/20 text-slate-500' : 'text-slate-300'
                    }`}
                  >
                    {/* Completion Checkbox */}
                    <td className="px-4 py-[18px] text-center align-middle">
                      <div className="flex items-center justify-center">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCheckboxClick(q, e);
                          }}
                          className={`w-5 h-5 rounded-md border flex items-center justify-center font-black text-xs transition-all duration-300 transform active:scale-90 ${
                            isSolved 
                              ? 'bg-sky-500 border-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                              : 'border-slate-700 hover:border-sky-500 bg-slate-950 hover:bg-slate-900/60'
                          }`}
                        >
                          {isSolved && '✔'}
                        </button>
                      </div>
                    </td>

                    {/* Question Name */}
                    <td className="px-4 py-[18px] align-middle">
                      <div className="flex flex-col space-y-1">
                        {q.leetcodeUrl ? (
                          <a 
                            href={q.leetcodeUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={(e) => e.stopPropagation()}
                            className={`text-[13.5px] font-extrabold hover:text-sky-400 hover:underline transition-colors leading-normal ${
                              isSolved ? 'line-through text-slate-500 font-normal' : 'text-slate-100'
                            }`}
                          >
                            {q.name}
                          </a>
                        ) : (
                          <span className={`text-[13.5px] font-extrabold leading-normal ${
                            isSolved ? 'line-through text-slate-500 font-normal' : 'text-slate-100'
                          }`}>
                            {q.name}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Difficulty Badge */}
                    <td className="px-3 py-[18px] align-middle">
                      <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded border inline-block ${
                        q.difficulty === 'Hard' 
                          ? 'text-rose-400 bg-rose-500/10 border-rose-500/20' 
                          : q.difficulty === 'Medium' 
                            ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                            : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                      }`}>
                        {q.difficulty}
                      </span>
                    </td>

                    {/* Pattern */}
                    <td className="px-3 py-[18px] align-middle">
                      <span className="text-[10px] text-slate-400 font-bold bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                        {q.pattern}
                      </span>
                    </td>

                    {/* Companies Badges */}
                    <td className="px-3 py-[18px] align-middle">
                      <div className="flex flex-wrap gap-2.5">
                        {q.companies.slice(0, 2).map((comp) => (
                          <span 
                            key={comp} 
                            className="bg-slate-900 px-2 py-0.5 rounded text-[8.5px] text-slate-400 font-bold border border-slate-850/60"
                          >
                            {comp}
                          </span>
                        ))}
                        {q.companies.length > 2 && (
                          <span className="text-[8px] font-extrabold text-slate-500 pl-0.5 pt-0.5">
                            +{q.companies.length - 2}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Bookmark perfectly centered */}
                    <td className="px-4 py-[18px] text-center align-middle">
                      <div className="flex items-center justify-center">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(q.id);
                          }}
                          className={`transition-colors ${isBookmarked ? 'text-amber-500' : 'text-slate-500 hover:text-amber-500'}`}
                        >
                          <FiBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                        </button>
                      </div>
                    </td>

                    {/* External Leetcode Link perfectly centered */}
                    <td className="px-4 py-[18px] text-center align-middle">
                      <div className="flex items-center justify-center">
                        {q.leetcodeUrl ? (
                          <a 
                            href={q.leetcodeUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={(e) => e.stopPropagation()}
                            className="text-slate-500 hover:text-sky-400 transition-colors block"
                          >
                            <FiExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <span className="text-slate-700">-</span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-8 text-center text-slate-500 font-bold">
                  No questions match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionChecklist;
