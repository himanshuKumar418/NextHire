import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = ({ title }) => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-slate-950 px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">{title}</h1>
        <p className="text-slate-400 leading-relaxed">
          This placement preparation module is under active development.
        </p>
        <div className="inline-block bg-slate-900 border border-slate-800 text-slate-500 font-bold px-6 py-3 rounded-2xl text-xl tracking-wider uppercase">
          Coming Soon
        </div>
        <div className="pt-8">
          <Link 
            to="/prepare" 
            className="bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold px-8 py-3.5 rounded-xl inline-block shadow-md"
          >
            &larr; Back to Prepare Hub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
