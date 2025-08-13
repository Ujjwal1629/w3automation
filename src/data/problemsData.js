export const problemsData = {
  // Easy Problems
  1: {
    title: "Two Sum",
    difficulty: "easy",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 6, we return [0, 1]."
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists"
    ],
    starterCode: {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Write your solution here
    
}`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`
    },
    testCases: [
      { input: { nums: [2, 7, 11, 15], target: 9 }, output: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, output: [1, 2] },
      { input: { nums: [3, 3], target: 6 }, output: [0, 1] }
    ]
  },

  2: {
    title: "Palindrome Number",
    difficulty: "easy",
    description: `Given an integer x, return true if x is a palindrome, and false otherwise.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.`,
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left."
      },
      {
        input: "x = -121",
        output: "false",
        explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
      },
      {
        input: "x = 10",
        output: "false",
        explanation: "Reads 01 from right to left. Therefore it is not a palindrome."
      }
    ],
    constraints: [
      "-2^31 <= x <= 2^31 - 1"
    ],
    starterCode: {
      javascript: `/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    // Write your solution here
    
}`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your solution here
        
    }
}`
    },
    testCases: [
      { input: { x: 121 }, output: true },
      { input: { x: -121 }, output: false },
      { input: { x: 10 }, output: false }
    ]
  },

  3: {
    title: "FizzBuzz",
    difficulty: "easy",
    description: `Given an integer n, return a string array answer (1-indexed) where:
- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i (as a string) if none of the above conditions are true.`,
    examples: [
      {
        input: "n = 3",
        output: '["1","2","Fizz"]',
        explanation: "1 and 2 are neither divisible by 3 nor 5, 3 is divisible by 3."
      },
      {
        input: "n = 5",
        output: '["1","2","Fizz","4","Buzz"]',
        explanation: "3 is divisible by 3, 5 is divisible by 5."
      },
      {
        input: "n = 15",
        output: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',
        explanation: "Numbers divisible by both 3 and 5 are replaced with FizzBuzz."
      }
    ],
    constraints: [
      "1 <= n <= 10^4"
    ],
    starterCode: {
      javascript: `/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
    // Write your solution here
    
}`,
      java: `import java.util.List;
import java.util.ArrayList;

class Solution {
    public List<String> fizzBuzz(int n) {
        // Write your solution here
        
    }
}`
    },
    testCases: [
      { input: { n: 3 }, output: ["1", "2", "Fizz"] },
      { input: { n: 5 }, output: ["1", "2", "Fizz", "4", "Buzz"] },
      { input: { n: 15 }, output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"] }
    ]
  },

  4: {
    title: "Reverse String",
    difficulty: "easy",
    description: `Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.`,
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
        explanation: "The string 'hello' is reversed to 'olleh'."
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
        explanation: "The string 'Hannah' is reversed to 'hannaH'."
      },
      {
        input: 's = ["A"]',
        output: '["A"]',
        explanation: "Single character remains the same."
      }
    ],
    constraints: [
      "1 <= s.length <= 10^5",
      "s[i] is a printable ascii character"
    ],
    starterCode: {
      javascript: `/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    // Write your solution here
    
}`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Write your solution here
        
    }
}`
    },
    testCases: [
      { input: { s: ["h", "e", "l", "l", "o"] }, output: ["o", "l", "l", "e", "h"] },
      { input: { s: ["H", "a", "n", "n", "a", "h"] }, output: ["h", "a", "n", "n", "a", "H"] },
      { input: { s: ["A"] }, output: ["A"] }
    ]
  },

  5: {
    title: "Valid Parentheses",
    difficulty: "easy",
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    examples: [
      {
        input: 's = "()"',
        output: "true",
        explanation: "The parentheses are properly matched."
      },
      {
        input: 's = "()[]{}"',
        output: "true",
        explanation: "All brackets are properly matched in correct order."
      },
      {
        input: 's = "(]"',
        output: "false",
        explanation: "Opening '(' is closed with ']' which is incorrect."
      }
    ],
    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'"
    ],
    starterCode: {
      javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Write your solution here
    
}`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Write your solution here
        
    }
}`
    },
    testCases: [
      { input: { s: "()" }, output: true },
      { input: { s: "()[]{}" }, output: true },
      { input: { s: "(]" }, output: false }
    ]
  },

  // Medium Problems
  6: {
    title: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    description: `Given a string s, find the length of the longest substring without repeating characters.

A substring is a contiguous sequence of characters within a string.`,
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.'
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.'
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'The answer is "wke", with the length of 3. Notice that "pwke" is not a substring.'
      }
    ],
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces"
    ],
    starterCode: {
      javascript: `/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    // Write your solution here
    
}`,
      java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
    }
}`
    },
    testCases: [
      { input: { s: "abcabcbb" }, output: 3 },
      { input: { s: "bbbbb" }, output: 1 },
      { input: { s: "pwwkew" }, output: 3 }
    ]
  },

  7: {
    title: "Binary Tree Level Order Traversal",
    difficulty: "medium",
    description: `Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

A binary tree node has a value, left child, and right child.`,
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
        explanation: "Level 1: [3], Level 2: [9,20], Level 3: [15,7]"
      },
      {
        input: "root = [1]",
        output: "[[1]]",
        explanation: "Single node tree has only one level."
      },
      {
        input: "root = []",
        output: "[]",
        explanation: "Empty tree returns empty array."
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 2000]",
      "-1000 <= Node.val <= 1000"
    ],
    starterCode: {
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    // Write your solution here
    
}`,
      java: `import java.util.List;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        // Write your solution here
        
    }
}`
    },
    testCases: [
      { input: { root: [3, 9, 20, null, null, 15, 7] }, output: [[3], [9, 20], [15, 7]] },
      { input: { root: [1] }, output: [[1]] },
      { input: { root: [] }, output: [] }
    ]
  },

  // Add more medium and hard problems as needed...
  // For now, adding a default case
  default: {
    title: "Problem Title",
    difficulty: "medium",
    description: "This is a placeholder problem description. The actual problem will be loaded based on the challenge ID.",
    examples: [
      {
        input: "Example input",
        output: "Example output",
        explanation: "Example explanation"
      }
    ],
    constraints: [
      "Constraint 1",
      "Constraint 2"
    ],
    starterCode: {
      javascript: `// Write your JavaScript solution here
function solution() {
    
}`,
      java: `// Write your Java solution here
class Solution {
    public void solution() {
        
    }
}`
    },
    testCases: [
      { input: { data: "test1" }, output: "result1" },
      { input: { data: "test2" }, output: "result2" },
      { input: { data: "test3" }, output: "result3" }
    ]
  }
};

// Export helper function to get problem by ID
export const getProblemById = (id) => {
  return problemsData[id] || problemsData.default;
};

// Export function to get all problems
export const getAllProblems = () => {
  return Object.keys(problemsData).map(id => ({
    id: parseInt(id),
    ...problemsData[id]
  }));
};

// Export function to get problems by difficulty
export const getProblemsByDifficulty = (difficulty) => {
  return Object.keys(problemsData)
    .filter(id => problemsData[id].difficulty === difficulty)
    .map(id => ({
      id: parseInt(id),
      ...problemsData[id]
    }));
};