// Data payload for Two Pointer pattern

const twoPointer = {
  title: 'Two Pointer Pattern',
  category: 'Arrays',
  difficulty: 'Easy-Medium',
  questionsCount: 15,
  estimatedTime: '2.5 Hours',
  rewardXP: 100,
  progress: 60,
  description: 'Scan linear structures from boundaries towards the center, reducing time complexity from quadratic to linear.',
  
  recognitionKeywords: [
    { title: 'Sorted Array', text: 'Input is sorted' },
    { title: 'Pair Sum', text: 'Target sum matches' },
    { title: 'Reverse', text: 'Reverse in-place' },
    { title: 'Palindrome', text: 'Symmetrical matching' },
    { title: 'Closest Pair', text: 'Nearest sum bounds' },
    { title: 'Triplets', text: 'Nested multiple bounds' },
    { title: 'Remove Duplicates', text: 'Shift unique items' },
    { title: 'Partition', text: 'In-place separation' }
  ],

  conceptCards: {
    what: 'Uses two reference variables (left & right index) to scan linear structures, skipping quadratic search iterations.',
    why: 'Saves time by converging pointers towards center based on sorting characteristics.',
    when: 'Pairs matching, palindrome checks, array partitioning, or in-place sorting swaps.',
    time: 'O(N) - Linear search scan.',
    space: 'O(1) - Reference indices only.',
    advantages: 'Zero dynamic memory footprint, handles boundary conditions in-place.',
    limitations: 'Input array must be sorted. Sorting adds O(N log N) initialization time.'
  },

  simulation: {
    target: 13,
    array: [1, 2, 3, 4, 9, 15],
    steps: [
      { left: 0, right: 5, sum: 16, action: 'Sum (1+15=16) > 13', decision: 'Decrement Right index (R--)' },
      { left: 0, right: 4, sum: 10, action: 'Sum (1+9=10) < 13', decision: 'Increment Left index (L++)' },
      { left: 1, right: 4, sum: 11, action: 'Sum (2+9=11) < 13', decision: 'Increment Left index (L++)' },
      { left: 2, right: 4, sum: 12, action: 'Sum (3+9=12) < 13', decision: 'Increment Left index (L++)' },
      { left: 3, right: 4, sum: 13, action: 'Sum (4+9=13) == 13', decision: 'Solution Found! Indices 3 & 4.' }
    ]
  },

  syntax: {
    cpp: `// C++ Two Pointer Template
#include <vector>

std::vector<int> findPair(const std::vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    while (left < right) {
        int current_sum = arr[left] + arr[right];
        if (current_sum == target) return {left, right};
        else if (current_sum < target) left++;
        else right--;
    }
    return {-1, -1};
}`,
    java: `// Java Two Pointer Template
public class TwoPointer {
    public static int[] findPair(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int currentSum = arr[left] + arr[right];
            if (currentSum == target) return new int[]{left, right};
            else if (currentSum < target) left++;
            else right--;
        }
        return new int[]{-1, -1};
    }
}`,
    python: `# Python Two Pointer Template
def find_pair(arr, target):
    left = 0
    right = len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target: return [left, right]
        elif current_sum < target: left += 1
        else: right -= 1
    return [-1, -1]`
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

  companyFrequency: [
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

  pitfalls: [
    { mistake: 'Wrong Pointer Direction Movement', correct: 'Move L forward (L++) to increase sum and R backward (R--) to decrease sum in sorted structures.' },
    { mistake: 'Infinite Loop Index Bounds', correct: 'Loop check must terminate strictly when left pointer index >= right pointer index.' },
    { mistake: 'Duplicate Value Skipping Failure', correct: 'Skip adjacent elements in sorted triplets (e.g. while arr[L] == arr[L-1] L++) to avoid duplicates.' }
  ],

  achievements: [
    { name: 'Array Master', badge: '🎓', req: 'Solve 10 Array questions', unlocked: true },
    { name: 'Two Pointer Elite', badge: '🔑', req: 'Unlocked at 500 XP', unlocked: false },
    { name: 'Mock Practitioner', badge: '🔥', req: 'Unlocked at 1000 XP', unlocked: false }
  ],
  
  nextPattern: { name: 'Sliding Window', path: '/prepare/patterns/arrays/sliding-window' }
};

export default twoPointer;
