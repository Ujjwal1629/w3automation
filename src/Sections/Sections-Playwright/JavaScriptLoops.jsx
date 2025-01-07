import React from 'react';
import './JavaScriptLoops.css';

const JavaScriptLoops = () => {
  return (
    <div className="JavaScriptLoops">
      <h1>Loops in JavaScript</h1>
      <p>
        In JavaScript, loops can be defined in several ways to carry out repetitive actions. Each type of loop has its own advantages and disadvantages in application.
      </p>

      <h2>1. for Loop</h2>
      <p>
        When the number of iterations can be counted prior, a for loop is most preferred. It consists of an initialization, a condition, and an update expression.
      </p>
      <pre>
        <code>
          {`for (initialization; condition; update) {
  // code to be executed
}`}
        </code>
      </pre>
      <p>Example:</p>
      <pre>
        <code>
          {`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}
        </code>
      </pre>
      <p>Output:</p>
      <pre>
        <code>{`0\n1\n2\n3\n4`}</code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Initialization: <code>let i = 0</code> — Controls the index with a pre-condition of 0.</li>
        <li>Condition: <code>{`i < 5`}</code> — The loop should continue as long as the value of i is less than 5.</li>
        <li>Update: <code>i++</code> — Increments i by one in each iteration.</li>
        <li>Code Block: <code>console.log(i)</code> displays the current value of i in the loop.</li>
      </ul>

      <h2>2. while Loop</h2>
      <p>
        The while loop executes a code block as long as the specified condition is true. It is helpful when the number of iterations cannot be predetermined.
      </p>
      <pre>
        <code>
          {`while (condition) {
  // code to be executed
}`}
        </code>
      </pre>
      <p>Example:</p>
      <pre>
        <code>
          {`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`}
        </code>
      </pre>
      <p>Output:</p>
      <pre>
        <code>{`0\n1\n2\n3\n4`}</code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Condition: <code>{`i < 5`}</code> — As long as this condition holds, the loop will continue.</li>
        <li>Code Block: <code>console.log(i)</code> displays the value of i, followed by <code>i++</code> to increment i.</li>
      </ul>

      <h2>3. do...while Loop</h2>
      <p>
        The do…while loop differs from the usual while loop by executing the code block at least once before checking the condition.
      </p>
      <pre>
        <code>
          {`do {
  // code to be executed
} while (condition);`}
        </code>
      </pre>
      <p>Example:</p>
      <pre>
        <code>
          {`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`}
        </code>
      </pre>
      <p>Output:</p>
      <pre>
        <code>{`0\n1\n2\n3\n4`}</code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Code Block: Executes once before the condition is checked.</li>
        <li>Condition: <code>{`i < 5`}</code> — The loop continues as long as this condition is true.</li>
      </ul>

      <h2>4. for...in Loop</h2>
      <p>
        The for...in loop is used to iterate over the enumerable properties of an object.
      </p>
      <pre>
        <code>
          {`for (let key in object) {
  // code to be executed
}`}
        </code>
      </pre>
      <p>Example:</p>
      <pre>
        <code>
          {`let person = {
  name: "John",
  age: 30,
  city: "New York"
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}`}
        </code>
      </pre>
      <p>Output:</p>
      <pre>
        <code>{`name: John\nage: 30\ncity: New York`}</code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Key: Represents the property name.</li>
        <li><code>person[key]</code>: Accesses the property value of the object.</li>
      </ul>

      <h2>5. for...of Loop</h2>
      <p>
        The for...of loop is used to iterate over iterable objects such as arrays, strings, or collections.
      </p>
      <pre>
        <code>
          {`for (let item of iterable) {
  // code to be executed
}`}
        </code>
      </pre>
      <p>Example:</p>
      <pre>
        <code>
          {`let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}`}
        </code>
      </pre>
      <p>Output:</p>
      <pre>
        <code>{`apple\nbanana\ncherry`}</code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Item: Represents each value in the iterable object.</li>
      </ul>

      <h2>6. Array.prototype.forEach Method</h2>
      <p>
        The forEach method is an array method that executes a provided function once for each array element, serving as an alternative to for loops specifically for arrays.
      </p>
      <pre>
        <code>
          {`array.forEach(function(element, index, array) {
  // code to be executed
});`}
        </code>
      </pre>
      <p>Example:</p>
      <pre>
        <code>
          {`let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});`}
        </code>
      </pre>
      <p>Output:</p>
      <pre>
        <code>{`1\n2\n3\n4\n5`}</code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Element: Each value in the array.</li>
        <li>Function: Executes once for each element in the array.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        In JavaScript, loops are essential for executing repetitive tasks efficiently. The <code>for</code> loop is ideal for known iteration counts, while the <code>while</code> loop suits scenarios with uncertain iteration counts. The <code>do...while</code> loop guarantees at least one execution before checking the condition. For iterating over object properties, use the <code>for...in</code> loop, and for iterable collections like arrays, the <code>for...of</code> loop is effective. Additionally, the <code>forEach</code> method offers a streamlined way to iterate over array elements.
      </p>
      <ul>
        <li><strong>for Loop:</strong> Best when the number of iterations is known.</li>
        <li><strong>while Loop:</strong> Useful for loops where the number of iterations is not known in advance.</li>
        <li><strong>do...while Loop:</strong> Ensures the loop block runs at least once.</li>
        <li><strong>for...in Loop:</strong> Iterates over enumerable properties of objects.</li>
        <li><strong>for...of Loop:</strong> Iterates over iterable objects like arrays and strings.</li>
        <li><strong>forEach Method:</strong> Provides a concise way to iterate over arrays.</li>
      </ul>
      <p>
        Understanding these loops allows you to handle various programming tasks efficiently, from simple iterations to complex data processing.
      </p>
    </div>
  );
};

export default JavaScriptLoops;
