import React from 'react';
import "./Polymorphism.css"

const Polymorphism = () => {
  return (
    <div className="Polymorphism">
      <h1>Polymorphism in Java</h1>

      <h2>Table of Content</h2>
      <ul>
        <li>Polymorphism</li>
        <li>Types of Polymorphism</li>
        <li>Compile-Time Polymorphism</li>
        <ul>
          <li>Sub-types of Compile-Time Polymorphism</li>
        </ul>
        <li>Run-Time Polymorphism</li>
        <ul>
          <li>Sub-types of Run-Time Polymorphism</li>
        </ul>
        <li>Key features of Polymorphism</li>
        <li>Using Polymorphism in Practice</li>
        <li>Advantages of Polymorphism</li>
        <li>Disadvantages of Polymorphism</li>
        <li>Conclusion</li>
      </ul>

      <h2>Polymorphism</h2>
      <p>
        Polymorphism in Java is a notable concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. By allowing methods to be defined in a superclass and overridden in subclasses, it provides the flexibility and expansibility necessary for software design.
      </p>

      <pre>
{`// Animal.java 
class Animal { 
    public void makeSound() { 
        System.out.println("Some sound"); 
    } 
} 

// Dog.java 
class Dog extends Animal { 
    @Override 
    public void makeSound() { 
        System.out.println("Bark"); 
    } 
} 

// Cat.java 
class Cat extends Animal { 
    @Override 
    public void makeSound() { 
        System.out.println("Meow"); 
    } 
} 

// Main.java 
public class Main { 
    public static void main(String[] args) { 
        Animal myDog = new Dog(); 
        Animal myCat = new Cat(); 

        myDog.makeSound();  // Outputs: Bark 
        myCat.makeSound();  // Outputs: Meow 
    } 
}`} 
      </pre>

      <h2>Types of Polymorphism in Java</h2>
      <p>
        There are two types of polymorphism:
        <ul>
          <li>Compile-time Polymorphism (Method Overloading)</li>
          <li>Run-time Polymorphism (Method Overriding)</li>
        </ul>
      </p>

      <h3>Compile-time Polymorphism (Method Overloading)</h3>
      <p>
        Method overloading is a form of polymorphism occurring at compile time. A class can have more than one method with the same name if their parameter lists differ. The compiler determines which method will be invoked based on the method signature.
      </p>

      <pre>
{`// Example of Method Overloading
class Helper {
    static int Multiply(int a, int b) {
        return a * b;
    }

    static double Multiply(double a, double b) {
        return a * b;
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(Helper.Multiply(2, 4));  // Output: 8
        System.out.println(Helper.Multiply(5.5, 6.3));  // Output: 34.65
    }
}`}
      </pre>

      <h3>Run-time Polymorphism (Method Overriding)</h3>
      <p>
        Method overriding allows a subclass to provide its own implementation of a method that is already defined in its superclass. The object referred to at runtime decides the method that will be called.
      </p>

      <pre>
{`// Example of Method Overriding
class Parent {
    void Print() {
        System.out.println("parent class");
    }
}

class subclass1 extends Parent {
    void Print() {
        System.out.println("subclass1");
    }
}

class subclass2 extends Parent {
    void Print() {
        System.out.println("subclass2");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent a;
        a = new subclass1();
        a.Print();  // Output: subclass1
        a = new subclass2();
        a.Print();  // Output: subclass2
    }
}`}
      </pre>

      <h2>Key Features of Polymorphism</h2>
      <ul>
        <li>Code Reusability</li>
        <li>Flexibility</li>
        <li>Interface Implementation</li>
      </ul>

      <h2>Advantages of Polymorphism</h2>
      <ul>
        <li>Enhances code reusability</li>
        <li>Reduces the amount of code written</li>
        <li>Allows dynamic binding</li>
        <li>Enables generic code</li>
      </ul>

      <h2>Disadvantages of Polymorphism</h2>
      <ul>
        <li>Difficult to determine the behavior of polymorphic objects</li>
        <li>May result in performance issues</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Polymorphism is a fundamental concept in object-oriented programming that allows objects to be treated as instances of their superclass or interface. It enhances code reuse, extensibility, and maintainability, making it a powerful tool for Java developers.
      </p>
    </div>
  );
};

export default Polymorphism;
