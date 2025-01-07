import React from 'react';
import './SeleniumGrid.css';

const SeleniumGrid = () => {
  return (
    <div className="SeleniumGrid">
      <h1>Selenium Grid</h1>

      <section>
        <p>
          Selenium Grid is frequently used alongside Selenium to run tests on multiple machines and browsers. It proves useful for distributed testing, enabling testing across various platforms simultaneously, which enhances speed and efficiency. Selenium Grid facilitates the execution of Selenium tests on remote machines, utilizing a proxy server managed by a Selenium server. This setup allows the maintenance of different browser configurations centrally, enabling parallel testing against various browser versions, thus facilitating cross-browser testing. The architecture follows a client-server model, where the server is referred to as the Hub, and it interacts with multiple clients (Nodes).
        </p>
      </section>

      <section>
        <h2>Types of Selenium Grid</h2>
        <h3>1. Standalone Mode</h3>
        <p>
          <strong>Description:</strong> Both Hub and Node services are merged into a single process.<br />
          <strong>Usage:</strong> Ideal for basic test configurations or local testing, used when tests are not required to run on multiple machines simultaneously.
        </p>

        <h3>2. Hub and Node Architecture</h3>
        <p>
          <strong>Description:</strong> The Hub acts as the central control unit for test execution, while Nodes are the machines being tested.<br />
          <strong>Usage:</strong> Effective for extensive testing environments requiring tests on different browsers and machines.
        </p>
      </section>

      <section>
        <h2>Need for Selenium Grid</h2>
        <ul>
          <li><strong>Open Source:</strong> Selenium Grid is open-source, allowing teams to use it free of charge.</li>
          <li><strong>Convenient for Cross Browser Testing:</strong> Facilitates testing across multiple browsers, accommodating diverse user preferences.</li>
          <li><strong>Supports Different Versions of Browsers:</strong> Easily set up multiple browser versions for thorough testing.</li>
          <li><strong>Facilitates Parallel Testing:</strong> Enables the execution of tests in parallel, reducing wait times for results and updates.</li>
        </ul>
      </section>

      <section>
        <h2>Elements of Selenium Grid</h2>
        <p>Some important features of Selenium Grid 4 include:</p>
        <ul>
          <li><strong>Architectural Support:</strong> Supports six processes for various deployments, including Router, Distributor, Session Map, New Session Queue, Node, and Event Bus.</li>
          <li><strong>Different Grid Roles:</strong> Can be set up in three configurations: Standalone, Classic Grid (Hub and Node), and Fully Distributed.</li>
          <li><strong>Docker Support:</strong> Full support for Docker, allowing easy containerization of tests.</li>
          <li><strong>Scalability:</strong> Manages resources across multiple sites, enhancing observability.</li>
          <li><strong>GraphQL Query Support:</strong> Enables API queries for session, node, and grid details.</li>
          <li><strong>Support for Customizing a Node:</strong> Nodes can be customized for specific test execution needs.</li>
          <li><strong>Support for External Data Store:</strong> Caches information from running sessions in external data stores.</li>
        </ul>
      </section>

      <section>
        <h2>Components of Grid</h2>
        <ul>
          <li><strong>Router:</strong> Entry point for incoming requests, forwarding them to the appropriate components.</li>
          <li><strong>Event Bus:</strong> Facilitates internal communication between components.</li>
          <li><strong>Distributor:</strong> Manages Node registration, capabilities, and session requests.</li>
          <li><strong>Session Queue:</strong> Holds incoming session requests in a FIFO manner.</li>
          <li><strong>Session Map:</strong> Maps session IDs to Nodes for fast routing.</li>
          <li><strong>Node:</strong> Executes test cases in a distributed system.</li>
        </ul>
      </section>

      <section>
        <h2>Advantages of Grid</h2>
        <ul>
          <li><strong>Simultaneous or Parallel Execution:</strong> Allows for various test cases to run on different machines simultaneously.</li>
          <li><strong>Cross Platform Testing:</strong> Ensures coverage of multiple browsers and operating systems.</li>
          <li><strong>Use of Test Resources:</strong> Optimizes resource utilization by engaging multiple machines.</li>
          <li><strong>Scalability:</strong> Easily extended by adding new nodes.</li>
        </ul>
      </section>

      <section>
        <h2>Disadvantages of Grid</h2>
        <ul>
          <li><strong>Installation Complexity:</strong> Setting up a Grid can be complex and may require significant resources.</li>
          <li><strong>Dependence on Network:</strong> Execution can be hampered by communication issues between Hub and Nodes.</li>
          <li><strong>Hardware Costs:</strong> Supporting multiple machines and installations can be costly.</li>
        </ul>
      </section>

      <section>
        <h2>Syntax and Basic Operations with Selenium Grid</h2>
        <h3>1. Setting Up Selenium Grid</h3>
        <p>To start the Hub and Nodes, use the following commands:</p>
        <pre>
          <code>
{`// Start the Hub
java -jar selenium-server-standalone-x.xx.x.jar -role hub

// Start Nodes
java -jar selenium-server-standalone-x.xx.x.jar -role node -hub http://localhost:4444/grid/register`}
          </code>
        </pre>
        
        <h3>2. Example of Parallel Test Execution Using Selenium Grid</h3>
        <p>TestNG Configuration:</p>
        <pre>
          <code>
{`<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="GridSuite" parallel="tests" thread-count="2">
    <test name="ChromeTests">
        <classes>
            <class name="com.example.tests.LoginTest" />
        </classes>
    </test>
    <test name="FirefoxTests">
        <classes>
            <class name="com.example.tests.LoginTest" />
        </classes>
    </test>
</suite>`}
          </code>
        </pre>

        <h4>Test Class Example:</h4>
        <pre>
          <code>
{`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;
import java.net.MalformedURLException;
import java.net.URL;

public class LoginTest {
    private WebDriver driver;

    @BeforeMethod
    @Parameters({"browser"})
    public void setUp(String browser) throws MalformedURLException {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        if (browser.equalsIgnoreCase("chrome")) {
            capabilities.setCapability("browserName", "chrome");
        } else if (browser.equalsIgnoreCase("firefox")) {
            capabilities.setCapability("browserName", "firefox");
        }
        driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities);
    }

    @Test
    public void testLogin() {
        driver.get("https://example.com/login");
        // Perform login actions
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
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Selenium Grid is an extension for Selenium applications that enables the deployment and running of applications on different machines with various browsers simultaneously. This greatly speeds up the testing process and increases the overall efficiency of the testing system, allowing for tests across different environments. 
        </p>
      </section>
    </div>
  );
};

export default SeleniumGrid;
