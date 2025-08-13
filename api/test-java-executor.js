import { executeCode } from './services/codeExecutor.js';
import { getProblemTestCases } from './services/problemsData.js';

// Test Java Two Sum problem
const testJavaTwoSum = async () => {
  console.log('Testing Java Two Sum problem...');
  
  // Correct solution with HashMap
  const correctCode = `
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`;

  // Wrong solution
  const wrongCode = `
class Solution {
    public int[] twoSum(int[] nums, int target) {
        return new int[]{0, 0};
    }
}`;

  // Empty solution
  const emptyCode = `
class Solution {
    public int[] twoSum(int[] nums, int target) {
        // No implementation
    }
}`;

  // Incomplete solution
  const incompleteCode = `
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            return new int[]{i, i+1};
        }
    }
}`;

  const problemData = getProblemTestCases('1');
  const testCases = problemData.testCases;

  console.log('\n1. Testing correct HashMap solution:');
  try {
    const correctResults = await executeCode(correctCode, 'java', testCases, '1');
    console.log(correctResults);
  } catch (error) {
    console.log('Error:', error.message);
  }

  console.log('\n2. Testing wrong solution:');
  try {
    const wrongResults = await executeCode(wrongCode, 'java', testCases, '1');
    console.log(wrongResults);
  } catch (error) {
    console.log('Error:', error.message);
  }

  console.log('\n3. Testing empty solution:');
  try {
    const emptyResults = await executeCode(emptyCode, 'java', testCases, '1');
    console.log(emptyResults);
  } catch (error) {
    console.log('Error:', error.message);
  }

  console.log('\n4. Testing incomplete solution:');
  try {
    const incompleteResults = await executeCode(incompleteCode, 'java', testCases, '1');
    console.log(incompleteResults);
  } catch (error) {
    console.log('Error:', error.message);
  }
};

// Run tests
testJavaTwoSum().catch(console.error);