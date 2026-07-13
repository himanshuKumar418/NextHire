import { FiAward, FiClock, FiTarget, FiBookmark, FiZap } from 'react-icons/fi';
import { useDashboard } from '../../context/DashboardContext.jsx';

const WeeklyStats = () => {
  const {
    displayStreak,
    displayQuestionsSolved,
    displayStudyHours,
    displayAccuracy,
    displayBestTopic,
    displayWeeklyXp
  } = useDashboard();

  const stats = {
    streak: displayStreak,
    solved: displayQuestionsSolved,
    hours: displayStudyHours,
    accuracy: displayAccuracy,
    bestTopic: displayBestTopic
  };
  const xp = displayWeeklyXp;

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-4 shadow-xl flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300 hover:border-sky-500/20 group">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
        <h3 className="text-sm font-bold text-slate-200">This Week</h3>
        <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
          Activity
        </span>
      </div>

      {/* Current Streak Feature at the Top */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-lg animate-pulse">
            🔥
          </div>
          <div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Current Streak</span>
            <span className="text-sm font-black text-slate-100">{stats?.streak ?? 0} Days</span>
          </div>
        </div>
        <span className="text-[10px] text-amber-500 font-bold bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
          {(stats?.streak ?? 0) > 0 ? 'Super Active' : 'Inactive'}
        </span>
      </div>

      {/* Grid of Stats */}
      <div className="space-y-3.5 text-xs text-left">
        
        {/* Questions Solved */}
        <div className="flex items-center justify-between p-3 bg-slate-950/60 rounded-xl border border-slate-850 hover:border-sky-500/10 transition-colors duration-200">
          <div className="flex items-center space-x-2.5">
            <FiAward className="w-4 h-4 text-sky-400" />
            <span className="text-slate-400 font-semibold">Questions Solved</span>
          </div>
          <span className="text-slate-200 font-black">{stats.solved} Qs</span>
        </div>

        {/* Study Hours */}
        <div className="flex items-center justify-between p-3 bg-slate-950/60 rounded-xl border border-slate-850 hover:border-sky-500/10 transition-colors duration-200">
          <div className="flex items-center space-x-2.5">
            <FiClock className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-400 font-semibold">Study Hours</span>
          </div>
          <span className="text-slate-200 font-black">{stats.hours} Hrs</span>
        </div>

        {/* Accuracy */}
        <div className="flex items-center justify-between p-3 bg-slate-950/60 rounded-xl border border-slate-850 hover:border-sky-500/10 transition-colors duration-200">
          <div className="flex items-center space-x-2.5">
            <FiTarget className="w-4 h-4 text-rose-400" />
            <span className="text-slate-400 font-semibold">Accuracy</span>
          </div>
          <span className="text-slate-200 font-black">{stats.accuracy}%</span>
        </div>

        {/* Best Topic */}
        <div className="flex items-center justify-between p-3 bg-slate-950/60 rounded-xl border border-slate-850 hover:border-sky-500/10 transition-colors duration-200">
          <div className="flex items-center space-x-2.5">
            <FiBookmark className="w-4 h-4 text-purple-400" />
            <span className="text-slate-400 font-semibold">Best Topic</span>
          </div>
          <span className="text-slate-200 font-black">{stats.bestTopic || 'None yet'}</span>
        </div>

        {/* Weekly XP */}
        <div className="flex items-center justify-between p-3 bg-slate-950/60 rounded-xl border border-slate-850 hover:border-sky-500/10 transition-colors duration-200">
          <div className="flex items-center space-x-2.5">
            <FiZap className="w-4 h-4 text-amber-400" />
            <span className="text-slate-400 font-semibold">Weekly XP</span>
          </div>
          <span className="text-emerald-405 text-emerald-400 font-black">+{xp} XP</span>
        </div>

      </div>
    </div>
  );
};

export default WeeklyStats;
