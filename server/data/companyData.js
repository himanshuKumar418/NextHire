// Static company configuration objects for Placement Prep Dashboard

export const companyConfigs = {
  Infosys: {
    companyName: 'Infosys',
    'Study Plan': [
      { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Two Pointers', 'Sliding Window'], path: '/prepare/dsa', xpReward: 30 },
      { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: DBMS', topics: ['Joins', 'Normalization', 'Transactions'], path: '/prepare/core', xpReward: 30 },
      { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Time & Work', topics: ['Goal: Solve 40 Questions'], path: '/prepare/aptitude', xpReward: 30 },
      { id: 'revision', name: 'Revision', duration: '30 Minutes', topicTitle: 'Revision', topics: ['Sliding Window Notes', 'DBMS Normalization', 'Aptitude Formulas'], path: '/prepare', xpReward: 10 }
    ],
    'DSA Questions': ['Two Sum', 'Best Time to Buy Stock', 'Move Zeroes'],
    'Core Subjects': ['DBMS Normalization', 'SQL Joins', 'ACID Properties'],
    'Aptitude Topics': ['Time & Work', 'Percentages', 'Ratios'],
    'Interview Topics': ['Behavioral', 'Resume walkthrough', 'Adaptability'],
    PYQ: {
      id: 'inf_pyq_01',
      title: 'Unique Paths in Grid',
      difficulty: 'Medium',
      acceptance: '64%',
      avgTime: '28 min',
      xpReward: 30,
      leetcodeUrl: 'https://leetcode.com/problems/unique-paths/'
    },
    Mock: {
      name: 'Infosys Full Mock',
      duration: '120 Minutes',
      questions: 60,
      level: 'Medium-Hard'
    },
    Roadmap: [
      { id: 1, name: 'Arrays', status: 'completed', path: '/prepare/dsa' },
      { id: 2, name: 'Strings', status: 'completed', path: '/prepare/dsa' },
      { id: 3, name: 'Sliding Window', status: 'current', path: '/prepare/dsa' },
      { id: 4, name: 'Binary Search', status: 'locked', path: '/prepare/dsa' }
    ],
    'AI Recommendation': {
      dsaProblems: ['Two Sum', 'Best Time to Buy Stock', 'Move Zeroes'],
      coreTopics: ['DBMS Normalization', 'SQL Joins', 'ACID Properties'],
      aptitudeGoal: 'Solve 40 Questions',
      aptitudeVal: '40 Qs',
      estStudyTime: '5 Hours',
      potentialXp: 90,
      difficulty: 'Medium',
      completionBonus: 25,
      streakBonus: 10
    },
    'Daily Challenge': {
      id: 'trapping-rain-water',
      title: 'Trapping Rain Water',
      difficulty: 'Hard',
      relevance: 'Asked in Amazon and Infosys OA',
      pattern: 'Two Pointer',
      time: '35 mins',
      leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/'
    }
  },
  TCS: {
    companyName: 'TCS',
    'Study Plan': [
      { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Sorting', 'Strings'], path: '/prepare/dsa', xpReward: 30 },
      { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: OS', topics: ['CPU Scheduling', 'Memory Management'], path: '/prepare/core', xpReward: 30 },
      { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Percentages', topics: ['Goal: Solve 35 Questions'], path: '/prepare/aptitude', xpReward: 30 },
      { id: 'revision', name: 'Revision', duration: '30 Minutes', topicTitle: 'Revision', topics: ['OS Scheduler Cheat Sheet', 'Aptitude Formulas', 'Sorting Complexities'], path: '/prepare', xpReward: 10 }
    ],
    'DSA Questions': ['Two Sum', 'Move Zeroes', 'Squares of Sorted Array'],
    'Core Subjects': ['CPU Scheduling', 'Paging', 'Virtual Memory'],
    'Aptitude Topics': ['Percentages', 'Time & Distance', 'Averages'],
    'Interview Topics': ['TCS Ninja Profile', 'Basic Java', 'OOP Definitions'],
    PYQ: {
      id: 'tcs_pyq_01',
      title: 'Prime Fibonacci Series',
      difficulty: 'Easy',
      acceptance: '78%',
      avgTime: '18 min',
      xpReward: 30,
      leetcodeUrl: 'https://leetcode.com/problems/fibonacci-number/'
    },
    Mock: {
      name: 'TCS NQT Mock OA',
      duration: '90 Minutes',
      questions: 50,
      level: 'Medium'
    },
    Roadmap: [
      { id: 1, name: 'Arrays', status: 'completed', path: '/prepare/dsa' },
      { id: 2, name: 'Aptitude Basics', status: 'completed', path: '/prepare/aptitude' },
      { id: 3, name: 'SQL Subqueries', status: 'current', path: '/prepare/core' },
      { id: 4, name: 'DBMS Indexing', status: 'locked', path: '/prepare/core' }
    ],
    'AI Recommendation': {
      dsaProblems: ['Two Sum', 'Move Zeroes', 'Squares of Sorted Array'],
      coreTopics: ['CPU Scheduling', 'Paging', 'Virtual Memory'],
      aptitudeGoal: 'Solve 35 Questions',
      aptitudeVal: '35 Qs',
      estStudyTime: '5 Hours',
      potentialXp: 90,
      difficulty: 'Easy-Medium',
      completionBonus: 20,
      streakBonus: 10
    },
    'Daily Challenge': {
      id: 'two-sum',
      title: 'Two Sum',
      difficulty: 'Easy',
      relevance: 'Common in TCS NQT coding section',
      pattern: 'Hash Map',
      time: '15 mins',
      leetcodeUrl: 'https://leetcode.com/problems/two-sum/'
    }
  },
  Accenture: {
    companyName: 'Accenture',
    'Study Plan': [
      { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Two Pointer', 'Hashing'], path: '/prepare/dsa', xpReward: 30 },
      { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: OOP', topics: ['Inheritance', 'Polymorphism', 'Abstractions'], path: '/prepare/core', xpReward: 30 },
      { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Logic', topics: ['Goal: Solve 30 Questions'], path: '/prepare/aptitude', xpReward: 30 },
      { id: 'revision', name: 'Revision', duration: '30 Minutes', topicTitle: 'Revision', topics: ['Pseudocode Tracing Sheet', 'OOP Concepts', 'Logical Rules'], path: '/prepare', xpReward: 10 }
    ],
    'DSA Questions': ['Move Zeroes', 'Two Sum II', 'Remove Duplicates'],
    'Core Subjects': ['Class Inheritance', 'Polymorphism Definition', 'Abstract Interface'],
    'Aptitude Topics': ['Logical Reasoning', 'Syllogisms', 'Coding Decoding'],
    'Interview Topics': ['Communication skills', 'Project description', 'Adaptability'],
    PYQ: {
      id: 'acc_pyq_01',
      title: 'Difference of Sum of Diagonals',
      difficulty: 'Easy',
      acceptance: '82%',
      avgTime: '15 min',
      xpReward: 30,
      leetcodeUrl: 'https://leetcode.com/problems/diagonal-traverse/'
    },
    Mock: {
      name: 'Accenture Practice OA',
      duration: '100 Minutes',
      questions: 55,
      level: 'Medium'
    },
    Roadmap: [
      { id: 1, name: 'Arrays', status: 'completed', path: '/prepare/dsa' },
      { id: 2, name: 'Basic OOP', status: 'completed', path: '/prepare/core' },
      { id: 3, name: 'Pseudocode Parsing', status: 'current', path: '/prepare/core' },
      { id: 4, name: 'Aptitude English', status: 'locked', path: '/prepare/aptitude' }
    ],
    'AI Recommendation': {
      dsaProblems: ['Move Zeroes', 'Two Sum II', 'Remove Duplicates'],
      coreTopics: ['Class Inheritance', 'Polymorphism Definition', 'Abstract Interface'],
      aptitudeGoal: 'Solve 30 Questions',
      aptitudeVal: '30 Qs',
      estStudyTime: '5 Hours',
      potentialXp: 90,
      difficulty: 'Easy-Medium',
      completionBonus: 20,
      streakBonus: 10
    },
    'Daily Challenge': {
      id: 'move-zeroes',
      title: 'Move Zeroes',
      difficulty: 'Easy',
      relevance: 'Accenture tests array partition patterns',
      pattern: 'Two Pointer',
      time: '12 mins',
      leetcodeUrl: 'https://leetcode.com/problems/move-zeroes/'
    }
  },
  Wipro: {
    companyName: 'Wipro',
    'Study Plan': [
      { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Strings', 'Sorting'], path: '/prepare/dsa', xpReward: 30 },
      { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: Networks', topics: ['IP Addressing', 'TCP/UDP Protocols'], path: '/prepare/core', xpReward: 30 },
      { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Verbal', topics: ['Goal: Solve 40 Questions'], path: '/prepare/aptitude', xpReward: 30 },
      { id: 'revision', name: 'Revision', duration: '30 Minutes', topicTitle: 'Revision', topics: ['Network OSI Model Summary', 'Basic Strings Tricks', 'Logical Formulas'], path: '/prepare', xpReward: 10 }
    ],
    'DSA Questions': ['Valid Palindrome', 'Reverse String', 'Move Zeroes'],
    'Core Subjects': ['OSI Model Layers', 'TCP vs UDP', 'IPv4 vs IPv6 Addresses'],
    'Aptitude Topics': ['Verbal Ability', 'Sentence Correction', 'Ratios'],
    'Interview Topics': ['Loyalty check', 'Project overview', 'Tech fundamentals'],
    PYQ: {
      id: 'wip_pyq_01',
      title: 'Check for Valid Anagram',
      difficulty: 'Easy',
      acceptance: '85%',
      avgTime: '12 min',
      xpReward: 30,
      leetcodeUrl: 'https://leetcode.com/problems/valid-anagram/'
    },
    Mock: {
      name: 'Wipro Elite Mock test',
      duration: '110 Minutes',
      questions: 52,
      level: 'Medium'
    },
    Roadmap: [
      { id: 1, name: 'Arrays & Lists', status: 'completed', path: '/prepare/dsa' },
      { id: 2, name: 'Process Control', status: 'completed', path: '/prepare/core' },
      { id: 3, name: 'Operating Systems', status: 'current', path: '/prepare/core' },
      { id: 4, name: 'DBMS SQL', status: 'locked', path: '/prepare/core' }
    ],
    'AI Recommendation': {
      dsaProblems: ['Valid Palindrome', 'Reverse String', 'Move Zeroes'],
      coreTopics: ['OSI Model Layers', 'TCP vs UDP', 'IPv4 vs IPv6 Addresses'],
      aptitudeGoal: 'Solve 40 Questions',
      aptitudeVal: '40 Qs',
      estStudyTime: '5 Hours',
      potentialXp: 90,
      difficulty: 'Easy',
      completionBonus: 15,
      streakBonus: 10
    },
    'Daily Challenge': {
      id: 'valid-palindrome',
      title: 'Valid Palindrome',
      difficulty: 'Easy',
      relevance: 'Standard question type tested in Wipro coding round',
      pattern: 'Two Pointer',
      time: '10 mins',
      leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/'
    }
  },
  Capgemini: {
    companyName: 'Capgemini',
    'Study Plan': [
      { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Two Pointers', 'Hashing'], path: '/prepare/dsa', xpReward: 30 },
      { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: SDLC', topics: ['Agile Methodology', 'Waterfall Model'], path: '/prepare/core', xpReward: 30 },
      { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Game Tests', topics: ['Goal: Complete 8 Puzzle Stages'], path: '/prepare/aptitude', xpReward: 30 },
      { id: 'revision', name: 'Revision', duration: '30 Minutes', topicTitle: 'Revision', topics: ['Agile Framework Rules', 'Array Pointer Complexities', 'Logic Rules'], path: '/prepare', xpReward: 10 }
    ],
    'DSA Questions': ['Two Sum', 'Remove Duplicates', 'Squares of Sorted Array'],
    'Core Subjects': ['Agile Iterations', 'SDLC Models Differences', 'SQL Database Joins'],
    'Aptitude Topics': ['Game Puzzles', 'Inductive Logic', 'Critical Reasoning'],
    'Interview Topics': ['Communication Skill Check', 'Java Fundamentals', 'Agile Process'],
    PYQ: {
      id: 'cap_pyq_01',
      title: 'Merge Sorted Lists without Extra Space',
      difficulty: 'Hard',
      acceptance: '42%',
      avgTime: '38 min',
      xpReward: 30,
      leetcodeUrl: 'https://leetcode.com/problems/merge-sorted-array/'
    },
    Mock: {
      name: 'Capgemini Mock OA',
      duration: '100 Minutes',
      questions: 48,
      level: 'Medium'
    },
    Roadmap: [
      { id: 1, name: 'Data Structures', status: 'completed', path: '/prepare/dsa' },
      { id: 2, name: 'Time & Work', status: 'completed', path: '/prepare/aptitude' },
      { id: 3, name: 'Aptitude Quant', status: 'current', path: '/prepare/aptitude' },
      { id: 4, name: 'OOP & Java', status: 'locked', path: '/prepare/core' }
    ],
    'AI Recommendation': {
      dsaProblems: ['Two Sum', 'Remove Duplicates', 'Squares of Sorted Array'],
      coreTopics: ['Agile Iterations', 'SDLC Models Differences', 'SQL Database Joins'],
      aptitudeGoal: 'Solve Game Puzzles',
      aptitudeVal: 'Game Test',
      estStudyTime: '5 Hours',
      potentialXp: 90,
      difficulty: 'Medium',
      completionBonus: 20,
      streakBonus: 10
    },
    'Daily Challenge': {
      id: 'merge-sorted',
      title: 'Merge Sorted Array',
      difficulty: 'Easy',
      relevance: 'Standard arrays sorting in Capgemini tests',
      pattern: 'Two Pointer',
      time: '15 mins',
      leetcodeUrl: 'https://leetcode.com/problems/merge-sorted-array/'
    }
  },
  Cognizant: {
    companyName: 'Cognizant',
    'Study Plan': [
      { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Sliding Window', 'HashMap'], path: '/prepare/dsa', xpReward: 30 },
      { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: Java', topics: ['ArrayList', 'HashMap', 'Garbage Collection'], path: '/prepare/core', xpReward: 30 },
      { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Logic', topics: ['Goal: Solve 30 Questions'], path: '/prepare/aptitude', xpReward: 30 },
      { id: 'revision', name: 'Revision', duration: '30 Minutes', topicTitle: 'Revision', topics: ['Java Memory Models', 'Sliding Window Notes', 'Aptitude Cheatsheet'], path: '/prepare', xpReward: 10 }
    ],
    'DSA Questions': ['Best Time to Buy & Sell Stock', 'Two Sum', 'Valid Palindrome'],
    'Core Subjects': ['Java HashMap Setup', 'Garbage Collection internals', 'SQL DB Indices'],
    'Aptitude Topics': ['Critical Reasoning', 'Data Interpretation', 'Ratios'],
    'Interview Topics': ['Java OOP Basics', 'DBMS Queries', 'Project explanation'],
    PYQ: {
      id: 'cog_pyq_01',
      title: 'Find Next Greater Element',
      difficulty: 'Medium',
      acceptance: '58%',
      avgTime: '24 min',
      xpReward: 30,
      leetcodeUrl: 'https://leetcode.com/problems/next-greater-element-i/'
    },
    Mock: {
      name: 'Cognizant GenC Mock Test',
      duration: '100 Minutes',
      questions: 50,
      level: 'Medium'
    },
    Roadmap: [
      { id: 1, name: 'Arrays', status: 'completed', path: '/prepare/dsa' },
      { id: 2, name: 'Java OOP', status: 'completed', path: '/prepare/core' },
      { id: 3, name: 'String Manipulation', status: 'current', path: '/prepare/dsa' },
      { id: 4, name: 'SQL Joins', status: 'locked', path: '/prepare/core' }
    ],
    'AI Recommendation': {
      dsaProblems: ['Best Time to Buy & Sell Stock', 'Two Sum', 'Valid Palindrome'],
      coreTopics: ['Java HashMap Setup', 'Garbage Collection internals', 'SQL DB Indices'],
      aptitudeGoal: 'Solve 30 Questions',
      aptitudeVal: '30 Qs',
      estStudyTime: '5 Hours',
      potentialXp: 90,
      difficulty: 'Medium',
      completionBonus: 20,
      streakBonus: 10
    },
    'Daily Challenge': {
      id: 'best-time-to-buy-and-sell-stock',
      title: 'Best Time to Buy and Sell Stock',
      difficulty: 'Easy',
      relevance: 'Standard array traversal and min-tracking asked by Cognizant',
      pattern: 'Greedy',
      time: '15 mins',
      leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'
    }
  },
  IBM: {
    companyName: 'IBM',
    'Study Plan': [
      { id: 'dsa', name: 'DSA', duration: '2.5 Hours', topicTitle: 'Topics', topics: ['Graphs', 'BFS/DFS', 'Trees'], path: '/prepare/dsa', xpReward: 30 },
      { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: OS/Cloud', topics: ['Virtualization', 'Containers', 'Memory Allocations'], path: '/prepare/core', xpReward: 30 },
      { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Logic Puzzles', topics: ['Goal: Complete Traversal Games'], path: '/prepare/aptitude', xpReward: 30 },
      { id: 'revision', name: 'Revision', duration: '30 Minutes', topicTitle: 'Revision', topics: ['Graph Cycle Detections', 'Docker basics cheatsheet', 'Cognitive Tips'], path: '/prepare', xpReward: 10 }
    ],
    'DSA Questions': ['Container With Most Water', 'Validate Binary Search Tree', 'Number of Islands'],
    'Core Subjects': ['Docker container boundaries', 'OS scheduling algorithms', 'Virtual memory paging'],
    'Aptitude Topics': ['Cognitive Puzzles', 'Logical Traversal', 'Numerical Ability'],
    'Interview Topics': ['Cloud architectures', 'Docker setups', 'Complexity tradeoffs'],
    PYQ: {
      id: 'ibm_pyq_01',
      title: 'Detect Cycle in Directed Graph',
      difficulty: 'Hard',
      acceptance: '35%',
      avgTime: '45 min',
      xpReward: 30,
      leetcodeUrl: 'https://leetcode.com/problems/course-schedule/'
    },
    Mock: {
      name: 'IBM Hackathon Mock Test',
      duration: '120 Minutes',
      questions: 45,
      level: 'Hard'
    },
    Roadmap: [
      { id: 1, name: 'Data Structures', status: 'completed', path: '/prepare/dsa' },
      { id: 2, name: 'Search Algorithms', status: 'completed', path: '/prepare/dsa' },
      { id: 3, name: 'Graph BFS/DFS', status: 'current', path: '/prepare/dsa' },
      { id: 4, name: 'Operating Systems', status: 'locked', path: '/prepare/core' }
    ],
    'AI Recommendation': {
      dsaProblems: ['Container With Most Water', 'Validate Binary Search Tree', 'Number of Islands'],
      coreTopics: ['Docker container boundaries', 'OS scheduling algorithms', 'Virtual memory paging'],
      aptitudeGoal: 'Solve Traversal Puzzles',
      aptitudeVal: 'Cognitive Test',
      estStudyTime: '6 Hours',
      potentialXp: 90,
      difficulty: 'Hard',
      completionBonus: 30,
      streakBonus: 10
    },
    'Daily Challenge': {
      id: 'container-water',
      title: 'Container With Most Water',
      difficulty: 'Medium',
      relevance: 'Tested heavily in IBM technical coding test',
      pattern: 'Two Pointer',
      time: '25 mins',
      leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/'
    }
  },
  LTIMindtree: {
    companyName: 'LTIMindtree',
    'Study Plan': [
      { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Hashing', 'Arrays', 'Two Pointer'], path: '/prepare/dsa', xpReward: 30 },
      { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: DBMS', topics: ['Clustered Index', 'Non-Clustered Index', 'SQL Keys'], path: '/prepare/core', xpReward: 30 },
      { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Ratios', topics: ['Goal: Solve 35 Questions'], path: '/prepare/aptitude', xpReward: 30 },
      { id: 'revision', name: 'Revision', duration: '30 Minutes', topicTitle: 'Revision', topics: ['Hashing Complexities', 'Index Tracing Sheet', 'Ratio shortcuts'], path: '/prepare', xpReward: 10 }
    ],
    'DSA Questions': ['3Sum', 'Two Sum', 'Move Zeroes'],
    'Core Subjects': ['Clustered Indexes', 'Primary vs Unique keys', 'SQL Normalization rules'],
    'Aptitude Topics': ['Ratios & Proportions', 'Simple Interest', 'Time & Work'],
    'Interview Topics': ['OOP concept explanations', 'SQL queries', 'Adaptability discussion'],
    PYQ: {
      id: 'lti_pyq_01',
      title: 'Longest Palindromic Substring',
      difficulty: 'Medium',
      acceptance: '52%',
      avgTime: '32 min',
      xpReward: 30,
      leetcodeUrl: 'https://leetcode.com/problems/longest-palindromic-substring/'
    },
    Mock: {
      name: 'LTI Practice Mock OA',
      duration: '100 Minutes',
      questions: 50,
      level: 'Medium'
    },
    Roadmap: [
      { id: 1, name: 'Array Sorts', status: 'completed', path: '/prepare/dsa' },
      { id: 2, name: 'Hash Map Setup', status: 'completed', path: '/prepare/dsa' },
      { id: 3, name: 'Hashing Arrays', status: 'current', path: '/prepare/dsa' },
      { id: 4, name: 'DBMS Indexes', status: 'locked', path: '/prepare/core' }
    ],
    'AI Recommendation': {
      dsaProblems: ['3Sum', 'Two Sum', 'Move Zeroes'],
      coreTopics: ['Clustered Indexes', 'Primary vs Unique keys', 'SQL Normalization rules'],
      aptitudeGoal: 'Solve 35 Questions',
      aptitudeVal: '35 Qs',
      estStudyTime: '5 Hours',
      potentialXp: 90,
      difficulty: 'Medium',
      completionBonus: 22,
      streakBonus: 10
    },
    'Daily Challenge': {
      id: 'three-sum',
      title: '3Sum',
      difficulty: 'Medium',
      relevance: 'Common hashing optimization problem for LTIMindtree',
      pattern: 'Two Pointer',
      time: '25 mins',
      leetcodeUrl: 'https://leetcode.com/problems/3sum/'
    }
  },
  Deloitte: {
    companyName: 'Deloitte',
    'Study Plan': [
      { id: 'dsa', name: 'DSA', duration: '2 Hours', topicTitle: 'Topics', topics: ['Arrays', 'Hashing', 'Strings'], path: '/prepare/dsa', xpReward: 30 },
      { id: 'core', name: 'Core Subjects', duration: '1.5 Hours', topicTitle: 'Subject: SE', topics: ['SDLC Models', 'Agile & Scrum', 'Testing Types'], path: '/prepare/core', xpReward: 30 },
      { id: 'aptitude', name: 'Aptitude', duration: '1.5 Hours', topicTitle: 'Section: Case Studies', topics: ['Goal: Solve 4 Business Scenarios'], path: '/prepare/aptitude', xpReward: 30 },
      { id: 'revision', name: 'Revision', duration: '30 Minutes', topicTitle: 'Revision', topics: ['Scrum master roles', 'Agile cheatsheet', 'Business case solutions'], path: '/prepare', xpReward: 10 }
    ],
    'DSA Questions': ['Group Anagrams', 'Two Sum', 'Move Zeroes'],
    'Core Subjects': ['Agile Sprint definitions', 'SDLC Scrum cycle states', 'Database index tables'],
    'Aptitude Topics': ['Business Case Studies', 'Logical Analysis', 'Probability'],
    'Interview Topics': ['Consultant scenarios', 'Team leadership', 'Problem solving'],
    PYQ: {
      id: 'del_pyq_01',
      title: 'Group Anagrams Together',
      difficulty: 'Medium',
      acceptance: '60%',
      avgTime: '25 min',
      xpReward: 30,
      leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/'
    },
    Mock: {
      name: 'Deloitte Mock round',
      duration: '90 Minutes',
      questions: 40,
      level: 'Medium'
    },
    Roadmap: [
      { id: 1, name: 'Arrays & Tables', status: 'completed', path: '/prepare/dsa' },
      { id: 2, name: 'Relational DBMS', status: 'completed', path: '/prepare/core' },
      { id: 3, name: 'SQL Joins', status: 'current', path: '/prepare/core' },
      { id: 4, name: 'Aptitude Logic', status: 'locked', path: '/prepare/aptitude' }
    ],
    'AI Recommendation': {
      dsaProblems: ['Group Anagrams', 'Two Sum', 'Move Zeroes'],
      coreTopics: ['Agile Sprint definitions', 'SDLC Scrum cycle states', 'Database index tables'],
      aptitudeGoal: 'Solve 4 Case Studies',
      aptitudeVal: 'Case Prep',
      estStudyTime: '5 Hours',
      potentialXp: 90,
      difficulty: 'Medium',
      completionBonus: 20,
      streakBonus: 10
    },
    'Daily Challenge': {
      id: 'group-anagrams',
      title: 'Group Anagrams Together',
      difficulty: 'Medium',
      relevance: 'Deloitte tests hashing and grouping algorithms in coding tests',
      pattern: 'Sorting / Map',
      time: '25 mins',
      leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/'
    }
  }
};
