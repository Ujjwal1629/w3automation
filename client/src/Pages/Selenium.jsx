import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Selenium.css";
import Navbar from "../Components/Navbar";
import image from "../assets/java1.png";
import image2 from "../assets/java2.png";
import image3 from "../assets/java3.png";
import image4 from "../assets/java4.png";
import Java from "../Sections/Sections-Selenium/Java";
import Variables from "../Sections/Sections-Selenium/Variables";
import DataTypes from "../Sections/Sections-Selenium/DataTypes";
import JavaOperation from "../Sections/Sections-Selenium/JavaOperation";
import JavaStrings from "../Sections/Sections-Selenium/JavaStrings";
import JavaMethods from "../Sections/Sections-Selenium/JavaMethods";
import JavaArrays from "../Sections/Sections-Selenium/JavaArray";
import JavaAbstraction from "../Sections/Sections-Selenium/JavaAbstraction";
import JavaConditions from "../Sections/Sections-Selenium/JavaConditions";
import JavaAPIs from "../Sections/Sections-Selenium/JavaApi";
import JavaConstructor from "../Sections/Sections-Selenium/JavaConstructor";
import DataTypeConversion from "../Sections/Sections-Selenium/DataTypeConversion";
import Encapsulation from "../Sections/Sections-Selenium/Encapsulation";
import EnumInJava from "../Sections/Sections-Selenium/EnumInJava";
import ExceptionHandlingInJava from "../Sections/Sections-Selenium/ExceptionHandlingInJava";
import FileHandlingInJava from "../Sections/Sections-Selenium/FileHandlingInJava";
import InheritanceDocument from "../Sections/Sections-Selenium/Inheritance";
import JavaIteration from "../Sections/Sections-Selenium/JavaIteration";
import Poi from "../Sections/Sections-Selenium/Poi";
import Polymorphism from "../Sections/Sections-Selenium/Polymorphism";
import SeleniumAlertsTheory from "../Sections/Sections-Selenium/SeleniumAlertsTheory";
import CdpSeleniumTheory from "../Sections/Sections-Selenium/CdpSeleniumTheory";
import DataDrivenFramework from "../Sections/Sections-Selenium/DataDrivenFramework";
import DockerInSelenium from "../Sections/Sections-Selenium/DockerInSelenium";
import ExtentReportsInSelenium from "../Sections/Sections-Selenium/ExtentReportsInSelenium";
import HandlingWebElements from "../Sections/Sections-Selenium/HandlingWebElements";
import HandlingWindowInSelenium from "../Sections/Sections-Selenium/HandlingWindowInSelenium";
import IsElementPresentInSelenium from "../Sections/Sections-Selenium/IsElementPresentInSelenium";
import HandlingIFramesInSelenium from "../Sections/Sections-Selenium/HandlingIFramesInSelenium";
import JavaScriptExecutorInSelenium from "../Sections/Sections-Selenium/JavaScriptExecutorInSelenium";
import Log4jInSelenium from "../Sections/Sections-Selenium/Log4jInSelenium";
import PageObjectModelInSelenium from "../Sections/Sections-Selenium/PageObjectModelInSelenium";
import RelativeLocatorsInSelenium from "../Sections/Sections-Selenium/RelativeLocatorsInSelenium";
import ReportNGInSelenium from "../Sections/Sections-Selenium/ReportNGInSelenium";
import ScreenshotsInSelenium from "../Sections/Sections-Selenium/ScreenshotsInSelenium";
import ActionAPIsInSelenium from "../Sections/Sections-Selenium/ActionAPIsInSelenium";
import SeleniumGrid from "../Sections/Sections-Selenium/SeleniumGrid";
import SeleniumSelect from "../Sections/Sections-Selenium/SeleniumSelect";
import SeleniumWaits from "../Sections/Sections-Selenium/SeleniumWaits";
import SeleniumXPath from "../Sections/Sections-Selenium/SeleniumXPath";
import TestNGFramework from "../Sections/Sections-Selenium/TestNGFramework";
import Footer from "../Components/Footer";

export default function Selenium() {
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define section names for dynamic URL mapping
  const sectionNames = [
    "Intro", "Java", "Variables", "DataTypes", "JavaOperation", "JavaStrings",
    "JavaMethods", "JavaArrays", "JavaAbstraction", "JavaConditions", "JavaAPIs",
    "JavaConstructor", "DataTypeConversion", "Encapsulation", "EnumInJava",
    "ExceptionHandlingInJava", "FileHandlingInJava", "InheritanceDocument",
    "JavaIteration", "Poi", "Polymorphism", "SeleniumAlertsTheory", "CdpSeleniumTheory",
    "DataDrivenFramework", "DockerInSelenium", "ExtentReportsInSelenium", "HandlingWebElements",
    "HandlingWindowInSelenium", "IsElementPresentInSelenium", "HandlingIFramesInSelenium",
    "JavaScriptExecutorInSelenium", "Log4jInSelenium", "PageObjectModelInSelenium",
    "RelativeLocatorsInSelenium", "ReportNGInSelenium", "ScreenshotsInSelenium",
    "ActionAPIsInSelenium", "SeleniumGrid", "SeleniumSelect", "SeleniumWaits",
    "SeleniumXPath", "TestNGFramework"
  ];

  const handleLinkClick = (e, stepValue) => {
    e.preventDefault();
    setStep(stepValue);
    navigate(`/Selenium/${sectionNames[stepValue]}`);
    document.getElementById("main-page").scrollIntoView({ behavior: "smooth" });
  };
  
  const handleNextClick = () => {
    if (step < sectionNames.length - 1) {
      const nextStep = step + 1;
      setStep(nextStep);
      navigate(`/Selenium/${sectionNames[nextStep]}`);
    }
  };
  
  const handlePrevClick = () => {
    if (step > 0) {
      const prevStep = step - 1;
      setStep(prevStep);
      navigate(`/Selenium/${sectionNames[prevStep]}`);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className={`container-left ${isMobile ? 'hidden' : ''}`}>
          <div className="container-leftt">
            <div className="container-links">
              <h1>Selenium With Java</h1>
              {sectionNames.map((name, index) => (
                <a
                  key={index}
                  className="links"
                  href={`#${name}-section`}
                  onClick={(e) => handleLinkClick(e, index)}
                >
                  {name.replace(/([A-Z])/g, " $1").trim()}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="container-head">
            <button className="prev" onClick={handlePrevClick}>Prev</button>
            <button className="next" onClick={handleNextClick}>Next</button>
          </div>
          <div className="main-page" id="main-page">
          {step === 0 && (
              <div id="Selenium-Java-Intro" className="IntroJava">
                <h1>What is Selenium?</h1>
                <p>
                  Selenium is a free (open source) automated testing framework
                  used to validate web applications across different browsers.
                  It offers a plethora of tools that are specially designed to
                  cater to the automated testing of web applications. One of the
                  best things about Selenium is that it supports a variety of
                  programming languages like Java, C#, Python, Ruby, etc. So,
                  developers can write their test scripts in any one of these
                  languages.
             </p>
                <br />
                <h1>Why Choose Selenium with Java?</h1>
                <p>
                  Java is regarded as the most widely used and powerful
                  programming language around the world due to its robustness,
                  ease of use and it creates versatility. <br />
                  <span style={{ fontWeight: "bold" }}>
                    Advantages of using Java Selenium -{" "}
                  </span>
                  <br />
                  Platform independence - Java code can execute on any device if
                  that device supports the Java Virtual Machine (JVM). Extensive
                  Documentation: Java comes with detailed documentation and a
                  vast community that offers adequate resources to get support.
                  Integration with Testing Frameworks Java seamlessly integrates
                  standard testing frameworks (like JUnit and TestNG), that
                  improve automation of test cases.
                </p>
                <h1>Setting Up the Environment</h1>
                <p>
                  First, we must prepare a development environment for testing
                  Selenium tests.
                </p>
                <ul className="list-items">Installing Java</ul>
                <li className="list-item">
                  Downloading the newest JDK (Java Development Kit) from the{" "}
                  <a href="https://www.oracle.com/in/java/technologies/downloads/">
                    Oracle website
                  </a>
                </li>
                <li className="list-item">
                  Install as per the instructions for your OS.
                </li>
                <li className="list-item">
                  Set the environment variable JAVA_HOME to the JDK installation
                  directory.
                </li>
                <li className="list-item">
                  To confirm that Java has installed open command prompt and
                  type java -version.
                </li>
                <ul className="list-items">Setting Up Eclipse IDE</ul>
                <li className="list-item">
                  To begin, download and install the Eclipse IDE for Java
                  Developers from{" "}
                  <a href="https://www.eclipse.org/downloads/packages/release/kepler/sr1/eclipse-ide-java-developers">
                    here
                  </a>
                  .
                </li>
                <li className="list-item">
                  Open Eclipse 2. Create a new workspace.
                </li>
                <ul className="list-items">Adding Selenium Libraries</ul>
                <li className="list-item">
                  Good! The latest Selenium WebDriver Java client can be
                  downloaded here from the official website of{" "}
                  <a href="">Selenium</a>.
                </li>
                <li className="list-item">
                  Unzip the downloaded ZIP file and you will get some JAR files
                  as part of this to include in your project using Eclipse.
                </li>
                <li className="list-item">
                  Right-click on your project &gt; Build Path &gt; Configure
                  Build Path.
                </li>
                <li className="list-item">
                  Click on Add External JARs and select the Selenium JAR files.
                </li>
                <h1>Your First Selenium Test</h1>
                <h4>The basic structure of a Selenium Test</h4>
                <p>
                  Generally, the steps that a typical Selenium test in Java
                  makes are to
                </p>
                <ol className="list-items">
                  <li className="list-item">Set up the WebDriver.</li>
                  <li className="list-item">Navigate to the target.</li>
                  <li className="list-item">Do actions on web elements.</li>
                  <li className="list-item">Validate the results.</li>
                  <li className="list-item">Close the browser.</li>
             </ol>
                <h4>Example: Automating a Google Search</h4>
                <img
                className="img-selenium"
                 
                  src={image}
                  alt=""
                />
                <h1>Selenium WebDriver Basics</h1>
                <h4>Locating Web Elements</h4>
                <p>
                  The Selenium locators are the various approaches that search
                  or identify any element in a webpage.
                </p>
                <ol className="list-items">
                  <li className="list-item">By.id</li>
                  <li className="list-item">By.name</li>
                  <li className="list-item">By.className</li>
                  <li className="list-item">By.tagName</li>
                  <li className="list-item">By.linkText</li>
                  <li className="list-item">By.partialLinkText</li>
                  <li className="list-item">By.xpath</li>
                  <li className="list-item">By.cssSelector</li>
             </ol>
                <ul className="list-items">
                  Performing Actions on Web Elements.
             </ul>
                <li className="list-item">
                  sendKeys(): To type text in an input field.
                </li>
                <li className="list-item">
                  click (): The user clicks a button or link.
                </li>
                <li className="list-item">
                  getText(): Get the text of an element.
                </li>
                <ul className="list-items">Handling WebDriver Exceptions</ul>
                <li className="list-item">Common exceptions include</li>
                <li className="list-item">
                  NoSuchElementException: No element was found
                </li>
                <li className="list-item">
                  TimeoutException: Operation timed out
                </li>
                <li className="list-item">
                  StaleElementReferenceException: Element is no longer attached
                  to the DOM.
                </li>
                <h1>Advanced Selenium Concepts</h1>
                <h4>&gt; Handling Alerts and Pop-ups</h4>
                <img
                className="img-selenium"
                 
                  src={image2}
                  alt=""
                />
                <h4>&gt; Working with Multiple Windows and Frames</h4>
                <img
                className="img-selenium"
                 
                  src={image3}
                  alt=""
                />
                <h4>&gt; Implicit and Explicit Waits</h4>
                <img
                className="img-selenium"
                  src={image4}
                  alt=""
                />
                <h1>In the realm of Selenium Testing</h1>
                <p>
                  Page Object Model (POM)- Organize your tests as per
                  interaction with the page relative to the logic of a test.{" "}
                  <br />
                  <span style={{ fontWeight: "bold" }}>Independence:</span> All
                  tests should be independent of each other to prevent bad
                  test-writing practices where a failure in one part causes
                  several downstream failures. <br />
                  <span style={{ fontWeight: "bold" }}>Silent Waits:</span> Use
                  practical wait strategies for dynamic content, such as setting
                  Expected Wait or Page Load times.
                  <br />
                  <span style={{ fontWeight: "bold" }}>Assertions:</span>{" "}
                  Validate test outputs using assertions to establish the
                  significance and reliability of each test.
                </p>
                <h1>Conclusion</h1>
                <p>
                  There are other ways to do this also, e.g., using JSoup, but
                  you can use the Selenium + Java combo for testing web
                  applications; it is simple, a very powerful combination, and
                  creating them at will in no time! Creating robust and
                  maintainable test scripts by Misagh Moayyed Introduction.
                  Written test automation is a great way to verify the expected
                  behavior of an application. No matter whether you are only
                  starting to learn Selenium or would like a comprehensive
                  tutorial on mastering Selenium with Java.
             </p>
         </div>
            )}
            {step === 1 && <Java />}
            {step === 2 && <Variables />}
            {step === 3 && <DataTypes />}
            {step === 4 && <JavaOperation />}
            {step === 5 && <JavaStrings />}
            {step === 6 && <JavaMethods />}
            {step === 7 && <JavaArrays />}
            {step === 8 && <JavaAbstraction />}
            {step === 9 && <JavaConditions />}
            {step === 10 && <JavaAPIs />}
            {step === 11 && <JavaConstructor />}
            {step === 12 && <DataTypeConversion />}
            {step === 13 && <Encapsulation />}
            {step === 14 && <EnumInJava />}
            {step === 15 && <ExceptionHandlingInJava />}
            {step === 16 && <FileHandlingInJava />}
            {step === 17 && <InheritanceDocument />}
            {step === 18 && <JavaIteration />}
            {step === 19 && <Poi />}
            {step === 20 && <Polymorphism />}
            {step === 21 && <SeleniumAlertsTheory />}
            {step === 22 && <CdpSeleniumTheory />}
            {step === 23 && <DataDrivenFramework />}
            {step === 24 && <DockerInSelenium />}
            {step === 25 && <ExtentReportsInSelenium />}
            {step === 26 && <HandlingWebElements />}
            {step === 27 && <HandlingWindowInSelenium />}
            {step === 28 && <IsElementPresentInSelenium />}
            {step === 29 && <HandlingIFramesInSelenium />}
            {step === 30 && <JavaScriptExecutorInSelenium />}
            {step === 31 && <Log4jInSelenium />}
            {step === 32 && <PageObjectModelInSelenium />}
            {step === 33 && <RelativeLocatorsInSelenium />}
            {step === 34 && <ReportNGInSelenium />}
            {step === 35 && <ScreenshotsInSelenium />}
            {step === 36 && <ActionAPIsInSelenium />}
            {step === 37 && <SeleniumGrid />}
            {step === 38 && <SeleniumSelect />}
            {step === 39 && <SeleniumWaits />}
            {step === 40 && <SeleniumXPath />}
            {step === 41 && <TestNGFramework />}
          </div>
        </div>
      </div>
       <Footer />
    </div>
  );
}
