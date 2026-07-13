import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import CompanyLayout from '../components/CompanyPrep/CompanyLayout.jsx';
import CompanyTemplate from '../components/CompanyPrep/CompanyTemplate.jsx';
import { getCompanyData } from '../data/company/companyRegistry.js';

const CompanyComingSoon = ({ companyId }) => {
  // Map companyId to readable name
  const companyNames = {
    tcs: 'TCS',
    accenture: 'Accenture',
    cognizant: 'Cognizant',
    capgemini: 'Capgemini',
    wipro: 'Wipro',
    deloitte: 'Deloitte',
    ibm: 'IBM',
    oracle: 'Oracle',
    adobe: 'Adobe',
    ltimindtree: 'LTIMindtree'
  };
  const name = companyNames[companyId.toLowerCase()] || companyId.toUpperCase();

  const features = [
    'Company Roadmap',
    'Coding Questions',
    'Aptitude',
    'Interview Experience',
    'HR Questions',
    'Mock Tests'
  ];

  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-slate-950 px-4 py-16 text-center select-none w-full">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Lock Icon header */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-500 mb-2">
          <FiLock className="w-6 h-6 text-slate-450 text-slate-400" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest block">{name} Placement Track</span>
          <h2 className="text-2xl font-black text-slate-100 tracking-tight">Preparation Track Coming Soon</h2>
          <p className="text-xs text-slate-400 font-semibold">Estimated Release: August 2026</p>
        </div>

        {/* Feature List */}
        <div className="bg-slate-950/60 border border-slate-850 p-5 rounded-2xl text-left space-y-3.5">
          <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Planned Features</span>
          <div className="grid grid-cols-2 gap-3 text-xs font-bold text-slate-300">
            {features.map((feat) => (
              <div key={feat} className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-black text-[10px]">✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Back navigation button */}
        <div className="pt-2 w-full">
          <Link 
            to="/prepare/company"
            className="w-full bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-3.5 rounded-xl block text-center text-xs shadow-md transition-colors"
          >
            &larr; Back to Hiring Portals
          </Link>
        </div>
      </div>
    </div>
  );
};

const CompanyDetail = () => {
  const { companyId } = useParams();
  
  const isInfosys = companyId.toLowerCase() === 'infosys';
  
  if (!isInfosys) {
    return (
      <CompanyLayout hideLeftSidebar={true}>
        <CompanyComingSoon companyId={companyId} />
      </CompanyLayout>
    );
  }

  // Dynamic fetch company information
  const companyData = getCompanyData(companyId);

  return (
    <CompanyLayout hideLeftSidebar={true}>
      <CompanyTemplate company={companyData} />
    </CompanyLayout>
  );
};

export default CompanyDetail;
