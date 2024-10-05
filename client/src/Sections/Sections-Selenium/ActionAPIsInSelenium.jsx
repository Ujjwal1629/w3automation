import React from 'react';
import './ActionAPIsInSelenium.css';

const ActionAPIsInSelenium = () => {
  return (
    <div className="ActionAPIsInSelenium">
      <h1>APIs to Implement Action in Java Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Action APIs have been provided by Selenium to emulate complicated user interactions on the browser, such as keyboard input, mouse movements, hovering over elements, and drag-and-drop actions. These are part of Selenium’s Actions class, which is used to build and run a sequence of actions. The class is particularly useful for automating tasks that cannot be achieved using simple WebDriver commands like <code>click()</code> and <code>sendKeys()</code>.
        </p>
      </section>

      <section>
        <h2>Important Methods Used in ‘Actions’ Class</h2>
        <p>Below are some frequently used methods in the Actions class:</p>

        <h3>1. ClickAndHold(), Release()</h3>
        <p>
          The <code>clickAndHold()</code> method allows you to press down on an element, and <code>release()</code> lets go of the mouse button. This is essential for dragging elements.
        </p>
        <pre>
          <code>
{`Actions actions = new Actions(driver);
actions.clickAndHold(element).perform();`}
          </code>
        </pre>

        <h4>Example:</h4>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ClickAndHoldExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/drag-and-drop");
        WebElement sourceElement = driver.findElement(By.id("source"));
        Actions actions = new Actions(driver);
        actions.clickAndHold(sourceElement).perform();
        actions.release().perform();
        driver.quit();
    }
}`}
          </code>
        </pre>
        
        <h3>2. DoubleClick()</h3>
        <p>
          The <code>doubleClick()</code> method enables a double-click operation on any object or target component.
        </p>
        <pre>
          <code>
{`actions.doubleClick(element).perform();`}
          </code>
        </pre>
        
        <h4>Example:</h4>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class DoubleClickExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/double-click");
        WebElement elementToDoubleClick = driver.findElement(By.id("button"));
        Actions actions = new Actions(driver);
        actions.doubleClick(elementToDoubleClick).perform();
        driver.quit();
    }
}`}
          </code>
        </pre>

        <h3>3. contextClick()</h3>
        <p>
          The <code>contextClick()</code> method performs a right-click action on an element.
        </p>
        <pre>
          <code>
{`actions.contextClick(element).perform();`}
          </code>
        </pre>
        
        <h4>Example:</h4>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ContextClickExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/context-menu");
        WebElement elementToRightClick = driver.findElement(By.id("menuItem"));
        Actions actions = new Actions(driver);
        actions.contextClick(elementToRightClick).perform();
        driver.quit();
    }
}`}
          </code>
        </pre>

        <h3>4. moveToElement()</h3>
        <p>
          The <code>moveToElement()</code> method moves the mouse to the center of a specified element, commonly used for hover actions.
        </p>
        <pre>
          <code>
{`actions.moveToElement(element).perform();`}
          </code>
        </pre>
        
        <h4>Example:</h4>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class MoveToElementExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/hover-menu");
        WebElement menuElement = driver.findElement(By.id("menu"));
        Actions actions = new Actions(driver);
        actions.moveToElement(menuElement).perform();
        driver.quit();
    }
}`}
          </code>
        </pre>

        <h3>5. dragAndDrop()</h3>
        <p>
          The <code>dragAndDrop()</code> method performs a drag-and-drop operation from a source element to a target element.
        </p>
        <pre>
          <code>
{`actions.dragAndDrop(sourceElement, targetElement).perform();`}
          </code>
        </pre>
        
        <h4>Example:</h4>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class DragAndDropExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/drag-drop");
        WebElement sourceElement = driver.findElement(By.id("draggable"));
        WebElement targetElement = driver.findElement(By.id("droppable"));
        Actions actions = new Actions(driver);
        actions.dragAndDrop(sourceElement, targetElement).perform();
        driver.quit();
    }
}`}
          </code>
        </pre>

        <h3>6. sendKeys()</h3>
        <p>
          The <code>sendKeys()</code> method is used to simulate keyboard input.
        </p>
        <pre>
          <code>
{`actions.sendKeys(Keys.ENTER).perform();`}
          </code>
        </pre>
        
        <h4>Example:</h4>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class SendKeysExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/text-input");
        WebElement inputField = driver.findElement(By.id("inputBox"));
        Actions actions = new Actions(driver);
        actions.sendKeys(inputField, "Hello, Selenium!").perform();
        driver.quit();
    }
}`}
          </code>
        </pre>

        <h3>7. keyDown() and keyUp()</h3>
        <p>
          The <code>keyDown()</code> and <code>keyUp()</code> methods simulate pressing and releasing modifier keys (like Control, Shift, etc.).
        </p>
        <pre>
          <code>
{`actions.moveToElement(element1).click().moveToElement(element2).click().build().perform();`}
          </code>
        </pre>
        
        <h4>Example:</h4>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.Keys;

public class KeyDownKeyUpExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/text-input");
        WebElement inputField = driver.findElement(By.id("inputBox"));
        Actions actions = new Actions(driver);
        actions.sendKeys(inputField, "Sample text")
            .keyDown(Keys.CONTROL)
            .sendKeys("a")
            .keyUp(Keys.CONTROL)
            .perform();
        driver.quit();
    }
}`}
          </code>
        </pre>

        <h3>8. Composite Actions</h3>
        <p>
          Composite actions involve combining multiple actions into a single sequence, such as dragging and dropping an element or hovering over an element and clicking a sub-menu.
        </p>
        <pre>
          <code>
{`actions.moveToElement(element1).click().moveToElement(element2).click().build().perform();`}
          </code>
        </pre>

        <h4>Full Example: Combining Actions</h4>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class CombinedActionsExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");
        Actions actions = new Actions(driver);
        WebElement element1 = driver.findElement(By.id("element1"));
        WebElement element2 = driver.findElement(By.id("element2"));
        actions.moveToElement(element1)
            .click()
            .clickAndHold()
            .moveToElement(element2)
            .release()
            .build()
            .perform();
        driver.quit();
    }
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          In automating mouse and keyboard events of web applications with Selenium, the Actions class plays an essential role. It involves various methods like click, mouse hover, double-click, context click, and drag-and-drop, allowing for simulations performed by web elements. The Actions class enables interaction with webpages as if real-time users were testing or verifying complex interactions. This means software behavior can be monitored under real user conditions for verification and optimization of user experience.
        </p>
      </section>
    </div>
  );
};

export default ActionAPIsInSelenium;
