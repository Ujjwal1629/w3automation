import React from 'react';
import './EnumInJava.css'; // Link to the CSS file

const EnumInJava = () => {
  return (
    <div className="EnumInJava">
      <h1>Enum in Java</h1>
      
      <p>In Java, an Enum is a special data type that allows developers to define a set of constants with fixed values. These constant names can be used wherever predefined values are required.</p>
      
      <h2>Syntax and Usage</h2>
      <p>An enum is defined as:</p>
      <pre>
        {`
        enum Season {
          WINTER, SPRING, SUMMER, AUTUMN
        }
        `}
      </pre>
      <p>In this example:</p>
      <ul>
        <li>The Enum is named <strong>Season</strong>.</li>
        <li>The members of the Enum are <strong>WINTER, SPRING, SUMMER,</strong> and <strong>AUTUMN</strong>.</li>
      </ul>

      <h2>Characteristics of Enums</h2>
      <ul>
        <li><strong>A fixed set of constants</strong>: Enums allow for a group of constants exclusive among themselves.</li>
        <li><strong>Instance Creation</strong>: Enums are final and immutable, and cannot be instantiated using the <code>new</code> keyword.</li>
        <li><strong>Methods and Constructors</strong>: Enums can have constructors and methods.</li>
      </ul>

      <h2>Enum Example</h2>
      <pre>
        {`
        enum Season {
          WINTER("Cold"),
          SPRING("Mild"),
          SUMMER("Hot"),
          AUTUMN("Cool");

          private String description;

          Season(String description) {
            this.description = description;
          }

          public String getDescription() {
            return description;
          }
        }

        public class EnumExample {
          public static void main(String[] args) {
            Season myFavoriteSeason = Season.SUMMER;
            System.out.println("My favorite season is " + myFavoriteSeason);
            System.out.println("Description: " + myFavoriteSeason.getDescription());

            for (Season season : Season.values()) {
              System.out.println(season + ": " + season.getDescription());
            }
          }
        }
        `}
      </pre>
      <p>Output:</p>
      <pre>
        {`
        My favorite season is SUMMER
        Description: Hot
        WINTER: Cold
        SPRING: Mild
        SUMMER: Hot
        AUTUMN: Cool
        `}
      </pre>

      <h2>Advantages of Enums</h2>
      <ul>
        <li><strong>Readability and Maintainability</strong>: Enums enhance code readability by using meaningful names for constants.</li>
        <li><strong>Type Safety</strong>: Enums are type-safe, ensuring only valid constants are used.</li>
        <li><strong>Static Checking</strong>: Compile-time checking prevents errors related to invalid constant values.</li>
        <li><strong>Switch Statement Support</strong>: Enums work well with Java's <code>switch</code> statements, simplifying logic.</li>
        <li><strong>Constants and Behaviours Together</strong>: Enums can encapsulate data and behavior.</li>
        <li><strong>Singleton-like Behavior</strong>: Only one instance of each enum value exists in the JVM.</li>
        <li><strong>Enum Sets and Maps</strong>: Java provides efficient collections like <code>EnumSet</code> and <code>EnumMap</code> for working with Enums.</li>
      </ul>

      <h2>Disadvantages of Enums</h2>
      <ul>
        <li><strong>Limited Extensibility</strong>: Enum constants are fixed at compile time and cannot be changed at runtime.</li>
        <li><strong>Namespace Pollution</strong>: A large number of constants may pollute the namespace.</li>
        <li><strong>Memory Overhead</strong>: Enums use more memory than simple constants.</li>
        <li><strong>Not Suitable for Large Data Sets</strong>: Enums are best suited for small, well-defined groups of constants.</li>
      </ul>

      <h2>When to Use Enums</h2>
      <ul>
        <li>When you have a small, well-defined group of constants that are unlikely to change.</li>
        <li>When you want to improve code readability and type safety.</li>
        <li>When you want to use methods and fields along with constants.</li>
      </ul>

      <h2>When to Avoid Enums</h2>
      <ul>
        <li>Avoid Enums for large or frequently changing data sets.</li>
        <li>Avoid Enums if the constant set is not clearly defined or may frequently change.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Java Enums are a powerful way to define fixed sets of constants with behaviors and fields. They improve code clarity, type safety, and maintainability, but should be used cautiously for cases where extensibility and memory efficiency are important.</p>
    </div>
  );
};

export default EnumInJava;
