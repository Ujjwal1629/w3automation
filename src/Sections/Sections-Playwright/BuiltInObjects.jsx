import React from 'react';
import './BuiltInObjects.css';

const BuiltInObjects = () => {
  return (
    <div className="BuiltInObjects">
      <h1>Built-in Objects in JavaScript</h1>
      <p>
        JavaScript is equipped with ready-made objects that facilitate various operations without requiring much additional code. These include Date, Math, Number, String, Boolean, Array, Object, etc. Their main goal is to accommodate various data types and operations for the programmer's ease.
      </p>

      <h2>1. Date Object</h2>
      <p>
        The Date object in JavaScript allows for date and time operations. It enables getting and setting dates, times, and even performing arithmetic operations with dates.
      </p>
      <pre><code>{`let date = new Date(); // Gets current date and time\nlet specificDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);`}</code></pre>
      <p>Example:</p>
      <pre><code>{`let currentDate = new Date();\nlet specificDate = new Date(2024, 8, 18, 14, 30, 0);\nconsole.log(currentDate);\nconsole.log(specificDate);`}</code></pre>
      <p>
        <strong>Advantages:</strong>
        <ul>
          <li>Makes date manipulation easier (getting, setting, comparing).</li>
          <li>No need to worry about time zones.</li>
        </ul>
        <strong>Disadvantages:</strong>
        <ul>
          <li>Date formatting can be challenging, often requiring libraries like Moment.js.</li>
          <li>Management of time zones is limited.</li>
        </ul>
      </p>

      <h2>2. Math Object</h2>
      <p>
        The Math object provides functions for performing basic mathematical operations, such as rounding numbers, finding max or min values, generating random numbers, etc.
      </p>
      <pre><code>{`Math.method();`}</code></pre>
      <p>Example:</p>
      <pre><code>{`let randomNum = Math.random();\nlet rounded = Math.round(7.5);\nlet maxNum = Math.max(3, 6, 1);\nconsole.log(randomNum);\nconsole.log(rounded);\nconsole.log(maxNum);`}</code></pre>
      <p>
        <strong>Advantages:</strong>
        <ul>
          <li>Provides easy-to-use mathematical functions.</li>
          <li>Built-in constants like Math.PI simplify calculations.</li>
        </ul>
        <strong>Disadvantages:</strong>
        <ul>
          <li>No support for complex calculations.</li>
          <li>External libraries may be needed for advanced math.</li>
        </ul>
      </p>

      <h2>3. Number Object</h2>
      <p>
        The Number object is used to work with numbers. It provides methods to test number properties and to parse strings into numbers.
      </p>
      <pre><code>{`Number.method();`}</code></pre>
      <p>Example:</p>
      <pre><code>{`let num = 123.456;\nlet isInteger = Number.isInteger(num);\nlet parsedInt = Number.parseInt("100.99");\nlet fixedNum = num.toFixed(2);\nconsole.log(isInteger);\nconsole.log(parsedInt);\nconsole.log(fixedNum);`}</code></pre>
      <p>
        <strong>Advantages:</strong>
        <ul>
          <li>Helps in validating and formatting numbers.</li>
          <li>Supports safe operations on finite numbers.</li>
        </ul>
        <strong>Disadvantages:</strong>
        <ul>
          <li>Doesn’t support extreme precision for large numbers.</li>
          <li>External libraries may be needed for complex manipulations.</li>
        </ul>
      </p>

      <h2>4. Boolean Object</h2>
      <p>
        The Boolean object represents two logical values: true or false. It can cast other types of data into their boolean forms.
      </p>
      <pre><code>{`let boolValue = Boolean(expression);`}</code></pre>
      <p>Example:</p>
      <pre><code>{`let isTrue = Boolean(1);\nlet isFalse = Boolean(0);\nlet boolFromString = Boolean("");\nconsole.log(isTrue);\nconsole.log(isFalse);\nconsole.log(boolFromString);`}</code></pre>
      <p>
        <strong>Advantages:</strong>
        <ul>
          <li>Easy handling of truthy and falsy values in conditionals.</li>
        </ul>
        <strong>Disadvantages:</strong>
        <ul>
          <li>Can be confusing when evaluating non-boolean values.</li>
        </ul>
      </p>

      <h2>5. String Object</h2>
      <p>
        The String object is used for text computation and has methods for searching, replacing, cutting, joining, and formatting text.
      </p>
      <pre><code>{`let str = "example";`}</code></pre>
      <p>Example:</p>
      <pre><code>{`let sentence = "Hello, JavaScript!";\nlet upper = sentence.toUpperCase();\nlet subStr = sentence.substring(7, 17);\nlet replaced = sentence.replace("JavaScript", "World");\nconsole.log(upper);\nconsole.log(subStr);\nconsole.log(replaced);`}</code></pre>
      <p>
        <strong>Advantages:</strong>
        <ul>
          <li>Multiple options for string manipulation.</li>
        </ul>
        <strong>Disadvantages:</strong>
        <ul>
          <li>Modification leads to new strings since they are immutable.</li>
        </ul>
      </p>

      <h2>6. Array Object</h2>
      <p>
        An Array object stores a collection of values and is dynamic in nature, allowing for various data types and providing many functions to modify data.
      </p>
      <pre><code>{`let arr = [element1, element2, ...];`}</code></pre>
      <p>Example:</p>
      <pre><code>{`let numbers = [1, 2, 3, 4];\nlet length = numbers.length;\nlet reversed = numbers.reverse();\nconsole.log(length);\nconsole.log(reversed);`}</code></pre>
      <p>
        <strong>Advantages:</strong>
        <ul>
          <li>Easy to collect and change information.</li>
          <li>Includes useful methods like map(), filter(), and reduce().</li>
        </ul>
        <strong>Disadvantages:</strong>
        <ul>
          <li>Large arrays may lead to performance issues.</li>
          <li>No direct method to handle multidimensional arrays.</li>
        </ul>
      </p>

      <h2>Summary Table</h2>
      <table>
        <thead>
          <tr>
            <th>Object</th>
            <th>Purpose</th>
            <th>Example</th>
            <th>Advantages</th>
            <th>Disadvantages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Date</td>
            <td>Working with dates and times</td>
            <td><code>new Date()</code></td>
            <td>Simplifies date and time handling</td>
            <td>Date formatting is complex</td>
          </tr>
          <tr>
            <td>Math</td>
            <td>Provides mathematical functions</td>
            <td><code>Math.round(7.5)</code></td>
            <td>Built-in math functions</td>
            <td>Limited to basic math functions</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>Handling numbers, formatting, and parsing</td>
            <td><code>Number.isInteger(5)</code></td>
            <td>Validates and formats numbers</td>
            <td>Doesn’t handle large numbers well</td>
          </tr>
          <tr>
            <td>Boolean</td>
            <td>Represents true or false values</td>
            <td><code>Boolean(1)</code></td>
            <td>Useful for conditional logic</td>
            <td>Confusing truthy/falsy evaluation</td>
          </tr>
          <tr>
            <td>String</td>
            <td>Manipulating and formatting text</td>
            <td><code>toUpperCase()</code></td>
            <td>Versatile methods for string manipulation</td>
            <td>Strings are immutable</td>
          </tr>
        </tbody>
      </table>

      <h2>Conclusion</h2>
      <p>
        JavaScript's built-in objects, such as <code>Date</code>, <code>Math</code>, <code>Number</code>, <code>Boolean</code>, <code>String</code>, and <code>Array</code>, provide essential functionality for handling various data types and operations. These objects simplify complex tasks and offer powerful methods, making coding more efficient. Despite some limitations, they are indispensable for effective programming.
      </p>
    </div>
  );
};

export default BuiltInObjects;
