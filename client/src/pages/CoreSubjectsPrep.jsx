import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiDatabase, FiCpu, FiGlobe, FiHexagon, FiTerminal, FiLayers, FiLock, FiChevronRight } from 'react-icons/fi';
import CompanyLayout from '../components/CompanyPrep/CompanyLayout.jsx';

const CoreSubjectsPrep = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      id: 'dbms',
      title: 'Database Management System',
      concepts: '45 Concepts',
      questions: '150 Questions',
      icon: FiDatabase,
      progress: 0,
      locked: false
    },
    {
      id: 'os',
      title: 'Operating System',
      concepts: '36 Concepts',
      questions: '120 Questions',
      icon: FiCpu,
      progress: 0,
      locked: false
    },
    {
      id: 'cn',
      title: 'Computer Networks',
      concepts: '33 Concepts',
      questions: '100 Questions',
      icon: FiGlobe,
      progress: 0,
      locked: false
    },
    {
      id: 'oops',
      title: 'Object-Oriented Programming',
      concepts: '32 Concepts',
      questions: '110 Questions',
      icon: FiHexagon,
      progress: 0,
      locked: false
    },
    {
      id: 'sql',
      title: 'Structured Query Language (SQL)',
      concepts: '41 Concepts',
      questions: '130 Questions',
      icon: FiTerminal,
      progress: 0,
      locked: false
    },
    {
      id: 'system-design',
      title: 'System Design Basics',
      concepts: 'Coming Soon',
      questions: 'Locked',
      icon: FiLayers,
      progress: 0,
      locked: true
    }
  ];

  const handleCardClick = (subj) => {
    if (subj.locked) return;
    navigate(`/prepare/core-subjects/${subj.id}`);
  };

  return (
    <CompanyLayout hideLeftSidebar={true}>
      <div className="space-y-6 text-left pb-12">
        
        {/* Hero Section */}
        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-5 relative z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest block font-extrabold">Placement Syllabus</span>
              <h1 className="text-3xl font-black text-slate-100 tracking-tight uppercase">Core Subjects</h1>
              <p className="text-xs sm:text-sm text-slate-400 font-semibold max-w-3xl">
                Master DBMS, Operating System, Computer Networks, OOPs and SQL for Placements & Interviews.
              </p>
            </div>

            {/* Overall progress bar */}
            <div className="space-y-2 max-w-xl">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-400">Overall Progress</span>
                <span className="text-sky-400 flex items-center gap-2">
                  <span className="font-mono">░░░░░░░░░░</span>
                  <span>0%</span>
                </span>
              </div>

              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-850 p-0.5">
                <div 
                  className="bg-sky-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subj) => {
            const IconComponent = subj.icon;

            return (
              <div
                key={subj.id}
                onClick={() => handleCardClick(subj)}
                className={`bg-slate-900 border p-5 rounded-2xl flex flex-col justify-between h-[210px] transition-all duration-300 relative group overflow-hidden ${
                  subj.locked 
                    ? 'border-slate-855 border-slate-800 opacity-60 cursor-not-allowed' 
                    : 'border-slate-800 hover:border-sky-500/20 hover:shadow-[0_4px_25px_rgba(56,189,248,0.03)] hover:-translate-y-1 cursor-pointer'
                }`}
              >
                {!subj.locked && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/[0.01] rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/[0.04] transition-all duration-300"></div>
                )}

                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 bg-slate-950 rounded-xl border border-slate-850 flex items-center justify-center text-slate-400 group-hover:text-sky-400 group-hover:border-sky-500/20 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {subj.locked ? (
                      <span className="text-[8px] font-black text-slate-600 bg-slate-950 px-2 py-0.5 rounded border border-slate-850 uppercase tracking-wider flex items-center gap-1">
                        <FiLock className="w-2.5 h-2.5" />
                        Locked
                      </span>
                    ) : (
                      <span className="text-[8.5px] font-black text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 uppercase tracking-wider">
                        Active
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 text-left">
                    <h3 className="text-slate-100 font-extrabold text-sm tracking-tight">{subj.title}</h3>
                    <div className="flex flex-col space-y-0.5 text-[10px] text-slate-400 font-bold">
                      <span>{subj.concepts}</span>
                      <span>{subj.questions}</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar and button */}
                {!subj.locked ? (
                  <div className="space-y-3 pt-3 border-t border-slate-850/60">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-500 font-semibold">Progress</span>
                      <span className="text-sky-400 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform uppercase tracking-wider">
                        <span>Explore Subject</span>
                        <FiChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                      <div className="bg-sky-500 h-full rounded-full" style={{ width: `${subj.progress}%` }}></div>
                    </div>
                  </div>
                ) : (
                  <div className="pt-3 border-t border-slate-850/40 text-[10px] text-slate-600 font-black uppercase tracking-wider flex items-center gap-1 justify-center bg-slate-950/20 py-2 rounded-xl border border-transparent select-none">
                    <FiLock className="w-3 h-3 text-slate-600" />
                    <span>Locked • Coming Soon</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </CompanyLayout>
  );
};

export default CoreSubjectsPrep;
