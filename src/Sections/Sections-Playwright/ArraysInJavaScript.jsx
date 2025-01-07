import React from 'react';
import './ArraysInJavaScript.css';

const ArraysInJavaScript = () => {
  return (
    <div className="ArraysInJavaScript">
      <h1>Arrays in JavaScript</h1>
      <p>
        An array in JavaScript is a data structure that allows you to store multiple values in a single variable. Arrays can hold any data type and can dynamically resize. They are zero-indexed, meaning the first element is at index 0.
      </p>

      <h2>Creating Arrays</h2>
      <p>Arrays can be created using square brackets <code>[]</code> or the <code>Array</code> constructor.</p>
      <pre>
        <code>
          {`// Using square brackets
const numbers = [1, 2, 3, 4, 5];

// Using the Array constructor
const fruits = new Array('Apple', 'Banana', 'Orange');`}
        </code>
      </pre>

      <h2>Accessing Array Elements</h2>
      <p>
        You can access array elements using their index. Remember, arrays are zero-indexed, so the first element is at index 0.
      </p>
      <pre>
        <code>
          {`const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Orange`}
        </code>
      </pre>

      <h2>Common Array Methods</h2>
      <p>Here are some of the most commonly used array methods in JavaScript:</p>
      <ul>
        <li>
          <strong>push()</strong>: Adds one or more elements to the end of an array.
          <pre>
            <code>
              {`const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]`}
            </code>
          </pre>
        </li>
        <li>
          <strong>pop()</strong>: Removes the last element from an array.
          <pre>
            <code>
              {`const numbers = [1, 2, 3, 4];
numbers.pop();
console.log(numbers); // Output: [1, 2, 3]`}
            </code>
          </pre>
        </li>
        <li>
          <strong>shift()</strong>: Removes the first element from an array.
          <pre>
            <code>
              {`const fruits = ['Apple', 'Banana', 'Orange'];
fruits.shift();
console.log(fruits); // Output: ['Banana', 'Orange']`}
            </code>
          </pre>
        </li>
        <li>
          <strong>unshift()</strong>: Adds one or more elements to the beginning of an array.
          <pre>
            <code>
              {`const fruits = ['Banana', 'Orange'];
fruits.unshift('Apple');
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange']`}
            </code>
          </pre>
        </li>
        <li>
          <strong>map()</strong>: Creates a new array with the results of calling a function on every element.
          <pre>
            <code>
              {`const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]`}
            </code>
          </pre>
        </li>
        <li>
          <strong>filter()</strong>: Creates a new array with all elements that pass a test.
          <pre>
            <code>
              {`const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]`}
            </code>
          </pre>
        </li>
        <li>
          <strong>reduce()</strong>: Reduces the array to a single value by applying a function to each element.
          <pre>
            <code>
              {`const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 10`}
            </code>
          </pre>
        </li>
      </ul>

      <h2>Looping Through Arrays</h2>
      <p>
        You can loop through arrays using various methods like <code>for</code>, <code>forEach</code>, and <code>for...of</code>.
      </p>
      <pre>
        <code>
          {`const fruits = ['Apple', 'Banana', 'Orange'];

// Using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using forEach method
fruits.forEach(fruit => console.log(fruit));

// Using for...of loop
for (let fruit of fruits) {
  console.log(fruit);
}`}
        </code>
      </pre>

      <h2>Conclusion</h2>
      <p>
        Arrays in JavaScript are powerful and versatile data structures that allow you to store and manipulate collections of values efficiently. By using various array methods, you can perform operations like adding, removing, or transforming elements with ease.
      </p>
    </div>
  );
};

export default ArraysInJavaScript;
