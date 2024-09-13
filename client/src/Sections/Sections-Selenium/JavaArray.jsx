import React from 'react';
import './JavaArray.css';

const JavaArrays = () => {
  return (
    <div className="javaArrays">
      <h1>Java Arrays</h1>
      <p>
        Java arrays are an important way of storing a sequential, fixed-size collection of elements of the same type. This guide discusses array basics such as declaration, initialization, accessing elements, and common operations.
      </p>

      <h2>Table of Contents</h2>
      <ol>
        <li>Arrays
          <ul>
            <li>Declaration and Initialization</li>
            <li>Accessing Elements of Array</li>
            <li>Operations Performed on Arrays</li>
          </ul>
        </li>
        <li>Multi-Dimensional Arrays
          <ul>
            <li>Two-Dimensional
              <ul>
                <li>Declaration and Initialization</li>
                <li>Accessing and Modifying Elements</li>
                <li>Looping through a Two-Dimensional Array</li>
              </ul>
            </li>
            <li>Three-Dimensional
              <ul>
                <li>Declaration and Initialization</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>ArrayList
          <ul>
            <li>Basic Operations on ArrayList</li>
            <li>ArrayList Methods</li>
            <li>Advantages</li>
            <li>Disadvantages of ArrayList</li>
            <li>Example of ArrayList</li>
          </ul>
        </li>
        <li>Conclusion</li>
      </ol>

      <h2>1. Arrays</h2>
      <h3>Declaration and Initialization</h3>
      <p>There are various ways to declare and initialize arrays:</p>
      <pre>
        {`int[] numbers;  // Preferred
int numbers[];  // Valid but less common`}
      </pre>
      <pre>
        {`numbers = new int[5];  // Creates an array of integers with 5 elements`}
      </pre>
      <h3>Accessing Elements of Array</h3>
      <p>Indexing starts from 0:</p>
      <pre>
        {`int[] numbers = {10, 20, 30, 40, 50};
int firstNumber = numbers[0];  // Access the first element
numbers[1] = 25;  // Change the second element`}
      </pre>

      <h3>Operations Performed on Arrays</h3>
      <p>Some common operations include:</p>
      <ul>
        <li><strong>Finding Length:</strong> <code>int length = numbers.length;</code></li>
        <li><strong>Copying:</strong> 
          <pre>{`int[] copy = new int[numbers.length];
System.arraycopy(numbers, 0, copy, 0, numbers.length);`}
          </pre>
        </li>
        <li><strong>Sorting:</strong> <code>Arrays.sort(numbers);</code></li>
        <li><strong>Searching in Array:</strong> <code>Arrays.binarySearch(numbers, 25);</code></li>
      </ul>

      <h2>2. Multi-Dimensional Arrays</h2>
      <h3>Two-Dimensional Arrays</h3>
      <p>Two-dimensional arrays are grids of data stored in the form of an array of arrays.</p>
      <pre>
        {`int[][] matrix = {
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 9}
};`}
      </pre>
      <h3>Accessing and Modifying Elements</h3>
      <pre>
        {`int value = matrix[1][2];  // Accessing element 6
matrix[0][0] = 10;  // Modifying element 1`}
      </pre>

      <h3>Looping through a Two-Dimensional Array</h3>
      <pre>
        {`for (int i = 0; i < matrix.length; i++) {
  for (int j = 0; j < matrix[i].length; j++) {
    System.out.print(matrix[i][j] + " ");
  }
  System.out.println();
}`}
      </pre>

      <h3>Three-Dimensional Arrays</h3>
      <pre>
        {`int[][][] threeDArray = {
  {
    {1, 2},
    {3, 4}
  },
  {
    {5, 6},
    {7, 8}
  }
};`}
      </pre>

      <h2>3. ArrayList</h2>
      <p>An ArrayList is a resizable array that is part of the java.util package. It can grow or shrink dynamically as elements are added or removed.</p>
      <pre>
        {`ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");`}
      </pre>

      <h3>Basic Operations on ArrayList</h3>
      <ul>
        <li><strong>Adding Elements:</strong> <code>fruits.add("Orange");</code></li>
        <li><strong>Accessing Elements:</strong> <code>fruits.get(0);</code></li>
        <li><strong>Removing Elements:</strong> <code>fruits.remove(1);</code></li>
        <li><strong>Checking Size:</strong> <code>fruits.size();</code></li>
        <li><strong>Clearing:</strong> <code>fruits.clear();</code></li>
      </ul>

      <h3>ArrayList Methods</h3>
      <ul>
        <li><strong>isEmpty()</strong>: Checks if the list is empty.</li>
        <li><strong>contains()</strong>: Checks if the list contains the specified element.</li>
        <li><strong>indexOf()</strong>: Returns the index of the first occurrence of the specified element.</li>
        <li><strong>addAll()</strong>: Adds all elements of a collection to the ArrayList.</li>
        <li><strong>toArray()</strong>: Converts ArrayList to an array of objects.</li>
      </ul>

      <h2>4. Conclusion</h2>
      <p>
        Arrays and ArrayLists in Java are essential for managing collections of elements. Arrays are fixed in size, whereas ArrayLists are dynamic. Understanding the manipulation of these data structures is crucial for efficient Java programming.
      </p>
    </div>
  );
};

export default JavaArrays;
