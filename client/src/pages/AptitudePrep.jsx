import React, { useState } from 'react';
import { 
  FiTrendingUp, FiCpu, FiMessageSquare, FiLayers, 
  FiPieChart, FiCode, FiChevronRight, FiChevronDown, FiChevronUp,
  FiClock, FiBookOpen, FiAward, FiLock, FiUnlock
} from 'react-icons/fi';
import CompanyLayout from '../components/CompanyPrep/CompanyLayout.jsx';

const AptitudePrep = () => {
  const [activeCardId, setActiveCardId] = useState('quant'); // default quantitative expanded

  const categories = [
    {
      id: 'quant',
      title: 'Quantitative Aptitude',
      icon: FiTrendingUp,
      topicCount: '4 Main Subjects (28 Topics)',
      questionCount: '1,200+ Questions',
      color: 'border-sky-500/10 shadow-sky-500/2'
    },
    {
      id: 'logical',
      title: 'Logical Reasoning',
      icon: FiCpu,
      topicCount: '11 Categories',
      questionCount: '800+ Questions',
      color: 'border-purple-500/10 shadow-purple-500/2'
    },
    {
      id: 'verbal',
      title: 'Verbal Ability',
      icon: FiMessageSquare,
      topicCount: '12 Categories',
      questionCount: '950+ Questions',
      color: 'border-emerald-500/10 shadow-emerald-500/2'
    },
    {
      id: 'nonverbal',
      title: 'Non-Verbal Reasoning',
      icon: FiLayers,
      topicCount: '7 Categories',
      questionCount: '500+ Questions',
      color: 'border-pink-500/10 shadow-pink-500/2'
    },
    {
      id: 'di',
      title: 'Data Interpretation',
      icon: FiPieChart,
      topicCount: '6 Categories',
      questionCount: '600+ Questions',
      color: 'border-amber-500/10 shadow-amber-500/2'
    },
    {
      id: 'pseudocode',
      title: 'Pseudo Code',
      icon: FiCode,
      topicCount: '6 Categories',
      questionCount: '400+ Questions',
      color: 'border-violet-500/10 shadow-violet-500/2'
    }
  ];

  const syllabus = {
    quant: {
      title: 'Quantitative Aptitude',
      desc: 'Master arithmetic equations, formula derivations, geometry models, and modern math theories.',
      subcategories: [
        {
          name: 'Arithmetic',
          topics: [
            'Percentage', 'Profit & Loss', 'Ratio & Proportion', 'Average',
            'Time & Work', 'Time Speed Distance', 'Boats & Streams', 'Pipes & Cistern',
            'SI & CI', 'Mixture & Allegation', 'Partnership', 'Ages',
            'Problems on Numbers', 'LCM & HCF', 'Simplification', 'Approximation'
          ]
        },
        {
          name: 'Algebra',
          topics: ['Quadratic Equations', 'Linear Equations', 'Progression (AP/GP)', 'Logarithms']
        },
        {
          name: 'Geometry',
          topics: ['Triangles & Circles', 'Polygons & Angles', 'Mensuration 2D & 3D', 'Coordinate Geometry']
        },
        {
          name: 'Modern Maths',
          topics: ['Permutation & Combination', 'Probability Theory', 'Set Theory', 'Sequence & Series']
        }
      ]
    },
    logical: {
      title: 'Logical Reasoning',
      desc: 'Formulate analytical deductions, diagrammatic layouts, and relationship connections.',
      topics: [
        'Blood Relation', 'Direction Sense', 'Coding Decoding', 'Seating Arrangement',
        'Puzzle Solvers', 'Ranking & Order', 'Syllogism Rules', 'Statement & Conclusion',
        'Statement & Assumption', 'Cause & Effect', 'Input Output Tracing'
      ]
    },
    verbal: {
      title: 'Verbal Ability',
      desc: 'Refine syntax structures, reading comprehension pacing, and spelling rules.',
      topics: [
        'Reading Comprehension', 'Error Detection', 'Sentence Improvement', 'Fill in the Blanks',
        'Para Jumbles', 'Synonyms', 'Antonyms', 'Vocabulary Builders',
        'Idioms & Phrases', 'One Word Substitution', 'Active & Passive Voice', 'Direct & Indirect Speech'
      ]
    },
    nonverbal: {
      title: 'Non-Verbal Reasoning',
      desc: 'Develop spatial visualization, pattern completions, and diagram rotations.',
      topics: [
        'Mirror Image', 'Water Image', 'Paper Folding', 'Embedded Figure',
        'Cube Cuts', 'Dice Standard/Custom', 'Pattern Completion'
      ]
    },
    di: {
      title: 'Data Interpretation',
      desc: 'Analyze statistical matrices, chart proportions, and caselet reading.',
      topics: [
        'Table Matrices', 'Bar Graphs', 'Pie Charts', 'Line Graphs',
        'Mixed Graph Integration', 'Caselet DI Passages'
      ]
    },
    pseudocode: {
      title: 'Pseudo Code',
      desc: 'Trace execution flows, conditional iterations, and code output outcomes.',
      topics: [
        'Loops & Nesting', 'Arrays Indexing', 'Strings & Parsing', 'Functions & Callstacks',
        'Recursion Trees', 'Output Prediction Cases'
      ]
    }
  };

  const categoryMocks = {
    quant: [
      {
        title: 'Quant Mock 1',
        subtitle: 'Arithmetic Core',
        duration: '30 mins',
        questions: '20',
        includes: ['• Percentages & Averages', '• Profit & Loss', '• Ratio & Proportion'],
        difficulty: 'Easy',
        reward: '50 XP',
        locked: false,
        unlock: 'Status: Unlocked (Start Test)'
      },
      {
        title: 'Quant Mock 2',
        subtitle: 'Algebra & Geometry',
        duration: '45 mins',
        questions: '30',
        includes: ['• Linear & Quadratics', '• Mensuration & Triangles'],
        difficulty: 'Medium',
        reward: '100 XP',
        locked: true,
        unlock: 'Unlock Requirement: Complete Mock 1'
      },
      {
        title: 'Quant Mock 3',
        subtitle: 'Modern Math Basics',
        duration: '45 mins',
        questions: '30',
        includes: ['• Probability Theory', '• Permutations & Comb.'],
        difficulty: 'Medium',
        reward: '150 XP',
        locked: true,
        unlock: 'Unlock Requirement: Complete Mock 2'
      },
      {
        title: 'Quant Final Mock',
        subtitle: 'Grand Quant OA',
        duration: '60 mins',
        questions: '40',
        includes: ['• Complete Quantitative Syllabus'],
        difficulty: 'Hard',
        reward: '250 XP',
        locked: true,
        unlock: 'Unlock Requirement: Complete Mock 3'
      }
    ],
    logical: [
      {
        title: 'Logical Mock 1',
        subtitle: 'Deductions & Directions',
        duration: '30 mins',
        questions: '20',
        includes: ['• Direction Sense', '• Blood Relations'],
        difficulty: 'Easy',
        reward: '50 XP',
        locked: false,
        unlock: 'Status: Unlocked (Start Test)'
      },
      {
        title: 'Logical Mock 2',
        subtitle: 'Arrangements & Toggles',
        duration: '30 mins',
        questions: '20',
        includes: ['• Seating Arrangements', '• Input Output Tracing'],
        difficulty: 'Medium',
        reward: '100 XP',
        locked: true,
        unlock: 'Unlock Requirement: Complete Mock 1'
      },
      {
        title: 'Logical Final Mock',
        subtitle: 'Logical Grand OA',
        duration: '45 mins',
        questions: '30',
        includes: ['• Comprehensive Logical Reasoning'],
        difficulty: 'Hard',
        reward: '200 XP',
        locked: true,
        unlock: 'Unlock Requirement: Complete Mock 2'
      }
    ],
    verbal: [
      {
        title: 'Verbal Mock 1',
        subtitle: 'Grammar & Editing',
        duration: '20 mins',
        questions: '15',
        includes: ['• Error Detection', '• Fill in the Blanks'],
        difficulty: 'Easy',
        reward: '40 XP',
        locked: false,
        unlock: 'Status: Unlocked (Start Test)'
      },
      {
        title: 'Verbal Mock 2',
        subtitle: 'Comprehension & Jumbles',
        duration: '30 mins',
        questions: '25',
        includes: ['• Reading Comprehension', '• Para Jumbles'],
        difficulty: 'Medium',
        reward: '80 XP',
        locked: true,
        unlock: 'Unlock Requirement: Complete Mock 1'
      },
      {
        title: 'Verbal Final Mock',
        subtitle: 'Verbal Grand OA',
        duration: '40 mins',
        questions: '35',
        includes: ['• Comprehensive Verbal syllabus'],
        difficulty: 'Hard',
        reward: '150 XP',
        locked: true,
        unlock: 'Unlock Requirement: Complete Mock 2'
      }
    ],
    nonverbal: [
      {
        title: 'Non-Verbal Mock 1',
        subtitle: 'Spatial Visualizer',
        duration: '20 mins',
        questions: '15',
        includes: ['• Mirror & Water Images', '• Paper Folding'],
        difficulty: 'Easy',
        reward: '40 XP',
        locked: false,
        unlock: 'Status: Unlocked (Start Test)'
      },
      {
        title: 'Non-Verbal Final Mock',
        subtitle: 'Patterns Grand OA',
        duration: '30 mins',
        questions: '25',
        includes: ['• Embedded Figures', '• Cubes & Dice Patterns'],
        difficulty: 'Medium',
        reward: '100 XP',
        locked: true,
        unlock: 'Unlock Requirement: Complete Mock 1'
      }
    ],
    di: [
      {
        title: 'DI Mock 1',
        subtitle: 'Chart Interpretations',
        duration: '30 mins',
        questions: '20',
        includes: ['• Tables & Bar Graphs', '• Pie Charts'],
        difficulty: 'Easy',
        reward: '50 XP',
        locked: false,
        unlock: 'Status: Unlocked (Start Test)'
      },
      {
        title: 'DI Final Mock',
        subtitle: 'DI Grand OA',
        duration: '45 mins',
        questions: '30',
        includes: ['• Caselet DI', '• Mixed Charts & Graphs'],
        difficulty: 'Medium',
        reward: '120 XP',
        locked: true,
        unlock: 'Unlock Requirement: Complete Mock 1'
      }
    ],
    pseudocode: [
      {
        title: 'Pseudo Mock 1',
        subtitle: 'Algorithm Flows',
        duration: '25 mins',
        questions: '15',
        includes: ['• Loops & Array Tracing', '• Basic Strings'],
        difficulty: 'Easy',
        reward: '50 XP',
        locked: false,
        unlock: 'Status: Unlocked (Start Test)'
      },
      {
        title: 'Pseudo Final Mock',
        subtitle: 'Pseudo Code Grand OA',
        duration: '40 mins',
        questions: '25',
        includes: ['• Recursive trees', '• Output Predictions'],
        difficulty: 'Medium',
        reward: '120 XP',
        locked: true,
        unlock: 'Unlock Requirement: Complete Mock 1'
      }
    ]
  };

  const overallMocks = [
    {
      id: 'om_1',
      title: 'Mock Test 1',
      subtitle: 'Aptitude Primer',
      duration: '45 mins',
      questions: '30',
      includes: ['• Quantitative Aptitude', '• Logical Reasoning', '• Verbal Ability'],
      difficulty: 'Easy',
      reward: '100 XP',
      locked: false,
      unlock: 'Status: Unlocked (Start Test)',
      buttonText: 'Start Test'
    },
    {
      id: 'om_2',
      title: 'Mock Test 2',
      subtitle: 'Placement Simulation',
      duration: '60 mins',
      questions: '40',
      includes: ['• Quantitative', '• Logical', '• Verbal', '• Non-Verbal'],
      difficulty: 'Medium',
      reward: '200 XP',
      locked: true,
      unlock: 'Unlock after Mock Test 1',
      buttonText: '🔒 Locked'
    },
    {
      id: 'om_3',
      title: 'Mock Test 3',
      subtitle: 'Analytical Challenge',
      duration: '75 mins',
      questions: '50',
      includes: ['• Quant + Logical + Verbal', '• Non-Verbal Reasoning', '• Data Interpretation'],
      difficulty: 'Medium',
      reward: '350 XP',
      locked: true,
      unlock: 'Unlock after Mock Test 2',
      buttonText: '🔒 Locked'
    },
    {
      id: 'om_4',
      title: 'Mock Test 4',
      subtitle: 'Advanced Mock OA',
      duration: '90 mins',
      questions: '60',
      includes: ['• Comprehensive Sections', '• Includes Pseudo Code'],
      difficulty: 'Hard',
      reward: '500 XP',
      locked: true,
      unlock: 'Unlock after Mock Test 3',
      buttonText: '🔒 Locked'
    },
    {
      id: 'om_5',
      title: 'Final Aptitude Challenge',
      subtitle: 'Grand Simulator',
      duration: '120 mins',
      questions: '90',
      includes: ['• Complete Aptitude OA', '• Full Core Evaluations'],
      difficulty: 'Expert',
      reward: '1000 XP',
      locked: true,
      unlock: 'Unlock after Mock Test 4',
      buttonText: '🔒 Locked'
    }
  ];

  const handleCardClick = (id) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <CompanyLayout hideLeftSidebar={true}>
      <div className="space-y-6 text-left pb-12">
        
        {/* Hero Section */}
        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-2 relative z-10">
            <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest block">Placement Hub</span>
            <h1 className="text-3xl font-black text-slate-100 tracking-tight uppercase">Aptitude</h1>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold max-w-3xl">
              Master Quantitative, Logical, Verbal and Reasoning for Placements.
            </p>
          </div>
        </div>

        {/* 6 Large Clickable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = activeCardId === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => handleCardClick(cat.id)}
                className={`bg-slate-900 border p-5 rounded-2xl flex flex-col justify-between h-[200px] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer relative group ${
                  isSelected 
                    ? 'border-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.05)]' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 bg-slate-950 rounded-xl border border-slate-850 flex items-center justify-center text-slate-400 group-hover:text-sky-400 group-hover:border-sky-500/20 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[8px] font-black text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 uppercase tracking-wider">
                        Active
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 text-left">
                    <h3 className="text-slate-100 font-extrabold text-sm tracking-tight">{cat.title}</h3>
                    <p className="text-[10px] text-slate-400 font-bold">{cat.topicCount}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-slate-850/60 text-[10px]">
                  <span className="text-slate-500 font-bold">{cat.questionCount}</span>
                  <span className="text-sky-400 font-black flex items-center gap-1 group-hover:translate-x-0.5 transition-transform uppercase tracking-wider">
                    <span>Explore</span>
                    <FiChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accordion / Expanded Syllabus breakdown panel */}
        {activeCardId && (
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-6 shadow-2xl relative animate-fadeIn text-xs">
            {/* Header info */}
            <div className="flex justify-between items-start border-b border-slate-800/80 pb-4 gap-4">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest block">Syllabus Breakdown</span>
                <h3 className="text-base font-extrabold text-slate-100 uppercase tracking-tight">{syllabus[activeCardId].title}</h3>
                <p className="text-[11px] text-slate-400 font-semibold">{syllabus[activeCardId].desc}</p>
              </div>
              <button 
                onClick={() => setActiveCardId(null)}
                className="bg-slate-950 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-850 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-wider transition-colors shrink-0"
              >
                Close Roadmap
              </button>
            </div>

            {/* Syllabus contents layout */}
            {activeCardId === 'quant' ? (
              <div className="space-y-6">
                {syllabus.quant.subcategories.map((sub, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-[10px] font-black text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                      {sub.name}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {sub.topics.map((t, idx) => (
                        <div 
                          key={idx}
                          className="bg-slate-950 p-3 rounded-xl border border-slate-850 hover:border-sky-500/20 transition-all duration-200 flex justify-between items-center group cursor-pointer shadow-md"
                          onClick={() => alert(`Starting ${t} practice workbook...`)}
                        >
                          <span className="text-[11px] text-slate-300 font-bold group-hover:text-slate-100">{t}</span>
                          <FiChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {syllabus[activeCardId].topics.map((t, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 hover:border-sky-500/20 transition-all duration-200 flex justify-between items-center group cursor-pointer shadow-md"
                    onClick={() => alert(`Starting ${t} practice workbook...`)}
                  >
                    <span className="text-[11px] text-slate-300 font-bold group-hover:text-slate-100">{t}</span>
                    <FiChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                ))}
              </div>
            )}

            {/* Section-Wise Mock Tests */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Section Mock Tests</h4>
                <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Test your speed and concept retention in this category.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {categoryMocks[activeCardId]?.map((test, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-slate-950 p-4 rounded-xl border flex flex-col justify-between h-[255px] transition-all duration-300 relative group overflow-hidden ${
                      test.locked 
                        ? 'border-slate-850 hover:border-sky-500/10' 
                        : 'border-slate-800 hover:border-sky-500/30 hover:shadow-[0_4px_25px_rgba(56,189,248,0.05)] hover:-translate-y-1'
                    }`}
                  >
                    {!test.locked && (
                      <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/[0.03] rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/[0.06] transition-all duration-300"></div>
                    )}

                    <div className="flex justify-between items-start gap-3">
                      <div className="space-y-2 flex-grow text-left">
                        <div>
                          <span className="text-[8.5px] font-black text-sky-400 uppercase tracking-widest block">Section Mock</span>
                          <h4 className="text-slate-100 font-extrabold text-xs tracking-tight">{test.title}</h4>
                          <p className="text-[10.5px] text-slate-400 font-semibold">{test.subtitle}</p>
                        </div>

                        <div className="flex items-center gap-2.5 text-[9.5px] text-slate-500 font-bold">
                          <span className="flex items-center gap-1">
                            <FiClock className="w-3 h-3 text-slate-600" />
                            {test.duration}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <FiBookOpen className="w-3 h-3 text-slate-600" />
                            {test.questions} Qs
                          </span>
                        </div>

                        <div className="text-[9.5px] text-slate-550 text-slate-500 space-y-0.5 font-medium">
                          {test.includes.map((inc, i) => (
                            <div key={i} className="truncate">{inc}</div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-end justify-between h-[115px] shrink-0">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${
                          test.locked 
                            ? 'bg-slate-900 border-slate-800 text-slate-650 text-slate-600 group-hover:text-sky-500/40 group-hover:border-sky-500/10' 
                            : 'bg-sky-500/10 border-sky-500/20 text-sky-400'
                        }`}>
                          {test.locked ? <FiLock className="w-4 h-4" /> : <FiUnlock className="w-4 h-4" />}
                        </div>

                        <div className="space-y-1 text-right">
                          <span className="text-[7.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                            {test.difficulty}
                          </span>
                          <span className="text-[8px] font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 tracking-wider flex items-center gap-1 justify-end">
                            <FiAward className="w-3 h-3" />
                            {test.reward}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1.5 border-t border-slate-900/60">
                      <p className="text-[9px] text-slate-500 font-semibold italic text-left truncate">
                        {test.unlock}
                      </p>
                      {test.locked ? (
                        <button 
                          disabled 
                          className="w-full bg-slate-900/50 text-slate-600 border border-slate-850/80 py-1.5 rounded-xl text-[10px] font-black select-none cursor-not-allowed flex items-center justify-center gap-1"
                        >
                          🔒 Locked
                        </button>
                      ) : (
                        <button 
                          onClick={() => alert(`Launching ${test.title} practice simulator...`)}
                          className="w-full bg-sky-500 hover:bg-sky-600 text-slate-950 py-1.5 rounded-xl text-[10px] font-black flex items-center justify-center gap-1 transition-colors shadow-md"
                        >
                          Start Test
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ==========================================
            Overall Aptitude Mock Assessment Section
            ========================================== */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-5 shadow-xl text-left">
          <div className="border-b border-slate-800/60 pb-3">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Overall Aptitude Mock Assessment</h3>
            <p className="text-[11px] text-slate-400 font-semibold mt-0.5">
              Practice full company-level mixed aptitude modules before actual drives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {overallMocks.map((test) => (
              <div 
                key={test.id} 
                className={`bg-slate-950 p-5 rounded-2xl border flex flex-col justify-between h-[275px] transition-all duration-300 relative group overflow-hidden ${
                  test.locked 
                    ? 'border-slate-850 hover:border-sky-500/10' 
                    : 'border-slate-800 hover:border-sky-500/30 hover:shadow-[0_4px_25px_rgba(56,189,248,0.05)] hover:-translate-y-1'
                }`}
              >
                {!test.locked && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/[0.05] transition-all duration-300"></div>
                )}

                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-2.5 flex-grow text-left">
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest block">Mock Assessment</span>
                      <h4 className="text-slate-100 font-extrabold text-sm tracking-tight">{test.title}</h4>
                      <p className="text-[11px] text-slate-400 font-semibold">{test.subtitle}</p>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] text-slate-500 font-bold">
                      <span className="flex items-center gap-1">
                        <FiClock className="w-3.5 h-3.5 text-slate-650 text-slate-600" />
                        {test.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FiBookOpen className="w-3.5 h-3.5 text-slate-650 text-slate-600" />
                        {test.questions} Qs
                      </span>
                    </div>

                    <div className="text-[10px] text-slate-505 text-slate-500 space-y-0.5 font-medium">
                      {test.includes.map((inc, i) => (
                        <div key={i} className="truncate">{inc}</div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between h-[125px] shrink-0">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors ${
                      test.locked 
                        ? 'bg-slate-900 border-slate-800 text-slate-650 text-slate-600 group-hover:text-sky-500/40 group-hover:border-sky-500/10' 
                        : 'bg-sky-500/10 border-sky-500/20 text-sky-400'
                    }`}>
                      {test.locked ? <FiLock className="w-4.5 h-4.5" /> : <FiUnlock className="w-4.5 h-4.5" />}
                    </div>

                    <div className="space-y-1.5 text-right">
                      <span className="text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                        {test.difficulty}
                      </span>
                      <span className="text-[8.5px] font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 tracking-wider flex items-center gap-1 justify-end">
                        <FiAward className="w-3.5 h-3.5" />
                        {test.reward}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-900/60">
                  <p className="text-[9.5px] text-slate-550 text-slate-500 font-semibold italic text-left truncate">
                    {test.unlock}
                  </p>

                  {test.locked ? (
                    <button 
                      disabled 
                      className="w-full bg-slate-900/50 text-slate-600 border border-slate-850/80 py-2 rounded-xl text-xs font-black select-none cursor-not-allowed flex items-center justify-center gap-1.5"
                    >
                      {test.buttonText}
                    </button>
                  ) : (
                    <button 
                      onClick={() => alert(`Launching ${test.title} practice simulator...`)}
                      className="w-full bg-sky-500 hover:bg-sky-600 text-slate-950 py-2 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-colors shadow-md"
                    >
                      {test.buttonText}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </CompanyLayout>
  );
};

export default AptitudePrep;
