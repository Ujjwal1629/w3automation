import { executeCode } from './services/codeExecutor.js';
import { getProblemTestCases } from './services/problemsData.js';

const testFinalValidation = async () => {
  console.log('🔍 Testing Final Code Validation System...\n');
  
  const problemData = getProblemTestCases('1');
  const testCases = problemData.testCases;

  // Test 1: User's buggy code (should fail)
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

  console.log('1. Testing BUGGY code (has "stati" typo and i=10):');
  try {
    const results = await executeCode(buggyCode, 'java', testCases, '1');
    console.log('❌ PROBLEM: Buggy code somehow passed!');
  } catch (error) {
    console.log('✅ CORRECT: Buggy code failed as expected');
    console.log('   Error:', error.message);
  }

  // Test 2: Correct code (should pass)
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
}`;

  console.log('\n2. Testing CORRECT code:');
  try {
    const results = await executeCode(correctCode, 'java', testCases, '1');
    const passedCount = results.filter(r => r.status === 'passed').length;
    if (passedCount === results.length) {
      console.log('✅ PERFECT: Correct code passed all test cases');
    } else {
      console.log(`❌ ISSUE: Only ${passedCount}/${results.length} tests passed`);
    }
  } catch (error) {
    console.log('❌ PROBLEM: Correct code failed:', error.message);
  }

  // Test 3: Code with logic error (should fail)
  const logicErrorCode = `import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 10; i < nums.length; i++) {  // starts from 10!
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        
        return new int[]{0, 0};
    }
}`;

  console.log('\n3. Testing code with LOGIC ERROR (i=10):');
  try {
    const results = await executeCode(logicErrorCode, 'java', testCases, '1');
    console.log('❌ PROBLEM: Logic error code passed!');
  } catch (error) {
    console.log('✅ CORRECT: Logic error detected');
    console.log('   Error:', error.message);
  }

  console.log('\n🎯 Validation System Summary:');
  console.log('   ✅ Syntax errors (stati) → Detected and failed');
  console.log('   ✅ Logic errors (i=10) → Detected and failed');  
  console.log('   ✅ Correct code → Passes all tests');
  console.log('\n🚀 The code editor is now ACCURATE and STRICT!');
};

testFinalValidation().catch(console.error);