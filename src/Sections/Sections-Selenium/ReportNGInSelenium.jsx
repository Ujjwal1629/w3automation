import React from 'react';
import './ReportNGInSelenium.css';

const ReportNGInSelenium = () => {
  return (
    <div className="ReportNGInSelenium">
      <h1>ReportNG in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          ReportNG is a plugin that simplifies reporting in TestNG, a widely used testing framework in Java. It enhances standard TestNG reports by producing sophisticated and well-structured visual reports in HTML format, making it particularly useful for Selenium projects.
        </p>
      </section>

      <section>
        <h2>ReportNG Overview</h2>
        <p>
          ReportNG is an extendable TestNG reporting plugin that offers an index structure similar to default index reports on HTML and XML. The goal is to produce reports that are easy to read and visually appealing.
        </p>
        <h3>Report Formats</h3>
        <ul>
          <li><strong>HTML Reports:</strong> A high-level overview of test results, including pass/fail counts, error messages, and stack traces.</li>
          <li><strong>XML Reports:</strong> A logical summary designed for use with CI tools or other programs.</li>
        </ul>
      </section>

      <section>
        <h2>Advantages of ReportNG</h2>
        <ul>
          <li><strong>Improved Comprehensibility:</strong> Generates more readable reports with bolded and organized details.</li>
          <li><strong>Easy to Incorporate:</strong> Simple to deploy in existing TestNG projects with minimal configuration.</li>
          <li><strong>Customizable:</strong> HTML reports can be altered to better present information.</li>
          <li><strong>Integration with CI/CD Tools:</strong> XML reports enable integration with CI/CD tools like Jenkins and Bamboo.</li>
        </ul>
      </section>

      <section>
        <h2>Drawbacks of ReportNG</h2>
        <ul>
          <li><strong>Basic Features:</strong> Offers limited reporting capabilities compared to tools like Extent Reports or Allure Reports.</li>
          <li><strong>Discontinued:</strong> ReportNG is now obsolete and may not be compatible with newer versions of TestNG or Java.</li>
          <li><strong>Needs Extra Configuration:</strong> Requires dependency and listener configuration in the TestNG XML file.</li>
          <li><strong>Lack of Native Embedded Screenshots:</strong> Cannot integrate screenshots into reports like some modern tools.</li>
        </ul>
      </section>

      <section>
        <h2>Step by Step Guide to Use ReportNG with Selenium and TestNG</h2>
        <ol>
          <li>
            <strong>Include ReportNG Dependencies:</strong> Add the relevant dependencies to your Maven `pom.xml` or download the JAR files.
            <pre>
              <code>
{`<dependencies>
    <dependency>
        <groupId>org.uncommons</groupId>
        <artifactId>reportng</artifactId>
        <version>1.1.4</version>
    </dependency>
    <dependency>
        <groupId>com.google.inject</groupId>
        <artifactId>guice</artifactId>
        <version>4.2.2</version>
    </dependency>
    <dependency>
        <groupId>org.apache.velocity</groupId>
        <artifactId>velocity</artifactId>
        <version>1.7</version>
    </dependency>
</dependencies>`}
              </code>
            </pre>
          </li>
          <li>
            <strong>Modify TestNG to Use ReportNG:</strong> Update your `testng.xml` file to include ReportNG listeners.
            <pre>
              <code>
{`<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="Selenium Test Suite">
    <listeners>
        <listener class-name="org.uncommons.reportng.HTMLReporter" />
        <listener class-name="org.uncommons.reportng.JUnitXMLReporter" />
    </listeners>
    <test name="Sample Tests">
        <classes>
            <class name="com.example.tests.SampleTest" />
        </classes>
    </test>
</suite>`}
              </code>
            </pre>
          </li>
          <li>
            <strong>Practice Selenium Testing with TestNG:</strong> Implement a sample Selenium test using ReportNG.
            <pre>
              <code>
{`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class SampleTest {
    private WebDriver driver;

    @BeforeMethod
    public void setUp() {
        driver = new ChromeDriver();
    }

    @Test
    public void googleSearchTest() {
        driver.get("https://www.google.com");
        String title = driver.getTitle();
        Assert.assertEquals(title, "Google", "Title should be 'Google'");
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
          </li>
        </ol>
      </section>

      <section>
        <h2>Output</h2>
        <p>
          Upon executing the `testng.xml` file, ReportNG generates HTML and XML reports inside the `test-output` folder of the project.
        </p>
        <p><strong>Report Location:</strong> <code>test-output/html/index.html</code></p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          ReportNG enhances TestNG reports, providing clear and comprehensible summaries in HTML format. Although it may not have the extensive features of more advanced reporting tools, its ease of integration and readability make it suitable for small to medium-sized projects.
        </p>
      </section>
    </div>
  );
};

export default ReportNGInSelenium;
