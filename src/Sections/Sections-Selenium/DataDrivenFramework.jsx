import React from 'react';
import './DataDrivenFramework.css';

const DataDrivenFramework = () => {
  return (
    <div className="DataDrivenFramework">
      <h1>Data-Driven Framework in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          A Data-Driven Framework in Selenium allows running the same test cases multiple times with different sets of data. Instead of hardcoding test data into test scripts, data is stored externally in files like Excel, CSV, or databases. This increases test coverage and flexibility.
        </p>
      </section>

      <section>
        <h2>Description of Data-Driven Framework</h2>
        <p>
          Data-Driven Framework helps in reading test data from external sources like Excel, CSV, databases, XML, or JSON files. This approach enhances test reusability and allows easy management of test data without modifying the core test logic.
        </p>
      </section>

      <section>
        <h2>Sources of Data</h2>
        <ul>
          <li><strong>Excel Files:</strong> Structured and easy to manage datasets.</li>
          <li><strong>CSV Files:</strong> Simple format but lacks organization features.</li>
          <li><strong>Databases:</strong> Suitable for large applications requiring data accuracy.</li>
          <li><strong>XML Files:</strong> Hierarchical data structure for complex data.</li>
          <li><strong>JSON Files:</strong> Ideal for web applications and APIs due to minimal structure.</li>
        </ul>
      </section>

      <section>
        <h2>Advantages</h2>
        <ul>
          <li><strong>Reusability:</strong> Test scripts are reusable with different inputs.</li>
          <li><strong>Separation of Data:</strong> Test data and scripts are kept apart.</li>
          <li><strong>Scalability:</strong> Easily scale by adding more data sources.</li>
          <li><strong>Improved Coverage:</strong> Run more scenarios and edge cases with various datasets.</li>
          <li><strong>Maintainability:</strong> Changes in test data do not require changes in test scripts.</li>
        </ul>
      </section>

      <section>
        <h2>Disadvantages</h2>
        <ul>
          <li><strong>Initial Setup:</strong> Requires setting up logic to read from multiple external data sources.</li>
          <li><strong>Performance Overhead:</strong> Opening large external files can slow down performance.</li>
          <li><strong>Change in Data Structure:</strong> Changing data format requires updating the data reading logic.</li>
          <li><strong>Debugging:</strong> Test failures can be harder to debug due to separation of data and test logic.</li>
        </ul>
      </section>

      <section>
        <h2>Implementation Example</h2>
        <p>Here is a sample implementation of a Data-Driven Framework using Selenium with Java:</p>
        <pre>
          <code>
{`import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class DataDrivenTest {
    private WebDriver driver;

    @DataProvider(name = "loginData")
    public Object[][] loginDataProvider() {
        // Logic to fetch data from Excel file
    }

    @Test(dataProvider = "loginData")
    public void testLogin(String username, String password) {
        driver = new ChromeDriver();
        driver.get("https://example.com/login");
        // Perform login and assert results
        driver.quit();
    }
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          The Data-Driven Framework in Selenium enhances flexibility, reusability, and scalability in test automation by separating test data from test scripts. Using external data sources like Excel, CSV, or databases allows testers to execute the same test with multiple datasets, increasing test coverage and effectiveness.
        </p>
      </section>
    </div>
  );
};

export default DataDrivenFramework;
