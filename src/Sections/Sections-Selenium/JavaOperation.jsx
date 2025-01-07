import React from 'react';
import './JavaOperation.css';

const JavaOperation = () => {
  return (
    <div className="javaOperators">
      <h1>Operators in Java</h1>
      <p>
        Java has special symbols known as operators that perform certain functions on values and variables. 
        These are basic parts of any programming language, and they allow the manipulation of data as well as variables.
        There is a wide range of operation types (including arithmetic, and logical) that Java provides with its set of operators.
      </p>
      
      <h2>Types of Operators in Java</h2>
      <ul>
        <li>Arithmetic Operator</li>
        <li>Relational Operator</li>
        <li>Logical Operator</li>
        <li>Assignment Operator</li>
        <li>Bitwise Operator</li>
        <li>Unary Operator</li>
        <li>Instance of Operator</li>
        <li>Conditional Operator</li>
      </ul>

      <h2>1. Arithmetic Operator</h2>
      <p>
        Arithmetic operators are used to perform basic arithmetic operations like addition, subtraction, multiplication, and division.
      </p>
      <ul>
        <li>Addition (+): <code>a + b</code></li>
        <li>Subtraction (-): <code>a - b</code></li>
        <li>Multiplication (*): <code>a * b</code></li>
        <li>Division (/): <code>a / b</code></li>
        <li>Modulus (%): <code>a % b</code></li>
        <li>Increment (++): <code>a++</code> or <code>b++</code></li>
        <li>Decrement (--): <code>a--</code> or <code>b--</code></li>
      </ul>

      <pre>
        {`Example:
int a = 10;
int b = 5;
int sum = a + b;  // 15
int difference = a - b;  // 5
int product = a * b;  // 50
int quotient = a / b;  // 2
int remainder = a % b;  // 0`}
      </pre>

      <h2>2. Relational Operator</h2>
      <p>Relational operators compare values and determine relationships like equality, greater or lesser.</p>
      <ul>
        <li>Equal (==): <code>a == b</code></li>
        <li>Not Equal (!=): <code>a != b</code></li>
        <li>Less Than (&lt;): <code>a &lt; b</code></li>
        <li>Greater Than (&gt;): <code>a &gt; b</code></li>
        <li>Less Than Equal to (&lt;=): <code>a &lt;= b</code></li>
        <li>Greater Than Equal to (&gt;=): <code>a &gt;= b</code></li>
      </ul>

      <pre>
        {`Example:
int a = 10;
int b = 5;
boolean result1 = (a == b); // false
boolean result2 = (a != b); // true`}
      </pre>

      <h2>3. Logical Operator</h2>
      <p>Logical operators are used to form complex conditional expressions.</p>
      <ul>
        <li>Logical AND (&&): <code>a && b</code></li>
        <li>Logical OR (||): <code>a || b</code></li>
        <li>Logical NOT (!): <code>!a</code></li>
      </ul>

      <pre>
        {`Example:
boolean x = true;
boolean y = false;
boolean result1 = (x && y); // false
boolean result2 = (x || y); // true
boolean result3 = !x; // false`}
      </pre>

      <h2>4. Assignment Operator</h2>
      <p>Assignment operators assign values to variables.</p>
      <ul>
        <li>Assignment (=): <code>a = b</code></li>
        <li>Addition Assignment (+=): <code>a += b</code></li>
        <li>Subtraction Assignment (-=): <code>a -= b</code></li>
        <li>Multiplication Assignment (*=): <code>a *= b</code></li>
        <li>Division Assignment (/=): <code>a /= b</code></li>
      </ul>

      <pre>
        {`Example:
int a = 10;
a += 5;  // 15
a -= 3;  // 12
a *= 2;  // 24
a /= 4;  // 6`}
      </pre>

      <h2>5. Bitwise Operator</h2>
      <p>Bitwise operators perform operations on bits.</p>
      <ul>
        <li>Bitwise AND (&): <code>a & b</code></li>
        <li>Bitwise OR (|): <code>a | b</code></li>
        <li>Bitwise NOT (~): <code>~a</code></li>
        <li>Bitwise XOR (^): <code>a ^ b</code></li>
      </ul>

      <pre>
        {`Example:
int a = 5;  // 0101 in binary
int b = 3;  // 0011 in binary
int result1 = a & b; // 0001 (1 in decimal)
int result2 = a | b; // 0111 (7 in decimal)`}
      </pre>

      <h2>6. Unary Operator</h2>
      <p>Unary operators perform operations on a single operand.</p>
      <ul>
        <li>Unary Plus (+): Indicates a positive value</li>
        <li>Unary Minus (-): Negates a value</li>
        <li>Increment (++): Increases value by 1</li>
        <li>Decrement (--): Decreases value by 1</li>
      </ul>

      <pre>
        {`Example:
int a = 10;
a++;  // 11
a--;  // 10`}
      </pre>

      <h2>7. Instance of Operator</h2>
      <p>Used to check if an object is an instance of a specific class or subclass.</p>

      <pre>
        {`Example:
String str = "Hello";
boolean result = str instanceof String;
System.out.println("str instanceof String -> " + result); // true`}
      </pre>

      <h2>8. Conditional Operator</h2>
      <p>The ternary operator is a shorthand for the if-else statement.</p>

      <pre>
        {`Example:
int k = 10, l = 20;
int max = (k > l) ? k : l;
System.out.println("max -> " + max); // 20`}
      </pre>
    </div>
  );
};

export default JavaOperation;
