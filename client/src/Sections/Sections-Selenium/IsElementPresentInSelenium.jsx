import React from 'react';
import './IsElementPresentInSelenium.css';

const IsElementPresentInSelenium = () => {
  return (
    <div className="IsElementPresentInSelenium">
      <h1>isElementPresent in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          The <strong>isElementPresent</strong> method in Selenium is a custom function often defined in test automation scripts to verify the presence of elements on a webpage. While Selenium WebDriver doesn't include this method by default, developers create it to avoid errors like <code>NoSuchElementException</code>, which occur when trying to interact with missing elements.
        </p>
      </section>

      <section>
        <h2>Main Objectives of isElementPresent</h2>
        <ul>
          <li><strong>Dynamic Content:</strong> Helps handle elements that load asynchronously, avoiding exceptions.</li>
          <li><strong>Conditional Actions:</strong> Allows actions based on the presence or absence of elements (e.g., clicking a button only if it exists).</li>
          <li><strong>Robust Test Scripts:</strong> Ensures scripts can handle various page states gracefully.</li>
        </ul>
      </section>

      <section>
        <h2>Approaches to Implement isElementPresent</h2>
        <p>The isElementPresent method can be implemented in two common ways:</p>
        <ul>
          <li><strong>Using findElements Method:</strong> Uses a list to check for the presence of elements.</li>
          <li><strong>Using WebDriverWait with ExpectedConditions:</strong> Waits for a specific condition to be met, such as element visibility.</li>
        </ul>
      </section>

      <section>
        <h2>1. Using findElements Method</h2>
        <pre>
          <code>
{`public boolean isElementPresent(By locator) {
    List<WebElement> elements = driver.findElements(locator);
    return !elements.isEmpty();
}`}
          </code>
        </pre>
        <h3>Example:</h3>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.List;

public class ElementPresenceCheck {
    public static WebDriver driver;
    public static void main(String[] args) {
        driver = new ChromeDriver();
        driver.get("https://example.com");

        // Define the locator for the element to check
        By locator = By.id("elementId");

        // Check if the element is present
        boolean isPresent = isElementPresent(locator);
        if (isPresent) {
            System.out.println("Element is present.");
        } else {
            System.out.println("Element is not present.");
        }

        driver.quit();
    }

    public static boolean isElementPresent(By locator) {
        List<WebElement> elements = driver.findElements(locator);
        return !elements.isEmpty();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> This example checks for the presence of an element by returning <code>true</code> if the element is found and <code>false</code> if it isn't.</p>
      </section>

      <section>
        <h2>2. Using WebDriverWait with ExpectedConditions</h2>
        <pre>
          <code>
{`public boolean isElementPresent(By locator, WebDriver driver, int timeoutInSeconds) {
    try {
        WebDriverWait wait = new WebDriverWait(driver, timeoutInSeconds);
        wait.until(ExpectedConditions.presenceOfElementLocated(locator));
        return true;
    } catch (Exception e) {
        return false;
    }
}`}
          </code>
        </pre>
        <h3>Example:</h3>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ElementPresenceWithWaitCheck {
    public static WebDriver driver;
    public static void main(String[] args) {
        driver = new ChromeDriver();
        driver.get("https://example.com");

        // Define the locator for the element to check
        By locator = By.id("elementId");

        // Check if the element is present with a wait
        boolean isPresent = isElementPresent(locator, driver, 10);
        if (isPresent) {
            System.out.println("Element is present.");
        } else {
            System.out.println("Element is not present.");
        }

        driver.quit();
    }

    public static boolean isElementPresent(By locator, WebDriver driver, int timeoutInSeconds) {
        try {
            WebDriverWait wait = new WebDriverWait(driver, timeoutInSeconds);
            wait.until(ExpectedConditions.presenceOfElementLocated(locator));
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> This method waits for an element to become present on the page, returning <code>true</code> if it is found within the specified timeout period.</p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          The <strong>isElementPresent</strong> method in Selenium is useful for handling dynamic content, making scripts more robust and reducing errors like <code>NoSuchElementException</code>. By using techniques like <code>findElements</code> or <code>WebDriverWait</code> with <code>ExpectedConditions</code>, testers can ensure that their scripts interact only with elements that are present and ready for action, improving test reliability.
        </p>
      </section>
    </div>
  );
};

export default IsElementPresentInSelenium;
