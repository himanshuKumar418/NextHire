// Infosys placement preparation dataset
const infosys = {
  id: 'infosys',
  name: 'Infosys',
  logo: '🇮🇳',
  difficulty: 4, // 4 Stars out of 5
  averagePackage: '6.25 - 21.0 LPA',
  lastUpdated: 'July 2026',
  estimatedTime: '40 Hours',
  rewardXP: 1000,
  
  packages: [
    { title: 'System Engineer (SE)', value: '3.6 - 4.5 LPA' },
    { title: 'Digital Specialist Engineer (DSE)', value: '6.25 - 9.0 LPA' },
    { title: 'Power Programmer (PP) / Specialist Programmer (SP)', value: '9.5 - 21.0 LPA' }
  ],

  hiringProcess: [
    { stage: 'Online Assessment', desc: 'Quantitative, Logical, Verbal and 2-3 Coding questions.' },
    { stage: 'Technical Interview', desc: 'Focuses on Core subjects (DBMS, OOPs, OS), Projects, and Coding.' },
    { stage: 'HR Interview', desc: 'Personality check, team fit, relocation check, and career goals.' }
  ],

  assessmentPatterns: [
    { title: 'Quantitative Aptitude', weightage: '25%', difficulty: 'Medium', importance: 'High', path: '/prepare/aptitude' },
    { title: 'Logical Reasoning', weightage: '25%', difficulty: 'Medium', importance: 'Medium', path: '/prepare/reasoning' },
    { title: 'Verbal Ability', weightage: '15%', difficulty: 'Easy-Medium', importance: 'Medium', path: '/prepare/verbal' },
    { title: 'Coding Section', weightage: '35%', difficulty: 'Medium-Hard', importance: 'Critical', path: '/prepare/patterns' }
  ],

  roadmap: [
    {
      id: 'week1',
      week: 'Week 1',
      title: 'Foundation, Arrays & Strings',
      estimatedHours: '25 hrs',
      questionsCount: '30 Qs',
      dailyTarget: '3 DSA, 20 Aptitude',
      topics: [
        { id: 'w1-t1', name: 'Arrays (15 Questions)' },
        { id: 'w1-t2', name: 'Strings (15 Questions)' },
        { id: 'w1-t3', name: 'Basic Aptitude' }
      ]
    },
    {
      id: 'week2',
      week: 'Week 2',
      title: 'Intermediate DSA & Reasoning',
      estimatedHours: '28 hrs',
      questionsCount: '25 Qs',
      dailyTarget: '4 DSA, 15 Reasoning',
      topics: [
        { id: 'w2-t1', name: 'HashMap' },
        { id: 'w2-t2', name: 'Sliding Window' },
        { id: 'w2-t3', name: 'Binary Search' },
        { id: 'w2-t4', name: 'Reasoning' }
      ]
    },
    {
      id: 'week3',
      week: 'Week 3',
      title: 'Advanced DSA & Verbal Prep',
      estimatedHours: '30 hrs',
      questionsCount: '20 Qs',
      dailyTarget: '3 DSA, 20 Verbal',
      topics: [
        { id: 'w3-t1', name: 'Linked List' },
        { id: 'w3-t2', name: 'Stack' },
        { id: 'w3-t3', name: 'Queue' },
        { id: 'w3-t4', name: 'Trees' },
        { id: 'w3-t5', name: 'Verbal' }
      ]
    },
    {
      id: 'week4',
      week: 'Week 4',
      title: 'Graphs, DP & Mock Interviews',
      estimatedHours: '35 hrs',
      questionsCount: '15 Qs',
      dailyTarget: '2 DSA, 1 Mock OA',
      topics: [
        { id: 'w4-t1', name: 'Graphs' },
        { id: 'w4-t2', name: 'DP Basics' },
        { id: 'w4-t3', name: 'Mock OA' },
        { id: 'w4-t4', name: 'Technical Interview' },
        { id: 'w4-t5', name: 'HR Interview' }
      ]
    }
  ],

  codingQuestions: [
    { id: 'inf-q1', name: 'Two Sum', difficulty: 'Easy', pattern: 'Arrays', companies: ['Infosys', 'TCS', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/two-sum/' },
    { id: 'inf-q2', name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', pattern: 'Arrays', companies: ['Infosys', 'Wipro', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
    { id: 'inf-q3', name: 'Contains Duplicate', difficulty: 'Easy', pattern: 'Arrays', companies: ['Infosys', 'Cognizant'], leetcodeUrl: 'https://leetcode.com/problems/contains-duplicate/' },
    { id: 'inf-q4', name: 'Product of Array Except Self', difficulty: 'Medium', pattern: 'Arrays', companies: ['Infosys', 'Google', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/product-of-array-except-self/' },
    { id: 'inf-q5', name: 'Maximum Subarray', difficulty: 'Medium', pattern: 'Arrays', companies: ['Infosys', 'TCS', 'Wipro'], leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/' },
    { id: 'inf-q6', name: '3Sum', difficulty: 'Medium', pattern: 'Arrays', companies: ['Infosys', 'Accenture', 'Adobe'], leetcodeUrl: 'https://leetcode.com/problems/3sum/' },
    { id: 'inf-q7', name: 'Move Zeroes', difficulty: 'Easy', pattern: 'Arrays', companies: ['Infosys', 'Capgemini'], leetcodeUrl: 'https://leetcode.com/problems/move-zeroes/' },
    { id: 'inf-q8', name: 'Merge Sorted Array', difficulty: 'Easy', pattern: 'Arrays', companies: ['Infosys', 'TCS'], leetcodeUrl: 'https://leetcode.com/problems/merge-sorted-array/' },
    { id: 'inf-q9', name: 'Rotate Image', difficulty: 'Medium', pattern: 'Arrays', companies: ['Infosys', 'LTIMindtree'], leetcodeUrl: 'https://leetcode.com/problems/rotate-image/' },
    { id: 'inf-q10', name: 'Valid Palindrome', difficulty: 'Easy', pattern: 'Strings', companies: ['Infosys', 'Accenture'], leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/' },
    { id: 'inf-q11', name: 'Valid Anagram', difficulty: 'Easy', pattern: 'Strings', companies: ['Infosys', 'Cognizant'], leetcodeUrl: 'https://leetcode.com/problems/valid-anagram/' },
    { id: 'inf-q12', name: 'Longest Common Prefix', difficulty: 'Easy', pattern: 'Strings', companies: ['Infosys', 'Wipro'], leetcodeUrl: 'https://leetcode.com/problems/longest-common-prefix/' },
    { id: 'inf-q13', name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', pattern: 'Sliding Window', companies: ['Infosys', 'Amazon', 'Adobe'], leetcodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
    { id: 'inf-q14', name: 'Group Anagrams', difficulty: 'Medium', pattern: 'HashMap', companies: ['Infosys', 'Google'], leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/' },
    { id: 'inf-q15', name: 'Subarray Sum Equals K', difficulty: 'Medium', pattern: 'HashMap', companies: ['Infosys', 'Meta'], leetcodeUrl: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
    { id: 'inf-q16', name: 'Two Sum II', difficulty: 'Medium', pattern: 'Arrays', companies: ['Infosys', 'TCS'], leetcodeUrl: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
    { id: 'inf-q17', name: 'First Unique Character in a String', difficulty: 'Easy', pattern: 'HashMap', companies: ['Infosys', 'Cognizant'], leetcodeUrl: 'https://leetcode.com/problems/first-unique-character-in-a-string/' },
    { id: 'inf-q18', name: 'Longest Repeating Character Replacement', difficulty: 'Medium', pattern: 'Sliding Window', companies: ['Infosys', 'Uber'], leetcodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement/' },
    { id: 'inf-q19', name: 'Permutation in String', difficulty: 'Medium', pattern: 'Sliding Window', companies: ['Infosys', 'Capgemini'], leetcodeUrl: 'https://leetcode.com/problems/permutation-in-string/' },
    { id: 'inf-q20', name: 'Binary Search', difficulty: 'Easy', pattern: 'Binary Search', companies: ['Infosys', 'Accenture'], leetcodeUrl: 'https://leetcode.com/problems/binary-search/' },
    { id: 'inf-q21', name: 'Search in Rotated Sorted Array', difficulty: 'Medium', pattern: 'Binary Search', companies: ['Infosys', 'Amazon', 'Goldman Sachs'], leetcodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
    { id: 'inf-q22', name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', pattern: 'Binary Search', companies: ['Infosys', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
    { id: 'inf-q23', name: 'Search a 2D Matrix', difficulty: 'Medium', pattern: 'Binary Search', companies: ['Infosys', 'Oracle'], leetcodeUrl: 'https://leetcode.com/problems/search-a-2d-matrix/' },
    { id: 'inf-q24', name: 'Reverse Linked List', difficulty: 'Easy', pattern: 'Linked List', companies: ['Infosys', 'TCS', 'Wipro'], leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list/' },
    { id: 'inf-q25', name: 'Merge Two Sorted Lists', difficulty: 'Easy', pattern: 'Linked List', companies: ['Infosys', 'Capgemini'], leetcodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
    { id: 'inf-q26', name: 'Linked List Cycle', difficulty: 'Easy', pattern: 'Linked List', companies: ['Infosys', 'Cognizant'], leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle/' },
    { id: 'inf-q27', name: 'Remove Nth Node From End of List', difficulty: 'Medium', pattern: 'Linked List', companies: ['Infosys', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
    { id: 'inf-q28', name: 'Add Two Numbers', difficulty: 'Medium', pattern: 'Linked List', companies: ['Infosys', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/add-two-numbers/' },
    { id: 'inf-q29', name: 'Valid Parentheses', difficulty: 'Easy', pattern: 'Stack', companies: ['Infosys', 'TCS', 'Accenture'], leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/' },
    { id: 'inf-q30', name: 'Min Stack', difficulty: 'Medium', pattern: 'Stack', companies: ['Infosys', 'Wipro'], leetcodeUrl: 'https://leetcode.com/problems/min-stack/' },
    { id: 'inf-q31', name: 'Daily Temperatures', difficulty: 'Medium', pattern: 'Stack', companies: ['Infosys', 'Goldman Sachs'], leetcodeUrl: 'https://leetcode.com/problems/daily-temperatures/' },
    { id: 'inf-q32', name: 'Implement Queue using Stacks', difficulty: 'Easy', pattern: 'Queue', companies: ['Infosys', 'LTIMindtree'], leetcodeUrl: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
    { id: 'inf-q33', name: 'Invert Binary Tree', difficulty: 'Easy', pattern: 'Trees', companies: ['Infosys', 'Capgemini'], leetcodeUrl: 'https://leetcode.com/problems/invert-binary-tree/' },
    { id: 'inf-q34', name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', pattern: 'Trees', companies: ['Infosys', 'Cognizant'], leetcodeUrl: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
    { id: 'inf-q35', name: 'Same Tree', difficulty: 'Easy', pattern: 'Trees', companies: ['Infosys', 'TCS'], leetcodeUrl: 'https://leetcode.com/problems/same-tree/' },
    { id: 'inf-q36', name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', pattern: 'Trees', companies: ['Infosys', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
    { id: 'inf-q37', name: 'Validate Binary Search Tree', difficulty: 'Medium', pattern: 'Trees', companies: ['Infosys', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree/' },
    { id: 'inf-q38', name: 'Lowest Common Ancestor of a BST', difficulty: 'Medium', pattern: 'Trees', companies: ['Infosys', 'Adobe'], leetcodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/' },
    { id: 'inf-q39', name: 'Flood Fill', difficulty: 'Easy', pattern: 'Graphs', companies: ['Infosys', 'Accenture'], leetcodeUrl: 'https://leetcode.com/problems/flood-fill/' },
    { id: 'inf-q40', name: 'Number of Islands', difficulty: 'Medium', pattern: 'Graphs', companies: ['Infosys', 'Google'], leetcodeUrl: 'https://leetcode.com/problems/number-of-islands/' },
    { id: 'inf-q41', name: 'Clone Graph', difficulty: 'Medium', pattern: 'Graphs', companies: ['Infosys', 'Facebook'], leetcodeUrl: 'https://leetcode.com/problems/clone-graph/' },
    { id: 'inf-q42', name: 'Course Schedule', difficulty: 'Medium', pattern: 'Graphs', companies: ['Infosys', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/course-schedule/' },
    { id: 'inf-q43', name: 'Climbing Stairs', difficulty: 'Easy', pattern: 'DP', companies: ['Infosys', 'TCS', 'Wipro'], leetcodeUrl: 'https://leetcode.com/problems/climbing-stairs/' },
    { id: 'inf-q44', name: 'Min Cost Climbing Stairs', difficulty: 'Easy', pattern: 'DP', companies: ['Infosys', 'Cognizant'], leetcodeUrl: 'https://leetcode.com/problems/min-cost-climbing-stairs/' },
    { id: 'inf-q45', name: 'Coin Change', difficulty: 'Medium', pattern: 'DP', companies: ['Infosys', 'Microsoft', 'Google'], leetcodeUrl: 'https://leetcode.com/problems/coin-change/' },
    { id: 'inf-q46', name: 'House Robber', difficulty: 'Medium', pattern: 'DP', companies: ['Infosys', 'LTIMindtree'], leetcodeUrl: 'https://leetcode.com/problems/house-robber/' },
    { id: 'inf-q47', name: 'Longest Common Subsequence', difficulty: 'Medium', pattern: 'DP', companies: ['Infosys', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/longest-common-subsequence/' },
    { id: 'inf-q48', name: 'Subarray Product Less Than K', difficulty: 'Medium', pattern: 'Sliding Window', companies: ['Infosys', 'Oracle'], leetcodeUrl: 'https://leetcode.com/problems/subarray-product-less-than-k/' },
    { id: 'inf-q49', name: 'Top K Frequent Elements', difficulty: 'Medium', pattern: 'HashMap', companies: ['Infosys', 'Capgemini'], leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-elements/' },
    { id: 'inf-q50', name: 'Kth Largest Element in an Array', difficulty: 'Medium', pattern: 'Arrays', companies: ['Infosys', 'Adobe'], leetcodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' }
  ],

  pyqs: [
    { year: '2025', role: 'SP', round: 'OA', diff: 'Medium', name: 'Maximum Coins Collected', company: 'Infosys', topic: 'Dynamic Programming', desc: 'Find the maximum coins that can be collected in a grid under specific traversal rules.', leetcodeUrl: 'https://leetcode.com/problems/minimum-path-sum/', slug: 'max-coins-collected', frequentlyAsked: true },
    { year: '2025', role: 'DSE', round: 'Interview', diff: 'Medium', name: 'Rotate Matrix', company: 'Infosys', topic: 'Arrays', desc: 'Rotate an N x N 2D matrix representing an image by 90 degrees clockwise in-place.', leetcodeUrl: 'https://leetcode.com/problems/rotate-image/', slug: 'rotate-matrix', frequentlyAsked: true },
    { year: '2024', role: 'SE', round: 'OA', diff: 'Medium', name: 'Subarray Sum Equals K', company: 'Infosys', topic: 'HashMap', desc: 'Given an array of integers, find the total number of continuous subarrays whose sum equals K.', leetcodeUrl: 'https://leetcode.com/problems/subarray-sum-equals-k/', slug: 'subarray-sum-k', frequentlyAsked: true },
    { year: '2025', role: 'SP', round: 'OA', diff: 'Hard', name: 'Unique Path Sum III', company: 'Infosys', topic: 'Graphs & Backtracking', desc: 'Find the total number of paths that walk over every non-obstacle cell exactly once.', leetcodeUrl: 'https://leetcode.com/problems/unique-paths-iii/', slug: 'unique-path-sum-iii', frequentlyAsked: false },
    { year: '2024', role: 'DSE', round: 'OA', diff: 'Medium', name: 'Longest Substring with K Distinct', company: 'Infosys', topic: 'Sliding Window', desc: 'Find the length of the longest substring that contains at most K distinct characters.', leetcodeUrl: '', slug: 'longest-substring-k-distinct', frequentlyAsked: false },
    { year: '2024', role: 'SE', round: 'Interview', diff: 'Easy', name: 'Merge Intervals', company: 'Infosys', topic: 'Arrays', desc: 'Merge all overlapping intervals and return an array of the non-overlapping intervals.', leetcodeUrl: 'https://leetcode.com/problems/merge-intervals/', slug: 'merge-intervals', frequentlyAsked: true },
    { year: '2025', role: 'SP', round: 'Interview', diff: 'Hard', name: 'Median of Two Sorted Arrays', company: 'Infosys', topic: 'Binary Search', desc: 'Find the median of two sorted arrays of different sizes in logarithmic time complexity.', leetcodeUrl: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', slug: 'median-two-sorted', frequentlyAsked: false },
    { year: '2024', role: 'DSE', round: 'Interview', diff: 'Medium', name: 'Reverse Linked List II', company: 'Infosys', topic: 'Linked List', desc: 'Reverse a portion of a singly linked list from position left to position right.', leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list-ii/', slug: 'reverse-list-ii', frequentlyAsked: false },
    { year: '2025', role: 'SP', round: 'OA', diff: 'Medium', name: 'Count Subarrays with Given XOR', company: 'Infosys', topic: 'HashMap', desc: 'Find the number of subarrays having XOR sum equal to a target value B.', leetcodeUrl: '', slug: 'subarrays-xor-target', frequentlyAsked: true },
    { year: '2023', role: 'SE', round: 'OA', diff: 'Easy', name: 'Next Greater Element', company: 'Infosys', topic: 'Stack', desc: 'Find the next greater element for each index in the array using a monotonic stack.', leetcodeUrl: 'https://leetcode.com/problems/next-greater-element-i/', slug: 'next-greater-element', frequentlyAsked: false },
    { year: '2024', role: 'SP', round: 'OA', diff: 'Hard', name: 'Word Ladder', company: 'Infosys', topic: 'Graphs', desc: 'Find the length of the shortest transformation sequence from a begin word to an end word.', leetcodeUrl: 'https://leetcode.com/problems/word-ladder/', slug: 'word-ladder', frequentlyAsked: false },
    { year: '2025', role: 'DSE', round: 'OA', diff: 'Medium', name: 'Course Schedule II', company: 'Infosys', topic: 'Graphs', desc: 'Find the ordering of courses you should take to finish all courses using topological sort.', leetcodeUrl: 'https://leetcode.com/problems/course-schedule-ii/', slug: 'course-schedule-ii', frequentlyAsked: true },
    { year: '2023', role: 'SE', round: 'Interview', diff: 'Medium', name: 'Palindrome Partitioning', company: 'Infosys', topic: 'DP & Backtracking', desc: 'Partition a string such that every substring of the partition is a palindrome.', leetcodeUrl: 'https://leetcode.com/problems/palindrome-partitioning/', slug: 'palindrome-partitioning', frequentlyAsked: false },
    { year: '2024', role: 'DSE', round: 'Interview', diff: 'Easy', name: 'Lowest Common Ancestor in BST', company: 'Infosys', topic: 'Trees', desc: 'Find the lowest common ancestor node of two given nodes in a Binary Search Tree.', leetcodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', slug: 'lca-bst', frequentlyAsked: true },
    { year: '2025', role: 'SP', round: 'Interview', diff: 'Hard', name: 'Edit Distance', company: 'Infosys', topic: 'DP', desc: 'Find the minimum number of operations required to convert word1 to word2.', leetcodeUrl: 'https://leetcode.com/problems/edit-distance/', slug: 'edit-distance', frequentlyAsked: false }
  ],

  technical: [
    {
      category: 'Introduction',
      difficulty: 'Easy',
      confidenceRating: 5,
      tips: [
        'Frame your technical introduction around your language of choice (Java/Python).',
        'State your role in academic projects clearly (frontend lead, database engineer).'
      ],
      mistakes: [
        'Do not list hobbies that show no personal growth.',
        'Do not talk about personal history unless asked.'
      ],
      followUps: [
        'How did you delegate work within your team?',
        'Why did you select this specific topic for your final semester project?'
      ],
      questions: [
        { question: 'Tell me about yourself.', answer: 'State name, university, aggregate marks, preferred coding language (like Java), projects in STAR format, and alignment with Infosys.', difficulty: 'Easy' },
        { question: 'Walk me through your resume.', answer: 'Walk through education, coding achievements, standard projects, internships, and cloud/tech certificates chronologically.', difficulty: 'Easy' },
        { question: 'What is your favourite programming language and why?', answer: 'Explain your choice (e.g. Java due to robust OOP principles, automatic garbage collection, and massive enterprise usage).', difficulty: 'Easy' },
        { question: 'Why did you choose computer science / engineering?', answer: 'Mention analytical interest in writing code to automate processes, interest in algorithms, and building apps.', difficulty: 'Easy' },
        { question: 'What is your final year academic project about?', answer: 'State objective, technology stack used, architectural layers, your specific contribution, and final metrics achieved.', difficulty: 'Medium' },
        { question: 'Describe your core technical strengths.', answer: 'Focus on core programming skills, DBMS queries, understanding of OOP design patterns, and debugging capabilities.', difficulty: 'Easy' },
        { question: 'How do you keep yourself updated with new tech trends?', answer: 'Discuss tech blogs, newsletters (like TLDR), coding platforms, and open-source contributions.', difficulty: 'Easy' },
        { question: 'What technical certifications do you have or plan to take?', answer: 'List current certifications (e.g. Java SE, AWS Cloud Practitioner) and how they strengthen your engineering skills.', difficulty: 'Easy' },
        { question: 'How do you handle debugging when a program fails?', answer: 'Detail reading call stack errors, using print statements or visual debuggers, isolating modules, and dry running test inputs.', difficulty: 'Medium' },
        { question: 'What role do you usually play in a technical group project?', answer: 'State whether you focus on architecture, DB design, or API integration. Emphasize team syncing.', difficulty: 'Easy' }
      ]
    },
    {
      category: 'Java',
      difficulty: 'Medium',
      confidenceRating: 4,
      tips: [
        'Mention Java Memory Model (Heap vs Stack) whenever talking about JVM execution.',
        'Contrast String Pool mechanics with standard Heap object allocations.'
      ],
      mistakes: [
        'Do not confuse JVM (interpreter/JIT) with JRE (runtime files) or JDK (development tools).',
        'Do not say String objects created via "new" keyword go into the Constant Pool.'
      ],
      followUps: [
        'What is JIT Compiler and how does it speed up execution?',
        'How does Java handle memory leaks if Garbage Collection is automatic?'
      ],
      questions: [
        { question: 'Why is Java platform independent?', answer: 'Java compiler converts source code into bytecode (.class). The JVM runs this bytecode. Different platforms have their own JVMs, executing same bytecode.', difficulty: 'Easy' },
        { question: 'Explain String Constant Pool (SCP) in Java.', answer: 'Special memory inside Heap storing unique String literals. If literal exists, new reference points to it, saving memory.', difficulty: 'Medium' },
        { question: 'Difference between StringBuilder and StringBuffer.', answer: 'Both are mutable. StringBuffer has synchronized methods making it thread-safe but slower. StringBuilder is single-threaded and faster.', difficulty: 'Easy' },
        { question: 'What is Garbage Collection in Java and how is it triggered?', answer: 'Automatic process reclaiming memory by deleting unreachable objects. Triggered by JVM; can be requested via System.gc().', difficulty: 'Medium' },
        { question: 'JVM vs JRE vs JDK.', answer: 'JVM executes bytecode. JRE contains JVM + libraries for execution. JDK is JVM + JRE + tools (javac, debugger) for building apps.', difficulty: 'Easy' },
        { question: 'What is the purpose of final, finally, and finalize?', answer: 'final is a modifier (constant value/non-inheritable). finally is a block for cleanup (always runs). finalize() is a method called by GC.', difficulty: 'Medium' },
        { question: 'Difference between ArrayList and LinkedList.', answer: 'ArrayList uses dynamic arrays (O(1) access, slow insert/delete). LinkedList uses double-linked nodes (O(n) access, fast insert/delete).', difficulty: 'Easy' },
        { question: 'What are Default and Static methods in Java 8 Interfaces?', answer: 'Allows interfaces to have implemented methods. Default methods can be overridden, whereas Static methods cannot and are called via interface name.', difficulty: 'Medium' },
        { question: 'Explain Exception Hierarchy in Java.', answer: 'Throwable is root. Divided into Error (system crash, unrecoverable) and Exception. Exceptions divide into Checked (compile-time) and Unchecked (runtime).', difficulty: 'Medium' },
        { question: 'What is Java String Immutability and why is it useful?', answer: 'Once created, String values cannot be changed. Useful for security, caching, synchronization, and the String Pool.', difficulty: 'Medium' }
      ]
    },
    {
      category: 'OOPS',
      difficulty: 'Easy',
      confidenceRating: 5,
      tips: [
        'Always specify real-world examples: encapsulation is a capsule, polymorphism is a person in different roles.',
        'Highlight code reuse when discussing inheritance.'
      ],
      mistakes: [
        'Do not mix up Overloading (same signature, different parameters) with Overriding (same name & params in parent/child).',
        'Do not state Java supports multiple inheritance using classes.'
      ],
      followUps: [
        'Can abstract classes have constructors? (Yes, called via super() from child classes).',
        'What is tight coupling and how do interfaces resolve it?'
      ],
      questions: [
        { question: 'What is Encapsulation and how is it implemented?', answer: 'Binding variables and methods together. Declaring variables as private and exposing public getters/setters.', difficulty: 'Easy' },
        { question: 'Difference between Abstraction and Encapsulation.', answer: 'Abstraction hides complexity (focuses on "what"). Encapsulation hides details and protects data (focuses on "how").', difficulty: 'Easy' },
        { question: 'Explain Method Overloading vs Method Overriding.', answer: 'Overloading (compile-time): same name, different parameters. Overriding (runtime): child class redefines parent method with same parameters.', difficulty: 'Easy' },
        { question: 'Why does Java not support Multiple Inheritance via classes?', answer: 'To avoid the Diamond Problem where a child class inherits conflicting implementations of a method from two parents.', difficulty: 'Medium' },
        { question: 'What is the difference between Abstract Class and Interface?', answer: 'Abstract class has instance variables, constructors, concrete/abstract methods. Interface has static constants and abstract methods.', difficulty: 'Easy' },
        { question: 'What is a Constructor and can it be inherited?', answer: 'Special method initializing objects. It has same name as class and no return type. Constructors cannot be inherited.', difficulty: 'Easy' },
        { question: 'Explain the "super" keyword in Java.', answer: 'Used to reference parent class variables, invoke parent constructors super(), or invoke overridden parent methods.', difficulty: 'Easy' },
        { question: 'What is Runtime Polymorphism?', answer: 'Dynamic Method Dispatch. A call to an overridden method is resolved at runtime through a parent reference pointing to a child object.', difficulty: 'Medium' },
        { question: 'What are access modifiers in Java?', answer: 'private (class only), default (package), protected (package + subclass), public (anywhere). Control encapsulation boundaries.', difficulty: 'Easy' },
        { question: 'What is the difference between shallow copy and deep copy?', answer: 'Shallow copy copies references of nested objects (shared state). Deep copy recursively copies all fields, allocating new memory objects.', difficulty: 'Medium' }
      ]
    },
    {
      category: 'DBMS',
      difficulty: 'Medium',
      confidenceRating: 4,
      tips: [
        'Use bank transaction examples for explaining ACID Atomicity and Consistency.',
        'Define prime and non-prime attributes when detailing normalization steps.'
      ],
      mistakes: [
        'Do not list ACID properties out of order or fail to define each letter.',
        'Do not mistake BCNF as a weaker form of normalization (it is stronger than 3NF).'
      ],
      followUps: [
        'What are the advantages of NoSQL over SQL database engines?',
        'How does index lookup work under the hood using B+ Trees?'
      ],
      questions: [
        { question: 'What are ACID properties?', answer: 'Atomicity (all or nothing), Consistency (preserves rules), Isolation (concurrent safety), Durability (persistent changes).', difficulty: 'Easy' },
        { question: 'What is Normalization and why do we use it?', answer: 'Database design technique to reduce redundancy and eliminate anomalies (Insert, Update, Delete).', difficulty: 'Easy' },
        { question: 'Explain 1NF, 2NF, and 3NF.', answer: '1NF: Atomic values. 2NF: In 1NF + no partial dependency. 3NF: In 2NF + no transitive dependency.', difficulty: 'Medium' },
        { question: 'What is BCNF (Boyce-Codd Normal Form)?', answer: 'In 3NF + for every functional dependency X -> Y, X must be a super key. Removes remaining anomalies.', difficulty: 'Hard' },
        { question: 'Difference between primary key, unique key, and candidate key.', answer: 'Candidate keys are primary key nominees. Primary key is chosen identifier (cannot be null). Unique key allows one null.', difficulty: 'Easy' },
        { question: 'What is a Foreign Key constraint?', answer: 'A column referencing primary key of another table, ensuring referential integrity across relational rows.', difficulty: 'Easy' },
        { question: 'What is DB Indexing and what are its drawbacks?', answer: 'Speeds up query retrieval using B/B+ trees. Drawback: Slows down write operations (INSERT/UPDATE) as index must be rebuilt.', difficulty: 'Medium' },
        { question: 'Explain database transaction isolation levels.', answer: 'Read Uncommitted, Read Committed, Repeatable Read, Serializable. Prevent dirty reads, non-repeatable reads, phantom reads.', difficulty: 'Hard' },
        { question: 'Difference between DELETE, TRUNCATE, and DROP.', answer: 'DELETE: DML (row-by-row, rollback possible). TRUNCATE: DDL (deletes all rows, fast, no rollback). DROP: DDL (removes table structure).', difficulty: 'Medium' },
        { question: 'What is referential integrity?', answer: 'DBMS state where foreign key values must match primary key values in parent table, preventing orphaned rows.', difficulty: 'Easy' }
      ]
    },
    {
      category: 'SQL',
      difficulty: 'Medium',
      confidenceRating: 4,
      tips: [
        'Practice writing syntax for the Nth highest salary off-hand.',
        'Describe performance difference between self joins and analytical windows.'
      ],
      mistakes: [
        'Do not use WHERE clause to filter aggregations (always use HAVING with GROUP BY).',
        'Do not confuse RANK (leaves gaps in ranking numbers) with DENSE_RANK (consecutive numbers).'
      ],
      followUps: [
        'How does index scanning compare to sequential table scans in SQL optimizer?',
        'Can we use subqueries inside the SELECT statement? (Yes, scalar subqueries).'
      ],
      questions: [
        { question: 'Write SQL query to find the 2nd highest salary.', answer: 'SELECT MAX(Salary) FROM Employee WHERE Salary < (SELECT MAX(Salary) FROM Employee);', difficulty: 'Easy' },
        { question: 'Difference between WHERE and HAVING clause.', answer: 'WHERE filters individual rows before aggregation. HAVING filters grouped rows after GROUP BY operations.', difficulty: 'Easy' },
        { question: 'Explain INNER, LEFT, RIGHT, and FULL JOIN.', answer: 'INNER: Matching rows. LEFT: All left rows + matched right. RIGHT: All right + matched left. FULL: Merged rows from both.', difficulty: 'Easy' },
        { question: 'Write SQL query to find duplicate rows in a table.', answer: 'SELECT Name, COUNT(Name) FROM Employee GROUP BY Name HAVING COUNT(Name) > 1;', difficulty: 'Medium' },
        { question: 'What is a SQL Trigger?', answer: 'A stored procedure that automatically executes when an event (INSERT, UPDATE, DELETE) occurs on a table.', difficulty: 'Medium' },
        { question: 'Difference between RANK and DENSE_RANK.', answer: 'RANK skips ranking positions when duplicates occur (e.g. 1, 2, 2, 4). DENSE_RANK does not skip numbers (e.g. 1, 2, 2, 3).', difficulty: 'Medium' },
        { question: 'Explain Self Join with an example.', answer: 'A table joined with itself. Example: Finding managers by joining employee details with boss employee IDs in same table.', difficulty: 'Medium' },
        { question: 'What are SQL views and why use them?', answer: 'Virtual table representing output of a query. Used to simplify complex query syntax and restrict column data access.', difficulty: 'Easy' },
        { question: 'What is DBMS stored procedure?', answer: 'Pre-compiled collection of SQL statements saved in database. Reduces network traffic and increases execution speed.', difficulty: 'Medium' },
        { question: 'Write SQL query for Nth highest salary using DENSE_RANK.', answer: 'SELECT Salary FROM (SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) as rnk FROM Employee) WHERE rnk = N;', difficulty: 'Medium' }
      ]
    },
    {
      category: 'OS',
      difficulty: 'Medium',
      confidenceRating: 4,
      tips: [
        'Memorize all 4 Coffman conditions for Deadlock.',
        'Use real physical vs logical block diagrams when describing Paging.'
      ],
      mistakes: [
        'Do not confuse Process (active executing program, heavy) with Thread (lightweight unit of execution).',
        'Do not state paging causes external fragmentation (it eliminates it, causing minor internal).'
      ],
      followUps: [
        'How does thrashing happen during page swaps?',
        'What is critical section problem and how does mutex resolve it?'
      ],
      questions: [
        { question: 'What is a Process and how does it differ from a Thread?', answer: 'Process is program in execution with dedicated memory. Thread is lightweight segment sharing process memory.', difficulty: 'Easy' },
        { question: 'What is a Deadlock and what are its conditions?', answer: 'State where processes block waiting for resources. Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.', difficulty: 'Medium' },
        { question: 'What is virtual memory?', answer: 'Memory management technique letting execution run even when code size exceeds physical RAM, swapping to storage disk.', difficulty: 'Medium' },
        { question: 'Explain Paging vs Segmentation.', answer: 'Paging: Fixed-size memory division (non-contiguous, no external fragmentation). Segmentation: Logical variable-size division.', difficulty: 'Medium' },
        { question: 'What is Context Switching?', answer: 'Saving CPU state of active process and loading register states of another ready process to execute CPU sharing.', difficulty: 'Medium' },
        { question: 'What are CPU scheduling algorithms?', answer: 'FCFS, Shortest Job First (SJF), Round Robin (time slicing), Priority Scheduling. Manage ready queue allocation.', difficulty: 'Easy' },
        { question: 'What is Thrashing in OS?', answer: 'Condition where system spends more time swapping pages in/out of virtual storage than executing actual processes.', difficulty: 'Hard' },
        { question: 'Difference between Semaphore and Mutex.', answer: 'Mutex is locking mechanism (ownership based, binary 0/1). Semaphore is signaling mechanism (allows multiple entries).', difficulty: 'Hard' },
        { question: 'What is internal vs external fragmentation?', answer: 'Internal: Unused space inside allocated memory blocks. External: Total free memory exists but is non-contiguous, blocking allocations.', difficulty: 'Medium' },
        { question: 'What is a system call?', answer: 'Programmatic interface through which user application requests services from operating system kernel space.', difficulty: 'Easy' }
      ]
    },
    {
      category: 'CN',
      difficulty: 'Medium',
      confidenceRating: 4,
      tips: [
        'Differentiate OSI layers by naming protocols (e.g. HTTP at Application, TCP at Transport, IP at Network).',
        'Contrast TCP handshake sequence (SYN -> SYN-ACK -> ACK) with UDP broadcast.'
      ],
      mistakes: [
        'Do not forget the sequence of layers (use acronyms).',
        'Do not confuse IP address (logical routing) with MAC address (physical link routing).'
      ],
      followUps: [
        'How does DNS cache resolve hostname addresses under 100ms?',
        'What is a port number and how is it used at the Transport layer?'
      ],
      questions: [
        { question: 'Explain the 7 layers of the OSI model.', answer: 'Physical, Data Link, Network (routing), Transport (reliability), Session, Presentation (encryption), Application (HTTP).', difficulty: 'Medium' },
        { question: 'Difference between TCP and UDP.', answer: 'TCP is connection-oriented, reliable (acknowledgments), slower. UDP is connectionless, fast (streaming), unreliable.', difficulty: 'Easy' },
        { question: 'What is DNS?', answer: 'Domain Name System. Translates human-readable hostnames (google.com) to machine-readable IP addresses (142.250.190.46).', difficulty: 'Easy' },
        { question: 'What is the TCP 3-way Handshake?', answer: 'Process setting up connection: Client sends SYN -> Server returns SYN-ACK -> Client sends ACK. Connection established.', difficulty: 'Medium' },
        { question: 'Explain IP address vs MAC address.', answer: 'IP address is logical address (assigned dynamically, Network layer). MAC is physical burned-in hardware address (Data Link).', difficulty: 'Easy' },
        { question: 'What is the difference between HTTP and HTTPS?', answer: 'HTTPS encrypts data transfers using SSL/TLS protocols over port 443. HTTP transmits in plain text over port 80.', difficulty: 'Easy' },
        { question: 'What is a Gateway in computer networking?', answer: 'Node acting as a router/connector between two distinct network systems running different protocol structures.', difficulty: 'Medium' },
        { question: 'Explain socket programming basics.', answer: 'Connecting sockets (endpoint pair defined by IP + Port) over networks so processes can stream byte data packages.', difficulty: 'Hard' },
        { question: 'What is subnetting and why is it used?', answer: 'Dividing large network into smaller sub-networks to reduce collision domains, enhance security, and save IP address space.', difficulty: 'Hard' },
        { question: 'What is ARP (Address Resolution Protocol)?', answer: 'Protocol mapping logical IP addresses to physical MAC hardware addresses inside local data link networks.', difficulty: 'Medium' }
      ]
    },
    {
      category: 'Projects',
      difficulty: 'Medium',
      confidenceRating: 5,
      tips: [
        'Describe project architecture (MERN/Django) keeping API gateways in mind.',
        'Prepare to justify DB selections (e.g. relational integrity of SQL vs scaling speed of NoSQL).'
      ],
      mistakes: [
        'Do not say "I built it all alone" if it was a group project, but highlight your specific API/DB metrics.',
        'Do not fumble when describing database collections or relational column queries.'
      ],
      followUps: [
        'How did you secure user credentials in DB? (Bcrypt hashing, salted algorithms).',
        'How would you scale your project to support 10,000 concurrent user requests?'
      ],
      questions: [
        { question: 'Walk me through your primary project architecture.', answer: 'Describe client UI layer, server application logic API controller, and database repository layer (MVC).', difficulty: 'Easy' },
        { question: 'What was your specific role in your team project?', answer: 'Describe module allocations (e.g. database setup, JWT security controller) and how you synced endpoints.', difficulty: 'Easy' },
        { question: 'Why did you select this specific database for your app?', answer: 'Provide rational justification (e.g. MySQL for strict schema compliance, MongoDB for JSON document flexibility).', difficulty: 'Medium' },
        { question: 'How did you handle user authentication and session security?', answer: 'Detail login validation generating JWT tokens, storing in cookies, and sending in Authorization headers.', difficulty: 'Medium' },
        { question: 'Explain a major technical bug you faced and how you solved it.', answer: 'Describe bug symptoms (like CORS block or async database query deadlocks), diagnostic logs, and fix.', difficulty: 'Medium' },
        { question: 'What tools did you use for version control?', answer: 'Git and GitHub. Discuss pull requests, branch merge conflict resolutions, and feature commits.', difficulty: 'Easy' },
        { question: 'How did you deploy your application?', answer: 'Mention cloud environments (e.g., Render, Vercel, AWS S3) and configuring continuous integration hooks.', difficulty: 'Medium' },
        { question: 'What API testing tools did you use?', answer: 'Postman for validation testing, checking HTTP response codes, header payloads, and JSON response models.', difficulty: 'Easy' },
        { question: 'How did you optimize your application performance?', answer: 'Explain database indexing, caching static files, optimizing image queries, and lazy loading frontend React routes.', difficulty: 'Hard' },
        { question: 'If you had to rebuild your project today, what would you change?', answer: 'Discuss switching to TypeScript for compile-time safety, adding automated Jest unit tests, or microservices.', difficulty: 'Medium' }
      ]
    },
    {
      category: 'HR to Technical Transition',
      difficulty: 'Easy',
      confidenceRating: 5,
      tips: [
        'Always frame service training (Mysore campus) as a launchpad for your technical skills.',
        'Explain how code projects are client-centric solutions.'
      ],
      mistakes: [
        'Do not treat service training as an academic extension; frame it as enterprise prep.',
        'Do not mock legacy systems like mainframe systems; showcase interest in modernization.'
      ],
      followUps: [
        'How would you pitch Java to a client migrating from PHP backend?',
        'How do you manage training exams while working on active client codebases?'
      ],
      questions: [
        { question: 'How do you align your academic training with Infosys services?', answer: 'Discuss learning enterprise frameworks, robust testing, client communication, and Mysore Lex syllabus.', difficulty: 'Easy' },
        { question: 'Why choose Infosys SP/DSE paths over generic startup roles?', answer: 'Emphasize large-scale client setups, technical training investments, structured mentoring, and stable architecture.', difficulty: 'Easy' },
        { question: 'How do you handle technical updates in enterprise settings?', answer: 'Through corporate training subscriptions, team knowledge sharing, and reviewing company tech stacks.', difficulty: 'Easy' },
        { question: 'What is your opinion on migrating legacy systems to Cloud?', answer: 'Improves scalability, reduces hardware cost, and enables faster CI/CD delivery cycles.', difficulty: 'Medium' },
        { question: 'How do code standards affect customer delivery?', answer: 'Ensures code readable by any programmer, minimizes post-production bugs, and keeps software maintenance costs low.', difficulty: 'Easy' },
        { question: 'How does Infosys Lex platform help freshers?', answer: 'Provides continuous self-learning materials to upskill in emerging tech like AI/Cloud on-demand.', difficulty: 'Easy' },
        { question: 'Describe your interest in learning cloud computing.', answer: 'Allows hosting apps globally. Interested in learning AWS or Azure architecture integrations.', difficulty: 'Easy' },
        { question: 'Why are software security layers critical for bank clients?', answer: 'Prevents security leaks, secures user balances, and preserves customer trust and regulatory clearances.', difficulty: 'Medium' },
        { question: 'Explain how you approach working with unfamiliar tech stacks.', answer: 'Read official documentation, execute simple hello-world modules, follow tutorials, and consult mentors.', difficulty: 'Easy' },
        { question: 'How do code reviews help junior developers?', answer: 'Identifies memory leaks, teaches optimal algorithms, and aligns developers with company standards.', difficulty: 'Easy' }
      ]
    },
    {
      category: 'Behavioral',
      difficulty: 'Easy',
      confidenceRating: 5,
      tips: [
        'Use the STAR model for all behavioral stories.',
        'Emphasize positive outcomes and learnings from stressful times.'
      ],
      mistakes: [
        'Do not sound defensive when describing group conflicts.',
        'Do not blame college professors or teammates for project delays.'
      ],
      followUps: [
        'How would you convince a stubborn teammate to accept your DB design?',
        'What would you do if you realized your API model was incorrect 1 day before release?'
      ],
      questions: [
        { question: 'Describe a time you faced a tough bug close to deadline.', answer: 'Detail final project deployment bugs, how you checked error logs, isolated variables, and solved it on time.', difficulty: 'Medium' },
        { question: 'How do you prioritize multiple coding tasks?', answer: 'Using task boards (Trello), listing dependencies, estimating effort, and addressing critical paths first.', difficulty: 'Easy' },
        { question: 'Tell me about a time you disagreed with a teammate.', answer: 'Discuss objective tech evaluations (pros/cons table of SQL vs NoSQL) leading to consensus decision.', difficulty: 'Easy' },
        { question: 'Describe a situation where you had to adapt to a sudden project change.', answer: 'Teammate dropping out, reshuffling responsibilities, re-allocating modules, and finishing on time.', difficulty: 'Medium' },
        { question: 'How do you handle strict deadlines?', answer: 'By setting milestones, reducing scope to core features first (MVP), and communicating setbacks early.', difficulty: 'Easy' },
        { question: 'Tell me about a time you helped a teammate debug code.', answer: 'Assisting a team member with database queries, explaining indexing, and working through the logic together.', difficulty: 'Easy' },
        { question: 'Describe a mistake you made in a project and how you fixed it.', answer: 'Incorrect database routing. Caught it in testing, updated the model, and added validation checks.', difficulty: 'Medium' },
        { question: 'How do you handle feedback from code reviews?', answer: 'I take reviews constructively, identify areas of improvement, and learn best practices from seniors.', difficulty: 'Easy' },
        { question: 'Describe a time you had to learn a technology from scratch.', answer: 'Learning React in 2 weeks for a hackathon. Built components, read documentation, and completed the app.', difficulty: 'Medium' },
        { question: 'How do you handle stress during exam and placement cycles?', answer: 'By maintaining a structured schedule, exercising, getting enough sleep, and focusing on one task at a time.', difficulty: 'Easy' }
      ]
    }
  ],

  hr: [
    {
      section: 'HR Basics',
      questions: [
        {
          question: 'Why do you want to join Infosys?',
          idealAnswer: 'Infosys is a pioneer in IT services and consulting. Its Mysore Training Campus is globally renowned for producing high-quality engineers. Joining Infosys gives me the opportunity to work on large-scale applications and start my career in a structured learning environment.',
          exampleAnswer: 'I want to join Infosys because of its excellent training program, global client base, and the Lex learning system. I believe working here will build my technical foundations and expose me to professional engineering practices.',
          mistakesToAvoid: 'Saying you want to join only because of the salary, location, or because your friends applied.',
          interviewerExpects: 'Interviewer expects to see interest in the company, loyalty, and a drive to learn and grow.',
          star: {
            situation: 'Entering placements looking for a structured launchpad.',
            task: 'Find a company that values developer training and continuous learning.',
            action: 'Researched Infosys Lex platform and Mysore training campus curriculum.',
            result: 'Targeted Infosys to gain access to world-class learning setups.'
          },
          confidenceTips: 'Speak clearly. Highlight the Mysore campus and Lex training programs.'
        },
        {
          question: 'Tell me about yourself.',
          idealAnswer: 'Summarize your technical background, college degree, core programming languages, academic projects (briefly), and soft skills. Keep it focused on professional aspects.',
          exampleAnswer: 'My name is Himanshu, a CS graduate. I specialize in Java and database design. I built a web portal using React/Node. Outside academics, I coordinate coding club events.',
          mistakesToAvoid: 'Talking about family background, personal hobbies, or listing resume items word-for-word for 5 minutes.',
          interviewerExpects: 'Expects a confident summary of your achievements, communication skills, and target career goals.',
          star: {
            situation: 'Start of the interview session.',
            task: 'Give a concise and impactful technical pitch.',
            action: 'Summarized education, key project, and preferred tech stack (Java) in under 2 minutes.',
            result: 'Set a positive technical tone for the interview.'
          },
          confidenceTips: 'Maintain eye contact, smile, and speak with high enthusiasm.'
        },
        {
          question: 'Why should we hire you?',
          idealAnswer: 'Align your coding skills, database knowledge, and project development experience with the fresher requirements. Emphasize fast learning and flexibility.',
          exampleAnswer: 'You should hire me because I have a solid foundation in Java and SQL, hands-on experience building MVC projects, and I am highly adaptable as shown by learning React in 2 weeks.',
          mistakesToAvoid: 'Giving generic answers like "I am hard working" without project references.',
          interviewerExpects: 'Expects to see self-confidence, value alignment, and proof of developer skills.',
          star: {
            situation: 'Company needs engineers who can adapt to enterprise projects quickly.',
            task: 'Showcase that my profile matches the system requirements.',
            action: 'Linked my project database optimizations and programming skills to enterprise challenges.',
            result: 'Demonstrated immediate contribution potential to the team.'
          },
          confidenceTips: 'Highlight technical readiness and your willingness to adapt to new team stacks.'
        },
        {
          question: 'What is your ideal work environment?',
          idealAnswer: 'Describe a collaborative, goal-oriented environment that values open communication, technical learning, and team support.',
          exampleAnswer: 'My ideal environment is one where team members share knowledge, sync regularly during code reviews, and focus on clean customer solutions.',
          mistakesToAvoid: 'Saying you want an environment with no rules, or one where you only work alone.',
          interviewerExpects: 'Expects to check team fit, collaboration values, and work culture alignment.',
          star: {
            situation: 'Preparing to work within structured enterprise units.',
            task: 'Align work preferences with corporate engineering values.',
            action: 'Expressed interest in transparent standups, documentation, and peer assistance.',
            result: 'Showed preparedness for standard agile workflow practices.'
          },
          confidenceTips: 'Emphasize collaboration, mentorship, and professional communication.'
        },
        {
          question: 'Do you have any questions for me?',
          idealAnswer: 'Ask about training modules, corporate culture, or technology structures within Infosys, showing active interest.',
          exampleAnswer: 'What specific technical modules are highlighted in Mysore training for SP profiles today? What learning paths do you recommend for freshers?',
          mistakesToAvoid: 'Saying "No, I don\'t have any questions," or asking about salary and shift timings immediately.',
          interviewerExpects: 'Expects curiosity, interest in growth, and active listening.',
          star: {
            situation: 'End of the interview process.',
            task: 'End the session on a positive, curious note.',
            action: 'Asked about continuous learning opportunities and upskilling pathways.',
            result: 'Reinforced developer curiosity and commitment to professional growth.'
          },
          confidenceTips: 'Keep a warm tone. Ask at least one questions about upskilling or project domains.'
        }
      ]
    },
    {
      section: 'Behavioral',
      questions: [
        {
          question: 'How do you handle pressure and tight deadlines?',
          idealAnswer: 'State that you stay calm, prioritize tasks, and break down complex components. Highlight communication in case of delays.',
          exampleAnswer: 'During my project delivery, our server crashed. I systematically checked logs, split debug tasks with my partner, and met the submission deadline.',
          mistakesToAvoid: 'Saying you never feel stressed, or that you panic and work late nights without notifying leaders.',
          interviewerExpects: 'Wants to see adaptability, analytical problem-solving, and professional maturity under stress.',
          star: {
            situation: 'Web server failed 24 hours before college evaluation.',
            task: 'Restore endpoints and complete evaluation checks.',
            action: 'Consulted logs, restored DB backups, and documented API checks.',
            result: 'Project launched on time, securing top grading.'
          },
          confidenceTips: 'Present a calm posture. Show that you communicate proactively rather than hiding issues.'
        },
        {
          question: 'Describe a time you failed and what you learned.',
          idealAnswer: 'Focus on a minor technical or coordination setback. Detail the root cause, corrections made, and positive long-term habits learned.',
          exampleAnswer: 'I underestimated database configuration time for a project, resulting in a delayed mock test. I learned to use estimation buffers and task boards.',
          mistakesToAvoid: 'Saying you have never failed, or describing a major ethical or technical failure that raises red flags.',
          interviewerExpects: 'Expects accountability, resilience, learning capacity, and post-failure adjustments.',
          star: {
            situation: 'Database schema configuration delayed a mock testing session.',
            task: 'Configure API routes and optimize database indexes.',
            action: 'Spent extra hours debugging, mapped the schema dependencies, and finished setup.',
            result: 'Finished the testing suite, and implemented checklists for future setups.'
          },
          confidenceTips: 'Keep the tone reflective but positive. Focus on the lesson learned.'
        },
        {
          question: 'What motivates you to perform?',
          idealAnswer: 'Mention solving technical problems, building functional customer tools, continuous learning, and team appreciation.',
          exampleAnswer: 'Seeing my code solve a user problem (like automating ticket logs) and learning new programming tools motivates me.',
          mistakesToAvoid: 'Stating that money or praise from bosses is your only motivation.',
          interviewerExpects: 'Checks if your drivers align with software delivery and developer performance standards.',
          star: {
            situation: 'Working on complex backend routes.',
            task: 'Keep technical performance high during long coding sessions.',
            action: 'Upskilled in debugging tools and achieved 98% test coverage.',
            result: 'Delivered robust modules, driven by technical curiosity.'
          },
          confidenceTips: 'Show enthusiasm. Connect motivation to developer growth and team success.'
        },
        {
          question: 'Tell me about a time you had to multi-task.',
          idealAnswer: 'Showcase balancing college exams, completing projects, and preparing for placement drives using time management.',
          exampleAnswer: 'I balanced my final semester thesis while building a web portal and solving 3 DSA problems daily using daily schedules.',
          mistakesToAvoid: 'Admitting that multi-tasking compromised quality or made you miss key deadlines.',
          interviewerExpects: 'Expects task management, prioritisation, and effective time control.',
          star: {
            situation: 'Had to manage college final tests, project submissions, and placement prep concurrently.',
            task: 'Deliver on all tracks without performance slippage.',
            action: 'Allocated specific hours to study, code development, and mock aptitude tests.',
            result: 'Secured a 9.0 GPA, finished the web app, and qualified for placement interviews.'
          },
          confidenceTips: 'Keep the explanation highly structured. Focus on planning and schedules.'
        }
      ]
    },
    {
      section: 'Situation Based',
      questions: [
        {
          question: 'What would you do if a client requests changes last minute?',
          idealAnswer: 'Emphasize active listening, analysis of changes, and consulting your manager. Never promise anything directly to clients without manager approval.',
          exampleAnswer: 'I would document the client requirement, analyze feasibility, and report to my team lead to evaluate resources and timeline extensions.',
          mistakesToAvoid: 'Agreeing immediately without consulting your manager, or refusing the client directly.',
          interviewerExpects: 'Expects client empathy, respect for organization reporting structures, and structured analysis.',
          star: {
            situation: 'Client wanted additional filter on the dashboard close to release.',
            task: 'Integrate filter without breaking existing reports.',
            action: 'Drafted technical feasibility, consulted team lead, and updated client on updated release date.',
            result: 'Successfully integrated the feature with client approval.'
          },
          confidenceTips: 'Explain the reporting line clearly. Show that you value team coordination.'
        },
        {
          question: 'How do you handle boring or repetitive tasks?',
          idealAnswer: 'Acknowledge that repetitive tasks (like writing documentation, unit tests, or logs) are essential for product quality. Emphasize automation.',
          exampleAnswer: 'I try to automate repetitive coding templates using script tools, write thorough notes, and focus on the final system stability.',
          mistakesToAvoid: 'Complaining that repetitive work is below your level, or skipping documentation and testing.',
          interviewerExpects: 'Expects diligence, reliability, professional discipline, and interest in automation.',
          star: {
            situation: 'API manual testing became highly repetitive.',
            task: 'Perform 40 regression tests before deployment.',
            action: 'Wrote a Python test script to automate endpoints checks and recorded outputs.',
            result: 'Saved 2 hours of manual checks and ensured constant regression logs.'
          },
          confidenceTips: 'Highlight interest in automation and the value of documentation for team setups.'
        }
      ]
    },
    {
      section: 'Strength Weakness',
      questions: [
        {
          question: 'What are your strengths and weaknesses?',
          idealAnswer: 'Strength: Fast learner, adaptable. Weakness: Stage nervousness or public speaking, which you are actively resolving.',
          exampleAnswer: 'My strength is adaptability (learned React in 2 weeks). My weakness is public speaking, which I am fixing by presenting in mock reviews.',
          mistakesToAvoid: 'Claiming you have no weaknesses, or mentioning critical software engineering flaws (e.g., getting bored easily).',
          interviewerExpects: 'Wants to see self-awareness, honesty, and active self-improvement.',
          star: {
            situation: 'Felt nervous during team project presentations.',
            task: 'Improve public speaking skills.',
            action: 'Joined college technical presentation calls and practiced mock interviews.',
            result: 'Gained confidence in speaking to larger audiences.'
          },
          confidenceTips: 'Be honest and optimistic. Always follow up a weakness with your strategy to fix it.'
        }
      ]
    },
    {
      section: 'Goals',
      questions: [
        {
          question: 'Where do you see yourself in 5 years?',
          idealAnswer: 'Aim to grow technically, master enterprise design, and transition into a Technical Lead or Solutions Architect role within Infosys.',
          exampleAnswer: 'I see myself mastering Java frameworks, taking ownership of active client modules, and leading technical integrations at Infosys.',
          mistakesToAvoid: 'Saying you want to start a startup, go for higher education (MS/MBA), or leave the company soon.',
          interviewerExpects: 'Expects career commitment, growth alignment, and loyalty to the firm.',
          star: {
            situation: 'Starting as a fresher developer.',
            task: 'Build a long-term technical growth plan.',
            action: 'Upskilled in system design, cloud systems, and project management.',
            result: 'Aimed to lead technical modules within Infosys.'
          },
          confidenceTips: 'Project stability. Reassure the interviewer of your long-term commitment.'
        },
        {
          question: 'How do you define success?',
          idealAnswer: 'Define success as meeting project expectations, delivering clean code, expanding your technical skills, and helping team members.',
          exampleAnswer: 'For me, success is writing code that runs in production without errors, meeting project timelines, and learning a new framework each quarter.',
          mistakesToAvoid: 'Defining success only in terms of quick promotions, high salaries, or personal superiority.',
          interviewerExpects: 'Expects goal orientation, team values, and technical definition of performance.',
          star: {
            situation: 'Defining developer targets.',
            task: 'Set baseline goals for coding and delivery quality.',
            action: 'Completed my Web portal project with 0 critical bugs.',
            result: 'Achieved success through clean product execution and satisfied requirements.'
          },
          confidenceTips: 'Keep a balanced perspective. Mix technical success with personal upskilling and team contributions.'
        }
      ]
    },
    {
      section: 'Relocation',
      questions: [
        {
          question: 'Are you open to relocating and working in night shifts?',
          idealAnswer: 'State a clear and positive yes. Relocation and shifts are standard in global IT service companies.',
          exampleAnswer: 'Yes, I am completely open to relocating to any Infosys development center and working in night shifts as required by projects.',
          mistakesToAvoid: 'Hesitating or saying you want to work only from home or your hometown.',
          interviewerExpects: 'Expects high flexibility and readiness to meet business and client needs.',
          star: {
            situation: 'Business operational needs require dynamic placement.',
            task: 'Adapt to new team setups and shift hours.',
            action: 'Prepared family and set personal schedules for flexible operations.',
            result: 'Ready to join any Infosys branch on short notice.'
          },
          confidenceTips: 'Say "Yes" with confidence. Keep a positive face.'
        }
      ]
    },
    {
      section: 'Leadership',
      questions: [
        {
          question: 'Describe a time you led a project team.',
          idealAnswer: 'Highlight task allocation, checking milestones, handling blocks, and encouraging communication.',
          exampleAnswer: 'In our final database project, I divided tasks by matching modules to member strengths, kept daily syncs, and delivered 3 days early.',
          mistakesToAvoid: 'Saying you did all the work alone or bragging about ordering people around.',
          interviewerExpects: 'Wants to see collaboration, delegation, planning, and goal execution.',
          star: {
            situation: 'Group database project needed direction.',
            task: 'Design schemas, delegate UI, and write reports.',
            action: 'Held daily syncs, resolved integration errors, and coordinated code reviews.',
            result: 'Submitted functional portal early with high marks.'
          },
          confidenceTips: 'Emphasize team success ("We did...") over personal pride.'
        }
      ]
    },
    {
      section: 'Conflict Resolution',
      questions: [
        {
          question: 'How do you handle a teammate who is not contributing?',
          idealAnswer: 'Talk privately, understand their technical blocks, offer help, split tasks, and escalate to a manager only if unresolved.',
          exampleAnswer: 'I would ask my peer if they are facing blocks, offer to pair-program on a module, and help them restructure their tasks.',
          mistakesToAvoid: 'Complaining immediately to professors/managers, or ignoring the teammate and writing negative peer reviews.',
          interviewerExpects: 'Expects empathy, problem-solving mindset, and professional conflict management.',
          star: {
            situation: 'Teammate fell behind on API integration.',
            task: 'Sync backend routing with frontend views.',
            action: 'Held a sync, realized they were struggling with syntax, and pair-programmed the controller layer.',
            result: ' Teammate learned the syntax and completed the module.'
          },
          confidenceTips: 'Focus on collaboration. Avoid sounding angry or critical of others.'
        },
        {
          question: 'How do you handle conflict with a manager?',
          idealAnswer: 'Focus on facts, not emotion. Discuss concerns privately, present solutions, listen to their perspective, and align with final decisions.',
          exampleAnswer: 'I would request a 1-on-1 meeting, outline my code logic and test cases, listen to my lead\'s guidelines, and implement the requested changes.',
          mistakesToAvoid: 'Arguing publicly, ignoring feedback, or expressing frustration to peers.',
          interviewerExpects: 'Expects professionalism, active listening, respect for authority, and problem-solving focus.',
          star: {
            situation: 'Manager wanted to rewrite an API using SQL joins instead of subqueries.',
            task: 'Resolve code conflict while meeting lead standards.',
            action: 'Compared performance metrics for both approaches and adjusted API to lead specifications.',
            result: 'Maintained query performance while respecting manager design choices.'
          },
          confidenceTips: 'Keep a calm tone. Emphasize that you prioritize project delivery and manager feedback.'
        },
        {
          question: 'What would you do if your project team disagree on tech selection?',
          idealAnswer: 'Create a pros/cons table comparing learning curve, performance, execution speed, and scalability. Hold a vote or seek mentor guidance.',
          exampleAnswer: 'I would document database options (MySQL vs MongoDB), compare search speeds and setup time, and help the team choose based on metrics.',
          mistakesToAvoid: 'Insisting on your preferred language without data, or dividing the group into camps.',
          interviewerExpects: 'Expects analytical decision-making, team sync ability, and objective evaluation skills.',
          star: {
            situation: 'Project team disagreed between using SQL or NoSQL for web portal.',
            task: 'Reach a unified database choice within 24 hours.',
            action: 'Analyzed query requirements, noted relational integrity constraints, and led a pros/cons comparison.',
            result: 'Team selected SQL unanimously based on database integrity needs.'
          },
          confidenceTips: 'Focus on metrics, statistics, and objective parameters over opinions.'
        }
      ]
    },
    {
      section: 'Salary',
      questions: [
        {
          question: 'What are your salary expectations?',
          idealAnswer: 'As a fresher, salary is set by company rules. State that you accept standard packages and value the learning opportunity.',
          exampleAnswer: 'I am comfortable with the industry-standard package offered by Infosys. Learning and contributing are my priority.',
          mistakesToAvoid: 'Demanding a high number or quoting expenses and loans as reasons.',
          interviewerExpects: 'Expects candidate to align with company salary bands.',
          star: {
            situation: 'Entry-level compensation discussion.',
            task: 'Align expectations with standard package brackets.',
            action: 'Checked Infosys fresher packages for SE, DSE, and SP profiles.',
            result: 'Agreed to company standards, focusing on technical upskilling.'
          },
          confidenceTips: 'Keep a pleasant smile. Frame it around the value of training and exposure.'
        }
      ]
    }
  ],

  resources: [
    { name: 'Resume Checklist', desc: 'A comprehensive checklist for reviewing your technical resume before placement rounds.', type: 'Resume', openUrl: '#', downloadUrl: '#' },
    { name: 'HR Cheat Sheet', desc: 'Quick preparation notes covering top behavioral questions and Mysore campus tips.', type: 'HR Prep', openUrl: '#', downloadUrl: '#' },
    { name: 'Java Revision Notes', desc: 'JVM details, collections flowcharts, and multithreading syntax.', type: 'Technical', openUrl: '#', downloadUrl: '#' },
    { name: 'OOPS PDF', desc: 'Visual models of inheritance, overloading, interfaces, and code structures.', type: 'Technical', openUrl: '#', downloadUrl: '#' },
    { name: 'DBMS Notes', desc: 'Key constraints definitions, Normalization rules (1NF-BCNF) and ACID models.', type: 'Technical', openUrl: '#', downloadUrl: '#' },
    { name: 'SQL Cheat Sheet', desc: 'Queries cheat sheet featuring nested subqueries, joins, and aggregates.', type: 'Technical', openUrl: '#', downloadUrl: '#' },
    { name: 'OS Revision', desc: 'Memory hierarchy, paging formulas, deadlock conditions and CPU schedulers.', type: 'Technical', openUrl: '#', downloadUrl: '#' },
    { name: 'CN Notes', desc: 'OSI 7 layer diagrams, TCP handshake, IP addressing and subnetting formulas.', type: 'Technical', openUrl: '#', downloadUrl: '#' },
    { name: 'Mock OA', desc: 'Three mock online assessment tests matching Infosys SE, DSE, and SP levels.', type: 'Mock OA', openUrl: '#', downloadUrl: '#' },
    { name: 'Resume Template', desc: 'Modern premium resume LaTeX and DOCX files optimized for ATS parsing.', type: 'Resume', openUrl: '#', downloadUrl: '#' },
    { name: 'Behavioral Questions PDF', desc: 'STAR model templates with ready-made replies to situational questions.', type: 'HR Prep', openUrl: '#', downloadUrl: '#' }
  ]
};

export default infosys;
