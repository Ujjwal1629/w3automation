import React from 'react';
import './ScreenshotsInSelenium.css';

const ScreenshotsInSelenium = () => {
  return (
    <div className="ScreenshotsInSelenium">
      <h1>Screenshots in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Taking screenshots is one of the most appreciated features of Selenium. It allows testers to capture a static image of the page actively being tested at any moment during automation testing. This feature is beneficial for debugging performance issues by providing visual evidence of the state of the web application at various times during its execution.
        </p>
      </section>

      <section>
        <h2>Which Screenshot Features Are Provided by Selenium?</h2>
        <ul>
          <li><strong>Debugging and Troubleshooting:</strong> Screenshots help trace the causes of failure when a test case fails.</li>
          <li><strong>Visual Validation:</strong> Checks whether relevant objects are properly displayed on the interface.</li>
          <li><strong>Reporting:</strong> Enhances test reports by showing how screens appeared compared to expectations.</li>
          <li><strong>Documentation:</strong> Captures images of the automation design process and how it was structured and planned.</li>
        </ul>
      </section>

      <section>
        <h2>How to Take Screenshots in Selenium</h2>
        <p>
          In Selenium WebDriver, screenshots can be taken using the <code>TakesScreenshot</code> interface. This interface has a method named <code>getScreenshotAs()</code> that captures and writes the screenshot to a specified location.
        </p>
        <pre>
          <code>
{`File file = ((TakesScreenshot) driver);`}
          </code>
        </pre>
        <p>Some scenarios where screenshots are handy include:</p>
        <ul>
          <li>When the application crashes or behaves unexpectedly.</li>
          <li>When a test fails an assertion.</li>
          <li>When the test has trouble finding elements on a webpage.</li>
          <li>When the test times out waiting for elements to load.</li>
        </ul>
      </section>

      <section>
        <h2>Basic Syntax for Taking Screenshots in Selenium</h2>
        <pre>
          <code>
{`// Cast the WebDriver instance to TakesScreenshot
TakesScreenshot screenshot = (TakesScreenshot) driver;
// Call getScreenshotAs method to create an image file
File srcFile = screenshot.getScreenshotAs(OutputType.FILE);
// Move the image file to a new destination
File destFile = new File("/path/to/screenshot.png");
// Copy the file to the desired location
FileUtils.copyFile(srcFile, destFile);`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Example of Taking a Screenshot in Selenium WebDriver</h2>
        <pre>
          <code>
{`// Java program to take a screenshot in Selenium WebDriver
import java.io.*;

class GFG {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "driver path");
        driver = new ChromeDriver();
        driver.get("https://www.google.co.in");
        WebElement Element = driver.findElement(By.xpath("//input[@name='q']"));
        MakeBorder(Element);
        Thread.sleep(2000);
        TakeScreenshot("GooglePage");
        driver.quit();
    }

    public static void TakeScreenshot(String FileName) throws IOException {
        File File = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(File, new File("image location" + FileName + ".jpeg"));
    }

    public static void MakeBorder(WebElement Element) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].style.border = '3px solid red'", Element);
    }
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Capturing a Screenshot of a Web Page</h2>
        <pre>
          <code>
{`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.OutputType;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;

public class ScreenshotExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");

        TakesScreenshot screenshot = (TakesScreenshot) driver;
        File srcFile = screenshot.getScreenshotAs(OutputType.FILE);
        File destFile = new File("screenshot.png");

        try {
            FileUtils.copyFile(srcFile, destFile);
            System.out.println("Screenshot taken and saved at: " + destFile.getAbsolutePath());
        } catch (IOException e) {
            System.out.println("Failed to save screenshot: " + e.getMessage());
        }

        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> The example demonstrates how to set up the WebDriver, capture a screenshot, and save it to a specified location.</p>
      </section>

      <section>
        <h2>Advanced Example: Taking a Screenshot of a Specific Element</h2>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;

public class ElementScreenshotExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");
        
        WebElement element = driver.findElement(By.id("elementId"));
        File srcFile = element.getScreenshotAs(OutputType.FILE);
        File destFile = new File("elementScreenshot.png");

        try {
            FileUtils.copyFile(srcFile, destFile);
            System.out.println("Element screenshot taken and saved at: " + destFile.getAbsolutePath());
        } catch (IOException e) {
            System.out.println("Failed to save element screenshot: " + e.getMessage());
        }

        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> This example shows how to capture a screenshot of a specific element instead of the entire page.</p>
      </section>

      <section>
        <h2>Using getScreenshotAs with Different Output Types</h2>
        <p>
          Selenium’s <code>getScreenshotAs()</code> method can also save screenshots in various formats, such as PNG, JPEG, or GIF based on the <code>OutputType</code> interface:
        </p>
        <ul>
          <li><strong>OutputType.FILE:</strong> Saves the screenshot as a File.</li>
          <li><strong>OutputType.BYTES:</strong> Retrieves the screenshot as an array of bytes.</li>
          <li><strong>OutputType.BASE64:</strong> Returns the image encoded in Base64 format.</li>
        </ul>
        <pre>
          <code>
{`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class ScreenshotBase64Example {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");
        
        TakesScreenshot screenshot = (TakesScreenshot) driver;
        String base64Screenshot = screenshot.getScreenshotAs(OutputType.BASE64);
        System.out.println("Base64 Screenshot String: " + base64Screenshot);
        
        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> This example demonstrates how to capture a screenshot as a Base64 string, useful for reporting purposes or sending images over the network without writing to disk.</p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Taking screenshots in Selenium WebDriver is a powerful feature that enhances test automation by allowing testers to visually validate tests, improve workflows for fixing issues, and enhance reporting. Selenium provides capabilities to capture screenshots of entire pages, specific elements, or save them in various formats. This functionality is crucial for creating comprehensive automation scripts that effectively report on the state and behavior of the web UI.
        </p>
      </section>
    </div>
  );
};

export default ScreenshotsInSelenium;
