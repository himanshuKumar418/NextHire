const coreSubjectsData = {
  dbms: {
    id: 'dbms',
    title: 'Database Management System',
    overview: 'Learn relational database design, E-R models, normalization rules, transaction serializability, ACID properties, and B/B+ indexing structures.',
    topicCategories: [
      { name: 'Relational Model & ER', count: '15 concepts', progress: 60 },
      { name: 'Normalization (1NF-BCNF)', count: '10 rules', progress: 40 },
      { name: 'Transactions & Concurrency', count: '12 mechanisms', progress: 20 },
      { name: 'Indexing & File Org', count: '8 structures', progress: 5 }
    ],
    interviewQuestions: [
      { title: 'Explain ACID Properties in DBMS.', answer: 'ACID stands for Atomicity (all or nothing), Consistency (preserves database state constraints), Isolation (concurrent transactions execute independently), and Durability (permanent storage write).' },
      { title: 'What is the difference between 3NF and BCNF?', answer: 'A relation is in BCNF if for every non-trivial functional dependency X -> Y, X is a superkey. BCNF is stricter than 3NF, where Y can also be a prime attribute.' },
      { title: 'What is a Transaction? Explain States of a Transaction.', answer: 'A transaction is a logical unit of processing in a DBMS. Its states include Active, Partially Committed, Committed, Failed, and Aborted.' },
      { title: 'Explain 2-Phase Locking (2PL) Protocol.', answer: '2PL ensures serializability by dividing lock management into two phases: Growing Phase (acquires locks, releases none) and Shrinking Phase (releases locks, acquires none).' }
    ],
    pyqs: [
      { name: 'Design ER diagram for Online Bank System', company: 'TCS', year: '2025', round: 'Technical', role: 'Ninja', diff: 'Medium', topic: 'ER Diagram', desc: 'Construct a complete schema representing branches, accounts, and loan entities.' },
      { name: 'Decompose R(A,B,C,D) into 3NF', company: 'Infosys', year: '2024', round: 'Technical', role: 'SE', diff: 'Hard', topic: 'Normalization', desc: 'Analyze functional dependencies and perform lossless-join dependency preserving decomposition.' }
    ],
    revisionNotes: [
      { title: 'Normal Forms Summary', content: '1NF: Atomic values only. 2NF: No partial dependency (non-prime dependent on part of candidate key). 3NF: No transitive dependency (non-prime dependent on non-prime).' },
      { title: 'Concurrency Control', content: 'Locks can be Shared (read-only) or Exclusive (read/write). Deadlock detection uses Wait-For Graphs.' }
    ],
    mockTests: [
      { id: 'db_m1', title: 'DBMS Mock 1', subtitle: 'Schema & Normalization', duration: '30 mins', questions: '20', includes: ['• ER Diagrams', '• 1NF, 2NF, 3NF, BCNF'], difficulty: 'Easy', reward: '100 XP', locked: false, unlock: 'Status: Unlocked' },
      { id: 'db_m2', title: 'DBMS Mock 2', subtitle: 'Transactions & SQL', duration: '45 mins', questions: '30', includes: ['• ACID Transactions', '• Joins & Subqueries'], difficulty: 'Medium', reward: '200 XP', locked: true, unlock: 'Unlock: Complete Mock 1' },
      { id: 'db_m3', title: 'DBMS Mock 3', subtitle: 'Concurrency Controls', duration: '45 mins', questions: '30', includes: ['• 2PL Protocols', '• B+ Tree Indexing'], difficulty: 'Medium', reward: '350 XP', locked: true, unlock: 'Unlock: Complete Mock 2' },
      { id: 'db_m4', title: 'DBMS Final OA', subtitle: 'Comprehensive DBMS', duration: '60 mins', questions: '40', includes: ['• Entire Relational DB Syllabus'], difficulty: 'Hard', reward: '500 XP', locked: true, unlock: 'Unlock: Complete Mock 3' }
    ]
  },
  os: {
    id: 'os',
    title: 'Operating System',
    overview: 'Understand process management, CPU scheduling, thread synchronization, deadlocks, virtual memory pages, and disk configurations.',
    topicCategories: [
      { name: 'Process Scheduling', count: '10 algorithms', progress: 50 },
      { name: 'Memory & Paging', count: '12 concepts', progress: 30 },
      { name: 'Deadlock Handling', count: '6 methods', progress: 75 },
      { name: 'File & Disk Management', count: '8 algorithms', progress: 10 }
    ],
    interviewQuestions: [
      { title: 'What is a Semaphore? Explain types.', answer: 'A semaphore is an integer variable used for signaling and process synchronization. Types include Binary Semaphore (values 0 and 1, acts as Mutex) and Counting Semaphore (unbounded integer value range).' },
      { title: 'Explain paging and segmentation.', answer: 'Paging divides physical memory into fixed-size frames and logical memory into pages (eliminates external fragmentation). Segmentation divides memory into variable-sized logical segments representing user program routines.' },
      { title: 'What is thrashing in OS?', answer: 'Thrashing occurs when the system spends more time swapping pages in and out of virtual memory than executing actual process instructions.' }
    ],
    pyqs: [
      { name: 'Calculate average waiting time for Round Robin scheduling', company: 'Accenture', year: '2025', round: 'Technical', role: 'Associate', diff: 'Medium', topic: 'Process Scheduling', desc: 'Compute Gantt chart and waiting times for 4 processes with time quantum Q=2ms.' },
      { name: 'Bankers Algorithm safety sequences', company: 'TCS', year: '2024', round: 'OA', role: 'Digital', diff: 'Hard', topic: 'Deadlocks', desc: 'Verify safety states and find safe allocation order sequences for processes.' }
    ],
    revisionNotes: [
      { title: 'Process Scheduling Overview', content: 'Algorithms include FCFS (non-preemptive), SJF (optimal, suffers from starvation), Round Robin (time quantum-based, preemptive), and Multilevel Queue.' },
      { title: 'Deadlock Conditions', content: 'Four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.' }
    ],
    mockTests: [
      { id: 'os_m1', title: 'OS Mock 1', subtitle: 'Processes & Scheduling', duration: '30 mins', questions: '20', includes: ['• Gantt Chart metrics', '• PCB states'], difficulty: 'Easy', reward: '100 XP', locked: false, unlock: 'Status: Unlocked' },
      { id: 'os_m2', title: 'OS Mock 2', subtitle: 'Memory & Virtual Memory', duration: '45 mins', questions: '30', includes: ['• Page Replacements', '• TLB caches'], difficulty: 'Medium', reward: '200 XP', locked: true, unlock: 'Unlock: Complete Mock 1' },
      { id: 'os_m3', title: 'OS Mock 3', subtitle: 'Deadlocks & Synchronization', duration: '45 mins', questions: '30', includes: ['• Bankers Algorithm', '• Semaphore locks'], difficulty: 'Medium', reward: '350 XP', locked: true, unlock: 'Unlock: Complete Mock 2' },
      { id: 'os_m4', title: 'OS Final OA', subtitle: 'Comprehensive OS', duration: '60 mins', questions: '40', includes: ['• Full Operating Systems concepts'], difficulty: 'Hard', reward: '500 XP', locked: true, unlock: 'Unlock: Complete Mock 3' }
    ]
  },
  cn: {
    id: 'cn',
    title: 'Computer Networks',
    overview: 'Explore OSI and TCP/IP network protocol layers, flow control, routing algorithms, and security protocols.',
    topicCategories: [
      { name: 'OSI Reference Model', count: '7 layers', progress: 80 },
      { name: 'IP Subnetting', count: '10 techniques', progress: 45 },
      { name: 'Transport Layer Protocols', count: '8 protocols', progress: 20 },
      { name: 'Application Layer DNS/HTTP', count: '8 configurations', progress: 5 }
    ],
    interviewQuestions: [
      { title: 'Explain TCP 3-Way Handshake.', answer: 'TCP establishes connection via 3 packets: 1. SYN (Client requests connection), 2. SYN-ACK (Server replies with receipt and request), 3. ACK (Client confirms receipt to initiate data flow).' },
      { title: 'What is the difference between IPv4 and IPv6?', answer: 'IPv4 uses 32-bit addresses (approx 4.3 billion combinations) written in dotted-decimal format. IPv6 uses 128-bit addresses (practically infinite combinations) written in hexadecimal format.' },
      { title: 'How does DNS lookup resolve domain names?', answer: 'DNS query maps string URLs to numeric IP addresses through a hierarchy: Resolver -> Root Server -> TLD Server -> Authoritative Nameserver.' }
    ],
    pyqs: [
      { name: 'Calculate network and host ranges for CIDR /26', company: 'Infosys', year: '2024', round: 'Technical', role: 'DSE', diff: 'Medium', topic: 'Subnetting', desc: 'Identify subnets, broadcast addresses, and valid host IPs for given prefix.' }
    ],
    revisionNotes: [
      { title: 'Flow Control & Error Control', content: 'Protocols include Stop-and-Wait, Go-Back-N (window size N), and Selective Repeat. Error correction uses Hamming codes.' },
      { title: 'Application Layer Ports', content: 'HTTP (80), HTTPS (443), DNS (53), SMTP (25), FTP (20/21), SSH (22).' }
    ],
    mockTests: [
      { id: 'cn_m1', title: 'CN Mock 1', subtitle: 'OSI Layers & Physical Layer', duration: '30 mins', questions: '20', includes: ['• Layer Functions', '• Cables & Topologies'], difficulty: 'Easy', reward: '100 XP', locked: false, unlock: 'Status: Unlocked' },
      { id: 'cn_m2', title: 'CN Mock 2', subtitle: 'Network & Routing', duration: '45 mins', questions: '30', includes: ['• IPv4 Subnetting', '• RIP & OSPF routing'], difficulty: 'Medium', reward: '200 XP', locked: true, unlock: 'Unlock: Complete Mock 1' },
      { id: 'cn_m3', title: 'CN Mock 3', subtitle: 'Transport Protocols', duration: '45 mins', questions: '30', includes: ['• TCP Congestion', '• UDP sliding window'], difficulty: 'Medium', reward: '350 XP', locked: true, unlock: 'Unlock: Complete Mock 2' },
      { id: 'cn_m4', title: 'CN Final OA', subtitle: 'Comprehensive Networks', duration: '60 mins', questions: '40', includes: ['• Entire Networking Systems'], difficulty: 'Hard', reward: '500 XP', locked: true, unlock: 'Unlock: Complete Mock 3' }
    ]
  },
  oops: {
    id: 'oops',
    title: 'Object-Oriented Programming',
    overview: 'Master abstract representations, encapsulation bounds, inheritance structures, polymorphism interfaces, and constructor scopes.',
    topicCategories: [
      { name: 'Four OOPs Pillars', count: '8 patterns', progress: 90 },
      { name: 'Constructors & Memory', count: '6 behaviors', progress: 60 },
      { name: 'Polymorphism & Overrides', count: '8 rules', progress: 40 },
      { name: 'Classes & Interfaces', count: '10 systems', progress: 15 }
    ],
    interviewQuestions: [
      { title: 'Explain the difference between Overloading and Overriding.', answer: 'Overloading (Compile-time Polymorphism): Multiple methods in same class have same name but different signatures. Overriding (Run-time Polymorphism): Child class redefines a parent method with identical name and signatures.' },
      { title: 'What is Encapsulation? How is it implemented?', answer: 'Encapsulation is the binding of data members and getter/setter functions into a single class container while restricting direct variable access using private modifiers.' },
      { title: 'Explain Virtual Functions and Abstract Classes.', answer: 'A virtual function is a member function declared within a base class and overridden by derived classes (resolves late binding). An abstract class has at least one Pure Virtual Function and cannot be directly instantiated.' }
    ],
    pyqs: [
      { name: 'Implement diamond inheritance problem resolution', company: 'Cognizant', year: '2025', round: 'Technical', role: 'GenC Pro', diff: 'Medium', topic: 'Inheritance', desc: 'Show how C++ virtual base class resolved multiple inheritance conflicts.' }
    ],
    revisionNotes: [
      { title: 'Access Specifiers', content: 'Private: Accessible only within class. Protected: Accessible within class and child classes. Public: Accessible everywhere.' },
      { title: 'Destructors', content: 'Invoked automatically when object scope ends. Has tilde (~) prefix. Cannot have arguments or return type.' }
    ],
    mockTests: [
      { id: 'op_m1', title: 'OOPs Mock 1', subtitle: 'Classes & Encapsulation', duration: '30 mins', questions: '20', includes: ['• Getters & Setters', '• Static keywords'], difficulty: 'Easy', reward: '100 XP', locked: false, unlock: 'Status: Unlocked' },
      { id: 'op_m2', title: 'OOPs Mock 2', subtitle: 'Inheritance & Pillars', duration: '45 mins', questions: '30', includes: ['• Multiple Inheritance', '• Abstraction'], difficulty: 'Medium', reward: '200 XP', locked: true, unlock: 'Unlock: Complete Mock 1' },
      { id: 'op_m3', title: 'OOPs Mock 3', subtitle: 'Run-time Polymorphism', duration: '45 mins', questions: '30', includes: ['• Virtual Tables vtables', '• Override rules'], difficulty: 'Medium', reward: '350 XP', locked: true, unlock: 'Unlock: Complete Mock 2' },
      { id: 'op_m4', title: 'OOPs Final OA', subtitle: 'Comprehensive OOPs', duration: '60 mins', questions: '40', includes: ['• Entire Object-Oriented design'], difficulty: 'Hard', reward: '500 XP', locked: true, unlock: 'Unlock: Complete Mock 3' }
    ]
  },
  sql: {
    id: 'sql',
    title: 'Structured Query Language',
    overview: 'Compose relational database queries, join operators, aggregated filtering, and window analysis.',
    topicCategories: [
      { name: 'DDL & DML Queries', count: '15 keywords', progress: 75 },
      { name: 'Joins (Inner, Outer, Cross)', count: '8 variations', progress: 50 },
      { name: 'Aggregations & Grouping', count: '8 structures', progress: 20 },
      { name: 'Window Functions & Triggers', count: '10 queries', progress: 0 }
    ],
    interviewQuestions: [
      { title: 'What is the difference between WHERE and HAVING clauses?', answer: 'WHERE filters rows before aggregations are executed. HAVING filters aggregated group values after the GROUP BY clause is processed.' },
      { title: 'Explain various types of SQL Joins.', answer: 'Inner Join (matching keys), Left Join (all left, matched right), Right Join (all right, matched left), Full Outer Join (all keys from both, null replacements for unmatched).' },
      { title: 'What are window functions in SQL?', answer: 'Window functions perform calculations across a partition of table rows matching the current row (e.g. ROW_NUMBER(), RANK(), DENSE_RANK() using the OVER() clause).' }
    ],
    pyqs: [
      { name: 'Query to find 2nd highest salary from Employees table', company: 'Accenture', year: '2025', round: 'Technical', role: 'Associate', diff: 'Medium', topic: 'Subqueries', desc: 'Write nested subquery or offset queries resolving duplicate salaries.' }
    ],
    revisionNotes: [
      { title: 'SQL Joins Cheat Sheet', content: 'Inner: Intersection. Left: Left Set + Intersection. Right: Right Set + Intersection. Full: Union.' },
      { title: 'Rank vs Dense Rank', content: 'RANK() skips rank numbers in case of tie. DENSE_RANK() does not skip rank numbers, keeping sequential integers.' }
    ],
    mockTests: [
      { id: 'sq_m1', title: 'SQL Mock 1', subtitle: 'DDL, DML, and Selects', duration: '30 mins', questions: '20', includes: ['• Select syntax', '• Where vs Like'], difficulty: 'Easy', reward: '100 XP', locked: false, unlock: 'Status: Unlocked' },
      { id: 'sq_m2', title: 'SQL Mock 2', subtitle: 'Joins & Subqueries', duration: '45 mins', questions: '30', includes: ['• Outer Joins', '• Nested selects'], difficulty: 'Medium', reward: '200 XP', locked: true, unlock: 'Unlock: Complete Mock 1' },
      { id: 'sq_m3', title: 'SQL Mock 3', subtitle: 'Grouping & Aggregations', duration: '45 mins', questions: '30', includes: ['• Group By & Having', '• Dense Rank overrides'], difficulty: 'Medium', reward: '350 XP', locked: true, unlock: 'Unlock: Complete Mock 2' },
      { id: 'sq_m4', title: 'SQL Final OA', subtitle: 'Comprehensive SQL Querying', duration: '60 mins', questions: '40', includes: ['• Full database queries'], difficulty: 'Hard', reward: '500 XP', locked: true, unlock: 'Unlock: Complete Mock 3' }
    ]
  }
};

export default coreSubjectsData;
