import React from 'react';
import "./JavaConstructor.css"

const JavaConstructor = () => {
  return (
    <div className="JavaConstructor">
      <h1>Java Constructors</h1>
      
      <h2>1. Constructors in Java</h2>
      <p>
        Constructors are special methods in Java used to initialize objects. They are called when an instance of a class is created and have no return type. The name of the constructor must match the class name.
      </p>
      
      <h3>Example:</h3>
      <pre>
        {`
        class Main {
          private String name;

          // Constructor
          Main() {
            System.out.println("Constructor Called:");
            name = "Programiz";
          }

          public static void main(String[] args) {
            Main obj = new Main(); // Constructor is invoked
            System.out.println("The name is " + obj.name);
          }
        }
        `}
      </pre>
      <p>Output:</p>
      <pre>
        {`
        Constructor Called:
        The name is Programiz
        `}
      </pre>

      <h2>2. Types of Constructors</h2>
      
      <h3>i. Default Constructor</h3>
      <p>
        The default constructor is provided by the Java compiler if no constructor is defined in the class. It initializes object fields with default values.
      </p>
      <pre>
        {`
        class Main {
          int a;
          boolean b;

          public static void main(String[] args) {
            Main obj = new Main(); // Calls default constructor
            System.out.println("a = " + obj.a); // Default values
            System.out.println("b = " + obj.b);
          }
        }
        `}
      </pre>
      <p>Output:</p>
      <pre>
        {`
        a = 0
        b = false
        `}
      </pre>

      <h3>ii. Parameterized Constructor</h3>
      <p>
        A parameterized constructor allows you to pass values when creating an object, which will initialize object fields with those values.
      </p>
      <pre>
        {`
        class Main {
          String language;

          // Constructor with a parameter
          Main(String lang) {
            language = lang;
          }

          public static void main(String[] args) {
            Main obj1 = new Main("Java");
            Main obj2 = new Main("Python");
          }
        }
        `}
      </pre>
      <p>Output:</p>
      <pre>
        {`
        Java Programming Language
        Python Programming Language
        `}
      </pre>

      <h3>iii. Constructor Overloading</h3>
      <p>
        Constructor overloading allows a class to have multiple constructors with different parameter lists.
      </p>
      <pre>
        {`
        class Main {
          String language;

          // No-argument constructor
          Main() {
            this.language = "Java";
          }

          // Parameterized constructor
          Main(String language) {
            this.language = language;
          }

          public void getName() {
            System.out.println("Programming Language: " + this.language);
          }

          public static void main(String[] args) {
            Main obj1 = new Main();
            Main obj2 = new Main("Python");

            obj1.getName();
            obj2.getName();
          }
        }
        `}
      </pre>
      <p>Output:</p>
      <pre>
        {`
        Programming Language: Java
        Programming Language: Python
        `}
      </pre>

      <h2>3. Using "this" Keyword</h2>
      <p>
        The "this" keyword refers to the current object in Java. It can be used to differentiate between instance variables and parameters with the same name, or to call one constructor from another.
      </p>

      <h3>Example:</h3>
      <pre>
        {`
        public class Car {
          String color;
          String model;
          int year;

          // Parameterized constructor
          public Car(String color, String model, int year) {
            this.color = color;
            this.model = model;
            this.year = year;
          }

          // Overloaded constructor using this
          public Car(String model) {
            this("Unknown", model, 0);
          }

          public void display() {
            System.out.println("Color: " + this.color);
            System.out.println("Model: " + this.model);
            System.out.println("Year: " + this.year);
          }
        }
        `}
      </pre>
      <p>Output:</p>
      <pre>
        {`
        Color: Red
        Model: Tesla Model 3
        Year: 2021

        Color: Unknown
        Model: Ford Mustang
        Year: 0
        `}
      </pre>

      <h2>4. No-Argument Constructor</h2>
      <p>
        A no-argument constructor does not accept any parameters. It is explicitly defined and does not automatically get created by the compiler if other constructors are defined.
      </p>
      <pre>
        {`
        class Main {
          int i;

          // No-argument constructor
          Main() {
            i = 5;
          }

          public static void main(String[] args) {
            Main obj = new Main();
            System.out.println("Value of i: " + obj.i);
          }
        }
        `}
      </pre>
      <p>Output:</p>
      <pre>
        {`
        Value of i: 5
        `}
      </pre>

      <h2>5. Copy Constructor</h2>
      <p>
        A copy constructor creates an object by copying another object's values. Though Java doesn’t have a built-in copy constructor, you can create one manually.
      </p>
      <pre>
        {`
        public class Car {
          String color;
          String model;
          int year;

          // Parameterized constructor
          public Car(String color, String model, int year) {
            this.color = color;
            this.model = model;
            this.year = year;
          }

          // Copy constructor
          public Car(Car other) {
            this.color = other.color;
            this.model = other.model;
            this.year = other.year;
          }
        }
        `}
      </pre>
    </div>
  );
};

export default JavaConstructor;
