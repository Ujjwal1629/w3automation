import React from 'react';
import './CdpSeleniumTheory.css';

const CdpSeleniumTheory = () => {
  return (
    <div className="CdpSeleniumTheory">
      <h1>CDP (Chrome DevTools Protocol) in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          The Chrome DevTools Protocol (CDP) is a set of tools that allows you to control, inspect, and debug Chromium-based browsers. In Selenium WebDriver, CDP is supported, enabling you to extend browser control beyond regular WebDriver actions. CDP features allow interception of network traffic, logging to the console, collecting performance metrics, and much more.
        </p>
      </section>

      <section>
        <h2>Why Use CDP with Selenium?</h2>
        <ul>
          <li><strong>Network Interception:</strong> Modify network traffic and browse pages with ease.</li>
          <li><strong>Console Logs:</strong> Record and analyze browser console logs.</li>
          <li><strong>Performance Metrics:</strong> Measure page load time and rendering performance.</li>
          <li><strong>Emulating Conditions:</strong> Simulate different conditions like offline mode or varying network speeds.</li>
          <li><strong>Screenshot and PDF Generation:</strong> Capture images of web pages or create PDFs.</li>
        </ul>
      </section>

      <section>
        <h2>Setting Up CDP with Selenium</h2>
        <p>
          To use CDP with Selenium, a connection to the Chrome DevTools Protocol must be established. This allows commands to be issued to the browser and events to be received.
        </p>
        <ol>
          <li>Install WebDriver and establish a connection for DevTools communication.</li>
          <li>Activate relevant domains such as Network or Performance.</li>
          <li>Control the browser using CDP commands and receive events.</li>
        </ol>
      </section>

      <section>
        <h2>Example: Network Interception Using CDP</h2>
        <p>Below is a simple example of using CDP to intercept network traffic:</p>
        <pre>
          <code>
{`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.devtools.DevTools;
import org.openqa.selenium.devtools.v116.network.Network;

public class CDPExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        DevTools devTools = ((ChromeDriver) driver).getDevTools();
        devTools.createSession();

        devTools.send(Network.enable(Optional.empty(), Optional.empty(), Optional.empty()));

        // Add request listener
        devTools.addListener(Network.requestWillBeSent(), request -> {
            System.out.println("Request URL: " + request.getRequest().getUrl());
        });

        // Navigate to a webpage
        driver.get("https://example.com");

        // Close the browser
        driver.quit();
    }
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          CDP integration with Selenium enables advanced browser automation capabilities beyond what the regular WebDriver API offers. By utilizing CDP, testers can intercept network traffic, capture console logs, simulate network conditions, and gather performance metrics. This enhances the depth and flexibility of automated test scripts, making them more powerful for real-world testing scenarios.
        </p>
      </section>
    </div>
  );
};

export default CdpSeleniumTheory;
