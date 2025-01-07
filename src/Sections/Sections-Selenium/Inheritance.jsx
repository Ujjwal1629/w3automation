import React from 'react';
import "./Inheritance.css"

const InheritanceDocument = () => {
  return (
    <div className="InheritanceDocument">
      <h1>Inheritance</h1>

      <h2>1. Inheritance - Basic Concepts</h2>
      <p>
        In Java, OOP’s core concepts include inheritance. It enables a new class to have the properties and behaviors (fields and methods) of an existing class. The inherited-from class is referred to as the base class or parent class while the inheriting class is called derived or child class.
      </p>
      <p>
        Inheritance is used:
      </p>
      <ul>
        <li>Code Reusability: The code written in the Superclass is common to all subclasses. Child classes can directly use the parent class code.</li>
        <li>Method Overriding: Method Overriding is achievable only through Inheritance. It is one of the ways by which Java achieves Run Time Polymorphism.</li>
        <li>Abstraction: The concept of abstract where we do not have to provide all details, is achieved through inheritance. Abstraction only shows the functionality to the user.</li>
      </ul>

      <h2>2. Types of Inheritance</h2>
      <p>
        Java supports single inheritance and multilevel inheritance. Classes in Java do not support multiple inheritances to avoid confusion or complexities.
      </p>
      
      <h3>Single Inheritance:</h3>
      <p>A class inherits from only one superclass.</p>
      <p><strong>Single Inheritance Example:</strong></p>
      <pre>
        {`class Animal {
  void eat() {
    System.out.println("eating...");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("barking...");
  }
}

class TestInheritance {
  public static void main(String args[]) {
    Dog d = new Dog();
    d.bark();
    d.eat();
  }
}`}
      </pre>
      <p><strong>Output:</strong></p>
      <pre>
        {`barking...
eating...`}
      </pre>

      <h3>Multilevel Inheritance:</h3>
      <p>A subclass can be derived from a superclass which can also be derived from a superclass itself.</p>
      <p><strong>Multilevel Inheritance Example:</strong></p>
      <pre>
        {`class Animal {
  void eat() {
    System.out.println("eating...");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("barking...");
  }
}

class BabyDog extends Dog {
  void weep() {
    System.out.println("weeping...");
  }
}

class TestInheritance2 {
  public static void main(String args[]) {
    BabyDog d = new BabyDog();
    d.weep();
    d.bark();
    d.eat();
  }
}`}
      </pre>
      <p><strong>Output:</strong></p>
      <pre>
        {`weeping...
barking...
eating...`}
      </pre>

      <h3>Hierarchical Inheritance:</h3>
      <p>In hierarchical inheritance, multiple subclasses extend from a single superclass.</p>
      <p><strong>Hierarchical Inheritance Example:</strong></p>
      <pre>
        {`class Animal {
  void eat() {
    System.out.println("eating...");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("barking...");
  }
}

class Cat extends Animal {
  void meow() {
    System.out.println("meowing...");
  }
}

class TestInheritance3 {
  public static void main(String args[]) {
    Cat c = new Cat();
    c.meow();
    c.eat();
    //c.bark(); // Compile-time Error
  }
}`}
      </pre>
      <p><strong>Output:</strong></p>
      <pre>
        {`meowing...
eating...`}
      </pre>

      <h3>Multiple Inheritance:</h3>
      <p>In multiple inheritance, a single subclass extends from multiple super-classes. But in Java, multiple Inheritance is not supported through class. To reduce the complexity and simplify the language, multiple inheritance is not supported in Java.</p>
      <p><strong>Multiple Inheritance Example:</strong></p>
      <pre>
        {`class A {
  void msg() {
    System.out.println("Hello");
  }
}

class B {
  void msg() {
    System.out.println("Welcome");
  }
}

// class C extends A, B { // This will cause a compile-time error
//   public static void main(String args[]) {
//     C obj = new C();
//     obj.msg(); // Which msg() method would be invoked?
//   }
//}`}
      </pre>
      <p>This will Show: Compile-time error.</p>

      <h3>Hybrid Inheritance:</h3>
      <p>Hybrid inheritance is a combination of two or more types of inheritance.</p>
      <p><strong>Hybrid Inheritance Example:</strong></p>
      <pre>
        {`class Parents {
  public void displayParents() {
    System.out.println("Two Parents");
  }
}

interface Mother {
  public void show();
}

interface Father {
  public void show();
}

public class Child extends Parents implements Mother, Father {
  public void show() {
    System.out.println("Mother and Father are parents");
  }

  public void displayChild() {
    System.out.println("Mother and Father have one child");
  }

  public static void main(String args[]) {
    Child obj = new Child();
    System.out.println("Implementation of Hybrid Inheritance in Java");
    obj.show();
    obj.displayChild();
  }
}`}
      </pre>
      <p><strong>Output:</strong></p>
      <pre>
        {`Implementation of Hybrid Inheritance in Java
Mother and Father are parents
Mother and Father have one child`}
      </pre>

      <h2>3. The “super” Keyword</h2>
      <p>The immediate parent’s object could be pointed by this keyword. This reference can be used to access superclass constructors and methods too.</p>
      <p><strong>Example:</strong></p>
      <pre>
        {`class Animal {
  // method in the superclass
  public void eat() {
    System.out.println("I can eat");
  }
}

// Dog inherits Animal
class Dog extends Animal {
  // overriding the eat() method
  @Override
  public void eat() {
    // call method of superclass
    super.eat();
    System.out.println("I eat dog food");
  }

  // new method in subclass
  public void bark() {
    System.out.println("I can bark");
  }
}

class Main {
  public static void main(String[] args) {
    // create an object of the subclass
    Dog labrador = new Dog();
    // call the eat() method
    labrador.eat();
    labrador.bark();
  }
}`}
      </pre>
      <p><strong>Output:</strong></p>
      <pre>
        {`I can eat
I eat dog food
I can bark`}
      </pre>

      <h2>4. Constructor in Inheritance</h2>
      <p>The first thing that happens when a subclass is created is calling its parent constructor so as to establish values for instance variables in the parent instance variables.</p>
      <p><strong>Example:</strong></p>
      <pre>
        {`class Animal {
  public Animal() {
    System.out.println("Animal is created");
  }
}

class Dog extends Animal {
  public Dog() {
    super(); // Calls the constructor of Animal class
    System.out.println("Dog is created");
  }
}

public class Main {
  public static void main(String[] args) {
    Dog myDog = new Dog();
  }
}`}
      </pre>
      <p><strong>Output:</strong></p>
      <pre>
        {`Animal is created
Dog is created`}
      </pre>

      <h2>5. Method Overriding</h2>
      <p>A subclass provides a definition for the method in the superclass that is being inherited from it, and this is called method overriding. The inherited methods are overridden so that they have the same name, return type, and arguments.</p>
      <p><strong>Example:</strong></p>
      <pre>
        {`class Animal {
  // method in the superclass
  public void eat() {
    System.out.println("I can eat");
  }
}

// Dog inherits Animal
class Dog extends Animal {
  // overriding the eat() method
  @Override
  public void eat() {
    System.out.println("I eat dog food");
  }

  // new method in subclass
  public void bark() {
    System.out.println("I can bark");
  }
}

class Main {
  public static void main(String[] args) {
    // create an object of the subclass
    Dog labrador = new Dog();
    // call the eat() method
    labrador.eat();
    labrador.bark();
  }
}`}
      </pre>
      <p><strong>Output:</strong></p>
      <pre>
        {`I eat dog food
I can bark`}
      </pre>

      <h2>6. Conclusion</h2>
      <p>Inheritance is a powerful feature of Object-Oriented Programming (OOP) in Java that enables code reusability and method overriding, among other benefits. By understanding and implementing inheritance, developers can create more modular and maintainable code structures.</p>
    </div>
  );
};

export default InheritanceDocument;
