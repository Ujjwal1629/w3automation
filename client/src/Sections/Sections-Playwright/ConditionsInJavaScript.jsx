import React from 'react';
import './ConditionsInJavaScript.css';

const ConditionsInJavaScript = () => {
  return (
    <div className="ConditionsInJavaScript">
      <h1>Conditions in JavaScript</h1>
      <p>
        Whenever conditions are incorporated in computer languages, they act as a control flow mechanism 
        for how the program proceeds. Conditions allow the use of constructs such as if, else, else if, 
        switch, and the ternary operator, enabling the execution of different blocks of code based on 
        specified conditions.
      </p>

      <h2>1. if Statement</h2>
      <p>The if statement executes a block of code if a specified condition is true.</p>
      <pre>
        <code>
          {`if (condition) {
  // code to execute if condition is true
}`}
        </code>
      </pre>
      <h3>Example:</h3>
      <pre>
        <code>
          {`let temperature = 35;
if (temperature > 30) {
  console.log("It's a hot day!");
}`}
        </code>
      </pre>
      <p>Output: <code>It's a hot day!</code></p>

      <h2>2. if-else Statement</h2>
      <p>The if-else statement provides an alternative block of code if the condition is false.</p>
      <pre>
        <code>
          {`if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}`}
        </code>
      </pre>
      <h3>Example:</h3>
      <pre>
        <code>
          {`let age = 17;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}`}
        </code>
      </pre>
      <p>Output: <code>You are too young to vote.</code></p>

      <h2>3. if-else if-else Statement</h2>
      <p>
        The if-else if-else statement is used when multiple conditions need to be checked sequentially.
      </p>
      <pre>
        <code>
          {`if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition2 is true
} else {
  // code to execute if neither condition is true
}`}
        </code>
      </pre>
      <h3>Example:</h3>
      <pre>
        <code>
          {`let score = 78;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}`}
        </code>
      </pre>
      <p>Output: <code>Grade: C</code></p>

      <h2>4. switch Statement</h2>
      <p>
        The switch statement evaluates an expression and executes the matching case block.
      </p>
      <pre>
        <code>
          {`switch (expression) {
  case value1:
    // code if expression === value1
    break;
  case value2:
    // code if expression === value2
    break;
  default:
    // code if no cases match
}`}
        </code>
      </pre>
      <h3>Example:</h3>
      <pre>
        <code>
          {`let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}`}
        </code>
      </pre>
      <p>Output: <code>Wednesday</code></p>

      <h2>5. Conditional (Ternary) Operator</h2>
      <p>The conditional operator provides a shorthand for if-else statements.</p>
      <pre>
        <code>
          {`condition ? expressionIfTrue : expressionIfFalse;`}
        </code>
      </pre>
      <h3>Example:</h3>
      <pre>
        <code>
          {`let age = 20;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote yet.";
console.log(canVote);`}
        </code>
      </pre>
      <p>Output: <code>Yes, you can vote.</code></p>

      <h2>6. Logical Operators with Conditions</h2>
      <p>
        Logical operators such as && (AND), || (OR), and ! (NOT) can combine multiple conditions.
      </p>
      <pre>
        <code>
          {`let hasID = true;
let isAdult = true;
if (hasID && isAdult) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}`}
        </code>
      </pre>
      <p>Output: <code>Access granted.</code></p>

      <h2>Conclusion</h2>
      <p>
        JavaScript conditions give developers the flexibility to control the flow of their programs 
        by handling various scenarios based on logical comparisons.
      </p>
    </div>
  );
};

export default ConditionsInJavaScript;
