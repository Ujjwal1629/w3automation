import React from 'react';
import './JavaScriptPrimitivesAndObjects.css';

const JavaScriptPrimitivesAndObjects = () => {
  return (
    <div className="JavaScriptPrimitivesAndObjects">
      <h1>JavaScript Primitives and Objects</h1>
      <p>
        JavaScript classifies values into two categories: Primitives and Non-Primitives. These categories merit understanding because they differ in how they are stored, manipulated, and compared.
      </p>

      <h2>Primitives</h2>
      <p>
        Primitives are the first level and simplest type of data. They are fixed, meaning their values are constant and cannot be altered once they are created. However, the variable can be reassigned to a different primitive value.
      </p>

      <h3>Types of Primitive Values</h3>
      <ul>
        <li>
          <strong>String:</strong> Characters grouped together.
          <pre><code>{`let str = "Hello";`}</code></pre>
        </li>
        <li>
          <strong>Number:</strong> Both whole and decimal numbers.
          <pre><code>{`let num = 42;`}</code></pre>
        </li>
        <li>
          <strong>Boolean:</strong> Logical values, true or false.
          <pre><code>{`let isTrue = true;`}</code></pre>
        </li>
        <li>
          <strong>Null:</strong> Represents an absent object.
          <pre><code>{`let emptyValue = null;`}</code></pre>
        </li>
        <li>
          <strong>Undefined:</strong> Declared variable without a value.
          <pre><code>{`let uninitialized;`}</code></pre>
        </li>
        <li>
          <strong>BigInt:</strong> Whole numbers larger than the Number type can safely represent.
          <pre><code>{`let bigNum = 123456789123456789123456789n;`}</code></pre>
        </li>
        <li>
          <strong>Symbol:</strong> A unique identifier.
          <pre><code>{`let uniqueKey = Symbol('id');`}</code></pre>
        </li>
      </ul>

      <h3>Characteristics of Primitives</h3>
      <ul>
        <li>Immutable: Once created, primitive values cannot be changed.</li>
        <li>Stored by value: Retained in memory as the actual value.</li>
        <li>Copying: A primitive variable can be copied, resulting in independent variables.</li>
      </ul>

      <h2>Objects</h2>
      <p>
        Unlike primitives, objects are more complex data forms in JavaScript. Objects are mutable, meaning their properties can be altered. An object is a collection of one or more key-value pairs.
      </p>

      <h3>Types of Objects</h3>
      <ul>
        <li>
          <strong>Object Literals:</strong> The simplest form of JavaScript objects.
          <pre><code>{`let person = { name: "John", age: 30 };`}</code></pre>
        </li>
        <li>
          <strong>Arrays:</strong> Ordered collections of elements.
          <pre><code>{`let arr = [1, 2, 3, 4];`}</code></pre>
        </li>
        <li>
          <strong>Functions:</strong> First-class objects that can be assigned to variables.
          <pre><code>{`function greet() { console.log("Hello!"); }`}</code></pre>
        </li>
        <li>
          <strong>Date Objects:</strong> For manipulating dates and times.
          <pre><code>{`let today = new Date();`}</code></pre>
        </li>
        <li>
          <strong>Custom Objects:</strong> Created by specifying methods and properties.
          <pre><code>{`function Car(make, model) { this.make = make; this.model = model; }`}</code></pre>
        </li>
      </ul>

      <h3>Characteristics of Objects</h3>
      <ul>
        <li>Mutable: Properties can be changed after the object is created.</li>
        <li>Stored by reference: Objects are stored in memory as references.</li>
        <li>Copying: Copying an object variable does not duplicate the object but copies its reference.</li>
      </ul>

      <h2>Example with Explanation</h2>
      <h3>Primitives Example</h3>
      <pre><code>{`let a = 10;
let b = a; // Copying the value of 'a' into 'b'
console.log(a); // Output: 10
console.log(b); // Output: 10
b = 20; // Changing 'b' does not affect 'a'
console.log(a); // Output: 10
console.log(b); // Output: 20`}</code></pre>

      <h3>Objects Example</h3>
      <pre><code>{`let obj1 = {name: "John"};
let obj2 = obj1; // Copying the reference of obj1 into obj2
console.log(obj1.name); // Output: "John"
console.log(obj2.name); // Output: "John"
obj2.name = "Doe"; // Changing obj2 affects obj1
console.log(obj1.name); // Output: "Doe"
console.log(obj2.name); // Output: "Doe"`}</code></pre>

      <h2>Difference Between Primitives and Objects</h2>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Primitives</th>
            <th>Objects</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data Type</td>
            <td>String, Number, Boolean, Null, Undefined, BigInt, Symbol</td>
            <td>Arrays, Functions, Custom objects, Date, Object literals</td>
          </tr>
          <tr>
            <td>Mutability</td>
            <td>Immutable</td>
            <td>Mutable</td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>Stored by value</td>
            <td>Stored by reference</td>
          </tr>
          <tr>
            <td>Copying</td>
            <td>Creates an independent copy</td>
            <td>Copies the reference</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>Fixed-size</td>
            <td>Dynamic size</td>
          </tr>
          <tr>
            <td>Operations</td>
            <td>Creates a new value</td>
            <td>Modifies the same object</td>
          </tr>
        </tbody>
      </table>

      <h2>Conclusion</h2>
      <p>
        In JavaScript, understanding the distinction between primitives and objects is crucial for effective coding. 
      </p>
      <ul>
        <li>Primitives are simple, immutable data types that are stored and copied by value.</li>
        <li>Objects are complex and mutable, stored and copied by reference, allowing multiple variables to point to the same object.</li>
      </ul>
      <p>
        In summary, primitives are ideal for representing simple, standalone values, while objects are essential for handling complex data, enabling efficient data manipulation and real-world modeling. Understanding when to use each type and how they behave is key to mastering JavaScript programming.
      </p>
    </div>
  );
};

export default JavaScriptPrimitivesAndObjects;
