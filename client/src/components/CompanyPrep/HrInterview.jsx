import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronDown, FiChevronUp, FiCheck, FiX, FiInfo, FiClock, FiZap, FiStopCircle, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const HrInterview = ({ hrData }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(hrData[0]?.section || '');
  const [openQuestionIdx, setOpenQuestionIdx] = useState(null);

  // Rapid Fire State
  const [rapidFireActive, setRapidFireActive] = useState(false);
  const [rapidFireIndex, setRapidFireIndex] = useState(0);
  const [revealRapidFireAnswer, setRevealRapidFireAnswer] = useState(false);
  const [timer, setTimer] = useState(0);

  // Pool all HR questions for Rapid Fire (Total should be exactly 20 questions)
  const allHrQuestions = [];
  hrData.forEach(sec => {
    sec.questions.forEach(q => {
      allHrQuestions.push({
        ...q,
        section: sec.section
      });
    });
  });

  const activeSectionData = hrData.find(sec => sec.section === activeSection) || hrData[0];

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setOpenQuestionIdx(null);
  };

  const toggleQuestion = (idx) => {
    setOpenQuestionIdx(openQuestionIdx === idx ? null : idx);
  };

  // Rapid Fire Timer Effect
  useEffect(() => {
    let interval = null;
    if (rapidFireActive) {
      interval = setInterval(() => {
        setTimer(t => t + 1);
      }, 1000);
    } else {
      setTimer(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [rapidFireActive]);

  const startRapidFire = () => {
    setRapidFireIndex(0);
    setRevealRapidFireAnswer(false);
    setTimer(0);
    setRapidFireActive(true);
  };

  const endRapidFire = () => {
    setRapidFireActive(false);
    setRapidFireIndex(0);
    setRevealRapidFireAnswer(false);
    setTimer(0);
  };

  const formatTime = (totalSecs) => {
    const minutes = Math.floor(totalSecs / 60);
    const seconds = totalSecs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const nextRapidFire = () => {
    if (rapidFireIndex < allHrQuestions.length - 1) {
      setRapidFireIndex(prev => prev + 1);
      setRevealRapidFireAnswer(false);
    }
  };

  const prevRapidFire = () => {
    if (rapidFireIndex > 0) {
      setRapidFireIndex(prev => prev - 1);
      setRevealRapidFireAnswer(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-5 shadow-xl text-left transition-all duration-300">
      
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800/60 pb-3 gap-3">
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-extrabold">HR Interview Coach</h3>
          <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Master soft skills, behavioral queries, and situational STAR responses.</p>
        </div>

        {/* Rapid Fire Toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/prepare/interview')}
            className="bg-slate-950 hover:bg-slate-900 text-slate-300 font-extrabold border border-slate-850 px-3.5 py-1.5 rounded-xl text-[10px] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
          >
            <span>Interview Questions</span>
          </button>

          {!rapidFireActive ? (
            <button
              onClick={startRapidFire}
              className="bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 font-black border border-sky-500/20 px-3.5 py-1.5 rounded-xl text-[10px] flex items-center gap-1.5 transition-colors tracking-wider uppercase"
            >
              <FiZap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Rapid Fire Mode</span>
            </button>
          ) : (
            <button
              onClick={endRapidFire}
              className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-450 text-rose-400 font-black border border-rose-500/20 px-3.5 py-1.5 rounded-xl text-[10px] flex items-center gap-1.5 transition-colors tracking-wider uppercase"
            >
              <FiStopCircle className="w-3.5 h-3.5" />
              <span>Exit Rapid Fire</span>
            </button>
          )}
        </div>
      </div>

      {/* RAPID FIRE INTERACTIVE FLASHCARD SESSION */}
      {rapidFireActive && allHrQuestions.length > 0 ? (
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-850 space-y-5 transition-all duration-300">
          
          {/* HUD Header */}
          <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-500 tracking-wider">
            <span className="flex items-center gap-1">
              <FiClock className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              Elapsed: <span className="text-slate-200">{formatTime(timer)}</span>
            </span>
            <span>Question {rapidFireIndex + 1} of {allHrQuestions.length}</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden border border-slate-850">
            <div 
              className="bg-sky-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${((rapidFireIndex + 1) / allHrQuestions.length) * 100}%` }}
            ></div>
          </div>

          {/* Flashcard Question Panel */}
          <div className="space-y-2">
            <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded border border-purple-500/10 font-black text-[9px] uppercase tracking-wider">
              {allHrQuestions[rapidFireIndex].section}
            </span>
            <h4 className="text-slate-100 font-extrabold text-base leading-snug">{allHrQuestions[rapidFireIndex].question}</h4>
          </div>

          {/* Active Expandable Answer summary inside Flashcard */}
          {revealRapidFireAnswer ? (
            <div className="space-y-4 max-h-[340px] overflow-y-auto pr-1 scrollbar-thin animate-fadeIn text-slate-300">
              
              {/* Ideal Answer (Success green) */}
              <div className="bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-lg text-xs space-y-1">
                <span className="text-[8.5px] font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <FiCheck className="w-3.5 h-3.5" /> Ideal Strategy
                </span>
                <p className="leading-relaxed text-[11px]">{allHrQuestions[rapidFireIndex].idealAnswer}</p>
              </div>

              {/* STAR Breakdown (Blue highlight panels) */}
              <div className="bg-sky-500/5 border border-sky-500/10 p-3 rounded-lg text-xs space-y-2">
                <span className="text-[8.5px] font-black text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FiInfo className="w-3.5 h-3.5" />
                  STAR Method Example
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px]">
                  <div><strong className="text-sky-400 block uppercase text-[8px] tracking-wider">Situation</strong><span className="text-slate-400">{allHrQuestions[rapidFireIndex].star.situation}</span></div>
                  <div><strong className="text-sky-400 block uppercase text-[8px] tracking-wider">Task</strong><span className="text-slate-400">{allHrQuestions[rapidFireIndex].star.task}</span></div>
                  <div><strong className="text-sky-400 block uppercase text-[8px] tracking-wider">Action</strong><span className="text-slate-400">{allHrQuestions[rapidFireIndex].star.action}</span></div>
                  <div><strong className="text-sky-400 block uppercase text-[8px] tracking-wider">Result</strong><span className="text-slate-400">{allHrQuestions[rapidFireIndex].star.result}</span></div>
                </div>
              </div>

              {/* Mistakes to Avoid (Danger red) */}
              <div className="bg-rose-500/5 border border-rose-500/10 p-3 rounded-lg text-xs space-y-1">
                <span className="text-[8.5px] font-black text-rose-400 uppercase tracking-wider flex items-center gap-1">
                  <FiX className="w-3.5 h-3.5" /> Mistakes to Avoid
                </span>
                <p className="leading-relaxed text-[11px] text-slate-400">{allHrQuestions[rapidFireIndex].mistakesToAvoid}</p>
              </div>

            </div>
          ) : (
            <button
              onClick={() => setRevealRapidFireAnswer(true)}
              className="w-full bg-slate-900 hover:bg-slate-850 text-sky-400 border border-slate-800 py-3.5 rounded-xl text-xs font-black transition-colors"
            >
              Reveal Ideal Answer & STAR Method
            </button>
          )}

          {/* Flashcard Action Navigation */}
          <div className="flex justify-between items-center pt-3 border-t border-slate-900">
            <button
              onClick={prevRapidFire}
              disabled={rapidFireIndex === 0}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors ${
                rapidFireIndex === 0 
                  ? 'border-slate-900 text-slate-700 cursor-not-allowed' 
                  : 'border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <FiArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            <button
              onClick={endRapidFire}
              className="text-slate-500 hover:text-slate-300 font-extrabold text-xs"
            >
              Cancel Session
            </button>

            <button
              onClick={nextRapidFire}
              disabled={rapidFireIndex === allHrQuestions.length - 1}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors ${
                rapidFireIndex === allHrQuestions.length - 1
                  ? 'border-slate-900 text-slate-700 cursor-not-allowed' 
                  : 'border-sky-500/20 text-sky-400 hover:bg-sky-500/10'
              }`}
            >
              <span>Next</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      ) : (
        /* STANDARD COACH VIEW */
        <div className="space-y-4 w-full">
          
          {/* Sections Tabs Scrollable Row */}
          <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none snap-x select-none border-b border-slate-800/20">
            {hrData.map((sec) => {
              const isActive = sec.section === activeSection;
              return (
                <button
                  key={sec.section}
                  onClick={() => handleSectionChange(sec.section)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all duration-200 shrink-0 border snap-align-start ${
                    isActive 
                      ? 'bg-sky-500/10 text-sky-400 border-sky-500/30' 
                      : 'bg-slate-950 text-slate-400 border-slate-850 hover:bg-slate-900 hover:text-slate-300'
                  }`}
                >
                  {sec.section}
                </button>
              );
            })}
          </div>

          {/* Coach Question Accordion Container */}
          <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1.5 scrollbar-thin">
            {activeSectionData?.questions.map((q, idx) => {
              const isOpen = openQuestionIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-950 rounded-xl border border-slate-850 overflow-hidden text-xs transition-all duration-200"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleQuestion(idx)}
                    className="w-full p-4 flex justify-between items-center text-left hover:bg-slate-900/40 transition-colors gap-3"
                  >
                    <span className="font-extrabold text-slate-200 leading-normal">{q.question}</span>
                    {isOpen ? (
                      <FiChevronUp className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    ) : (
                      <FiChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    )}
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="p-4 bg-slate-900/25 border-t border-slate-900 space-y-4.5 leading-relaxed font-semibold text-slate-450 text-slate-400 text-xs">
                      
                      {/* Interviewer Expectations */}
                      <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-900 space-y-1">
                        <span className="text-[8.5px] font-black text-slate-500 uppercase tracking-wider block">Interviewer expects...</span>
                        <p className="text-[11.5px] text-slate-300 font-semibold">{q.interviewerExpects}</p>
                      </div>

                      {/* Grid for Ideal & Mistakes */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Ideal Answer (Green highlight box) */}
                        <div className="space-y-1.5 bg-emerald-500/5 border border-emerald-500/10 p-3.5 rounded-xl">
                          <span className="text-[8.5px] font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                            <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
                            Ideal Strategy
                          </span>
                          <p className="text-[11px] leading-relaxed text-slate-300">{q.idealAnswer}</p>
                        </div>

                        {/* Mistakes to Avoid (Red highlight box) */}
                        <div className="space-y-1.5 bg-rose-500/5 border border-rose-500/10 p-3.5 rounded-xl">
                          <span className="text-[8.5px] font-black text-rose-455 text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                            <FiX className="w-3.5 h-3.5 text-rose-455" />
                            Mistakes to Avoid
                          </span>
                          <p className="text-[11px] leading-relaxed text-slate-350 text-slate-400">{q.mistakesToAvoid}</p>
                        </div>
                      </div>

                      {/* Example Answer Box */}
                      <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-900 space-y-1">
                        <span className="text-[8.5px] font-black text-slate-500 uppercase tracking-wider block">Example Response</span>
                        <p className="text-[11px] text-slate-200 italic leading-relaxed">"{q.exampleAnswer}"</p>
                      </div>

                      {/* STAR Method breakdown (Blue highlight box) */}
                      {q.star && (
                        <div className="bg-sky-500/5 border border-sky-500/10 p-4 rounded-xl space-y-2">
                          <span className="text-[8.5px] font-black text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                            <FiInfo className="w-3.5 h-3.5" />
                            STAR Method Breakdown
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[10.5px] leading-relaxed">
                            <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-900/60"><strong className="text-sky-400 block uppercase text-[7.5px] tracking-wider mb-0.5">Situation</strong><span className="text-slate-400">{q.star.situation}</span></div>
                            <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-900/60"><strong className="text-sky-400 block uppercase text-[7.5px] tracking-wider mb-0.5">Task</strong><span className="text-slate-400">{q.star.task}</span></div>
                            <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-900/60"><strong className="text-sky-400 block uppercase text-[7.5px] tracking-wider mb-0.5">Action</strong><span className="text-slate-400">{q.star.action}</span></div>
                            <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-900/60"><strong className="text-sky-400 block uppercase text-[7.5px] tracking-wider mb-0.5">Result</strong><span className="text-slate-400">{q.star.result}</span></div>
                          </div>
                        </div>
                      )}

                      {/* Confidence Tips (Info details) */}
                      <div className="bg-purple-500/5 border border-purple-500/10 p-3.5 rounded-xl space-y-1">
                        <span className="text-[8.5px] font-black text-purple-400 uppercase tracking-wider block">Confidence & Strategy Tip</span>
                        <p className="text-[11px] text-slate-350 text-slate-350 text-slate-300">{q.confidenceTips}</p>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
};

export default HrInterview;
