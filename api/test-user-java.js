import { executeCode } from './services/codeExecutor.js';
import { getProblemTestCases } from './services/problemsData.js';

// Test the user's actual Java code
const testUserJavaCode = async () => {
  console.log('Testing User\'s Java Two Sum Code...');
  
  // User's actual Java code
  const userCode = `import java.util.HashMap;
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

  const problemData = getProblemTestCases('1');
  const testCases = problemData.testCases;

  console.log('\nTesting user\'s HashMap solution:');
  try {
    const results = await executeCode(userCode, 'java', testCases, '1');
    console.log(results);
    
    const passedCount = results.filter(r => r.status === 'passed').length;
    console.log(`\n✅ Result: ${passedCount}/${results.length} test cases passed`);
    
    if (passedCount === results.length) {
      console.log('🎉 Perfect! All test cases passed!');
    } else {
      console.log('❌ Some test cases failed - this might be due to validator issues');
    }
    
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
};

// Run test
testUserJavaCode().catch(console.error);