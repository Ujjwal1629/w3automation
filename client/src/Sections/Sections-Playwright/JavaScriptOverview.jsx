import React from 'react';
import './JavaScriptOverview.css';

const JavaScriptOverview = () => {
  return (
    <div className="JavaScriptOverview">
      <h1>JavaScript</h1>
      <p>
        JavaScript is a commonly used programming language based on prototyping and is also used for web page design. In both ways, the JavaScript program can be executed on the client side (in-browser) and the server side (like in Node.js). This language allows you to build interactive web pages by altering the Document Object Model (DOM), providing events, and sending requests to other servers via APIs.
      </p>
      <p>
        JavaScript is a high-level, interpreted programming language primarily used for building dynamic and interactive web applications. It was created by Brendan Eich in 1995 while working for Netscape, and it has since evolved into one of the core technologies of the web, alongside HTML and CSS.
      </p>

      <h2>Key Characteristics of JavaScript:</h2>
      <ul>
        <li>Client-Side Scripting: JavaScript enables interactive web pages and can manipulate the DOM, handle API events, and update content without reloading.</li>
        <li>Server-Side Scripting: With Node.js, JavaScript can also be used on the server to handle business logic and database management.</li>
        <li>Prototype-Based Object-Oriented Programming: JavaScript uses prototype-based inheritance instead of classical inheritance.</li>
        <li>Dynamic and Loosely Typed: Variables can change types, allowing flexibility in coding.</li>
        <li>First-Class Functions: Functions can be assigned to variables, passed as arguments, and returned from other functions.</li>
        <li>Asynchronous and Event Driven: JavaScript handles asynchronous requests using callbacks, promises, or async/await.</li>
        <li>Cross-Browser Functionality: JavaScript can run on all browsers and platforms, often using tools like Babel for transpilation.</li>
      </ul>

      <h2>Primary Components of JavaScript:</h2>
      <ol>
        <li>
          <strong>DOM Modification:</strong> JavaScript communicates with the DOM to dynamically change web pages.
          <pre>
            <code>
              {`document.getElementById("myElement").innerHTML = "Hello, JavaScript!";`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Event Management:</strong> JavaScript detects user actions like clicks and form submissions.
          <pre>
            <code>
              {`document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});`}
            </code>
          </pre>
        </li>
        <li>
          <strong>AJAX and Fetch API:</strong> JavaScript makes asynchronous requests without reloading the page.
          <pre>
            <code>
              {`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Asynchronous Operations:</strong> JavaScript can handle background operations, keeping applications responsive.
          <pre>
            <code>
              {`async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Object-Oriented Programming (OOP):</strong> JavaScript supports OOP through objects and prototypes.
          <pre>
            <code>
              {`class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  start() {
    console.log(\`\${this.brand} \${this.model} started\`);
  }
}
let myCar = new Car("Toyota", "Corolla");
myCar.start(); // "Toyota Corolla started"`}
            </code>
          </pre>
        </li>
      </ol>

      <h2>Advantages of JavaScript:</h2>
      <ul>
        <li>Interactivity: Enables dynamic web pages with user interactions and animations.</li>
        <li>Cross-Platform: Works on all modern browsers and devices.</li>
        <li>Rich Ecosystem: Offers numerous libraries and frameworks (e.g., React, Angular, Vue.js).</li>
        <li>Full-Stack: With Node.js, it can be used on both client and server sides.</li>
        <li>Huge Community: A large developer community provides ample resources and support.</li>
      </ul>

      <h2>Limitations of JavaScript:</h2>
      <ul>
        <li>Browser Dependence: Variability in execution across different browsers.</li>
        <li>Security: Client-side nature can expose applications to cross-site scripting vulnerabilities.</li>
        <li>Single-Threaded: Performance issues can arise for resource-intensive applications.</li>
      </ul>

      <h2>Use Cases:</h2>
      <ul>
        <li>Web Development: Creating dynamic websites with real-time updates.</li>
        <li>Mobile Apps: Frameworks like React Native enable mobile app development.</li>
        <li>Server-Side Programming: Node.js facilitates server-side JavaScript.</li>
        <li>Game Development: Libraries like Phaser.js enable web-based game development.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        JavaScript is a powerful and flexible language that has become indispensable for modern web development. Its ease of use, combined with powerful features for asynchronous programming, object-oriented design, and cross-platform execution, makes it an essential tool for developers. JavaScript is essential for building dynamic web applications, offering capabilities for everything from DOM manipulation and event handling to asynchronous programming and server-side logic. Understanding the basics will help you write more complex scripts as your knowledge expands.
      </p>
    </div>
  );
};

export default JavaScriptOverview;
