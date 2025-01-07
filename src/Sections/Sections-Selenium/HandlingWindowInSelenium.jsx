import React from 'react';
import './HandlingWindowInSelenium.css';

const HandlingWindowInSelenium = () => {
  return (
    <div className="HandlingWindowInSelenium">
      <h1>Handling Windows in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Window handling in Selenium allows users to manage multiple browser windows or tabs within a web application. This functionality is essential when automating scenarios that require interacting with pop-ups, multiple tabs, or windows that require switching between them to perform actions.
        </p>
      </section>

      <section>
        <h2>Why Window Handling is Important</h2>
        <ul>
          <li><strong>Multi-Window Scenarios:</strong> Many web applications open new windows or tabs (e.g., for login, payments, etc.), where Selenium must switch focus to interact with these elements.</li>
          <li><strong>Automation Tasks:</strong> Automated scripts often deal with multiple active windows or tabs and need to switch between them to complete tasks.</li>
        </ul>
      </section>

      <section>
        <h2>Selenium WebDriver Methods for Window Handles</h2>
        <ul>
          <li><strong>getWindowHandle():</strong> Returns the unique window handle of the currently active window.</li>
          <li><strong>getWindowHandles():</strong> Returns all the window handles opened by the WebDriver.</li>
          <li><strong>switchTo().window():</strong> Switches the focus of WebDriver to a specified window using its window handle.</li>
        </ul>
      </section>

      <section>
        <h2>Basic Steps for Window Handling in Selenium</h2>
        <ol>
          <li>Open the main window and perform actions.</li>
          <li>Trigger the new window/tab.</li>
          <li>Retrieve the window handles using <code>getWindowHandles()</code>.</li>
          <li>Switch to the desired window using <code>switchTo().window()</code>.</li>
          <li>Perform actions in the new window/tab.</li>
          <li>Close the window and switch back to the main window.</li>
        </ol>
      </section>

      <section>
        <h2>Example: Handling Multiple Windows in Selenium</h2>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.Set;

public class WindowHandlingExample {
    public static void main(String[] args) {
        // Set up WebDriver
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/main-page");

        // Store the current window handle (main window)
        String mainWindowHandle = driver.getWindowHandle();

        // Click a link that opens a new window
        driver.findElement(By.id("openNewWindowButton")).click();

        // Get all window handles
        Set<String> allWindowHandles = driver.getWindowHandles();

        // Switch to the new window
        for (String handle : allWindowHandles) {
            if (!handle.equals(mainWindowHandle)) {
                driver.switchTo().window(handle);
                break;
            }
        }

        // Perform actions in the new window
        WebElement newWindowElement = driver.findElement(By.id("newWindowElement"));
        System.out.println("Text in new window: " + newWindowElement.getText());

        // Close the new window
        driver.close();

        // Switch back to the main window
        driver.switchTo().window(mainWindowHandle);

        // Perform actions in the main window
        WebElement mainElement = driver.findElement(By.id("mainElement"));
        System.out.println("Text in main window: " + mainElement.getText());

        // Close the browser
        driver.quit();
    }
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Handling Multiple Windows in Complicated Scenarios</h2>
        <p>Here’s an example of handling nested windows where multiple windows are opened in sequence:</p>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.ArrayList;
import java.util.Set;

public class MultipleWindowHandlingExample {
    public static void main(String[] args) {
        // Set up WebDriver
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/page-with-multiple-windows");

        // Store the current window handle
        String mainWindowHandle = driver.getWindowHandle();

        // Click a link to open the first new window
        driver.findElement(By.id("openFirstWindowButton")).click();

        // Get all window handles
        Set<String> windowHandles = driver.getWindowHandles();
        ArrayList<String> handlesList = new ArrayList<>(windowHandles);

        // Switch to the first new window
        driver.switchTo().window(handlesList.get(1));

        // Perform actions in the first new window
        WebElement firstWindowElement = driver.findElement(By.id("firstWindowElement"));
        System.out.println("Text in first new window: " + firstWindowElement.getText());

        // Open another window from the first window
        driver.findElement(By.id("openSecondWindowButton")).click();

        // Refresh window handles list
        windowHandles = driver.getWindowHandles();
        handlesList = new ArrayList<>(windowHandles);

        // Switch to the second new window
        driver.switchTo().window(handlesList.get(2));

        // Perform actions in the second new window
        WebElement secondWindowElement = driver.findElement(By.id("secondWindowElement"));
        System.out.println("Text in second new window: " + secondWindowElement.getText());

        // Close the second new window and switch back to the first
        driver.close();
        driver.switchTo().window(handlesList.get(1));

        // Close the first new window and switch back to the main window
        driver.close();
        driver.switchTo().window(mainWindowHandle);

        // Perform actions in the main window and close the browser
        WebElement mainElement = driver.findElement(By.id("mainElement"));
        System.out.println("Text in main window: " + mainElement.getText());
        driver.quit();
    }
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Window handling is a vital feature in Selenium WebDriver when automating scenarios involving multiple browser windows or tabs. With methods like <code>getWindowHandle()</code>, <code>getWindowHandles()</code>, and <code>switchTo().window()</code>, you can effectively switch between windows, perform operations, and navigate complex workflows with ease.
        </p>
      </section>
    </div>
  );
};

export default HandlingWindowInSelenium;
