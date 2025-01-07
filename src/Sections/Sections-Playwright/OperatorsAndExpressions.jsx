import React from 'react';
import './OperatorsAndExpressions.css';

const OperatorsAndExpressions = () => {
  return (
    <div className="OperatorsAndExpressions">
      <h1>Operators and Expressions in JavaScript</h1>
      <p>
        In JavaScript, operators are symbols or keywords used to perform operations on values (operands). Expressions are any valid combination of literals, variables, operators, and functions that can be evaluated to produce a value.
      </p>

      <h2>1. Arithmetic Operators</h2>
      <p>Arithmetic operators are used to perform basic mathematical operations.</p>
      <table>
        <thead>
          <tr>
            <th>Sign</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>+</td><td>Addition</td></tr>
          <tr><td>-</td><td>Subtraction</td></tr>
          <tr><td>*</td><td>Multiplication</td></tr>
          <tr><td>/</td><td>Division</td></tr>
          <tr><td>%</td><td>Modulus</td></tr>
          <tr><td>**</td><td>Exponentiation</td></tr>
          <tr><td>++</td><td>Increment</td></tr>
          <tr><td>--</td><td>Decrement</td></tr>
        </tbody>
      </table>
      <pre><code>{`let a = 10;\nlet b = 3;\nlet sum = a + b; // Addition\nlet difference = a - b; // Subtraction\nlet product = a * b; // Multiplication\nlet quotient = a / b; // Division\nlet remainder = a % b; // Modulus\nlet power = a ** b; // Exponentiation`}</code></pre>
      <p>Example Output:</p>
      <pre><code>{`console.log("Sum: " + (a + b)); // Output: 13\nconsole.log("Difference: " + (a - b)); // Output: 7\nconsole.log("Product: " + (a * b)); // Output: 30\nconsole.log("Quotient: " + (a / b)); // Output: 3.3333333333333335\nconsole.log("Remainder: " + (a % b)); // Output: 1\nconsole.log("Power: " + (a ** b)); // Output: 1000`}</code></pre>

      <h2>2. Assignment Operators</h2>
      <p>Assignment operators are used to assign values to variables.</p>
      <pre><code>{`let a = 10;\na += 5; // Equivalent to: a = a + 5;\na -= 3; // Equivalent to: a = a - 3;`}</code></pre>
      <p>Example Output:</p>
      <pre><code>{`let a = 10;\na += 5; // a = 10 + 5\nconsole.log("a after += 5: " + a); // Output: 15\na *= 2; // a = 15 * 2\nconsole.log("a after *= 2: " + a); // Output: 30\na %= 7; // a = 30 % 7\nconsole.log("a after %= 7: " + a); // Output: 2`}</code></pre>

      <h2>3. Comparison Operators</h2>
      <p>Comparison operators are used to compare two values and return a Boolean (true or false).</p>
      <pre><code>{`let x = 10;\nlet y = 5;\nlet isEqual = x == y; // Equal to\nlet isStrictEqual = x === y; // Strict equal to`}</code></pre>
      <p>Example Output:</p>
      <pre><code>{`console.log(x == y); // Output: false\nconsole.log(x === y); // Output: false\nconsole.log(x > y); // Output: true\nconsole.log(x <= 10); // Output: true\nconsole.log(x != y); // Output: true`}</code></pre>

      <h2>4. Logical Operators</h2>
      <p>Logical operators are used to combine multiple conditions.</p>
      <pre><code>{`let a = true;\nlet b = false;\nlet result1 = a && b; // Logical AND\nlet result2 = a || b; // Logical OR\nlet result3 = !a; // Logical NOT`}</code></pre>
      <p>Example Output:</p>
      <pre><code>{`console.log(a && b); // Output: false\nconsole.log(a || b); // Output: true\nconsole.log(!a); // Output: false`}</code></pre>

      <h2>5. String Operators</h2>
      <p>String operators are used to manipulate and concatenate strings.</p>
      <pre><code>{`let firstName = "John";\nlet lastName = "Doe";\nlet fullName = firstName + " " + lastName;`}</code></pre>
      <p>Example Output:</p>
      <pre><code>{`console.log(fullName); // Output: "John Doe"`}</code></pre>

      <h2>6. Conditional (Ternary) Operator</h2>
      <p>The ternary operator is a shorthand for if-else conditions.</p>
      <pre><code>{`let age = 18;\nlet canVote = age >= 18 ? "Yes" : "No";`}</code></pre>
      <p>Example Output:</p>
      <pre><code>{`console.log(canVote); // Output: "Yes"`}</code></pre>

      <h2>7. Type Operators</h2>
      <p>Type operators are used to determine or change the type of a variable.</p>
      <pre><code>{`let x = 42;\nconsole.log(typeof x); // Output: "number"`}</code></pre>
      <p>Example Output:</p>
      <pre><code>{`let arr = [1, 2, 3];\nconsole.log(arr instanceof Array); // Output: true`}</code></pre>

      <h2>8. Bitwise Operators</h2>
      <p>Bitwise operators are used to perform bit-level operations on integers.</p>
      <pre><code>{`let a = 5; // 101 in binary\nlet b = 3; // 011 in binary\nlet result = a & b; // AND`}</code></pre>

      <h2>Expressions in JavaScript</h2>
      <p>
        In JavaScript, an expression is any valid unit of code that resolves to a value. This includes values (like numbers or strings), variables, operators, and function calls. Expressions are the building blocks of JavaScript code because they produce values, which can be assigned to variables, passed to functions, or used in various other ways.
      </p>

      <h2>Types of Expressions in JavaScript</h2>
      <ol>
        <li><strong>Primary Expressions:</strong> Literal values and constants.</li>
        <li><strong>Arithmetic Expressions:</strong> Perform calculations using arithmetic operators.</li>
        <li><strong>String Expressions:</strong> Use concatenation to create strings.</li>
        <li><strong>Logical Expressions:</strong> Evaluate multiple conditions.</li>
        <li><strong>Comparison Expressions:</strong> Compare values.</li>
        <li><strong>Function Expressions:</strong> Define reusable functions.</li>
        <li><strong>Conditional (Ternary) Expressions:</strong> Provide shorthand for conditional logic.</li>
      </ol>

      <h3>1. Primary Expressions</h3>
      <pre><code>{`42;\n"Hello, World!";\ntrue;\nnull;\nundefined;`}</code></pre>

      <h3>2. Arithmetic Expressions</h3>
      <pre><code>{`let result = (10 + 5) * 2 - 3 / 1;\nconsole.log(result); // Output: 29`}</code></pre>

      <h3>3. String Expressions</h3>
      <pre><code>{`let firstName = "John";\nlet lastName = "Doe";\nlet fullName = firstName + " " + lastName;\nconsole.log(fullName); // Output: "John Doe"`}</code></pre>

      <h3>4. Logical Expressions</h3>
      <pre><code>{`let a = true;\nlet b = false;\nlet result = a && b;\nconsole.log(result); // Output: false`}</code></pre>

      <h3>5. Comparison Expressions</h3>
      <pre><code>{`let x = 10;\nlet y = 5;\nlet comparison = x > y;\nconsole.log(comparison); // Output: true`}</code></pre>

      <h3>6. Function Expressions</h3>
      <pre><code>{`let greet = function(name) {\n  return "Hello, " + name + "!";\n};\nconsole.log(greet("John")); // Output: "Hello, John!"`}</code></pre>

      <h3>7. Conditional (Ternary) Expressions</h3>
      <pre><code>{`let age = 18;\nlet canVote = age >= 18 ? "Yes" : "No";\nconsole.log(canVote); // Output: "Yes"`}</code></pre>

      <h2>Conclusion</h2>
      <p>
        Operators in JavaScript are vital for manipulating data and controlling logic within programs. They include arithmetic operators for calculations, assignment operators for combining assignments with arithmetic, and comparison operators for evaluating relationships between values. Logical operators handle complex conditions, while string operators manage text manipulation. The conditional (ternary) operator provides a compact way to implement conditional logic, and type operators help with type checking. Bitwise operators perform operations on binary data, and comma operators allow for evaluating multiple expressions. Mastering these operators is essential for creating dynamic and efficient JavaScript applications.
      </p>
      <p>
        Expressions in JavaScript are fundamental components that evaluate to produce values. They encompass a range of types, including primary expressions (literals and constants), arithmetic and string expressions for calculations and text manipulation, and logical and comparison expressions for decision-making and value comparison. Function expressions define reusable code blocks, while conditional (ternary) expressions offer concise conditional logic. Object and array expressions manage complex data structures, and assignment expressions combine value assignment with evaluation. Mastering these expressions enables you to build dynamic, efficient, and effective JavaScript applications by leveraging the language's versatile and powerful features.
      </p>
    </div>
  );
};

export default OperatorsAndExpressions;
