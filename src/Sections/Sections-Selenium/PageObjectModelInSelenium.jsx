import React from 'react';
import './PageObjectModelInSelenium.css';

const PageObjectModelInSelenium = () => {
  return (
    <div className="PageObjectModelInSelenium">
      <h1>Page Object Model (POM) in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Selenium utilizes the Page Object Model (POM) as a pattern that enables the creation of a web elements’ object repository. It fosters test code segregation from UI interaction and provides a way of writing the code in a structured manner. With POM, all elements and actions of a page are bundled into a single class, making the code more understandable, reusable, and modifiable.
        </p>
      </section>

      <section>
        <h2>Types of POMs</h2>
        <ul>
          <li><strong>Basic POM:</strong> A single class is designated for every web page, containing methods and properties for web elements.</li>
          <li><strong>Factory POM:</strong> Combines the Factory Design Pattern with POM, dynamically creating page objects based on conditions.</li>
          <li><strong>Fluent POM:</strong> Uses fluent interfaces to make the API for web elements more readable and easier to use by chaining methods.</li>
        </ul>
      </section>

      <section>
        <h2>Advantages of Page Object Model (POM)</h2>
        <ul>
          <li><strong>Separation of Concerns:</strong> Enhances project organization by separating webpage-specific code from test scripts.</li>
          <li><strong>Reusability:</strong> Promotes reusability by allowing different scenarios to use the same page objects.</li>
          <li><strong>Ease of Maintenance:</strong> Simplifies updates since only page object classes need to be modified if the UI changes.</li>
          <li><strong>Improved Readability:</strong> Reduces clutter in test scripts, making them easier to read and maintain.</li>
          <li><strong>Encapsulation:</strong> Hides the internal logic of application interactions, wrapping all page-related actions in classes.</li>
        </ul>
      </section>

      <section>
        <h2>Disadvantages of Page Object Model (POM)</h2>
        <ul>
          <li><strong>Initial Setup Overhead:</strong> Requires significant effort to set up page classes compared to simpler automation approaches.</li>
          <li><strong>Complexity:</strong> Managing many page classes can become complicated in large applications.</li>
          <li><strong>Maintenance of Page Objects:</strong> Changes in web page design can necessitate updates to multiple page classes.</li>
        </ul>
      </section>

      <section>
        <h2>Syntax and Basic Operations with POM</h2>

        <h3>Create a Page Object Class</h3>
        <pre>
          <code>
{`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LoginPage {
    private WebDriver driver;
    
    // Locators for web elements
    private By usernameField = By.id("username");
    private By passwordField = By.id("password");
    private By loginButton = By.id("loginButton");
    
    // Constructor
    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }
    
    // Methods to interact with the page
    public void enterUsername(String username) {
        driver.findElement(usernameField).sendKeys(username);
    }
    
    public void enterPassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
    }
    
    public void clickLoginButton() {
        driver.findElement(loginButton).click();
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> The LoginPage class contains locators and methods for interacting with the login page elements.</p>

        <h3>Create a Test Class Using the Page Object</h3>
        <pre>
          <code>
{`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class LoginTest {
    private WebDriver driver;
    private LoginPage loginPage;

    @BeforeMethod
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        driver = new ChromeDriver();
        loginPage = new LoginPage(driver);
        driver.get("https://example.com/login");
    }

    @Test
    public void testSuccessfulLogin() {
        loginPage.enterUsername("testuser");
        loginPage.enterPassword("testpassword");
        loginPage.clickLoginButton();

        // Validate successful login
        String actualTitle = driver.getTitle();
        Assert.assertEquals(actualTitle, "Dashboard", "Login failed!");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}`}
          </code>
        </pre>
        <p><strong>Explanation:</strong> The test class uses the LoginPage object to perform login actions and verify the result.</p>
      </section>

      <section>
        <h2>What is Page Factory in Selenium?</h2>
        <p>
          Page Factory is an extension of the Page Object Model (POM) that simplifies the initialization of page objects and the management of web elements using an annotation-based approach. It helps reduce boilerplate code and improves readability by allowing testers to declare web elements using the @FindBy annotation.
        </p>
        <pre>
          <code>
{`@FindBy(id = "elementId") 
WebElement element;`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          The Page Object Model (POM) is a fundamental design pattern in Selenium test automation that significantly enhances the maintainability, scalability, and organization of test scripts. By creating dedicated classes for web pages, POM effectively separates test logic from UI interactions, making tests more robust and easier to maintain.
        </p>
      </section>
    </div>
  );
};

export default PageObjectModelInSelenium;
