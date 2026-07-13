import { useDashboard } from '../../context/DashboardContext.jsx';

const AchievementsCard = () => {
  const { user, displayXp: xp, displayStreak: streak, displayReadiness: readiness } = useDashboard();
  const targetCompany = user?.targetCompany || 'Infosys';
  const displayStreak = streak ?? 0;
  const displayReadiness = readiness ?? 0;

  const achievements = [
    { id: 'streak', name: `${displayStreak} Day Streak`, description: `Solved problems ${displayStreak} days in a row`, icon: '🔥', unlocked: displayStreak >= 1 },
    { id: 'questions', name: 'First 100 Qs', description: 'Completed 100 DSA questions', icon: '💯', unlocked: xp >= 500 },
    { id: 'arrays', name: 'Array Master', description: 'Solved all Array DSA patterns', icon: '👑', unlocked: xp >= 200 },
    { id: 'hashing', name: 'Hashing Expert', description: 'Solved all Hashing patterns', icon: '🔑', unlocked: xp >= 300 },
    { id: 'ready', name: `${targetCompany} Ready`, description: 'Reached 70% readiness score', icon: '🎓', unlocked: displayReadiness >= 70 }
  ];

  // Calculate next badge threshold based on current XP
  let nextBadgeName = '';
  let nextBadgeThreshold = 500;
  
  if (xp < 500) {
    nextBadgeName = 'First 100 Qs';
    nextBadgeThreshold = 500;
  } else if (xp < 1000) {
    nextBadgeName = 'Full Mock Assessment';
    nextBadgeThreshold = 1000;
  } else {
    nextBadgeName = 'NextHire Elite';
    nextBadgeThreshold = 1500;
  }

  const remainingXp = Math.max(0, nextBadgeThreshold - xp);
  const progressPct = Math.min(100, Math.round((xp / nextBadgeThreshold) * 100));

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-4 shadow-xl flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300 hover:border-sky-500/20">
      <div className="space-y-4 flex-grow">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
          <h3 className="text-sm font-bold text-slate-200">Milestone Badges</h3>
          <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
            Achievements
          </span>
        </div>

        {/* Dynamic XP target tracking progress at the TOP */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3 text-xs">
          <div className="flex items-center justify-between font-bold">
            <span className="text-slate-400">Current XP</span>
            <span className="text-sky-400 text-sm font-black">{xp} XP</span>
          </div>

          <div className="flex items-center justify-between font-semibold text-[10px] text-slate-300">
            <span>Next Badge</span>
            <span>{nextBadgeName} ({nextBadgeThreshold} XP)</span>
          </div>
          
          <div className="space-y-1">
            <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
              <div className="bg-sky-500 h-full rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }}></div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-slate-500 font-bold">
              <span>{progressPct}% Progress</span>
              <span>{remainingXp} XP Remaining</span>
            </div>
          </div>

          <div className="border-t border-slate-850 pt-2 space-y-1">
            <span className="text-[9px] text-slate-505 text-slate-500 font-bold uppercase tracking-wider block">Upcoming Reward</span>
            <div className="flex flex-wrap gap-1.5 text-[9px] font-bold">
              <span className="bg-slate-900 border border-slate-800 text-sky-400 px-2 py-0.5 rounded">Mock Ticket</span>
              <span className="bg-slate-900 border border-slate-800 text-emerald-400 px-2 py-0.5 rounded">New Badge</span>
              <span className="bg-slate-900 border border-slate-800 text-amber-500 px-2 py-0.5 rounded">+50 XP</span>
            </div>
          </div>
        </div>

        {/* Badges Grid list */}
        <div className="space-y-3 pt-1">
          {achievements.filter(b => b.unlocked).length === 0 && (
            <div className="text-xs text-slate-400 bg-slate-955 bg-slate-950/40 p-3.5 rounded-xl border border-slate-850 text-center font-semibold">
              🔒 No badges earned yet
            </div>
          )}
          {achievements.map((badge) => (
            <div 
              key={badge.id}
              className={`flex items-center gap-3.5 p-3 rounded-xl border transition-all duration-200 ${
                badge.unlocked 
                  ? 'bg-slate-950/60 border-slate-800/80 hover:border-sky-500/30 hover:scale-[1.01]' 
                  : 'bg-slate-950/30 border-slate-900 opacity-45 cursor-default'
              }`}
            >
              {/* Badge Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg border ${
                badge.unlocked 
                  ? 'bg-slate-900 border-sky-500/20 text-sky-400 animate-pulse' 
                  : 'bg-slate-900/40 border-slate-850 text-slate-600'
              }`}>
                {badge.icon}
              </div>

              <div className="space-y-0.5 text-left">
                <h4 className="text-xs font-bold text-slate-200">{badge.name}</h4>
                <p className="text-[10px] text-slate-500 font-medium">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsCard;
