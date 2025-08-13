import { executeCode } from './services/codeExecutor.js';
import { getProblemTestCases } from './services/problemsData.js';

// Test buggy Java code that should fail
const testBuggyJavaCode = async () => {
  console.log('Testing Buggy Java Code (should fail)...');
  
  // User's buggy Java code with multiple errors
  const buggyCode = `import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public stati int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 10; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }

    }

    public stati void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = twoSum(nums, target);
        System.out.println("[" + result[0] + "," + result[1] + "]");
    }
}`;

  const problemData = getProblemTestCases('1');
  const testCases = problemData.testCases;

  console.log('\n1. Testing buggy code with syntax errors:');
  try {
    const results = await executeCode(buggyCode, 'java', testCases, '1');
    console.log('❌ ERROR: Code should have failed but passed!');
    console.log(results);
  } catch (error) {
    console.log('✅ CORRECT: Code properly failed with error:', error.message);
  }

  // Test correct code to make sure it still works
  const correctCode = `import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        
        throw new IllegalArgumentException("No two sum solution");
    }

    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = twoSum(nums, target);
        System.out.println("[" + result[0] + "," + result[1] + "]");
    }
}`;

  console.log('\n2. Testing correct code (should pass):');
  try {
    const results = await executeCode(correctCode, 'java', testCases, '1');
    const passedCount = results.filter(r => r.status === 'passed').length;
    console.log(`✅ CORRECT: ${passedCount}/${results.length} test cases passed`);
  } catch (error) {
    console.log('❌ ERROR: Correct code failed:', error.message);
  }
};

// Run tests
testBuggyJavaCode().catch(console.error);