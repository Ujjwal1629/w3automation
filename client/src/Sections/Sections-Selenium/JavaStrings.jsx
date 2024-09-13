import React from 'react';
import './JavaStrings.css';

const JavaStrings = () => {
  return (
    <div className="javaStrings">
      <h1>Java Strings</h1>
      <p>
        Strings in Java are objects that represent a sequence of characters. Java provides the `String` class to create and manipulate strings. Strings are immutable, which means once a string is created, it cannot be changed.
      </p>
      
      <h2>Creating Strings</h2>
      <p>
        In Java, there are two main ways to create strings:
      </p>
      <ul>
        <li>Using string literals: <code>String str = "Hello";</code></li>
        <li>Using the `new` keyword: <code>String str = new String("Hello");</code></li>
      </ul>

      <h2>Common String Methods</h2>
      <p>
        The `String` class provides many useful methods for working with strings. Some of the most commonly used methods are:
      </p>
      <ul>
        <li><strong>length()</strong>: Returns the length of the string. <code>str.length()</code></li>
        <li><strong>charAt()</strong>: Returns the character at the specified index. <code>str.charAt(0)</code></li>
        <li><strong>substring()</strong>: Returns a new string that is a substring of the original string. <code>str.substring(1, 4)</code></li>
        <li><strong>indexOf()</strong>: Returns the index of the first occurrence of the specified character. <code>str.indexOf('e')</code></li>
        <li><strong>toLowerCase()</strong>: Converts all characters in the string to lowercase. <code>str.toLowerCase()</code></li>
        <li><strong>toUpperCase()</strong>: Converts all characters in the string to uppercase. <code>str.toUpperCase()</code></li>
        <li><strong>trim()</strong>: Removes any leading and trailing whitespace from the string. <code>str.trim()</code></li>
        <li><strong>replace()</strong>: Replaces occurrences of a specified character or substring with another character or substring. <code>str.replace('l', 'p')</code></li>
      </ul>

      <h2>String Concatenation</h2>
      <p>
        You can concatenate strings in Java using the <code>+</code> operator or the <code>concat()</code> method.
      </p>
      <pre>
        {`String str1 = "Hello";
String str2 = "World";
String result = str1 + " " + str2;  // Hello World
String result2 = str1.concat(" ").concat(str2);  // Hello World`}
      </pre>

      <h2>Immutable Strings</h2>
      <p>
        As mentioned earlier, strings in Java are immutable. This means that whenever you modify a string, a new `String` object is created, and the original string remains unchanged. For example:
      </p>
      <pre>
        {`String str = "Hello";
str = str + " World";  // A new String object is created with the value "Hello World"`}
      </pre>

      <h2>StringBuilder and StringBuffer</h2>
      <p>
        If you need to modify a string frequently, it's better to use `StringBuilder` or `StringBuffer`. These classes provide mutable strings.
      </p>
      <ul>
        <li><strong>StringBuilder</strong>: More efficient than `String` for concatenating strings, but it is not thread-safe.</li>
        <li><strong>StringBuffer</strong>: Similar to `StringBuilder` but is thread-safe, meaning it can be used in a multithreaded environment.</li>
      </ul>

      <pre>
        {`StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb.toString());  // Hello World`}
      </pre>

      <h2>Comparing Strings</h2>
      <p>
        In Java, you can compare strings using the `equals()` method or the `compareTo()` method.
      </p>
      <ul>
        <li><strong>equals()</strong>: Compares two strings for equality. <code>str.equals("Hello")</code></li>
        <li><strong>compareTo()</strong>: Compares two strings lexicographically. <code>str.compareTo("Hello")</code></li>
      </ul>

      <pre>
        {`String str1 = "Hello";
String str2 = "World";
boolean isEqual = str1.equals(str2);  // false
int comparison = str1.compareTo(str2);  // Negative if str1 is less than str2, 0 if equal, positive if greater`}
      </pre>

      <h2>Conclusion</h2>
      <p>
        Strings are a fundamental part of Java programming. Understanding how to create and manipulate strings is essential for effective coding in Java. By using the provided methods, concatenation techniques, and tools like `StringBuilder` and `StringBuffer`, you can efficiently manage string operations in your Java applications.
      </p>
    </div>
  );
};

export default JavaStrings;
