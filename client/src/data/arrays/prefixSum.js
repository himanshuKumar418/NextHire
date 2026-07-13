// Data payload for Prefix Sum pattern

const prefixSum = {
  title: 'Prefix Sum Pattern',
  category: 'Arrays',
  difficulty: 'Easy',
  questionsCount: 15,
  estimatedTime: '1.5 Hours',
  rewardXP: 50,
  progress: 0,
  description: 'Precompute running sums to answer range query calculations in constant O(1) time.',
  
  recognitionKeywords: [
    { title: 'Running Sum', text: 'Requires repeated sum queries over contiguous array bounds.' },
    { title: 'Range Query', text: 'Answering subarray sums between index L and R frequently.' },
    { title: 'Subarray Sum', text: 'Checking if contiguous subsegments equal a target sum value.' },
    { title: 'Difference Array', text: 'Doing range addition updates in-place across overlapping bounds.' }
  ],

  conceptCards: {
    what: 'Precalculates a running sum array where prefix[i] stores the sum of all elements from index 0 to i.',
    why: 'Transforms range queries of size K from O(K) into O(1) subtraction lookups: sum(L, R) = prefix[R] - prefix[L - 1].',
    when: 'Range sum queries, subarray target comparisons, range update additions.',
    time: 'O(1) - Answering query queries (after O(N) precomputation).',
    space: 'O(N) - Prefix array array to store sums.',
    advantages: 'Answers infinite range sum queries in constant time, ideal for large databases.',
    limitations: 'Array must be static. Dynamic updates to base items require rebuilding the prefix array in O(N).'
  },

  simulation: {
    target: 8, // Target Range Sum for Range 1-3
    array: [3, 1, 2, 5],
    steps: [
      { left: 0, right: 0, sum: 3, action: 'Prefix array build: [3, 0, 0, 0]. set prefix[0] = 3.', decision: 'Add next element (idx=1)' },
      { left: 0, right: 1, sum: 4, action: 'Prefix array build: [3, 4, 0, 0]. prefix[1] = 3+1 = 4.', decision: 'Add next element (idx=2)' },
      { left: 0, right: 2, sum: 6, action: 'Prefix array build: [3, 4, 6, 0]. prefix[2] = 4+2 = 6.', decision: 'Add next element (idx=3)' },
      { left: 0, right: 3, sum: 11, action: 'Prefix array build: [3, 4, 6, 11]. prefix[3] = 6+5 = 11.', decision: 'Prefix Build Complete. Solve Range Query [1, 3]' },
      { left: 0, right: 3, sum: 8, action: 'Range Sum [1,3] = prefix[3] - prefix[0] = 11 - 3 = 8. (Checks: 1+2+5 = 8).', decision: 'Correct! Range Sum solved in O(1).' }
    ]
  },

  syntax: {
    cpp: `// C++ Prefix Sum Template
#include <vector>

std::vector<int> buildPrefix(const std::vector<int>& arr) {
    std::vector<int> prefix(arr.size());
    if (arr.empty()) return prefix;
    prefix[0] = arr[0];
    for (size_t i = 1; i < arr.size(); i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
    return prefix;
}

int querySum(const std::vector<int>& prefix, int L, int R) {
    if (L == 0) return prefix[R];
    return prefix[R] - prefix[L - 1];
}`,
    java: `// Java Prefix Sum Template
public class PrefixSum {
    public static int[] buildPrefix(int[] arr) {
        int[] prefix = new int[arr.length];
        if (arr.length == 0) return prefix;
        prefix[0] = arr[0];
        for (int i = 1; i < arr.length; i++) {
            prefix[i] = prefix[i - 1] + arr[i];
        }
        return prefix;
    }
    public static int querySum(int[] prefix, int L, int R) {
        if (L == 0) return prefix[R];
        return prefix[R] - prefix[L - 1];
    }
}`,
    python: `# Python Prefix Sum Template

def build_prefix(arr):
    if not arr: return []
    prefix = [0] * len(arr)
    prefix[0] = arr[0]
    for i in range(1, len(arr)):
        prefix[i] = prefix[i - 1] + arr[i]
    return prefix

def query_sum(prefix, L, R):
    if L == 0: return prefix[R]
    return prefix[R] - prefix[L - 1]`
  },

  questions: [
    { id: 'running-sum', name: 'Running Sum of 1d Array', difficulty: 'Easy', companies: ['Adobe', 'TCS'], leetcodeUrl: 'https://leetcode.com/problems/running-sum-of-1d-array/', solved: false },
    { id: 'range-sum-query', name: 'Range Sum Query - Immutable', difficulty: 'Easy', companies: ['Facebook', 'Infosys'], leetcodeUrl: 'https://leetcode.com/problems/range-sum-query-immutable/', solved: false },
    { id: 'subarray-sum-k', name: 'Subarray Sum Equals K', difficulty: 'Medium', companies: ['Google', 'Amazon', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/subarray-sum-equals-k/', solved: false },
    { id: 'continuous-subarray', name: 'Continuous Subarray Sum', difficulty: 'Medium', companies: ['Facebook', 'Wipro'], leetcodeUrl: 'https://leetcode.com/problems/continuous-subarray-sum/', solved: false },
    { id: 'diff-array', name: 'Difference Array Range Queries', difficulty: 'Medium', companies: ['Accenture', 'TCS'], leetcodeUrl: 'https://leetcode.com/problems/range-addition/', solved: false },
    { id: 'product-except-self', name: 'Product of Array Except Self', difficulty: 'Medium', companies: ['Amazon', 'Apple'], leetcodeUrl: 'https://leetcode.com/problems/product-of-array-except-self/', solved: false },
    { id: 'find-pivot-index', name: 'Find Pivot Index', difficulty: 'Easy', companies: ['Facebook', 'Google'], leetcodeUrl: 'https://leetcode.com/problems/find-pivot-index/', solved: false },
    { id: 'subarray-divisible-k', name: 'Subarray Sums Divisible by K', difficulty: 'Medium', companies: ['Google', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/subarray-sums-divisible-by-k/', solved: false },
    { id: 'find-middle-index', name: 'Find the Middle Index in Array', difficulty: 'Easy', companies: ['TCS', 'Wipro'], leetcodeUrl: 'https://leetcode.com/problems/find-the-middle-index-in-array/', solved: false },
    { id: 'range-sum-query-2d', name: 'Range Sum Query 2D - Immutable', difficulty: 'Medium', companies: ['Google', 'Bloomberg'], leetcodeUrl: 'https://leetcode.com/problems/range-sum-query-2d-immutable/', solved: false },
    { id: 'max-size-equals-k', name: 'Maximum Size Subarray Sum Equals k', difficulty: 'Medium', companies: ['Google', 'Facebook'], leetcodeUrl: 'https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/', solved: false },
    { id: 'min-value-step', name: 'Minimum Value to Get Positive Step Sum', difficulty: 'Easy', companies: ['Google', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/', solved: false },
    { id: 'grid-game', name: 'Grid Game', difficulty: 'Medium', companies: ['Google', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/grid-game/', solved: false },
    { id: 'contiguous-array', name: 'Contiguous Array', difficulty: 'Medium', companies: ['Amazon', 'Facebook'], leetcodeUrl: 'https://leetcode.com/problems/contiguous-array/', solved: false },
    { id: 'shifting-letters', name: 'Shifting Letters', difficulty: 'Medium', companies: ['TCS', 'Cognizant'], leetcodeUrl: 'https://leetcode.com/problems/shifting-letters/', solved: false }
  ],

  companyFrequency: [
    { name: 'Amazon', percent: 76 },
    { name: 'Google', percent: 70 },
    { name: 'Microsoft', percent: 68 },
    { name: 'Infosys', percent: 84 }
  ],

  pyqs: [
    { company: 'Infosys', year: '2025', title: 'Subarray Modulo Range Query', desc: 'Asked in OA', diff: 'Medium' },
    { company: 'Accenture', year: '2024', title: 'Running Query range additions', desc: 'Asked in Interview', diff: 'Easy' }
  ],

  pitfalls: [
    { mistake: 'Index Out of Bounds (L-1)', correct: 'When L = 0, prefix[L - 1] would access index -1. Add an conditional check: if L == 0 return prefix[R].' },
    { mistake: 'Integer Overflow on Sums Accumulation', correct: 'Use 64-bit values (long long in C++, long in Java) if array contains large sums.' }
  ],

  achievements: [
    { name: 'Precomputer', badge: '🎓', req: 'Solve 3 Prefix Sum questions', unlocked: false }
  ],
  
  nextPattern: { name: 'Kadane\'s Algorithm', path: '/prepare/patterns/arrays/kadane' }
};

export default prefixSum;
