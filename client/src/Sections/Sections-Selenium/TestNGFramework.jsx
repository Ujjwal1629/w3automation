import React from 'react';
import './TestNGFramework.css';

const TestNGFramework = () => {
  return (
    <div className="TestNGFramework">
      <h1>TestNG Framework in Selenium</h1>
      <p>
        TestNG is not merely an American invention; it was created by the same people behind JUnit and NUnit, but it is better. “NG” stands for ‘Next Generation’, signifying that this framework surpasses previous frameworks. Writing tests now extends beyond unit tests to include integration tests as part of Selenium automation testing in Java, which is why TestNG was created.
      </p>

      <h2>What is TestNG?</h2>
      <p>
        TestNG offers organized features like annotations, data-driven testing, test case organization, and parallel execution, which assist in managing and conducting your Selenium tests optimally.
      </p>

      <h2>Advantages of Using TestNG in Selenium</h2>
      <ul>
        <li>Test cases can be organized into groups for easier handling of test suites.</li>
        <li>Concurrent testing reduces the time required to run the entire test suite.</li>
        <li>Provides a variety of test annotations, such as <code>@BeforeSuite</code>, <code>@AfterSuite</code>, <code>@BeforeTest</code>, <code>@AfterTest</code>, <code>@BeforeMethod</code>, <code>@AfterMethod</code>, etc.</li>
        <li>Allows independent execution of test cases with multiple test data parameters.</li>
        <li>Good reporting and logging capabilities assist in troubleshooting test issues.</li>
      </ul>

      <h2>Key Features of TestNG</h2>
      <ol>
        <li><strong>Annotations:</strong> Simplifies test configuration with annotations like <code>@Test</code>, <code>@BeforeMethod</code>, <code>@AfterMethod</code>, <code>@BeforeClass</code>, <code>@AfterClass</code>.</li>
        <li><strong>Test Configuration:</strong> Allows definitions of tests using XML files.</li>
        <li><strong>Test Suite:</strong> Executes multiple tests within the same execution framework.</li>
        <li><strong>Data-Driven Testing:</strong> Executes parameterized tests using data providers.</li>
        <li><strong>Reporting:</strong> Generates standard reports in HTML or XML format without tester involvement.</li>
        <li><strong>Assertions:</strong> Provides various assertion types for testing purposes.</li>
        <li><strong>Integration:</strong> Easily integrates with build tools like Maven and Jenkins.</li>
      </ol>

      <h2>Benefits of TestNG Compared to JUnit</h2>
      <ul>
        <li>TestNG allows configuration and execution in various ways, including parallel execution.</li>
        <li>Advanced features for report creation, grouping of tests, and non-sequential test execution with dependencies are available.</li>
        <li>DataProvider annotation in TestNG facilitates data-driven tests, unlike JUnit.</li>
        <li>TestNG provides detailed HTML reports summarizing test execution, while JUnit typically generates less informative text reports.</li>
        <li>Offers advanced annotations like <code>@BeforeSuite</code>, <code>@AfterSuite</code>, <code>@BeforeGroups</code>, and <code>@AfterGroups</code>.</li>
      </ul>

      <h2>Need for TestNG with Selenium</h2>
      <p>
        Due to interdependencies, Selenium lacks a standard testing practice for results. The TestNG framework enables users to:
      </p>
      <ul>
        <li>Adhere to a necessary report structure.</li>
        <li>State the total number of test cases executed, successes, failures, and untested cases.</li>
        <li>Organize test cases by converting them into a testing XML file.</li>
        <li>Utilize invocation count to perform multiple tests without writing loops.</li>
        <li>Facilitate cross-browser testing.</li>
        <li>Use easy-to-understand annotations.</li>
      </ul>

      <h2>TestNG Annotations</h2>
      <p>
        An annotation tag contains information about methods, classes, or suites and determines the execution strategy of test cases. Here’s a list of important annotations in TestNG:
      </p>

      <h3>@Test</h3>
      <p>
        The <code>@Test</code> annotation encapsulates the test case logic and triggers the automation run.
      </p>
      <pre>
        <code>
          {`@Test
public void setupTestNG() {
    System.out.println("This is a test annotation method");
}`}
        </code>
      </pre>

      <h3>Attributes of @Test:</h3>
      <ul>
        <li><code>description</code>: States what the test case does.</li>
        <li><code>priority</code>: Arranges the sequence of test methods.</li>
        <li><code>dependsOnMethods</code>: Indicates dependencies between test methods.</li>
        <li><code>enabled</code>: Determines whether to execute the test case.</li>
        <li><code>groups</code>: Combines test cases into units.</li>
      </ul>

      <h3>@BeforeMethod and @AfterMethod</h3>
      <p>
        These annotations are used to execute code before and after each test method.
      </p>
      <pre>
        <code>
          {`@BeforeMethod
public void doLogin() {
    // Code to do login
}`}

{`{@AfterMethod
public void doLogout() {
    // Code to do logout
}`}`
        </code>
      </pre>

      <h3>@BeforeClass and @AfterClass</h3>
      <p>
        These annotations execute once before and after the first test method in a class.
      </p>
      <pre>
        <code>
          {`@BeforeClass
public void navigateUrl() {
    // Code to navigate to URL
}`}

{`{@AfterClass
public void tearDown() {
    // Code to close the browser
}`}`
        </code>
      </pre>

      <h3>@BeforeTest and @AfterTest</h3>
      <p>
        These annotations run before and after test methods in a class.
      </p>

      <h3>@BeforeSuite and @AfterSuite</h3>
      <p>
        These annotations run before and after any test method in a class.
      </p>

      <h3>@BeforeGroups and @AfterGroups</h3>
      <p>
        These annotations run before and after a specific group of test cases.
      </p>
      <pre>
        <code>
          {`@BeforeGroups("groupName")
public void startGroupExecution() {
    // Code to execute before a particular group of test cases
}`}
        </code>
      </pre>

      <h2>Execution Order of Annotations</h2>
      <p>
        The execution order of TestNG annotations is:
      </p>
      <ul>
        <li><code>@BeforeSuite</code> → <code>@BeforeTest</code> → <code>@BeforeClass</code> → <code>@BeforeMethod</code> → <code>@Test</code> → <code>@AfterMethod</code> → <code>@AfterClass</code> → <code>@AfterTest</code> → <code>@AfterSuite</code></li>
      </ul>

      <h2>Setting Up TestNG in a Selenium Project</h2>
      <ol>
        <li>
          <strong>Add TestNG Dependency:</strong>
          <pre>
            <code>
              {`<dependency>
  <groupId>org.testng</groupId>
  <artifactId>testng</artifactId>
  <version>7.8.0</version>
  <scope>test</scope>
</dependency>`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Create a Simple TestNG Test Class:</strong>
          <pre>
            <code>
              {`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class TestNGExample {
    WebDriver driver;

    @BeforeClass
    public void setUp() {
        // Initialize WebDriver and open the browser
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://example.com");
    }

    @Test
    public void testTitle() {
        // Get the title of the page
        String title = driver.getTitle();
        System.out.println("Page Title: " + title);
        Assert.assertEquals(title, "Example Domain");
    }

    @Test
    public void testElementPresence() {
        // Find an element by its ID
        WebElement element = driver.findElement(By.id("exampleElementId"));
        Assert.assertTrue(element.isDisplayed(), "Element is not displayed.");
    }

    @AfterClass
    public void tearDown() {
        // Close the browser
        if (driver != null) {
            driver.quit();
        }
    }
}`}
            </code>
          </pre>
        </li>
      </ol>

      <h2>Running the TestNG Test</h2>
      <p>
        To run the TestNG test, right-click on the test class and select “Run As” -{'>'} “TestNG Test” in your IDE. Alternatively, you can run it on the command line or using a Maven build tool.
      </p>

      <h2>TestNG XML File Structure</h2>
      <p>Here’s a sample template for using TestNG XML configuration file:</p>
      <pre>
        <code>
          {`<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="Example Suite">
    <test name="Example Test">
        <classes>
            <class name="TestNGExample"/>
        </classes>
    </test>
</suite>`}
        </code>
      </pre>

      <h2>Advanced Features of TestNG</h2>
      <h3>Data-Driven Testing with DataProviders</h3>
      <pre>
        <code>
          {`import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class DataProviderExample {
    @DataProvider(name = "loginData")
    public Object[][] dataProviderMethod() {
        return new Object[][] {{"user1", "pass1"}, {"user2", "pass2"}, {"user3", "pass3"}};
    }

    @Test(dataProvider = "loginData")
    public void testLogin(String username, String password) {
        System.out.println("Username: " + username + ", Password: " + password);
        // Implement login functionality and assertions here
    }
}`}
        </code>
      </pre>

      <h3>Parallel Test Execution</h3>
      <pre>
        <code>
          {`<suite name="Parallel Suite" parallel="methods" thread-count="3">
    <test name="Parallel Test">
        <classes>
            <class name="ParallelTestExample"/>
        </classes>
    </test>
</suite>`}
        </code>
      </pre>

      <h2>Conclusion</h2>
      <p>
        The TestNG framework simplifies Selenium automation tests through organized test cases, reduced execution time via parallel execution, and structured XML configurations. Its extensive features, such as annotations and reporting, make it an ideal choice for test automation in Selenium.
      </p>
    </div>
  );
};

export default TestNGFramework;
