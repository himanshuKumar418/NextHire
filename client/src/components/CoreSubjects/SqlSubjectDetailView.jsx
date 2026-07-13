import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiClock, FiBookOpen, FiAward, FiLock, FiUnlock, 
  FiBookmark, FiExternalLink, FiChevronDown, FiChevronUp, 
  FiChevronRight, FiCornerUpLeft, FiInfo, FiAlertCircle 
} from 'react-icons/fi';
import sqlDetail from '../../data/sqlDetail.js';

const SqlSubjectDetailView = ({ subject }) => {
  // Section 1: Theory active detail state
  const [activeTheoryIdx, setActiveTheoryIdx] = useState(null);

  // Section 2: Questions Accordion state
  const [openQuestionIdx, setOpenQuestionIdx] = useState(null);

  // Section 5: Rapid Fire reveal state
  const [revealedRapidIdxs, setRevealedRapidIdxs] = useState([]);

  const toggleRapidReveal = (idx) => {
    if (revealedRapidIdxs.includes(idx)) {
      setRevealedRapidIdxs(revealedRapidIdxs.filter(i => i !== idx));
    } else {
      setRevealedRapidIdxs([...revealedRapidIdxs, idx]);
    }
  };

  return (
    <div className="space-y-6 text-left pb-12 text-xs">
      
      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="space-y-5 relative z-10">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="space-y-1">
              <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest block font-extrabold">Subject Portal</span>
              <h1 className="text-2xl font-black text-slate-100 uppercase tracking-tight">CORE SUBJECTS</h1>
            </div>

            <Link 
              to="/prepare/core-subjects"
              className="bg-slate-950 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-850 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
            >
              <FiCornerUpLeft className="w-3.5 h-3.5" />
              <span>Return to Hub</span>
            </Link>
          </div>

          <p className="text-[11px] sm:text-[12.5px] text-slate-400 font-semibold leading-relaxed max-w-3xl">
            {subject.overview}
          </p>

          {/* Progress bar */}
          <div className="space-y-2 max-w-xl">
            <div className="flex justify-between items-center font-bold">
              <span className="text-slate-400">Overall Progress</span>
              <span className="text-sky-400 flex items-center gap-2">
                <span className="font-mono">██████████░░░░</span>
                <span>70%</span>
              </span>
            </div>

            <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-850 p-0.5">
              <div 
                className="bg-sky-500 h-full rounded-full transition-all duration-1000"
                style={{ width: '70%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 1: IMPORTANT THEORY
          ========================================== */}
      <div className="space-y-4">
        <div className="border-b border-slate-800/60 pb-2">
          <h3 className="text-[10px] font-black text-slate-200 uppercase tracking-wider">📘 Important Theory</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 font-semibold">
          {sqlDetail.theory.map((t, idx) => {
            const isActive = activeTheoryIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveTheoryIdx(isActive ? null : idx)}
                className={`bg-slate-900 border p-4 rounded-2xl flex flex-col justify-between h-[140px] transition-all duration-200 cursor-pointer hover:-translate-y-0.5 relative group ${
                  isActive 
                    ? 'border-sky-500 shadow-[0_0_15px_rgba(56,189,248,0.04)]' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-1">
                  <h4 className="text-slate-100 font-extrabold text-[12.5px] tracking-tight group-hover:text-sky-400 transition-colors">
                    {t.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[9px] text-slate-500">
                    <FiClock className="w-3 h-3" />
                    <span>{t.readingTime}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-slate-850/60 text-[9px]">
                  <span className={`font-black uppercase tracking-wider px-1.5 py-0.5 rounded border ${
                    t.difficulty === 'Easy' 
                      ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
                      : t.difficulty === 'Medium' 
                        ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' 
                        : 'text-rose-400 bg-rose-500/10 border-rose-500/20'
                  }`}>
                    {t.difficulty}
                  </span>
                  <span className="text-sky-400 font-extrabold flex items-center gap-0.5">
                    <span>{isActive ? 'Close Notes' : 'Read Notes'}</span>
                    <FiChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Notes Expandable Panel */}
        {activeTheoryIdx !== null && (
          <div className="bg-slate-950 p-5 rounded-2xl border border-sky-500/20 space-y-2 animate-fadeIn">
            <div className="flex justify-between items-center border-b border-slate-900 pb-2">
              <h4 className="font-extrabold text-slate-100 text-sm">
                Notes: {sqlDetail.theory[activeTheoryIdx].title}
              </h4>
              <button
                onClick={() => setActiveTheoryIdx(null)}
                className="text-[9px] text-slate-500 hover:text-slate-300 font-black uppercase tracking-wider"
              >
                Close
              </button>
            </div>
            <p className="text-slate-400 leading-relaxed font-semibold text-[11px] max-w-4xl">
              {sqlDetail.theory[activeTheoryIdx].notes}
            </p>
          </div>
        )}
      </div>

      {/* ==========================================
          SECTION 2: MOST IMPORTANT INTERVIEW QUESTIONS
          ========================================== */}
      <div className="space-y-4">
        <div className="border-b border-slate-800/60 pb-2">
          <h3 className="text-[10px] font-black text-slate-200 uppercase tracking-wider">🔥 Most Important Interview Questions</h3>
        </div>

        <div className="space-y-3.5">
          {sqlDetail.questions.map((q, idx) => {
            const isOpen = openQuestionIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200 shadow-md text-[11.5px]"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => setOpenQuestionIdx(isOpen ? null : idx)}
                  className="w-full p-4 flex justify-between items-center text-left hover:bg-slate-850/40 transition-colors font-extrabold text-slate-100"
                >
                  <span className="text-[12.5px] font-black text-slate-200">{q.title}</span>
                  {isOpen ? <FiChevronUp className="w-4 h-4 text-sky-400" /> : <FiChevronDown className="w-4 h-4 text-slate-500" />}
                </button>

                {/* Body Details */}
                {isOpen && (
                  <div className="p-5 bg-slate-950/40 border-t border-slate-850/60 space-y-4 font-semibold text-slate-350 leading-relaxed">
                    {/* Definition */}
                    <div className="space-y-1">
                      <span className="text-[9px] font-black text-sky-400 uppercase tracking-wider block">Definition</span>
                      <p className="text-slate-200">{q.definition}</p>
                    </div>

                    {/* Detailed Explanation */}
                    <div className="space-y-1">
                      <span className="text-[9px] font-black text-sky-400 uppercase tracking-wider block">Detailed Explanation</span>
                      <p className="text-slate-400">{q.explanation}</p>
                    </div>

                    {/* Example & SQL Query */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <div className="space-y-1">
                        <span className="text-[9px] font-black text-sky-400 uppercase tracking-wider block">Example Scenario</span>
                        <p className="text-slate-400">{q.example}</p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[9px] font-black text-sky-400 uppercase tracking-wider block">SQL Query Example</span>
                        <pre className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 font-mono text-[10px] text-slate-300 overflow-x-auto">
                          {q.query}
                        </pre>
                      </div>
                    </div>

                    {/* Tip & Mistakes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-900 pt-3">
                      <div className="flex gap-2.5 bg-sky-500/5 border border-sky-500/10 p-3 rounded-xl">
                        <FiInfo className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="text-[8.5px] font-black text-sky-400 uppercase tracking-wider block">Interviewer Tip</span>
                          <p className="text-slate-400 text-[10.5px]">{q.tip}</p>
                        </div>
                      </div>

                      <div className="flex gap-2.5 bg-rose-500/5 border border-rose-500/10 p-3 rounded-xl">
                        <FiAlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="text-[8.5px] font-black text-rose-400 uppercase tracking-wider block">Common Mistakes</span>
                          <p className="text-slate-400 text-[10.5px]">{q.mistake}</p>
                        </div>
                      </div>
                    </div>

                    {/* Follow-up Questions */}
                    <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-900">
                      <span className="text-[8.5px] font-black text-slate-500 uppercase tracking-wider block">Follow-up Question</span>
                      <p className="text-slate-300 italic text-[11px] mt-0.5">"{q.followUp}"</p>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ==========================================
          SECTION 3: QUICK REVISION
          ========================================== */}
      <div className="space-y-4">
        <div className="border-b border-slate-800/60 pb-2">
          <h3 className="text-[10px] font-black text-slate-202 text-slate-200 uppercase tracking-wider">⚡ Quick Revision</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-semibold">
          {sqlDetail.revision.map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-850 p-4 rounded-xl space-y-1 text-left shadow-lg">
              <h4 className="text-slate-100 font-extrabold text-[12px]">{item.title}</h4>
              <p className="text-slate-400 font-semibold leading-relaxed text-[10.5px]">{item.notes}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          SECTION 4: COMPANY FREQUENCY
          ========================================== */}
      <div className="space-y-4">
        <div className="border-b border-slate-800/60 pb-2">
          <h3 className="text-[10px] font-black text-slate-202 text-slate-200 uppercase tracking-wider">🏢 Company Frequency</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-semibold">
          {sqlDetail.companies.map((c, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col justify-between h-[90px] shadow-lg">
              <span className="text-slate-400 text-[10.5px] font-black uppercase tracking-wider block">{c.name}</span>
              <div className="flex text-amber-400 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < c.rating ? '★' : '☆'}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          SECTION 5: RAPID FIRE
          ========================================== */}
      <div className="space-y-4">
        <div className="border-b border-slate-800/60 pb-2">
          <h3 className="text-[10px] font-black text-slate-202 text-slate-200 uppercase tracking-wider">🎯 Rapid Fire Qs</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold text-[11px]">
          {sqlDetail.rapidFire.map((item, idx) => {
            const isRevealed = revealedRapidIdxs.includes(idx);
            return (
              <div 
                key={idx}
                onClick={() => toggleRapidReveal(idx)}
                className="bg-slate-900 border border-slate-850 p-4 rounded-xl cursor-pointer hover:border-slate-700 transition-all flex flex-col justify-between min-h-[90px] text-left relative group overflow-hidden"
              >
                <div className="space-y-1">
                  <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider block">Question {idx + 1}</span>
                  <p className="text-slate-100 font-extrabold">{item.q}</p>
                </div>

                <div className="pt-2 border-t border-slate-850 mt-2 flex justify-between items-center text-[10px]">
                  {isRevealed ? (
                    <span className="text-emerald-400 font-black tracking-wide">{item.a}</span>
                  ) : (
                    <span className="text-slate-500 font-bold italic">Click to reveal answer</span>
                  )}
                  <span className="text-[8.5px] font-black uppercase tracking-wider text-sky-400 group-hover:translate-x-0.5 transition-transform">
                    {isRevealed ? 'Hide' : 'Reveal'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==========================================
          SECTION 6: DOWNLOAD NOTES
          ========================================== */}
      <div className="space-y-4">
        <div className="border-b border-slate-800/60 pb-2">
          <h3 className="text-[10px] font-black text-slate-202 text-slate-200 uppercase tracking-wider">📄 Download Notes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {sqlDetail.downloads.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-950 p-5 rounded-2xl border border-slate-850 flex flex-col justify-between h-[180px] transition-all relative overflow-hidden group select-none"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2 flex-grow text-left">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest block">PDF document</span>
                    <h4 className="text-slate-100 font-extrabold text-sm tracking-tight">{item.title}</h4>
                    <p className="text-[11px] text-slate-400 font-semibold">{item.desc}</p>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-xl border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-600">
                  <FiLock className="w-4 h-4 text-slate-600" />
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-900/60">
                <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold">
                  <span>File size</span>
                  <span>{item.size}</span>
                </div>
                <button 
                  disabled 
                  className="w-full bg-slate-900/50 text-slate-650 text-slate-600 border border-slate-850/80 py-2 rounded-xl text-xs font-black cursor-not-allowed flex items-center justify-center gap-1.5"
                >
                  🔒 Complete Profile to Unlock
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SqlSubjectDetailView;
