import React from 'react';
import './JavaMethods.css';

const JavaMethods = () => {
  return (
    <div className="javaMethods">
      <h1>Java Methods</h1>
      <p>
        Methods in Java are small pieces of code that perform specific tasks. They are essential in Java programming as they help make the code reusable, modular, and maintainable.
      </p>
      
      <h2>Table of Contents</h2>
      <ol>
        <li>Method Declaration</li>
        <li>Method Invocation</li>
        <li>Parameters and Return Values</li>
        <li>Method Overloading</li>
        <li>Static Methods</li>
        <li>Recursive Methods</li>
        <li>Access Modifiers</li>
        <li>Return Type</li>
        <li>Conclusion</li>
      </ol>

      <h2>1. Method Declaration</h2>
      <p>
        A method declaration shows the return type, name, and parameters of the method. The body of the method contains instructions that will be executed when the method is called.
      </p>
      <pre>
        {`returnType methodName(parameters) {
    // method body
}`}
      </pre>
      <p>Example:</p>
      <pre>
        {`public class Example {
    void printMessage() {
        System.out.println("Hello, World!");
    }
}`}
      </pre>

      <h2>2. Method Invocation</h2>
      <p>
        Methods are called using dot notation on an object or directly within the class if it is static.
      </p>
      <pre>
        {`public class Example {
    void printMessage() {
        System.out.println("Hello, World!");
    }

    public static void main(String[] args) {
        Example example = new Example();
        example.printMessage();  // Invokes the printMessage method
    }
}`}
      </pre>

      <h2>3. Parameters and Return Values</h2>
      <p>
        Methods can take arguments and give back results after execution. Parameters allow information to be transferred from one part of a program to another, while the return value lets you collect information.
      </p>
      <pre>
        {`public class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator calculator = new Calculator();
        int result = calculator.add(5, 3);
        System.out.println("Sum: " + result);
    }
}`}
      </pre>

      <h2>4. Method Overloading</h2>
      <p>
        Java allows method overloading, which means a class can define multiple methods with the same name but different parameter lists. This enhances readability and supports compile-time polymorphism.
      </p>
      <pre>
        {`public class OverloadedMethods {
    void display(int a) {
        System.out.println("Argument: " + a);
    }

    void display(int a, int b) {
        System.out.println("Arguments: " + a + " and " + b);
    }

    void display(double a) {
        System.out.println("Double Argument: " + a);
    }

    public static void main(String[] args) {
        OverloadedMethods om = new OverloadedMethods();
        om.display(5);
        om.display(5, 10);
        om.display(5.5);
    }
}`}
      </pre>

      <h2>5. Static Methods</h2>
      <p>
        Static methods belong to a class rather than any particular instance object. They do not require an object to be created before calling.
      </p>
      <pre>
        {`public class StaticExample {
    static void printMessage() {
        System.out.println("Hello from a static method!");
    }

    public static void main(String[] args) {
        StaticExample.printMessage();
    }
}`}
      </pre>

      <h2>6. Recursive Methods</h2>
      <p>
        Recursive methods solve problems by calling themselves. They are useful for problems like tree traversal, Fibonacci series, and factorial computation.
      </p>
      <pre>
        {`public class RecursionExample {
    int factorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    public static void main(String[] args) {
        RecursionExample example = new RecursionExample();
        int result = example.factorial(5);
        System.out.println("Factorial: " + result);
    }
}`}
      </pre>

      <h2>7. Access Modifiers</h2>
      <p>
        Access modifiers determine the visibility of methods. Java has four access levels: public, protected, default, and private.
      </p>
      <pre>
        {`public class AccessModifiersExample {
    public void publicMethod() {
        System.out.println("Public method");
    }

    protected void protectedMethod() {
        System.out.println("Protected method");
    }

    void defaultMethod() {
        System.out.println("Default method");
    }

    private void privateMethod() {
        System.out.println("Private method");
    }

    public static void main(String[] args) {
        AccessModifiersExample example = new AccessModifiersExample();
        example.publicMethod();
        example.protectedMethod();
        example.defaultMethod();
        example.privateMethod();
    }
}`}
      </pre>

      <h2>8. Return Type</h2>
      <p>
        The return type defines what kind of value a method will return. If a method does not return a value, it uses the `void` keyword.
      </p>
      <pre>
        {`public class ReturnTypeExample {
    int add(int a, int b) {
        return a + b;
    }

    void displayMessage() {
        System.out.println("This is a void method.");
    }

    public static void main(String[] args) {
        ReturnTypeExample example = new ReturnTypeExample();
        int sum = example.add(5, 3);
        System.out.println("Sum: " + sum);
        example.displayMessage();
    }
}`}
      </pre>

      <h2>9. Conclusion</h2>
      <p>
        Methods in Java are vital for writing reusable and maintainable code. A solid understanding of how to declare, invoke, overload, and manage access to methods will significantly improve your Java programming.
      </p>
    </div>
  );
};

export default JavaMethods;
