import React from 'react';
import './PlaywrightWithJavaScript.css';

const PlaywrightWithJavaScript = () => {
  return (
    <div className="PlaywrightDocs">
      <h1>Playwright with JavaScript</h1>
      
      <section className="introduction">
        <p>
          Playwright is an open-source web automation library developed by Microsoft intended
          mainly for running automation scripts in browsers such as Chromium, Firefox, and WebKit.
          It comes with browser automation high-level APIs designed to perform basic tasks like button
          clicking, form filling, and page switching with ease.
        </p>
      </section>

      <section className="why-playwright">
        <h2>Why Playwright JavaScript?</h2>
        <ul>
          <li>
            <strong>Familiarity:</strong> Most developers already have a JavaScript background which makes it simple to get
            started with Playwright.
          </li>
          <li>
            <strong>Debugging:</strong> Makes it relatively easy to debug tests run in the browser's dev tools.
          </li>
          <li>
            <strong>Support for multiple platforms:</strong> Provides assistance for Windows, macOS, and Linux.
          </li>
          <li>
            <strong>Automatization:</strong> Great for writing different automated tests.
          </li>
          <li>
            <strong>Reliability:</strong> Powerful APIs for handling complex browser procedures.
          </li>
        </ul>
      </section>

      <section className="installation">
        <h2>Installation of Playwright</h2>
        <div className="code-block">
          <h3>Step 1: Install Node.js</h3>
          <pre>
            <code>
              node -v
              npm -v
            </code>
          </pre>

          <h3>Step 2: Create New Project</h3>
          <pre>
            <code>
              mkdir playwright-demo
              cd playwright-demo
              npm init -y
            </code>
          </pre>

          <h3>Step 3: Install Playwright</h3>
          <pre>
            <code>
              npm install playwright
            </code>
          </pre>
        </div>
      </section>

      <section className="basic-usage">
        <h2>Basic Usage and Syntax</h2>
        <div className="code-block">
          <pre>
            <code>{`const { chromium } = require('playwright');
(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false });
  // Create a new page (new tab)
  const page = await browser.newPage();
  // Navigate to a website
  await page.goto('https://example.com');
  // Take a screenshot
  await page.screenshot({ path: 'example.png' });
  // Close the browser
  await browser.close();
})();`}</code>
          </pre>
        </div>
      </section>

      <section className="testing-types">
        <h2>Testing Types in Playwright</h2>
        <div className="testing-grid">
          <div className="testing-type">
            <h3>1. End-to-End Testing</h3>
            <p>Validates that all components work together in unison.</p>
          </div>
          <div className="testing-type">
            <h3>2. Functional Testing</h3>
            <p>Ensures particular functions work correctly.</p>
          </div>
          <div className="testing-type">
            <h3>3. UI Testing</h3>
            <p>Tests that the application's user interface behaves correctly.</p>
          </div>
          <div className="testing-type">
            <h3>4. Cross Browser Testing</h3>
            <p>Verifies application works across different browsers.</p>
          </div>
          <div className="testing-type">
            <h3>5. Responsive Design Testing</h3>
            <p>Ensures application fits all screen sizes.</p>
          </div>
          <div className="testing-type">
            <h3>6. Performance Testing</h3>
            <p>Measures page load times and navigation speed.</p>
          </div>
          <div className="testing-type">
            <h3>7. Accessibility Testing</h3>
            <p>Ensures usability for people with disabilities.</p>
          </div>
          <div className="testing-type">
            <h3>8. API Testing</h3>
            <p>Tests RESTful APIs and validates responses.</p>
          </div>
        </div>
      </section>

      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>
          Playwright is a robust, flexible, and easy-to-use tool for browser automation. Whether you're
          testing web applications, scraping data, or automating repetitive tasks, Playwright provides a
          straightforward API to interact with browsers. It works seamlessly with JavaScript and has
          excellent cross-browser support, which is vital for testing modern web applications.
        </p>
      </section>
    </div>
  );
};

export default PlaywrightWithJavaScript;