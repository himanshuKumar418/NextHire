import React from 'react';
import { FiLock, FiClock, FiBookOpen, FiAward } from 'react-icons/fi';

const ResourcesCard = ({ resources }) => {
  const mockTests = [
    {
      id: 1,
      title: 'Mock Test 1',
      subtitle: 'Beginner Assessment',
      duration: '60 Minutes',
      questions: '45',
      includes: ['✓ Aptitude', '✓ Reasoning', '✓ English', '✓ 1 Coding'],
      difficulty: 'Easy',
      reward: '100 XP',
      unlock: 'Unlock: Complete Profile',
      buttonText: '🔒 Complete Profile to Unlock'
    },
    {
      id: 2,
      title: 'Mock Test 2',
      subtitle: 'Infosys SE Mock OA',
      duration: '90 Minutes',
      questions: '65',
      includes: ['• Aptitude', '• Logical', '• Verbal', '• 2 Coding Questions'],
      difficulty: 'Medium',
      reward: '250 XP',
      unlock: 'Unlock Requirement: Complete Mock Test 1',
      buttonText: '🔒 Locked'
    },
    {
      id: 3,
      title: 'Mock Test 3',
      subtitle: 'Infosys DSE Assessment',
      duration: '120 Minutes',
      questions: '70',
      includes: ['• Advanced Aptitude', '• Reasoning', '• English', '• 2 Medium Coding'],
      difficulty: 'Medium-Hard',
      reward: '400 XP',
      unlock: 'Unlock Requirement: Complete Mock Test 2',
      buttonText: '🔒 Locked'
    },
    {
      id: 4,
      title: 'Mock Test 4',
      subtitle: 'Infosys SP Coding Challenge',
      duration: '120 Minutes',
      questions: '2 Coding, 10 MCQs',
      includes: ['• 2 Coding Challenges', '• 10 MCQs'],
      difficulty: 'Hard',
      reward: '600 XP',
      unlock: 'Unlock Requirement: Complete Mock Test 3',
      buttonText: '🔒 Locked'
    },
    {
      id: 5,
      title: 'Final Simulation 1',
      subtitle: 'Final Placement Simulation',
      duration: '180 Minutes',
      questions: '90',
      includes: ['• Complete OA', '• Technical MCQs', '• 2 Coding', '• HR Evaluation', '• Resume Review'],
      difficulty: 'Expert',
      reward: '1000 XP',
      unlock: 'Unlock Requirement: Complete all previous Mock Tests',
      buttonText: '🔒 Locked'
    },
    {
      id: 6,
      title: 'Final Simulation 2',
      subtitle: 'Grand Placement Challenge',
      duration: '180 Minutes',
      questions: '100',
      includes: ['• Aptitude', '• Reasoning', '• English', '• Core Subjects', '• Technical MCQs', '• 2 Coding Questions', '• HR Interview'],
      difficulty: 'Expert',
      reward: '1500 XP',
      unlock: 'Unlock Requirement: Complete Final Simulation 1',
      buttonText: '🔒 Locked'
    }
  ];

  return (
    <div id="core-subjects" className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-5 shadow-xl text-left">
      
      {/* Section Header */}
      <div className="border-b border-slate-800/60 pb-3">
        <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Placement Mock Test Center</h3>
        <p className="text-[11px] text-slate-400 font-semibold mt-0.5">
          Practice complete company-level online assessments before the actual placement drive.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {mockTests.map((test) => (
          <div 
            key={test.id} 
            className="bg-slate-950 p-5 rounded-2xl border border-slate-850 flex flex-col justify-between h-[270px] hover:border-sky-500/20 hover:shadow-[0_4px_25px_rgba(56,189,248,0.04)] hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Ambient Background Hover Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/[0.05] transition-all duration-300"></div>

            {/* Top Details & Right Lock panel */}
            <div className="flex justify-between items-start gap-4">
              
              {/* Left Details */}
              <div className="space-y-2.5 flex-grow text-left">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest block">Mock Assessment</span>
                  <h4 className="text-slate-100 font-extrabold text-sm tracking-tight">{test.title}</h4>
                  <p className="text-[11px] text-slate-400 font-semibold">{test.subtitle}</p>
                </div>

                {/* Duration & Questions metrics */}
                <div className="flex items-center gap-3 text-[10px] text-slate-500 font-bold">
                  <span className="flex items-center gap-1">
                    <FiClock className="w-3.5 h-3.5 text-slate-650 text-slate-600" />
                    {test.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FiBookOpen className="w-3.5 h-3.5 text-slate-650 text-slate-600" />
                    {test.questions}
                  </span>
                </div>

                {/* Checklist content */}
                <div className="text-[10px] text-slate-500 space-y-0.5 font-medium">
                  {test.includes.slice(0, 3).map((inc, i) => (
                    <div key={i} className="truncate">{inc}</div>
                  ))}
                  {test.includes.length > 3 && (
                    <div className="text-[9px] text-slate-600 italic">+{test.includes.length - 3} more sections</div>
                  )}
                </div>
              </div>

              {/* Right Lock and Badges */}
              <div className="flex flex-col items-end justify-between h-[125px] shrink-0">
                {/* Large Lock Icon */}
                <div className="w-12 h-12 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-slate-650 text-slate-600 group-hover:text-sky-500/40 group-hover:border-sky-500/10 transition-colors">
                  <FiLock className="w-4.5 h-4.5" />
                </div>

                {/* Badges Stack */}
                <div className="space-y-1.5 text-right">
                  {/* Difficulty Badge */}
                  <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block ${
                    test.difficulty === 'Easy' 
                      ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
                      : test.difficulty === 'Medium'
                        ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                        : test.difficulty === 'Medium-Hard'
                          ? 'text-purple-400 bg-purple-500/10 border-purple-500/20'
                          : 'text-rose-400 bg-rose-500/10 border-rose-500/20'
                  }`}>
                    {test.difficulty}
                  </span>
                  
                  {/* Reward Badge */}
                  <span className="text-[8.5px] font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 tracking-wider flex items-center gap-1 justify-end">
                    <FiAward className="w-3.5 h-3.5" />
                    {test.reward}
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Progress requirement & Locked Button */}
            <div className="space-y-2 pt-2 border-t border-slate-900/60">
              <p className="text-[9.5px] text-slate-500 font-semibold italic text-left truncate">
                {test.unlock}
              </p>

              <button 
                disabled 
                className="w-full bg-slate-900/50 text-slate-600 border border-slate-850/80 py-2 rounded-xl text-xs font-black select-none cursor-not-allowed flex items-center justify-center gap-1.5"
              >
                {test.buttonText}
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ResourcesCard;
