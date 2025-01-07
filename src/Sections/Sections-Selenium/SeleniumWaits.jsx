import React from 'react';
import './SeleniumWaits.css';

const SeleniumWaits = () => {
  return (
    <div className="SeleniumWaits">
      <h1>Selenium Waits</h1>
      <p>
        Waits in Selenium are key components that execute test cases, functioning on commands that load a page. The idea behind Selenium waits is to make the pages less chatty and steadier, offering various wait options relevant to different conditions. This ensures that scripts do not fail during the automation testing process.
      </p>

      <h2>Why Use Waits in Selenium?</h2>
      <p>
        Most modern front-end applications are built on Ajax or JavaScript frameworks, which take time to load elements on a web page. If you try to locate an element that hasn't loaded yet, you'll encounter an <code>ElementNotVisibleException</code>. Waits are crucial for synchronizing test scripts with the behavior of web applications, helping to manage dynamic content and slow loading times. 
      </p>
      <p>
        Selenium provides three types of waits: Implicit Wait, Explicit Wait, and Fluent Wait, each serving different purposes.
      </p>

      <h2>When to Use Wait Commands?</h2>
      <p>
        Wait commands are essential for synchronizing automation scripts with dynamic web elements. Use them in the following scenarios:
      </p>
      <ul>
        <li><strong>Element Interaction:</strong> Implement waits when clicking buttons, entering text, or selecting options to ensure actions occur only after elements are fully loaded.</li>
        <li><strong>Handling Asynchronous Calls:</strong> Manage asynchronous requests like AJAX calls, allowing the script to pause until these requests are complete.</li>
        <li><strong>Post Page Navigation:</strong> Use waits after page navigation commands, enabling elements to load entirely before proceeding.</li>
        <li><strong>Managing Dynamic Content:</strong> Apply waits when dealing with dynamically generated elements or those that appear after specific events.</li>
      </ul>

      <h2>Implicit Waits</h2>
      <p>
        Implicit Wait instructs the WebDriver to wait for a specified duration before throwing a <code>NoSuchElementException</code>. It is set globally and remains active throughout the WebDriver instance's lifecycle.
      </p>
      <h3>How Does it Work?</h3>
      <p>
        When you initialize an Implicit Wait, Selenium waits for the defined duration during attempts to locate an element. If the element isn't found immediately, Selenium pauses the script for the stipulated time.
      </p>

      <h3>Why Use Implicit Wait?</h3>
      <ul>
        <li><strong>Global Application:</strong> Applies universally across the WebDriver instance.</li>
        <li><strong>Preemptive Waiting:</strong> Handles potential delays proactively, minimizing exceptions.</li>
        <li><strong>Streamlined Scripting:</strong> Simplifies scripting by automatically waiting for a specific period.</li>
      </ul>
      <h4>Syntax:</h4>
      <p><code>driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));</code></p>

      <h3>Example of Implicit Wait:</h3>
      <pre>
        <code>
          {`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class ImplicitWaitExample {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("http://example.com");
        WebElement element = driver.findElement(By.id("elementID"));
        element.click();
        driver.quit();
    }
}`}
        </code>
      </pre>

      <h2>Explicit Waits</h2>
      <p>
        Explicit Waits are specific conditions implemented through the <code>WebDriverWait</code> class. This allows you to wait for a specific condition to occur before proceeding with execution.
      </p>

      <h3>How Does it Work?</h3>
      <p>
        The Explicit Wait uses the <code>WebDriverWait</code> class and the <code>ExpectedConditions</code> module to define wait conditions, ensuring the script proceeds only when the specified conditions are met.
      </p>

      <h3>Why Use Explicit Wait?</h3>
      <ul>
        <li><strong>Precision:</strong> Targets specific conditions, providing more control over waits.</li>
        <li><strong>Condition-based Waiting:</strong> Waits for conditions beyond element presence, making it adaptable.</li>
        <li><strong>Timeout Control:</strong> Offers maximum timeout duration, ensuring the script continues if conditions aren't met.</li>
      </ul>

      <h4>Syntax:</h4>
      <p>
        <code>
          WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
          WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("elementID")));
        </code>
      </p>

      <h3>Example of Explicit Wait:</h3>
      <pre>
        <code>
          {`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class ExplicitWaitExample {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.get("http://example.com");
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("elementID")));
        element.click();
        driver.quit();
    }
}`}
        </code>
      </pre>

      <h2>Fluent Wait</h2>
      <p>
        Fluent Wait is similar to Explicit Wait but offers more flexibility, allowing you to specify polling frequency and which exceptions to ignore.
      </p>

      <h3>How Does it Work?</h3>
      <p>
        Fluent Wait operates through the <code>FluentWait</code> class, enabling users to create customized waiting strategies by defining maximum wait times, polling intervals, and ignored exceptions.
      </p>

      <h3>Why Use Fluent Wait?</h3>
      <ul>
        <li><strong>Adaptability:</strong> Adjusts polling frequency for elements with inconsistent load times.</li>
        <li><strong>Exception Handling:</strong> Allows overlooking specific exceptions during the wait.</li>
        <li><strong>Customizable:</strong> Offers control over wait duration and frequency.</li>
      </ul>

      <h4>Syntax:</h4>
      <p>
        <code>
        {`  FluentWait wait = new FluentWait<>(driver)
          .withTimeout(Duration.ofSeconds(30))
          .pollingEvery(Duration.ofSeconds(5))
          .ignoring(NoSuchElementException.class);`}
        </code>
      </p>

      <h3>Example of Fluent Wait:</h3>
      <pre>
        <code>
          {`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import java.time.Duration;

public class FluentWaitExample {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.get("http://example.com");
        FluentWait<WebDriver> wait = new FluentWait<>(driver)
            .withTimeout(Duration.ofSeconds(30))
            .pollingEvery(Duration.ofSeconds(5))
            .ignoring(NoSuchElementException.class);
        WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("elementID")));
        element.click();
        driver.quit();
    }
}`}
        </code>
      </pre>

      <h2>Differences Between Implicit, Explicit, and Fluent Waits</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Scope</th>
            <th>Flexibility</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Implicit Wait</td>
            <td>Applied to all elements in the script.</td>
            <td>Less flexible; waits for a certain time.</td>
            <td>Simple test cases without complications.</td>
          </tr>
          <tr>
            <td>Explicit Wait</td>
            <td>Used for specific elements and conditions.</td>
            <td>More flexible with specific conditions.</td>
            <td>Several steps before an object becomes visible.</td>
          </tr>
          <tr>
            <td>Fluent Wait</td>
            <td>Particular elements with customization.</td>
            <td>Most flexible with polling frequency.</td>
            <td>Better control over visibility conditions.</td>
          </tr>
        </tbody>
      </table>

      <h2>Conclusion</h2>
      <p>
        Selenium waits are essential for creating robust test scripts. They enable synchronization between scripts and dynamic web elements, reducing dependencies. Understanding and effectively utilizing Implicit, Explicit, and Fluent waits can significantly enhance the reliability of Selenium WebDriver test scripts in Java.
      </p>
      </div>
  );
};

export default SeleniumWaits;
