import React from 'react';
import './DataTypeConversion.css'; // Assuming you will save the CSS in a file named DataTypeConversion.css

const DataTypeConversion = () => {
  return (
    <div className="DataTypeConversion">
      <h1>Conversion of Data Type in Java</h1>
      
      <p>Data type conversion is a process of altering data into another type. There are two types of type casting in Java: implicit and explicit.</p>
      
      <h2>1. Implicit Type Conversion (Widening)</h2>
      <p>This happens by default when the smaller data type is converted to a larger data type. This process is also known as widening conversion because the target data type can store all the values of the original.</p>
      <p><strong>Examples of Widening:</strong> byte to short, int, long, float, or double; int to long, float, or double, etc.</p>
      
      <h3>Example:</h3>
      <pre>
        {`
        public class ImplicitTypeConversion {
          public static void main(String[] args) {
            int intValue = 100;
            double doubleValue = intValue; // Implicit conversion from int to double
            System.out.println("Int value: " + intValue);
            System.out.println("Double value: " + doubleValue);
          }
        }
        `}
      </pre>
      <p>Output:</p>
      <pre>
        {`
        Int value: 100
        Double value: 100.0
        `}
      </pre>
      
      <h2>2. Explicit Type Conversion (Narrowing)</h2>
      <p>Explicit conversion is needed to convert a bigger data type into a smaller one, and it may result in loss of information or precision. This is known as narrowing conversion.</p>
      <p><strong>Examples of Narrowing:</strong> double to float, long to int, etc.</p>
      
      <h3>Example:</h3>
      <pre>
        {`
        public class ExplicitTypeConversion {
          public static void main(String[] args) {
            double doubleValue = 100.04;
            int intValue = (int) doubleValue; // Explicit conversion from double to int
            System.out.println("Double value: " + doubleValue);
            System.out.println("Int value: " + intValue);
          }
        }
        `}
      </pre>
      <p>Output:</p>
      <pre>
        {`
        Double value: 100.04
        Int value: 100
        `}
      </pre>
      
      <h2>3. Conversion Between Primitive Types and Wrapper Classes</h2>
      <p>In Java, every primitive data type has a corresponding wrapper class that provides methods for converting between primitive types and strings.</p>
      
      <h3>Example:</h3>
      <pre>
        {`
        public class WrapperConversion {
          public static void main(String[] args) {
            int intValue = 100;
            String stringValue = Integer.toString(intValue); // Convert int to String
            int parsedIntValue = Integer.parseInt(stringValue); // Convert String to int
            System.out.println("String value: " + stringValue);
            System.out.println("Parsed int value: " + parsedIntValue);
          }
        }
        `}
      </pre>
      <p>Output:</p>
      <pre>
        {`
        String value: 100
        Parsed int value: 100
        `}
      </pre>

      <h2>4. Type Conversion with Casting and Methods</h2>
      <p>Java provides various methods to convert data types, especially between numbers and strings.</p>
      
      <h3>Converting Strings to Numbers:</h3>
      <pre>
        {`
        public class StringToNumberConversion {
          public static void main(String[] args) {
            String numberString = "1234";
            int intValue = Integer.parseInt(numberString);
            double doubleValue = Double.parseDouble(numberString);
            System.out.println("Int value: " + intValue);
            System.out.println("Double value: " + doubleValue);
          }
        }
        `}
      </pre>
      <p>Output:</p>
      <pre>
        {`
        Int value: 1234
        Double value: 1234.0
        `}
      </pre>
      
      <h2>5. Casting Between Objects</h2>
      <p>Casting between objects is used when you need to treat an object of a subclass as an object of its superclass or vice versa.</p>
      
      <h3>Example:</h3>
      <pre>
        {`
        class Animal {
          void makeSound() {
            System.out.println("Animal makes a sound");
          }
        }

        class Dog extends Animal {
          void bark() {
            System.out.println("Dog barks");
          }
        }

        public class ObjectCasting {
          public static void main(String[] args) {
            Animal animal = new Dog(); // Upcasting
            animal.makeSound(); // Allowed

            // Downcasting
            if (animal instanceof Dog) {
              Dog dog = (Dog) animal;
              dog.bark(); // Allowed
            }
          }
        }
        `}
      </pre>
      <p>Output:</p>
      <pre>
        {`
        Animal makes a sound
        Dog barks
        `}
      </pre>

      <h2>Conclusion</h2>
      <p>Data type conversion is crucial in Java, especially when dealing with different types of data. Implicit and explicit conversions both play an important role in ensuring smooth type handling.</p>
    </div>
  );
};

export default DataTypeConversion;
