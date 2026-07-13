import { FiBookOpen, FiLock } from 'react-icons/fi';
import { useDashboard } from '../../context/DashboardContext.jsx';

const MockTestCard = ({ targetCompany, data, isCompleted, onMarkCompleted, onStartMock }) => {
  const { displayXp: xp } = useDashboard();

  if (!data) return null;

  const isLocked = xp < 1000;
  const requiredXp = 1000;
  const remainingXp = Math.max(0, requiredXp - xp);
  const progressPct = Math.min(100, Math.round((xp / requiredXp) * 100));

  const breakdown = data.breakdown || { dsa: 20, core: 15, aptitude: 15, interview: 10 };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-4 shadow-xl relative overflow-hidden group flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300 hover:border-purple-500/20">
      
      {/* Shimmer animation keyframes for locked cards */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes lockedShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .locked-shimmer {
          background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.05), transparent);
          background-size: 200% 100%;
          animation: lockedShimmer 2.5s infinite linear;
        }
      `}} />

      {/* Shimmer Background if locked */}
      {isLocked && <div className="absolute inset-0 locked-shimmer pointer-events-none z-0"></div>}
      
      {/* Glow */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="space-y-4 flex-grow relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
          <div className="flex items-center space-x-2">
            <FiBookOpen className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-bold text-slate-200">Upcoming Mock Test</h3>
          </div>
          
          {isLocked ? (
            <span className="flex items-center gap-1 text-[9px] font-black text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded">
              <FiLock className="w-2.5 h-2.5 animate-bounce" />
              LOCKED
            </span>
          ) : (
            <span className="text-[9px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 animate-pulse">
              UNLOCKED
            </span>
          )}
        </div>

        {/* Test details */}
        <div className="space-y-3.5">
          <div className="space-y-1">
            <span className="text-[9px] text-sky-400 font-extrabold uppercase tracking-wide">{targetCompany} Assessment</span>
            <h4 className="text-base font-black text-slate-100 group-hover:text-purple-400 transition-colors duration-200">
              {data.name}
            </h4>
          </div>

          {/* Core Specifications */}
          <div className="grid grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-850 text-xs font-semibold">
            <div>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Passing Marks</span>
              <span className="text-slate-200">75% Score</span>
            </div>
            <div>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Estimated Time</span>
              <span className="text-slate-200">120 Minutes</span>
            </div>
            <div>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Mock Level</span>
              <span className="text-slate-200">{data.level || 'Medium-Hard'}</span>
            </div>
            <div>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Mock Rank</span>
              <span className="text-purple-400 font-bold">Top 10% Goal</span>
            </div>
          </div>

          {/* Question Distribution */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Question Distribution</span>
            <div className="grid grid-cols-4 gap-2 text-[10px] text-center font-bold">
              <div className="bg-slate-950 border border-slate-850 p-2 rounded">
                <span className="text-sky-400 block">{breakdown.dsa}</span>
                <span className="text-slate-500 text-[8px]">DSA</span>
              </div>
              <div className="bg-slate-950 border border-slate-850 p-2 rounded">
                <span className="text-emerald-400 block">{breakdown.core}</span>
                <span className="text-slate-500 text-[8px]">Core</span>
              </div>
              <div className="bg-slate-950 border border-slate-850 p-2 rounded">
                <span className="text-amber-400 block">{breakdown.aptitude}</span>
                <span className="text-slate-500 text-[8px]">Aptitude</span>
              </div>
              <div className="bg-slate-950 border border-slate-850 p-2 rounded">
                <span className="text-purple-400 block">{breakdown.interview}</span>
                <span className="text-slate-500 text-[8px]">Interv</span>
              </div>
            </div>
          </div>

          {/* Reward Details */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Reward Details</span>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 text-xs space-y-1.5 font-semibold">
              <div className="flex justify-between text-slate-400">
                <span>XP Reward</span>
                <span className="text-emerald-400">+{data.xpReward} XP</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Badge Unlock</span>
                <span className="text-slate-200">+1 Badge</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Readiness Gain</span>
                <span className="text-sky-400">+10 Readiness</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locking Status Section with Glass Effect Overlay if Locked */}
      <div className="space-y-3 pt-2 relative z-20">
        {isLocked ? (
          <div className="bg-slate-950/60 backdrop-blur-md p-3.5 rounded-xl border border-rose-500/10 text-xs space-y-2 relative overflow-hidden">
            {/* Shimmer effect inside the glass lock */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-500/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
            
            <div className="flex items-center justify-between font-bold text-[10px]">
              <span className="text-rose-400 flex items-center gap-1">🔒 Locked (Required 1000 XP)</span>
              <span className="text-slate-400">{xp} / 1000 XP</span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
              <div className="bg-rose-500 h-full rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }}></div>
            </div>
            
            <div className="flex justify-between text-[9px] text-slate-500 font-bold">
              <span>Required XP: 1000 XP</span>
              <span>Current: {xp} XP</span>
            </div>
          </div>
        ) : null}

        {isLocked ? (
          <button 
            disabled
            className="block w-full bg-slate-950 border border-slate-850 text-slate-600 font-bold py-2.5 rounded-xl text-xs text-center cursor-not-allowed"
          >
            Locked
          </button>
        ) : (
          <button 
            disabled
            className="block w-full bg-purple-900/30 border border-purple-500/20 text-purple-300/50 font-bold py-2.5 rounded-xl text-xs text-center cursor-not-allowed"
          >
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
};

export default MockTestCard;
