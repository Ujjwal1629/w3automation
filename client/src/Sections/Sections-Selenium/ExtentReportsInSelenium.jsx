import React from 'react';
import './ExtentReportsInSelenium.css';

const ExtentReportsInSelenium = () => {
  return (
    <div className="ExtentReportsInSelenium">
      <h1>Extent Reports in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Extent Reports is an open-source library for generating detailed, customizable test reports in automation testing. Widely used with Selenium, it provides enhanced features compared to standard reports, making it a preferred tool for many organizations. Extent Reports can be integrated with various frameworks like TestNG, JUnit, and more, offering features such as screenshots, logs, and theme customization.
        </p>
      </section>

      <section>
        <h2>Advantages of Extent Reports</h2>
        <ul>
          <li><strong>Open Source:</strong> Extent Reports is free to use.</li>
          <li><strong>Pictorial Representation:</strong> It provides a visual representation of test results.</li>
          <li><strong>Customization:</strong> Reports can be tailored to specific requirements.</li>
          <li><strong>Media Attachments:</strong> Allows screenshots and logs to be added for detailed summaries.</li>
          <li><strong>Framework Integration:</strong> Easily integrates with frameworks like JUnit, TestNG, and more.</li>
          <li><strong>CI Tool Support:</strong> Can be configured with CI tools like Jenkins and Bamboo.</li>
        </ul>
      </section>

      <section>
        <h2>Types of Reports</h2>
        <ul>
          <li><strong>Basic HTML Reports:</strong> Provide comprehensive test results, including test logs and execution details.</li>
          <li><strong>Interactive Reports:</strong> Customized reports with themes like Dark and Standard, offering filters and tabs for results such as passed, failed, or skipped.</li>
          <li><strong>Real-Time Reports:</strong> Display live updates during test execution, allowing you to monitor the progress in real-time.</li>
        </ul>
      </section>

      <section>
        <h2>Advantages of Extent Reports</h2>
        <ul>
          <li><strong>Accurate Reporting:</strong> Detailed insights on test steps, screenshots, and logs for each stage.</li>
          <li><strong>Customization and Themes:</strong> Various styles and themes to customize reports to your needs.</li>
          <li><strong>Framework Support:</strong> Supports multiple frameworks like TestNG, JUnit, and Cucumber.</li>
          <li><strong>Media Support:</strong> Includes support for screenshots and videos in reports.</li>
          <li><strong>Real-Time Data:</strong> Offers live updates on test execution.</li>
        </ul>
      </section>

      <section>
        <h2>Disadvantages of Extent Reports</h2>
        <ul>
          <li><strong>Learning Curve:</strong> Some features may be challenging for beginners to grasp.</li>
          <li><strong>Performance Overhead:</strong> Generating extensive reports with logs and media attachments may slow down performance.</li>
          <li><strong>Third-Party Dependency:</strong> Requires external libraries for full functionality.</li>
          <li><strong>Configuration Time:</strong> Initial setup and configuration can be time-consuming compared to simpler tools.</li>
        </ul>
      </section>

      <section>
        <h2>Using Extent Reports in Selenium</h2>
        <p>
          The two main classes used in Extent Reports are <strong>ExtentReports</strong> and <strong>ExtentTest</strong>.
        </p>
        <pre>
          <code>
{`ExtentReports reports = new ExtentReports("Path to store HTML report", true/false);
ExtentTest test = reports.startTest("TestName");

test.log(LogStatus.PASS, "Test Passed");
test.log(LogStatus.FAIL, "Test Failed");
reports.endTest();
reports.flush();`}
          </code>
        </pre>
        <p>
          The <strong>log</strong> method logs test steps, and test status can be set as PASS, FAIL, SKIP, or INFO. The <strong>flush</strong> method generates the final report.
        </p>
      </section>

      <section>
        <h2>Example of Extent Reports with Selenium and Java</h2>
        <pre>
          <code>
{`import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;

public class ExtentReportsExample {
    private WebDriver driver;
    private ExtentReports extentReports;
    private ExtentTest test;

    @BeforeClass
    public void setUpReport() {
        ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter("extentReports.html");
        extentReports = new ExtentReports();
        extentReports.attachReporter(htmlReporter);
    }

    @BeforeMethod
    public void setUp() {
        driver = new ChromeDriver();
    }

    @Test
    public void validateGoogleHomePage() {
        test = extentReports.createTest("validateGoogleHomePage", "Test to validate Google Home Page");
        driver.get("https://www.google.com");
        test.log(Status.INFO, "Navigated to Google");

        String title = driver.getTitle();
        test.log(Status.INFO, "Title fetched: " + title);

        Assert.assertEquals(title, "Google");
        test.log(Status.PASS, "Title is correct");
    }

    @AfterMethod
    public void tearDown() {
        driver.quit();
    }

    @AfterClass
    public void tearDownReport() {
        extentReports.flush();
    }
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Extent Reports is a highly flexible and powerful tool for generating detailed and interactive reports in Selenium automation projects. While it offers several advanced features, it may take some time to set up and configure. Nonetheless, the comprehensive and customizable reports it generates make it a valuable tool in any automation testing framework.
        </p>
      </section>
    </div>
  );
};

export default ExtentReportsInSelenium;
