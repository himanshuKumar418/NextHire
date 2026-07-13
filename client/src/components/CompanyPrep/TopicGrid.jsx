import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { 
  getPatternProgress, 
  getOverallArraysProgress 
} from '../../data/patternRegistry.js';

const TopicGrid = ({ dsaTopics }) => {
  const topics = dsaTopics ?? [];

  const getDynamicTopicProgress = (topicId) => {
    if (topicId === 'arrays') return getOverallArraysProgress();
    if (topicId === 'sliding-window') return getPatternProgress('sliding-window');
    if (topicId === 'binary-search') return getPatternProgress('binary-search');
    
    // Fallback placeholder/default progress
    return 0;
  };

  if (topics.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl text-left">
        <div className="border-b border-slate-800/60 pb-2">
          <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Most Asked Coding Topics</h3>
        </div>
        <p className="text-xs text-slate-400 font-semibold pt-4">No topics available yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl text-left">
      <div className="border-b border-slate-800/60 pb-2">
        <h3 className="text-xs font-bold text-slate-202 text-slate-200 uppercase tracking-wider">Most Asked Coding Topics</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {topics.map((top) => {
          const prog = getDynamicTopicProgress(top.id);

          return (
            <div key={top.id} className="bg-slate-950 p-4 rounded-xl border border-slate-850 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold">
                  <span className="text-slate-400">Importance</span>
                  <span className="text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < top.importance ? '★' : '☆'}</span>
                    ))}
                  </span>
                </div>
                
                <h4 className="text-sm font-black text-slate-200">{top.name}</h4>
                <span className="text-[10px] text-slate-500 font-bold block">{top.questionsCount} Standard Problems</span>
              </div>

              <div className="space-y-3 pt-1">
                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[8.5px] font-bold text-slate-400">
                    <span>Progress</span>
                    <span>{prog}%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-850">
                    <div className="bg-sky-500 h-full rounded-full" style={{ width: `${prog}%` }}></div>
                  </div>
                </div>

                <Link 
                  to={top.path}
                  className="w-full bg-slate-900 hover:bg-slate-850 text-sky-400 text-[10px] font-bold py-2 rounded-lg text-center flex items-center justify-center gap-1 transition-colors border border-slate-800"
                >
                  <span>Open Topic</span>
                  <FiArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopicGrid;
