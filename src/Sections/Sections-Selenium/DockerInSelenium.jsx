import React from 'react';
import './DockerInSelenium.css';

const DockerInSelenium = () => {
  return (
    <div className="DockerInSelenium">
      <h1>Docker in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Docker is a tool that simplifies the deployment of applications by packaging them in lightweight, portable containers. In Selenium testing, Docker containers allow tests to run in isolated environments with specific configurations, enabling better quality assurance. The containers contain the Selenium server and the browser being tested, offering a consistent environment for executing Selenium tests.
        </p>
      </section>

      <section>
        <h2>Why Use Docker?</h2>
        <ul>
          <li><strong>Transient Containers:</strong> Containers are temporary and live within a predefined environment, which can be destroyed after the tests are done, ensuring a clean slate for every test run.</li>
          <li><strong>Cross-Browser Testing:</strong> Docker containers enable cross-browser testing, making it easy to run tests on multiple browser-OS combinations.</li>
          <li><strong>Parallel Testing:</strong> Docker containers allow for parallel testing, reducing execution time and increasing testing efficiency.</li>
        </ul>
      </section>

      <section>
        <h2>Types of Docker Set-Up</h2>
        <ul>
          <li><strong>Single-Node Setup:</strong> Runs a Selenium Hub and a browser in a single container, suitable for local testing environments.</li>
          <li><strong>Distributed Grid Setup:</strong> Uses multiple Docker containers with a Selenium Grid Hub and browser nodes, allowing for large-scale testing across different browsers and operating systems.</li>
        </ul>
      </section>

      <section>
        <h2>Advantages of Docker</h2>
        <ul>
          <li><strong>Seclusion:</strong> Docker creates isolated containers that prevent changes from affecting other environments.</li>
          <li><strong>Uniformity:</strong> Docker ensures a consistent environment for every test run.</li>
          <li><strong>Flexibility:</strong> Easily add or remove nodes for the Selenium Grid based on the target load.</li>
          <li><strong>Accessibility:</strong> Docker containers can run on any platform that supports Docker.</li>
          <li><strong>Efficient Setup:</strong> Test environments can be quickly set up and torn down, reducing time and resources.</li>
        </ul>
      </section>

      <section>
        <h2>Disadvantages of Docker</h2>
        <ul>
          <li><strong>Complexity:</strong> Team members may require training to work with Docker containers.</li>
          <li><strong>Resource Overhead:</strong> Running multiple containers in parallel may lead to resource congestion.</li>
          <li><strong>Networking Issues:</strong> Docker containers communicating across networks may experience delays or failures.</li>
          <li><strong>Limited GUI:</strong> Debugging tests that require a graphical interface can be challenging in Docker containers.</li>
        </ul>
      </section>

      <section>
        <h2>Syntax and Basic Operations</h2>
        <h3>1. Installing Docker</h3>
        <p>Ensure that Docker is installed on your machine by following the instructions on the Docker website.</p>

        <h3>2. Commands to Set Up Selenium Grid</h3>
        <pre>
          <code>
            docker pull selenium/hub
            docker pull selenium/node-chrome
            docker pull selenium/node-firefox
            docker run -d -p 4444:4444 --name selenium-hub selenium/hub
            docker run -d --name chrome -e HUB_HOST=selenium-hub --link selenium-hub:hub selenium/node-chrome
            docker run -d --name firefox -e HUB_HOST=selenium-hub --link selenium-hub:hub selenium/node-firefox
          </code>
        </pre>
      </section>

      <section>
        <h2>Example: Running Selenium Tests in Docker</h2>
        <pre>
          <code>
{`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.*;

public class DockerSeleniumTest {
    private WebDriver driver;

    @BeforeMethod
    @Parameters({"browser"})
    public void setUp(String browser) throws MalformedURLException {
        DesiredCapabilities capabilities;
        if (browser.equalsIgnoreCase("chrome")) {
            capabilities = DesiredCapabilities.chrome();
        } else if (browser.equalsIgnoreCase("firefox")) {
            capabilities = DesiredCapabilities.firefox();
        } else {
            throw new IllegalArgumentException("Invalid browser: " + browser);
        }
        driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities);
    }

    @Test
    public void testTitle() {
        driver.get("https://www.example.com");
        Assert.assertEquals(driver.getTitle(), "Example Domain");
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
        <h2>Best Practices for Running Selenium Tests in Docker</h2>
        <ul>
          <li>Use containers as microservices to reduce their size and improve flexibility.</li>
          <li>Set up and tear down the test environment for each run to ensure clean and consistent results.</li>
          <li>Run tests in parallel to save time and fully utilize the underlying hardware.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Docker in Selenium allows for scalable and efficient test automation by creating isolated and consistent test environments. While there is some learning curve and resource overhead, Docker's ability to enhance parallel testing, cross-browser testing, and environment setup makes it a powerful tool for Selenium-based frameworks.
        </p>
      </section>
    </div>
  );
};

export default DockerInSelenium;
