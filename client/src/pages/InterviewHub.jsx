import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiUser, FiCpu, FiFileText, FiBriefcase, 
  FiTrendingUp, FiMessageSquare, FiCompass, FiLock, FiChevronRight 
} from 'react-icons/fi';
import CompanyLayout from '../components/CompanyPrep/CompanyLayout.jsx';

const InterviewHub = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 'hr',
      title: 'HR Interview',
      description: 'Behavioral and HR round preparation.',
      topics: ['Introduction', 'HR Basics', 'Strengths & Weaknesses', 'Salary', 'Relocation', 'Career Goals'],
      route: '/interview/hr',
      icon: FiUser,
      locked: false
    },
    {
      id: 'technical',
      title: 'Technical Interview',
      description: 'Core CS and programming interviews.',
      topics: ['Java', 'DBMS', 'SQL', 'Operating System', 'Computer Networks', 'OOP', 'DSA Discussion'],
      route: '/interview/technical',
      icon: FiCpu,
      locked: false
    },
    {
      id: 'resume',
      title: 'Resume Interview',
      description: 'Questions asked from your resume.',
      topics: ['Resume Walkthrough', 'Projects', 'Internship', 'Skills', 'Achievements', 'Certifications'],
      route: '/interview/resume',
      icon: FiFileText,
      locked: false
    },
    {
      id: 'company',
      title: 'Company Specific',
      description: 'Company-wise interview preparation.',
      topics: ['Infosys', 'TCS', 'Accenture', 'Capgemini', 'Cognizant', 'Wipro', 'IBM', 'LTIMindtree', 'Deloitte'],
      route: '/interview/company',
      icon: FiBriefcase,
      locked: false
    },
    {
      id: 'managerial',
      title: 'Managerial Interview',
      description: 'Leadership and ownership based questions.',
      topics: ['Leadership', 'Team Management', 'Decision Making', 'Conflict Resolution', 'Communication'],
      route: '/interview/managerial',
      icon: FiTrendingUp,
      locked: false
    },
    {
      id: 'gd',
      title: 'Group Discussion',
      description: 'GD topics and discussion rounds.',
      topics: ['Current Affairs', 'Abstract GD', 'Case Study', 'Tips', 'Evaluation'],
      route: '/interview/gd',
      icon: FiMessageSquare,
      locked: false
    },
    {
      id: 'experience',
      title: 'Interview Experiences',
      description: 'Real placement experiences.',
      topics: ['Infosys', 'TCS', 'Accenture', 'Capgemini', 'Cognizant', 'Wipro', 'IBM', 'LTIMindtree', 'Deloitte'],
      route: '/interview/experience',
      icon: FiCompass,
      locked: false
    },
    {
      id: 'mock',
      title: 'AI Mock Interview',
      description: 'Practice with an AI interviewer.',
      topics: ['Voice Interview', 'Confidence Score', 'Communication Score', 'Technical Score'],
      route: '/interview/mock',
      icon: FiCpu,
      locked: true
    }
  ];

  const handleCardClick = (card) => {
    if (card.locked) return;
    navigate(card.route);
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
              <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest block font-extrabold">Placement portal</span>
              <h1 className="text-3xl font-black text-slate-100 tracking-tight uppercase">INTERVIEW HUB</h1>
              <p className="text-xs sm:text-sm text-slate-400 font-semibold max-w-3xl leading-relaxed">
                Master HR, Technical and Company-specific interviews for placements.
              </p>
            </div>

            {/* Hero Stats */}
            <div className="flex flex-wrap items-center gap-3 text-[9px] font-black uppercase tracking-wider">
              <span className="bg-slate-950 border border-slate-850 px-3 py-1.5 rounded-lg text-slate-300">
                • 1200+ Interview Questions
              </span>
              <span className="bg-slate-950 border border-slate-855 border-slate-850 px-3 py-1.5 rounded-lg text-slate-300">
                • HR + Technical + Behavioral
              </span>
              <span className="bg-slate-950 border border-slate-850 px-3 py-1.5 rounded-lg text-slate-300">
                • Company Specific
              </span>
              <span className="bg-slate-950 border border-slate-850 px-3 py-1.5 rounded-lg text-slate-300">
                • Resume Based
              </span>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 2: CATEGORY GRID
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
                className={`bg-slate-900 border p-5 rounded-2xl flex flex-col justify-between h-[230px] transition-all duration-300 relative group overflow-hidden ${
                  card.locked 
                    ? 'border-slate-850 opacity-60 cursor-not-allowed' 
                    : 'border-slate-800 hover:border-sky-500/20 hover:shadow-[0_4px_25px_rgba(56,189,248,0.03)] hover:-translate-y-1 cursor-pointer'
                }`}
              >
                {!card.locked && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/[0.01] rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/[0.04] transition-all duration-300"></div>
                )}

                <div className="space-y-3">
                  {/* Icon & Lock Badge */}
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 bg-slate-950 rounded-xl border border-slate-850 flex items-center justify-center text-slate-400 group-hover:text-sky-400 group-hover:border-sky-500/20 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {card.locked ? (
                      <span className="text-[8px] font-black text-slate-650 text-slate-600 bg-slate-950 px-2 py-0.5 rounded border border-slate-850 uppercase tracking-wider flex items-center gap-1">
                        <FiLock className="w-2.5 h-2.5" />
                        Locked
                      </span>
                    ) : (
                      <span className="text-[8.5px] font-black text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 uppercase tracking-wider">
                        Active
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1 text-left">
                    <h3 className="text-slate-100 font-extrabold text-sm tracking-tight">{card.title}</h3>
                    <p className="text-[10.5px] text-slate-400 font-semibold leading-relaxed">{card.description}</p>
                  </div>
                </div>

                {/* Topics & Explore Button */}
                <div className="space-y-3 pt-3 border-t border-slate-850/60">
                  <div className="flex flex-wrap gap-1.5 max-h-[36px] overflow-hidden">
                    {card.topics.map((top, idx) => (
                      <span 
                        key={idx} 
                        className="text-[9px] font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-850"
                      >
                        {top}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-[10px] pt-1">
                    <span className="text-slate-500 font-semibold">Status: {!card.locked ? 'Available' : 'Coming soon'}</span>
                    
                    {!card.locked ? (
                      <span className="text-sky-400 font-black flex items-center gap-1 group-hover:translate-x-0.5 transition-transform uppercase tracking-wider">
                        <span>Explore</span>
                        <FiChevronRight className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span className="text-slate-650 text-slate-600 font-black flex items-center gap-1 uppercase tracking-wider select-none">
                        <FiLock className="w-3 h-3" />
                        <span>Locked</span>
                      </span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ==========================================
            SECTION 3: PREMIUM UNLOCK BANNER
            ========================================== */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">AI Mock Assessment Unlock</h4>
              <p className="text-[11px] text-slate-400 font-semibold mt-0.5">
                Complete all interview modules to unlock the AI Mock Interview.
              </p>
            </div>
            
            {/* Progress bar */}
            <div className="w-full md:max-w-xs space-y-2 shrink-0">
              <div className="flex justify-between items-center text-[10px] font-bold">
                <span className="text-slate-500 uppercase tracking-wider">Modules Cleared</span>
                <span className="text-sky-400 flex items-center gap-1">
                  <span className="font-mono">████░░░░░░</span>
                  <span>45%</span>
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850 p-0.5">
                <div 
                  className="bg-sky-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: '45%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </CompanyLayout>
  );
};

export default InterviewHub;
