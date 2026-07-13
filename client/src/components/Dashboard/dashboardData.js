// Company-specific configuration objects for Placement Dashboard state synchronization

export const infosysData = {
  companyName: 'Infosys',
  studyPlan: [
    { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Two Pointers', 'Sliding Window'], path: '/prepare/dsa', completed: false, xpReward: 30 },
    { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: DBMS', topics: ['Joins', 'Normalization', 'Transactions'], path: '/prepare/core', completed: false, xpReward: 30 },
    { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Time & Work', topics: ['Goal: Solve 40 Questions'], path: '/prepare/aptitude', completed: false, xpReward: 30 },
    { id: 'revision', name: "Revision", duration: '30 Minutes', topicTitle: 'Revision', topics: ['Sliding Window Notes', 'DBMS Normalization', 'Aptitude Formulas'], path: '/prepare', completed: false, xpReward: 10 }
  ],
  aiMentor: {
    dsaProblems: ['Two Sum', 'Best Time to Buy & Sell Stock', 'Move Zeroes'],
    coreTopics: ['Joins', 'Normalization', 'Transactions'],
    aptitudeGoal: 'Goal: Solve 40 Questions',
    aptitudeVal: '40 Qs',
    estStudyTime: '5 Hours',
    potentialXp: 90,
    difficulty: 'Medium',
    completionBonus: 25,
    streakBonus: 10
  },
  dailyChallenge: {
    id: 'trapping-rain-water',
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    solvedCount: 1420,
    path: '/prepare/dsa',
    relevance: 'Highly asked in Amazon, Infosys and TCS assessments',
    pattern: 'Two Pointer / Monotonic Stack',
    time: '35 mins',
    rank: '#420 global',
    pct: '48.5%',
    leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/'
  },
  roadmap: [
    { id: 1, name: 'Arrays', status: 'completed', path: '/prepare/dsa' },
    { id: 2, name: 'Strings', status: 'completed', path: '/prepare/dsa' },
    { id: 3, name: 'Sliding Window', status: 'current', path: '/prepare/dsa' },
    { id: 4, name: 'Binary Search', status: 'locked', path: '/prepare/dsa' },
    { id: 5, name: 'Trees', status: 'locked', path: '/prepare/dsa' },
    { id: 6, name: 'Hashing', status: 'locked', path: '/prepare/dsa' },
    { id: 7, name: 'Aptitude', status: 'locked', path: '/prepare/aptitude' },
    { id: 8, name: 'DBMS', status: 'locked', path: '/prepare/core' },
    { id: 9, name: 'Mock Test', status: 'locked', path: '/prepare' },
    { id: 10, name: 'HR Interview', status: 'locked', path: '/prepare/interview' }
  ],
  readiness: { score: 27, completed: ['Arrays', 'Strings', 'Sliding Window'], remaining: ['DBMS', 'Mock Test', 'Interview'], path: '/prepare/company' },
  weakTopics: {
    topic: 'Dynamic Programming',
    accuracy: '28%',
    remaining: '12 Questions',
    focus: 'Memoization',
    revisionTime: '1.5 Hours',
    lastAttempt: '2 days ago',
    suggestion: 'You struggle in Memoization. Complete 8 Easy DP questions before Medium.'
  },
  recommendedProblems: [
    { name: 'Practice Merge Intervals', reason: 'Frequently asked in Infosys OA.', time: '25 Minutes', difficulty: 'Medium', xpReward: 20, path: '/prepare/dsa' },
    { name: 'Revise ACID Properties', reason: 'Commonly asked in Core DBMS interviews.', time: '15 Minutes', difficulty: 'Easy', xpReward: 15, path: '/prepare/core' }
  ],
  mockAssessment: {
    name: 'Infosys Full Mock',
    duration: '120 Minutes',
    questions: 60,
    xpReward: 100,
    path: '/prepare/company',
    level: 'Medium-Hard',
    breakdown: { dsa: 20, core: 15, aptitude: 15, interview: 10 },
    passingScore: '75%',
    recommendedXp: 800,
    rewards: { badge: 'Infosys OA Master', companyRank: 'Top 10%', readinessGain: '+8%' }
  },
  preparationTrack: { name: 'Infosys SE Prep Track', category: 'General' },
  companyProgress: { coding: 35, core: 20, aptitude: 70, interview: 10, hr: 0 },
  nextTargets: ['Complete Sliding Window', 'Complete DBMS', 'Solve 5 PYQs'],
  targetMetrics: { rate: '48%', leaderboard: 'Top 12%', estTime: '35 mins' },
  pyq: {
    id: 'inf_pyq_01',
    title: 'Unique Paths in Grid',
    difficulty: 'Medium',
    acceptance: '64%',
    year: 2025,
    solvedBy: 1420,
    avgTime: '28 min',
    xpReward: 30,
    skillReward: '+10 Skill Points',
    path: '/prepare/dsa',
    patterns: ['Arrays', 'Dynamic Programming', 'Matrix']
  },
  tip: {
    hrTip: "Infosys HRs value resume integrity and situational flexibility. Be ready to justify location and role shifts.",
    techTip: "Focus heavily on Arrays/Two Pointers, basic DBMS ACID transactions, and OOP definitions.",
    commonMistake: "Failing to explain time complexity tradeoffs for intermediate DSA loops.",
    quickAnswer: "Briefly explain space/time limits before jumping into final coding algorithms."
  }
};

export const tcsData = {
  companyName: 'TCS',
  studyPlan: [
    { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Sorting', 'Strings'], path: '/prepare/dsa', completed: false, xpReward: 30 },
    { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: OS', topics: ['CPU Scheduling', 'Memory Management'], path: '/prepare/core', completed: false, xpReward: 30 },
    { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Percentages', topics: ['Goal: Solve 35 Questions'], path: '/prepare/aptitude', completed: false, xpReward: 30 },
    { id: 'revision', name: "Revision", duration: '30 Minutes', topicTitle: 'Revision', topics: ['OS Scheduler Cheat Sheet', 'Aptitude Formulas', 'Sorting Complexities'], path: '/prepare', completed: false, xpReward: 10 }
  ],
  aiMentor: {
    dsaProblems: ['Two Sum', 'Move Zeroes', 'Squares of Sorted Array'],
    coreTopics: ['CPU Scheduling', 'Paging', 'Virtual Memory'],
    aptitudeGoal: 'Goal: Solve 35 Questions',
    aptitudeVal: '35 Qs',
    estStudyTime: '5 Hours',
    potentialXp: 90,
    difficulty: 'Easy-Medium',
    completionBonus: 20,
    streakBonus: 10
  },
  dailyChallenge: {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    solvedCount: 3820,
    path: '/prepare/dsa',
    relevance: 'Extremely common in TCS NQT coding section',
    pattern: 'Arrays / Hash Map',
    time: '15 mins',
    rank: '#105 global',
    pct: '85% Acceptance',
    leetcodeUrl: 'https://leetcode.com/problems/two-sum/'
  },
  roadmap: [
    { id: 1, name: 'Arrays', status: 'completed', path: '/prepare/dsa' },
    { id: 2, name: 'Aptitude Basics', status: 'completed', path: '/prepare/aptitude' },
    { id: 3, name: 'SQL Subqueries', status: 'current', path: '/prepare/core' },
    { id: 4, name: 'DBMS Indexing', status: 'locked', path: '/prepare/core' },
    { id: 5, name: 'C/C++ Pointers', status: 'locked', path: '/prepare/core' },
    { id: 6, name: 'Strings', status: 'locked', path: '/prepare/dsa' },
    { id: 7, name: 'Quantitative', status: 'locked', path: '/prepare/aptitude' },
    { id: 8, name: 'OS Scheduler', status: 'locked', path: '/prepare/core' },
    { id: 9, name: 'TCS NQT Mock', status: 'locked', path: '/prepare' },
    { id: 10, name: 'HR Interview', status: 'locked', path: '/prepare/interview' }
  ],
  readiness: { score: 33, completed: ['Arrays', 'Aptitude Basics'], remaining: ['SQL Subqueries', 'TCS NQT Mock', 'Interview'], path: '/prepare/company' },
  weakTopics: {
    topic: 'C/C++ Pointers',
    accuracy: '35%',
    remaining: '8 Questions',
    focus: 'Pointer Arithmetic',
    revisionTime: '1.0 Hours',
    lastAttempt: '1 day ago',
    suggestion: 'Struggling with pointer allocations. Practice memory reference questions.'
  },
  recommendedProblems: [
    { name: 'Practice Valid Palindrome', reason: 'Commonly asked in TCS NQT OA.', time: '15 Minutes', difficulty: 'Easy', xpReward: 15, path: '/prepare/dsa' },
    { name: 'Revise Semaphores', reason: 'Highly asked in technical interview.', time: '20 Minutes', difficulty: 'Medium', xpReward: 20, path: '/prepare/core' }
  ],
  mockAssessment: {
    name: 'TCS NQT Mock OA',
    duration: '90 Minutes',
    questions: 50,
    xpReward: 100,
    path: '/prepare/company',
    level: 'Medium',
    breakdown: { dsa: 15, core: 15, aptitude: 15, interview: 5 },
    passingScore: '70%',
    recommendedXp: 750,
    rewards: { badge: 'NQT Achiever', companyRank: 'Top 15%', readinessGain: '+6%' }
  },
  preparationTrack: { name: 'TCS Ninja/Digital Prep Track', category: 'General' },
  companyProgress: { coding: 50, core: 40, aptitude: 60, interview: 15, hr: 0 },
  nextTargets: ['Complete Arrays & Sorting', 'Complete Operating Systems', 'Solve 4 PYQs'],
  targetMetrics: { rate: '68%', leaderboard: 'Top 15%', estTime: '20 mins' },
  pyq: {
    id: 'tcs_pyq_01',
    title: 'Prime Fibonacci Series',
    difficulty: 'Easy',
    acceptance: '78%',
    year: 2024,
    solvedBy: 2850,
    avgTime: '18 min',
    xpReward: 20,
    skillReward: '+5 Skill Points',
    path: '/prepare/dsa',
    patterns: ['Math', 'Loops', 'Series']
  },
  tip: {
    hrTip: "TCS HRs look for loyalty and readiness to learn. Emphasize your adaptability to TCS-specific frameworks.",
    techTip: "Be thorough with C/C++ pointer variables, basic SQL select schemas, and quantitative aptitude formulas.",
    commonMistake: "Struggling to define the difference between compilers and interpreters during fundamentals rounds.",
    quickAnswer: "Explain the difference by tracing memory variables step-by-step."
  }
};

export const accentureData = {
  companyName: 'Accenture',
  studyPlan: [
    { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Two Pointer', 'Hashing'], path: '/prepare/dsa', completed: false, xpReward: 30 },
    { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: OOP', topics: ['Inheritance', 'Polymorphism', 'Abstractions'], path: '/prepare/core', completed: false, xpReward: 30 },
    { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Logic', topics: ['Goal: Solve 30 Questions'], path: '/prepare/aptitude', completed: false, xpReward: 30 },
    { id: 'revision', name: "Revision", duration: '30 Minutes', topicTitle: 'Revision', topics: ['Pseudocode Tracing Sheet', 'OOP Concepts', 'Logical Rules'], path: '/prepare', completed: false, xpReward: 10 }
  ],
  aiMentor: {
    dsaProblems: ['Move Zeroes', 'Two Sum II', 'Remove Duplicates'],
    coreTopics: ['Class Inheritance', 'Polymorphism Definition', 'Abstract Interface'],
    aptitudeGoal: 'Goal: Solve 30 Questions',
    aptitudeVal: '30 Qs',
    estStudyTime: '5 Hours',
    potentialXp: 90,
    difficulty: 'Easy-Medium',
    completionBonus: 20,
    streakBonus: 10
  },
  dailyChallenge: {
    id: 'move-zeroes',
    title: 'Move Zeroes',
    difficulty: 'Easy',
    solvedCount: 2950,
    path: '/prepare/dsa',
    relevance: 'Accenture frequently tests array partition patterns',
    pattern: 'Two Pointer',
    time: '12 mins',
    rank: '#92 global',
    pct: '80% Acceptance',
    leetcodeUrl: 'https://leetcode.com/problems/move-zeroes/'
  },
  roadmap: [
    { id: 1, name: 'Arrays', status: 'completed', path: '/prepare/dsa' },
    { id: 2, name: 'Basic OOP', status: 'completed', path: '/prepare/core' },
    { id: 3, name: 'Pseudocode Parsing', status: 'current', path: '/prepare/core' },
    { id: 4, name: 'Aptitude English', status: 'locked', path: '/prepare/aptitude' },
    { id: 5, name: 'Critical Reasoning', status: 'locked', path: '/prepare/aptitude' },
    { id: 6, name: 'Strings', status: 'locked', path: '/prepare/dsa' },
    { id: 7, name: 'DBMS SQL', status: 'locked', path: '/prepare/core' },
    { id: 8, name: 'Computer Networks', status: 'locked', path: '/prepare/core' },
    { id: 9, name: 'Accenture Mock', status: 'locked', path: '/prepare' },
    { id: 10, name: 'HR Interview', status: 'locked', path: '/prepare/interview' }
  ],
  readiness: { score: 32, completed: ['Arrays', 'Basic OOP'], remaining: ['Pseudocode Parsing', 'Accenture Mock', 'Interview'], path: '/prepare/company' },
  weakTopics: {
    topic: 'Pseudocode Parsing',
    accuracy: '42%',
    remaining: '10 Questions',
    focus: 'Loop Variables',
    revisionTime: '1.2 Hours',
    lastAttempt: '3 days ago',
    suggestion: 'Struggling with logic limits. Practice tracking variables in tables.'
  },
  recommendedProblems: [
    { name: 'Practice Group Anagrams', reason: 'Highly asked in Accenture advanced coding.', time: '25 Minutes', difficulty: 'Medium', xpReward: 20, path: '/prepare/dsa' },
    { name: 'Revise OSI Layers', reason: 'Frequent networking interview question.', time: '15 Minutes', difficulty: 'Easy', xpReward: 15, path: '/prepare/core' }
  ],
  mockAssessment: {
    name: 'Accenture Practice OA',
    duration: '100 Minutes',
    questions: 55,
    xpReward: 100,
    path: '/prepare/company',
    level: 'Medium',
    breakdown: { dsa: 15, core: 15, aptitude: 20, interview: 5 },
    passingScore: '70%',
    recommendedXp: 800,
    rewards: { badge: 'Accenture Readiness Spec', companyRank: 'Top 12%', readinessGain: '+7%' }
  },
  preparationTrack: { name: 'Accenture AASE Prep Track', category: 'General' },
  companyProgress: { coding: 45, core: 30, aptitude: 65, interview: 20, hr: 0 },
  nextTargets: ['Complete Pseudocode Parsing', 'Complete OOP Basics', 'Solve 3 PYQs'],
  targetMetrics: { rate: '72%', leaderboard: 'Top 10%', estTime: '25 mins' },
  pyq: {
    id: 'acc_pyq_01',
    title: 'Difference of Sum of Diagonals',
    difficulty: 'Easy',
    acceptance: '82%',
    year: 2024,
    solvedBy: 1940,
    avgTime: '15 min',
    xpReward: 20,
    skillReward: '+5 Skill Points',
    path: '/prepare/dsa',
    patterns: ['Arrays', 'Matrix', 'Linear Search']
  },
  tip: {
    hrTip: "Accenture HRs focus on communication skills and teamwork. Highlight collaborative projects.",
    techTip: "Be ready for pseudocode dry-runs, basic class inheritance logic, and verbal/logical aptitude loops.",
    commonMistake: "Skipping edge cases in pseudocode parsing tests.",
    quickAnswer: "Structure pseudocode analyses using clear variable tables."
  }
};

export const wiproData = {
  companyName: 'Wipro',
  studyPlan: [
    { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Strings', 'Sorting'], path: '/prepare/dsa', completed: false, xpReward: 30 },
    { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: Networks', topics: ['IP Addressing', 'TCP/UDP Protocols'], path: '/prepare/core', completed: false, xpReward: 30 },
    { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Verbal', topics: ['Goal: Solve 40 Questions'], path: '/prepare/aptitude', completed: false, xpReward: 30 },
    { id: 'revision', name: "Revision", duration: '30 Minutes', topicTitle: 'Revision', topics: ['Network OSI Model Summary', 'Basic Strings Tricks', 'Logical Formulas'], path: '/prepare', completed: false, xpReward: 10 }
  ],
  aiMentor: {
    dsaProblems: ['Valid Palindrome', 'Reverse String', 'Move Zeroes'],
    coreTopics: ['OSI Model Layers', 'TCP vs UDP', 'IPv4 vs IPv6 Addresses'],
    aptitudeGoal: 'Goal: Solve 40 Questions',
    aptitudeVal: '40 Qs',
    estStudyTime: '5 Hours',
    potentialXp: 90,
    difficulty: 'Easy',
    completionBonus: 15,
    streakBonus: 10
  },
  dailyChallenge: {
    id: 'valid-palindrome',
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    solvedCount: 4200,
    path: '/prepare/dsa',
    relevance: 'Standard question type tested in Wipro coding round',
    pattern: 'Two Pointer',
    time: '10 mins',
    rank: '#48 global',
    pct: '90% Acceptance',
    leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/'
  },
  roadmap: [
    { id: 1, name: 'Arrays & Lists', status: 'completed', path: '/prepare/dsa' },
    { id: 2, name: 'Process Control', status: 'completed', path: '/prepare/core' },
    { id: 3, name: 'Operating Systems', status: 'current', path: '/prepare/core' },
    { id: 4, name: 'DBMS SQL', status: 'locked', path: '/prepare/core' },
    { id: 5, name: 'Java Basics', status: 'locked', path: '/prepare/core' },
    { id: 6, name: 'Logical Reasoning', status: 'locked', path: '/prepare/aptitude' },
    { id: 7, name: 'Aptitude Quant', status: 'locked', path: '/prepare/aptitude' },
    { id: 8, name: 'English Verbal', status: 'locked', path: '/prepare/aptitude' },
    { id: 9, name: 'Wipro Mock Test', status: 'locked', path: '/prepare' },
    { id: 10, name: 'HR Interview', status: 'locked', path: '/prepare/interview' }
  ],
  readiness: { score: 27, completed: ['Arrays & Lists', 'Process Control'], remaining: ['Operating Systems', 'Wipro Mock Test', 'Interview'], path: '/prepare/company' },
  weakTopics: {
    topic: 'Operating Systems',
    accuracy: '46%',
    remaining: '6 Questions',
    focus: 'CPU Scheduling',
    revisionTime: '1.0 Hours',
    lastAttempt: '2 days ago',
    suggestion: 'Struggling with Gantt Charts. Practice Round Robin allocation schemas.'
  },
  recommendedProblems: [
    { name: 'Practice Merge Sorted Array', reason: 'Frequently asked in Wipro coding assessments.', time: '20 Minutes', difficulty: 'Easy', xpReward: 15, path: '/prepare/dsa' },
    { name: 'Revise SQL Joins', reason: 'Commonly asked database query question.', time: '15 Minutes', difficulty: 'Easy', xpReward: 15, path: '/prepare/core' }
  ],
  mockAssessment: {
    name: 'Wipro Elite Mock test',
    duration: '110 Minutes',
    questions: 52,
    xpReward: 100,
    path: '/prepare/company',
    level: 'Medium',
    breakdown: { dsa: 12, core: 15, aptitude: 20, interview: 5 },
    passingScore: '70%',
    recommendedXp: 700,
    rewards: { badge: 'Wipro Elite Stager', companyRank: 'Top 15%', readinessGain: '+6%' }
  },
  preparationTrack: { name: 'Wipro Elite Prep Track', category: 'General' },
  companyProgress: { coding: 40, core: 35, aptitude: 50, interview: 10, hr: 0 },
  nextTargets: ['Complete Two Pointer Strings', 'Complete Computer Networks', 'Solve 2 PYQs'],
  targetMetrics: { rate: '75%', leaderboard: 'Top 15%', estTime: '22 mins' },
  pyq: {
    id: 'wip_pyq_01',
    title: 'Check for Valid Anagram',
    difficulty: 'Easy',
    acceptance: '85%',
    year: 2024,
    solvedBy: 3100,
    avgTime: '12 min',
    xpReward: 25,
    skillReward: '+5 Skill Points',
    path: '/prepare/dsa',
    patterns: ['Strings', 'Hashing', 'Sorting']
  },
  tip: {
    hrTip: "Wipro HRs value adaptability and learning agility. Showcase your placement prep dedication.",
    techTip: "Revise OS CPU scheduling algorithms, database joins, and elementary coding control blocks.",
    commonMistake: "Confusing process scheduling with thread management.",
    quickAnswer: "Define processes as isolated execution environments and threads as shared memory segments."
  }
};

export const capgeminiData = {
  companyName: 'Capgemini',
  studyPlan: [
    { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Two Pointers', 'Hashing'], path: '/prepare/dsa', completed: false, xpReward: 30 },
    { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: SDLC', topics: ['Agile Methodology', 'Waterfall Model'], path: '/prepare/core', completed: false, xpReward: 30 },
    { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Game Tests', topics: ['Goal: Complete 8 Puzzle Stages'], path: '/prepare/aptitude', completed: false, xpReward: 30 },
    { id: 'revision', name: "Revision", duration: '30 Minutes', topicTitle: 'Revision', topics: ['Agile Framework Rules', 'Array Pointer Complexities', 'Logic Rules'], path: '/prepare', completed: false, xpReward: 10 }
  ],
  aiMentor: {
    dsaProblems: ['Merge Sorted Array', 'Two Sum', 'Valid Palindrome'],
    coreTopics: ['Agile Iterations', 'SDLC Models Differences', 'SQL Database Joins'],
    aptitudeGoal: 'Goal: Solve Game Puzzles',
    aptitudeVal: 'Game Test',
    estStudyTime: '5 Hours',
    potentialXp: 90,
    difficulty: 'Medium',
    completionBonus: 20,
    streakBonus: 10
  },
  dailyChallenge: {
    id: 'merge-sorted',
    title: 'Merge Sorted Array',
    difficulty: 'Easy',
    solvedCount: 3100,
    path: '/prepare/dsa',
    relevance: 'Standard arrays sorting and traversal pattern in Capgemini tests',
    pattern: 'Two Pointer',
    time: '15 mins',
    rank: '#112 global',
    pct: '76% Acceptance',
    leetcodeUrl: 'https://leetcode.com/problems/merge-sorted-array/'
  },
  roadmap: [
    { id: 1, name: 'Data Structures', status: 'completed', path: '/prepare/dsa' },
    { id: 2, name: 'Time & Work', status: 'completed', path: '/prepare/aptitude' },
    { id: 3, name: 'Aptitude Quant', status: 'current', path: '/prepare/aptitude' },
    { id: 4, name: 'OOP & Java', status: 'locked', path: '/prepare/core' },
    { id: 5, name: 'DBMS Queries', status: 'locked', path: '/prepare/core' },
    { id: 6, name: 'Pseudocode Analysis', status: 'locked', path: '/prepare/core' },
    { id: 7, name: 'Critical Reasoning', status: 'locked', path: '/prepare/aptitude' },
    { id: 8, name: 'Computer Networks', status: 'locked', path: '/prepare/core' },
    { id: 9, name: 'Capgemini Mock', status: 'locked', path: '/prepare' },
    { id: 10, name: 'HR Interview', status: 'locked', path: '/prepare/interview' }
  ],
  readiness: { score: 23, completed: ['Data Structures', 'Time & Work'], remaining: ['Aptitude Quant', 'Capgemini Mock', 'Interview'], path: '/prepare/company' },
  weakTopics: {
    topic: 'Pseudocode Analysis',
    accuracy: '38%',
    remaining: '8 Questions',
    focus: 'Logical Operations',
    revisionTime: '1.2 Hours',
    lastAttempt: '3 days ago',
    suggestion: 'Struggling with bitwise operations in code. Practice logic truth tables.'
  },
  recommendedProblems: [
    { name: 'Practice Squares of Sorted Array', reason: 'Asked in Capgemini mock test.', time: '15 Minutes', difficulty: 'Easy', xpReward: 15, path: '/prepare/dsa' },
    { name: 'Revise DB Normalization', reason: 'Highly asked database theory questions.', time: '20 Minutes', difficulty: 'Medium', xpReward: 20, path: '/prepare/core' }
  ],
  mockAssessment: {
    name: 'Capgemini Mock OA',
    duration: '100 Minutes',
    questions: 48,
    xpReward: 100,
    path: '/prepare/company',
    level: 'Medium',
    breakdown: { dsa: 10, core: 15, aptitude: 20, interview: 3 },
    passingScore: '75%',
    recommendedXp: 780,
    rewards: { badge: 'Capgemini Spec', companyRank: 'Top 12%', readinessGain: '+8%' }
  },
  preparationTrack: { name: 'Capgemini Analyst Prep Track', category: 'General' },
  companyProgress: { coding: 68, core: 20, aptitude: 20, interview: 5, hr: 0 },
  nextTargets: ['Complete Hashing', 'Complete DBMS Transactions', 'Solve 3 PYQs'],
  targetMetrics: { rate: '78%', leaderboard: 'Top 12%', estTime: '24 mins' },
  pyq: {
    id: 'cap_pyq_01',
    title: 'Merge Sorted Lists without Extra Space',
    difficulty: 'Hard',
    acceptance: '42%',
    year: 2024,
    solvedBy: 840,
    avgTime: '38 min',
    xpReward: 40,
    skillReward: '+20 Skill Points',
    path: '/prepare/dsa',
    patterns: ['Two Pointer', 'Linked List', 'Sort']
  },
  tip: {
    hrTip: "Show confidence and positive body language. Capgemini values structured presentation skills.",
    techTip: "Prepare for game-based logical tests, quant rules (Work/Time, Ratios), and fundamental OOP patterns.",
    commonMistake: "Underestimating the game-based assessments.",
    quickAnswer: "Maintain active pacing and pattern checks during active logical puzzles."
  }
};

export const cognizantData = {
  companyName: 'Cognizant',
  studyPlan: [
    { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Sliding Window', 'HashMap'], path: '/prepare/dsa', completed: false, xpReward: 30 },
    { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: Java', topics: ['ArrayList', 'HashMap', 'Garbage Collection'], path: '/prepare/core', completed: false, xpReward: 30 },
    { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Logic', topics: ['Goal: Solve 30 Questions'], path: '/prepare/aptitude', completed: false, xpReward: 30 },
    { id: 'revision', name: "Revision", duration: '30 Minutes', topicTitle: 'Revision', topics: ['Java Memory Models', 'Sliding Window Notes', 'Aptitude Cheatsheet'], path: '/prepare', completed: false, xpReward: 10 }
  ],
  aiMentor: {
    dsaProblems: ['Best Time to Buy & Sell Stock', 'Two Sum', 'Valid Palindrome'],
    coreTopics: ['Java HashMap Setup', 'Garbage Collection internals', 'SQL DB Indices'],
    aptitudeGoal: 'Goal: Solve 30 Questions',
    aptitudeVal: '30 Qs',
    estStudyTime: '5 Hours',
    potentialXp: 90,
    difficulty: 'Medium',
    completionBonus: 20,
    streakBonus: 10
  },
  dailyChallenge: {
    id: 'best-time-to-buy-and-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    solvedCount: 4500,
    path: '/prepare/dsa',
    relevance: 'Standard array traversal and min-tracking asked by Cognizant',
    pattern: 'Arrays / Greedy',
    time: '15 mins',
    rank: '#35 global',
    pct: '92% Acceptance',
    leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'
  },
  roadmap: [
    { id: 1, name: 'Arrays', status: 'completed', path: '/prepare/dsa' },
    { id: 2, name: 'Java OOP', status: 'completed', path: '/prepare/core' },
    { id: 3, name: 'String Manipulation', status: 'current', path: '/prepare/dsa' },
    { id: 4, name: 'SQL Joins', status: 'locked', path: '/prepare/core' },
    { id: 5, name: 'DBMS Basics', status: 'locked', path: '/prepare/core' },
    { id: 6, name: 'Aptitude Verbal', status: 'locked', path: '/prepare/aptitude' },
    { id: 7, name: 'Aptitude Quant', status: 'locked', path: '/prepare/aptitude' },
    { id: 8, name: 'Operating Systems', status: 'locked', path: '/prepare/core' },
    { id: 9, name: 'Cognizant Mock', status: 'locked', path: '/prepare' },
    { id: 10, name: 'HR Interview', status: 'locked', path: '/prepare/interview' }
  ],
  readiness: { score: 33, completed: ['Arrays', 'Java OOP'], remaining: ['String Manipulation', 'Cognizant Mock', 'Interview'], path: '/prepare/company' },
  weakTopics: {
    topic: 'String Manipulation',
    accuracy: '48%',
    remaining: '8 Questions',
    focus: 'Substring Searching',
    revisionTime: '1.2 Hours',
    lastAttempt: '2 days ago',
    suggestion: 'Struggling with string indices. Practice substrings and boundaries.'
  },
  recommendedProblems: [
    { name: 'Practice Container with Water', reason: 'Frequently asked in GenC Next exams.', time: '25 Minutes', difficulty: 'Medium', xpReward: 20, path: '/prepare/dsa' },
    { name: 'Revise Abstract Classes', reason: 'Highly asked Java interview concept.', time: '15 Minutes', difficulty: 'Easy', xpReward: 15, path: '/prepare/core' }
  ],
  mockAssessment: {
    name: 'Cognizant GenC Mock Test',
    duration: '100 Minutes',
    questions: 50,
    xpReward: 100,
    path: '/prepare/company',
    level: 'Medium',
    breakdown: { dsa: 15, core: 15, aptitude: 15, interview: 5 },
    passingScore: '70%',
    recommendedXp: 750,
    rewards: { badge: 'GenC Prep Special', companyRank: 'Top 10%', readinessGain: '+7%' }
  },
  preparationTrack: { name: 'Cognizant GenC Prep Track', category: 'General' },
  companyProgress: { coding: 55, core: 45, aptitude: 55, interview: 12, hr: 0 },
  nextTargets: ['Complete Java Collections', 'Complete SQL Joins', 'Solve 3 PYQs'],
  targetMetrics: { rate: '78%', leaderboard: 'Top 12%', estTime: '24 mins' },
  pyq: {
    id: 'cog_pyq_01',
    title: 'Find Next Greater Element',
    difficulty: 'Medium',
    acceptance: '58%',
    year: 2025,
    solvedBy: 1120,
    avgTime: '24 min',
    xpReward: 30,
    skillReward: '+10 Skill Points',
    path: '/prepare/dsa',
    patterns: ['Stack', 'Arrays', 'Monotonic Stack']
  },
  tip: {
    hrTip: "Explain how you handle project deadlines and feedback. Keep professional answers structured.",
    techTip: "Focus on Java collections (ArrayList, HashMap), JDBC query schemas, and relational SQL subqueries.",
    commonMistake: "Inability to differentiate abstract classes from interfaces.",
    quickAnswer: "State that abstract classes can hold states while interfaces define strict capabilities."
  }
};

export const ibmData = {
  companyName: 'IBM',
  studyPlan: [
    { id: 'dsa', name: 'DSA', duration: '2.5 Hours', topicTitle: 'Topics', topics: ['Graphs', 'BFS/DFS', 'Trees'], path: '/prepare/dsa', completed: false, xpReward: 30 },
    { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: OS/Cloud', topics: ['Virtualization', 'Containers', 'Memory Allocations'], path: '/prepare/core', completed: false, xpReward: 30 },
    { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Logic Puzzles', topics: ['Goal: Complete Traversal Games'], path: '/prepare/aptitude', completed: false, xpReward: 30 },
    { id: 'revision', name: "Revision", duration: '30 Minutes', topicTitle: 'Revision', topics: ['Graph Cycle Detections', 'Docker basics cheatsheet', 'Cognitive Tips'], path: '/prepare', completed: false, xpReward: 10 }
  ],
  aiMentor: {
    dsaProblems: ['Container With Most Water', 'Validate Binary Search Tree', 'Number of Islands'],
    coreTopics: ['Docker container boundaries', 'OS scheduling algorithms', 'Virtual memory paging'],
    aptitudeGoal: 'Goal: Solve Traversal Puzzles',
    aptitudeVal: 'Cognitive Test',
    estStudyTime: '6 Hours',
    potentialXp: 90,
    difficulty: 'Hard',
    completionBonus: 30,
    streakBonus: 10
  },
  dailyChallenge: {
    id: 'container-water',
    title: 'Container With Most Water',
    difficulty: 'Medium',
    solvedCount: 2200,
    path: '/prepare/dsa',
    relevance: 'Tested heavily in IBM technical coding test',
    pattern: 'Two Pointer',
    time: '25 mins',
    rank: '#158 global',
    pct: '65% Acceptance',
    leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/'
  },
  roadmap: [
    { id: 1, name: 'Data Structures', status: 'completed', path: '/prepare/dsa' },
    { id: 2, name: 'Search Algorithms', status: 'completed', path: '/prepare/dsa' },
    { id: 3, name: 'Graph BFS/DFS', status: 'current', path: '/prepare/dsa' },
    { id: 4, name: 'Operating Systems', status: 'locked', path: '/prepare/core' },
    { id: 5, name: 'Python Decorators', status: 'locked', path: '/prepare/core' },
    { id: 6, name: 'Cloud Computing', status: 'locked', path: '/prepare/core' },
    { id: 7, name: 'Computer Networks', status: 'locked', path: '/prepare/core' },
    { id: 8, name: 'Aptitude Cognitive', status: 'locked', path: '/prepare/aptitude' },
    { id: 9, name: 'IBM Hackathon Mock', status: 'locked', path: '/prepare' },
    { id: 10, name: 'HR Interview', status: 'locked', path: '/prepare/interview' }
  ],
  readiness: { score: 35, completed: ['Data Structures', 'Search Algorithms'], remaining: ['Graph BFS/DFS', 'IBM Hackathon Mock', 'Interview'], path: '/prepare/company' },
  weakTopics: {
    topic: 'Graph Traversal',
    accuracy: '32%',
    remaining: '15 Questions',
    focus: 'DFS recursion limits',
    revisionTime: '2.0 Hours',
    lastAttempt: '4 days ago',
    suggestion: 'Struggling with cycle states. Practice visited boolean maps.'
  },
  recommendedProblems: [
    { name: 'Practice Validate BST', reason: 'Highly asked in IBM OA.', time: '30 Minutes', difficulty: 'Medium', xpReward: 20, path: '/prepare/dsa' },
    { name: 'Revise Docker Commands', reason: 'IBM cloud-focused interview questions.', time: '15 Minutes', difficulty: 'Easy', xpReward: 15, path: '/prepare/core' }
  ],
  mockAssessment: {
    name: 'IBM Hackathon Mock Test',
    duration: '120 Minutes',
    questions: 45,
    xpReward: 100,
    path: '/prepare/company',
    level: 'Hard',
    breakdown: { dsa: 20, core: 10, aptitude: 10, interview: 5 },
    passingScore: '75%',
    recommendedXp: 850,
    rewards: { badge: 'IBM System Spec', companyRank: 'Top 8%', readinessGain: '+9%' }
  },
  preparationTrack: { name: 'IBM Developer Prep Track', category: 'General' },
  companyProgress: { coding: 80, core: 55, aptitude: 30, interview: 10, hr: 0 },
  nextTargets: ['Complete Dynamic Programming', 'Complete Operating Systems', 'Complete System Design'],
  targetMetrics: { rate: '80%', leaderboard: 'Top 10%', estTime: '30 mins' },
  pyq: {
    id: 'ibm_pyq_01',
    title: 'Detect Cycle in Directed Graph',
    difficulty: 'Hard',
    acceptance: '35%',
    year: 2025,
    solvedBy: 620,
    avgTime: '45 min',
    xpReward: 45,
    skillReward: '+25 Skill Points',
    path: '/prepare/dsa',
    patterns: ['Graphs', 'DFS', 'BFS']
  },
  tip: {
    hrTip: "Demonstrate curiosity about modern cloud platforms, storage APIs, and hybrid architecture setups.",
    techTip: "Study graph trees (BFS/DFS), cognitive logical targets, and advanced recursion methods.",
    commonMistake: "Confusing cycle detection parameters in undirected vs directed graphs.",
    quickAnswer: "Directed graphs require traversal state records (visiting, visited) to verify cycle traces."
  }
};

export const ltiMindtreeData = {
  companyName: 'LTIMindtree',
  studyPlan: [
    { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Hashing', 'Arrays', 'Two Pointer'], path: '/prepare/dsa', completed: false, xpReward: 30 },
    { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: DBMS', topics: ['Clustered Index', 'Non-Clustered Index', 'SQL Keys'], path: '/prepare/core', completed: false, xpReward: 30 },
    { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Ratios', topics: ['Goal: Solve 35 Questions'], path: '/prepare/aptitude', completed: false, xpReward: 30 },
    { id: 'revision', name: "Revision", duration: '30 Minutes', topicTitle: 'Revision', topics: ['Hashing Complexities', 'Index Tracing Sheet', 'Ratio shortcuts'], path: '/prepare', completed: false, xpReward: 10 }
  ],
  aiMentor: {
    dsaProblems: ['3Sum', 'Two Sum', 'Move Zeroes'],
    coreTopics: ['Clustered Indexes', 'Unique constraints vs Primary Keys', 'SQL DB normalization rules'],
    aptitudeGoal: 'Goal: Solve 35 Questions',
    aptitudeVal: '35 Qs',
    estStudyTime: '5 Hours',
    potentialXp: 90,
    difficulty: 'Medium',
    completionBonus: 22,
    streakBonus: 10
  },
  dailyChallenge: {
    id: 'three-sum',
    title: '3Sum',
    difficulty: 'Medium',
    solvedCount: 1850,
    path: '/prepare/dsa',
    relevance: 'Very common hashing and sorting optimization problem for LTIMindtree',
    pattern: 'Two Pointer / Sort',
    time: '25 mins',
    rank: '#142 global',
    pct: '56% Acceptance',
    leetcodeUrl: 'https://leetcode.com/problems/3sum/'
  },
  roadmap: [
    { id: 1, name: 'Array Sorts', status: 'completed', path: '/prepare/dsa' },
    { id: 2, name: 'Hash Map Setup', status: 'completed', path: '/prepare/dsa' },
    { id: 3, name: 'Hashing Arrays', status: 'current', path: '/prepare/dsa' },
    { id: 4, name: 'DBMS Indexes', status: 'locked', path: '/prepare/core' },
    { id: 5, name: 'OOP Inheritance', status: 'locked', path: '/prepare/core' },
    { id: 6, name: 'Aptitude Speed', status: 'locked', path: '/prepare/aptitude' },
    { id: 7, name: 'Quant Ratios', status: 'locked', path: '/prepare/aptitude' },
    { id: 8, name: 'Logical Tracing', status: 'locked', path: '/prepare/aptitude' },
    { id: 9, name: 'LTI Mock Exam', status: 'locked', path: '/prepare' },
    { id: 10, name: 'HR Interview', status: 'locked', path: '/prepare/interview' }
  ],
  readiness: { score: 33, completed: ['Array Sorts', 'Hash Map Setup'], remaining: ['Hashing Arrays', 'LTI Mock Exam', 'Interview'], path: '/prepare/company' },
  weakTopics: {
    topic: 'Hashing Arrays',
    accuracy: '44%',
    remaining: '8 Questions',
    focus: 'Collision handling',
    revisionTime: '1.2 Hours',
    lastAttempt: '2 days ago',
    suggestion: 'Struggling with hash conflicts. Review chaining and open addressing.'
  },
  recommendedProblems: [
    { name: 'Practice Longest Palindromic Substring', reason: 'Asked in LTIMindtree tests.', time: '30 Minutes', difficulty: 'Medium', xpReward: 20, path: '/prepare/dsa' },
    { name: 'Revise DBMS SQL Keys', reason: 'Common database query questions.', time: '15 Minutes', difficulty: 'Easy', xpReward: 15, path: '/prepare/core' }
  ],
  mockAssessment: {
    name: 'LTI Practice Mock OA',
    duration: '100 Minutes',
    questions: 50,
    xpReward: 100,
    path: '/prepare/company',
    level: 'Medium',
    breakdown: { dsa: 15, core: 15, aptitude: 15, interview: 5 },
    passingScore: '72%',
    recommendedXp: 800,
    rewards: { badge: 'LTI OA Master', companyRank: 'Top 10%', readinessGain: '+7%' }
  },
  preparationTrack: { name: 'LTIMindtree SE Prep Track', category: 'General' },
  companyProgress: { coding: 60, core: 50, aptitude: 45, interview: 8, hr: 0 },
  nextTargets: ['Complete Hashing Arrays', 'Complete SQL Keys', 'Solve 3 PYQs'],
  targetMetrics: { rate: '70%', leaderboard: 'Top 10%', estTime: '25 mins' },
  pyq: {
    id: 'lti_pyq_01',
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    acceptance: '52%',
    year: 2025,
    solvedBy: 980,
    avgTime: '32 min',
    xpReward: 30,
    skillReward: '+12 Skill Points',
    path: '/prepare/dsa',
    patterns: ['Strings', 'Dynamic Programming', 'Expansion']
  },
  tip: {
    hrTip: "Willingness to learn. Showcase your self-taught projects and placement preparedness streaks.",
    techTip: "Focus on hashing systems, string matching arrays, SQL keys, and object-oriented fundamentals.",
    commonMistake: "Vague explanations of primary keys vs unique constraints.",
    quickAnswer: "A table has only one primary key that restricts nulls; unique keys accept a single null."
  }
};

export const deloitteData = {
  companyName: 'Deloitte',
  studyPlan: [
    { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Hashing', 'Strings'], path: '/prepare/dsa', completed: false, xpReward: 30 },
    { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: SE', topics: ['SDLC Models', 'Agile & Scrum', 'Testing Types'], path: '/prepare/core', completed: false, xpReward: 30 },
    { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Case Studies', topics: ['Goal: Solve 4 Business Scenarios'], path: '/prepare/aptitude', completed: false, xpReward: 30 },
    { id: 'revision', name: "Revision", duration: '30 Minutes', topicTitle: 'Revision', topics: ['Scrum master roles', 'Agile cheatsheet', 'Business case solutions'], path: '/prepare', completed: false, xpReward: 10 }
  ],
  aiMentor: {
    dsaProblems: ['Group Anagrams', 'Two Sum', 'Move Zeroes'],
    coreTopics: ['Agile Sprint definitions', 'SDLC Scrum cycle states', 'Database index tables'],
    aptitudeGoal: 'Goal: Solve 4 Case Studies',
    aptitudeVal: 'Case Prep',
    estStudyTime: '5 Hours',
    potentialXp: 90,
    difficulty: 'Medium',
    completionBonus: 20,
    streakBonus: 10
  },
  dailyChallenge: {
    id: 'group-anagrams',
    title: 'Group Anagrams Together',
    difficulty: 'Medium',
    solvedCount: 2300,
    path: '/prepare/dsa',
    relevance: 'Deloitte tests hashing and grouping algorithms in coding tests',
    pattern: 'HashMap / Sorting',
    time: '25 mins',
    rank: '#115 global',
    pct: '60% Acceptance',
    leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/'
  },
  roadmap: [
    { id: 1, name: 'Arrays & Tables', status: 'completed', path: '/prepare/dsa' },
    { id: 2, name: 'Relational DBMS', status: 'completed', path: '/prepare/core' },
    { id: 3, name: 'SQL Joins', status: 'current', path: '/prepare/core' },
    { id: 4, name: 'Aptitude Logic', status: 'locked', path: '/prepare/aptitude' },
    { id: 5, name: 'SDLC Models', status: 'locked', path: '/prepare/core' },
    { id: 6, name: 'OOP Fundamentals', status: 'locked', path: '/prepare/core' },
    { id: 7, name: 'Quant Stats', status: 'locked', path: '/prepare/aptitude' },
    { id: 8, name: 'Business Case study', status: 'locked', path: '/prepare' },
    { id: 9, name: 'Deloitte Mock round', status: 'locked', path: '/prepare' },
    { id: 10, name: 'HR Interview', status: 'locked', path: '/prepare/interview' }
  ],
  readiness: { score: 39, completed: ['Arrays & Tables', 'Relational DBMS'], remaining: ['SQL Joins', 'Deloitte Mock round', 'Interview'], path: '/prepare/company' },
  weakTopics: {
    topic: 'SQL Joins',
    accuracy: '50%',
    remaining: '6 Questions',
    focus: 'Outer Joins',
    revisionTime: '1.0 Hours',
    lastAttempt: '2 days ago',
    suggestion: 'Struggling with full outer join syntax. Practice complex query joins.'
  },
  recommendedProblems: [
    { name: 'Practice Valid Palindrome', reason: 'Deloitte basic placement test questions.', time: '15 Minutes', difficulty: 'Easy', xpReward: 15, path: '/prepare/dsa' },
    { name: 'Revise Agile Manifesto', reason: 'High weightage Deloitte consultant interviews.', time: '15 Minutes', difficulty: 'Easy', xpReward: 15, path: '/prepare/core' }
  ],
  mockAssessment: {
    name: 'Deloitte Mock round',
    duration: '90 Minutes',
    questions: 40,
    xpReward: 100,
    path: '/prepare/company',
    level: 'Medium',
    breakdown: { dsa: 10, core: 15, aptitude: 10, interview: 5 },
    passingScore: '70%',
    recommendedXp: 750,
    rewards: { badge: 'Deloitte Ready Badge', companyRank: 'Top 12%', readinessGain: '+7%' }
  },
  preparationTrack: { name: 'Deloitte Consultant Track', category: 'General' },
  companyProgress: { coding: 30, core: 60, aptitude: 80, interview: 25, hr: 0 },
  nextTargets: ['Complete SQL Joins', 'Complete Agile Scrum Basics', 'Solve 4 PYQs'],
  targetMetrics: { rate: '70%', leaderboard: 'Top 12%', estTime: '25 mins' },
  pyq: {
    id: 'del_pyq_01',
    title: 'Group Anagrams Together',
    difficulty: 'Medium',
    acceptance: '60%',
    year: 2024,
    solvedBy: 1250,
    avgTime: '25 min',
    xpReward: 30,
    skillReward: '+10 Skill Points',
    path: '/prepare/dsa',
    patterns: ['Strings', 'Hashing', 'Sorting']
  },
  tip: {
    hrTip: "Deloitte values consultancy skills. Speak clearly about requirements gathering and target solutions.",
    techTip: "Be strong on advanced SQL joins, SDLC agile models, and business case aptitude scenarios.",
    commonMistake: "Focus solely on coding and ignoring process flows and client context.",
    quickAnswer: "Combine technical design patterns with high-level business goals."
  }
};

export const companyConfigs = {
  Infosys: infosysData,
  TCS: tcsData,
  Accenture: accentureData,
  Wipro: wiproData,
  Capgemini: capgeminiData,
  Cognizant: cognizantData,
  IBM: ibmData,
  LTIMindtree: ltiMindtreeData,
  Deloitte: deloitteData
};

// Legacy Exports for backward compatibility
export const readinessData = {
  Infosys: infosysData.readiness,
  TCS: tcsData.readiness,
  Accenture: accentureData.readiness,
  Wipro: wiproData.readiness,
  Capgemini: capgeminiData.readiness,
  Cognizant: cognizantData.readiness,
  IBM: ibmData.readiness,
  LTIMindtree: ltiMindtreeData.readiness,
  Deloitte: deloitteData.readiness
};

export const companyRoadmaps = {
  Infosys: infosysData.roadmap,
  TCS: tcsData.roadmap,
  Accenture: accentureData.roadmap,
  Wipro: wiproData.roadmap,
  Capgemini: capgeminiData.roadmap,
  Cognizant: cognizantData.roadmap,
  IBM: ibmData.roadmap,
  LTIMindtree: ltiMindtreeData.roadmap,
  Deloitte: deloitteData.roadmap
};

export const companyProgressData = {
  Infosys: infosysData.companyProgress,
  TCS: tcsData.companyProgress,
  Accenture: accentureData.companyProgress,
  Wipro: wiproData.companyProgress,
  Capgemini: capgeminiData.companyProgress,
  Cognizant: cognizantData.companyProgress,
  IBM: ibmData.companyProgress,
  LTIMindtree: ltiMindtreeData.companyProgress,
  Deloitte: deloitteData.companyProgress
};

export const companyPyqData = {
  Infosys: infosysData.pyq,
  TCS: tcsData.pyq,
  Accenture: accentureData.pyq,
  Wipro: wiproData.pyq,
  Capgemini: capgeminiData.pyq,
  Cognizant: cognizantData.pyq,
  IBM: ibmData.pyq,
  LTIMindtree: ltiMindtreeData.pyq,
  Deloitte: deloitteData.pyq
};

export const companyTipsData = {
  Infosys: infosysData.tip,
  TCS: tcsData.tip,
  Accenture: accentureData.tip,
  Wipro: wiproData.tip,
  Capgemini: capgeminiData.tip,
  Cognizant: cognizantData.tip,
  IBM: ibmData.tip,
  LTIMindtree: ltiMindtreeData.tip,
  Deloitte: deloitteData.tip
};

export const smartNextStepData = {
  Infosys: { ...infosysData.aiMentor, path: '/prepare/dsa' },
  TCS: { ...tcsData.aiMentor, path: '/prepare/dsa' },
  Accenture: { ...accentureData.aiMentor, path: '/prepare/dsa' },
  Wipro: { ...wiproData.aiMentor, path: '/prepare/dsa' },
  Capgemini: { ...capgeminiData.aiMentor, path: '/prepare/dsa' },
  Cognizant: { ...cognizantData.aiMentor, path: '/prepare/dsa' },
  IBM: { ...ibmData.aiMentor, path: '/prepare/dsa' },
  LTIMindtree: { ...ltiMindtreeData.aiMentor, path: '/prepare/dsa' },
  Deloitte: { ...deloitteData.aiMentor, path: '/prepare/dsa' }
};

export const dailyChallengeData = infosysData.dailyChallenge;
export const upcomingMockTestData = infosysData.mockAssessment;

export const weeklyStats = {
  solved: 18,
  hours: 9.5,
  accuracy: 82,
  bestTopic: 'Arrays'
};

export const quotesList = [
  "Consistency beats intensity.",
  "Complete one topic today.",
  "Stay focused."
];
