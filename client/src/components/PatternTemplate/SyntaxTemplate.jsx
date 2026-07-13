import React, { useState, useEffect } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

const SyntaxTemplate = ({ syntax }) => {
  const [activeLang, setActiveLang] = useState('cpp');
  const [isCodeExpanded, setIsCodeExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  // Reset states when switching datasets
  useEffect(() => {
    setIsCodeExpanded(false);
    setCopied(false);
  }, [syntax]);

  const handleCopyCode = () => {
    const code = syntax[activeLang];
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl text-left">
      <div className="border-b border-slate-800/60 pb-2 flex items-center justify-between">
        <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Syntax templates</h3>
        
        <div className="flex items-center space-x-2.5">
          <button 
            onClick={handleCopyCode}
            className="bg-slate-950 hover:bg-slate-850 border border-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-bold text-slate-300 flex items-center gap-1.5 transition-colors duration-200"
          >
            {copied ? <FiCheck className="w-3.5 h-3.5 text-emerald-450 text-emerald-450 text-emerald-400 animate-pulse" /> : <FiCopy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied ✓' : 'Copy'}</span>
          </button>
          <button 
            onClick={() => setIsCodeExpanded(!isCodeExpanded)}
            className="bg-slate-950 hover:bg-slate-850 border border-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-bold text-sky-400 flex items-center gap-1.5 transition-colors duration-200"
          >
            <span>{isCodeExpanded ? 'Collapse' : 'Expand'}</span>
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex gap-1.5 text-xs font-bold border-b border-slate-855 border-slate-850 pb-0.5">
          {['cpp', 'java', 'python'].map((l) => (
            <button
              key={l}
              onClick={() => setActiveLang(l)}
              className={`px-4 py-1.5 border-b-2 font-black transition-colors duration-200 ${
                activeLang === l ? 'border-sky-500 text-sky-400' : 'border-transparent text-slate-500 hover:text-slate-350'
              }`}
            >
              {l === 'cpp' ? 'C++' : l === 'java' ? 'Java' : 'Python'}
            </button>
          ))}
        </div>

        <div className={`bg-slate-950 p-4 rounded-xl border border-slate-850 font-mono text-[10.5px] leading-relaxed overflow-x-auto text-sky-400 transition-all duration-300 ${
          isCodeExpanded ? 'max-h-none' : 'max-h-44 overflow-y-hidden'
        }`}>
          <pre className="text-left text-slate-300 whitespace-pre">
            {syntax[activeLang]}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default SyntaxTemplate;
