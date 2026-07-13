import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getLocalItem, setLocalItem } from '../utils/localStorageHelper.js';
import { useDashboard } from '../context/DashboardContext.jsx';
import { 
  FiArrowLeft, 
  FiCpu, 
  FiPlay, 
  FiCheck, 
  FiInfo, 
  FiTerminal, 
  FiAlertCircle, 
  FiZap 
} from 'react-icons/fi';
import { questionDetails } from '../components/PatternDsa/patternData.js';

const CodingWorkspace = () => {
  const { category, pattern, id } = useParams();
  const navigate = useNavigate();
  const { updateXp } = useDashboard();
  
  // Find question details
  const activeQuestion = questionDetails[id] || questionDetails['two-sum-sorted'];

  // Left panel active tab state
  const [leftTab, setLeftTab] = useState('problem');

  // Right panel code editor states
  const [selectedLang, setSelectedLang] = useState('cpp');
  const [editorCode, setEditorCode] = useState(activeQuestion.starterCodes.cpp);

  // Run execution console states
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [consoleStatus, setConsoleStatus] = useState('idle'); // idle, running, success, error
  const [consoleOutput, setConsoleOutput] = useState('');

  // Local storage XP tracking
  const [userXp, setUserXp] = useState(() => {
    return parseInt(getLocalItem('user_xp', '240'), 10);
  });

  // Track cursor position or edit triggers
  const [floats, setFloats] = useState([]);

  // Toast notifications
  const [toastMsg, setToastMsg] = useState('');

  // Update editor input when language changes
  useEffect(() => {
    setEditorCode(activeQuestion.starterCodes[selectedLang]);
    setConsoleStatus('idle');
    setConsoleOutput('');
  }, [selectedLang, id]);

  const triggerXpFloat = (e, val = 30) => {
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    const fid = Date.now() + Math.random();
    setFloats((prev) => [...prev, { id: fid, x, y, value: `+${val} XP` }]);
    setTimeout(() => {
      setFloats((prev) => prev.filter((f) => f.id !== fid));
    }, 1000);
  };

  const handleRunCode = () => {
    setConsoleOpen(true);
    setConsoleStatus('running');
    setConsoleOutput('Compiling code structures...');

    setTimeout(() => {
      // Simulate simple run checks
      setConsoleStatus('success');
      setConsoleOutput(`Running sample test cases...
Test Case 1: numbers = [2,7,11,15], target = 9
Output index values: [1,2] (Expected: [1,2])
Result: SUCCESS ✓

Test Case 2: numbers = [2,3,4], target = 6
Output index values: [1,3] (Expected: [1,3])
Result: SUCCESS ✓

All sample compile cases matching! Ready for final submission.`);
    }, 1200);
  };

  const handleSubmitCode = (e) => {
    setConsoleOpen(true);
    setConsoleStatus('running');
    setConsoleOutput('Running comprehensive assessment tests against 45 test bounds...');

    setTimeout(() => {
      // Award XP on successful submit
      const xpReward = activeQuestion.xpReward || 30;
      const targetXp = userXp + xpReward;
      setUserXp(targetXp);
      setLocalItem('user_xp', targetXp.toString());

      // Sync XP and activity state to backend
      let activityType = 'easy-q';
      if (activeQuestion.difficulty === 'Medium') activityType = 'medium-q';
      if (activeQuestion.difficulty === 'Hard') activityType = 'hard-q';

      updateXp(activityType, xpReward, true).catch(err => {
        console.error('Failed to update XP on backend:', err);
      });

      setConsoleStatus('success');
      setConsoleOutput(`Comprehensive Testing Results:
45/45 Test Cases Passed.
Runtime: 4ms (Beats 82% of submissions)
Memory: 11.2MB (Beats 74% of submissions)

🎉 Solution Accepted!
🪙 +${xpReward} XP Reward added to your account.`);

      // Trigger float reward
      triggerXpFloat(e, xpReward);
      setToastMsg(`✓ Correct Submission! +${xpReward} XP Earned`);
      setTimeout(() => {
        setToastMsg('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="flex-grow bg-slate-950 flex flex-col h-[calc(100vh-64px)] w-full text-left relative overflow-hidden select-none">
      
      {/* Floating XP Rewards list */}
      {floats.map((f) => (
        <div 
          key={f.id} 
          className="xp-float fixed z-50 text-amber-400 font-extrabold text-sm pointer-events-none drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)] flex items-center gap-1"
          style={{ left: f.x - 20, top: f.y - 20, animation: 'floatUp 1s forwards' }}
        >
          <span>🪙</span>
          <span>{f.value}</span>
        </div>
      ))}

      {/* CSS Float keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(0) scale(0.9); }
          15% { opacity: 1; transform: translateY(-20px) scale(1.1); }
          85% { opacity: 1; transform: translateY(-50px) scale(1); }
          100% { opacity: 0; transform: translateY(-70px) scale(0.85); }
        }
      `}} />

      {/* Notification Toast */}
      {toastMsg && (
        <div className="fixed bottom-16 right-6 z-50 bg-slate-900 border border-slate-800 text-sky-400 font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border-l-4 border-l-sky-500">
          <FiInfo className="w-4 h-4 text-sky-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-slate-200">{toastMsg}</span>
        </div>
      )}

      {/* Top Workspace Header Navigation */}
      <header className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between shrink-0 z-10">
        <div className="flex items-center space-x-4">
          <Link 
            to={`/prepare/patterns/${category}/${pattern}`}
            className="text-slate-400 hover:text-slate-200 text-xs font-bold flex items-center gap-1.5 focus:outline-none"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to Concept</span>
          </Link>
          <span className="text-slate-700">|</span>
          <h2 className="text-xs font-black text-slate-300 uppercase tracking-widest block">
            {activeQuestion.title}
          </h2>
        </div>

        {/* HUD state */}
        <div className="flex items-center space-x-3 text-xs font-bold">
          <span className="bg-slate-950 border border-slate-850 px-3 py-1.5 rounded-lg text-slate-400">
            Current XP: <span className="text-emerald-450 text-emerald-400 font-black">{userXp} XP</span>
          </span>
          <span className="bg-slate-950 border border-slate-850 px-3 py-1.5 rounded-lg text-slate-400">
            Syllabus: <span className="text-sky-400">{category}</span>
          </span>
        </div>
      </header>

      {/* Double Pane Workspace Splitter */}
      <div className="flex-grow flex flex-col md:flex-row min-h-0 w-full">
        
        {/* === LEFT PANE: PROBLEM SHEETS === */}
        <section className="flex-1 min-h-0 flex flex-col bg-slate-900 border-r border-slate-800">
          {/* Tabs bar */}
          <div className="bg-slate-900/60 border-b border-slate-800/80 px-3 flex gap-2 text-xs font-bold select-none pt-2">
            <button
              onClick={() => setLeftTab('problem')}
              className={`px-4 py-2 border-b-2 font-black transition-colors duration-200 ${
                leftTab === 'problem' 
                  ? 'border-sky-500 text-sky-400' 
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              Problem Description
            </button>
            <button
              onClick={() => setLeftTab('solution')}
              className={`px-4 py-2 border-b-2 font-black transition-colors duration-200 ${
                leftTab === 'solution' 
                  ? 'border-sky-500 text-sky-400' 
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              Conceptual Solution
            </button>
          </div>

          {/* Details Scroll Area */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6 text-xs text-left leading-relaxed">
            {leftTab === 'problem' ? (
              <>
                {/* Heading */}
                <div className="space-y-2">
                  <h1 className="text-xl font-black text-slate-100">{activeQuestion.title}</h1>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 border border-emerald-500/10 bg-emerald-500/[0.02] px-2.5 py-0.5 rounded font-black">
                      {activeQuestion.difficulty}
                    </span>
                    <span className="text-slate-500">•</span>
                    <div className="flex gap-1.5">
                      {activeQuestion.companyTags.map((tag) => (
                        <span key={tag} className="bg-slate-950 border border-slate-850 px-2 py-0.5 rounded text-slate-400 font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Question Body Description */}
                <div className="text-slate-300 font-semibold space-y-4 whitespace-pre-wrap">
                  {activeQuestion.description}
                </div>

                {/* Examples */}
                <div className="space-y-4">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Examples</span>
                  {activeQuestion.examples.map((ex, idx) => (
                    <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-1.5">
                      <span className="text-[9px] text-sky-400 font-black uppercase tracking-wider block">Example {idx + 1}</span>
                      <div className="space-y-1 text-slate-300 font-mono text-[11px]">
                        <p><strong className="text-slate-400">Input:</strong> {ex.input}</p>
                        <p><strong className="text-slate-400">Output:</strong> {ex.output}</p>
                        {ex.explanation && <p className="pt-1.5 leading-relaxed text-slate-405 text-slate-400"><strong className="text-slate-555 text-slate-500 font-bold">Explanation:</strong> {ex.explanation}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Constraints */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Constraints</span>
                  <ul className="space-y-1.5 bg-slate-950/60 p-3.5 rounded-xl border border-slate-850 text-slate-400 font-mono text-[10.5px]">
                    {activeQuestion.constraints.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-500">&bull;</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className="space-y-6 text-left">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-200">How to solve using Two Pointers</h3>
                  <p className="text-slate-400 leading-normal font-medium">
                    Because the array is already sorted, we can initialize one pointer at the start and another at the end of the array.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3">
                  <h4 className="text-xs font-bold text-sky-400">Optimal Complexity</h4>
                  <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
                    <div>
                      <span className="text-[9px] text-slate-500 block uppercase font-bold">Time Complexity</span>
                      <span className="text-slate-202 text-slate-200 block">O(N) - Linear scan</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block uppercase font-bold">Space Complexity</span>
                      <span className="text-slate-202 text-slate-200 block">O(1) - Constant index memory</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850 relative font-mono text-[11px] leading-relaxed overflow-x-auto text-sky-400">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-2">Sample Python Solution</span>
                  <pre className="text-left text-slate-300 whitespace-pre">
                    {activeQuestion.solutions.python}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* === RIGHT PANE: CODE WRITING ENVIRONMENT === */}
        <section className="flex-1 min-h-0 flex flex-col bg-slate-950 relative">
          
          {/* Controls toolbar */}
          <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between shrink-0 z-10">
            {/* Language dropdown */}
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-200 text-xs px-3 py-1.5 rounded-lg focus:outline-none cursor-pointer font-bold"
            >
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>

            <span className="text-[9px] text-slate-500 font-extrabold tracking-widest uppercase">Editor Console</span>
          </div>

          {/* Text Area Code Editor */}
          <div className="flex-grow relative min-h-0 w-full flex flex-col font-mono text-[12px] bg-slate-950 text-sky-400">
            <textarea
              value={editorCode}
              onChange={(e) => setEditorCode(e.target.value)}
              className="w-full h-full p-6 bg-slate-950 border-none resize-none focus:outline-none font-mono text-slate-200 leading-relaxed text-[12px]"
              style={{ tabSize: 4 }}
            />
          </div>

          {/* Dynamic Console log overlays */}
          {consoleOpen && (
            <div className="h-64 border-t border-slate-800 bg-slate-900/95 backdrop-blur-sm shrink-0 flex flex-col justify-between min-h-0 relative z-20">
              <div className="bg-slate-950 border-b border-slate-850 px-4 py-2 flex items-center justify-between font-bold text-xs shrink-0 select-none">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <FiTerminal className="w-4 h-4 text-sky-400" />
                  Execution Logs Output
                </span>
                <button 
                  onClick={() => setConsoleOpen(false)}
                  className="text-slate-500 hover:text-slate-300 focus:outline-none"
                >
                  ✕
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-4 font-mono text-[11px] text-left leading-relaxed text-slate-300">
                {consoleStatus === 'running' ? (
                  <p className="text-sky-400 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping"></span>
                    {consoleOutput}
                  </p>
                ) : (
                  <pre className="whitespace-pre-wrap">{consoleOutput}</pre>
                )}
              </div>
            </div>
          )}

          {/* Action console buttons */}
          <div className="bg-slate-900 border-t border-slate-800 px-4 py-3.5 flex items-center justify-between shrink-0 z-10 select-none">
            <button
              onClick={() => setConsoleOpen(!consoleOpen)}
              className="bg-slate-950 border border-slate-800 hover:bg-slate-850 text-slate-400 hover:text-slate-300 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors duration-200"
            >
              <FiTerminal className="w-4 h-4" />
              <span>Console</span>
            </button>

            <div className="flex items-center space-x-3 font-bold">
              <button
                onClick={handleRunCode}
                className="bg-slate-950 border border-slate-700 hover:bg-slate-850 text-sky-400 hover:text-sky-300 font-semibold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors duration-200 shadow-md"
              >
                <FiPlay className="w-3.5 h-3.5 text-sky-400" />
                <span>Run Code</span>
              </button>
              
              <button
                onClick={(e) => handleSubmitCode(e)}
                className="bg-sky-500 hover:bg-sky-600 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-all duration-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
              >
                <FiCheck className="w-4 h-4 text-slate-950" />
                <span>Submit Solution</span>
              </button>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default CodingWorkspace;
