import React from 'react';
import './ClassOOPS.css';

const ClassOOPS = () => {
  return (
    <div className="ClassOOPS">
      <h1>Class in JavaScript</h1>
      <p>
        A class in JavaScript can be regarded as a template for object creation. It contains the data 
        (also called properties) and the functions (methods) that manipulate that data, allowing easier 
        management as a single unit.
      </p>
      <p>
        JavaScript classes are better ways of creating objects and working with inheritance. Although 
        classes in JavaScript resemble those in typical object-oriented programming languages such 
        as Java or C++, the implementation does not use a class mechanism and is prototype-based.
      </p>

      <h2>Formulation of a Class</h2>
      <p>
        Understanding a class in JavaScript makes it easy to create components that can be utilized 
        multiple times by grouping related methods and properties.
      </p>
      <ul>
        <li><strong>Constructor Method:</strong> This is an instance function invoked whenever a new instance of the class is created.</li>
        <li><strong>Methods:</strong> Operations executed in the context of an instance of that class.</li>
        <li><strong>Inheritance:</strong> Classes can inherit from parent classes, utilizing their methods and properties.</li>
      </ul>

      <h2>Advantages of Classes</h2>
      <ul>
        <li>Code Reusability: Multiple instances of a class can be created for reuse.</li>
        <li>Inheritance: Allows one object to gain properties of another.</li>
        <li>Encapsulation: Combines related data and functions under one class, improving modularity.</li>
        <li>Readability and Structure: Enhances the structure of JavaScript, aiding developers familiar with OOP.</li>
      </ul>

      <h2>Disadvantages of Classes</h2>
      <ul>
        <li>Complexity: Adds layers of complexity compared to simpler functions or object literals.</li>
        <li>Limited Private Fields: JavaScript supports private methods/fields using <code>#</code>, but it's still not widely adopted.</li>
        <li>Performance: Classes may introduce performance overhead due to inheritance dependencies.</li>
      </ul>

      <h2>Example Class in JavaScript</h2>
      <pre>
        <code>{`class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return \`Car: \${this.brand} \${this.model}, Year: \${this.year}\`;
  }

  startCar() {
    return \`\${this.brand} \${this.model} is starting...\`;
  }
}

// Create an instance of the Car class
let myCar = new Car('Toyota', 'Corolla', 2020);

// Output
console.log(myCar.displayInfo());  // Output: Car: Toyota Corolla, Year: 2020
console.log(myCar.startCar());     // Output: Toyota Corolla is starting...`}
        </code>
      </pre>

      <h2>Inheritance with Classes</h2>
      <p>Classes in JavaScript support inheritance where child classes derive from parent classes and extend their behavior.</p>
      <pre>
        <code>{`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a noise.\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return \`\${this.name} barks.\`;
  }
}

let dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.speak()); // Output: Buddy barks.`}
        </code>
      </pre>

      <h2>Use Cases for Classes</h2>
      <ul>
        <li>Creating multiple objects with shared properties (e.g., Car objects, User profiles).</li>
        <li>Inheritance: Implementing parent-child class relationships (e.g., Animal-Dog).</li>
        <li>Encapsulating logic: Separate logic in classes (e.g., Product class in an e-commerce application).</li>
        <li>Component-Based UI Libraries: Classes are commonly used in frameworks like React for creating UI components.</li>
      </ul>
    </div>
  );
};

export default ClassOOPS;
