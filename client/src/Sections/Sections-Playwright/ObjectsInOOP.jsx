import React from 'react';
import './ObjectsInOOP.css';

const ObjectsInOOP = () => {
  return (
    <div className="ObjectsInOOP">
      <h1>Objects in OOP</h1>
      <p>
        In programming languages that use object-oriented programming (OOP), an object is an instance of a class, similar to a physical (real-world) object that contains attributes (data/properties) and behaviors (methods/functions). JavaScript treats objects as an OOP language, enabling better relationships between code, functions, and data objects.
      </p>

      <h2>Objects in JavaScript</h2>
      <p>
        An object refers to a collection of properties, where each property is defined by a key-value pair. Object methods are functions bound to an object, allowing manipulation of its attributes.
      </p>
      <ul>
        <li>
          <strong>Properties:</strong> Characteristics of the object (e.g., Name, Age).
        </li>
        <li>
          <strong>Methods:</strong> Blocks of code that act on an object’s attributes (e.g., getName(), calculateAge()).
        </li>
        <li>
          <strong>Encapsulation:</strong> Objects bundle data and methods that modify that data together.
        </li>
      </ul>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Encapsulation:</strong> Objects contain data along with methods that operate on that data.</li>
        <li><strong>Reusability:</strong> Objects can be reused in other parts of the codebase.</li>
        <li><strong>Abstraction:</strong> Users can utilize objects without needing to understand their implementation.</li>
        <li><strong>Inheritance:</strong> Properties and methods can be inherited from other objects (prototypal inheritance).</li>
      </ul>

      <h2>Advantages of OOP Objects</h2>
      <ul>
        <li>Modularity: Objects simplify complex systems into manageable units.</li>
        <li>Code Reusability: Objects can be reused across the codebase.</li>
        <li>Encapsulation: Objects encapsulate data and methods for cleaner code.</li>
        <li>Abstraction: Implementation details are hidden from users.</li>
        <li>Inheritance: Create more specific objects without rewriting code.</li>
      </ul>

      <h2>Disadvantages of Objects</h2>
      <ul>
        <li>Performance Overhead: Accessing properties in deep hierarchies can incur overhead.</li>
        <li>Memory Usage: Creating too many objects increases memory consumption.</li>
        <li>Complexity in Large Applications: Managing numerous objects can become problematic.</li>
        <li>Prototypal Inheritance Complexity: Understanding prototypal inheritance may be challenging.</li>
      </ul>

      <h2>Implementation of Objects in JavaScript</h2>
      <h3>A. Object Literals</h3>
      <p>Constructing objects using the syntax of object literals:</p>
      <pre><code>{`const objectName = {\n  property1: value1,\n  property2: value2,\n  method1: function() {\n    // method logic\n  }\n};`}</code></pre>
      <p>Example:</p>
      <pre><code>{`const car = {\n  brand: 'Toyota',\n  model: 'Corolla',\n  year: 2021,\n  getDetails: function() {\n    return \`\${this.brand} \${this.model}, Year: \${this.year}\`;\n  }\n};\n\nconsole.log(car.brand); // Output: Toyota\nconsole.log(car.getDetails()); // Output: Toyota Corolla, Year: 2021`}</code></pre>

      <h3>B. Constructor Functions for Creating Objects</h3>
      <p>Using a constructor function to create objects:</p>
      <pre><code>{`function Person(name, age) {\n  this.name = name;\n  this.age = age;\n  this.getDetails = function() {\n    return \`\${this.name} is \${this.age} years old.\`;\n  };\n}\n\nconst person1 = new Person('Alice', 30);\nconst person2 = new Person('Bob', 25);\n\nconsole.log(person1.getDetails()); // Output: Alice is 30 years old.\nconsole.log(person2.getDetails()); // Output: Bob is 25 years old.`}</code></pre>

      <h3>C. Prototypes and Prototypal Inheritance</h3>
      <p>Example of prototypical inheritance:</p>
      <pre><code>{`function Animal(name) {\n  this.name = name;\n}\n\nAnimal.prototype.speak = function() {\n  return \`\${this.name} makes a sound.\`;\n};\n\nconst dog = new Animal('Buddy');\nconsole.log(dog.speak()); // Output: Buddy makes a sound.`}</code></pre>

      <h3>D. ES6 Classes for Object Creation</h3>
      <p>Using ES6 class syntax:</p>
      <pre><code>{`class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  getDetails() {\n    return \`\${this.name} is \${this.age} years old.\`;\n  }\n}\n\nconst person1 = new Person('Alice', 30);\nconst person2 = new Person('Bob', 25);\n\nconsole.log(person1.getDetails()); // Output: Alice is 30 years old.\nconsole.log(person2.getDetails()); // Output: Bob is 25 years old.`}</code></pre>

      <h2>Use Cases of Objects in JavaScript</h2>
      <ul>
        <li>Structured Code: Useful in complex applications such as e-commerce, social networks, and online games.</li>
        <li>API Response Manipulation: Objects are used to encode API responses in JSON format.</li>
        <li>Component-Based UI Libraries: JavaScript objects are crucial in libraries like React.</li>
        <li>Data Encapsulation: Objects represent specific domains and their attributes.</li>
      </ul>

      <h2>Real World Example: Object-oriented Design</h2>
      <p>Implementing a Library Management System:</p>
      <pre><code>{`class Book {\n  constructor(title, author, available) {\n    this.title = title;\n    this.author = author;\n    this.available = available;\n  }\n\n  borrowBook() {\n    if (this.available) {\n      this.available = false;\n      return \`\${this.title} has been borrowed.\`;\n    } else {\n      return \`\${this.title} is currently unavailable.\`;\n    }\n  }\n\n  returnBook() {\n    this.available = true;\n    return \`\${this.title} has been returned.\`;\n  }\n}\n\nconst book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', true);\nconst book2 = new Book('1984', 'George Orwell', false);\n\nconsole.log(book1.borrowBook()); // Output: The Great Gatsby has been borrowed.\nconsole.log(book2.borrowBook()); // Output: 1984 is currently unavailable.\nconsole.log(book1.returnBook()); // Output: The Great Gatsby has been returned.`}</code></pre>

      <h2>Conclusion</h2>
      <p>
        In conclusion, object-oriented programming (OOP) in JavaScript provides a robust framework for building scalable and maintainable applications. By utilizing objects, developers can encapsulate data and functionality, promoting code reuse and modular design. JavaScript's prototypal inheritance allows for flexible object creation and extension, enabling developers to create complex hierarchies while maintaining performance. The use of ES6 classes further simplifies the syntax and enhances readability, making OOP concepts more accessible. Additionally, features like encapsulation and polymorphism foster better organization of code, facilitating collaboration among teams. Overall, mastering OOP in JavaScript not only enhances coding efficiency but also aligns with modern development practices, allowing for the creation of dynamic and interactive web applications.
      </p>
    </div>
  );
};

export default ObjectsInOOP;
