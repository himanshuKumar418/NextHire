// Placement Pattern DSA Data Store

import { FiCode, FiLayers, FiShuffle, FiLink2, FiFolder, FiDisc, FiGitBranch, FiCompass, FiGrid, FiActivity, FiCpu, FiTrendingUp, FiSliders, FiHash, FiSettings, FiCheckSquare } from 'react-icons/fi';

export const categoriesList = [
  { id: 'arrays', name: 'Arrays', icon: FiGrid, questions: 75, hours: 12, difficulty: 'Easy-Medium', progress: 42, xp: 420 },
  { id: 'strings', name: 'Strings', icon: FiCode, questions: 60, hours: 10, difficulty: 'Easy-Medium', progress: 25, xp: 300 },
  { id: 'hashmap', name: 'HashMap', icon: FiHash, questions: 45, hours: 8, difficulty: 'Medium', progress: 0, xp: 220 },
  { id: 'linkedlist', name: 'Linked List', icon: FiLink2, questions: 40, hours: 8, difficulty: 'Medium', progress: 0, xp: 200 },
  { id: 'stack', name: 'Stack', icon: FiLayers, questions: 35, hours: 7, difficulty: 'Medium', progress: 0, xp: 180 },
  { id: 'queue', name: 'Queue', icon: FiDisc, questions: 25, hours: 5, difficulty: 'Easy-Medium', progress: 0, xp: 120 },
  { id: 'trees', name: 'Trees', icon: FiGitBranch, questions: 80, hours: 15, difficulty: 'Medium-Hard', progress: 0, xp: 500 },
  { id: 'graphs', name: 'Graphs', icon: FiCompass, questions: 70, hours: 15, difficulty: 'Hard', progress: 0, xp: 450 },
  { id: 'heap', name: 'Heap', icon: FiActivity, questions: 30, hours: 6, difficulty: 'Medium-Hard', progress: 0, xp: 150 },
  { id: 'recursion', name: 'Recursion', icon: FiShuffle, questions: 40, hours: 8, difficulty: 'Medium', progress: 0, xp: 200 },
  { id: 'backtracking', name: 'Backtracking', icon: FiSliders, questions: 35, hours: 10, difficulty: 'Hard', progress: 0, xp: 250 },
  { id: 'greedy', name: 'Greedy', icon: FiCompass, questions: 45, hours: 9, difficulty: 'Medium', progress: 0, xp: 225 },
  { id: 'dp', name: 'Dynamic Programming', icon: FiCpu, questions: 95, hours: 22, difficulty: 'Hard', progress: 0, xp: 600 },
  { id: 'bit', name: 'Bit Manipulation', icon: FiSettings, questions: 30, hours: 6, difficulty: 'Medium', progress: 0, xp: 150 },
  { id: 'trie', name: 'Trie', icon: FiGitBranch, questions: 20, hours: 5, difficulty: 'Medium-Hard', progress: 0, xp: 100 },
  { id: 'sorting', name: 'Sorting Algorithms', icon: FiShuffle, questions: 35, hours: 7, difficulty: 'Easy-Medium', progress: 0, xp: 175 },
  { id: 'segmenttree', name: 'Segment Tree', icon: FiLayers, questions: 15, hours: 5, difficulty: 'Hard', progress: 0, xp: 100 }
];

export const categoryPatterns = {
  arrays: [
    { id: 'two-pointer', name: 'Two Pointer', difficulty: 'Easy-Medium', questions: 15, hours: 2.5, xp: 100, progress: 60 },
    { id: 'sliding-window', name: 'Sliding Window', difficulty: 'Medium', questions: 12, hours: 2, xp: 80, progress: 0 },
    { id: 'prefix-sum', name: 'Prefix Sum', difficulty: 'Easy', questions: 8, hours: 1.5, xp: 50, progress: 0 },
    { id: 'kadane', name: 'Kadane\'s Algorithm', difficulty: 'Medium', questions: 6, hours: 1, xp: 40, progress: 0 },
    { id: 'binary-search', name: 'Binary Search', difficulty: 'Medium', questions: 14, hours: 2.5, xp: 90, progress: 0 },
    { id: 'hashing', name: 'Hashing & Counts', difficulty: 'Easy-Medium', questions: 10, hours: 1.5, xp: 60, progress: 0 },
    { id: 'sorting', name: 'In-place Sorting', difficulty: 'Medium', questions: 8, hours: 1.5, xp: 50, progress: 0 },
    { id: 'intervals', name: 'Merge Intervals', difficulty: 'Medium-Hard', questions: 8, hours: 2, xp: 70, progress: 0 },
    { id: 'matrix', name: 'Matrix Traversal', difficulty: 'Medium', questions: 10, hours: 2, xp: 60, progress: 0 },
    { id: 'simulation', name: 'Array Simulation', difficulty: 'Medium', questions: 8, hours: 1.5, xp: 50, progress: 0 }
  ]
};

export const patternDetails = {
  'two-pointer': {
    name: 'Two Pointer Pattern',
    category: 'Arrays',
    difficulty: 'Easy-Medium',
    questionsCount: 15,
    estimatedTime: '2.5 Hours',
    xpReward: 100,
    progress: 60,
    
    recognition: {
      description: 'Look for these key indicators inside the problem statement to immediately identify the Two Pointer approach:',
      indicators: [
        { title: 'Sorted Array', text: 'Sorted Array' },
        { title: 'Pair Sum', text: 'Pair Sum' },
        { title: 'Reverse', text: 'Reverse' },
        { title: 'Palindrome', text: 'Palindrome' },
        { title: 'Closest Pair', text: 'Closest Pair' },
        { title: 'Triplets', text: 'Triplets' },
        { title: 'Remove Duplicates', text: 'Remove Duplicates' },
        { title: 'Partition', text: 'Partition' }
      ]
    },

    concept: {
      what: 'Uses two reference variables (left & right index) to scan linear structures, skipping quadratic search iterations.',
      why: 'Saves time by converging pointers towards center based on sorting characteristics.',
      when: 'Pairs matching, palindrome checks, array partitioning, or in-place sorting swaps.',
      time: 'O(N) - Linear search scan.',
      space: 'O(1) - Reference indices only.',
      advantages: 'Zero dynamic memory footprint, handles boundary conditions in-place.',
      limitations: 'Input array must be sorted. Sorting adds O(N log N) initialization time.'
    },

    visualization: {
      array: [1, 2, 3, 4, 9, 15],
      target: 13,
      steps: [
        { left: 0, right: 5, sum: 16, action: 'Sum (1+15=16) > 13', decision: 'Decrement Right index (R--)' },
        { left: 0, right: 4, sum: 10, action: 'Sum (1+9=10) < 13', decision: 'Increment Left index (L++)' },
        { left: 1, right: 4, sum: 11, action: 'Sum (2+9=11) < 13', decision: 'Increment Left index (L++)' },
        { left: 2, right: 4, sum: 12, action: 'Sum (3+9=12) < 13', decision: 'Increment Left index (L++)' },
        { left: 3, right: 4, sum: 13, action: 'Sum (4+9=13) == 13', decision: 'Solution Found! Indices 3 & 4.' }
      ]
    },

    templates: {
      cpp: `// C++ Two Pointer Template
#include <vector>

std::vector<int> findPair(const std::vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left < right) {
        int current_sum = arr[left] + arr[right];
        if (current_sum == target) {
            return {left, right}; // Found pair
        } else if (current_sum < target) {
            left++; // Need a larger sum
        } else {
            right--; // Need a smaller sum
        }
    }
    return {-1, -1}; // No pair found
}`,
      java: `// Java Two Pointer Template
public class TwoPointer {
    public static int[] findPair(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left < right) {
            int currentSum = arr[left] + arr[right];
            if (currentSum == target) {
                return new int[]{left, right}; // Found pair
            } else if (currentSum < target) {
                left++; // Need a larger sum
            } else {
                right--; // Need a smaller sum
            }
        }
        return new int[]{-1, -1}; // No pair found
    }
}`,
      python: `# Python Two Pointer Template

def find_pair(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right] # Found pair
        elif current_sum < target:
            left += 1 # Need a larger sum
        else:
            right -= 1 # Need a smaller sum
    return [-1, -1] # No pair found`
    },

    questions: [
      { id: 'two-sum-sorted', name: 'Two Sum II', difficulty: 'Easy', companies: ['Amazon', 'Google', 'Adobe'], leetcodeUrl: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/', solved: true },
      { id: 'container-water', name: 'Container With Most Water', difficulty: 'Medium', companies: ['Google', 'Amazon', 'Adobe'], leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/', solved: false },
      { id: 'three-sum', name: '3Sum', difficulty: 'Medium', companies: ['Microsoft', 'Facebook', 'TCS'], leetcodeUrl: 'https://leetcode.com/problems/3sum/', solved: true },
      { id: 'trapping-rain-water', name: 'Trapping Rain Water', difficulty: 'Hard', companies: ['Google', 'Amazon', 'LTIMindtree'], leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/', solved: false },
      { id: 'remove-duplicates', name: 'Remove Duplicates', difficulty: 'Easy', companies: ['TCS', 'Wipro', 'Capgemini'], leetcodeUrl: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/', solved: true },
      { id: 'squares-sorted', name: 'Squares of Sorted Array', difficulty: 'Easy', companies: ['Google', 'Facebook'], leetcodeUrl: 'https://leetcode.com/problems/squares-of-sorted-array/', solved: true },
      { id: 'boats-save', name: 'Boats to Save People', difficulty: 'Medium', companies: ['Google', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/boats-to-save-people/', solved: false },
      { id: 'valid-palindrome', name: 'Valid Palindrome', difficulty: 'Easy', companies: ['Microsoft', 'Apple'], leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/', solved: true },
      { id: 'reverse-string', name: 'Reverse String', difficulty: 'Easy', companies: ['Adobe', 'Intel'], leetcodeUrl: 'https://leetcode.com/problems/reverse-string/', solved: true },
      { id: 'merge-sorted', name: 'Merge Sorted Array', difficulty: 'Easy', companies: ['Microsoft', 'Bloomberg'], leetcodeUrl: 'https://leetcode.com/problems/merge-sorted-array/', solved: false },
      { id: 'sort-colors', name: 'Sort Colors', difficulty: 'Medium', companies: ['Microsoft', 'Nvidia'], leetcodeUrl: 'https://leetcode.com/problems/sort-colors/', solved: false },
      { id: 'move-zeroes', name: 'Move Zeroes', difficulty: 'Easy', companies: ['Google', 'Samsung'], leetcodeUrl: 'https://leetcode.com/problems/move-zeroes/', solved: true },
      { id: 'assign-cookies', name: 'Assign Cookies', difficulty: 'Easy', companies: ['Google', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/assign-cookies/', solved: false },
      { id: 'pair-difference', name: 'Pair Difference', difficulty: 'Medium', companies: ['Infosys', 'Wipro'], leetcodeUrl: 'https://leetcode.com/problems/k-diff-pairs-in-an-array/', solved: false },
      { id: 'max-consecutive', name: 'Max Consecutive Ones', difficulty: 'Easy', companies: ['TCS', 'Cognizant'], leetcodeUrl: 'https://leetcode.com/problems/max-consecutive-ones-iii/', solved: true }
    ],

    companies: [
      { name: 'Amazon', percent: 92 },
      { name: 'Google', percent: 81 },
      { name: 'Microsoft', percent: 74 },
      { name: 'Infosys', percent: 95 }
    ],

    pyqs: [
      { company: 'Infosys', year: '2025', title: 'Target Sum', desc: 'Asked in OA', diff: 'Medium' },
      { company: 'TCS', year: '2024', title: 'Pair Difference', desc: 'Asked in OA', diff: 'Easy' },
      { company: 'LTIMindtree', year: '2025', title: 'Triplet Sum', desc: 'Asked in OA', diff: 'Medium' },
      { company: 'Accenture', year: '2024', title: 'In-place Reverse', desc: 'Asked in Interview', diff: 'Easy' }
    ],

    mistakes: [
      { mistake: 'Wrong Pointer Direction Movement', correct: 'Move L forward (L++) to increase sum and R backward (R--) to decrease sum in sorted structures.' },
      { mistake: 'Infinite Loop Index Bounds', text: 'Loop check must terminate strictly when left pointer index >= right pointer index.' },
      { mistake: 'Duplicate Value Skipping Failure', correct: 'Skip adjacent elements in sorted triplets (e.g. while arr[L] == arr[L-1] L++) to avoid duplicates.' }
    ],

    achievements: [
      { name: 'Array Master', badge: '🎓', req: 'Solve 10 Array questions', unlocked: true },
      { name: 'Two Pointer Elite', badge: '🔑', req: 'Unlocked at 500 XP', unlocked: false },
      { name: 'Mock Practitioner', badge: '🔥', req: 'Unlocked at 1000 XP', unlocked: false }
    ],

    rewards: {
      concept: 20,
      quiz: 20,
      question: 10,
      completion: 100,
      bonus: 50
    }
  }
};

export const questionDetails = {
  'two-sum-sorted': {
    id: 'two-sum-sorted',
    title: 'Two Sum II - Input Array Is Sorted',
    difficulty: 'Easy',
    companyTags: ['Amazon', 'Google', 'Adobe'],
    xpReward: 30,
    description: `Given a **1-indexed** array of integers \`numbers\` that is already **sorted in non-decreasing order**, find two numbers such that they add up to a specific \`target\` number.

Return the indices of the two numbers, \`index1\` and \`index2\`, added by one as an integer array \`[index1, index2]\` of length 2.

The tests are generated such that there is **exactly one solution**. You may not use the same element twice.

Your solution must use only **O(1) constant extra space**.`,
    examples: [
      {
        input: 'numbers = [2,7,11,15], target = 9',
        output: '[1,2]',
        explanation: 'The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].'
      },
      {
        input: 'numbers = [2,3,4], target = 6',
        output: '[1,3]',
        explanation: 'The sum of 2 and 4 is 6. Therefore, index1 = 1, index2 = 3. We return [1, 3].'
      }
    ],
    constraints: [
      '2 <= numbers.length <= 3 * 10^4',
      '-1000 <= numbers[i] <= 1000',
      'numbers is sorted in non-decreasing order.',
      '-1000 <= target <= 1000',
      'The tests are generated such that there is exactly one solution.'
    ],
    starterCodes: {
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        // Write C++ code here
        
    }
};`,
      java: `class Solution {
    public int[] twoSum(int[] numbers, int target) {
        // Write Java code here
        
    }
}`,
      python: `class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # Write Python code here
        pass`
    },
    solutions: {
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int left = 0, right = numbers.size() - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) return {left + 1, right + 1};
            else if (sum < target) left++;
            else right--;
        }
        return {-1, -1};
    }
};`,
      java: `class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) return new int[]{left + 1, right + 1};
            else if (sum < target) left++;
            else right--;
        }
        return new int[]{-1, -1};
    }
}`,
      python: `class Solution:
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        left, right = 0, len(numbers) - 1
        while left < right:
            s = numbers[left] + numbers[right]
            if s == target:
                return [left + 1, right + 1]
            elif s < target:
                left += 1
            else:
                right -= 1
        return [-1, -1]`
    }
  }
};
