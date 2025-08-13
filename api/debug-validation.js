import { executeCode } from './services/codeExecutor.js';
import { getProblemTestCases } from './services/problemsData.js';

const debugValidation = async () => {
  console.log('🐛 Debug: Checking validation results...\n');
  
  const problemData = getProblemTestCases('1');
  const testCases = problemData.testCases;

  const buggyCode = `import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public stati int[] twoSum(int[] nums, int target) {
        for (int i = 10; i < nums.length; i++) {
            return new int[] { 0, 1 };
        }
    }
}`;

  console.log('Testing buggy code...');
  const results = await executeCode(buggyCode, 'java', testCases, '1');
  console.log('Results:', JSON.stringify(results, null, 2));
  
  // Check if any test passed
  const passedTests = results.filter(r => r.status === 'passed');
  const failedTests = results.filter(r => r.status === 'failed');
  
  console.log(`\n📊 Results:
- Passed: ${passedTests.length}
- Failed: ${failedTests.length}
- All tests failed correctly: ${failedTests.length === results.length ? '✅' : '❌'}
`);

  if (failedTests.length > 0) {
    console.log('First error message:', failedTests[0].actual);
  }
};

debugValidation().catch(console.error);