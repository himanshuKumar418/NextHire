import { useDashboard } from '../../context/DashboardContext.jsx';

const CompanyProgressCard = ({ data }) => {
  const { user, stats, displayReadiness } = useDashboard();
  const targetCompany = user?.targetCompany || 'Infosys';

  if (!data) return null;

  const displayReadinessVal = displayReadiness;
  const codingProgress = stats.codingProgress ?? 0;
  const coreProgress = stats.coreProgress ?? 0;
  const aptitudeProgress = stats.aptitudeProgress ?? 0;
  const interviewProgress = stats.interviewProgress ?? 0;
  const mockProgress = Math.round(displayReadinessVal * 0.97);

  const tracks = [
    { name: 'Coding Tracks', value: Math.min(100, codingProgress), color: 'bg-sky-500' },
    { name: 'Core Subjects Revision', value: Math.min(100, coreProgress), color: 'bg-emerald-500' },
    { name: 'Aptitude', value: Math.min(100, aptitudeProgress), color: 'bg-amber-500' },
    { name: 'Mock & HR Interview Prep', value: Math.min(100, interviewProgress), color: 'bg-purple-500' }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-4 shadow-xl flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
        <h3 className="text-sm font-bold text-slate-200">{targetCompany} Prep Progress</h3>
        <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
          Target Progress
        </span>
      </div>

      {/* Progress Bars */}
      <div className="space-y-4 pt-1 flex-grow">
        {tracks.map((track) => (
          <div key={track.name} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-semibold">{track.name}</span>
              <span className="text-slate-205 text-slate-200 font-black">{track.value}%</span>
            </div>
            {/* Track Bar */}
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850">
              <div 
                className={`${track.color} h-full rounded-full transition-all duration-500`}
                style={{ width: `${track.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Target & Mock Unlock progress */}
      <div className="space-y-4 pt-4 border-t border-slate-800/40 text-xs text-left">
        <div className="space-y-2">
          <span className="text-[9px] text-slate-505 text-slate-500 font-bold uppercase tracking-wider block">Next Target</span>
          <ul className="space-y-1.5 font-semibold text-slate-300">
            {data.nextTargets && data.nextTargets.length > 0 ? (
              data.nextTargets.map((target, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  {target}
                </li>
              ))
            ) : (
              <li className="flex items-center gap-2 text-slate-400 italic">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                Begin your placement journey!
              </li>
            )}
          </ul>
        </div>

        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between items-center text-[9px] font-bold">
            <span className="text-slate-505 text-slate-500 uppercase">Mock Unlock Progress</span>
            <span className="text-sky-400">{Math.min(100, mockProgress)}%</span>
          </div>
          <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
            <div className="bg-sky-500 h-full rounded-full" style={{ width: `${Math.min(100, mockProgress)}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProgressCard;
