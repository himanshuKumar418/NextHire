import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, FiCheckCircle, FiLock, FiStar, 
  FiGithub, FiLinkedin, FiCompass, FiCode, 
  FiFileText, FiAward, FiCheck, FiCpu, FiUser 
} from 'react-icons/fi';

const About = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 space-y-24 overflow-hidden relative">
      
      {/* Background glowing gradients */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* ==========================================
          SECTION 1 : HERO
          ========================================== */}
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10 py-12">
        <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          ABOUT NextHire
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-100 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-100 to-sky-400">
          One Platform.<br />Complete Placement Preparation.
        </h1>
        <p className="text-sm sm:text-base text-slate-400 font-semibold max-w-2xl mx-auto leading-relaxed">
          Practice DSA, Aptitude, Core Subjects, Interview Preparation and Company-specific Roadmaps — all in one place.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-black uppercase tracking-wider">
          <Link 
            to="/prepare" 
            className="bg-sky-500 hover:bg-sky-600 text-slate-950 px-8 py-3.5 rounded-xl flex items-center gap-2 shadow-lg transition-colors"
          >
            <span>Explore Platform</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 px-8 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
          >
            <FiGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* ==========================================
          SECTION 2 : WHY NextHire
          ========================================== */}
      <div className="max-w-6xl mx-auto space-y-10 relative z-10 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 uppercase">Why Choose NextHire?</h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left font-semibold text-xs">
          {[
            {
              title: 'DSA Practice',
              desc: 'Pattern-wise questions with structured learning.',
              color: 'group-hover:border-sky-500/20'
            },
            {
              title: 'Company Preparation',
              desc: 'Prepare according to your target company.',
              color: 'group-hover:border-purple-500/20'
            },
            {
              title: 'Core Subjects',
              desc: 'Master DBMS, OS, CN, SQL and OOP.',
              color: 'group-hover:border-emerald-500/20'
            },
            {
              title: 'Interview Preparation',
              desc: 'HR, Technical and Resume-based interviews.',
              color: 'group-hover:border-pink-500/20'
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/60 backdrop-blur-md border border-slate-850 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 shadow-xl group"
            >
              <h3 className="text-slate-100 font-extrabold text-sm tracking-tight mb-2 group-hover:text-sky-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-[11px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          SECTION 3 : PLATFORM FEATURES
          ========================================== */}
      <div className="max-w-6xl mx-auto space-y-10 relative z-10 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 uppercase">Platform Features</h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-left font-extrabold text-[11px] tracking-wide uppercase">
          {[
            '1000+ DSA Questions',
            'Company-wise Preparation',
            'Aptitude Practice',
            'Core Subject Notes',
            'Interview Preparation',
            'Progress Tracking',
            'Bookmark Questions',
            'Daily Streak',
            'Mock Assessments',
            'Study Roadmaps'
          ].map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900 border border-slate-850 p-4 rounded-xl flex items-center gap-3 transition-colors hover:border-sky-500/20"
            >
              <div className="w-6 h-6 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                <FiCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-slate-200">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          SECTION 4 : PREPARATION FLOW
          ========================================== */}
      <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 uppercase">Your Placement Journey</h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-800 max-w-sm mx-auto pl-6 space-y-8 font-black uppercase text-[10px] tracking-widest text-left">
          {[
            { title: 'Choose Target Company', desc: 'Select top companies like Infosys, TCS, or Accenture.' },
            { title: 'Practice DSA', desc: 'Solve pattern-wise dynamic programming, trees, and graph challenges.' },
            { title: 'Prepare Aptitude', desc: 'Master quant, verbal, and logical reasoning modules.' },
            { title: 'Study Core Subjects', desc: 'Revise key details on OS, DBMS, CN, and SQL queries.' },
            { title: 'Interview Preparation', desc: 'Prepare with specialized coach cards and checklists.' },
            { title: 'Mock Tests', desc: 'Assess your placement readiness under simulated environments.' },
            { title: 'Placement Ready', desc: 'Acquire your dream offer letter and step into your career.' }
          ].map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Dot indicator */}
              <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-sky-400 transition-colors flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-sky-400 transition-colors"></div>
              </div>
              <div className="space-y-0.5">
                <h4 className="text-slate-100 text-[11px] group-hover:text-sky-400 transition-colors">{step.title}</h4>
                <p className="text-slate-500 font-semibold text-[9.5px] lowercase tracking-normal leading-normal">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          SECTION 5 : WHO IS THIS FOR
          ========================================== */}
      <div className="max-w-6xl mx-auto space-y-10 relative z-10 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 uppercase">Built For</h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-extrabold text-xs uppercase tracking-wider">
          {['Students', 'Freshers', 'Campus Placements', 'Job Switchers'].map((target, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900 border border-slate-850 p-6 rounded-2xl text-center shadow-lg transition-transform hover:-translate-y-1 hover:border-slate-800"
            >
              <span className="text-slate-200">{target}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          SECTION 6 : TECH STACK
          ========================================== */}
      <div className="max-w-6xl mx-auto space-y-10 relative z-10 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 uppercase">Built Using</h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 font-black uppercase text-[10px] tracking-wider">
          {['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Java'].map((stack, idx) => (
            <span 
              key={idx} 
              className="bg-slate-900 border border-slate-850 px-5 py-2.5 rounded-xl text-slate-300 shadow-md hover:border-sky-500/20 transition-colors"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>

      {/* ==========================================
          SECTION 7 : FUTURE ROADMAP
          ========================================== */}
      <div className="max-w-6xl mx-auto space-y-10 relative z-10 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 uppercase">Coming Soon</h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 font-semibold text-xs text-left">
          {[
            'AI Resume Analyzer',
            'AI Mock Interview',
            'AI Roadmaps',
            'Leaderboard',
            'Contest Mode',
            'Company Analytics'
          ].map((roadmap, idx) => (
            <div 
              key={idx} 
              className="bg-slate-950 p-5 rounded-2xl border border-slate-850/80 flex flex-col justify-between h-[130px] opacity-60 select-none shadow-lg relative group"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-slate-200 font-extrabold tracking-tight text-[11px] leading-tight">{roadmap}</h4>
                <FiLock className="w-3.5 h-3.5 text-slate-650 text-slate-600 shrink-0" />
              </div>
              <div className="pt-2 border-t border-slate-900">
                <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest bg-slate-900 px-2 py-0.5 rounded border border-slate-850">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          SECTION 8 : DEVELOPER
          ========================================== */}
      <div className="max-w-xl mx-auto space-y-8 relative z-10 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 uppercase">Developer</h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/[0.01] rounded-full blur-2xl pointer-events-none"></div>

          <div className="space-y-2">
            <span className="text-[10px] font-black text-sky-400 tracking-wider block uppercase">Made with ❤️ by</span>
            <h3 className="text-xl font-extrabold text-slate-100">Himanshu Kumar</h3>
            <p className="text-xs text-sky-400/80 font-black tracking-widest uppercase">Final Year Computer Science Student</p>
          </div>

          <p className="text-slate-400 font-semibold text-xs leading-relaxed max-w-sm mx-auto">
            Passionate about Full Stack Development and Placement Preparation Platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 text-[10px] font-black uppercase tracking-wider">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-950 hover:bg-slate-850 text-slate-300 border border-slate-850 px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <FiGithub className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-950 hover:bg-slate-850 text-slate-350 text-sky-400 border border-sky-500/10 px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <FiLinkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-950 hover:bg-slate-850 text-slate-300 border border-slate-850 px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <FiStar className="w-3.5 h-3.5 text-amber-500" />
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 9 : FINAL QUOTE
          ========================================== */}
      <div className="max-w-3xl mx-auto text-center py-10 border-t border-slate-900 relative z-10">
        <p className="text-lg sm:text-xl font-bold italic text-slate-300 leading-relaxed">
          "Success in placements is built one problem at a time."
        </p>
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mt-3">
          — NextHire
        </span>
      </div>

    </div>
  );
};

export default About;
