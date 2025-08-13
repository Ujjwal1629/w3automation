import { executeCode } from './services/codeExecutor.js';
import { getProblemTestCases } from './services/problemsData.js';

// Test Two Sum problem
const testTwoSum = async () => {
  console.log('Testing Two Sum problem...');
  
  // Correct solution
  const correctCode = `
function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
}`;

  // Wrong solution
  const wrongCode = `
function twoSum(nums, target) {
    return [0, 0];
}`;

  // Empty solution
  const emptyCode = `
function twoSum(nums, target) {
    // No implementation
}`;

  const problemData = getProblemTestCases('1');
  const testCases = problemData.testCases;

  console.log('\n1. Testing correct solution:');
  const correctResults = await executeCode(correctCode, 'javascript', testCases, '1');
  console.log(correctResults);

  console.log('\n2. Testing wrong solution:');
  const wrongResults = await executeCode(wrongCode, 'javascript', testCases, '1');
  console.log(wrongResults);

  console.log('\n3. Testing empty solution:');
  const emptyResults = await executeCode(emptyCode, 'javascript', testCases, '1');
  console.log(emptyResults);
};

// Run tests
testTwoSum().catch(console.error);