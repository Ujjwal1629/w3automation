import React from 'react';
import './JavaIteration.css';

const JavaIteration = () => {
  return (
    <div className="JavaIteration">
      <h1>Java Iteration Statements</h1>
      <p>Iteration statements are also called loops. These types of statements are used to perform a block of code repeatedly as long as a certain condition is true. Java offers different kinds of iteration statements for dealing with various looping requirements which are:</p>
      <ul>
        <li>For Loop</li>
        <li>While Loop</li>
        <li>Do-While Loop</li>
        <li>Nested Loops</li>
        <li>Break / Continue Statement</li>
        <li>Conclusion</li>
      </ul>
      
      <h2>1. For Loop</h2>
      <p>For loop is applied if you know how many iterations that will be done. It consists of three parts: initialization, condition and increment/decrement.</p>
      <h3>Syntax:</h3>
      <pre><code>{`for (initialization; condition; increment/decrement) {
    // block of code to be executed
}`}</code></pre>
      <h3>Example:</h3>
      <pre><code>{`for (int i = 0; i < 5; i++) {
    System.out.println("Value of i: " + i);
}`}</code></pre>
      
      <h2>2. While Loop</h2>
      <p>The while loop is employed when you don’t have any idea about the number of times something could repeat and it depends on an expression that determines the completion or termination of the statement itself.</p>
      <h3>Syntax:</h3>
      <pre><code>{`while (condition) {
    // block of code to be executed
}`}</code></pre>
      <h3>Example:</h3>
      <pre><code>{`int i = 0;
while (i < 5) {
    System.out.println("Value of i: " + i);
    i++;
}`}</code></pre>
      
      <h2>3. Do-While Loop</h2>
      <p>Do-while loop functions similar to a while loop but it evaluates the expression after executing the statements within it hence ensuring that at least one execution happens before exiting.</p>
      <h3>Syntax:</h3>
      <pre><code>{`do {
    // block of code to be executed
} while (condition);`}</code></pre>
      <h3>Example:</h3>
      <pre><code>{`int i = 0;
do {
    System.out.println("Value of i: " + i);
    i++;
} while (i < 5);`}</code></pre>
      
      <h2>4. Break / Continue Statements</h2>
      <h3>The Statement Break</h3>
      <p>This statement is used to immediately terminate the loop and then leave the loop body.</p>
      <h3>Example:</h3>
      <pre><code>{`for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.println("i: " + i);
}`}</code></pre>
      
      <h3>The Statement Continue</h3>
      <p>The continue statement skips the current iteration of the loop and continues with the next iteration.</p>
      <h3>Example:</h3>
      <pre><code>{`for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    System.out.println("i: " + i);
}`}</code></pre>
      
      <h2>5. Nested Loops</h2>
      <p>Looping can occur within other loops, such as in working with multi-dimensional arrays or intricate iterative processes.</p>
      <h3>Example:</h3>
      <pre><code>{`for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.println("i = " + i + ", j = " + j);
    }
}`}</code></pre>
      
      <h2>6. Conclusion</h2>
      <p>Iteration statements in Java are essential for performing repetitive tasks efficiently. Java provides a variety of loops to suit different scenarios, from fixed iteration counts to conditionally controlled loops.</p>
    </div>
  );
};

export default JavaIteration;
