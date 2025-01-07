import React from 'react';
import "./DataTypes.css"

const DataTypes = () => {
  return (
    <div className='dataTypes'>
      <h1>Java Data Types</h1>
      <p>
        Java is a strictly typed language, which means that every variable must be declared before it
        can be used. Data types specify the size and type of values that can be stored in an identifier.
        In Java, data types are divided into two broad categories: primitive data types and reference (or
        non-primitive) data types.
      </p>

      <h2>A. Primitive Data Types</h2>
      <p>Java primitive data types are eight in number, each with its own purpose:</p>
      <ul>
        <li>
          <strong>Byte</strong> <br />
          Size: 8-bit <br />
          Range: -128 to 127 <br />
          Example: <code>byte byteVar = 100;</code>
        </li>
        <li>
          <strong>Short</strong> <br />
          Size: 16-bit <br />
          Range: -32,768 to 32,767 <br />
          Example: <code>short shortVar = 10000;</code>
        </li>
        <li>
          <strong>Int</strong> <br />
          Size: 32-bit <br />
          Range: -2^31 to 2^31 - 1 <br />
          Example: <code>int intVar = 100000;</code>
        </li>
        <li>
          <strong>Long</strong> <br />
          Size: 64-bit <br />
          Range: -2^63 to 2^63 - 1 <br />
          Example: <code>long longVar = 100000L;</code>
        </li>
        <li>
          <strong>Float</strong> <br />
          Size: 32-bit floating point <br />
          Range: ±3.40282347E+38F <br />
          Example: <code>float floatVar = 234.5f;</code>
        </li>
        <li>
          <strong>Double</strong> <br />
          Size: 64-bit floating point <br />
          Range: ±1.79769313486231570E+308 <br />
          Example: <code>double doubleVar = 123.456;</code>
        </li>
        <li>
          <strong>Boolean</strong> <br />
          Size: 1-bit <br />
          Range: true or false <br />
          Example: <code>boolean boolVar = true;</code>
        </li>
        <li>
          <strong>Char</strong> <br />
          Size: 16-bit Unicode character <br />
          Range: '\u0000' (0) to '\uffff' (65,535) <br />
          Example: <code>char charVar = 'A';</code>
        </li>
      </ul>

      <h2>B. Non-Primitive Data Types</h2>
      <p>
        Reference data types refer to objects, and they include classes, interfaces, arrays, and strings
        among others.
      </p>

      <ul>
        <li>
          <strong>Classes</strong> <br />
          Example: <code>MyClass myObject = new MyClass(10);</code>
        </li>
        <li>
          <strong>Interfaces</strong> <br />
          Example: <code>interface MyInterface {'{'} void myMethod(); {'}'}</code>
        </li>
        <li>
          <strong>Arrays</strong> <br />
          Example: <code>int[] arrayVar = {'{1, 2, 3, 4, 5}'};</code>
        </li>
        <li>
          <strong>Strings</strong> <br />
          Example: <code>String stringVar = "Hello, World!";</code>
        </li>
      </ul>

      <h2>Program to Illustrate Primitive and Reference Data Types in Java</h2>
      <pre>
        {`public class DataTypeExample {
    public static void main(String[] args) {
        // Primitive data types
        int num = 10; 
        double salary = 2500.50;
        char grade = 'A'; 
        boolean isActive = true; 

        // Reference data types
        String name = "John Doe"; 
        int[] numbers = {1, 2, 3, 4, 5}; 

        // Printing values
        System.out.println("Primitive Data Types:");
        System.out.println("Integer: " + num);
        System.out.println("Double: " + salary);
        System.out.println("Character: " + grade);
        System.out.println("Boolean: " + isActive);

        System.out.println("\\nReference Data Types:");
        System.out.println("String: " + name);
        System.out.print("Array of Integers: ");
        for (int number : numbers) {
            System.out.print(number + " ");
        }
        System.out.println();
    }
}`}
      </pre>
    </div>
  );
};

export default DataTypes;
