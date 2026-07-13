const sqlDetail = {
  theory: [
    { title: 'SQL Introduction', readingTime: '5 mins', difficulty: 'Easy', notes: 'Structured Query Language (SQL) is the standard language used to interact with Relational Database Management Systems (RDBMS). It allows users to read, write, modify, and delete relational records.' },
    { title: 'DDL Commands', readingTime: '8 mins', difficulty: 'Easy', notes: 'Data Definition Language (DDL) defines the database schema. Key statements: CREATE (creates tables/databases), ALTER (modifies schema structures), DROP (deletes tables completely), and TRUNCATE (wipes all rows, keeping columns).' },
    { title: 'DML Commands', readingTime: '8 mins', difficulty: 'Easy', notes: 'Data Manipulation Language (DML) manages data entries inside tables. Key statements: INSERT (adds rows), UPDATE (modifies fields), and DELETE (deletes rows with optional WHERE filter).' },
    { title: 'DCL Commands', readingTime: '6 mins', difficulty: 'Medium', notes: 'Data Control Language (DCL) controls database permissions and access. Key commands: GRANT (assigns privileges) and REVOKE (removes permissions).' },
    { title: 'TCL Commands', readingTime: '7 mins', difficulty: 'Medium', notes: 'Transaction Control Language (TCL) manages active transaction blocks. Key commands: COMMIT (saves changes), ROLLBACK (undoes changes since last commit), and SAVEPOINT (sets undo markers).' },
    { title: 'WHERE vs HAVING', readingTime: '10 mins', difficulty: 'Easy', notes: 'WHERE filters individual row records before groups are formed. HAVING filters group aggregates after the GROUP BY clause is processed.' },
    { title: 'GROUP BY', readingTime: '8 mins', difficulty: 'Easy', notes: 'GROUP BY aggregates rows sharing matching column values into single rows, allowing aggregate operations (SUM, COUNT, AVG) to run per group.' },
    { title: 'ORDER BY', readingTime: '5 mins', difficulty: 'Easy', notes: 'ORDER BY sorts query results in ascending (ASC, default) or descending (DESC) order based on one or more columns.' },
    { title: 'Aggregate Functions', readingTime: '6 mins', difficulty: 'Easy', notes: 'Functions like COUNT(), SUM(), AVG(), MIN(), and MAX() summarize multiple row values into a single numerical result.' },
    { title: 'Joins', readingTime: '12 mins', difficulty: 'Medium', notes: 'Joins merge rows from multiple tables based on related columns. Key joins: INNER, LEFT, RIGHT, and FULL OUTER JOIN.' },
    { title: 'Subqueries', readingTime: '12 mins', difficulty: 'Medium', notes: 'A subquery is a query nested inside another query (e.g. inside SELECT, WHERE, or FROM clauses). Can be independent or Correlated (references outer query fields).' },
    { title: 'Views', readingTime: '7 mins', difficulty: 'Medium', notes: 'A View is a virtual table containing rows queryable from a saved SELECT statement, enhancing database security and query simplicity.' },
    { title: 'Stored Procedures', readingTime: '10 mins', difficulty: 'Hard', notes: 'A Stored Procedure is a group of precompiled SQL statements stored in the database, allowing parameters and execution reuse.' },
    { title: 'Triggers', readingTime: '10 mins', difficulty: 'Hard', notes: 'A Trigger is an automatic program executed by the RDBMS in response to DML operations (INSERT, UPDATE, DELETE) on a table.' },
    { title: 'Window Functions', readingTime: '15 mins', difficulty: 'Hard', notes: 'Window functions perform calculations across a partition of rows relative to the current row without grouping rows. Key functions: ROW_NUMBER, RANK, DENSE_RANK.' },
    { title: 'CTE', readingTime: '8 mins', difficulty: 'Medium', notes: 'A Common Table Expression (CTE) is a temporary result set defined using the WITH clause, improving SQL query readability.' },
    { title: 'Indexes', readingTime: '10 mins', difficulty: 'Hard', notes: 'Indexes are datastructures (usually B-Trees) used by the database optimizer to accelerate row queries, trading write speed for read speed.' }
  ],

  questions: [
    {
      title: 'Explain INNER JOIN.',
      definition: 'Combines matching records between tables.',
      explanation: 'INNER JOIN returns rows only when there is a match in both joined tables based on the ON condition key fields. If a row in the left table does not match a row in the right table, it is excluded from results.',
      example: 'Retrieve employee details alongside their department names.',
      query: 'SELECT e.name, d.dept_name\nFROM Employees e\nINNER JOIN Departments d ON e.dept_id = d.id;',
      tip: 'Use aliases (like e for Employees) to keep query syntax clean and readable.',
      mistake: 'Forgetting to specify the ON join condition, which creates a massive Cartesian Product (Cross Join).',
      followUp: 'What is the difference between INNER JOIN and LEFT JOIN?'
    },
    {
      title: 'Difference between WHERE and HAVING.',
      definition: 'Row-level filtering vs. group-level filtering.',
      explanation: 'WHERE filters individual row records before GROUP BY grouping occurs, and cannot reference aggregate functions. HAVING filters aggregated groupings after GROUP BY runs, referencing fields like COUNT() or SUM().',
      example: 'Find departments with average salary above 50,000.',
      query: 'SELECT dept_id, AVG(salary)\nFROM Employees\nWHERE status = \'Active\'\nGROUP BY dept_id\nHAVING AVG(salary) > 50000;',
      tip: 'Write row filters in WHERE to discard data early, saving database memory before grouping runs.',
      mistake: 'Using aggregates in WHERE clauses: "WHERE AVG(salary) > 50000" causes an immediate query compilation error.',
      followUp: 'Can we use HAVING without a GROUP BY clause in SQL?'
    },
    {
      title: 'Difference between DELETE, TRUNCATE and DROP.',
      definition: 'Data deletion (DML) vs. schema empty (DDL) vs. schema drop (DDL).',
      explanation: 'DELETE is DML, row-by-row, filters with WHERE, maintains table locks, and can be rolled back. TRUNCATE is DDL, deallocates entire table data pages instantly, resets identity seeds, cannot use WHERE, and requires alter permissions. DROP is DDL, completely deletes both table data and the table structure from system catalog.',
      example: 'Compare the three approaches.',
      query: '-- Delete: DELETE FROM Employees WHERE id = 5;\n-- Truncate: TRUNCATE TABLE Logs;\n-- Drop: DROP TABLE Archive_Employees;',
      tip: 'Use TRUNCATE for quick logs cleaning when you want to retain empty table schemas.',
      mistake: 'Running TRUNCATE on tables referenced by foreign keys: this is blocked by DBMS constraint engines.',
      followUp: 'Which commands trigger database delete transaction logging?'
    },
    {
      title: 'Explain GROUP BY.',
      definition: 'Groups rows with matching values into summary rows.',
      explanation: 'GROUP BY aggregates individual rows into buckets sharing identical values in selected columns. All non-aggregated columns in SELECT must appear in the GROUP BY clause.',
      example: 'Count employees in each department.',
      query: 'SELECT dept_id, COUNT(*)\nFROM Employees\nGROUP BY dept_id;',
      tip: 'Every column in SELECT must either be in the GROUP BY list or be inside an aggregate function.',
      mistake: 'Writing "SELECT name, dept_id, COUNT(*) FROM Employees GROUP BY dept_id" (name causes syntax failure).',
      followUp: 'Does GROUP BY sort the output results by default in SQL?'
    },
    {
      title: 'What is Normalization.',
      definition: 'Organizing database tables to reduce redundancy and dependencies.',
      explanation: 'Decomposes tables to avoid insertion, update, and deletion anomalies. Normal forms: 1NF (atomic columns), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF (every determinant is a superkey).',
      example: 'Describe normalization stages.',
      query: '-- 1NF: Split multi-valued fields\n-- 2NF: Extract part-key dependents to new tables\n-- 3NF: Extract non-key transitive dependencies',
      tip: 'BCNF is stricter than 3NF. Ensure candidate keys are correctly identified before normal form evaluations.',
      mistake: 'Over-normalizing: creating too many tables requires too many slow Joins to retrieve basic values.',
      followUp: 'What is denormalization and when is it practiced?'
    },
    {
      title: 'Explain Window Functions.',
      definition: 'Perform metrics across a subset of partition rows without grouping.',
      explanation: 'Unlike GROUP BY which aggregates rows into a single row, Window functions keep row identities intact while executing aggregates or rank analytics across a partition of rows.',
      example: 'Calculate running total of sales per department.',
      query: 'SELECT dept_id, sales_amount,\n       SUM(sales_amount) OVER(PARTITION BY dept_id ORDER BY sale_date) as running_total\nFROM Sales;',
      tip: 'Window queries require the OVER clause containing optional PARTITION BY and ORDER BY statements.',
      mistake: 'Trying to filter window functions inside WHERE: window functions run AFTER WHERE row filters.',
      followUp: 'What is the performance difference between Window functions and self-joins?'
    },
    {
      title: 'Explain ROW_NUMBER.',
      definition: 'Assigns a sequential integer index starting at 1.',
      explanation: 'ROW_NUMBER() assigns a unique, sequential integer to each row within a window partition, ordering values strictly by the specified columns.',
      example: 'Retrieve the first joined employee per department.',
      query: 'WITH Ranked as (\n  SELECT name, dept_id, ROW_NUMBER() OVER(PARTITION BY dept_id ORDER BY join_date) as rn\n  FROM Employees\n)\nSELECT * FROM Ranked WHERE rn = 1;',
      tip: 'ROW_NUMBER always produces unique sequential rankings even if values are identical.',
      mistake: 'Expecting stable rankings if order parameters have duplicate values (use deterministic keys).',
      followUp: 'How do you handle ties using ROW_NUMBER?'
    },
    {
      title: 'Difference between RANK and DENSE_RANK.',
      definition: 'Gapped rankings vs. contiguous rankings.',
      explanation: 'If a tie occurs, RANK() skips ranking numbers. For example: 1, 2, 2, 4. DENSE_RANK() does not skip rank integers, yielding: 1, 2, 2, 3.',
      example: 'Compare RANK and DENSE_RANK rankings.',
      query: 'SELECT score,\n       RANK() OVER(ORDER BY score DESC) as rk,\n       DENSE_RANK() OVER(ORDER BY score DESC) as drk\nFROM Exams;',
      tip: 'Use DENSE_RANK when you need dense leaderboard ranks with contiguous values.',
      mistake: 'Using RANK when you want a top-N ranking without index skips.',
      followUp: 'How do duplicates affect the count index of ranks?'
    },
    {
      title: 'Explain Trigger.',
      definition: 'Precompiled code executing on database actions.',
      explanation: 'Triggers are active database routines fired before or after DML events (INSERT, UPDATE, DELETE). They access temporary records in virtual tables: INSERTED and DELETED.',
      example: 'Log deleted employee records automatically.',
      query: 'CREATE TRIGGER log_deletion\nAFTER DELETE ON Employees\nFOR EACH ROW\nBEGIN\n  INSERT INTO Deletion_Logs VALUES(OLD.id, OLD.name, NOW());\nEND;',
      tip: 'Keep trigger logic lightweight to prevent blocking database write operations.',
      mistake: 'Writing cascading triggers that trigger each other recursively, causing database stack limit overflows.',
      followUp: 'What is the difference between Row-level and Statement-level triggers?'
    },
    {
      title: 'Explain View.',
      definition: 'Virtual table defined by a saved query.',
      explanation: 'A view does not store actual duplicate tables (unless materialized). It executes its underlying SELECT query dynamically whenever it is referenced in an outer SELECT.',
      example: 'Create a view hiding employee salary columns.',
      query: 'CREATE VIEW Public_Employees AS\nSELECT id, name, department\nFROM Employees\nWHERE status = \'Active\';',
      tip: 'Use views to enforce data security by limiting user query scopes.',
      mistake: 'Treating a view as a physical copy: updates on views modify original base table records.',
      followUp: 'What is a materialized view and when is it updated?'
    },
    {
      title: 'Explain SELF JOIN.',
      definition: 'Joining a table with itself.',
      explanation: 'Useful for querying hierarchical parent-child values stored in the same table, like employees and their direct managers.',
      example: 'Find employee names and their manager names.',
      query: 'SELECT e.name as Emp, m.name as Mgr\nFROM Employees e\nLEFT JOIN Employees m ON e.manager_id = m.id;',
      tip: 'Always provide unique alias names (like e and m) for self-joined tables.',
      mistake: 'Not using LEFT JOIN when some rows do not have managers (e.g. CEOs are excluded in INNER JOIN).',
      followUp: 'Can we use self joins to identify duplicate rows in a table?'
    },
    {
      title: 'What is a Correlated Subquery?',
      definition: 'Subquery referencing outer query variables.',
      explanation: 'Unlike normal subqueries which run once, correlated queries evaluate row-by-row for every candidate row in the outer query, matching outer scopes.',
      example: 'Find employees earning more than their department average.',
      query: 'SELECT name, salary, dept_id\nFROM Employees e\nWHERE salary > (SELECT AVG(salary) FROM Employees WHERE dept_id = e.dept_id);',
      tip: 'Avoid correlated subqueries in large tables: they cause quadratic O(N^2) evaluation overhead.',
      mistake: 'Neglecting table aliases inside inner query filters.',
      followUp: 'How can a correlated query be optimized using joins?'
    },
    {
      title: 'Explain Union vs Union All.',
      definition: 'Merging result sets with duplicate removal vs. without.',
      explanation: 'UNION merges query outputs, executing sorting and duplicate elimination (overhead). UNION ALL merges lists instantly, preserving duplicates.',
      example: 'Combine customer and supplier cities.',
      query: 'SELECT city FROM Customers\nUNION ALL\nSELECT city FROM Suppliers;',
      tip: 'Prefer UNION ALL when you know datasets have disjoint values, avoiding sorting penalties.',
      mistake: 'Having mismatching column types or order inside the combined SELECT queries.',
      followUp: 'Does UNION or UNION ALL consume more database temp memory?'
    },
    {
      title: 'What is ACID in SQL?',
      definition: 'Database transaction consistency rules.',
      explanation: 'A: Atomicity (all changes complete or fail). C: Consistency (valid states only). I: Isolation (no interference). D: Durability (resilient writes).',
      example: 'Bank transfer transaction.',
      query: 'START TRANSACTION;\nUPDATE Accounts SET bal = bal - 100 WHERE id = 1;\nUPDATE Accounts SET bal = bal + 100 WHERE id = 2;\nCOMMIT;',
      tip: 'Manage isolation levels carefully (e.g., Read Committed vs Serializable) to balance consistency and throughput.',
      mistake: 'Leaving transaction connections open: this keeps write locks active and stalls other operations.',
      followUp: 'What are dirty reads and phantom reads?'
    },
    {
      title: 'Explain CTE (Common Table Expression).',
      definition: 'Temporary named result sets using WITH.',
      explanation: 'CTEs act as readable virtual temp scopes active during query execution. Recursion is supported via recursive CTEs.',
      example: 'Define departments with high headcount.',
      query: 'WITH Dept_Counts as (\n  SELECT dept_id, COUNT(*) as cnt\n  FROM Employees\n  GROUP BY dept_id\n)\nSELECT * FROM Dept_Counts WHERE cnt > 5;',
      tip: 'Use CTEs instead of complex subqueries to make queries self-documenting.',
      mistake: 'Attempting to reference a CTE scope outside the immediate query following its WITH definition.',
      followUp: 'How do CTEs compare to temporary tables in terms of memory?'
    },
    {
      title: 'What is an Index? Types of Indexes.',
      definition: 'Data structures accelerating record search speed.',
      explanation: 'Indexes speed up data retrieval. Primary index (clustered, physically orders table rows, 1 per table) vs Secondary index (non-clustered, separate lookup index table).',
      example: 'Create unique index on email column.',
      query: 'CREATE UNIQUE INDEX idx_emp_email ON Employees(email);',
      tip: 'Index columns used frequently inside WHERE, JOIN, and ORDER BY queries.',
      mistake: 'Indexing every single column: this causes major slow downs on DML inserts/updates.',
      followUp: 'How does a B-Tree index work?'
    },
    {
      title: 'What is a Foreign Key constraint?',
      definition: 'Referential integrity constraint between tables.',
      explanation: 'Enforces that values in one table column must exist in a parent table column. Cascading updates/deletions can be defined.',
      example: 'Define table with foreign key constraints.',
      query: 'CREATE TABLE Orders (\n  id INT PRIMARY KEY,\n  user_id INT,\n  FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE\n);',
      tip: 'Configure cascade parameters like ON DELETE SET NULL carefully depending on business logic.',
      mistake: 'Trying to insert a child record with a parent key ID that does not exist.',
      followUp: 'What are orphan records?'
    },
    {
      title: 'Explain SQL NULL values.',
      definition: 'Represents unknown or missing data values.',
      explanation: 'NULL is a placeholder, not 0 or empty string. Expressions containing NULL return NULL. Testing requires IS NULL, not equals symbol.',
      example: 'Query rows with missing email addresses.',
      query: 'SELECT * FROM Employees WHERE email IS NULL;',
      tip: 'Use functions like COALESCE(email, \'N/A\') to replace null fields with default values.',
      mistake: 'Writing "WHERE email = NULL" which returns empty sets (NULL comparisons yield UNKNOWN).',
      followUp: 'How does COUNT(column) handle NULL values?'
    },
    {
      title: 'What is a Stored Procedure?',
      definition: 'Precompiled SQL code block stored in schema.',
      explanation: 'Allows input/output parameters, conditional IF blocks, loop constructs, and local variables. Reduces network traffic by executing on-server.',
      example: 'Procedure to update employee salary.',
      query: 'CREATE PROCEDURE AdjustSalary(IN emp_id INT, IN increment INT)\nBEGIN\n  UPDATE Employees SET salary = salary + increment WHERE id = emp_id;\nEND;',
      tip: 'Use procedures for administrative tasks and complex multi-query batch sequences.',
      mistake: 'Placing complex business logic in procedures makes code difficult to version-control.',
      followUp: 'What is the difference between Stored Procedures and User-Defined Functions?'
    },
    {
      title: 'Explain DDL vs DML commands.',
      definition: 'Structure schema commands vs Data manipulation commands.',
      explanation: 'DDL (Create, Alter, Drop, Truncate) creates and modifies the structure of database objects. DML (Insert, Update, Delete) interacts with the actual data.',
      example: 'Compare DDL and DML statements.',
      query: '-- DDL: ALTER TABLE Users ADD status VARCHAR(10);\n-- DML: UPDATE Users SET status = \'Active\';',
      tip: 'DDL commits automatically in many databases (cannot rollback), while DML can be rolled back.',
      mistake: 'Forgetting that TRUNCATE is DDL, not DML.',
      followUp: 'Can DDL statements be executed inside a transaction?'
    },
    {
      title: 'What is a Primary Key vs Unique Key?',
      definition: 'Unique row identifier vs Unique column values constraint.',
      explanation: 'Primary Key uniquely identifies each row, cannot contain NULLs, and automatically creates a clustered index. Unique Key enforces unique column values, allows one NULL (in SQL Server), and generates non-clustered indexes.',
      example: 'Define primary and unique key columns.',
      query: 'CREATE TABLE Users (\n  id INT PRIMARY KEY,\n  email VARCHAR(50) UNIQUE\n);',
      tip: 'Every table should have exactly one primary key to enforce entity integrity.',
      mistake: 'Defining multiple primary keys (a table can only have one, though it can be a composite key).',
      followUp: 'Can a table have multiple unique keys?'
    },
    {
      title: 'Explain Cross Join.',
      definition: 'Cartesian product of joined tables.',
      explanation: 'Returns every row combination from both tables. The result set size is the product of row counts (N * M).',
      example: 'Cross join colors and sizes.',
      query: 'SELECT c.color, s.size\nFROM Colors c\nCROSS JOIN Sizes s;',
      tip: 'Avoid CROSS JOIN on large tables: it can degrade performance and run out of memory.',
      mistake: 'Accidentally writing a cross join by omitting JOIN filters in a comma-separated list of tables.',
      followUp: 'When is a CROSS JOIN useful?'
    },
    {
      title: 'What are Joins vs Unions?',
      definition: 'Horizontal matching vs Vertical stacking.',
      explanation: 'Joins combine columns from different tables based on key relations. Unions combine row outputs from queries vertically, requiring matching column types.',
      example: 'Compare structural outputs.',
      query: '-- Join combines attributes:\nSELECT * FROM A JOIN B ON A.id = B.id;\n-- Union combines results:\nSELECT name FROM A UNION SELECT name FROM B;',
      tip: 'Ensure SELECT queries in UNION have the same number of columns in the same order.',
      mistake: 'Using UNION when you want to look up matching values in another table.',
      followUp: 'Does UNION sorting impact query execution plan speed?'
    },
    {
      title: 'Explain SQL injection.',
      definition: 'Security vulnerability via malicious inputs.',
      explanation: 'Occurs when user input is concatenated directly into SQL queries, allowing attackers to execute unauthorized commands.',
      example: 'Vulnerable query construction.',
      query: '-- Vulnerable dynamic SQL:\n-- query = "SELECT * FROM Users WHERE name = \'" + input + "\'";\n-- Input: "admin\' OR \'1\'=\'1"',
      tip: 'Always use parameterized queries or Prepared Statements to prevent injection vulnerabilities.',
      mistake: 'Relying solely on frontend input sanitization (always validate on the backend).',
      followUp: 'How do Prepared Statements mitigate injection risks?'
    },
    {
      title: 'What is the difference between HAVING and WHERE?',
      definition: 'Group-level filters vs Individual row filters.',
      explanation: 'WHERE filters rows before aggregation. HAVING filters aggregated data after the GROUP BY clause is executed.',
      example: 'Query showing both filters.',
      query: 'SELECT job_title, AVG(salary)\nFROM Employees\nWHERE status = \'Active\'\nGROUP BY job_title\nHAVING AVG(salary) > 60000;',
      tip: 'Do not put non-aggregated column filters inside the HAVING clause.',
      mistake: 'Using aggregated functions in the WHERE clause.',
      followUp: 'Can HAVING exist without GROUP BY?'
    },
    {
      title: 'Explain recursive CTE.',
      definition: 'Common table expression referencing itself.',
      explanation: 'Used to traverse hierarchical or tree-structured data like organizational charts, category trees, or bills of materials.',
      example: 'Generate a sequence of numbers from 1 to 5.',
      query: 'WITH RECURSIVE NumberSeq AS (\n  SELECT 1 as num\n  UNION ALL\n  SELECT num + 1 FROM NumberSeq WHERE num < 5\n)\nSELECT * FROM NumberSeq;',
      tip: 'Always include a termination condition in recursive CTEs to prevent infinite loops.',
      mistake: 'Creating recursive CTEs without termination filters, causing memory overflows.',
      followUp: 'How do you traverse an employee manager hierarchy using CTEs?'
    },
    {
      title: 'What is a database transaction?',
      definition: 'Sequence of operations executed as a single unit.',
      explanation: 'Guarantees ACID properties. If any command fails, rollback restores the database to its initial pre-transaction state.',
      example: 'Transfer funds transaction.',
      query: 'START TRANSACTION;\nUPDATE Accounts SET bal = bal - 500 WHERE id = 101;\nUPDATE Accounts SET bal = bal + 500 WHERE id = 102;\nCOMMIT;',
      tip: 'Always wrap multi-step write sequences inside transaction blocks.',
      mistake: 'Executing non-critical SELECT queries inside write transaction blocks.',
      followUp: 'What is transaction deadlock?'
    },
    {
      title: 'What is a Clustered Index vs Non-Clustered Index?',
      definition: 'Physical ordering index vs Pointer lookup index.',
      explanation: 'Clustered index defines the physical order of table rows (only 1 per table). Non-clustered index stores index keys and row pointers (multiple allowed).',
      example: 'Create indexes.',
      query: '-- Clustered: Auto-created on PRIMARY KEY\n-- Non-Clustered secondary index:\nCREATE INDEX idx_name ON Users(last_name);',
      tip: 'Non-clustered indexes are ideal for columns filtered in WHERE clauses but not modified frequently.',
      mistake: 'Assuming clustered indexes can be defined on multiple columns independently.',
      followUp: 'How does index search perform in non-clustered index scans?'
    },
    {
      title: 'Explain DCL commands.',
      definition: 'Data Control Language commands managing permissions.',
      explanation: 'DCL (GRANT, REVOKE) handles database access security, assigning privileges to user accounts.',
      example: 'Grant select privileges on user table.',
      query: 'GRANT SELECT, INSERT ON Users TO \'analyst_user\'@\'localhost\';\nREVOKE INSERT ON Users FROM \'analyst_user\'@\'localhost\';',
      tip: 'Adhere to the principle of least privilege when assigning database access.',
      mistake: 'Granting wildcards (*) to public user profiles.',
      followUp: 'What are database roles?'
    },
    {
      title: 'Explain TCL commands.',
      definition: 'Transaction Control Language commands managing transaction states.',
      explanation: 'TCL (COMMIT, ROLLBACK, SAVEPOINT) saves changes, rolls back states, or creates roll-back checkpoints.',
      example: 'Transaction rollback to savepoint.',
      query: 'START TRANSACTION;\nINSERT INTO Logs VALUES(1, \'Login\');\nSAVEPOINT pt1;\nINSERT INTO Logs VALUES(2, \'Payment\');\nROLLBACK TO pt1;\nCOMMIT;',
      tip: 'Use savepoints to rollback parts of complex transactions instead of the whole transaction.',
      mistake: 'Forgetting to run COMMIT to finalize modifications.',
      followUp: 'Does database disconnection commit or rollback pending changes?'
    }
  ],

  revision: [
    { title: 'DDL', notes: 'CREATE, ALTER, DROP, TRUNCATE. Changes database schema structures. Cannot be rolled back in many systems.' },
    { title: 'DML', notes: 'INSERT, UPDATE, DELETE, SELECT. Manipulates database records inside tables. Can be rolled back.' },
    { title: 'TCL', notes: 'COMMIT, ROLLBACK, SAVEPOINT. Manages transaction states and saves or rolls back active transaction blocks.' },
    { title: 'DCL', notes: 'GRANT, REVOKE. Manages user roles and grants or revokes security access privileges.' },
    { title: 'Joins', notes: 'INNER (matches only), LEFT (all left + matches), RIGHT (all right + matches), FULL (all left + all right).' },
    { title: 'Aggregates', notes: 'COUNT, SUM, AVG, MIN, MAX. Aggregates values across rows, filtered by HAVING when grouped.' },
    { title: 'Window Functions', notes: 'ROW_NUMBER (sequential index), RANK (gapped ranks on tie), DENSE_RANK (contiguous ranks on tie).' },
    { title: 'Indexes', notes: 'Clustered (physically orders rows, max 1), Non-Clustered (index tree + pointers, multiple allowed).' }
  ],

  companies: [
    { name: 'Infosys', rating: 5 },
    { name: 'TCS', rating: 4 },
    { name: 'Accenture', rating: 5 },
    { name: 'Capgemini', rating: 3 },
    { name: 'Wipro', rating: 3 },
    { name: 'Cognizant', rating: 4 }
  ],

  rapidFire: [
    { q: 'Which statement is used to remove duplicates from SELECT?', a: 'DISTINCT keyword.' },
    { q: 'Is NULL same as zero or empty string?', a: 'No, NULL represents missing or unknown data.' },
    { q: 'Which join returns all rows from left table regardless of matches?', a: 'LEFT JOIN (or LEFT OUTER JOIN).' },
    { q: 'Can we use WHERE clause with aggregate functions?', a: 'No, use HAVING clause for aggregated fields.' },
    { q: 'What does DDL stand for?', a: 'Data Definition Language.' },
    { q: 'What does DML stand for?', a: 'Data Manipulation Language.' },
    { q: 'Name the keyword used to sort SQL query outputs.', a: 'ORDER BY.' },
    { q: 'Which key uniquely identifies each record in a table?', a: 'Primary Key.' },
    { q: 'Can a table have multiple clustered indexes?', a: 'No, only one clustered index per table is allowed.' },
    { q: 'Which operator matches string patterns with wildcard characters?', a: 'LIKE operator (using % and _).' },
    { q: 'What is the default sort order of the ORDER BY clause?', a: 'Ascending (ASC).' },
    { q: 'Name the virtual table defined by a saved SELECT query.', a: 'View.' },
    { q: 'Which transaction isolation level is the most strict?', a: 'Serializable.' },
    { q: 'What does the TRUNCATE command do?', a: 'DDL command that deletes all rows in a table instantly.' },
    { q: 'Which keyword groups rows sharing matching column values?', a: 'GROUP BY.' },
    { q: 'Which window function yields contiguous ranks without splits on ties?', a: 'DENSE_RANK.' },
    { q: 'What command assigns security permissions to database users?', a: 'GRANT (DCL).' },
    { q: 'Name the temporary result set configured using WITH.', a: 'CTE (Common Table Expression).' },
    { q: 'What is a subquery nested inside a FROM clause called?', a: 'Inline View or Derived Table.' },
    { q: 'Which constraints enforce referential integrity between tables?', a: 'Foreign Key constraints.' }
  ],

  downloads: [
    { title: 'SQL Revision Notes', desc: 'DDL/DML guides and normalization cheatsheets.', size: '1.4 MB' },
    { title: 'SQL Interview Notes', desc: 'Answers to the top 50 SQL questions.', size: '2.1 MB' },
    { title: 'SQL Cheat Sheet', desc: 'Interactive syntax reference sheet.', size: '850 KB' },
    { title: 'SQL Mind Map', desc: 'Visual tree of joins, normalization, and window partitions.', size: '3.5 MB' }
  ]
};

export default sqlDetail;
