import { Link } from 'react-router-dom';
import { useDashboard } from '../../context/DashboardContext.jsx';

const ReadinessCard = ({ data }) => {
  const { user, stats, displayReadiness } = useDashboard();
  const targetCompany = user?.targetCompany || 'Infosys';

  if (!data) return null;

  const displayScore = displayReadiness;

  // SVG Circle stroke computations
  const radius = 45;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayScore / 100) * circumference;

  const codingProgress = stats.codingProgress ?? 0;
  const coreProgress = stats.coreProgress ?? 0;
  const aptitudeProgress = stats.aptitudeProgress ?? 0;
  const interviewProgress = stats.interviewProgress ?? 0;
  const hrProgress = 0;

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-6 shadow-xl relative overflow-hidden group flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
        <h3 className="text-sm font-bold text-slate-200">Placement Readiness</h3>
        <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
          Target Metric
        </span>
      </div>

      {/* SVG Ring Progress Container */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 py-2">
        <div className="relative w-28 h-28 flex items-center justify-center flex-shrink-0">
          <svg className="w-28 h-28 transform -rotate-90">
            {/* Background Track Circle */}
            <circle 
              cx="56" 
              cy="56" 
              r={radius} 
              className="stroke-slate-950 fill-none" 
              strokeWidth={strokeWidth} 
            />
            {/* Colored Active Indicator Circle */}
            <circle 
              cx="56" 
              cy="56" 
              r={radius} 
              className="stroke-sky-500 fill-none transition-all duration-1000" 
              strokeWidth={strokeWidth} 
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute text-center">
            <span className="text-2xl font-black text-slate-100 block">{displayScore}%</span>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Ready</span>
          </div>
        </div>

        <div className="space-y-1 text-center sm:text-left">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Current Status</span>
          <h4 className="text-lg font-black text-slate-200">{targetCompany} Target</h4>
          <p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">
            Overall readiness score mapped from DSA, Core, and Aptitude tests.
          </p>
        </div>
      </div>

      {/* Strengths & Weaknesses splits */}
      <div className="space-y-4 pt-4 border-t border-slate-800/40 text-xs">
        <div className="grid grid-cols-2 gap-4 text-left">
          <div className="space-y-1.5">
            <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider block">Strengths</span>
            <div className="flex flex-wrap gap-1">
              {displayScore > 0 ? (
                <>
                  <span className="bg-emerald-950/40 text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-emerald-900/30">Arrays</span>
                  <span className="bg-emerald-950/40 text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-emerald-900/30">Strings</span>
                </>
              ) : (
                <span className="text-[10px] text-slate-500 italic">No Strengths Yet</span>
              )}
            </div>
          </div>
          
          <div className="space-y-1.5">
            <span className="text-[9px] text-rose-400 font-bold uppercase tracking-wider block">Weaknesses</span>
            <div className="flex flex-wrap gap-1">
              {displayScore > 0 ? (
                <>
                  <span className="bg-rose-950/40 text-rose-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-rose-900/30">Graphs</span>
                  <span className="bg-rose-950/40 text-rose-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-rose-900/30">DP</span>
                </>
              ) : (
                <span className="text-[10px] text-slate-500 italic">No Weaknesses Yet</span>
              )}
            </div>
          </div>
        </div>

        {/* Remaining topics */}
        <div className="space-y-2 text-left pt-1">
          <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Remaining Topics</span>
          <div className="flex flex-wrap gap-1.5">
            {data.remaining ? (
              data.remaining.map((topic) => (
                <span key={topic} className="bg-slate-950 text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-800">
                  {topic}
                </span>
              ))
            ) : (
              <span className="text-[10px] text-slate-500 italic">No remaining topics</span>
            )}
          </div>
        </div>

        {/* Target Status with mini progress bars */}
        <div className="space-y-3 text-left pt-3 border-t border-slate-800/40">
          <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Target Status</span>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[10px]">
            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-slate-400">
                <span>Coding Progress</span>
                <span className="text-slate-202 text-slate-200">{Math.min(100, codingProgress)}%</span>
              </div>
              <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden border border-slate-850">
                <div className="bg-sky-500 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(100, codingProgress)}%` }}></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-slate-400">
                <span>Core Revision</span>
                <span className="text-slate-202 text-slate-200">{Math.min(100, coreProgress)}%</span>
              </div>
              <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden border border-slate-850">
                <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(100, coreProgress)}%` }}></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-slate-400">
                <span>Aptitude</span>
                <span className="text-slate-202 text-slate-200">{Math.min(100, aptitudeProgress)}%</span>
              </div>
              <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden border border-slate-850">
                <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(100, aptitudeProgress)}%` }}></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-slate-400">
                <span>Interview</span>
                <span className="text-slate-202 text-slate-200">{Math.min(100, interviewProgress)}%</span>
              </div>
              <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden border border-slate-850">
                <div className="bg-purple-500 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(100, interviewProgress)}%` }}></div>
              </div>
            </div>
            <div className="space-y-1 col-span-2">
              <div className="flex justify-between font-semibold text-slate-400">
                <span>HR Round</span>
                <span className="text-slate-202 text-slate-200">{Math.min(100, hrProgress)}%</span>
              </div>
              <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden border border-slate-850">
                <div className="bg-rose-500 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(100, hrProgress)}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <Link 
        to={data.path}
        className="block w-full bg-slate-950 border border-slate-700 hover:bg-slate-850 text-sky-400 font-semibold py-2.5 rounded-xl text-xs text-center transition-colors duration-200 mt-2"
      >
        View Roadmap
      </Link>
    </div>
  );
};

export default ReadinessCard;
