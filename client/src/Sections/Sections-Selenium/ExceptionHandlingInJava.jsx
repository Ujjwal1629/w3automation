import React from 'react';
import './ExceptionHandlingInJava.css'; // Link to the CSS file

const ExceptionHandlingInJava = () => {
  return (
    <div className="ExceptionHandlingInJava">
      <h1>Exception Handling in Java</h1>

      <p>Exception handling in Java is a mechanism that ensures the normal flow of the program, even when runtime errors occur. Five keywords: <strong>try</strong>, <strong>catch</strong>, <strong>finally</strong>, <strong>throw</strong>, and <strong>throws</strong> are used in exception handling.</p>

      <h2>Keywords</h2>
      <ul>
        <li><strong>try:</strong> The code that may result in an exception being thrown is enclosed in the try block.</li>
        <li><strong>catch:</strong> This block deals with exceptions and should always follow a try clause.</li>
        <li><strong>finally:</strong> Irrespective of whether an exception occurs, this section runs certain cleanup codes such as closing files or releasing resources.</li>
        <li><strong>throw:</strong> It explicitly raises an error condition or extends the default behavior by throwing exceptions at runtime.</li>
        <li><strong>throws:</strong> Declares exceptions that a method can throw, reducing memory usage by defining potential exceptions during compilation.</li>
      </ul>

      <h2>Example</h2>
      <pre>
        {`
        public class ExceptionHandlingExample {
          public static void main(String[] args) {
            try {
              int data = 50 / 0; // Code that may throw an exception
            } catch (ArithmeticException e) {
              System.out.println("Exception caught: Division by zero!"); // Handling the exception
            } finally {
              System.out.println("Finally block is always executed."); // Cleanup code
            }
            System.out.println("Rest of the code...");
          }
        }
        `}
      </pre>

      <p>Explanation:</p>
      <ul>
        <li><strong>try:</strong> The code that may throw an exception.</li>
        <li><strong>catch:</strong> Catches the <code>ArithmeticException</code> and prints an error message.</li>
        <li><strong>finally:</strong> Executes regardless of the exception.</li>
        <li>The program continues after the <code>try-catch-finally</code> block.</li>
      </ul>

      <h2>Multiple Catch Blocks</h2>
      <p>A single try block can have multiple catch blocks to handle different types of exceptions:</p>
      <pre>
        {`
        public class MultipleCatchExample {
          public static void main(String[] args) {
            try {
              int[] arr = new int[5];
              arr[5] = 30 / 0; // Code that causes exceptions
            } catch (ArithmeticException e) {
              System.out.println("Arithmetic Exception caught: " + e.getMessage());
            } catch (ArrayIndexOutOfBoundsException e) {
              System.out.println("Array Index Out of Bounds Exception caught: " + e.getMessage());
            } catch (Exception e) {
              System.out.println("General Exception caught: " + e.getMessage());
            }
            System.out.println("Rest of the code...");
          }
        }
        `}
      </pre>

      <h2>Nested Try-Catch Blocks</h2>
      <p>Try blocks can be nested in Java, where a try block may appear within another:</p>
      <pre>
        {`
        public class NestedTryCatchExample {
          public static void main(String[] args) {
            try {
              try {
                int data = 50 / 0; // Inner try block
              } catch (ArithmeticException e) {
                System.out.println("Inner try-catch block: " + e.getMessage());
              }
              int[] arr = new int[5];
              arr[5] = 10; // Outer try block
            } catch (ArrayIndexOutOfBoundsException e) {
              System.out.println("Outer try-catch block: " + e.getMessage());
            }
            System.out.println("Rest of the code...");
          }
        }
        `}
      </pre>

      <h2>Throw and Throws</h2>
      <h3>Throw</h3>
      <p>This keyword is used to throw an exception explicitly:</p>
      <pre>
        {`
        public class ThrowExample {
          static void checkAge(int age) {
            if (age < 18) {
              throw new ArithmeticException("Access denied - You must be at least 18 years old.");
            } else {
              System.out.println("Access granted - You are old enough!");
            }
          }
          public static void main(String[] args) {
            checkAge(15);
          }
        }
        `}
      </pre>

      <h3>Throws</h3>
      <p>The <code>throws</code> keyword appears in the method signature to indicate that a method can generate exceptions:</p>
      <pre>
        {`
        import java.io.IOException;

        public class ThrowsExample {
          static void method() throws IOException {
            throw new IOException("Device error");
          }
          public static void main(String[] args) {
            try {
              method();
            } catch (IOException e) {
              System.out.println("Exception caught: " + e.getMessage());
            }
          }
        }
        `}
      </pre>

      <h2>Custom Exceptions</h2>
      <p>In Java, custom exceptions can be created by extending the <code>Exception</code> class:</p>
      <pre>
        {`
        class MyCustomException extends Exception {
          public MyCustomException(String message) {
            super(message);
          }
        }

        public class CustomExceptionExample {
          static void validate(int age) throws MyCustomException {
            if (age < 18) {
              throw new MyCustomException("Not valid age for voting");
            } else {
              System.out.println("Welcome to vote");
            }
          }
          public static void main(String[] args) {
            try {
              validate(15);
            } catch (MyCustomException e) {
              System.out.println("Exception caught: " + e.getMessage());
            }
          }
        }
        `}
      </pre>

      <h2>Conclusion</h2>
      <p>For robust and error-tolerant programming in Java, exception handling is essential. By using <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>, and <code>throws</code>, we can handle errors gracefully, ensuring smooth program execution even during unexpected events.</p>
    </div>
  );
};

export default ExceptionHandlingInJava;
