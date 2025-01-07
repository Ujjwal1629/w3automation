import React from 'react';
import './StaticMethods.css';

const StaticMethods = () => {
  return (
    <div className="StaticMethods">
      <h1>Static Methods in OOP</h1>
      <h2>Definition of Static Methods in OOP</h2>
      <p>
        In Object-Oriented Programming (OOP), a static method is a type of method that is associated with the class itself, instead of being part of the instances of the class. This means that a static method does not require an instance of the class to be created; it can be called directly on the class itself. In JavaScript, static methods are defined using the <code>static</code> keyword.
      </p>

      <h2>Explanation of Static Methods in JavaScript</h2>
      <p>
        A static method is invoked on a class rather than on an object instance. Static methods do not have access to instance variables (defined using <code>this</code>) since they are purely class methods, not instance methods. They can be efficiently applied to utility methods where it is not necessary to create an instance of the class.
      </p>

      <h2>Key Characteristics</h2>
      <ul>
        <li><strong>No Access to Instance Data:</strong> Static methods cannot access or alter properties that apply to instances of the class.</li>
        <li><strong>Over Class Level Usage:</strong> They work at the class level and are used for housekeeping functions.</li>
        <li><strong>Accessed via the Class Name:</strong> You invoke a static method by the name of the class, not the name of its instance.</li>
      </ul>

      <h2>Advantages of Static Methods</h2>
      <ul>
        <li>Utility Functions: Ideal for utility or helper functions.</li>
        <li>No Creation of Object: Static methods are called without creating an instance of the class.</li>
        <li>Functionalities Of Class Level: They encapsulate functions logically related to a class.</li>
        <li>Reusable: Static methods can be reused across the application.</li>
      </ul>

      <h2>Disadvantages of Static Methods</h2>
      <ul>
        <li>No Access to Instance Data: They cannot access instance properties.</li>
        <li>No Extensibility: It can be tricky to modify behaviors in subclasses.</li>
        <li>May Lead to Tight Coupling: Too many static methods can create interdependencies.</li>
        <li>Global-Like Behavior: They behave like global functions since they do not require class instances.</li>
      </ul>

      <h2>Implementation of Static Methods in JavaScript</h2>
      <h3>A. Static Methods Definition in ES6 Class</h3>
      <pre><code>{`class MathHelper {\n  static add(a, b) {\n    return a + b;\n  }\n  static square(n) {\n    return n * n;\n  }\n}\nconsole.log(MathHelper.add(5, 3)); // Output: 8\nconsole.log(MathHelper.square(4)); // Output: 16`}</code></pre>

      <h3>B. Static Methods and Inheritance</h3>
      <pre><code>{`class Animal {\n  static makeSound() {\n    return 'Animals make sounds.';\n  }\n}\nclass Dog extends Animal {\n  static bark() {\n    return 'Dogs bark.';\n  }\n}\nconsole.log(Animal.makeSound()); // Output: Animals make sounds.\nconsole.log(Dog.makeSound()); // Output: Animals make sounds.\nconsole.log(Dog.bark()); // Output: Dogs bark.`}</code></pre>

      <h2>Static Methods and Their Uses in JavaScript</h2>
      <ul>
        <li>Utility and Helper Methods: Suitable for helper functions.</li>
        <li>Factory Methods: Used in creating objects dynamically.</li>
        <li>Validation: Useful for validation exercises.</li>
        <li>Service Classes: Commonly used in utility service classes.</li>
      </ul>

      <h2>Practical Example: User Authentication System</h2>
      <pre><code>{`class UserManager {\n  constructor(username, email) {\n    this.username = username;\n    this.email = email;\n  }\n  static isValidEmail(email) {\n    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    return emailRegex.test(email);\n  }\n  getUserDetails() {\n    return \`User: \${this.username}, Email: \${this.email}\`;\n  }\n}\nconst user = new UserManager('john_doe', 'john@example.com');\nconsole.log(UserManager.isValidEmail(user.email)); // Output: true\nconsole.log(user.getUserDetails()); // Output: User: john_doe, Email: john@example.com`}</code></pre>

      <h2>Static Properties</h2>
      <pre><code>{`class Counter {\n  static count = 0;\n  constructor() {\n    Counter.count++;\n  }\n  static getCount() {\n    return Counter.count;\n  }\n}\nconst counter1 = new Counter();\nconst counter2 = new Counter();\nconsole.log(Counter.getCount()); // Output: 2`}</code></pre>

      <h2>Conclusion</h2>
      <p>
        Static methods in JavaScript are useful for defining utility functions and class-level functionalities that do not require instance data. They enhance the modularity of code and encapsulate functions logically related to a class, facilitating a more organized and efficient code structure.
      </p>

      <h2>Key Points</h2>
      <ul>
        <li>Static methods belong to the class itself and cannot access instance properties.</li>
        <li>They are ideal for utility functions, data validation, and class-level functionality.</li>
        <li>Static methods can be inherited by child classes, making them flexible for shared behaviors.</li>
        <li>Proper use of static methods helps in structuring code that is clean and maintainable.</li>
      </ul>
    </div>
  );
};

export default StaticMethods;
