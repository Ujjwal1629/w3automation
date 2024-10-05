import React from 'react';
import './Log4jInSelenium.css';

const Log4jInSelenium = () => {
  return (
    <div className="Log4jInSelenium">
      <h1>Log4j in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Log4j is a centralized logging framework used in Java applications. When combined with Selenium, Log4j allows for proper logging of actions and events during automation testing, making it easier to debug complex scenarios or failed tests.
        </p>
      </section>

      <section>
        <h2>Components of Log4j</h2>
        <ul>
          <li><strong>Logger:</strong> Stores and captures all logging information during test execution.</li>
          <li><strong>Appenders:</strong> Retrieves logging information from the logger and writes it to a specified file or console.</li>
          <li><strong>Layout:</strong> Formats the log messages in a specific pattern, such as text, HTML, or XML.</li>
        </ul>
      </section>

      <section>
        <h2>Log Levels</h2>
        <p>Log4j provides various log levels to categorize log messages:</p>
        <ul>
          <li><strong>ALL:</strong> Includes all log messages.</li>
          <li><strong>DEBUG:</strong> Logs detailed debugging information.</li>
          <li><strong>INFO:</strong> Logs general information about the application's progress.</li>
          <li><strong>WARN:</strong> Logs warning messages about potential issues.</li>
          <li><strong>ERROR:</strong> Logs error events that might not stop execution.</li>
          <li><strong>FATAL:</strong> Logs critical errors that may crash the application.</li>
        </ul>
      </section>

      <section>
        <h2>Why Use Log4j with Selenium?</h2>
        <ul>
          <li><strong>Debugging:</strong> Assists in troubleshooting test failures and errors.</li>
          <li><strong>Test Reports:</strong> Logs can be used to generate detailed test reports.</li>
          <li><strong>Track Execution Flow:</strong> Monitors the execution process of test cases.</li>
          <li><strong>Logging Levels:</strong> Provides customizable logging levels such as INFO, DEBUG, and ERROR.</li>
        </ul>
      </section>

      <section>
        <h2>Log4j Setup with Selenium</h2>
        <ol>
          <li><strong>Add Log4j Dependency:</strong> Add Log4j dependencies to the `pom.xml` if using Maven.</li>
          <pre>
            <code>
{`<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-core</artifactId>
  <version>2.20.0</version>
</dependency>
<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-api</artifactId>
  <version>2.20.0</version>
</dependency>`}
            </code>
          </pre>

          <li><strong>Create Log4j Configuration File:</strong> Create a `log4j2.properties` file for configuring the logger, appenders, and layout.</li>
          <pre>
            <code>
{`# Root logger configuration
rootLogger.level = info
rootLogger.appenderRefs = stdout, file
rootLogger.appenderRef.stdout.ref = ConsoleAppender
rootLogger.appenderRef.file.ref = FileAppender

# Console appender configuration
appender.console.type = Console
appender.console.name = ConsoleAppender
appender.console.layout.type = PatternLayout
appender.console.layout.pattern = %d{yyyy-MM-dd HH:mm:ss} [%t] %-5level %logger{36} - %msg%n

# File appender configuration
appender.file.type = File
appender.file.name = FileAppender
appender.file.fileName = logs/selenium-log4j.log
appender.file.layout.type = PatternLayout
appender.file.layout.pattern = %d{yyyy-MM-dd HH:mm:ss} [%t] %-5level %logger{36} - %msg%n`}
            </code>
          </pre>

          <li><strong>Implement Log4j in Test Scripts:</strong> Use Log4j in Selenium test scripts to log actions and errors.</li>
        </ol>
      </section>

      <section>
        <h2>Example: Log4j in Selenium Test Script</h2>
        <pre>
          <code>
{`import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Log4jExample {
    private static final Logger logger = LogManager.getLogger(Log4jExample.class);

    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        logger.info("Browser launched");

        driver.get("https://example.com");
        logger.info("Navigated to example.com");

        try {
            WebElement element = driver.findElement(By.id("elementId"));
            logger.info("Element found");
            element.click();
            logger.info("Clicked on element");
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage(), e);
        } finally {
            driver.quit();
            logger.info("Browser closed");
        }
    }
}`}
          </code>
        </pre>

        <p><strong>Explanation:</strong> The example logs browser actions like launching, navigating, interacting with elements, and closing the browser. In case of errors, it logs an error message with the exception stack trace.</p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Log4j enhances Selenium test scripts by capturing detailed logs about test execution. It simplifies debugging, tracks test progress, and provides detailed error information, making automation testing more efficient and effective.
        </p>
      </section>
    </div>
  );
};

export default Log4jInSelenium;
