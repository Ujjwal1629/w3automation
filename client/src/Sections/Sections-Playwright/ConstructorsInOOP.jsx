import React from 'react';
import './ConstructorsInOOP.css';

const ConstructorsInOOP = () => {
  return (
    <div className="ConstructorsInOOP">
      <h1>Constructors in OOPS</h1>
      <p>
        In object-oriented programming (OOP), a constructor is defined as an abstract method or function for setting an object immediately after its creation. Constructors implement the value of the attributes of an object and ensure that the object is in the correct condition after creation.
      </p>
      <p>
        In JavaScript, constructors are used in classes or constructor functions. When an object is created with the <code>new</code> keyword, its constructor is called internally to populate the newly created object with data.
      </p>

      <h2>Explanation of Constructors in JavaScript</h2>
      <p>In JavaScript, constructors can be implemented in two forms:</p>
      <ul>
        <li>Constructor Functions (pre-ES6)</li>
        <li>Class Constructors (ES6 and beyond)</li>
      </ul>

      <h2>Key Features of Constructors</h2>
      <ul>
        <li><strong>Automatic Calling:</strong> When a new object is created, the constructor function is called automatically.</li>
        <li><strong>this Keyword:</strong> The <code>this</code> keyword refers to the newly generated object.</li>
        <li><strong>Single Occurrence:</strong> The constructor is only called once during the object's creation.</li>
      </ul>

      <h2>Advantages of Constructors</h2>
      <ul>
        <li>Automated initialization of objects with valid data.</li>
        <li>Code reusability for creating multiple objects with similar structures.</li>
        <li>Improved readability and encapsulation in object creation.</li>
      </ul>

      <h2>Disadvantages of Constructors</h2>
      <ul>
        <li>Excessive memory usage due to copying properties and methods for each new object.</li>
        <li>Increased complexity when too many parameters are involved.</li>
        <li>Inflexibility for objects requiring optional parameters without default values.</li>
      </ul>

      <h2>A. Constructor Functions (Pre-ES6)</h2>
      <p>Before ES6, objects were created using constructor functions in JavaScript.</p>
      <pre>
        <code>
          {`function ObjectConstructor(param1, param2) {
  this.property1 = param1;
  this.property2 = param2;
  this.method1 = function() {
    // method logic
  };
}`}
        </code>
      </pre>
      <h3>Example:</h3>
      <pre>
        <code>
          {`function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getDetails = function() {
    return \`\${this.name} is \${this.age} years old.\`;
  };
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.getDetails()); // Output: Alice is 30 years old.
console.log(person2.getDetails()); // Output: Bob is 25 years old.`}
        </code>
      </pre>

      <h2>B. ES6 Classes and Constructors</h2>
      <p>With ES6, JavaScript introduced classes, which make object creation cleaner and more readable.</p>
      <pre>
        <code>
          {`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return \`\${this.name} is \${this.age} years old.\`;
  }
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.getDetails()); // Output: Alice is 30 years old.
console.log(person2.getDetails()); // Output: Bob is 25 years old.`}
        </code>
      </pre>

      <h2>Inheriting Constructors</h2>
      <p>In JavaScript, constructors can inherit from a parent class or a constructor function.</p>
      <h3>Example:</h3>
      <pre>
        <code>
          {`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound.\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }

  speak() {
    return \`\${this.name}, the \${this.breed}, barks!\`;
  }
}

const dog1 = new Dog('Buddy', 'Golden Retriever');
console.log(dog1.speak()); // Output: Buddy, the Golden Retriever, barks!`}
        </code>
      </pre>

      <h2>Use Cases of Constructors in JavaScript</h2>
      <ul>
        <li><strong>Object Creation:</strong> Constructors are useful for creating multiple instances of an object with the same structure, such as user profiles or products.</li>
        <li><strong>Component Creation:</strong> In UI frameworks like React, constructors create component objects with initial states.</li>
        <li><strong>Inheritance:</strong> Constructors facilitate inheritance in hierarchical structures like employees in a company.</li>
        <li><strong>Encapsulation of Initialization Logic:</strong> Constructors ensure that objects are created in a valid state.</li>
      </ul>

      <h2>Real-World Example: E-Commerce System</h2>
      <h3>Implementation:</h3>
      <pre>
        <code>
          {`class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getProductDetails() {
    return \`\${this.name} costs $\${this.price}.\`;
  }
}

class DiscountedProduct extends Product {
  constructor(name, price, discount) {
    super(name, price);
    this.discount = discount;
  }

  getDiscountedPrice() {
    return this.price - (this.price * this.discount / 100);
  }

  getProductDetails() {
    return \`\${this.name} originally costs $\${this.price}, but after a \${this.discount}% discount, it costs $\${this.getDiscountedPrice()}.\`;
  }
}

const product1 = new Product('Laptop', 1200);
const discountedProduct1 = new DiscountedProduct('Smartphone', 800, 10);

console.log(product1.getProductDetails()); // Output: Laptop costs $1200.
console.log(discountedProduct1.getProductDetails()); // Output: Smartphone originally costs $800, but after a 10% discount, it costs $720.`}
        </code>
      </pre>

      <h2>Conclusion</h2>
      <p>
        Constructors in JavaScript play a pivotal role in object-oriented programming by providing a structured way to create and initialize objects. By using constructor functions or ES6 classes, developers can define blueprints for objects, encapsulating properties and methods that can be reused, enhancing code organization and consistency.
      </p>
    </div>
  );
};

export default ConstructorsInOOP;
