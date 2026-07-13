// Data payload for Sliding Window pattern

const slidingWindow = {
  title: 'Sliding Window Pattern',
  category: 'Arrays',
  difficulty: 'Medium',
  questionsCount: 15,
  estimatedTime: '2.0 Hours',
  rewardXP: 80,
  progress: 0,
  description: 'Maintain a sub-segment window over a linear structure that dynamically expands or shrinks to find matching ranges.',
  
  recognitionKeywords: [
    { title: 'Fixed Window', text: 'Problem specifies a size K subarray constraint (e.g. Max sum of size K).' },
    { title: 'Variable Window', text: 'Asks to locate dynamic window bounds meeting sum or character conditions.' },
    { title: 'Expand', text: 'Move Right pointer forward to absorb values and expand search boundaries.' },
    { title: 'Shrink', text: 'Move Left pointer forward to contract bounds and drop items when conditions fail.' },
    { title: 'HashMap', text: 'Use maps to track current frequencies of elements inside boundaries.' },
    { title: 'Frequency Count', text: 'Store unique counts to track distinct letters in current ranges.' }
  ],

  conceptCards: {
    what: 'Uses two reference boundaries L and R that represent a sliding sub-window. Pointers expand the window to look for matches, and shrink it when requirements are exceeded.',
    why: 'Avoids recalculating sums of overlapping sub-elements, transforming O(N*K) queries into O(N) scans.',
    when: 'Contiguous ranges, subarrays of size K, longest/shortest substrings queries.',
    time: 'O(N) - Both pointers traverse index points at most N times.',
    space: 'O(K) - Maps or arrays to store frequency status of window content.',
    advantages: 'Handles continuous stream bounds, drops quadratic calculations through overlapping reuse.',
    limitations: 'Limited to contiguous sub-arrays/ranges. Cannot run on disjoint combinations.'
  },

  simulation: {
    target: 3, // Target unique length goal
    array: ['A', 'B', 'C', 'A', 'B', 'D'],
    steps: [
      { left: 0, right: 0, sum: 1, action: 'Window: [A]. Unique length = 1.', decision: 'Expand Right boundary (R++)' },
      { left: 0, right: 1, sum: 2, action: 'Window: [A, B]. Unique length = 2.', decision: 'Expand Right boundary (R++)' },
      { left: 0, right: 2, sum: 3, action: 'Window: [A, B, C]. Unique length = 3.', decision: 'Unique sum is 3. Max unique length found!' },
      { left: 0, right: 3, sum: 3, action: 'Window: [A, B, C, A]. Duplicate "A" found.', decision: 'Shrink Left boundary to resolve duplicates (L++)' },
      { left: 1, right: 3, sum: 3, action: 'Window: [B, C, A]. Left pointer moved. Unique length = 3.', decision: 'Expand Right boundary (R++)' }
    ]
  },

  syntax: {
    cpp: `// C++ Sliding Window Template
#include <vector>
#include <unordered_map>

int maxWindow(const std::vector<int>& arr, int k) {
    int left = 0, current_sum = 0, max_sum = 0;
    for (int right = 0; right < arr.size(); right++) {
        current_sum += arr[right];
        if (right - left + 1 > k) {
            current_sum -= arr[left];
            left++; // Shrink window
        }
        max_sum = std::max(max_sum, current_sum);
    }
    return max_sum;
}`,
    java: `// Java Sliding Window Template
import java.util.HashMap;

public class SlidingWindow {
    public static int maxWindow(int[] arr, int k) {
        int left = 0, currentSum = 0, maxSum = 0;
        for (int right = 0; right < arr.length; right++) {
            currentSum += arr[right];
            if (right - left + 1 > k) {
                currentSum -= arr[left];
                left++; // Shrink window
            }
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }
}`,
    python: `# Python Sliding Window Template

def max_window(arr, k):
    left = 0
    current_sum = 0
    max_sum = 0
    for right in range(len(arr)):
        current_sum += arr[right]
        if right - left + 1 > k:
            current_sum -= arr[left]
            left += 1 # Shrink window
        max_sum = max(max_sum, current_sum)
    return max_sum`
  },

  questions: [
    { id: 'max-sum-k', name: 'Maximum Sum Subarray of Size K', difficulty: 'Easy', companies: ['Amazon', 'Infosys', 'TCS'], leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/', solved: false },
    { id: 'longest-substring-unique', name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', companies: ['Google', 'Amazon', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', solved: false },
    { id: 'fruit-basket', name: 'Fruit Into Baskets', difficulty: 'Medium', companies: ['Google', 'Accenture'], leetcodeUrl: 'https://leetcode.com/problems/fruit-into-baskets/', solved: false },
    { id: 'min-window-sub', name: 'Minimum Window Substring', difficulty: 'Hard', companies: ['Google', 'Apple', 'Nvidia'], leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/', solved: false },
    { id: 'permutation-string', name: 'Permutation in String', difficulty: 'Medium', companies: ['Adobe', 'Microsoft'], leetcodeUrl: 'https://leetcode.com/problems/permutation-in-string/', solved: false },
    { id: 'longest-repeating-char', name: 'Longest Repeating Character Replacement', difficulty: 'Medium', companies: ['Amazon', 'Bloomberg'], leetcodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement/', solved: false },
    { id: 'subarray-product-less-k', name: 'Subarray Product Less Than K', difficulty: 'Medium', companies: ['Amazon', 'Google'], leetcodeUrl: 'https://leetcode.com/problems/subarray-product-less-than-k/', solved: false },
    { id: 'min-size-subarray-sum', name: 'Minimum Size Subarray Sum', difficulty: 'Medium', companies: ['Microsoft', 'Nvidia'], leetcodeUrl: 'https://leetcode.com/problems/minimum-size-subarray-sum/', solved: false },
    { id: 'find-all-anagrams', name: 'Find All Anagrams in a String', difficulty: 'Medium', companies: ['Amazon', 'Facebook'], leetcodeUrl: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/', solved: false },
    { id: 'max-points-cards', name: 'Maximum Points Obtained from Cards', difficulty: 'Medium', companies: ['Google', 'Directi'], leetcodeUrl: 'https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/', solved: false },
    { id: 'sliding-window-max', name: 'Sliding Window Maximum', difficulty: 'Hard', companies: ['Google', 'Amazon', 'Uber'], leetcodeUrl: 'https://leetcode.com/problems/sliding-window-maximum/', solved: false },
    { id: 'equal-substring-budget', name: 'Get Equal Substrings Within Budget', difficulty: 'Medium', companies: ['Google', 'Accenture'], leetcodeUrl: 'https://leetcode.com/problems/get-equal-substrings-within-budget/', solved: false },
    { id: 'nice-subarrays', name: 'Count Number of Nice Subarrays', difficulty: 'Medium', companies: ['Microsoft', 'TCS'], leetcodeUrl: 'https://leetcode.com/problems/count-number-of-nice-subarrays/', solved: false },
    { id: 'bounded-max-subarrays', name: 'Number of Subarrays with Bounded Maximum', difficulty: 'Medium', companies: ['Google', 'Capgemini'], leetcodeUrl: 'https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/', solved: false },
    { id: 'max-consecutive-ones-iii', name: 'Max Consecutive Ones III', difficulty: 'Medium', companies: ['Google', 'Accenture'], leetcodeUrl: 'https://leetcode.com/problems/max-consecutive-ones-iii/', solved: false }
  ],

  companyFrequency: [
    { name: 'Amazon', percent: 88 },
    { name: 'Google', percent: 85 },
    { name: 'Microsoft', percent: 79 },
    { name: 'Infosys', percent: 70 }
  ],

  pyqs: [
    { company: 'Google', year: '2025', title: 'Subarray Unique K Bounds', desc: 'Asked in OA', diff: 'Medium' },
    { company: 'Amazon', year: '2024', title: 'Longest Window with repeating replacement', desc: 'Asked in Interview', diff: 'Medium' },
    { company: 'Infosys', year: '2025', title: 'Max Fruit Basket indices count', desc: 'Asked in OA', diff: 'Medium' }
  ],

  pitfalls: [
    { mistake: 'Incorrect Window Expansion Condition', correct: 'Ensure right pointer transitions continuously and element frequencies sync before testing bounds checks.' },
    { mistake: 'Off-By-One Sizes calculation', correct: 'Use right - left + 1 to compute window sizes index counts correctly.' },
    { mistake: 'Forgetting to update Hashmap Frequencies on shrink', correct: 'When left pointer increments, subtract target item count and delete key from map if count becomes 0.' }
  ],

  achievements: [
    { name: 'Window Manager', badge: '🎓', req: 'Solve 5 Sliding Window questions', unlocked: false },
    { name: 'HashMap Expert', badge: '🔑', req: 'Complete variable window structures', unlocked: false }
  ],
  
  nextPattern: { name: 'Prefix Sum', path: '/prepare/patterns/arrays/prefix-sum' }
};

export default slidingWindow;
