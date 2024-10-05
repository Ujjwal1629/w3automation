import React from 'react';
import './HandlingIFramesInSelenium.css';

const HandlingIFramesInSelenium = () => {
  return (
    <div className="HandlingIFramesInSelenium">
      <h1>Handling IFrames in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          IFrames (Inline Frames) are HTML documents embedded within another HTML document on the same web page. They are often used to display content like advertisements, videos, or web applications. Selenium WebDriver treats each iframe as a separate document, requiring switching the WebDriver’s focus to the iframe to interact with elements inside it.
        </p>
      </section>

      <section>
        <h2>Importance of Handling IFrames in Selenium</h2>
        <ul>
          <li><strong>Isolation:</strong> IFrames allow embedding content that is not part of the main document.</li>
          <li><strong>Different Context:</strong> When switching to an iframe, Selenium focuses on the iframe content, allowing interaction with the elements inside.</li>
          <li><strong>Switching Back to Main Document:</strong> After interacting with the iframe, it’s crucial to switch back to the main document for further actions.</li>
        </ul>
      </section>

      <section>
        <h2>Ways to Handle IFrames in Selenium</h2>
        <p>There are three main ways to switch to an iframe:</p>
        <ul>
          <li><strong>By Index:</strong> Switch to an iframe using its index (zero-based).</li>
          <li><strong>By Name or ID:</strong> Switch to an iframe using its <code>name</code> or <code>id</code> attributes.</li>
          <li><strong>By WebElement:</strong> Switch to an iframe using a <code>WebElement</code> representing the iframe.</li>
        </ul>
      </section>

      <section>
        <h2>Example 1: Switching to an IFrame by Index</h2>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HandleIFrameByIndex {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/page-with-iframe");

        // Switch to the iframe by index
        driver.switchTo().frame(0);

        // Interact with elements inside the iframe
        WebElement iframeElement = driver.findElement(By.id("insideIframeElement"));
        System.out.println("Text inside iframe: " + iframeElement.getText());

        // Switch back to the main document
        driver.switchTo().defaultContent();

        // Close the browser
        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> The script navigates to a webpage with an iframe, switches to the iframe using its index, interacts with elements inside, and switches back to the main document.</p>
      </section>

      <section>
        <h2>Example 2: Switching to an IFrame by Name or ID</h2>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HandleIFrameByNameOrID {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/page-with-iframe");

        // Switch to the iframe by its name or ID
        driver.switchTo().frame("iframeName");

        // Interact with elements inside the iframe
        WebElement iframeButton = driver.findElement(By.id("iframeButton"));
        iframeButton.click();

        // Switch back to the main document
        driver.switchTo().defaultContent();

        // Close the browser
        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> This example shows switching to an iframe by its name or ID, interacting with a button inside the iframe, and switching back to the main document.</p>
      </section>

      <section>
        <h2>Example 3: Switching to an IFrame by WebElement</h2>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HandleIFrameByWebElement {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/page-with-iframe");

        // Locate the iframe using a WebElement
        WebElement iframeElement = driver.findElement(By.xpath("//iframe[@id='iframeID']"));

        // Switch to the iframe using the WebElement
        driver.switchTo().frame(iframeElement);

        // Interact with elements inside the iframe
        WebElement textInsideIframe = driver.findElement(By.id("textInsideIframe"));
        System.out.println("Text inside iframe: " + textInsideIframe.getText());

        // Switch back to the main document
        driver.switchTo().defaultContent();

        // Close the browser
        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> This example demonstrates switching to an iframe using a WebElement, interacting with text inside the iframe, and switching back to the main document.</p>
      </section>

      <section>
        <h2>Handling Nested IFrames</h2>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HandleNestedIFrames {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/page-with-nested-iframes");

        // Switch to the parent iframe
        driver.switchTo().frame("parentIframe");

        // Switch to the child iframe inside the parent iframe
        driver.switchTo().frame("childIframe");

        // Interact with elements inside the child iframe
        WebElement childFrameElement = driver.findElement(By.id("childFrameElement"));
        System.out.println("Text inside child iframe: " + childFrameElement.getText());

        // Switch back to the parent iframe
        driver.switchTo().parentFrame();

        // Switch back to the main document
        driver.switchTo().defaultContent();

        // Close the browser
        driver.quit();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> This example handles nested iframes, switching from the parent to the child iframe, interacting with elements, and returning to the main document.</p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Handling iframes in Selenium is essential when automating interactions with web pages containing embedded content. By using methods like <code>switchTo().frame()</code> and <code>switchTo().defaultContent()</code>, testers can seamlessly switch between iframes and the main document, ensuring comprehensive test coverage for complex web applications.
        </p>
      </section>
    </div>
  );
};

export default HandlingIFramesInSelenium;
