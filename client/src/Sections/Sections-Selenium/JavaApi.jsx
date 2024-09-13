import React from 'react';
import './JavaApi.css';

const JavaAPIs = () => {
  return (
    <div className="javaApis">
      <h1>APIs in Java</h1>
      <p>
        A Java API (Application Programming Interface) is a collection of classes, methods, and interfaces supplied by a library that enables interaction with other programs. Java APIs can be used to connect with libraries or frameworks through web services, with one of the most frequent uses being the development of RESTful web services.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Endpoints:</strong> URLs through which clients interact with the API.</li>
        <li><strong>HTTP Methods:</strong> Actions performed on resources (GET, POST, PUT, DELETE).</li>
        <li><strong>Request and Response:</strong> Data sent to and received from the server.</li>
        <li><strong>Status Codes:</strong> Communicates the result of an HTTP request (e.g., 200 OK, 404 Not Found).</li>
      </ul>

      <h2>Java API Components</h2>
      <ul>
        <li><strong>Java Compiler:</strong> Converts user-written code into bytecode.</li>
        <li><strong>Java Virtual Machine (JVM):</strong> Processes bytecode and produces output.</li>
        <li><strong>Java API:</strong> Provides pre-built software components for connecting with software platforms or components.</li>
      </ul>

      <h2>Building a RESTful API in Java Using Spring Boot</h2>
      <h3>1. Set Up Your Development Environment</h3>
      <p>Ensure you have the following:</p>
      <ul>
        <li><strong>Java Development Kit (JDK):</strong> Installed on your machine.</li>
        <li><strong>IDE:</strong> Like IntelliJ IDEA, Eclipse, or NetBeans.</li>
        <li><strong>Build Tool:</strong> Maven or Gradle for dependency management.</li>
      </ul>

      <h3>2. Generate a New Spring Boot Project</h3>
      <p>Use <a href="https://start.spring.io/">Spring Initializr</a> to generate a Spring Boot project:</p>
      <ul>
        <li>Project: Maven Project</li>
        <li>Language: Java</li>
        <li>Spring Boot: Choose the latest stable version</li>
        <li>Group: com.example</li>
        <li>Artifact: demo</li>
        <li>Dependencies: Add "Spring Web" for RESTful services</li>
      </ul>

      <h3>3. Project Structure</h3>
      <pre>
        {`demo
├── src
│   └── main
│       ├── java
│       │   └── com
│       │       └── example
│       │           └── demo
│       │               ├── DemoApplication.java
│       │               ├── controller
│       │               │   └── UserController.java
│       │               └── model
│       │                   └── User.java
│       └── resources
│           └── application.properties
└── pom.xml`}
      </pre>

      <h3>4. Application Entry Point</h3>
      <pre>
        {`// DemoApplication.java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }
}`}
      </pre>

      <h3>5. Creating the Model</h3>
      <pre>
        {`// User.java
package com.example.demo.model;

public class User {
  private Long id;
  private String name;
  private String email;

  // Constructors, Getters, and Setters
  public User() {}

  public User(Long id, String name, String email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}`}
      </pre>

      <h3>6. Building the Controller</h3>
      <pre>
        {`// UserController.java
package com.example.demo.controller;

import com.example.demo.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
  private List<User> users = new ArrayList<>();

  // Get all users
  @GetMapping
  public List<User> getAllUsers() {
    return users;
  }

  // Get user by ID
  @GetMapping("/{id}")
  public User getUserById(@PathVariable Long id) {
    return users.stream()
                .filter(user -> user.getId().equals(id))
                .findFirst()
                .orElse(null);
  }

  // Create a new user
  @PostMapping
  public User createUser(@RequestBody User user) {
    users.add(user);
    return user;
  }

  // Update an existing user
  @PutMapping("/{id}")
  public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
    User existingUser = users.stream()
                             .filter(user -> user.getId().equals(id))
                             .findFirst()
                             .orElse(null);
    if (existingUser != null) {
      existingUser.setName(updatedUser.getName());
      existingUser.setEmail(updatedUser.getEmail());
    }
    return existingUser;
  }

  // Delete a user by ID
  @DeleteMapping("/{id}")
  public String deleteUser(@PathVariable Long id) {
    boolean removed = users.removeIf(user -> user.getId().equals(id));
    return removed ? "User deleted successfully" : "User not found";
  }
}`}
      </pre>

      <h3>7. Run and Test the API</h3>
      <p>Run the application and test the API using Postman or curl:</p>
      <ul>
  <li><strong>GET all users:</strong> <code>GET http://localhost:8080/api/users</code></li>
  <li><strong>GET user by ID:</strong> <code>GET http://localhost:8080/api/users</code></li>
  <li><strong>POST create user:</strong> <code>POST http://localhost:8080/api/users</code></li>
  <li><strong>PUT update user:</strong> <code>PUT http://localhost:8080/api/users</code></li>
  <li><strong>DELETE user:</strong> <code>DELETE http://localhost:8080/api/users</code></li>
</ul>


      <h2>Advantages of Using Java APIs</h2>
      <ul>
        <li>Expedites development by providing pre-defined classes and packages.</li>
        <li>Supports high automation levels, enabling efficient workflows.</li>
        <li>Flexible data access and seamless integration across platforms.</li>
        <li>Improves service delivery by reducing time-to-market.</li>
      </ul>

      <h2>Types of Java APIs</h2>
      <ul>
        <li><strong>Public Java APIs:</strong> Part of the JDK and free to use.</li>
        <li><strong>Private Java APIs:</strong> Developed internally by organizations.</li>
        <li><strong>Partner Java APIs:</strong> Available for authorized partners.</li>
        <li><strong>Composite Java APIs:</strong> Combine different types of APIs, often for microservices.</li>
        <li><strong>Web Java APIs:</strong> Enable browser-based applications via HTTP protocol.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Developing a REST API with Java using Spring Boot is powerful and simple. The framework's annotations and conventions make it easy to build scalable RESTful web services. Although this example shows basic CRUD operations, you can extend it with validation, exception handling, and database integration as needed.
      </p>
    </div>
  );
};

export default JavaAPIs;
