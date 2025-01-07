import React from 'react';
import './Polymorphism.css';

const Polymorphism = () => {
  return (
    <div className="Polymorphism">
      <h1>Polymorphism in OOP</h1>
      <p>
        Polymorphism in OOP means different objects respond to the same method in different manners. Simplifying these terms, polymorphism enables a single interface to work with many different forms (data types, classes, or functions). The term polymorphism means having many forms and hence polymorphism in OOP facilitates a class where a particular method can be implemented on multiple objects, where each of the objects behaves differently.
      </p>

      <h2>Kinds of Polymorphism</h2>
      <h3>1. Compile-time Polymorphism or Static Polymorphism</h3>
      <p>
        This aspect of object-oriented programming determines the parameter values during program compilation. Most of the time, it is achieved via method overloading (same name of the method but with different specifications of arguments). However, JavaScript does not allow such method overloading.
      </p>

      <h3>2. Run time Polymorphism or Dynamic Polymorphism</h3>
      <p>
        In this case, behavior is settled at run time. It is most often realized by employing overriding methods (the reimplementation of the base class function in the descendant class).
      </p>

      <h2>Advantages of Polymorphism</h2>
      <ul>
        <li>Code Reusability: Encourages code accessibility and flexibility.</li>
        <li>Extensibility: Easier to add features without tampering with the superclass.</li>
        <li>Maintainability: Reduces the amount of code and simplifies control.</li>
        <li>Decoupling: Reduces dependency of classes on each other.</li>
      </ul>

      <h2>Disadvantages of Polymorphism</h2>
      <ul>
        <li>Performance Overhead: May have performance overhead in determining the appropriate method at runtime.</li>
        <li>Complexity: Can lead to confusion about which method implementation is invoked.</li>
        <li>Debugging Difficulty: Errors are likely at runtime, making it hard to identify issues.</li>
      </ul>

      <h2>Implementation of Polymorphism</h2>
      <h3>A. Method Overriding (Runtime Polymorphism)</h3>
      <pre><code>{`class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  sound() {\n    return \`\${this.name} makes a sound.\`;\n  }\n}\nclass Dog extends Animal {\n  sound() {\n    return \`\${this.name} barks.\`;\n  }\n}\nclass Cat extends Animal {\n  sound() {\n    return \`\${this.name} meows.\`;\n  }\n}\nconst myDog = new Dog('Buddy');\nconst myCat = new Cat('Whiskers');\nconsole.log(myDog.sound()); // Output: Buddy barks.\nconsole.log(myCat.sound()); // Output: Whiskers meows.`}</code></pre>

      <h3>B. Simulating Method Overloading (Compile-time Polymorphism)</h3>
      <pre><code>{`class Calculator {\n  calculate(a, b, operator = '+') {\n    if (arguments.length === 2) {\n      return a + b; // Default behavior: addition\n    } else if (arguments.length === 3) {\n      switch (operator) {\n        case '+': return a + b;\n        case '-': return a - b;\n        case '*': return a * b;\n        case '/': return a / b;\n        default: return 'Invalid operator';\n      }\n    }\n  }\n}\nconst calc = new Calculator();\nconsole.log(calc.calculate(5, 3)); // Output: 8\nconsole.log(calc.calculate(5, 3, '-')); // Output: 2`}</code></pre>

      <h2>Use Cases of Polymorphism in JavaScript</h2>
      <ul>
        <li>
          <strong>User Interface Components:</strong> A component class defines common behavior, with subclasses implementing their render methods.
        </li>
        <li>
          <strong>Data Processing System:</strong> Different types of data can be processed with a common method that behaves differently for each data type.
        </li>
        <li>
          <strong>Payment Gateway System:</strong> Different payment classes redefine the processPayment method according to their specific payment method.
        </li>
        <li>
          <strong>Shape Rendering in Graphics:</strong> Different shapes extend a base class and implement their draw methods to project themselves.
        </li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Polymorphism in JavaScript allows for a more generalized method implementation, where the effect differs based on the object it is called upon. It enhances code design by encouraging method overriding and simulating method overloading, making it easier to write flexible, reusable, and maintainable code. By leveraging polymorphism, developers can design systems where new functionality can be easily added without modifying existing code, thereby adhering to the Open-Closed Principle in software design.
      </p>

      <h2>Key Points</h2>
      <ul>
        <li>Polymorphism defines the ability to implement a single method in different forms depending on the type of object.</li>
        <li>Method Overriding (runtime polymorphism) allows child classes to provide specific implementations of a method inherited from a parent class.</li>
        <li>Method Overloading is not natively supported in JavaScript but can be simulated by handling arguments dynamically within a method.</li>
        <li>Advantages include code reusability, flexibility, and extensibility, while disadvantages include potential performance overhead and increased complexity.</li>
      </ul>
    </div>
  );
};

export default Polymorphism;
