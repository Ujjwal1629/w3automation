import React from 'react';
import './InheritanceInOOP.css';

const InheritanceInOOP = () => {
  return (
    <div className="InheritanceInOOP">
      <h1>Inheritance in OOP</h1>
      <p>
        In Object-Oriented Programming (OOP), inheritance is the mechanism by which one class (called the child class or subclass) inherits properties and methods from another class (called the parent class or superclass). This allows for the reusability of code and promotes a hierarchical relationship between objects.
      </p>
      <p>
        In JavaScript, inheritance allows a subclass to access the properties and methods of a parent class, reducing redundancy by sharing common functionality across classes.
      </p>

      <h2>Explanation of Inheritance in JavaScript</h2>
      <p>
        Inheritance in JavaScript enables one object (or class) to inherit the properties and methods of another. This is done using the <code>extends</code> keyword in ES6 classes or using prototypal inheritance in earlier versions of JavaScript. Through inheritance, you can create a child class that extends a parent class, adding or modifying functionality without duplicating code.
      </p>
      <p>
        JavaScript supports two primary forms of inheritance:
      </p>
      <ul>
        <li>Class-based inheritance: Introduced in ES6, where classes extend other classes.</li>
        <li>Prototypal inheritance: A more flexible inheritance mechanism where objects inherit directly from other objects.</li>
      </ul>

      <h2>Types of Inheritance</h2>
      <ol>
        <li>Single Inheritance: A subclass inherits from one superclass. This is the most common form of inheritance in JavaScript.</li>
        <li>Multilevel Inheritance: A subclass inherits from a superclass which also has a superclass, forming a vertical inheritance chain.</li>
        <li>Hierarchical Inheritance: Multiple subclasses inherit from a single parent class.</li>
        <li>Multiple Inheritance (Does Not apply In JavaScript): A subclass is allowed to have more than one superclass. This can be simulated using mixins.</li>
        <li>Hybrid Inheritance: A combination of multiple inheritance types (not directly supported in JavaScript but can be simulated).</li>
      </ol>

      <h3>Advantages of Inheritance</h3>
      <ul>
        <li>Code Reusability: Child classes can reuse code from parent classes.</li>
        <li>Simplifies Maintenance: Changes in parent classes can propagate to child classes.</li>
        <li>Extensibility: Child classes can override parent methods and define new behaviors.</li>
        <li>Logical Hierarchy: Creates a clear structure that mirrors real-life relationships.</li>
      </ul>

      <h3>Disadvantages of Inheritance</h3>
      <ul>
        <li>Increased Complexity: Can complicate class structures and relationships.</li>
        <li>Tight Coupling: Changes in parent classes can affect all child classes.</li>
        <li>Overridden Methods: Method overriding can introduce bugs if not managed carefully.</li>
        <li>Performance Overhead: Accessing inherited properties can be slower in deep inheritance chains.</li>
      </ul>

      <h2>Implementation of Inheritance in JavaScript</h2>

      <h3>A. ES6 Class-Based Inheritance</h3>
      <p>In modern JavaScript, specifically ES6 and beyond, inheritance is present in the language in the form of classes and the <code>extends</code> keyword.</p>
      <pre>
        <code>
          {`class ParentClass {
  constructor(param1) {
    this.property1 = param1;
  }
  parentMethod() {
    // Parent class method logic
  }
}

class ChildClass extends ParentClass {
  constructor(param1, param2) {
    super(param1); // Call parent constructor
    this.property2 = param2;
  }
  childMethod() {
    // Child class method logic
  }
}`}
        </code>
      </pre>
      <h3>Example:</h3>
      <pre>
        <code>
          {`// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return \`\${this.name} makes a sound.\`;
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }
  // Overriding the parent class method
  speak() {
    return \`\${this.name}, the \${this.breed}, barks!\`;
  }
}

// Creating an instance of Dog
const dog = new Dog('Buddy', 'Golden Retriever');

// Accessing inherited and overridden methods
console.log(dog.speak()); // Output: Buddy, the Golden Retriever, barks!`}
        </code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Parent Class (Animal): Defines a class named Animal, which has a name property and a speak method.</li>
        <li>Child Class (Dog): The Dog class inherits from the Animal class, adding a breed property and overriding the speak method.</li>
        <li><code>super()</code>: This calls the parent class constructor (Animal) to initialize the name property.</li>
        <li>Method Overriding: The Dog class overrides the speak method to provide a more specific implementation.</li>
      </ul>

      <h3>B. Prototypal Inheritance (Pre-ES6)</h3>
      <p>Before ES6 introduced class and extends, prototypal inheritance was practiced, where objects inherited from other objects using prototypes.</p>
      <pre>
        <code>
          {`function ParentClass(param1) {
  this.property1 = param1;
}

ParentClass.prototype.parentMethod = function() {
  // Parent class method logic
};

function ChildClass(param1, param2) {
  ParentClass.call(this, param1); // Inherit parent properties
  this.property2 = param2;
}

ChildClass.prototype = Object.create(ParentClass.prototype); // Inherit parent methods
ChildClass.prototype.constructor = ChildClass;

ChildClass.prototype.childMethod = function() {
  // Child class method logic
}`}
        </code>
      </pre>
      <h3>Example:</h3>
      <pre>
        <code>
          {`// Parent constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return \`\${this.name} makes a sound.\`;
};

// Child constructor function inheriting from Animal
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Inherit methods from Animal's prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Overriding the speak method
Dog.prototype.speak = function() {
  return \`\${this.name}, the \${this.breed}, barks!\`;
};

// Creating an instance of Dog
const dog = new Dog('Buddy', 'Golden Retriever');

// Accessing inherited and overridden methods
console.log(dog.speak()); // Output: Buddy, the Golden Retriever, barks!`}
        </code>
      </pre>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>Prototype Chain: The Dog object inherits properties and methods from the Animal object.</li>
        <li><code>call()</code> Method: Calls the Animal constructor, passing the name property to the Dog constructor.</li>
        <li><code>Object.create()</code>: Creates a new object with Animal.prototype as its prototype, ensuring that Dog inherits the methods.</li>
        <li>Method Overriding: The speak method in the Dog prototype overrides the speak method in Animal.prototype.</li>
      </ul>

      <h2>Use Cases of Inheritance in JavaScript</h2>
      <ul>
        <li>User Management System: A user class can handle attributes like username and email, while Admin and Member subclasses can inherit from the User class.</li>
        <li>E-commerce System: The Product class can define properties like name and price, while Electronics and Clothing subclasses can extend the Product class to add specific features.</li>
        <li>Game Development: The Entity class can define common characteristics, while Player and Enemy classes can inherit from Entity, defining unique attributes and actions.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Inheritance in JavaScript allows for the sharing of common properties and methods among classes, promoting code reuse and reducing redundancy. Understanding the different types of inheritance and their implementations enhances the design of object-oriented applications in JavaScript, making code more maintainable and logical.
      </p>
      <ul>
        <li>This mechanism allows the child class to inherit properties and methods from the parent class.</li>
        <li>Single Inheritance is the most common type of inheritance in JavaScript.</li>
      </ul>
    </div>
  );
};

export default InheritanceInOOP;
