import React, { useState, useEffect } from "react";
import "./Selenium.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import image from "../assets/java1.png";
import image2 from "../assets/java2.png";
import image3 from "../assets/java3.png";
import image4 from "../assets/java4.png"; // always store images in assets folder then import it like this and name accordingly like image, myImage, car, bike etc
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

export default function Selenium() {
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = (e, stepValue) => {
    e.preventDefault();
    setStep(stepValue);
    document.getElementById("main-page").scrollIntoView({ behavior: "smooth" });
  };

  const handleNextClick = () => {
    setStep((prevStep) => (prevStep < 20 ? prevStep + 1 : prevStep));
  };

  const handlePrevClick = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
    <div>
      <Navbar />
      <div className="header">
      <Header />
      </div>
      <div className="main">
      <div className={`container-left ${isMobile ? 'hidden' : ''}`}>
        <div className="container-left">
          <div className="container-links">
            <h1>Selenium With Java</h1>
            <a
              className="links"
              href="#java-section"
              onClick={(e) => handleLinkClick(e, 1)}
            >
              Java
            </a>
            <a
              className="links"
              href="#variables-section"
              onClick={(e) => handleLinkClick(e, 2)}
            >
              Variables
            </a>
            <a
              className="links"
              href="#dataTypes-section"
              onClick={(e) => handleLinkClick(e, 3)}
            >
              Data Types
            </a>
            <a
              className="links"
              href="#javaOperation-section"
              onClick={(e) => handleLinkClick(e, 4)}
            >
              Java Operations
            </a>
            <a
              className="links"
              href="#javaStrings-section"
              onClick={(e) => handleLinkClick(e, 5)}
            >
              Java Strings
            </a>
            <a
              className="links"
              href="#javaMethods-section"
              onClick={(e) => handleLinkClick(e, 6)}
            >
              Java Methods
            </a>
            <a
              className="links"
              href="#javaArrays-section"
              onClick={(e) => handleLinkClick(e, 7)}
            >
              Java Arrays
            </a>
            <a
              className="links"
              href="#javaAbstraction-section"
              onClick={(e) => handleLinkClick(e, 8)}
            >
              Java Abstraction
            </a>
            <a
              className="links"
              href="#javaConditions-section"
              onClick={(e) => handleLinkClick(e, 9)}
            >
              Java Conditions
            </a>
            <a
              className="links"
              href="#javaAPIs-section"
              onClick={(e) => handleLinkClick(e, 10)}
            >
              Java APIs
            </a>
            <a
              className="links"
              href="#javaConstructor-section"
              onClick={(e) => handleLinkClick(e, 11)}
            >
              Java Constructor
            </a>
            <a
              className="links"
              href="#dataTypeConversion-section"
              onClick={(e) => handleLinkClick(e, 12)}
            >
              Data Type Conversion
            </a>
            <a
              className="links"
              href="#encapsulation-section"
              onClick={(e) => handleLinkClick(e, 13)}
            >
              Encapsulation
            </a>
            <a
              className="links"
              href="#enumInJava-section"
              onClick={(e) => handleLinkClick(e, 14)}
            >
              Enum In Java
            </a>
            <a
              className="links"
              href="#exceptionHandlingInJava-section"
              onClick={(e) => handleLinkClick(e, 15)}
            >
              Exception Handling In Java
            </a>
            <a
              className="links"
              href="#fileHandlingInJava-section"
              onClick={(e) => handleLinkClick(e, 16)}
            >
              File Handling In Java
            </a>
            <a
              className="links"
              href="#inheritanceDocument-section"
              onClick={(e) => handleLinkClick(e, 17)}
            >
              Inheritance
            </a>
            <a
              className="links"
              href="#javaIteration-section"
              onClick={(e) => handleLinkClick(e, 18)}
            >
              Java Iteration
            </a>
            <a
              className="links"
              href="#poi-section"
              onClick={(e) => handleLinkClick(e, 19)}
            >
              Poi
            </a>
            <a
              className="links"
              href="#polymorphism-section"
              onClick={(e) => handleLinkClick(e, 20)}
            >
              Polymorphism
            </a>
          </div>
        </div>
        </div>
        <div className="main-container">
          <div className="container-head">
            <button className="prev" onClick={handlePrevClick}>
              Prev
            </button>
            <button className="next" onClick={handleNextClick}>
              Next
            </button>
          </div>
          <div className="main-page">
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
          </div>
        </div>
      </div>
    </div>
  );
}
