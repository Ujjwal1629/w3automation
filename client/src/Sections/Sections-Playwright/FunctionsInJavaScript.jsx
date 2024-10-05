import React from 'react';
import './FunctionsInJavaScript.css';

const FunctionsInJavaScript = () => {
  return (
    <div className="FunctionsInJavaScript">
      <h1>Functions in JavaScript</h1>
      <p>
        Functions are a fundamental feature of JavaScript, allowing you to encapsulate code for reuse, modularity, and better organization. Here’s a detailed look at functions in JavaScript, including their syntax, examples, output, and explanations.
      </p>

      <h2>1. Function Declaration</h2>
      <p>
        <strong>Syntax:</strong>
      </p>
      <pre>
        <code>
          {`function functionName(parameters) {
  // code to be executed
  return value; // optional
}`}
        </code>
      </pre>
      <p>
        <strong>Example:</strong>
      </p>
      <pre>
        <code>
          {`function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));`}
        </code>
      </pre>
      <p>
        <strong>Output:</strong>
      </p>
      <pre>
        <code>Hello, Alice!</code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Function Declaration: Defines a function named greet that takes one parameter, name.</li>
        <li>Return Statement: Returns a greeting string that includes the provided name.</li>
        <li>Calling the Function: greet("Alice") calls the function and logs the returned value.</li>
      </ul>

      <h2>2. Function Expression</h2>
      <p>
        A function expression creates a function and assigns it to a variable. It can be named or anonymous.
      </p>
      <p>
        <strong>Syntax:</strong>
      </p>
      <pre>
        <code>
          {`const functionName = function(parameters) {
  // code to be executed
  return value; // optional
};`}
        </code>
      </pre>
      <p>
        <strong>Example:</strong>
      </p>
      <pre>
        <code>
          {`const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(5, 3));`}
        </code>
      </pre>
      <p>
        <strong>Output:</strong>
      </p>
      <pre>
        <code>15</code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Function Expression: Defines a function assigned to the variable multiply.</li>
        <li>Calling the Function: multiply(5, 3) calls the function and logs the product of 5 and 3.</li>
      </ul>

      <h2>3. Arrow Functions</h2>
      <p>
        Arrow functions provide a more concise syntax and do not have their own <code>this</code> context. They are especially useful for inline functions and callbacks.
      </p>
      <p>
        <strong>Syntax:</strong>
      </p>
      <pre>
        <code>
          {`const functionName = (parameters) => {
  // code to be executed
  return value; // optional
};`}
        </code>
      </pre>
      <p>
        <strong>Example:</strong>
      </p>
      <pre>
        <code>
          {`const add = (a, b) => a + b;
console.log(add(2, 4));`}
        </code>
      </pre>
      <p>
        <strong>Output:</strong>
      </p>
      <pre>
        <code>6</code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Arrow Function: Defines a function assigned to the variable add with a concise syntax.</li>
        <li>Implicit Return: For single expressions, the return statement is implied.</li>
        <li>Calling the Function: add(2, 4) logs the sum of 2 and 4.</li>
      </ul>

      <h2>4. Immediately Invoked Function Expression (IIFE)</h2>
      <p>
        An IIFE is a function that runs immediately after its definition. It's useful for creating a private scope.
      </p>
      <p>
        <strong>Syntax:</strong>
      </p>
      <pre>
        <code>
          {`(function() {
  // code to be executed
})();`}
        </code>
      </pre>
      <p>
        <strong>Example:</strong>
      </p>
      <pre>
        <code>
          {`(function() {
  let message = "IIFE executed!";
  console.log(message);
})();`}
        </code>
      </pre>
      <p>
        <strong>Output:</strong>
      </p>
      <pre>
        <code>IIFE executed!</code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>IIFE: Defines and immediately executes a function.</li>
        <li>Scope: Variables inside the IIFE are private to the function and cannot be accessed outside.</li>
      </ul>

      <h2>5. Function with Default Parameters</h2>
      <p>
        Functions can have default parameters, which are used if no argument is passed for that parameter.
      </p>
      <p>
        <strong>Syntax:</strong>
      </p>
      <pre>
        <code>
          {`function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // code to be executed
}`}
        </code>
      </pre>
      <p>
        <strong>Example:</strong>
      </p>
      <pre>
        <code>
          {`function greet(name = "Guest") {
  return "Hello, " + name + "!";
}
console.log(greet());
console.log(greet("Bob"));`}
        </code>
      </pre>
      <p>
        <strong>Output:</strong>
      </p>
      <pre>
        <code>Hello, Guest!</code>
        <code>Hello, Bob!</code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Default Parameter: name = "Guest" provides a default value if no argument is passed.</li>
        <li>Calling the Function: greet() uses the default parameter, while greet("Bob") overrides it.</li>
      </ul>

      <h2>6. Function with Rest Parameters</h2>
      <p>
        Rest parameters allow a function to accept an indefinite number of arguments as an array.
      </p>
      <p>
        <strong>Syntax:</strong>
      </p>
      <pre>
        <code>
          {`function functionName(...restParams) {
  // code to be executed
}`}
        </code>
      </pre>
      <p>
        <strong>Example:</strong>
      </p>
      <pre>
        <code>
          {`function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));`}
        </code>
      </pre>
      <p>
        <strong>Output:</strong>
      </p>
      <pre>
        <code>10</code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Rest Parameters: ...numbers collect all arguments into an array.</li>
        <li>Using reduce: Calculates the sum of all numbers in the array.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Functions in JavaScript are crucial for organizing and reusing code efficiently. Function Declarations and Function Expressions provide flexibility in defining and assigning functions. Arrow Functions offer a concise syntax and are ideal for short functions, particularly as callbacks. Immediately Invoked Function Expressions (IIFEs) create a private scope and execute immediately, useful for encapsulating code. Default Parameters simplify handling of optional arguments, while Rest Parameters handle variable numbers of arguments elegantly. Mastery of these function types enhances code readability, maintainability, and functionality in JavaScript applications.
      </p>
      <ul>
        <li>Function Declaration: Classic way to define functions, with functionName and parameters.</li>
        <li>Function Expression: Defines a function assigned to a variable.</li>
        <li>Arrow Function: Concise syntax, useful for callbacks, with implicit return.</li>
        <li>IIFE: Immediately invokes a function, creating a private scope.</li>
        <li>Default Parameters: Provides default values if arguments are not supplied.</li>
        <li>Rest Parameters: Collects multiple arguments into an array, useful for variable-length arguments.</li>
      </ul>
      <p>
        Understanding these various ways to define and use functions helps in writing flexible and maintainable JavaScript code.
      </p>
    </div>
  );
};

export default FunctionsInJavaScript;
