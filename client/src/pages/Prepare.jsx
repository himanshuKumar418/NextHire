import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiBriefcase, FiCompass, FiLayers, FiBookOpen, FiHelpCircle } from 'react-icons/fi';

const Prepare = () => {
  const modules = [
    {
      name: 'DSA Patterns',
      description: 'Practice DSA topic by topic.',
      path: '/prepare/dsa',
      icon: FiCode
    },
    {
      name: 'Company Preparation',
      description: 'Prepare according to your target company.',
      path: '/prepare/company',
      icon: FiBriefcase
    },
    {
      name: 'Aptitude',
      description: 'Quantitative, Reasoning and English.',
      path: '/prepare/aptitude',
      icon: FiLayers
    },
    {
      name: 'Core Subjects',
      description: 'DBMS, OS, CN, OOP and SQL.',
      path: '/prepare/core-subjects',
      icon: FiBookOpen
    },
    {
      name: 'Interview Questions',
      description: 'HR + Technical + Company Specific.',
      path: '/prepare/interview',
      icon: FiHelpCircle
    },
    {
      name: 'Study Roadmaps',
      description: 'Follow company-specific preparation paths.',
      path: '/prepare/roadmaps',
      icon: FiCompass,
      badge: 'NEW'
    }
  ];

  return (
    <div className="flex-grow bg-slate-950 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">
            Preparation Hub
          </h1>
          <h2 className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
            Everything you need to prepare for placements in one organized platform.
          </h2>
        </div>

        {/* Modules Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <div 
                key={module.name} 
                className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between h-full space-y-6"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center text-sky-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Title & Badge */}
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-200">{module.name}</h3>
                    {module.badge && (
                      <span className="bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[9px] font-bold px-1.5 py-0.5 rounded">
                        {module.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {module.description}
                  </p>
                </div>
                
                {/* Action Link Button */}
                <Link 
                  to={module.path} 
                  className="w-full bg-slate-950 border border-slate-700 hover:bg-slate-850 text-sky-400 hover:text-sky-300 font-semibold py-2.5 rounded-xl text-sm text-center block transition-colors duration-200"
                >
                  Explore
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Prepare;
