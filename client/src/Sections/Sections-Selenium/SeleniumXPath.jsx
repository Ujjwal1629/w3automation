import React from 'react';
import './SeleniumXPath.css';

const SeleniumXPath = () => {
  return (
    <div className="SeleniumXPath">
      <h1>Selenium XPath</h1>
      <p>
        XPath is a query language used for querying elements within XML and HTML documents. When other CSS locators (like ID, Class, etc.) that identify elements or unique attributes are not available, XPath becomes the preferred locator. Selenium XPath follows an XML path to navigate through the HTML structure of a web page.
      </p>
      <p>
        When a web page loads in a browser, it creates a Document Object Model (DOM) structure. To locate any dynamic web element among created DOMs, you can use an XPath expression/command.
      </p>

      <h2>Why Use Selenium XPath?</h2>
      <p>
        Automated testing has become a viable alternative to manual testing as the number of browser types and versions continues to rise. Selenium WebDriver provides a free set of open-source APIs for automating web application testing. The WebDriver code library offers a method for finding dynamic web elements using locators such as XPath, ID, class, or CSS selectors.
      </p>

      <h2>Syntax of XPath</h2>
      <p>
        XPath in Selenium provides many essential functions and axes to write effective XPath locators:
      </p>
      <pre>
        <code>
          {`XPath = //tagname[@Attribute = 'Value']`}
        </code>
      </pre>
      <ul>
        <li><code>//</code>: to select the current node.</li>
        <li><code>tagname</code>: tag name of a specific node.</li>
        <li><code>@</code>: to select the attribute.</li>
        <li><code>attribute</code>: the attribute name of the node.</li>
        <li><code>value</code>: the value of the node.</li>
      </ul>

      <h2>Different Types of XPath</h2>
      <h3>Absolute XPath</h3>
      <p>
        Absolute XPath locates an element starting from the root node (HTML) up to the desired element. However, if there is any change in the node or tag along the defined XPath expression, it may fail to find the element.
      </p>
      <h4>Absolute XPath Syntax:</h4>
      <pre>
        <code>
          {`Absolute XPath: /html/body/div[1]/div/div[2]/header/div/div[2]/a/img`}
        </code>
      </pre>
      <h4>Example of Absolute XPath:</h4>
      <pre>
        <code>
          {`WebElement element = driver.findElement(By.xpath("/html/body/div[2]/div/div[1]/h1"));`}
        </code>
      </pre>

      <h3>Relative XPath</h3>
      <p>
        Relative XPath does not need to start from the root node and is more robust against changes in the DOM structure.
      </p>
      <h4>Relative XPath Syntax:</h4>
      <pre>
        <code>
          {`Relative XPath: //*[contains(@id, 'block-perfecto-main-menu')]/ul/li[6]/a`}
        </code>
      </pre>
      <h4>Example of Relative XPath:</h4>
      <pre>
        <code>
          {`WebElement element = driver.findElement(By.xpath("//div[@class='example']/h1"));`}
        </code>
      </pre>

      <h2>Differences Between Absolute and Relative XPaths</h2>
      <ul>
        <li>Absolute XPath starts from the root and is specific, while Relative XPath begins from a specific point in the DOM.</li>
        <li>Absolute XPath is brittle; changes in the DOM can break it, whereas Relative XPath is more flexible and adaptable.</li>
        <li>Relative XPath is generally shorter and easier to maintain than Absolute XPath.</li>
      </ul>

      <h2>Chained XPath in Selenium</h2>
      <p>
        Chained XPath allows you to use multiple XPath expressions together to locate an element that cannot be uniquely identified with a single XPath.
      </p>
      <h4>Example of Chained XPath:</h4>
      <pre>
        <code>
          {`WebDriver driver = new ChromeDriver();
driver.get("http://www.yourwebsite.com");
WebElement parentDiv = driver.findElement(By.xpath("//*[@id='parent']"));
WebElement submitButton = parentDiv.findElement(By.xpath(".//button[text()='Submit']"));
submitButton.click();`}
        </code>
      </pre>

      <h2>XPath Axes</h2>
      <p>
        XPath axes allow flexible navigation of elements in XML or HTML documents. They define relationships between the current node and other nodes in the document.
      </p>

      <h3>Common XPath Axes:</h3>
      <ul>
        <li><code>ancestor</code>: Selects all ancestors of the current node.</li>
        <li><code>child</code>: Selects all children of the current node.</li>
        <li><code>descendant</code>: Selects all descendants of the current node.</li>
        <li><code>following</code>: Selects everything after the current node.</li>
        <li><code>preceding</code>: Selects all nodes that appear before the current node.</li>
        <li><code>parent</code>: Selects the parent of the current node.</li>
        <li><code>self</code>: Selects the current node.</li>
      </ul>

      <h3>Examples of XPath Axes:</h3>
      <h4>Using Ancestor Axis:</h4>
      <pre>
        <code>
          {`WebElement ancestorElement = driver.findElement(By.xpath("//input[@id='username']/ancestor::div"));`}
        </code>
      </pre>
      <h4>Using Child Axis:</h4>
      <pre>
        <code>
          {`WebElement childElement = driver.findElement(By.xpath("//div[@class='example']/child::h1"));`}
        </code>
      </pre>
      <h4>Using Descendant Axis:</h4>
      <pre>
        <code>
          {`WebElement descendantElement = driver.findElement(By.xpath("//div[@class='example']/descendant::p"));`}
        </code>
      </pre>

      <h2>Types of XPath Locators</h2>
      <p>XPath locators are essential for identifying elements on a webpage. Common types include:</p>
      <ul>
        <li>By ID: <code>driver.findElement(By.xpath("//*[@id='username']"));</code></li>
        <li>By Class Name: <code>driver.findElement(By.xpath("//*[@class='login-button']"));</code></li>
        <li>By Name: <code>driver.findElement(By.xpath("//*[@name='password']"));</code></li>
        <li>By Tag Name: <code>driver.findElement(By.xpath("//p"));</code></li>
        <li>By Text: <code>driver.findElement(By.xpath("//*[text()='Submit']"));</code></li>
        <li>Using Contains: <code>driver.findElement(By.xpath("//*[contains(@href,'google.com')]"));</code></li>
        <li>Using Starts-with: <code>driver.findElement(By.xpath("//*[starts-with(@id,'user')]"));</code></li>
        <li>Using Ends-with: <code>driver.findElement(By.xpath("//*[ends-with(@id,'name')]"));</code></li>
      </ul>

      <h2>Dynamic XPath in Selenium</h2>
      <p>
        Dynamic XPath refers to XPath expressions for dynamic WebElements whose attributes frequently change. These XPath locators are adaptable, eliminating the need for constant updates.
      </p>

      <h3>Examples of Dynamic XPath:</h3>
      <h4>Using Contains:</h4>
      <pre>
        <code>
          {`WebElement element = driver.findElement(By.xpath("//input[contains(@id, 'user')]"));`}
        </code>
      </pre>
      <h4>Using Logical Operators:</h4>
      <pre>
        <code>
          {`WebElement elementOr = driver.findElement(By.xpath("//input[@id='username' or @name='username']"));`}
        </code>
      </pre>

      <h2>Best Practices for Using XPath</h2>
      <ul>
        <li>Use Relative XPath for flexibility and maintainability.</li>
        <li>Opt for meaningful attributes like ID and name.</li>
        <li>Avoid Absolute XPath to prevent brittleness.</li>
        <li>Keep XPath expressions simple and readable.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        By mastering XPath, you can create robust and maintainable Selenium test scripts that accurately interact with web elements. XPath provides the flexibility and power essential for effective web automation testing.
      </p>
    </div>
  );
};

export default SeleniumXPath;
