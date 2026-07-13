// Data payload for Kadane's Algorithm pattern

const kadane = {
  title: 'Kadane\'s Algorithm',
  category: 'Arrays',
  difficulty: 'Medium',
  questionsCount: 6,
  estimatedTime: '1.0 Hours',
  rewardXP: 40,
  progress: 0,
  description: 'Track running subarray sums and dynamically reset them to zero when they drop below zero to find the maximum sum contiguous segment.',
  
  recognitionKeywords: [
    { title: 'Maximum Sum', text: 'Problem asks you to find the maximum sum of a contiguous subarray.' },
    { title: 'Restart Current Sum', text: 'Reset cumulative sum to 0 or local value when it becomes negative.' },
    { title: 'Continuous Segment', text: 'Requires contiguous boundaries (cannot skip elements).' },
    { title: 'Negative Handling', text: 'Must account for arrays consisting entirely of negative integers.' }
  ],

  conceptCards: {
    what: 'A dynamic programming approach that scans the array once. At each element, it decides whether to add it to the existing subarray sum, or start a new subarray sum starting from this element.',
    why: 'Reduces max subarray search from nested loops O(N²) to a single O(N) scan.',
    when: 'Contiguous max subarray sum queries, maximum circular subarray sum, maximum product (with adjustments).',
    time: 'O(N) - Single pass traversal.',
    space: 'O(1) - Two tracking variables only (localSum, globalMax).',
    advantages: 'Constant extra memory usage, completes in a single linear scan.',
    limitations: 'Limited to contiguous elements. Does not work if elements can be skipped.'
  },

  simulation: {
    target: 6, // Maximum Sum to find
    array: [-2, 1, -3, 4, -1, 2],
    steps: [
      { left: 0, right: 0, sum: -2, action: 'Element: -2. currentSum = -2. globalMax = -2.', decision: 'sum < 0. Set search sum to element value.' },
      { left: 1, right: 1, sum: 1, action: 'Element: 1. currentSum = 1. globalMax = 1.', decision: 'Add next element (idx=2)' },
      { left: 1, right: 2, sum: -2, action: 'Element: -3. currentSum = 1 + (-3) = -2. globalMax = 1.', decision: 'sum < 0. Reset sum to 0 for next element.' },
      { left: 3, right: 3, sum: 4, action: 'Element: 4. Restart! currentSum = 4. globalMax = 4.', decision: 'Add next element (idx=4)' },
      { left: 3, right: 4, sum: 3, action: 'Element: -1. currentSum = 4 + (-1) = 3. globalMax = 4.', decision: 'Add next element (idx=5)' },
      { left: 3, right: 5, sum: 5, action: 'Element: 2. currentSum = 3 + 2 = 5. globalMax = 5. Subarray: [4, -1, 2].', decision: 'Max Subarray Sum Found: 5' }
    ]
  },

  syntax: {
    cpp: `// C++ Kadane's Template
#include <vector>
#include <algorithm>

int maxSubArray(const std::vector<int>& nums) {
    int max_so_far = nums[0];
    int curr_max = nums[0];
    
    for (size_t i = 1; i < nums.size(); i++) {
        curr_max = std::max(nums[i], curr_max + nums[i]);
        max_so_far = std::max(max_so_far, curr_max);
    }
    return max_so_far;
}`,
    java: `// Java Kadane's Template
public class Kadane {
    public static int maxSubArray(int[] nums) {
        int maxSoFar = nums[0];
        int currMax = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            currMax = Math.max(nums[i], currMax + nums[i]);
            maxSoFar = Math.max(maxSoFar, currMax);
        }
        return maxSoFar;
    }
}`,
    python: `# Python Kadane's Template

def max_subarray(nums):
    max_so_far = nums[0]
    curr_max = nums[0]
    
    for i in range(1, len(nums)):
        curr_max = max(nums[i], curr_max + nums[i])
        max_so_far = max(max_so_far, curr_max)
    return max_so_far`
  },

  questions: [
    { id: 'max-subarray', name: 'Maximum Subarray', difficulty: 'Medium', companies: ['Amazon', 'Microsoft', 'TCS'], leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/', solved: false },
    { id: 'max-circular', name: 'Maximum Circular Subarray', difficulty: 'Hard', companies: ['Google', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/maximum-sum-circular-subarray/', solved: false },
    { id: 'max-product', name: 'Maximum Product Subarray', difficulty: 'Medium', companies: ['Google', 'Microsoft', 'Adobe'], leetcodeUrl: 'https://leetcode.com/problems/maximum-product-subarray/', solved: false },
    { id: 'max-xor', name: 'Maximum XOR Subarray', difficulty: 'Hard', companies: ['Directi', 'TCS'], leetcodeUrl: 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/', solved: false },
    { id: 'buy-sell-stock', name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', companies: ['Amazon', 'Google'], leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', solved: false },
    { id: 'max-subarray-deletion', name: 'Maximum Subarray Sum with One Deletion', difficulty: 'Medium', companies: ['Google', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/', solved: false },
    { id: 'max-absolute-sum', name: 'Maximum Absolute Sum of Any Subarray', difficulty: 'Medium', companies: ['Google', 'Apple'], leetcodeUrl: 'https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/', solved: false },
    { id: 'longest-turbulent', name: 'Longest Turbulent Subarray', difficulty: 'Medium', companies: ['Google', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/longest-turbulent-subarray/', solved: false },
    { id: 'max-score-spliced', name: 'Maximum Score Of Spliced Array', difficulty: 'Hard', companies: ['Amazon', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/maximum-score-of-spliced-array/', solved: false },
    { id: 'degree-of-array', name: 'Degree of an Array', difficulty: 'Easy', companies: ['TCS', 'Cognizant'], leetcodeUrl: 'https://leetcode.com/problems/degree-of-an-array/', solved: false },
    { id: 'get-max-generated', name: 'Get Maximum in Generated Array', difficulty: 'Easy', companies: ['Google', 'Wipro'], leetcodeUrl: 'https://leetcode.com/problems/get-maximum-in-generated-array/', solved: false },
    { id: 'house-robber-subarray', name: 'House Robber Contiguous segment', difficulty: 'Medium', companies: ['Amazon', 'LinkedIn'], leetcodeUrl: 'https://leetcode.com/problems/house-robber/', solved: false },
    { id: 'max-sum-partition', name: 'Partition Array for Maximum Sum', difficulty: 'Medium', companies: ['Google', 'Uber'], leetcodeUrl: 'https://leetcode.com/problems/partition-array-for-maximum-sum/', solved: false },
    { id: 'k-concatenation', name: 'K-Concatenation Maximum Sum', difficulty: 'Medium', companies: ['Amazon', 'Directi'], leetcodeUrl: 'https://leetcode.com/problems/k-concatenation-maximum-sum/', solved: false },
    { id: 'maximum-subarray-min-product', name: 'Maximum Subarray Min-Product', difficulty: 'Hard', companies: ['Google', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray-min-product/', solved: false }
  ],

  companyFrequency: [
    { name: 'Amazon', percent: 84 },
    { name: 'Google', percent: 76 },
    { name: 'Microsoft', percent: 79 },
    { name: 'Infosys', percent: 88 }
  ],

  pyqs: [
    { company: 'TCS', year: '2024', title: 'Circular Subarray Product', desc: 'Asked in OA', diff: 'Hard' },
    { company: 'Infosys', year: '2025', title: 'Max contiguous transaction sum', desc: 'Asked in OA', diff: 'Medium' }
  ],

  pitfalls: [
    { mistake: 'Incorrect Initialization for Negative Values', correct: 'Do not initialize currentSum or maxSum to 0. Initialize both to nums[0] to support arrays containing only negative integers.' },
    { mistake: 'Resetting Sum too Early', correct: 'Ensure cumulative sum is compared with globalMax before checking if sum < 0 and resetting.' }
  ],

  achievements: [
    { name: 'Array Divider', badge: '🎓', req: 'Solve 2 Max Subarray questions', unlocked: false }
  ],
  
  nextPattern: { name: 'Binary Search', path: '/prepare/patterns/arrays/binary-search' }
};

export default kadane;
