import React from 'react';
import './JavaScriptExecutorInSelenium.css';

const JavaScriptExecutorInSelenium = () => {
  return (
    <div className="JavaScriptExecutorInSelenium">
      <h1>JavaScriptExecutor in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          JavaScriptExecutor is an interface in Selenium WebDriver that allows execution of JavaScript code within the browser context. It is particularly useful for performing tasks that are not supported directly by Selenium WebDriver, such as interacting with hidden elements, scrolling, and directly manipulating the DOM.
        </p>
      </section>

      <section>
        <h2>Why Use JavaScriptExecutor in Selenium?</h2>
        <ul>
          <li><strong>Bypass Limitations:</strong> JavaScriptExecutor helps bypass limitations in WebDriver, such as interacting with hidden or inaccessible elements.</li>
          <li><strong>Direct DOM Manipulation:</strong> It allows direct interaction with the Document Object Model (DOM), providing more control over page elements.</li>
          <li><strong>Faster Execution:</strong> JavaScriptExecutor communicates directly with the browser’s JavaScript engine, often leading to faster performance.</li>
          <li><strong>Advanced Scenarios:</strong> Useful in scenarios that require advanced user interactions or script executions not possible with standard WebDriver commands.</li>
        </ul>
      </section>

      <section>
        <h2>JavaScriptExecutor Interface Methods</h2>
        <ul>
          <li><strong>executeScript(String script, Object... args):</strong> Executes JavaScript code in the context of the current frame or window.</li>
          <li><strong>executeAsyncScript(String script, Object... args):</strong> Executes JavaScript asynchronously and blocks the WebDriver until the callback is returned.</li>
        </ul>
      </section>

      <section>
        <h2>Basic Syntax of JavaScriptExecutor in Selenium</h2>
        <pre>
          <code>
{`JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("your JavaScript code here");`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Example 1: Scrolling a Web Page</h2>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class JavaScriptExecutorScrollExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/long-page");

        // Cast WebDriver to JavascriptExecutor
        JavascriptExecutor js = (JavascriptExecutor) driver;

        // Find the element to scroll to
        WebElement element = driver.findElement(By.id("targetElement"));

        // Scroll to the element using JavaScriptExecutor
        js.executeScript("arguments[0].scrollIntoView(true);", element);

        System.out.println("Scrolled to element: " + element.getText());

        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> This script scrolls down to an element using JavaScriptExecutor and confirms the scrolling by printing the text of the element.</p>
      </section>

      <section>
        <h2>Example 2: Clicking on a Hidden Element</h2>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class JavaScriptExecutorClickExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/hidden-button");

        JavascriptExecutor js = (JavascriptExecutor) driver;

        // Click on a hidden button using JavaScriptExecutor
        js.executeScript("document.getElementById('hiddenButton').click();");

        System.out.println("Hidden button clicked successfully.");
        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> This example shows how to click a hidden button using JavaScriptExecutor, bypassing limitations of standard WebDriver methods.</p>
      </section>

      <section>
        <h2>Example 3: Retrieving Page Title Using JavaScriptExecutor</h2>
        <pre>
          <code>
{`import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class JavaScriptExecutorRetrieveExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");

        JavascriptExecutor js = (JavascriptExecutor) driver;

        // Retrieve the page title using JavaScriptExecutor
        String pageTitle = (String) js.executeScript("return document.title;");
        System.out.println("Page title is: " + pageTitle);

        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> This script retrieves the page title using JavaScriptExecutor and prints it to the console.</p>
      </section>

      <section>
        <h2>Example 4: Changing Background Color of an Element</h2>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class JavaScriptExecutorModifyExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");

        JavascriptExecutor js = (JavascriptExecutor) driver;

        // Locate the element to change background color
        WebElement element = driver.findElement(By.id("elementID"));

        // Change the background color of the element using JavaScriptExecutor
        js.executeScript("arguments[0].style.backgroundColor = 'yellow';", element);

        System.out.println("Background color changed successfully.");
        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> This script changes the background color of an element using JavaScriptExecutor.</p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          JavaScriptExecutor is an essential feature in Selenium WebDriver, offering advanced control over web page elements that may otherwise be inaccessible. It allows direct manipulation of the DOM, facilitates scrolling, clicks hidden elements, retrieves data, and executes custom JavaScript. By mastering JavaScriptExecutor, testers can create more robust, flexible, and efficient automation scripts.
        </p>
      </section>
    </div>
  );
};

export default JavaScriptExecutorInSelenium;
