import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const InterviewAccordion = ({ title, questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const qs = questions ?? [];

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl text-left self-stretch h-full flex flex-col">
      <div className="border-b border-slate-800/60 pb-2">
        <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">{title}</h3>
      </div>

      <div className="space-y-2 flex-grow overflow-y-auto max-h-[360px] pr-1.5 scrollbar-thin">
        {qs.length === 0 ? (
          <p className="text-xs text-slate-500 font-semibold pt-2">No topics available yet.</p>
        ) : (
          qs.map((q, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="bg-slate-950 rounded-xl border border-slate-850 overflow-hidden text-xs"
              >
                {/* Accordion Header Toggle */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-3.5 flex justify-between items-center text-left hover:bg-slate-900 transition-colors"
                >
                  <span className="font-extrabold text-slate-200">{q.title}</span>
                  {isOpen ? (
                    <FiChevronUp className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  )}
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="p-3.5 bg-slate-900/40 text-slate-400 border-t border-slate-900 leading-relaxed font-semibold">
                    {q.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default InterviewAccordion;
