import React from 'react';
import './HandlingWebElements.css';

const HandlingWebElements = () => {
  return (
    <div className="HandlingWebElements">
      <h1>Handling Web Elements in Selenium</h1>

      <section>
        <h2>What are Web Elements?</h2>
        <p>
          Web elements are components on a web page, such as text boxes, checkboxes, buttons, dropdowns, radio buttons, web forms, and more. These elements can be identified by attributes like <code>id</code>, <code>className</code>, <code>name</code>, or <code>xpath</code>. With Selenium, tasks like clicking buttons or filling text boxes can be automated by interacting with these elements.
        </p>
        <pre>
          <code>
{`WebElement element = driver.findElement(By.id("TextBox"));
element.sendKeys("stqatools");

driver.findElement(By.id("TextBox")).sendKeys("stqatools");`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Common WebDriver Commands for Web Elements</h2>
        <ul>
          <li><strong>sendKeys:</strong> Automatically types content into editable fields.</li>
          <li><strong>isDisplayed:</strong> Checks if an element is visible on the screen.</li>
          <li><strong>isEnabled:</strong> Verifies if an element is enabled or disabled.</li>
          <li><strong>isSelected:</strong> Determines if an element is selected, used for checkboxes or radio buttons.</li>
          <li><strong>getText:</strong> Retrieves the text from a web element.</li>
          <li><strong>click:</strong> Simulates clicking on buttons, hyperlinks, or checkboxes.</li>
          <li><strong>findElement:</strong> Identifies a single web element.</li>
          <li><strong>findElements:</strong> Identifies a list of web elements matching the criteria.</li>
        </ul>
      </section>

      <section>
        <h2>Locating Web Elements</h2>
        <p>You can locate web elements using various locator strategies in Selenium:</p>
        <pre>
          <code>
{`// By ID
WebElement elementById = driver.findElement(By.id("element_id"));

// By Name
WebElement elementByName = driver.findElement(By.name("element_name"));

// By XPath
WebElement elementByXPath = driver.findElement(By.xpath("//tag[@attribute='value']"));

// By CSS Selector
WebElement elementByCssSelector = driver.findElement(By.cssSelector("css.selector"));`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Performing Actions on Web Elements</h2>
        <p>
          Various actions can be performed on web elements in Selenium, such as typing into text boxes, clicking buttons, or checking if elements are visible or enabled. By using appropriate locators like <code>id</code> or <code>xpath</code>, you can interact with web elements and automate browser activities.
        </p>
      </section>

      <section>
        <h2>Waiting for Web Elements</h2>
        <p>
          In some cases, it may be necessary to wait for elements to become visible or interactable. Selenium provides explicit waits for these scenarios:
        </p>
        <pre>
          <code>
{`WebDriverWait wait = new WebDriverWait(driver, 10);
WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("element_id")));`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Example: Handling Web Elements in Selenium</h2>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.List;

public class SeleniumExample {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.google.com");

        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.sendKeys("Selenium WebDriver");
        searchBox.submit();

        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.id("search")));

        List<WebElement> results = driver.findElements(By.cssSelector("h3"));
        for (WebElement result : results) {
            System.out.println(result.getText());
        }

        driver.quit();
    }
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Selenium enables automation of browser actions by interacting with web elements like text boxes, buttons, and links. With proper locators, WebDriver commands, and wait mechanisms, you can effectively handle various elements on a web page to perform automated testing tasks.
        </p>
      </section>
    </div>
  );
};

export default HandlingWebElements;
