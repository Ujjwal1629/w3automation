// Server-side problems data with test cases
export const problemsData = {
  1: {
    title: "Two Sum",
    testCases: [
      { input: { nums: [2, 7, 11, 15], target: 9 }, output: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, output: [1, 2] },
      { input: { nums: [3, 3], target: 6 }, output: [0, 1] }
    ]
  },
  2: {
    title: "Palindrome Number",
    testCases: [
      { input: { x: 121 }, output: true },
      { input: { x: -121 }, output: false },
      { input: { x: 10 }, output: false }
    ]
  },
  3: {
    title: "FizzBuzz",
    testCases: [
      { input: { n: 3 }, output: ["1", "2", "Fizz"] },
      { input: { n: 5 }, output: ["1", "2", "Fizz", "4", "Buzz"] },
      { input: { n: 15 }, output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"] }
    ]
  },
  4: {
    title: "Reverse String",
    testCases: [
      { input: { s: ["h", "e", "l", "l", "o"] }, output: ["o", "l", "l", "e", "h"] },
      { input: { s: ["H", "a", "n", "n", "a", "h"] }, output: ["h", "a", "n", "n", "a", "H"] },
      { input: { s: ["A"] }, output: ["A"] }
    ]
  },
  5: {
    title: "Valid Parentheses",
    testCases: [
      { input: { s: "()" }, output: true },
      { input: { s: "()[]{}" }, output: true },
      { input: { s: "(]" }, output: false }
    ]
  },
  // Add default test cases for other problems
  default: {
    title: "Default Problem",
    testCases: [
      { input: { data: "test1" }, output: "result1" },
      { input: { data: "test2" }, output: "result2" },
      { input: { data: "test3" }, output: "result3" }
    ]
  }
};

export const getProblemTestCases = (problemId) => {
  return problemsData[problemId] || problemsData.default;
};