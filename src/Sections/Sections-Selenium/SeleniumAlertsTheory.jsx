import React from 'react';
import './SeleniumAlertsTheory.css';

const SeleniumAlertsTheory = () => {
  return (
    <div className="SeleniumAlertsTheory">
      <h1>Handling Alerts in Selenium</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Alerts in Selenium are pop-up messages that can appear during automation testing to get the user’s attention.
          Selenium provides an interface called <strong>Alert</strong> to interact with these alerts. There are different types of alerts that can be handled using Selenium, each serving a unique purpose.
        </p>
      </section>

      <section>
        <h2>Types of Alerts in Selenium</h2>
        <ul>
          <li><strong>Simple Alert:</strong> Shows only a message with an ‘OK’ button.</li>
          <li><strong>Confirmation Alert:</strong> Displays a message with ‘OK’ and ‘Cancel’ options for the user to confirm or dismiss the action.</li>
          <li><strong>Prompt Alert:</strong> Provides a message box with ‘OK’ and ‘Cancel’ options and allows users to input text.</li>
        </ul>
      </section>

      <section>
        <h2>Common Methods to Handle Alerts</h2>
        <p>
          Selenium provides several methods to interact with alerts using the <strong>Alert</strong> interface:
        </p>
        <ul>
          <li><strong>accept():</strong> Clicks on the 'OK' button of the alert.</li>
          <li><strong>dismiss():</strong> Clicks on the 'Cancel' button of the alert.</li>
          <li><strong>getText():</strong> Retrieves the text from the alert box.</li>
          <li><strong>sendKeys(String input):</strong> Sends text input to the alert (used for prompt alerts).</li>
        </ul>
      </section>

      <section>
        <h2>Steps to Handle Alerts</h2>
        <ol>
          <li><strong>Trigger the alert:</strong> Perform the action that causes the alert to appear.</li>
          <li><strong>Switch to the alert:</strong> Use <code>switchTo().alert()</code> to focus on the alert.</li>
          <li><strong>Perform operations:</strong> Use methods like <code>accept()</code>, <code>dismiss()</code>, <code>getText()</code>, or <code>sendKeys()</code> to interact with the alert.</li>
          <li><strong>Continue execution:</strong> After handling the alert, proceed with the test script execution.</li>
        </ol>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Handling alerts in Selenium is crucial for automated web testing. By switching the context of the WebDriver to the alert, you can perform actions such as accepting or dismissing the alert, reading the alert text, or entering data into a prompt alert. Selenium’s <strong>Alert</strong> interface provides a simple way to handle various types of pop-ups such as JavaScript alerts, modal dialogs, and more.
        </p>
      </section>
    </div>
  );
};

export default SeleniumAlertsTheory;
