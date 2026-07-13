import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-extrabold text-sky-400 tracking-wider">
              NextHire
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              One Platform for Complete Placement Preparation. Master DSA, Aptitude, Core Subjects, and Interviews step-by-step.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/prepare" className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200">
                  Prepare
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Authentication */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Authentication</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/login" className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Connect</h3>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@nexthire.com" 
                  className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom copyright and technology stack */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-slate-500">
            &copy; 2026 NextHire. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built using React, Node.js, Express.js and MongoDB.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
