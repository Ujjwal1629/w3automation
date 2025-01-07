import React from 'react';
import './JavaAbstraction.css';

const JavaAbstraction = () => {
  return (
    <div className="javaAbstraction">
      <h1>Abstraction in Java</h1>
      <p>
        Abstraction is the process of hiding internal details and showing only the essential features of an object. It reduces complexity and allows the programmer to focus on interacting with objects rather than their inner workings.
      </p>

      <h2>Table of Contents</h2>
      <ol>
        <li>Abstraction</li>
        <li>Abstract Classes</li>
        <li>Interfaces</li>
        <li>Difference Between Interfaces and Abstract Classes</li>
        <li>Key Features of Abstraction</li>
        <li>Advantages of Abstraction</li>
        <li>Disadvantages of Abstraction</li>
        <li>When to Utilize Abstraction</li>
        <li>Conclusion</li>
      </ol>

      <h2>1. Abstraction</h2>
      <p>
        Abstraction allows you to focus on the what of an object rather than the how. It hides implementation details while exposing only necessary information.
      </p>
      <pre>
        {`// Abstract class
abstract class Animal {
  public abstract void animalSound(); // Abstract method
  public void sleep() { System.out.println("Zzz"); }  // Regular method
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}

class Main {
  public static void main(String[] args) {
    Pig myPig = new Pig(); // Create a Pig object
    myPig.animalSound();
    myPig.sleep();
  }
}`}
      </pre>

      <h2>2. Abstract Classes</h2>
      <p>
        In Java, abstract classes cannot be instantiated directly. They can have both abstract methods (without a body) and regular methods.
      </p>
      <pre>
        {`abstract class Shape {
  String color;
  abstract double area(); // Abstract method
  public abstract String toString();  // Abstract method

  public Shape(String color) {
    this.color = color;
  }

  public String getColor() { return color; }  // Regular method
}

class Circle extends Shape {
  double radius;
  public Circle(String color, double radius) {
    super(color);
    this.radius = radius;
  }

  @Override
  double area() { return Math.PI * Math.pow(radius, 2); }
  @Override
  public String toString() { return "Circle color is " + super.getColor() + " and area is: " + area(); }
}`}
      </pre>

      <h2>3. Interfaces</h2>
      <p>
        An interface is a reference type in Java that contains abstract methods, constants, default methods, static methods, and nested types. Unlike abstract classes, interfaces cannot have instance fields or constructors.
      </p>
      <pre>
        {`interface Shape {
  double calculateArea();  // Abstract method
}

class Circle implements Shape {
  private double radius;
  public Circle(double radius) { this.radius = radius; }

  public double calculateArea() { return Math.PI * radius * radius; }
}

class Rectangle implements Shape {
  private double length, width;
  public Rectangle(double length, double width) {
    this.length = length;
    this.width = width;
  }

  public double calculateArea() { return length * width; }
}`}
      </pre>

      <h2>4. Difference Between Abstract Classes and Interfaces</h2>
      <table>
        <thead>
          <tr>
            <th>Abstract Classes</th>
            <th>Interfaces</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Can have both abstract and regular methods.</td>
            <td>Can only contain abstract methods (until Java 8 introduces default and static methods).</td>
          </tr>
          <tr>
            <td>Can have instance variables.</td>
            <td>Cannot have instance variables, only constants.</td>
          </tr>
          <tr>
            <td>Supports single inheritance.</td>
            <td>Supports multiple inheritance.</td>
          </tr>
          <tr>
            <td>Allows constructors.</td>
            <td>Does not allow constructors.</td>
          </tr>
          <tr>
            <td>Members can have any access modifier.</td>
            <td>Members are public by default.</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Key Features of Abstraction</h2>
      <ul>
        <li>Simplifies code by hiding complex implementation details.</li>
        <li>Improves flexibility by allowing changes in implementation without affecting the users of the class.</li>
        <li>Encourages code reusability across different parts of an application.</li>
        <li>Facilitates maintainability by separating concerns and reducing dependencies.</li>
      </ul>

      <h2>6. Advantages of Abstraction</h2>
      <ul>
        <li>Helps secure programs by exposing only relevant details.</li>
        <li>Allows internal changes without affecting the user interface.</li>
        <li>Improves code maintainability and reuse.</li>
        <li>Offers modularity and easier debugging.</li>
        <li>Enhances security by preventing access to internal class details.</li>
      </ul>

      <h2>7. Disadvantages of Abstraction</h2>
      <ul>
        <li>Can make understanding the system more difficult.</li>
        <li>Overuse can lead to increased complexity and performance issues.</li>
        <li>Debugging can be harder due to the layers of abstraction.</li>
      </ul>

      <h2>8. When to Utilize Abstraction</h2>
      <ul>
        <li>Use abstract classes when you want to provide a common base with default behavior.</li>
        <li>Use interfaces when you need multiple inheritance or to define a contract for a class without dictating its implementation.</li>
      </ul>

      <h2>9. Conclusion</h2>
      <p>
        Abstraction in Java simplifies complexity by separating interface from implementation. Abstract classes and interfaces are essential tools for managing code organization, flexibility, and reusability. Utilizing abstraction helps developers save time by focusing on high-level design rather than low-level implementation.
      </p>
    </div>
  );
};

export default JavaAbstraction;
