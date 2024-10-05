import React from 'react';
import './VariablesInJavaScript.css';

const VariablesInJavaScript = () => {
  return (
    <div className="VariablesInJavaScript">
      <h1>Variables in JavaScript</h1>
      <p>
        Variables in JavaScript aid in holding a value that can be intentionally fetched and worked on in the inside code. A variable is a value that can be changed at runtime, which means it’s not a constant. JavaScript allows the creation of variables in different ways, and knowing how to do so improves the cleanliness and efficiency of your code.
      </p>

      <h2>Variable Declarations</h2>
      <p>
        In JavaScript, three keywords are used to declare variables: <code>var</code>, <code>let</code>, and <code>const</code>. Each has different rules regarding scope.
      </p>
      <h3>Basic Structure for Declaration:</h3>
      <pre><code>{`var variableName; // Variable declared using var\nlet variableName; // Variable declared using let\nconst variableName; // Constant variable declared using const`}</code></pre>
      <p>You can also initialize a variable in its declaration:</p>
      <pre><code>{`let age = 25; // Declares a variable 'age' and assigns it the value 25`}</code></pre>

      <h2>Types of Variables</h2>
      <h3>1. <code>var</code></h3>
      <ul>
        <li><strong>Scope:</strong> Function-scoped or global-scoped.</li>
        <li><strong>Hoisting:</strong> Variables are hoisted but not initialized, defaulting to <code>undefined</code>.</li>
        <li><strong>Reassignment:</strong> Can be reassigned and redeclared.</li>
        <li><strong>Initialization Requirement:</strong> Can be declared without initialization.</li>
      </ul>
      <pre><code>{`console.log(x); // undefined\nvar x = 10;\nconsole.log(x); // 10`}</code></pre>

      <h3>2. <code>let</code></h3>
      <ul>
        <li><strong>Scope:</strong> Block-scoped.</li>
        <li><strong>Hoisting:</strong> Hoisted but not initialized; accessing it before declaration results in a ReferenceError.</li>
        <li><strong>Reassignment:</strong> Can be reassigned but not redeclared within the same scope.</li>
        <li><strong>Initialization Requirement:</strong> Can be declared without initialization.</li>
      </ul>
      <pre><code>{`let y = 20;\ny = 30; // Reassigning the value of y\nconsole.log(y); // 30`}</code></pre>

      <h3>3. <code>const</code></h3>
      <ul>
        <li><strong>Scope:</strong> Block-scoped.</li>
        <li><strong>Hoisting:</strong> Hoisted but remains in the temporal dead zone until declared.</li>
        <li><strong>Reassignment:</strong> Cannot be reassigned after initial assignment, but contents of objects/arrays can be modified.</li>
        <li><strong>Initialization Requirement:</strong> Must be initialized at the time of declaration.</li>
      </ul>
      <pre><code>{`const z = 50;\n// z = 60; // This will throw an error: "Assignment to constant variable."`}</code></pre>

      <h2>Variable Naming Rules</h2>
      <h3>1. Allowed Characters</h3>
      <p>Variable names can only contain letters, numbers, underscores, and dollar signs, and must start with a letter, underscore, or dollar sign.</p>
      <pre><code>{`let name; // Valid\nlet _age; // Valid\nlet $salary; // Valid\nlet 2ndPlace; // Invalid (cannot start with a number)`}</code></pre>

      <h3>2. Case Sensitivity</h3>
      <p>Variable names are case-sensitive.</p>
      <pre><code>{`let name = "John";\nlet Name = "Doe";\nconsole.log(name); // John\nconsole.log(Name); // Doe`}</code></pre>

      <h3>3. Reserved Keywords</h3>
      <p>You cannot use JavaScript-reserved keywords as variable names.</p>
      <pre><code>{`// let if = 10; // Invalid because "if" is a reserved keyword\nlet myIf = 10; // Valid`}</code></pre>

      <h3>4. Descriptive Names</h3>
      <p>Use meaningful names to improve code readability.</p>

      <h2>Variable Example</h2>
      <pre><code>{`// Declaring variables using var, let, and const\nvar x = 10;\nlet y = 20;\nconst z = 30;\n\nconsole.log("Before block scope:");\nconsole.log(x); // 10\nconsole.log(y); // 20\nconsole.log(z); // 30\n\n// Block scope using let and const\nif (true) {\n  var x = 40; // Re-declares the variable x\n  let y = 50; // Block-scoped variable\n  const z = 60; // Block-scoped constant\n  console.log("Inside block scope:");\n  console.log(x); // 40\n  console.log(y); // 50\n  console.log(z); // 60\n}\n\nconsole.log("After block scope:");\nconsole.log(x); // 40\nconsole.log(y); // 20\nconsole.log(z); // 30`}</code></pre>

      <h2>Output</h2>
      <pre>{`Before block scope:\n10\n20\n30\nInside block scope:\n40\n50\n60\nAfter block scope:\n40\n20\n30`}</pre>

      <h2>Summary of Differences</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>var</th>
            <th>let</th>
            <th>const</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Scope</td>
            <td>Function-scoped or global</td>
            <td>Block-scoped</td>
            <td>Block-scoped</td>
          </tr>
          <tr>
            <td>Hoisting</td>
            <td>Hoisted, initialized as undefined</td>
            <td>Hoisted, but not initialized</td>
            <td>Hoisted, but not initialized</td>
          </tr>
          <tr>
            <td>Reassignment</td>
            <td>Can be reassigned and redeclared</td>
            <td>Can be reassigned, not redeclared</td>
            <td>Cannot be reassigned</td>
          </tr>
          <tr>
            <td>Initialization</td>
            <td>Optional</td>
            <td>Optional</td>
            <td>Required</td>
          </tr>
        </tbody>
      </table>

      <h2>Conclusion</h2>
      <p>
        In summary, <code>var</code> has a function or global scope and allows redeclaration, which can lead to bugs. <code>let</code> provides block scope and is safer because it doesn't allow redeclaration in the same scope. <code>const</code> is also block-scoped but is used for variables that should not be reassigned, making it useful for constants or objects that you don’t want to overwrite. Understanding how to properly use <code>var</code>, <code>let</code>, and <code>const</code> in JavaScript helps in managing variable scope, preventing bugs, and writing cleaner, more readable code.
      </p>
    </div>
  );
};

export default VariablesInJavaScript;
