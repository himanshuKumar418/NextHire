import React, { useState, useEffect, useRef } from 'react';
import { FiPlay, FiPause, FiRotateCcw, FiChevronLeft, FiChevronRight, FiCheckCircle } from 'react-icons/fi';

const Simulation = ({ simulation }) => {
  const [visStep, setVisStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playTimer = useRef(null);

  const totalSteps = simulation.steps.length;
  const activeStep = simulation.steps[visStep];
  const isLastStep = visStep === totalSteps - 1;

  // Reset simulation when pattern swaps
  useEffect(() => {
    setVisStep(0);
    setIsPlaying(false);
    if (playTimer.current) clearInterval(playTimer.current);
  }, [simulation]);

  // Handle Autoplay Interval Loop
  useEffect(() => {
    if (isPlaying) {
      playTimer.current = setInterval(() => {
        setVisStep((prev) => {
          if (prev >= totalSteps - 1) {
            setIsPlaying(false);
            clearInterval(playTimer.current);
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (playTimer.current) clearInterval(playTimer.current);
    }

    return () => {
      if (playTimer.current) clearInterval(playTimer.current);
    };
  }, [isPlaying, totalSteps]);

  const handleNext = () => {
    setVisStep((prev) => Math.min(totalSteps - 1, prev + 1));
  };

  const handlePrev = () => {
    setVisStep((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setVisStep(0);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isLastStep) {
      setVisStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Visited element check algorithm
  const isVisitedElement = (idx) => {
    const l = activeStep.left;
    const r = activeStep.right;
    
    // Custom exclusions based on patterns
    if (simulation.array.length === 4) { // Prefix Sum sample
      return idx < r;
    }
    // Default Two Pointer / Binary Search rules
    return idx < l || idx > r;
  };

  // Success pair check
  const isSuccessState = isLastStep && (activeStep.decision.toLowerCase().includes('found') || activeStep.decision.toLowerCase().includes('solution') || activeStep.decision.toLowerCase().includes('complete') || activeStep.decision.toLowerCase().includes('max'));

  // Get matching comparison characters
  const getComparisonString = () => {
    if (activeStep.sum === undefined || simulation.target === undefined) return '';
    const s = activeStep.sum;
    const t = simulation.target;
    if (s === t) return `${s} == ${t}`;
    return s < t ? `${s} < ${t}` : `${s} > ${t}`;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-6 shadow-xl text-left">
      <div className="border-b border-slate-800/60 pb-2 flex items-center justify-between">
        <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Algorithmic Simulation Workspace</h3>
        {simulation.target !== undefined && (
          <span className="text-[9px] text-slate-500 font-extrabold uppercase">TARGET SPACE: {simulation.target}</span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Visual Array Column */}
        <div className="lg:col-span-8 space-y-8 bg-slate-950 p-6 rounded-xl border border-slate-850 relative overflow-hidden min-h-[220px] flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Array visual tracks */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-6 transition-all duration-300">
            {simulation.array.map((val, idx) => {
              const isLeft = idx === activeStep.left;
              const isRight = idx === activeStep.right;
              const isMid = activeStep.mid !== undefined && idx === activeStep.mid;
              const isVisited = isVisitedElement(idx);

              // Colors based on checks
              let itemClass = 'border-slate-800 bg-slate-900 text-slate-300';
              
              if (isSuccessState && (isLeft || isRight)) {
                itemClass = 'border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)] scale-105';
              } else if (isLeft) {
                itemClass = 'border-sky-500 bg-sky-500/10 text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.2)] scale-105';
              } else if (isRight) {
                itemClass = 'border-purple-500 bg-purple-500/10 text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.2)] scale-105';
              } else if (isMid) {
                itemClass = 'border-amber-500 bg-amber-500/10 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.2)] scale-105';
              } else if (isVisited) {
                itemClass = 'border-slate-900 bg-slate-950/40 text-slate-600 opacity-40';
              }

              return (
                <div key={idx} className="relative flex flex-col items-center select-none w-12 sm:w-14">
                  {/* Arrow L / Mid labels on top */}
                  {isLeft && (
                    <div className="absolute -top-7 text-[10px] font-black text-sky-400 flex flex-col items-center animate-pulse">
                      <span>L={idx}</span>
                      <span>↓</span>
                    </div>
                  )}
                  {isMid && (
                    <div className="absolute -top-7 text-[10px] font-black text-amber-500 flex flex-col items-center animate-pulse">
                      <span>M={idx}</span>
                      <span>↓</span>
                    </div>
                  )}

                  {/* Element Block */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xs font-black border transition-all duration-200 ${itemClass}`}>
                    {val}
                  </div>

                  {/* Arrow R labels on bottom */}
                  {isRight && (
                    <div className="absolute -bottom-7 text-[10px] font-black text-purple-400 flex flex-col items-center animate-pulse">
                      <span>↑</span>
                      <span>R={idx}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Visualization controls HUD */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-900/60">
            <button 
              onClick={handlePrev}
              disabled={visStep === 0}
              className="bg-slate-900 hover:bg-slate-850 text-slate-300 disabled:opacity-30 border border-slate-800 p-2 rounded-lg text-xs flex items-center gap-1 transition-all"
            >
              <FiChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>

            <button 
              onClick={togglePlay}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                isPlaying 
                  ? 'bg-amber-500 text-slate-950 hover:bg-amber-600' 
                  : 'bg-sky-500 text-slate-950 hover:bg-sky-600'
              }`}
            >
              {isPlaying ? <FiPause className="w-3.5 h-3.5" /> : <FiPlay className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
            </button>

            <button 
              onClick={handleNext}
              disabled={isLastStep}
              className="bg-slate-900 hover:bg-slate-850 text-slate-300 disabled:opacity-30 border border-slate-800 p-2 rounded-lg text-xs flex items-center gap-1 transition-all"
            >
              <span>Next</span>
              <FiChevronRight className="w-3.5 h-3.5" />
            </button>

            <button 
              onClick={handleReset}
              className="bg-slate-900 hover:bg-slate-850 text-slate-400 border border-slate-800 p-2 rounded-lg text-xs flex items-center gap-1 transition-all ml-1"
            >
              <FiRotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Right Decision Card Panel */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3.5 text-xs font-semibold relative overflow-hidden transition-all duration-200">
          <div className="flex justify-between items-center text-[9px] text-slate-500 font-extrabold tracking-wider border-b border-slate-800 pb-1.5">
            <span>DECISION PANEL</span>
            <span className="text-sky-400">STEP {visStep + 1} / {totalSteps}</span>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 text-[10.5px]">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-850">
                <span className="text-[8px] text-slate-500 block uppercase font-bold">Current Sum</span>
                <span className="text-slate-200 font-extrabold text-xs">{activeStep.sum !== undefined ? activeStep.sum : '-'}</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-850">
                <span className="text-[8px] text-slate-500 block uppercase font-bold">Target Sum</span>
                <span className="text-slate-200 font-extrabold text-xs">{simulation.target !== undefined ? simulation.target : '-'}</span>
              </div>
            </div>

            {getComparisonString() && (
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-850 text-center font-mono text-[10px] text-amber-500">
                Comparison: <span className="font-bold text-slate-200">{getComparisonString()}</span>
              </div>
            )}

            <div className="space-y-1 bg-slate-950 p-3 rounded-lg border border-slate-850 text-left">
              <span className="text-[8px] text-sky-400 uppercase font-black tracking-wider block">Decision Logic</span>
              <p className="text-slate-100 font-extrabold">{activeStep.decision}</p>
            </div>

            <div className="space-y-1 bg-slate-950 p-3 rounded-lg border border-slate-850 text-left">
              <span className="text-[8px] text-slate-500 uppercase font-bold tracking-wider block">Step Details</span>
              <p className="text-slate-400 leading-normal font-medium">{activeStep.action}</p>
            </div>
          </div>

          {/* Success Dialog overlay card */}
          {isSuccessState && (
            <div className="mt-3.5 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg flex items-center gap-2.5 text-left text-xs animate-pulse">
              <FiCheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="space-y-0.5 text-emerald-400">
                <h4 className="font-black">Pair Found</h4>
                <p className="text-[10px] font-bold opacity-90">
                  {simulation.array[activeStep.left]} + {simulation.array[activeStep.right]} = {simulation.target} (Indices {activeStep.left}, {activeStep.right})
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trace Table */}
      <div className="space-y-2">
        <div className="text-[9px] text-slate-500 font-black uppercase tracking-wider pl-1">
          Dry Run Trace Table
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-850 text-[9px] text-slate-500 font-black uppercase tracking-wider">
                <th className="p-3">Step</th>
                <th className="p-3">L Pointer</th>
                <th className="p-3">R Pointer</th>
                {simulation.steps[0].mid !== undefined && <th className="p-3">Mid Pointer</th>}
                <th className="p-3">Current Sum</th>
                <th className="p-3">Next Action Decision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850/50 font-semibold">
              {simulation.steps.map((step, idx) => {
                const isActiveRow = idx === visStep;

                return (
                  <tr 
                    key={idx}
                    onClick={() => {
                      setIsPlaying(false);
                      setVisStep(idx);
                    }}
                    className={`cursor-pointer transition-colors ${
                      isActiveRow 
                        ? 'bg-sky-500/10 text-sky-400 font-bold border-l-2 border-l-sky-500' 
                        : 'text-slate-400 hover:bg-slate-900/50 hover:text-slate-200'
                    }`}
                  >
                    <td className="p-3">{idx + 1}</td>
                    <td className="p-3">{step.left}</td>
                    <td className="p-3">{step.right}</td>
                    {step.mid !== undefined && <td className="p-3">{step.mid}</td>}
                    <td className="p-3">{step.sum !== undefined ? step.sum : '-'}</td>
                    <td className="p-3 truncate max-w-xs">{step.decision}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Simulation;
