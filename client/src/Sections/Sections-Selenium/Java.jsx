import React from "react";
import "./Java.css";

export default function Java() {
  return (
    <div className="Java">
      <h1>Presentation to Java</h1>
      <p>
        Java is an object-oriented, class-based high-level programming language
        that aims to have the fewest possible number of execution dependencies.
        It is a general-purpose language that seeks to let application
        developers type in once, and run anywhere (WORA), implying that compiled
        Java code can run on all platforms that support Java without the need
        for recompilation.
      </p>
      <h1>Overview</h1>
      <p>
        Initially designed by Sun Microsystems and released in 1995, it has
        since evolved significantly and is now maintained by Oracle Corporation.
        Simplicity, portability, stability, and security are some of the
        attributes making it a popular choice for building a variety of
        applications ranging from mobile apps to large-scale enterprise systems.
      </p>
      <h1>Key Highlights of Java</h1>
      <h4>Simple and Familiar</h4>
      <p>
        The syntax of Java is mostly derived from C++ with simpler
        object-oriented facilities with fewer low-level features.
        <br />
        The language avoids complexities like those found in C++, such as
        pointers and operator overloading, making it easier to learn and use.
      </p>
      <h4>Object-Oriented</h4>
      <p>
        In Java everything is an object thus it is just purely object-oriented.
        This helps in arranging the program into a set of objects communicating
        via methods.
        <br />
        Key principles include encapsulation, inheritance, and polymorphism.
      </p>
      <h4>Independence from a Particular Platform</h4>
      <p>
        At both the source level and the binary level Java achieves independence
        from any particular platform.
        <br />
        For instance, Java compiler converts Java code into bytecode which can
        be executed on whatever platform through Java Virtual Machine (JVM)
        without minding about the underlying architecture.
      </p>
      <h4>Robust and Secure</h4>
      <p>
        In addition to having strong memory management system alongside
        automatic garbage collection feature, early checking for possible errors
        is also preferred in Java. <br />
        Through this language, explicit pointer usage is avoided yielding a
        secure environment where inner JVM provides a robust security
        architecture for all java programs.
      </p>
      <h4>Multithreaded</h4>
      <p>
        Multithreading support of java enables multiple threads of execution to
        run concurrently and enhance performance of applications especially
        those that are computationally intensive.
      </p>
      <h4>High Performance</h4>
      <p>
        Though interpreted languages are generally slower than compiled ones,
        Java bytecode is almost native code in terms of performance. <br />
        This involves converting bytecode to native machine code at runtime by
        Just-In-Time (JIT) compilers to optimize its performance.
      </p>
      <h4>Distributed</h4>
      <p>
        Java TCP/IP and HTTP/FTP protocols are supported in full via abundant
        libraries, making distributed computing a reality.
      </p>
      <h4>Dynamic</h4>
      <p>
        Java is capable of dynamically linking new class libraries, methods, and
        objects that provide for its adaptability and extendibility.
      </p>
      <h1>Java Architecture</h1>
      <p>Java architecture details:</p>
      <ul>
        <li>Java Development Kit (JDK)</li>
        <p>
          The JDK is a feature-rich software development kit necessary for
          developing Java applications that comprise the Java Runtime
          Environment (JRE), an interpreter/loader (Java), a compiler (Javac),
          an archiver (Jar), a documentation generator (Javadoc), and other
          tools used in Java programming.
        </p>
        <li>Java Runtime Environment (JRE)</li>
        <p>
          Libraries, and Java Virtual Machine (JVM) among others are some of the
          features that make JRE run Java programs without any need for special
          hardware, operating systems, or any other explicit support such as
          compilers or debuggers.
        </p>
        <li>Java Virtual Machine (JVM)</li>
        <p>
          JVM is an abstract computing machine enabling a computer to execute a
          computer program written in Java language; it has three notions: there
          is specification, implementation, and instance. <br />
          It converts bytecode into machine code and provides the runtime
          environment needed for running Java applications.
        </p>
      </ul>

      <h1>Different Versions of Java</h1>
      <p>Java has three main editions:</p>
      <ul>
        <li>Java SE (Java Standard Edition)</li>
        <p>
          The core aspects of the Java programming language are provided by Java
          SE. It is responsible for defining everything from low-level classes
          and objects that are used in network, security, database connection,
          graphical user interface (GUI) development, and XML parsing.
        </p>
        <li>Java EE (Java Enterprise Edition)</li>
        <p>
          On top of Java SE, this provides an API and a runtime environment for
          building large-scale, multi-tiered, scalable, reliable, and secure
          internet applications.
        </p>
        <li>Java ME (Java Micro Edition)</li>
        <p>
          This is a robust and flexible java platform for mobile devices and
          embedded systems. It is a subset of java SE that provides libraries
          and APIs specifically designed for use with embedded systems and
          mobile devices.
        </p>
      </ul>
      <h1>Important Concepts in Java</h1>
      <h4>Classes And Objects</h4>
      <p>
        Classes act as blueprints for objects that contain data type structure
        plus operating methods. <br /> Objects are created using the keyword
        ‘new’ as instances of classes.
      </p>
      <h4>Inheritance</h4>
      <p>
        By inheriting properties and behaviours from another class, inheritance
        lets a new class be developed that enhances code reuse as well as the
        method overriding
      </p>
      <h4>Polymorphism</h4>
      <p>
        With polymorphism, one interface can do many things for different types
        of objects; these actions are based on the situation.
      </p>
      <h4>Abstraction</h4>
      <p>
        Abstraction is all about hiding the intricate details and showing only
        relevant features of the object to reduce complexity. It has done using
        abstract classes and interfaces.
      </p>
      <h4>Encapsulation</h4>
      <p>
        Data (variables) and code (methods) are bound together as a single unit
        under encapsulation, whereby the data is made private and hence not
        visible to the outside world while it can be accessed through public
        methods.
      </p>
      <h1>Conclusion</h1>
      <p>
        Java is defying the odds as far as adaptability is concerned, and its
        position on this remains strong. No wonder it is one of the most
        portable, secure, and stable programming languages that enjoys
        widespread appeal for various applications. Java’s fundamental
        principles and functionalities should be understood by anyone who wishes
        to advance in computer programming or software development generally
      </p>
    </div>
  );
}
