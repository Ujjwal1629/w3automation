import React from 'react';
import './StringsInJavaScript.css';

const StringsInJavaScript = () => {
  return (
    <div className="StringsInJavaScript">
      <h1>Strings in JavaScript</h1>

      <h2>String Creation</h2>
      <h3>1. String Literals</h3>
      <p>You can create a string using single quotes (<code>'</code>), double quotes (<code>"</code>), or backticks (<code>`</code>).</p>
      <pre><code>{`let singleQuoteString = 'Hello, world!';\nlet doubleQuoteString = "Hello, world!";\nlet templateString = \`Hello, world!\`;`}</code></pre>

      <h3>2. String Constructor</h3>
      <p>You can also create a string using the String constructor, though it's less common:</p>
      <pre><code>{`let stringObject = new String("Hello, world!");`}</code></pre>

      <h2>String Properties and Methods</h2>
      <p>Strings in JavaScript are immutable, meaning they cannot be changed once created. Instead, string methods return new strings.</p>

      <h3>Basic String Methods</h3>

      <h4>1. (.length)</h4>
      <pre><code>{`let text = "JavaScript";\nconsole.log(text.length); // Output: 10`}</code></pre>
      <p>Returns the length of the string.</p>

      <h4>2. (.charAt(index))</h4>
      <pre><code>{`console.log(text.charAt(4)); // Output: "S"`}</code></pre>
      <p>Returns the character at a specified index.</p>

      <h4>3. (.concat(string2, string3, ...))</h4>
      <pre><code>{`let part1 = "Hello, ";\nlet part2 = "world!";\nlet message = part1.concat(part2);\nconsole.log(message); // Output: "Hello, world!"`}</code></pre>
      <p>Combines multiple strings into one.</p>

      <h4>4. (.indexOf(searchValue, startIndex))</h4>
      <pre><code>{`let text = "JavaScript is fun";\nconsole.log(text.indexOf("is")); // Output: 11`}</code></pre>
      <p>Returns the index of the first occurrence of a specified value.</p>

      <h4>5. (.slice(start, end))</h4>
      <pre><code>{`console.log(text.slice(4, 10)); // Output: "Script"`}</code></pre>
      <p>Extracts a part of a string and returns it as a new string.</p>

      <h4>6. (.split(separator))</h4>
      <pre><code>{`let text = "apple,banana,cherry";\nlet fruits = text.split(",");\nconsole.log(fruits); // Output: ["apple", "banana", "cherry"]`}</code></pre>
      <p>Splits a string into an array of substrings based on a separator.</p>

      <h4>7. (.toLowerCase() and .toUpperCase())</h4>
      <pre><code>{`console.log(text.toLowerCase()); // Output: "javascript"\nconsole.log(text.toUpperCase()); // Output: "JAVASCRIPT"`}</code></pre>
      <p>Convert a string to lowercase or uppercase.</p>

      <h4>8. (.trim())</h4>
      <pre><code>{`let text = " Hello, world! ";\nconsole.log(text.trim()); // Output: "Hello, world!"`}</code></pre>
      <p>Removes whitespace from both ends of a string.</p>

      <h2>Template Literals</h2>
      <p>Template literals (enclosed in backticks) provide a more flexible way to handle strings, allowing for multi-line strings and embedded expressions.</p>
      <pre><code>{`let name = "Alice";\nlet message = \`Hello, \${name}! Welcome to JavaScript.\`;\nconsole.log(message); // Output: "Hello, Alice! Welcome to JavaScript."`}</code></pre>

      <h2>String Immutability</h2>
      <p>Strings in JavaScript are immutable, meaning that once a string is created, it cannot be modified.</p>
      <pre><code>{`let original = "JavaScript";\nlet modified = original.replace("Script", "Script Language");\nconsole.log(original); // Output: "JavaScript"\nconsole.log(modified); // Output: "JavaScript Language"`}</code></pre>

      <h2>Conclusion</h2>
      <p>
        Strings in JavaScript are essential for handling text, offering a variety of methods to manipulate and analyze content. They can be created using literals or the String constructor, and are immutable, meaning operations on strings return new strings rather than modifying the original. Key methods include .length, .charAt(), .concat(), .indexOf(), .slice(), .split(), .toLowerCase(), .toUpperCase(), and .trim(). Template literals, using backticks, provide a powerful way to embed expressions and handle multi-line strings. Mastery of these string operations enhances text processing and dynamic content generation, making JavaScript programming more effective and flexible.
      </p>
    </div>
  );
};

export default StringsInJavaScript;
