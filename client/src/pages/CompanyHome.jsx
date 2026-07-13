import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiLock } from 'react-icons/fi';
import CompanyLayout from '../components/CompanyPrep/CompanyLayout.jsx';
import { getCompanyProgress } from '../data/company/companyRegistry.js';

const CompanyHome = () => {
  const companies = [
    { id: 'infosys', name: 'Infosys', logo: '🇮🇳', active: true, difficulty: 4, pkgMin: '6.25 LPA', pkgMax: '21 LPA', description: 'Prepare for SE, DSE, and SP profiles.' },
    { id: 'tcs', name: 'TCS', logo: '🇮🇳', active: false, difficulty: 3, pkgMin: '3.6 LPA', pkgMax: '7.0 LPA', description: 'Prepare for Ninja, Digital, and Prime paths.' },
    { id: 'accenture', name: 'Accenture', logo: '🇮🇳', active: false, difficulty: 3, pkgMin: '4.5 LPA', pkgMax: '12 LPA', description: 'Prepare for ASE and FSE engineering profiles.' },
    { id: 'capgemini', name: 'Capgemini', logo: '🇮🇳', active: false, difficulty: 3, pkgMin: '4.0 LPA', pkgMax: '10 LPA', description: 'Prepare for Analyst and Senior Analyst tracks.' },
    { id: 'cognizant', name: 'Cognizant', logo: '🇮🇳', active: false, difficulty: 3, pkgMin: '4.0 LPA', pkgMax: '8.5 LPA', description: 'Prepare for GenC, GenC Elevate, and GenC Pro.' },
    { id: 'wipro', name: 'Wipro', logo: '🇮🇳', active: false, difficulty: 3, pkgMin: '3.6 LPA', pkgMax: '7.5 LPA', description: 'Prepare for Elite and Turbo preparation paths.' },
    { id: 'ltimindtree', name: 'LTIMindtree', logo: '🇮🇳', active: false, difficulty: 3, pkgMin: '4.0 LPA', pkgMax: '10 LPA', description: 'Prepare for Graduate Engineer Trainee tests.' },
    { id: 'deloitte', name: 'Deloitte', logo: '🇮🇳', active: false, difficulty: 4, pkgMin: '6.0 LPA', pkgMax: '10 LPA', description: 'Prepare for Associate Analyst and Consultant tests.' },
    { id: 'ibm', name: 'IBM', logo: '🇮🇳', active: false, difficulty: 4, pkgMin: '7.0 LPA', pkgMax: '12 LPA', description: 'Prepare for Associate System Engineer tests.' },
    { id: 'oracle', name: 'Oracle', logo: '🇮🇳', active: false, difficulty: 5, pkgMin: '10.0 LPA', pkgMax: '18.0 LPA', description: 'Prepare for Member of Technical Staff profiles.' },
    { id: 'adobe', name: 'Adobe', logo: '🇮🇳', active: false, difficulty: 5, pkgMin: '18.0 LPA', pkgMax: '30.0 LPA', description: 'Prepare for Member of Technical Staff 1 and 2.' }
  ];

  const [xpUpdate, setXpUpdate] = useState(0);

  useEffect(() => {
    const handleSync = () => setXpUpdate((p) => p + 1);
    window.addEventListener('company-xp-changed', handleSync);
    return () => window.removeEventListener('company-xp-changed', handleSync);
  }, []);

  return (
    <CompanyLayout>
      <div className="space-y-8 text-left">
        
        {/* Header Hero Banner */}
        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-2 relative z-10">
            <span className="text-xs font-black text-sky-400 uppercase tracking-widest block">Preparation Roadmap</span>
            <h1 className="text-3xl font-black text-slate-100 tracking-tight">
              Company Specific Preparation
            </h1>
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed font-semibold">
              Practise standard tests, coding queries, and technical interview questionnaires tailored for major service and product hiring structures.
            </p>
          </div>
        </div>

        {/* Company Deck Grid */}
        <div className="space-y-4">
          <div className="border-b border-slate-900 pb-2">
            <h2 className="text-lg font-black text-slate-200 uppercase tracking-wider">Hiring Portals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companies.map((comp) => {
              const progress = comp.active ? getCompanyProgress(comp.id) : 0;

              return (
                <div 
                  key={comp.id}
                  className={`bg-slate-900 border p-6 rounded-2xl flex flex-col justify-between space-y-5 hover:-translate-y-1 transition-all duration-300 group ${
                    comp.active ? 'border-slate-800 hover:border-sky-500/20' : 'border-slate-900 opacity-60'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-2.5">
                        <span className="text-2xl">{comp.logo}</span>
                        <h3 className="text-lg font-black text-slate-200 group-hover:text-sky-400 transition-colors">
                          {comp.name}
                        </h3>
                      </div>
                      
                      {comp.active ? (
                        <span className="text-[9px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          ACTIVE
                        </span>
                      ) : (
                        <span className="flex items-center gap-0.5 text-[9px] font-black text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-850">
                          <FiLock className="w-2.5 h-2.5" />
                          COMING SOON
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-450 text-slate-400 leading-normal font-semibold">
                      {comp.description}
                    </p>

                    {/* Package details */}
                    <div className="grid grid-cols-2 gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-850 text-[10px] font-bold">
                      <div>
                        <span className="text-slate-500 block uppercase tracking-wider text-[8px]">Averge Package</span>
                        <span className="text-slate-200">{comp.pkgMin} - {comp.pkgMax}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block uppercase tracking-wider text-[8px]">Hiring Difficulty</span>
                        <div className="flex items-center space-x-0.5 text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i}>{i < comp.difficulty ? '★' : '☆'}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions / progress bars */}
                  <div className="space-y-3.5">
                    {comp.active && (
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-[9px] font-bold text-slate-400">
                          <span>Prep Progress</span>
                          <span>{progress}%</span>
                        </div>
                        <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                          <div className="bg-sky-500 h-full rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                      </div>
                    )}

                    {comp.active ? (
                      <Link
                        to={`/prepare/company/${comp.id}`}
                        className="w-full bg-slate-950 hover:bg-slate-850 text-sky-400 font-bold py-2.5 rounded-xl text-xs text-center flex items-center justify-center gap-1 border border-slate-800 transition-colors"
                      >
                        <span>Start Preparation</span>
                        <FiArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <Link
                        to={`/prepare/company/${comp.id}`}
                        className="w-full bg-slate-950 hover:bg-slate-850 text-slate-400 font-bold py-2.5 rounded-xl text-xs text-center flex items-center justify-center gap-1 border border-slate-850 transition-colors"
                      >
                        <FiLock className="w-3.5 h-3.5 text-slate-500" />
                        <span>Syllabus Coming Soon</span>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </CompanyLayout>
  );
};

export default CompanyHome;
