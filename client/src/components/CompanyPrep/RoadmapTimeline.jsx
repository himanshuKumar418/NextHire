import React, { useState, useEffect } from 'react';
import { FiClock, FiBookOpen, FiTarget } from 'react-icons/fi';
import { getLocalItem, setLocalItem } from '../../utils/localStorageHelper.js';

const RoadmapTimeline = ({ roadmap }) => {
  const [completedTopics, setCompletedTopics] = useState(() => {
    return getLocalItem('infosys_roadmap_completed_topics', []);
  });

  const toggleTopic = (topicId) => {
    let nextCompleted;
    if (completedTopics.includes(topicId)) {
      nextCompleted = completedTopics.filter((id) => id !== topicId);
    } else {
      nextCompleted = [...completedTopics, topicId];
    }
    setLocalItem('infosys_roadmap_completed_topics', nextCompleted);
    setCompletedTopics(nextCompleted);
  };

  const rms = roadmap ?? [];

  if (rms.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl text-left">
        <div className="border-b border-slate-800/60 pb-2">
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Preparation Roadmap</h3>
        </div>
        <p className="text-xs text-slate-400 font-semibold pt-4">No roadmap available yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-5 shadow-xl text-left">
      <div className="border-b border-slate-800/60 pb-2">
        <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Preparation Roadmap</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {rms.map((rm) => {
          const rmTopics = rm?.topics ?? [];
          // Calculate progress for this week card
          const weekTopicIds = rmTopics.map((t) => t.id);
          const completedCount = weekTopicIds.filter((id) => completedTopics.includes(id)).length;
          const totalCount = weekTopicIds.length;
          const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

          return (
            <div 
              key={rm.week} 
              className="bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between space-y-4 relative overflow-hidden transition-all duration-300 hover:border-slate-800 group"
            >
              {/* Top Week Header */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">{rm.week}</span>
                  <span className="text-[10px] font-black text-emerald-400">{percentage}%</span>
                </div>
                <h4 className="text-xs font-black text-slate-100 group-hover:text-sky-400 transition-colors">{rm.title}</h4>
              </div>

              {/* Stats HUD Block */}
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-900 space-y-2 text-[10px] font-bold text-slate-400">
                <div className="flex items-center gap-1.5">
                  <FiClock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Est. Hours: <span className="text-slate-200">{rm.estimatedHours}</span></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiBookOpen className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Questions: <span className="text-slate-200">{rm.questionsCount}</span></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiTarget className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Daily Target: <span className="text-slate-200">{rm.dailyTarget}</span></span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-850">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Interactive Topics Checklist */}
              <div className="space-y-2 pt-1 border-t border-slate-900">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Weekly Topics</span>
                <div className="space-y-1.5">
                  {rmTopics.map((topic) => {
                    const isChecked = completedTopics.includes(topic.id);
                    return (
                      <label 
                        key={topic.id}
                        className="flex items-center gap-2 text-[11px] font-semibold text-slate-300 hover:text-slate-100 cursor-pointer select-none"
                      >
                        <input 
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleTopic(topic.id)}
                          className="w-3.5 h-3.5 rounded border border-slate-800 bg-slate-900 text-sky-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-sky-500"
                        />
                        <span className={isChecked ? 'line-through text-slate-500 font-normal' : ''}>
                          {topic.name}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapTimeline;
