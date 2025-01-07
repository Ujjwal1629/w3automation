import React from 'react';
import './RelativeLocatorsInSelenium.css';

const RelativeLocatorsInSelenium = () => {
  return (
    <div className="RelativeLocatorsInSelenium">
      <h1>Relative Locators in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Relative Locators (or Friendly Locators) in Selenium allow you to find elements on a web page based on the position of other elements relative to them. Introduced in Selenium 4, this feature enhances the versatility of element location, making it easier for developers to understand and interact with the page structure visually.
        </p>
      </section>

      <section>
        <h2>Why Use Relative Locators?</h2>
        <ul>
          <li><strong>Improves Readability:</strong> Provides clear positioning of elements with phrases like ‘above’ and ‘below’, enhancing code comprehension.</li>
          <li><strong>Flexibility:</strong> Detects elements based on visual layout, accommodating changes in IDs or classes.</li>
          <li><strong>Better Handling of Dynamic Content:</strong> Useful for elements generated dynamically whose relative positions remain constant.</li>
        </ul>
      </section>

      <section>
        <h2>Syntax of Relative Locators in Selenium with Java</h2>
        <p>
          Relative locators are performed using the <code>RelativeLocator</code> class with the following properties:
        </p>
        <ul>
          <li><strong>above:</strong> Locate an element positioned above another.</li>
          <li><strong>below:</strong> Locate an element positioned below another.</li>
          <li><strong>toLeftOf:</strong> Locate an element on the left of another.</li>
          <li><strong>toRightOf:</strong> Locate an element on the right of another.</li>
          <li><strong>near:</strong> Locate an element in proximity to another element (default is 50 pixels).</li>
        </ul>
        <p>Basic Syntax:</p>
        <pre>
          <code>
{`WebElement element = driver.findElement(
    RelativeLocator.with(By.tagName("tagName")).above(anotherElement)
);`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Example of Relative Locators</h2>
        <h3>HTML Structure</h3>
        <pre>
          <code>
{`<html>
<body>
    <div>
        <input id="username" type="text" name="username">
    </div>
    <div>
        <label id="passwordLabel">Password:</label>
        <input id="password" type="password" name="password">
    </div>
    <div>
        <button id="submit" type="submit">Submit</button>
    </div>
</body>
</html>`}
          </code>
        </pre>

        <h3>Example: Locating the Password Field</h3>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.locators.RelativeLocator;

public class RelativeLocatorExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com"); // Replace with your actual URL

        // Locate the 'Password' label element
        WebElement passwordLabel = driver.findElement(By.id("passwordLabel"));

        // Locate the 'Password' input field using a relative locator
        WebElement passwordField = driver.findElement(
            RelativeLocator.with(By.tagName("input")).below(passwordLabel)
        );

        // Interact with the 'Password' input field
        passwordField.sendKeys("mySecurePassword");

        // Locate the 'Submit' button using a relative locator
        WebElement submitButton = driver.findElement(
            RelativeLocator.with(By.tagName("button")).below(passwordField)
        );
        submitButton.click();

        // Close the browser
        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> The example demonstrates how to locate the password field and the submit button using relative locators based on their position relative to other elements.</p>
      </section>

      <section>
        <h2>Example: Elements to the Left and Right</h2>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.locators.RelativeLocator;

public class RelativeLocatorLeftRightExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com"); // Replace with your actual URL

        // Locate the 'Password' input field using its ID
        WebElement passwordField = driver.findElement(By.id("password"));

        // Locate the 'Password' label to the left of the 'Password' input field
        WebElement passwordLabel = driver.findElement(
            RelativeLocator.with(By.tagName("label")).toLeftOf(passwordField)
        );
        System.out.println("Password Label Text: " + passwordLabel.getText());

        // Locate the 'Submit' button to the right of the 'Password' input field
        WebElement submitButton = driver.findElement(
            RelativeLocator.with(By.tagName("button")).toRightOf(passwordField)
        );
        System.out.println("Submit Button Text: " + submitButton.getText());

        // Close the browser
        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> This example shows how to locate elements based on their positions relative to one another (to the left or right).</p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Relative Locators enhance element location in Selenium by considering the proximity of elements. This feature is particularly beneficial for dynamic content and improves code readability. By employing relative locators, developers can create more understandable and flexible Selenium scripts.
        </p>
      </section>
    </div>
  );
};

export default RelativeLocatorsInSelenium;
