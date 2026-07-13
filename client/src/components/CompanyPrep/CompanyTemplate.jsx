import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalItem, setLocalItem } from '../../utils/localStorageHelper.js';
import { useDashboard } from '../../context/DashboardContext.jsx';
import CompanyHero from './CompanyHero.jsx';
import HiringTimeline from './HiringTimeline.jsx';
import AssessmentCards from './AssessmentCards.jsx';
import TopicGrid from './TopicGrid.jsx';
import RoadmapTimeline from './RoadmapTimeline.jsx';
import QuestionChecklist from './QuestionChecklist.jsx';
import PYQTimeline from './PYQTimeline.jsx';
import InterviewAccordion from './InterviewAccordion.jsx';
import ResourcesCard from './ResourcesCard.jsx';
import TechnicalInterview from './TechnicalInterview.jsx';
import HrInterview from './HrInterview.jsx';
import { getCompanyProgress } from '../../data/company/companyRegistry.js';

const CompanyTemplate = ({ company }) => {
  const navigate = useNavigate();
  const { updateXp } = useDashboard();
  const [progress, setProgress] = useState(() => getCompanyProgress(company.id));
  const [floats, setFloats] = useState([]);

  // Sync progress if company page changes
  useEffect(() => {
    setProgress(getCompanyProgress(company.id));
  }, [company]);

  const handleToggleSolved = (qId, isSolvedNow, xpDelta, e) => {
    // 1. Recalculate company progress
    const nextProgress = getCompanyProgress(company.id);
    setProgress(nextProgress);

    // 2. Award standard XP delta to total XP
    const prevXp = parseInt(getLocalItem('user_xp', '240'), 10);
    let nextXp = prevXp;
    if (isSolvedNow) {
      nextXp += xpDelta;
    } else {
      nextXp = Math.max(0, nextXp - xpDelta);
    }
    
    setLocalItem('user_xp', nextXp.toString());
    
    // Determine activity type based on question difficulty/xpDelta
    let activityType = 'easy-q';
    if (xpDelta >= 40) activityType = 'hard-q';
    else if (xpDelta >= 20) activityType = 'medium-q';

    // Persist solved question in DB & context state
    updateXp(activityType, xpDelta, isSolvedNow, qId).catch(err => {
      console.error('Failed to sync question status to backend:', err);
    });

    // Dispatch global events to sync layouts and sidebar counters
    window.dispatchEvent(new CustomEvent('xp-changed'));
    window.dispatchEvent(new CustomEvent('company-xp-changed'));

    // Trigger visual float rewards animation
    if (isSolvedNow) {
      const id = Date.now() + Math.random();
      setFloats((prev) => [...prev, { id, x: window.innerWidth / 2, y: window.innerHeight / 2, value: `+${xpDelta} XP` }]);
      setTimeout(() => {
        setFloats((prev) => prev.filter((f) => f.id !== id));
      }, 1000);
    }
  };

  return (
    <div className="space-y-6 text-left pb-12 relative">
      
      {/* Floating XP Rewards */}
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

      {/* 1. Hero Banner */}
      <CompanyHero company={company} progress={progress} />

      {/* 2. Hiring Timeline process */}
      <HiringTimeline hiringProcess={company.hiringProcess} />

      {/* 3. Assessment Section Patterns */}
      <AssessmentCards assessmentPatterns={company.assessmentPatterns} />

      {/* 4. Core DSA topics */}
      {company.id !== 'infosys' && <TopicGrid dsaTopics={company.dsaTopics} />}

      {/* 5. Roadmap Timeline */}
      <RoadmapTimeline roadmap={company.roadmap} />

      {/* 6. Top coding questions checklist */}
      <QuestionChecklist codingQuestions={company.codingQuestions} onToggleSolved={handleToggleSolved} />

      {/* 7, 8 & 9. PYQs, Interview questions, and HR questions */}
      {company.id === 'infosys' ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="lg:col-span-1 h-full">
              <PYQTimeline pyqs={company.pyqs} />
            </div>
            <div className="lg:col-span-2 h-full">
              <TechnicalInterview technicalData={company.technical} />
            </div>
          </div>
          <div className="w-full">
            <HrInterview hrData={company.hr} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <PYQTimeline pyqs={company.pyqs} />
          <InterviewAccordion title="Technical Interview Qs" questions={company.interviewQuestions} />
          <InterviewAccordion title="HR Interview Qs" questions={company.hrQuestions} />
        </div>
      )}

      {/* 10. Study resources */}
      <ResourcesCard resources={company.resources} />

    </div>
  );
};

export default CompanyTemplate;
