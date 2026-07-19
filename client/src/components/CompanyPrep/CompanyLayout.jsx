import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import { getCompanyProgress } from '../../data/company/companyRegistry.js';

const CompanyLayout = ({ children, hideLeftSidebar = false }) => {
  const location = useLocation();


  const companiesList = [
    { id: 'infosys', name: 'Infosys', logo: '🇮🇳', active: true, pkg: '6.25 - 21.0 LPA' },
    { id: 'tcs', name: 'TCS', logo: '🇮🇳', active: false, pkg: '3.6 - 7.0 LPA' },
    { id: 'accenture', name: 'Accenture', logo: '🇮🇳', active: false, pkg: '4.5 - 12.0 LPA' },
    { id: 'capgemini', name: 'Capgemini', logo: '🇮🇳', active: false, pkg: '4.0 - 10.0 LPA' },
    { id: 'cognizant', name: 'Cognizant', logo: '🇮🇳', active: false, pkg: '4.0 - 8.5 LPA' },
    { id: 'wipro', name: 'Wipro', logo: '🇮🇳', active: false, pkg: '3.6 - 7.5 LPA' },
    { id: 'ltimindtree', name: 'LTIMindtree', logo: '🇮🇳', active: false, pkg: '4.0 - 10.0 LPA' },
    { id: 'ibm', name: 'IBM', logo: '🇮🇳', active: false, pkg: '5.0 - 10.0 LPA' },
    { id: 'deloitte', name: 'Deloitte', logo: '🇮🇳', active: false, pkg: '7.0 - 12.0 LPA' }
  ];

  return (
    <div className="flex-grow bg-slate-950 px-2 sm:px-4 py-8 w-full text-left">
      <div className="max-w-[1700px] mx-auto flex gap-6 w-full items-start">
        
        {/* 1. Left Sidebar: Company List */}
        {!hideLeftSidebar && (
          <aside className="hidden lg:block w-64 bg-slate-900 border border-slate-800 p-4 rounded-xl sticky top-24 shrink-0 space-y-4">
            <div className="border-b border-slate-800/60 pb-2">
              <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest block">Syllabus</span>
              <h3 className="text-xs font-bold text-slate-202 text-slate-200">Company Prep</h3>
            </div>

            <nav className="space-y-1.5 text-xs font-semibold">
              {companiesList.map((comp) => {
                const isActive = location.pathname === `/prepare/company/${comp.id}`;
                const progress = comp.active ? getCompanyProgress(comp.id) : 0;

                return (
                  <div key={comp.id}>
                    {comp.active ? (
                      <Link
                        to={`/prepare/company/${comp.id}`}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 ${
                          isActive 
                            ? 'bg-sky-500/10 text-sky-400 font-extrabold border border-sky-500/10 shadow-[0_0_15px_rgba(56,189,248,0.02)]' 
                            : 'hover:bg-slate-855 hover:bg-slate-850 hover:text-slate-200 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <span className="text-sm flex-shrink-0">{comp.logo}</span>
                          <span className="truncate">{comp.name}</span>
                        </div>
                        <span className="text-[9px] text-sky-400 font-bold shrink-0">{progress}%</span>
                      </Link>
                    ) : (
                      <div className="w-full flex items-center justify-between p-2.5 rounded-xl text-slate-700 select-none cursor-not-allowed border border-transparent">
                        <div className="flex items-center space-x-2 truncate opacity-40">
                          <span className="text-sm flex-shrink-0">{comp.logo}</span>
                          <span className="truncate">{comp.name}</span>
                        </div>
                        <span className="text-[8px] font-black uppercase text-slate-750 flex items-center gap-0.5">
                          <FiLock className="w-2.5 h-2.5" />
                          SOON
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </aside>
        )}

        {/* 2. Main content view */}
        <div className="flex-grow min-w-0">
          {children}
        </div>


      </div>
    </div>
  );
};

export default CompanyLayout;
