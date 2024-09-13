import React from 'react';
import './FileHandlingInJava.css'; // Link to the CSS file

const FileHandlingInJava = () => {
  return (
    <div className="FileHandlingInJava">
      <h1>File Handling in Java</h1>

      <p>File handling in Java is a crucial part of several programs, which allows them to read and write files. The <code>java.io</code> package has various classes and methods for file handling.</p>

      <h2>Elements of Basic File Operations</h2>
      <ul>
        <li>Creating a File</li>
        <li>Writing to a File</li>
        <li>Reading from a File</li>
        <li>Appending to a File</li>
        <li>Deleting Files</li>
      </ul>

      <h2>1. Creating a File</h2>
      <p>The <code>File</code> class is the base for file handling in Java. It provides methods to create, delete, and get information about files and directories.</p>
      <pre>
        {`
        import java.io.File;
        import java.io.IOException;

        public class CreateFileExample {
          public static void main(String[] args) {
            try {
              File file = new File("example.txt");
              if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
              } else {
                System.out.println("File already exists.");
              }
            } catch (IOException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
            }
          }
        }
        `}
      </pre>

      <h2>2. Writing to Files</h2>
      <p>For writing to files, we use <code>FileWriter</code>, <code>BufferedWriter</code>, and <code>PrintWriter</code>.</p>
      <h3>Example Using FileWriter and BufferedWriter</h3>
      <pre>
        {`
        import java.io.FileWriter;
        import java.io.BufferedWriter;
        import java.io.IOException;

        public class WriteFileExample {
          public static void main(String[] args) {
            try (FileWriter fw = new FileWriter("example.txt");
                BufferedWriter bw = new BufferedWriter(fw)) {
              bw.write("Hello, this is a test file!");
              System.out.println("Successfully wrote to the file.");
            } catch (IOException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
            }
          }
        }
        `}
      </pre>
      <h3>Example Using PrintWriter</h3>
      <pre>
        {`
        import java.io.PrintWriter;
        import java.io.IOException;

        public class PrintWriterExample {
          public static void main(String[] args) {
            try (PrintWriter pw = new PrintWriter("example.txt")) {
              pw.println("Hello, this is a test file!");
              pw.printf("Formatted number: %.2f%n", 123.456);
              System.out.println("Successfully wrote to the file.");
            } catch (IOException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
            }
          }
        }
        `}
      </pre>

      <h2>3. Reading from Files</h2>
      <p>We use <code>FileReader</code> and <code>BufferedReader</code> or <code>Scanner</code> to read from files.</p>
      <h3>Example Using FileReader and BufferedReader</h3>
      <pre>
        {`
        import java.io.FileReader;
        import java.io.BufferedReader;
        import java.io.IOException;

        public class ReadFileExample {
          public static void main(String[] args) {
            try (FileReader fr = new FileReader("example.txt");
                BufferedReader br = new BufferedReader(fr)) {
              String line;
              while ((line = br.readLine()) != null) {
                System.out.println(line);
              }
            } catch (IOException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
            }
          }
        }
        `}
      </pre>
      <h3>Example Using Scanner</h3>
      <pre>
        {`
        import java.io.File;
        import java.io.FileNotFoundException;
        import java.util.Scanner;

        public class ReadFileWithScanner {
          public static void main(String[] args) {
            try {
              File file = new File("example.txt");
              Scanner scanner = new Scanner(file);
              while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                System.out.println(line);
              }
              scanner.close();
            } catch (FileNotFoundException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
            }
          }
        }
        `}
      </pre>

      <h2>4. Appending to Files</h2>
      <p>Use <code>FileWriter</code> with the second argument set to <code>true</code> to append to a file.</p>
      <pre>
        {`
        import java.io.FileWriter;
        import java.io.IOException;

        public class AppendFileExample {
          public static void main(String[] args) {
            try (FileWriter fw = new FileWriter("example.txt", true)) {
              fw.write("\\nAppending text to the existing file.");
              System.out.println("Successfully appended to the file.");
            } catch (IOException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
            }
          }
        }
        `}
      </pre>

      <h2>5. Deleting Files</h2>
      <p>Use the <code>delete()</code> method of the <code>File</code> class to delete a file.</p>
      <pre>
        {`
        import java.io.File;

        public class DeleteFileExample {
          public static void main(String[] args) {
            File myFile = new File("example.txt");
            if (myFile.delete()) {
              System.out.println("Deleted the file: " + myFile.getName());
            } else {
              System.out.println("Failed to delete the file.");
            }
          }
        }
        `}
      </pre>

      <h2>Additional File Handling Operations</h2>
      <h3>Check if the File Exists</h3>
      <pre>
        {`
        import java.io.File;

        public class FileExistExample {
          public static void main(String[] args) {
            File myFile = new File("example.txt");
            if (myFile.exists()) {
              System.out.println("File exists.");
            } else {
              System.out.println("File does not exist.");
            }
          }
        }
        `}
      </pre>

      <h3>Getting File Information</h3>
      <pre>
        {`
        import java.io.File;

        public class FileInfoExample {
          public static void main(String[] args) {
            File myFile = new File("example.txt");
            if (myFile.exists()) {
              System.out.println("File name: " + myFile.getName());
              System.out.println("Absolute path: " + myFile.getAbsolutePath());
              System.out.println("Writeable: " + myFile.canWrite());
              System.out.println("Readable: " + myFile.canRead());
              System.out.println("File size in bytes: " + myFile.length());
            } else {
              System.out.println("The file does not exist.");
            }
          }
        }
        `}
      </pre>

      <h2>Conclusion</h2>
      <p>Java file handling is a powerful feature that allows applications to interact with the filesystem. Understanding these basic operations is key to managing files in Java programs.</p>
    </div>
  );
};

export default FileHandlingInJava;
