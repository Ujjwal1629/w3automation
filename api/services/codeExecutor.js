import vm from 'vm';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
import { executeJavaCode } from './javaExecutor.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to execute JavaScript code safely
export const executeJavaScript = async (userCode, testCases, problemId) => {
  const results = [];
  
  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const startTime = Date.now();
    
    try {
      // Create a sandbox context with limited globals
      const sandbox = {
        console: {
          log: () => {}, // Disable console.log to prevent output pollution
        },
        setTimeout: undefined,
        setInterval: undefined,
        setImmediate: undefined,
        require: undefined,
        process: undefined,
        global: undefined,
        __dirname: undefined,
        __filename: undefined,
        module: undefined,
        exports: undefined,
      };

      // Problem-specific test wrapper based on problem ID
      let testCode = '';
      
      // For Two Sum problem (ID: 1)
      if (problemId === '1') {
        testCode = `
          ${userCode}
          
          // Test execution
          const testInput = ${JSON.stringify(testCase.input)};
          const result = twoSum(testInput.nums, testInput.target);
          result;
        `;
      } 
      // For Palindrome Number (ID: 2)
      else if (problemId === '2') {
        testCode = `
          ${userCode}
          
          // Test execution
          const testInput = ${JSON.stringify(testCase.input)};
          const result = isPalindrome(testInput.x);
          result;
        `;
      }
      // For FizzBuzz (ID: 3)
      else if (problemId === '3') {
        testCode = `
          ${userCode}
          
          // Test execution
          const testInput = ${JSON.stringify(testCase.input)};
          const result = fizzBuzz(testInput.n);
          result;
        `;
      }
      // For Reverse String (ID: 4)
      else if (problemId === '4') {
        testCode = `
          ${userCode}
          
          // Test execution
          const testInput = ${JSON.stringify(testCase.input)};
          const inputArray = [...testInput.s];
          reverseString(inputArray);
          inputArray;
        `;
      }
      // For Valid Parentheses (ID: 5)
      else if (problemId === '5') {
        testCode = `
          ${userCode}
          
          // Test execution
          const testInput = ${JSON.stringify(testCase.input)};
          const result = isValid(testInput.s);
          result;
        `;
      }
      // Default for other problems
      else {
        // Try to detect the function name from the code
        const functionMatch = userCode.match(/function\s+(\w+)\s*\(/);
        const functionName = functionMatch ? functionMatch[1] : 'solution';
        
        testCode = `
          ${userCode}
          
          // Test execution
          const testInput = ${JSON.stringify(testCase.input)};
          const result = ${functionName}(${Object.values(testCase.input).map(v => JSON.stringify(v)).join(', ')});
          result;
        `;
      }

      // Create VM context
      vm.createContext(sandbox);
      
      // Run the code with timeout
      const script = new vm.Script(testCode);
      const result = script.runInContext(sandbox, {
        timeout: 5000, // 5 second timeout
        breakOnSigint: true
      });
      
      const executionTime = Date.now() - startTime;
      
      // Compare result with expected output
      const passed = JSON.stringify(result) === JSON.stringify(testCase.output);
      
      results.push({
        testCase: i + 1,
        status: passed ? 'passed' : 'failed',
        input: formatInput(testCase.input),
        expected: formatOutput(testCase.output),
        actual: formatOutput(result),
        executionTime: `${executionTime}ms`
      });
      
    } catch (error) {
      const executionTime = Date.now() - startTime;
      
      results.push({
        testCase: i + 1,
        status: 'failed',
        input: formatInput(testCase.input),
        expected: formatOutput(testCase.output),
        actual: `Error: ${error.message}`,
        executionTime: `${executionTime}ms`
      });
    }
  }
  
  return results;
};

// Function to execute Java code
export const executeJava = async (userCode, testCases, problemId) => {
  return await executeJavaCode(userCode, testCases, problemId);
};

// Helper function to format input for display
function formatInput(input) {
  if (typeof input === 'object') {
    return Object.entries(input)
      .map(([key, value]) => `${key} = ${JSON.stringify(value)}`)
      .join(', ');
  }
  return JSON.stringify(input);
}

// Helper function to format output for display
function formatOutput(output) {
  if (output === undefined) return 'undefined';
  if (output === null) return 'null';
  if (typeof output === 'string' && output.startsWith('Error:')) return output;
  return JSON.stringify(output);
}

// Main execution function
export const executeCode = async (code, language, testCases, problemId) => {
  if (!code || code.trim().length === 0) {
    throw new Error('No code provided');
  }
  
  if (language === 'javascript') {
    return await executeJavaScript(code, testCases, problemId);
  } else if (language === 'java') {
    return await executeJava(code, testCases, problemId);
  } else {
    throw new Error(`Unsupported language: ${language}`);
  }
};