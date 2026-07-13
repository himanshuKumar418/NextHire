import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiCode, FiBriefcase, FiCheckSquare, FiGitCommit } from 'react-icons/fi';

const Home = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  const targetPath = user ? '/prepare' : '/login';

  const handleNavigate = (path) => {
    if (user) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  const getPatternPath = (name) => {
    const formatted = name.toLowerCase().replace(/\s+/g, '-');
    return `/prepare/dsa/${formatted}`;
  };

  const companies = [
    {
      name: 'Infosys',
      initials: 'INF',
      description: 'Practice Coding, Aptitude and Interview Questions for Infosys placements.',
      topics: 'Arrays • Strings • OOP'
    },
    {
      name: 'TCS',
      initials: 'TCS',
      description: 'Practice Coding, Aptitude and Interview Questions for TCS placements.',
      topics: 'Aptitude • SQL • DBMS'
    },
    {
      name: 'Accenture',
      initials: 'ACN',
      description: 'Practice Coding, Aptitude and Interview Questions for Accenture placements.',
      topics: 'Arrays • OOP • English'
    },
    {
      name: 'Capgemini',
      initials: 'CAP',
      description: 'Practice Coding, Aptitude and Interview Questions for Capgemini placements.',
      topics: 'Quant • OOP • DBMS'
    },
    {
      name: 'Cognizant',
      initials: 'COG',
      description: 'Practice Coding, Aptitude and Interview Questions for Cognizant placements.',
      topics: 'Arrays • SQL • CN'
    },
    {
      name: 'Wipro',
      initials: 'WIP',
      description: 'Practice Coding, Aptitude and Interview Questions for Wipro placements.',
      topics: 'Reasoning • Java • OS'
    }
  ];

  const patterns = [
    {
      name: 'Arrays',
      description: 'Master basic and advanced array manipulation techniques.',
      questions: '30',
      companies: 'TCS • Infosys • Accenture'
    },
    {
      name: 'Strings',
      description: 'Learn string matching, regex, and formatting algorithms.',
      questions: '25',
      companies: 'Cognizant • Wipro • Infosys'
    },
    {
      name: 'Two Pointers',
      description: 'Optimize search space using left/right pointer designs.',
      questions: '20',
      companies: 'Accenture • TCS • Capgemini'
    },
    {
      name: 'Sliding Window',
      description: 'Solve subarray and substring problems efficiently.',
      questions: '15',
      companies: 'Cognizant • Wipro • TCS'
    },
    {
      name: 'Hashing',
      description: 'Use hash tables to track elements and counts in O(1) time.',
      questions: '22',
      companies: 'Infosys • Accenture • TCS'
    },
    {
      name: 'Binary Search',
      description: 'Search sorted spaces in logarithmic complexity.',
      questions: '18',
      companies: 'Capgemini • Cognizant • Wipro'
    },
    {
      name: 'Trees',
      description: 'Solve binary trees, traversal, BST, and structural queries.',
      questions: '35',
      companies: 'Infosys • TCS • Accenture'
    },
    {
      name: 'Graphs',
      description: 'Master BFS, DFS, Dijkstra, and cycle detection algorithms.',
      questions: '28',
      companies: 'Wipro • Capgemini • Cognizant'
    }
  ];

  return (
    <div className="flex-grow flex flex-col bg-slate-950">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto w-full">
          {/* Hero Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Heading, Subtitle, Description, and Buttons */}
            <div className="space-y-6 md:space-y-8 text-left">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-sky-400 tracking-tight">
                  NextHire
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 mt-3 leading-tight">
                  Prepare Smarter. Get Hired Faster.
                </h2>
              </div>
              
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                Stop switching between multiple websites. Practice Pattern-wise DSA, Company-wise Questions, Aptitude, Core Subjects and Interview Preparation from one platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to={targetPath} className="bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold px-8 py-4 rounded-xl text-center shadow-md transition-colors duration-200">
                  Start Preparing
                </Link>
                <button 
                  onClick={() => handleNavigate('/prepare/company')}
                  className="bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold px-8 py-4 rounded-xl text-center transition-colors duration-200"
                >
                  Explore Companies
                </button>
              </div>
            </div>

            {/* Right Column: Inline Student Workspace / Placement Prep SVG Illustration */}
            <div className="flex justify-center items-center">
              <svg 
                viewBox="0 0 500 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto border border-slate-800 rounded-2xl bg-slate-900 p-4 shadow-xl"
              >
                {/* Workspace Desk Surface */}
                <rect x="20" y="320" width="460" height="8" rx="4" fill="#334155" />
                
                {/* Laptop Stand / Base */}
                <rect x="130" y="300" width="240" height="20" rx="4" fill="#475569" />
                <path d="M 180 300 L 195 240 L 305 240 L 320 300 Z" fill="#64748b" />
                
                {/* Laptop Screen (Main Display) */}
                <rect x="80" y="60" width="340" height="210" rx="12" fill="#1e293b" stroke="#475569" strokeWidth="4" />
                {/* Laptop Camera */}
                <circle cx="250" cy="70" r="3" fill="#0f172a" />
                
                {/* Laptop Screen Content - IDE & Checklist */}
                {/* Header bar of editor */}
                <rect x="86" y="80" width="328" height="24" fill="#0f172a" />
                <circle cx="102" cy="92" r="4" fill="#ef4444" />
                <circle cx="114" cy="92" r="4" fill="#f59e0b" />
                <circle cx="126" cy="92" r="4" fill="#10b981" />
                <text x="250" y="96" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">placement_prep.py</text>

                {/* Code Lines on the Left side of screen */}
                <rect x="100" y="120" width="100" height="6" rx="3" fill="#a855f7" />
                <rect x="120" y="135" width="120" height="6" rx="3" fill="#38bdf8" />
                <rect x="120" y="150" width="80" height="6" rx="3" fill="#fb7185" />
                <rect x="140" y="165" width="110" height="6" rx="3" fill="#34d399" />
                <rect x="100" y="185" width="70" height="6" rx="3" fill="#f59e0b" />
                <rect x="120" y="200" width="130" height="6" rx="3" fill="#38bdf8" />
                
                {/* Placement Prep Checklist on the Right side of screen */}
                <rect x="270" y="115" width="130" height="120" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                <text x="335" y="132" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">PREP CHECKLIST</text>
                
                {/* Checkbox 1 */}
                <rect x="282" y="145" width="8" height="8" rx="2" fill="#10b981" />
                <text x="296" y="152" fill="#94a3b8" fontSize="8" fontWeight="medium">Array & Hashing</text>
                
                {/* Checkbox 2 */}
                <rect x="282" y="162" width="8" height="8" rx="2" fill="#10b981" />
                <text x="296" y="169" fill="#94a3b8" fontSize="8" fontWeight="medium">Linked List & Trees</text>
                
                {/* Checkbox 3 */}
                <rect x="282" y="179" width="8" height="8" rx="2" fill="#10b981" />
                <text x="296" y="186" fill="#94a3b8" fontSize="8" fontWeight="medium">Aptitude & Puzzles</text>
                
                {/* Checkbox 4 */}
                <rect x="282" y="196" width="8" height="8" rx="2" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                <text x="296" y="203" fill="#64748b" fontSize="8" fontWeight="medium">Mock HR Interview</text>

                {/* Resume Draft Icon / Clipboard on Left side of Desk */}
                <rect x="30" y="220" width="40" height="60" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1.5" transform="rotate(-10, 50, 250)" />
                <rect x="42" y="215" width="16" height="6" rx="1" fill="#475569" transform="rotate(-10, 50, 250)" />
                {/* Simulating text lines in Resume */}
                <line x1="38" y1="235" x2="62" y2="231" stroke="#64748b" strokeWidth="2" transform="rotate(-10, 50, 250)" />
                <line x1="38" y1="245" x2="58" y2="241" stroke="#64748b" strokeWidth="2" transform="rotate(-10, 50, 250)" />
                <line x1="38" y1="255" x2="65" y2="250" stroke="#64748b" strokeWidth="2" transform="rotate(-10, 50, 250)" />
                {/* Badge overlay on Resume (Approved / Resume Checked) */}
                <circle cx="62" cy="265" r="7" fill="#10b981" />
                <path d="M 59 265 L 61 267 L 65 263" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                {/* Coffee Mug on Right side of Desk */}
                <rect x="410" y="260" width="30" height="40" rx="4" fill="#f43f5e" />
                {/* Mug Handle */}
                <path d="M 440 270 C 448 270 448 290 440 290" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" fill="none" />
                {/* Steaming Coffee waves */}
                <path d="M 418 250 Q 421 245 418 240 T 422 230" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M 428 252 Q 431 247 428 242 T 432 232" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" fill="none" />

                {/* Placement Badge floating above workspace */}
                <g transform="translate(360, 40)">
                  <circle cx="25" cy="25" r="22" fill="#10b981" />
                  <path d="M 17 25 L 22 30 L 33 19" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <rect x="-10" y="44" width="70" height="15" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
                  <text x="25" y="54" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">PLACED</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Statistics Section Below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-24 pt-12 border-t border-slate-900">
            {/* Card 1: DSA Questions */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-sky-400">300+</div>
              <div className="text-xs md:text-sm font-medium text-slate-400 mt-2">DSA Questions</div>
            </div>
            {/* Card 2: Practice Papers */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-sky-400">50+</div>
              <div className="text-xs md:text-sm font-medium text-slate-400 mt-2">Practice Papers</div>
            </div>
            {/* Card 3: Interview Questions */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-sky-400">200+</div>
              <div className="text-xs md:text-sm font-medium text-slate-400 mt-2">Interview Questions</div>
            </div>
            {/* Card 4: Top Companies */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-sky-400">6</div>
              <div className="text-xs md:text-sm font-medium text-slate-400 mt-2">Top Companies</div>
            </div>
          </div>

          {/* Prepare for Top Companies Pill Strip */}
          <div className="border-t border-slate-900/60 py-8 mt-16 text-center">
            <div className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-6">Prepare for Top Companies</div>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              {[
                { name: 'Infosys', initials: 'I' },
                { name: 'TCS', initials: 'T' },
                { name: 'Accenture', initials: 'A' },
                { name: 'Capgemini', initials: 'CG' },
                { name: 'Cognizant', initials: 'CO' },
                { name: 'Wipro', initials: 'W' }
              ].map(company => (
                <div 
                  key={company.name}
                  className="flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500 cursor-default"
                >
                  <span className="w-6 h-6 rounded-full bg-slate-950 text-sky-400 font-extrabold flex items-center justify-center text-[10px] border border-slate-800">
                    {company.initials}
                  </span>
                  <span className="text-sm font-semibold text-slate-350 text-slate-350">{company.name}</span>
                </div>
              ))}
              
              <Link 
                to="/prepare/company"
                className="flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-300 text-sky-400"
              >
                <span className="text-sm font-semibold">+20 More Companies &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose NextHire? Section (With increased top spacing/breathing room) */}
      <div className="border-t border-slate-900 px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-40 md:pb-24 bg-slate-950">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">
              Why Choose NextHire?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Everything you need to prepare for placements in one organized platform.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Pattern-wise DSA (Compact padding & spacing) */}
            <div className="bg-slate-900 border border-slate-800 px-6 py-4 rounded-2xl flex flex-col items-start space-y-3">
              <div className="p-3 bg-slate-950 rounded-xl text-sky-400">
                <FiCode className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-200">Pattern-wise DSA</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Learn DSA topic by topic with carefully organized questions.
              </p>
            </div>

            {/* Card 2: Company-wise Preparation (Compact padding & spacing) */}
            <div className="bg-slate-900 border border-slate-800 px-6 py-4 rounded-2xl flex flex-col items-start space-y-3">
              <div className="p-3 bg-slate-950 rounded-xl text-sky-400">
                <FiBriefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-200">Company-wise Preparation</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Prepare according to Infosys, TCS, Accenture and other companies.
              </p>
            </div>

            {/* Card 3: Progress Tracking (Compact padding & spacing) */}
            <div className="bg-slate-900 border border-slate-800 px-6 py-4 rounded-2xl flex flex-col items-start space-y-3">
              <div className="p-3 bg-slate-950 rounded-xl text-sky-400">
                <FiCheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-200">Progress Tracking</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Track solved questions, revision list and preparation progress.
              </p>
            </div>

            {/* Card 4: Placement Roadmap (Compact padding & spacing) */}
            <div className="bg-slate-900 border border-slate-800 px-6 py-4 rounded-2xl flex flex-col items-start space-y-3">
              <div className="p-3 bg-slate-950 rounded-xl text-sky-400">
                <FiGitCommit className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-200">Placement Roadmap</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Get a recommended learning path based on your target company.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Companies Section */}
      <div id="companies" className="border-t border-slate-900 px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">
              Top Companies
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Choose your target company and start preparing.
            </p>
          </div>

          {/* Companies Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div 
                key={company.name} 
                className="bg-slate-900 border border-slate-800 px-5 py-4 rounded-2xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Company Name and Initials Header */}
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 text-sky-400 font-extrabold flex items-center justify-center text-xs">
                      {company.initials}
                    </div>
                    <h3 className="text-lg font-bold text-slate-200">{company.name}</h3>
                  </div>
                  
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {company.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="bg-slate-950 text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-800">
                      Coding
                    </span>
                    <span className="bg-slate-950 text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-800">
                      Aptitude
                    </span>
                    <span className="bg-slate-950 text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-800">
                      Interview
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2.5 border-t border-slate-800/60">
                  {/* Most Asked Topics */}
                  <div className="space-y-0.5">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Most Asked Topics</div>
                    <div className="text-xs font-semibold text-sky-400">{company.topics}</div>
                  </div>

                  {/* Button */}
                  <button 
                    onClick={() => handleNavigate(`/prepare/company/${company.name.toLowerCase()}`)}
                    className="w-full bg-slate-950 border border-slate-700 hover:bg-slate-850 text-sky-400 hover:text-sky-300 font-semibold py-2 rounded-xl text-xs text-center transition-colors duration-200"
                  >
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Companies Link Button */}
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => handleNavigate('/prepare/roadmaps')}
              className="bg-slate-900 border border-slate-700 hover:bg-slate-800 text-sky-400 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors duration-200 shadow-md"
            >
              View All Companies &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Pattern-wise DSA Section */}
      <div id="patterns" className="border-t border-slate-900 px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">
              Pattern-wise DSA
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Master Data Structures & Algorithms with organized learning paths.
            </p>
          </div>

          {/* Patterns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {patterns.map((pattern) => (
              <div 
                key={pattern.name} 
                className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between h-full space-y-4"
              >
                <div className="space-y-3">
                  {/* Pattern Header (Name and Qs badge) */}
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-lg font-bold text-slate-200">{pattern.name}</h3>
                    <span className="text-[10px] text-slate-400 font-semibold whitespace-nowrap bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {pattern.questions} Qs
                    </span>
                  </div>
                  
                  {/* Description (max 2 lines) */}
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[2rem]">
                    {pattern.description}
                  </p>

                  {/* Difficulty Tags */}
                  <div className="flex gap-1.5 pt-1">
                    <span className="bg-emerald-950/40 text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-emerald-900/30">
                      Easy
                    </span>
                    <span className="bg-amber-950/40 text-amber-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-amber-900/30">
                      Medium
                    </span>
                    <span className="bg-rose-950/40 text-rose-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-rose-900/30">
                      Hard
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2.5 border-t border-slate-800/60">
                  {/* Most Asked In */}
                  <div className="space-y-0.5">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Most Asked In</div>
                    <div className="text-xs font-semibold text-sky-400">{pattern.companies}</div>
                  </div>

                  {/* Button */}
                  <button 
                    onClick={() => handleNavigate(getPatternPath(pattern.name))}
                    className="w-full bg-slate-950 border border-slate-700 hover:bg-slate-850 text-sky-400 hover:text-sky-300 font-semibold py-2 rounded-xl text-xs text-center transition-colors duration-200"
                  >
                    Explore &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Patterns Link Button */}
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => handleNavigate('/prepare/dsa')}
              className="bg-slate-900 border border-slate-700 hover:bg-slate-800 text-sky-400 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors duration-200 shadow-md"
            >
              View All Patterns &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Placement Roadmap Section */}
      <div id="roadmap" className="border-t border-slate-900 px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">
              Your Placement Journey
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Follow a structured roadmap to prepare step by step.
            </p>
          </div>

          {/* Steps Flow (Vertical on mobile, horizontal on desktop) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-12 max-w-5xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 px-6 py-4 rounded-xl text-slate-200 font-bold text-center w-full md:w-auto">
              DSA
            </div>
            <div className="text-sky-400 font-bold text-xl md:block hidden">&rarr;</div>
            <div className="text-sky-400 font-bold text-xl md:hidden block">&darr;</div>

            <div className="bg-slate-900 border border-slate-800 px-6 py-4 rounded-xl text-slate-200 font-bold text-center w-full md:w-auto">
              Aptitude
            </div>
            <div className="text-sky-400 font-bold text-xl md:block hidden">&rarr;</div>
            <div className="text-sky-400 font-bold text-xl md:hidden block">&darr;</div>

            <div className="bg-slate-900 border border-slate-800 px-6 py-4 rounded-xl text-slate-200 font-bold text-center w-full md:w-auto">
              Core Subjects
            </div>
            <div className="text-sky-400 font-bold text-xl md:block hidden">&rarr;</div>
            <div className="text-sky-400 font-bold text-xl md:hidden block">&darr;</div>

            <div className="bg-slate-900 border border-slate-800 px-6 py-4 rounded-xl text-slate-200 font-bold text-center w-full md:w-auto">
              Interview Preparation
            </div>
            <div className="text-sky-400 font-bold text-xl md:block hidden">&rarr;</div>
            <div className="text-sky-400 font-bold text-xl md:hidden block">&darr;</div>

            <div className="bg-slate-900 border border-slate-800 px-6 py-4 rounded-xl text-slate-200 font-bold text-center w-full md:w-auto">
              Placement Ready
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-12">
            <Link 
              to="/prepare/roadmaps"
              className="bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm text-center shadow-md transition-colors duration-200"
            >
              Explore Roadmaps
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
