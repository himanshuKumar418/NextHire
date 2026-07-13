import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Prepare from './pages/Prepare.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { DashboardProvider } from './context/DashboardContext.jsx';

// Pattern DSA Imports
import PatternHome from './pages/PatternHome.jsx';
import PatternCategory from './pages/PatternCategory.jsx';
import PatternDetail from './pages/PatternDetail.jsx';
import CodingWorkspace from './pages/CodingWorkspace.jsx';
import CompanyHome from './pages/CompanyHome.jsx';
import CompanyDetail from './pages/CompanyDetail.jsx';
import AptitudePrep from './pages/AptitudePrep.jsx';
import CoreSubjectsPrep from './pages/CoreSubjectsPrep.jsx';
import CoreSubjectDetail from './pages/CoreSubjectDetail.jsx';
import InterviewHub from './pages/InterviewHub.jsx';
import RoadmapsHub from './pages/RoadmapsHub.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isCodingWorkspace = location.pathname.includes('/question/');

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col justify-between">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prepare" element={<Prepare />} />
          <Route path="/prepare/dsa" element={<PatternHome />} />
          
          {/* Pattern DSA Routes */}
          <Route path="/prepare/patterns" element={<PatternHome />} />
          <Route path="/prepare/patterns/:category" element={<PatternCategory />} />
          <Route path="/prepare/patterns/:category/:pattern" element={<PatternDetail />} />
          <Route path="/prepare/patterns/:category/:pattern/question/:id" element={<CodingWorkspace />} />

          {/* Direct /prepare/dsa/* paths requested by the user */}
          <Route path="/prepare/dsa/arrays" element={<PatternCategory categoryProp="arrays" />} />
          <Route path="/prepare/dsa/strings" element={<PatternCategory categoryProp="strings" />} />
          <Route path="/prepare/dsa/trees" element={<PatternCategory categoryProp="trees" />} />
          <Route path="/prepare/dsa/graphs" element={<PatternCategory categoryProp="graphs" />} />
          <Route path="/prepare/dsa/two-pointers" element={<PatternDetail categoryProp="arrays" patternProp="two-pointer" />} />
          <Route path="/prepare/dsa/sliding-window" element={<PatternDetail categoryProp="arrays" patternProp="sliding-window" />} />
          <Route path="/prepare/dsa/hashing" element={<PatternDetail categoryProp="arrays" patternProp="hashing" />} />
          <Route path="/prepare/dsa/binary-search" element={<PatternDetail categoryProp="arrays" patternProp="binary-search" />} />

          {/* Company Prep Routes */}
          <Route path="/prepare/company" element={<CompanyHome />} />
          <Route path="/prepare/company/:companyId" element={<CompanyDetail />} />
          <Route path="/prepare/aptitude" element={<AptitudePrep />} />
          <Route path="/prepare/reasoning" element={<ComingSoon title="Logical Reasoning" />} />
          <Route path="/prepare/verbal" element={<ComingSoon title="Verbal Ability" />} />
          <Route path="/prepare/core" element={<CoreSubjectsPrep />} />
          <Route path="/prepare/core-subjects" element={<CoreSubjectsPrep />} />
          <Route path="/prepare/core-subjects/:subjectId" element={<CoreSubjectDetail />} />
          <Route path="/prepare/interview" element={<InterviewHub />} />
          <Route path="/interview/hr" element={<ComingSoon title="HR Interview Prep" />} />
          <Route path="/interview/technical" element={<ComingSoon title="Technical Interview Prep" />} />
          <Route path="/interview/resume" element={<ComingSoon title="Resume Interview Prep" />} />
          <Route path="/interview/company" element={<ComingSoon title="Company Specific Prep" />} />
          <Route path="/interview/managerial" element={<ComingSoon title="Managerial Interview Prep" />} />
          <Route path="/interview/gd" element={<ComingSoon title="Group Discussion Prep" />} />
          <Route path="/interview/experience" element={<ComingSoon title="Interview Experiences" />} />
          <Route path="/interview/mock" element={<ComingSoon title="AI Mock Interview" />} />
          <Route path="/prepare/roadmaps" element={<RoadmapsHub />} />
          <Route path="/roadmaps/infosys" element={<ComingSoon title="Infosys Preparation Roadmap" />} />
          <Route path="/roadmaps/tcs" element={<ComingSoon title="TCS Preparation Roadmap" />} />
          <Route path="/roadmaps/accenture" element={<ComingSoon title="Accenture Preparation Roadmap" />} />
          <Route path="/roadmaps/capgemini" element={<ComingSoon title="Capgemini Preparation Roadmap" />} />
          <Route path="/roadmaps/cognizant" element={<ComingSoon title="Cognizant Preparation Roadmap" />} />
          <Route path="/roadmaps/wipro" element={<ComingSoon title="Wipro Preparation Roadmap" />} />
          <Route path="/roadmaps/deloitte" element={<ComingSoon title="Deloitte Preparation Roadmap" />} />
          <Route path="/roadmaps/ibm" element={<ComingSoon title="IBM Preparation Roadmap" />} />
          <Route path="/roadmaps/ltimindtree" element={<ComingSoon title="LTIMindtree Preparation Roadmap" />} />
          <Route path="/roadmaps/oracle" element={<ComingSoon title="Oracle Preparation Roadmap" />} />
          <Route path="/roadmaps/adobe" element={<ComingSoon title="Adobe Preparation Roadmap" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          {/* Additional routes will be registered here during setup */}
        </Routes>
      </main>

      {/* Global Footer (Hidden on Dashboard & Workspace) */}
      {!isDashboard && !isCodingWorkspace && <Footer />}
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <DashboardProvider>
        <AppContent />
      </DashboardProvider>
    </Router>
  );
}

export default App;
