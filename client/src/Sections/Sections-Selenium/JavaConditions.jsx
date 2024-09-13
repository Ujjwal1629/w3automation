import React from 'react';
import "./JavaConditions.css"

const JavaConditions = () => {
  return (
    <div className="JavaConditions">
      <h1>Conditional Statements in Java</h1>

      <section>
        <h2>1. If Statement</h2>
        <p>
          The <code>if</code> statement executes a block of code if a specified condition is true.
        </p>
        <pre>
          <code>
{`int age = 18;
if (age >= 18) {
  System.out.println("You are eligible to vote.");
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>2. If-Else Statement</h2>
        <p>
          The <code>if-else</code> statement executes one block of code if a specified condition is true and another block if it is false.
        </p>
        <pre>
          <code>
{`int age = 16;
if (age >= 18) {
  System.out.println("You are eligible to vote.");
} else {
  System.out.println("You are not eligible to vote.");
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>3. If-Else-If Ladder</h2>
        <p>
          The <code>if-else-if</code> ladder allows you to test multiple conditions sequentially until one returns true, then the corresponding block is executed.
        </p>
        <pre>
          <code>
{`int score = 85;
if (score >= 90) {
  System.out.println("Grade: A");
} else if (score >= 80) {
  System.out.println("Grade: B");
} else if (score >= 70) {
  System.out.println("Grade: C");
} else {
  System.out.println("Grade: D");
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>4. Nested-If Statement</h2>
        <p>
          A nested <code>if</code> statement is an <code>if</code> statement inside another <code>if</code> statement.
        </p>
        <pre>
          <code>
{`int number = 10;
if (number > 0) {
  System.out.println("The number is positive.");
  if (number % 2 == 0) {
    System.out.println("The number is even.");
  } else {
    System.out.println("The number is odd.");
  }
} else if (number < 0) {
  System.out.println("The number is negative.");
} else {
  System.out.println("The number is zero.");
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>5. Switch Statement</h2>
        <p>
          The <code>switch</code> statement enables one block of code among many to be executed based on the value of a variable or expression.
        </p>
        <pre>
          <code>
{`int day = 3;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  case 4:
    System.out.println("Thursday");
    break;
  case 5:
    System.out.println("Friday");
    break;
  case 6:
    System.out.println("Saturday");
    break;
  case 7:
    System.out.println("Sunday");
    break;
  default:
    System.out.println("Invalid day");
    break;
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Summary</h2>
        <ul>
          <li><strong>If statement:</strong> Executes a block of code if a condition is true.</li>
          <li><strong>If-else statement:</strong> Executes one block of code if the condition is true, and another block if false.</li>
          <li><strong>If-else-if ladder:</strong> Tests multiple conditions sequentially.</li>
          <li><strong>Nested if statement:</strong> Allows checking multiple related conditions in nested form.</li>
          <li><strong>Switch statement:</strong> Executes one block of code out of many based on the value of a variable or expression.</li>
        </ul>
      </section>
    </div>
  );
};

export default JavaConditions;
