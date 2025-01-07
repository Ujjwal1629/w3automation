import React from 'react';
import './EncapsulationInJavaScript.css';

const EncapsulationInJavaScript = () => {
  return (
    <div className="EncapsulationInJavaScript">
      <h1>Encapsulation</h1>
      <p>
        Encapsulation in Object-Oriented Programming (OOP) is the concept of bounding data (i.e., attributes/properties) and methods (i.e., functions/behaviors) of an object in a single entity or class while forbidding the exposure of some components of the object. The object’s state is said to be encapsulated in such a way that it shields and hides its operational data while allowing only a small amount of it to be exposed to control interface interaction with that object.
      </p>
      <p>
        In JavaScript, encapsulation enables us to manage the availability of different properties of an object so that they can only be affected or altered by the methods of that object and not in any other manner.
      </p>

      <h2>Explanation of Encapsulation in JavaScript</h2>
      <p>
        Encapsulation can be implemented in such a way that certain properties and/or methods are private and are not accessible by any external means. Restricting access through public methods provides the necessary discipline to maintain the validity of the objects.
      </p>
      <p>Techniques to achieve encapsulation in JavaScript:</p>
      <ul>
        <li>Closure-based encapsulation (before ES6)</li>
        <li>Private fields and methods using the <code>#</code> syntax (ES6 and beyond)</li>
      </ul>
      <p>
        Encapsulation helps conceal the internal mechanisms of an object while providing only the necessary interface for interaction, ensuring that the process of data and code maintenance is simplified and improving the modularity of the designed object.
      </p>

      <h2>Key Concepts of Encapsulation</h2>
      <ul>
        <li><strong>Data Hiding:</strong> Preventing certain properties of an object from being tampered with by not exposing them directly.</li>
        <li><strong>Public Interface:</strong> Exposing specific methods to interact with the object, controlling how and when properties can be accessed or modified.</li>
        <li><strong>Controlled Access:</strong> Ensuring that internal data can only be modified in a controlled way, typically through setter and getter methods.</li>
      </ul>

      <h2>Advantages of Encapsulation</h2>
      <ul>
        <li>Data Integrity: Unauthorized changes to the data are prevented, ensuring protection against data loss.</li>
        <li>Modularity: Encourages modular coding, making it easier to comprehend and maintain.</li>
        <li>Security: Protects information held in data members from unauthorized access or changes.</li>
        <li>Improved Maintenance: Simplifies maintenance as external code cannot alter internal implementation.</li>
        <li>Flexibility: Allows internal changes without affecting user interactions.</li>
      </ul>

      <h2>Disadvantages of Encapsulation</h2>
      <ul>
        <li>Increased Complexity: Can introduce complexity by requiring additional getter and setter methods.</li>
        <li>Performance Overhead: The cost of data hiding and access methods may impact performance.</li>
        <li>Complicated Debugging: Encapsulated elements may complicate error tracking due to limited visibility.</li>
        <li>Overhead for Small Projects: Encapsulation may be excessive for simple projects.</li>
      </ul>

      <h2>Implementation of Encapsulation in JavaScript</h2>

      <h3>A. Encapsulation Using Closures (Pre-ES6)</h3>
      <p>
        Before ES6, encapsulation was often achieved using closures. By defining variables inside the constructor function, properties are kept private.
      </p>
      <pre>
        <code>
          {`function BankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  this.getBalance = function() {
    return balance; // Public method
  };
  this.deposit = function(amount) {
    if (amount > 0) {
      balance += amount; // Modify private variable
    }
  };
  this.withdraw = function(amount) {
    if (amount <= balance) {
      balance -= amount; // Modify private variable
    } else {
      console.log('Insufficient funds');
    }
  };
}`}
        </code>
      </pre>
      <h3>Example:</h3>
      <pre>
        <code>
          {`const account = new BankAccount(1000);
console.log(account.getBalance()); // Output: 1000
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
console.log(account.balance); // Output: undefined (not accessible)`}
        </code>
      </pre>

      <h3>B. Encapsulation Using ES6 Private Fields (#)</h3>
      <p>
        ES2020 introduced private fields using the <code>#</code> syntax, providing a native way to define private properties in classes.
      </p>
      <pre>
        <code>
          {`class BankAccount {
  #balance; // Private field
  constructor(initialBalance) {
    this.#balance = initialBalance; // Assign initial balance
  }
  getBalance() {
    return this.#balance; // Public method
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount; // Modify private field
    }
  }
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount; // Modify private field
    } else {
      console.log('Insufficient funds');
    }
  }
}`}
        </code>
      </pre>

      <h3>Example:</h3>
      <pre>
        <code>
          {`const account = new BankAccount(1000);
console.log(account.getBalance()); // Output: 1000
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class`}
        </code>
      </pre>

      <h2>Use Cases of Encapsulation</h2>
      <ul>
        <li>Banking Applications: Concealing sensitive data like account balance and transaction history.</li>
        <li>User Authentication Systems: Hiding user passwords and exposing methods for password hashing and validation.</li>
        <li>Component Libraries: Concealing internal state of components in UI frameworks like React.</li>
        <li>Data Validation: Ensuring data integrity by controlling how data can be modified.</li>
        <li>Game Development: Controlling player stats and attributes through specific operations.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Encapsulation in JavaScript is central to OOP, enhancing security, modularity, and code maintainability by limiting external access to object properties. By implementing encapsulation, developers can write secure, organized, and maintainable code that ensures consistent behavior of objects throughout an application's lifecycle.
      </p>
      <h3>Key Points:</h3>
      <ul>
        <li>Encapsulation is the practice of bundling data and methods into a single entity while hiding internal properties.</li>
        <li>It promotes data integrity, security, and better maintainability by controlling how external code interacts with object properties.</li>
        <li>JavaScript achieves encapsulation through closure-based methods and native private fields (using #).</li>
        <li>While encapsulation adds complexity, it provides numerous benefits in larger, modular systems where data integrity and controlled access are essential.</li>
      </ul>
    </div>
  );
};

export default EncapsulationInJavaScript;
