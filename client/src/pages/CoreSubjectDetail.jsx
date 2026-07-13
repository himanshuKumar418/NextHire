import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCornerUpLeft } from 'react-icons/fi';
import CompanyLayout from '../components/CompanyPrep/CompanyLayout.jsx';

const subjectNames = {
  dbms: 'Database Management System',
  os: 'Operating System',
  cn: 'Computer Networks',
  oops: 'Object-Oriented Programming',
  sql: 'Structured Query Language (SQL)'
};

const CoreSubjectDetail = () => {
  const { subjectId } = useParams();

  const title = subjectNames[subjectId] || 'Core Subject';

  return (
    <CompanyLayout hideLeftSidebar={true}>
      <div className="flex-grow flex flex-col items-center justify-center bg-slate-950 px-4 py-24 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">{title}</h1>
          
          <div className="inline-block bg-slate-900 border border-slate-800 text-slate-400 font-bold px-6 py-3 rounded-2xl text-lg tracking-wider uppercase">
            🚧 Coming Soon
          </div>

          <p className="text-slate-400 leading-relaxed text-sm">
            The complete {title} interview preparation module is currently under development.
          </p>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-3.5 max-w-sm mx-auto shadow-xl">
            <h4 className="text-xs font-black text-sky-400 uppercase tracking-widest border-b border-slate-800 pb-2">Features Coming Soon</h4>
            <ul className="text-xs font-semibold text-slate-400 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Complete Theory
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Interview Questions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Notes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Cheat Sheets
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Revision
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Practice Questions
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <Link 
              to="/prepare/core-subjects" 
              className="bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-sky-400 font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-md border border-slate-800 transition-colors text-xs uppercase tracking-wider"
            >
              <FiCornerUpLeft className="w-4 h-4" />
              <span>Back to Core Subjects</span>
            </Link>
          </div>
        </div>
      </div>
    </CompanyLayout>
  );
};

export default CoreSubjectDetail;
