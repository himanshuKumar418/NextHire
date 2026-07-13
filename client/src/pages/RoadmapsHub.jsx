import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLock, FiChevronRight } from 'react-icons/fi';
import CompanyLayout from '../components/CompanyPrep/CompanyLayout.jsx';
import { useDashboard } from '../context/DashboardContext.jsx';

const RoadmapsHub = () => {
  const navigate = useNavigate();
  const { displayReadiness: overallPrep } = useDashboard();

  const companies = [
    {
      id: 'infosys',
      name: 'Infosys',
      logo: '🇮🇳',
      packageRange: '6 - 16 LPA',
      difficulty: 'Easy',
      status: 'Active',
      route: '/roadmaps/infosys',
      locked: false
    },
    {
      id: 'tcs',
      name: 'TCS',
      logo: '🇮🇳',
      packageRange: '3.5 - 9 LPA',
      difficulty: 'Easy',
      status: 'Active',
      route: '/roadmaps/tcs',
      locked: false
    },
    {
      id: 'accenture',
      name: 'Accenture',
      logo: '🇮🇳',
      packageRange: '4.5 - 12 LPA',
      difficulty: 'Medium',
      status: 'Active',
      route: '/roadmaps/accenture',
      locked: false
    },
    {
      id: 'capgemini',
      name: 'Capgemini',
      logo: '🇮🇳',
      packageRange: '4 - 8 LPA',
      difficulty: 'Easy',
      status: 'Active',
      route: '/roadmaps/capgemini',
      locked: false
    },
    {
      id: 'cognizant',
      name: 'Cognizant',
      logo: '🇮🇳',
      packageRange: '4 - 12 LPA',
      difficulty: 'Medium',
      status: 'Active',
      route: '/roadmaps/cognizant',
      locked: false
    },
    {
      id: 'wipro',
      name: 'Wipro',
      logo: '🇮🇳',
      packageRange: '3.5 - 10 LPA',
      difficulty: 'Easy',
      status: 'Active',
      route: '/roadmaps/wipro',
      locked: false
    },
    {
      id: 'deloitte',
      name: 'Deloitte',
      logo: '🇮🇳',
      packageRange: '7 - 12 LPA',
      difficulty: 'Medium',
      status: 'Active',
      route: '/roadmaps/deloitte',
      locked: false
    },
    {
      id: 'ibm',
      name: 'IBM',
      logo: '🇮🇳',
      packageRange: '5 - 10 LPA',
      difficulty: 'Medium',
      status: 'Active',
      route: '/roadmaps/ibm',
      locked: false
    },
    {
      id: 'ltimindtree',
      name: 'LTIMindtree',
      logo: '🇮🇳',
      packageRange: '4.5 - 10 LPA',
      difficulty: 'Medium',
      status: 'Active',
      route: '/roadmaps/ltimindtree',
      locked: false
    },
    {
      id: 'oracle',
      name: 'Oracle',
      logo: '🇮🇳',
      packageRange: '10 - 18 LPA',
      difficulty: 'Hard',
      status: 'Coming Soon',
      route: '/roadmaps/oracle',
      locked: true
    },
    {
      id: 'adobe',
      name: 'Adobe',
      logo: '🇮🇳',
      packageRange: '18 - 30 LPA',
      difficulty: 'Hard',
      status: 'Coming Soon',
      route: '/roadmaps/adobe',
      locked: true
    }
  ];

  const handleCardClick = (comp) => {
    if (comp.locked) return;
    navigate(comp.route);
  };

  return (
    <CompanyLayout hideLeftSidebar={true}>
      <div className="space-y-6 text-left pb-12 text-xs">
        
        {/* ==========================================
            SECTION 1: HERO
            ========================================== */}
        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest block font-extrabold">PLACEMENT ROADMAPS</span>
              <h1 className="text-3xl font-black text-slate-100 tracking-tight uppercase">STUDY ROADMAPS</h1>
              <p className="text-xs sm:text-sm text-slate-400 font-semibold max-w-3xl leading-relaxed">
                Follow structured company-wise preparation paths designed for campus placements.
              </p>
            </div>

            {/* Overall Progress */}
            <div className="space-y-2 max-w-xl">
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-400">Overall Preparation</span>
                <span className="text-sky-400 flex items-center gap-1">
                  <span className="font-mono">
                    {(() => {
                      const filled = Math.max(0, Math.min(10, Math.round(overallPrep / 10)));
                      return '█'.repeat(filled) + '░'.repeat(Math.max(0, 10 - filled));
                    })()}
                  </span>
                  <span>{overallPrep}%</span>
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-850 p-0.5">
                <div 
                  className="bg-sky-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${overallPrep}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 2: Target Companies Title
            ========================================== */}
        <div className="border-b border-slate-800/60 pb-2">
          <h3 className="text-base font-extrabold text-slate-100 uppercase tracking-tight">Choose Your Target Company</h3>
          <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Select a company to access a dedicated preparation roadmap.</p>
        </div>

        {/* 10 Grid Cards (5 columns desktop, 3 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {companies.map((comp) => {
            return (
              <div
                key={comp.id}
                onClick={() => handleCardClick(comp)}
                className={`bg-slate-900 border p-5 rounded-2xl flex flex-col justify-between h-[210px] transition-all duration-300 relative group overflow-hidden ${
                  comp.locked 
                    ? 'border-slate-850 opacity-60 cursor-not-allowed select-none' 
                    : 'border-slate-800 hover:border-sky-500/20 hover:shadow-[0_4px_25px_rgba(56,189,248,0.03)] hover:-translate-y-1 cursor-pointer'
                }`}
              >
                {!comp.locked && (
                  <div className="absolute top-0 right-0 w-20 h-20 bg-sky-500/[0.01] rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/[0.04] transition-all duration-300"></div>
                )}

                <div className="space-y-3.5 text-left">
                  {/* Logo/Icon & Locked Badge */}
                  <div className="flex justify-between items-center">
                    <span className="text-2xl">{comp.logo}</span>
                    {comp.locked ? (
                      <span className="text-[8px] font-black text-slate-650 text-slate-650 text-slate-600 bg-slate-950 px-2 py-0.5 rounded border border-slate-850 uppercase tracking-wider flex items-center gap-1">
                        <FiLock className="w-2.5 h-2.5" />
                        Locked
                      </span>
                    ) : (
                      <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${
                        comp.difficulty === 'Easy' 
                          ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
                          : 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                      }`}>
                        {comp.difficulty}
                      </span>
                    )}
                  </div>

                  {/* Company Name & Package */}
                  <div className="space-y-1">
                    <h4 className="text-slate-100 font-extrabold text-sm tracking-tight">{comp.name}</h4>
                    <p className="text-[10px] text-slate-400 font-bold">Package: {comp.packageRange}</p>
                  </div>
                </div>

                {/* Status & Explore Trigger */}
                <div className="space-y-2 pt-3 border-t border-slate-850/60">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-500 font-semibold">{comp.status}</span>
                    
                    {!comp.locked ? (
                      <span className="text-sky-400 font-black flex items-center gap-1 group-hover:translate-x-0.5 transition-transform uppercase tracking-wider">
                        <span>Explore</span>
                        <FiChevronRight className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span className="text-slate-600 font-black flex items-center gap-1 uppercase tracking-wider">
                        <FiLock className="w-3 h-3 text-slate-600" />
                        <span>Locked</span>
                      </span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </CompanyLayout>
  );
};

export default RoadmapsHub;
