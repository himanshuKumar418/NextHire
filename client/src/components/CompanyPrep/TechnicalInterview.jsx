import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronDown, FiChevronUp, FiInfo, FiAlertCircle, FiPlay, FiStopCircle, FiCheck, FiX, FiActivity } from 'react-icons/fi';

const TechnicalInterview = ({ technicalData }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(technicalData[0]?.category || '');
  const [openQuestionIdx, setOpenQuestionIdx] = useState(null);

  // Mock Interview State
  const [mockActive, setMockActive] = useState(false);
  const [mockQuestion, setMockQuestion] = useState(null);
  const [showMockAnswer, setShowMockAnswer] = useState(false);
  const [mockQuestionsCount, setMockQuestionsCount] = useState(0);

  const activeCategoryData = technicalData.find(cat => cat.category === activeCategory) || technicalData[0];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenQuestionIdx(null);
  };

  const toggleQuestion = (idx) => {
    setOpenQuestionIdx(openQuestionIdx === idx ? null : idx);
  };

  // Mock Interview Handlers
  const startMockInterview = () => {
    // Gather all questions from all categories
    const allQuestions = [];
    technicalData.forEach(cat => {
      cat.questions.forEach(q => {
        allQuestions.push({
          ...q,
          category: cat.category
        });
      });
    });

    if (allQuestions.length === 0) return;

    // Pick random question
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    setMockQuestion(allQuestions[randomIndex]);
    setShowMockAnswer(false);
    setMockQuestionsCount(1);
    setMockActive(true);
  };

  const loadNextMockQuestion = () => {
    const allQuestions = [];
    technicalData.forEach(cat => {
      cat.questions.forEach(q => {
        allQuestions.push({
          ...q,
          category: cat.category
        });
      });
    });

    if (allQuestions.length === 0) return;

    // Pick random question
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    setMockQuestion(allQuestions[randomIndex]);
    setShowMockAnswer(false);
    setMockQuestionsCount(prev => prev + 1);
  };

  const endMockInterview = () => {
    setMockActive(false);
    setMockQuestion(null);
    setShowMockAnswer(false);
    setMockQuestionsCount(0);
  };

  return (
    <div id="interview-questions" className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-5 shadow-xl text-left h-full flex flex-col justify-between transition-all duration-300">
      
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800/60 pb-3 gap-3">
        <div>
          <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider font-extrabold">Technical Interview Portal</h3>
          <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Prepare with topic-specific questions or try a mock session.</p>
        </div>
        
        {/* Mock Interview Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => navigate('/prepare/core-subjects')}
            className="bg-slate-955 bg-slate-950 hover:bg-slate-900 text-slate-300 font-extrabold border border-slate-850 px-3.5 py-1.5 rounded-xl text-[10px] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
          >
            <span>📘 Core Subjects</span>
          </button>

          <button
            onClick={() => navigate('/prepare/interview')}
            className="bg-slate-955 bg-slate-950 hover:bg-slate-900 text-slate-300 font-extrabold border border-slate-850 px-3.5 py-1.5 rounded-xl text-[10px] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
          >
            <span>🎤 Interview Questions</span>
          </button>

          {!mockActive ? (
            <button
              onClick={startMockInterview}
              className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-black border border-emerald-500/20 px-3.5 py-1.5 rounded-xl text-[10px] flex items-center gap-1.5 transition-colors tracking-wider uppercase"
            >
              <FiPlay className="w-3.5 h-3.5" />
              <span>Start Mock Interview</span>
            </button>
          ) : (
            <button
              onClick={endMockInterview}
              className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-455 text-rose-400 font-black border border-rose-500/20 px-3.5 py-1.5 rounded-xl text-[10px] flex items-center gap-1.5 transition-colors tracking-wider uppercase"
            >
              <FiStopCircle className="w-3.5 h-3.5" />
              <span>End Mock Session</span>
            </button>
          )}
        </div>
      </div>

      {/* MOCK INTERVIEW MODE VIEW */}
      {mockActive && mockQuestion ? (
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-850 space-y-5 transition-all duration-300">
          <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-500 tracking-wider">
            <span>Mock Question #{mockQuestionsCount}</span>
            <span className="bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded border border-sky-500/10 font-bold">{mockQuestion.category}</span>
          </div>

          <div className="space-y-2">
            <span className={`text-[8.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block ${
              mockQuestion.difficulty === 'Hard' 
                ? 'text-rose-400 bg-rose-500/10 border-rose-500/20' 
                : mockQuestion.difficulty === 'Medium' 
                  ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                  : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
            }`}>
              {mockQuestion.difficulty}
            </span>
            <h4 className="text-slate-100 font-extrabold text-base leading-snug">{mockQuestion.question}</h4>
          </div>

          {/* Answer Toggle Panel */}
          {showMockAnswer ? (
            <div className="space-y-1 animate-fadeIn">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Expected Answer</span>
              <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-lg border border-slate-900 font-semibold text-xs">{mockQuestion.answer}</p>
            </div>
          ) : (
            <button
              onClick={() => setShowMockAnswer(true)}
              className="w-full bg-slate-900 hover:bg-slate-850 text-sky-400 border border-slate-800 py-3 rounded-xl text-xs font-black transition-colors"
            >
              Reveal Expected Answer
            </button>
          )}

          {/* Action Navigation */}
          <div className="flex justify-end gap-3 pt-3 border-t border-slate-900">
            <button 
              onClick={endMockInterview}
              className="bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-slate-200 font-extrabold px-4 py-2 rounded-xl text-xs border border-slate-800 transition-colors"
            >
              Close
            </button>
            <button 
              onClick={loadNextMockQuestion}
              className="bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 font-extrabold px-4 py-2 rounded-xl text-xs border border-sky-500/20 transition-colors"
            >
              Next Question
            </button>
          </div>
        </div>
      ) : (
        /* STANDARD PORTAL VIEW */
        <div className="space-y-4 w-full">
          
          {/* Categories Tabs Scrollable Row */}
          <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none snap-x select-none border-b border-slate-800/20">
            {technicalData.map((cat) => {
              const isActive = cat.category === activeCategory;
              return (
                <button
                  key={cat.category}
                  onClick={() => handleCategoryChange(cat.category)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all duration-200 shrink-0 border snap-align-start ${
                    isActive 
                      ? 'bg-sky-500/10 text-sky-400 border-sky-500/30' 
                      : 'bg-slate-950 text-slate-400 border-slate-850 hover:bg-slate-900 hover:text-slate-350 hover:text-slate-300'
                  }`}
                >
                  {cat.category}
                </button>
              );
            })}
          </div>

          {/* Detail Category Panel */}
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 space-y-5">
            
            {/* Category Stats HUD Header */}
            <div className="flex flex-wrap justify-between items-center gap-3 border-b border-slate-900 pb-3 text-xs">
              <div className="flex items-center space-x-2">
                <span className="font-black text-slate-100 text-sm tracking-tight">{activeCategoryData?.category} Overview</span>
                <span className={`text-[8.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded border shrink-0 ${
                  activeCategoryData?.difficulty === 'Hard' 
                    ? 'text-rose-400 bg-rose-500/10 border-rose-500/20' 
                    : activeCategoryData?.difficulty === 'Medium' 
                      ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                      : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                }`}>
                  {activeCategoryData?.difficulty}
                </span>
              </div>

              {/* Confidence Stars */}
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Confidence Level</span>
                <div className="flex items-center text-xs space-x-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span 
                      key={i} 
                      className={i < (activeCategoryData?.confidenceRating || 4) ? "text-amber-400 font-extrabold" : "text-slate-800"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Questions Grid */}
            <div className="space-y-3">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Top 10 Most Asked Questions</span>
              <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
                {activeCategoryData?.questions.map((q, idx) => {
                  const isOpen = openQuestionIdx === idx;
                  return (
                    <div 
                      key={idx}
                      className="bg-slate-900/40 rounded-lg border border-slate-900 overflow-hidden text-xs"
                    >
                      <button
                        onClick={() => toggleQuestion(idx)}
                        className="w-full p-3.5 flex justify-between items-center text-left hover:bg-slate-900/60 transition-colors gap-2"
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="text-slate-500 font-black text-[10px]">Q{idx + 1}.</span>
                          <span className="font-extrabold text-slate-200">{q.question}</span>
                        </div>
                        {isOpen ? (
                          <FiChevronUp className="w-4 h-4 text-sky-400 flex-shrink-0" />
                        ) : (
                          <FiChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="p-3.5 bg-slate-950 border-t border-slate-900 space-y-1 leading-relaxed text-slate-300 font-semibold">
                          <span className="text-[8.5px] font-black text-slate-500 uppercase tracking-wider block">Answer Summary</span>
                          <p className="text-[11px] leading-relaxed">{q.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tips & Mistakes Panel Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-900 pt-4">
              
              {/* Interviewer Tips (Green Box) */}
              <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl space-y-2 text-xs">
                <span className="text-[8.5px] font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FiInfo className="w-3.5 h-3.5" />
                  Interviewer Tips
                </span>
                <ul className="space-y-1.5 text-[11px] text-slate-400 leading-normal font-semibold">
                  {activeCategoryData?.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-1.5 text-slate-350 text-slate-300">
                      <FiCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Mistakes (Red Box) */}
              <div className="bg-rose-500/5 border border-rose-500/10 p-4 rounded-xl space-y-2 text-xs">
                <span className="text-[8.5px] font-black text-rose-455 text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FiAlertCircle className="w-3.5 h-3.5 animate-pulse" />
                  Common Mistakes
                </span>
                <ul className="space-y-1.5 text-[11px] text-slate-400 leading-normal font-semibold">
                  {activeCategoryData?.mistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-1.5 text-slate-350 text-slate-300">
                      <FiX className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Follow-up Questions (Blue Box/Details) */}
            <div className="bg-sky-500/5 border border-sky-500/10 p-4 rounded-xl space-y-2 text-xs">
              <span className="text-[8.5px] font-black text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                <FiActivity className="w-3.5 h-3.5" />
                Follow-up Questions
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-slate-400 font-semibold leading-relaxed">
                {activeCategoryData?.followUps.map((fu, index) => (
                  <div key={index} className="flex items-start gap-1 text-slate-300">
                    <span className="text-sky-400 font-extrabold pr-0.5">•</span>
                    <span>{fu}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default TechnicalInterview;
