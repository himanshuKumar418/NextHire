// Data payload for Binary Search pattern

const binarySearch = {
  title: 'Binary Search',
  category: 'Arrays',
  difficulty: 'Medium',
  questionsCount: 15,
  estimatedTime: '2.5 Hours',
  rewardXP: 90,
  progress: 0,
  description: 'Divide sorted search spaces in halves at each iteration, reducing lookup times from linear O(N) to logarithmic O(log N).',
  
  recognitionKeywords: [
    { title: 'Sorted Array', text: 'Problem states target arrays are already sorted.' },
    { title: 'Search Space', text: 'Solution range has defined integer upper and lower bounds.' },
    { title: 'Monotonic', text: 'Decisions are monotonic: if check(X) is true, then check(X+1) is also true.' },
    { title: 'Answer Search', text: 'Used to locate a specific threshold sum or threshold capacity (e.g. Min Capacity).' }
  ],

  conceptCards: {
    what: 'Divides the sorted range in half by checking the midpoint. If target is larger than mid value, exclude left half. If smaller, exclude right half.',
    why: 'Speeds up queries drastically from linear scans to logarithmic searches.',
    when: 'Sorted lookup, peak elements, rotated configurations, finding capacity bounds.',
    time: 'O(log N) - Search space divides by 2 at each iteration.',
    space: 'O(1) - Three tracking pointers only (left, right, mid).',
    advantages: 'Handles very large search spaces, O(log N) is near-constant in practice.',
    limitations: 'Array must be sorted. If base items change, sorting must be redone.'
  },

  simulation: {
    target: 9, // Target sum search element
    array: [1, 3, 5, 7, 9, 11],
    steps: [
      { left: 0, right: 5, sum: 5, action: 'L=0, R=5. mid = (0+5)/2 = 2. arr[2] = 5.', decision: '5 < 9. Target is in right half. Set L = mid + 1 = 3.' },
      { left: 3, right: 5, sum: 9, action: 'L=3, R=5. mid = (3+5)/2 = 4. arr[4] = 9.', decision: 'Target found! Index: 4.' }
    ]
  },

  syntax: {
    cpp: `// C++ Binary Search Template
#include <vector>

int binarySearch(const std::vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
    java: `// Java Binary Search Template
public class BinarySearch {
    public static int search(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
}`,
    python: `# Python Binary Search Template

def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: left = mid + 1
        else: right = mid - 1
    return -1`
  },

  questions: [
    { id: 'binary-search', name: 'Binary Search', difficulty: 'Easy', companies: ['Google', 'Adobe', 'TCS'], leetcodeUrl: 'https://leetcode.com/problems/binary-search/', solved: false },
    { id: 'search-insert', name: 'Search Insert Position', difficulty: 'Easy', companies: ['Microsoft', 'Infosys'], leetcodeUrl: 'https://leetcode.com/problems/search-insert-position/', solved: false },
    { id: 'first-last', name: 'First & Last Position', difficulty: 'Medium', companies: ['Google', 'Amazon', 'LTIMindtree'], leetcodeUrl: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/', solved: false },
    { id: 'peak-element', name: 'Find Peak Element', difficulty: 'Medium', companies: ['Google', 'Apple'], leetcodeUrl: 'https://leetcode.com/problems/find-peak-element/', solved: false },
    { id: 'rotated-sorted', name: 'Rotated Sorted Array Search', difficulty: 'Medium', companies: ['Microsoft', 'Amazon'], leetcodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', solved: false },
    { id: 'koko-eating', name: 'Koko Eating Bananas', difficulty: 'Medium', companies: ['Google', 'Bloomberg'], leetcodeUrl: 'https://leetcode.com/problems/koko-eating-bananas/', solved: false },
    { id: 'ship-packages', name: 'Capacity To Ship Packages', difficulty: 'Medium', companies: ['Amazon', 'Accenture'], leetcodeUrl: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/', solved: false },
    { id: 'find-min-rotated', name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', companies: ['Amazon', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', solved: false },
    { id: 'search-rotated-ii', name: 'Search in Rotated Sorted Array II', difficulty: 'Medium', companies: ['Google', 'Apple'], leetcodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array-ii/', solved: false },
    { id: 'median-two-arrays', name: 'Median of Two Sorted Arrays', difficulty: 'Hard', companies: ['Google', 'Amazon', 'Nvidia'], leetcodeUrl: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', solved: false },
    { id: 'peak-element-ii', name: 'Find Peak Element II', difficulty: 'Medium', companies: ['Google', 'Facebook'], leetcodeUrl: 'https://leetcode.com/problems/find-a-peak-element-ii/', solved: false },
    { id: 'online-election', name: 'Online Election', difficulty: 'Medium', companies: ['Amazon', 'Uber'], leetcodeUrl: 'https://leetcode.com/problems/online-election/', solved: false },
    { id: 'h-index-ii', name: 'H-Index II', difficulty: 'Medium', companies: ['Google', 'Adobe'], leetcodeUrl: 'https://leetcode.com/problems/h-index-ii/', solved: false },
    { id: 'search-2d-matrix', name: 'Search a 2D Matrix', difficulty: 'Medium', companies: ['Microsoft', 'Goldman Sachs'], leetcodeUrl: 'https://leetcode.com/problems/search-a-2d-matrix/', solved: false },
    { id: 'single-element-sorted', name: 'Single Element in a Sorted Array', difficulty: 'Medium', companies: ['Google', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/single-element-in-a-sorted-array/', solved: false }
  ],

  companyFrequency: [
    { name: 'Amazon', percent: 90 },
    { name: 'Google', percent: 92 },
    { name: 'Microsoft', percent: 84 },
    { name: 'Infosys', percent: 79 }
  ],

  pyqs: [
    { company: 'Google', year: '2025', title: 'Monotonic capacity query threshold', desc: 'Asked in OA', diff: 'Medium' },
    { company: 'Microsoft', year: '2024', title: 'Rotated sorted duplicates index check', desc: 'Asked in Interview', diff: 'Medium' }
  ],

  pitfalls: [
    { mistake: 'Integer Overflow on Midpoint Sum', correct: 'Do not calculate mid as (left + right) / 2. Use mid = left + (right - left) / 2 to avoid overflow.' },
    { mistake: 'Incorrect Loop Termination Condition', correct: 'Loop must run while left <= right. Using left < right misses checking the final single remaining element.' }
  ],

  achievements: [
    { name: 'Space Divider', badge: '🎓', req: 'Solve 4 Binary Search questions', unlocked: false }
  ],
  
  nextPattern: { name: 'Sorting Algorithms', path: '/prepare/patterns/arrays/sorting' }
};

export default binarySearch;
