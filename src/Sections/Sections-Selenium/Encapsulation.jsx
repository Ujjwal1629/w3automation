import React from 'react';
import './Encapsulation.css'; // Link to the CSS file

const Encapsulation = () => {
  return (
    <div className="Encapsulation">
      <h1>Encapsulation in Java OOPS</h1>
      
      <h2>1. Encapsulation</h2>
      <p>Encapsulation is the process in which data is packaged together. It combines code with information and acts as a shelter that protects the data from other codes outside of it.</p>
      <p>For example, in an object-oriented program, encapsulation ensures that the variables or data in a class are not directly accessible from outside the class. Access is granted only through member functions of the class where the variables are declared.</p>
      
      <h3>Example:</h3>
      <pre>
        {`
        public class Person {
            // Private fields
            private String name;
            private int age;

            // Public getter for name
            public String getName() {
                return name;
            }

            // Public setter for name
            public void setName(String name) {
                this.name = name;
            }

            // Public getter for age
            public int getAge() {
                return age;
            }

            // Public setter for age
            public void setAge(int age) {
                if (age > 0) {
                    this.age = age;
                }
            }
        }

        public class Main {
            public static void main(String[] args) {
                // Creating an instance of Person
                Person person = new Person();

                // Setting values using setter methods
                person.setName("John Doe");
                person.setAge(25);

                // Getting values using getter methods
                System.out.println("Name: " + person.getName());
                System.out.println("Age: " + person.getAge());
            }
        }
        `}
      </pre>

      <p>Output:</p>
      <pre>
        {`
        Name: John Doe
        Age: 25
        `}
      </pre>

      <h2>2. Benefits of Encapsulation</h2>
      <ul>
        <li><strong>Information Hiding</strong>: Limits accessibility to data members and hides implementation details.</li>
        <li><strong>Enhanced Adaptability</strong>: Allows class variables to be read-only or write-only as needed.</li>
        <li><strong>Reusability</strong>: Encapsulation improves reusability and is easy to modify for new requirements.</li>
        <li><strong>Easy Testing</strong>: Encapsulated code can be unit tested easily.</li>
      </ul>

      <h2>3. Drawbacks of Encapsulation</h2>
      <ul>
        <li>If not used properly, it can lead to increased complexity.</li>
        <li>May limit flexibility in implementation.</li>
      </ul>

      <h2>4. Achieving Encapsulation in Java</h2>
      <p>Encapsulation is achieved by:</p>
      <ul>
        <li>Declaring the variables of a class as private.</li>
        <li>Providing public getter and setter methods to access and update the private variables.</li>
      </ul>

      <h3>Example:</h3>
      <pre>
        {`
        public class BankAccount {
            private double balance;

            public BankAccount(double initialBalance) {
                if (initialBalance > 0) {
                    this.balance = initialBalance;
                }
            }

            public double getBalance() {
                return balance;
            }

            public void deposit(double amount) {
                if (amount > 0) {
                    balance += amount;
                }
            }

            public void withdraw(double amount) {
                if (amount > 0 && amount <= balance) {
                    balance -= amount;
                }
            }
        }

        public class Main {
            public static void main(String[] args) {
                BankAccount account = new BankAccount(1000.0);
                account.deposit(500.0);
                account.withdraw(200.0);

                System.out.println("Current balance: " + account.getBalance());
            }
        }
        `}
      </pre>

      <p>Output:</p>
      <pre>
        {`
        Current balance: 1300.0
        `}
      </pre>

      <h2>5. Key Points</h2>
      <ul>
        <li><strong>Encapsulation</strong>: Protects internal object details from external access.</li>
        <li><strong>Data Hiding</strong>: Declaring variables private to restrict access.</li>
        <li><strong>Access Control</strong>: Using public methods to control data access and validation.</li>
      </ul>

      <h2>6. Conclusion</h2>
      <p>Encapsulation ensures the protection and correct usage of data, enabling programmers to create flexible, reusable, and safe code.</p>
    </div>
  );
};

export default Encapsulation;
