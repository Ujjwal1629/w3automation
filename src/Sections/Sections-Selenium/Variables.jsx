import React from 'react';
import "./Variable.css"

const JavaVariables = () => {
  return (
    <div className="JavaVariables">
      <h1>Types of Java Variables</h1>
      <p>
        Your browser type will tell you which programming language you are using. Java variables are not quite defined. 
        In this way, they do much more than holding values of data; they are an integral part of the programming language. 
        The kind of data that can be held in a particular variable is determined by its type.
      </p>

      <h2>Variable Types</h2>
      <p>Different groups have their role to play in the language, such as Variable types:</p>
      <ul>
        <li>Local Variables</li>
        <li>Instance Variables (Non-Static Fields)</li>
        <li>Class Variables (Static Fields)</li>
      </ul>

      <h2>Local Variables</h2>
      <p>
        Local variables are declared within methods, constructors, or blocks and are created when these entities are constructed but are 
        lost once they are finished. Before using a local variable, it is important to assign it an initial value, 
        as it does not have any default value.
      </p>
      
      <h3>Example:</h3>
      <pre>
        <code>
{`
public class LocalVariableExample {
    public void display() {
        int localVar = 10; // Local variable
        System.out.println("Local variable: " + localVar);
    }

    public static void main(String[] args) {
        LocalVariableExample example = new LocalVariableExample();
        example.display();
    }
}
`}
        </code>
      </pre>

      <h2>Instance Variables</h2>
      <p>
        Instance variables are declared within a class but outside the methods, constructors, or blocks. They are created 
        when an object is instantiated from the class and are destroyed after losing their association with that object. 
        Each instance owns its copy of all instance variables. They do not need to be initialized as they take default values.
      </p>
      
      <h3>Example:</h3>
      <pre>
        <code>
{`
public class InstanceVariableExample {
    int instanceVar; // Instance variable
    public static void main(String[] args) {
        InstanceVariableExample example = new InstanceVariableExample();
        System.out.println("Instance variable: " + example.instanceVar); // Default value 0
    }
}
`}
        </code>
      </pre>

      <h2>Class Variables (Static Fields)</h2>
      <p>
        Static fields in a class are also called member fields. They are declared outside methods, constructors, or blocks with the 
        <code>static</code> keyword. Only one instance of a class is created, and all objects share the same copy of the static variable. 
        They can be accessed directly through the class name without requiring an object.
      </p>
      
      <h3>Example:</h3>
      <pre>
        <code>
{`
public class StaticVariableExample {
    static int staticVar; // Static variable
    public static void main(String[] args) {
        System.out.println("Static variable: " + StaticVariableExample.staticVar); // Default value 0
    }
}
`}
        </code>
      </pre>

      <h2>Naming Conventions</h2>
      <ul>
        <li>Variable names must begin with A-Z, dollar sign, or underscore.</li>
        <li>Following characters can be a combination of letters, numbers, dollar signs, and underscores.</li>
        <li>Variable names are case-sensitive in Java.</li>
        <li>They cannot be Java keywords like <code>int</code>, <code>class</code>, or <code>public</code>.</li>
      </ul>

      <h2>Variables Initialization</h2>
      <p>
        A variable must be assigned a value before it is usable in Java. If an uninitialized variable is referenced in code, 
        the compiler will generate an error message.
      </p>

      <h3>Example:</h3>
      <pre>
        <code>
{`
public class VariableInitialization {
    public static void main(String[] args) {
        int uninitializedVar;
        // System.out.println(uninitializedVar); // This will cause a compile-time error
        int initializedVar = 5;
        System.out.println("Initialized variable: " + initializedVar);
    }
}
`}
        </code>
      </pre>

      <h2>Final Variables</h2>
      <p>
        The <code>final</code> keyword is used to declare constant variables, meaning they retain their values throughout their lifetime 
        and cannot be changed after initialization.
      </p>

      <h3>Example:</h3>
      <pre>
        <code>
{`
public class FinalVariableExample {
    public static void main(String[] args) {
        final int finalVar = 10;
        // finalVar = 20; // This will cause a compile-time error
        System.out.println("Final variable: " + finalVar);
    }
}
`}
        </code>
      </pre>

      <h2>Variable Scope</h2>
      <p>
        The scope of a variable refers to the section of code where the variable is accessible:
      </p>
      <ul>
        <li><strong>Local variables:</strong> Accessible only within their own block, method, or constructor.</li>
        <li><strong>Instance variables:</strong> Accessible from all methods, constructors, or blocks in the class.</li>
        <li><strong>Class variables:</strong> Accessible by both static and non-static methods within the class.</li>
      </ul>

      <h3>Example:</h3>
      <pre>
        <code>
{`
public class VariableScopeExample {
    int instanceVar = 10; // Instance variable
    static int staticVar = 20; // Static variable
    
    public void display() {
        int localVar = 30; // Local variable
        System.out.println("Local variable: " + localVar);
        System.out.println("Instance variable: " + instanceVar);
        System.out.println("Static variable: " + staticVar);
    }

    public static void main(String[] args) {
        VariableScopeExample example = new VariableScopeExample();
        example.display();
    }
}
`}
        </code>
      </pre>

      <p>
        Understanding Java variables and their scope is crucial for writing good code and ensuring correctness. 
        The scope and behavior of each type of variable are essential for data storage and retrieval in Java programs.
      </p>
    </div>
  );
};

export default JavaVariables;
