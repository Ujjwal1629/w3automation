import React from 'react';
import './AbstractionInJavaScript.css';

const AbstractionInJavaScript = () => {
  return (
    <div className="AbstractionInJavaScript">
      <h1>Abstraction</h1>
      <p>
        In Object-Oriented Programming (OOP), abstraction is the concept of hiding the internal implementation details of an object and exposing only the necessary functionality to the outside world. It focuses on providing a simplified interface to the user, keeping complexity hidden. This allows users to interact with the object without needing to understand its internal workings.
      </p>
      <p>
        In JavaScript, abstraction can be achieved by defining methods and properties that are necessary for external use while keeping internal logic hidden using closures or private fields (introduced in ES6+). By doing so, you separate the what (functionality exposed) from the how (internal implementation).
      </p>

      <h2>Explanation of Abstraction in JavaScript</h2>
      <p>
        In JavaScript, abstraction can be implemented using several techniques:
      </p>
      <ul>
        <li>Encapsulation (grouping related data and methods inside a class).</li>
        <li>Private methods and fields (using closures or <code>#</code> in modern JavaScript).</li>
        <li>Public API (exposing only what the object wants the user to interact with).</li>
      </ul>
      <p>
        Abstraction helps hide unnecessary details from the user and provides only the required interface. This improves the modularity and readability of the code while protecting the object’s integrity by preventing external tampering with internal data.
      </p>

      <h2>Types of Abstraction</h2>
      <p>There are two primary types of abstraction in OOP:</p>
      <ul>
        <li>
          <strong>Data Abstraction:</strong> Hides internal data structures or implementation details and provides access to only relevant data through controlled interfaces.
        </li>
        <li>
          <strong>Control Abstraction:</strong> Hides the logic or control flow behind high-level operations, exposing only essential behavior to the user.
        </li>
      </ul>

      <h3>1. Data Abstraction</h3>
      <p>
        Data abstraction focuses on hiding the internal state and allowing access to data only through public methods. This is done by encapsulating the data and exposing only the necessary operations to manipulate the data.
      </p>
      <pre>
        <code>
          {`class Person {
  #age; // Private field
  constructor(name, age) {
    this.name = name;
    this.#age = age; // Private
  }

  // Public method to get the age (controlled access)
  getAge() {
    return this.#age;
  }

  // Public method to set the age (controlled access)
  setAge(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    }
  }
}`}
        </code>
      </pre>

      <h3>Example: Bank Account</h3>
      <pre>
        <code>
          {`class BankAccount {
  #balance; // Private balance field
  constructor(accountNumber, initialBalance) {
    this.accountNumber = accountNumber;
    this.#balance = initialBalance;
  }

  // Public method to check balance
  checkBalance() {
    return \`Balance: $\${this.#balance}\`;
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return \`Deposited: $\${amount}\`;
    }
    return 'Deposit amount must be positive';
  }

  // Public method to withdraw money
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      return \`Withdrew: $\${amount}\`;
    }
    return 'Insufficient funds';
  }
}

// Create a BankAccount instance
const myAccount = new BankAccount('12345', 1000);
console.log(myAccount.checkBalance()); // Output: Balance: $1000
console.log(myAccount.deposit(500)); // Output: Deposited: $500
console.log(myAccount.checkBalance()); // Output: Balance: $1500
console.log(myAccount.withdraw(200)); // Output: Withdrew: $200
console.log(myAccount.checkBalance()); // Output: Balance: $1300
// Trying to access private field directly (not allowed)
console.log(myAccount.#balance); // Error: Private field '#balance' must be declared in an enclosing class`}
        </code>
      </pre>

      <h3>Explanation:</h3>
      <ul>
        <li>Private Data: The <code>#balance</code> field is private and cannot be accessed directly from outside the class, demonstrating data abstraction.</li>
        <li>Controlled Access: The methods <code>checkBalance()</code>, <code>deposit()</code>, and <code>withdraw()</code> provide controlled access to the private balance field, ensuring the security and integrity of the data.</li>
        <li>Abstraction: The user doesn’t need to know how the balance is stored or modified internally, making the system easier to use.</li>
      </ul>

      <h3>2. Control Abstraction</h3>
      <p>
        Control abstraction hides the complex control flow (such as loops, decision-making, and algorithms) behind high-level methods or functions that perform specific tasks. The user interacts with the abstracted method without needing to understand how it works internally.
      </p>
      <pre>
        <code>
          {`class CoffeeMachine {
  start() {
    this.boilWater();
    this.grindCoffee();
    this.brew();
    return 'Your coffee is ready!';
  }

  // Private methods for the internal processes
  boilWater() {
    console.log('Boiling water...');
  }

  grindCoffee() {
    console.log('Grinding coffee beans...');
  }

  brew() {
    console.log('Brewing the coffee...');
  }
}`}
        </code>
      </pre>

      <h3>Explanation:</h3>
      <ul>
        <li>Control Flow Abstraction: The complex steps involved in brewing coffee are hidden from the user. The user interacts only with the <code>start()</code> method, which abstracts the detailed control flow behind making coffee.</li>
        <li>Abstraction: The user doesn’t need to know how the machine heats the water or brews the coffee; they simply call <code>start()</code> and wait for their coffee to be ready.</li>
      </ul>

      <h2>Advantages of Abstraction</h2>
      <ul>
        <li>Simplified Interface: Abstraction provides a simplified interface, making it easier for users to interact with complex systems.</li>
        <li>Encapsulation: By combining abstraction with encapsulation, we hide implementation details and protect the internal state of the object from unwanted modifications.</li>
        <li>Improved Code Maintainability: By abstracting implementation details, the internal logic can be modified or refactored without impacting the external interface.</li>
        <li>Security: Since only relevant details are exposed, abstraction increases the security of the data by restricting access to the internal workings.</li>
      </ul>

      <h2>Disadvantages of Abstraction</h2>
      <ul>
        <li>Complexity in Design: Designing systems with abstraction requires careful planning to decide what to expose and what to hide, which can increase complexity.</li>
        <li>Performance Overhead: Abstraction might introduce a small performance overhead as it requires additional method calls or layers of logic to access internal details.</li>
        <li>Limited Access: Over-abstraction can sometimes lead to limited flexibility, as it hides useful implementation details that might be required for advanced use cases.</li>
      </ul>

      <h2>Implementation of Abstraction in JavaScript</h2>

      <h3>A. Abstraction Using Closures</h3>
      <p>
        One way to achieve abstraction in JavaScript (before ES6) is by using closures. By defining private variables and methods inside a function, they become inaccessible to the outside world, while still providing controlled access through public methods.
      </p>
      <pre>
        <code>
          {`function ClassName() {
  let privateProperty = 'Private';

  function privateMethod() {
    return 'This is private';
  }

  return {
    publicMethod: function() {
      return privateMethod() + ' and accessible through a public method.';
    }
  };
}`}
        </code>
      </pre>

      <h3>B. Abstraction Using ES6 Private Fields (#)</h3>
      <p>
        ES6 introduced private fields using the symbol <code>#</code>, making it possible to create truly private properties in classes.
      </p>
      <pre>
        <code>
          {`class Car {
  #fuelLevel;

  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.#fuelLevel = 100; // Initial fuel level
  }

  // Public method to drive the car
  drive(distance) {
    if (this.#fuelLevel > 0) {
      this.#fuelLevel -= distance * 0.1;
      return \`\${this.brand} \${this.model} drove \${distance} km. Remaining fuel: \${this.#fuelLevel.toFixed(2)}%\`;
    } else {
      return \`\${this.brand} \${this.model} has no fuel left.\`;
    }
  }

  // Public method to refuel the car
  refillFuel() {
    this.#fuelLevel = 100;
    return \`\${this.brand} \${this.model} has been refueled.\`;
  }
}

const myCar = new Car('Honda', 'Civic');
console.log(myCar.drive(50)); // Output: Honda Civic drove 50 km. Remaining fuel: 95.00%
console.log(myCar.refillFuel()); // Output: Honda Civic has been refueled.
console.log(myCar.drive(100)); // Output: Honda Civic drove 100 km. Remaining fuel: 90.00%
console.log(myCar.#fuelLevel); // Error: Private field '#fuelLevel' must be declared in an enclosing class`}
        </code>
      </pre>

      <h2>Use Cases of Abstraction</h2>
      <ul>
        <li><strong>ATM:</strong> An ATM allows users to withdraw cash or check their account balance without knowing how the transaction is processed internally.</li>
        <li><strong>Library Management System:</strong> Users can borrow and return books without understanding the complexities of the underlying processes.</li>
        <li><strong>Payment Gateway System:</strong> Users can make payments without knowing the internal workings of the payment processing.</li>
        <li><strong>Game Development:</strong> Users can interact with the game without understanding the complex algorithms behind the scenes.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Abstraction in JavaScript is a crucial OOP concept that helps simplify complex systems by hiding internal implementation details and exposing only necessary methods and properties. By using techniques like closures or ES6 private fields, JavaScript can implement abstraction, ensuring that internal logic remains hidden while providing users with a clean, user-friendly interface to interact with. Abstraction helps developers build complex systems that are easier to use, secure, and maintainable while also protecting the internal state of the application.
      </p>

      <h3>Key Points:</h3>
      <ul>
        <li>Abstraction hides the implementation details and provides a simple interface for interacting with objects.</li>
        <li>It can be implemented in JavaScript using closures (before ES6) or private fields (ES6+).</li>
        <li>It promotes modularity, security, and maintainability by separating the what from the how.</li>
        <li>In a real-world scenario like the Library Management System, abstraction makes it easier to interact with the system without exposing unnecessary complexities.</li>
      </ul>
    </div>
  );
};

export default AbstractionInJavaScript;
