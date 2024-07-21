import React, { useState } from "react";
import "./Selenium.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import image from "../assets/java1.png";
import image2 from "../assets/java2.png";
import image3 from "../assets/java3.png";
import image4 from "../assets/java4.png"; // always store images in assets folder then import it like this and name accordingly like image, myImage, car, bike etc
import Java from "../Sections/Sections-Selenium/Java";
import Variables from "../Sections/Sections-Selenium/Variables";

export default function Selenium() {
  const [step, setStep] = useState(0);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleNextClick = () => {
    setStep((prevStep) => (prevStep < 2 ? prevStep + 1 : prevStep));
  };

  const handlePrevClick = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="main">
        <div className="container-left">
          <div className="container-links">
            <h1>Selenium With Java</h1>
            <a
              className="links"
              href="#Selenium-Java-Intro"
              onClick={(e) => scrollToSection(e, "Selenium-Java-Intro")}
            >
              What is Selenium?
            </a>
            <a
              className="links"
              href="#preRequisite-Selenium-Java"
              onClick={(e) => scrollToSection(e, "preRequisite-Selenium-Java")}
            >
              Pre-Requisites For Selenium With Java
            </a>
            <a
              className="links"
              href="#Intro-Java"
              onClick={(e) => scrollToSection(e, "Intro-Java")}
            >
              Introduction To Java
            </a>
            <a
              className="links"
              href="#Classes And Objects Class-Object"
              onClick={(e) =>
                scrollToSection(e, "Classes And Objects Class-Object")
              }
            >
              Classes And Objects
            </a>
            <a
              className="links"
              href="#Java-Programming-Features"
              onClick={(e) => scrollToSection(e, "Java-Programming-Features")}
            >
              Basic Java Programming and Features
            </a>
            <a
              className="links"
              href="#java-methods"
              onClick={(e) => scrollToSection(e, "java-methods")}
            >
              Methods Introduction
            </a>
            <a
              className="links"
              href="#methods-types"
              onClick={(e) => scrollToSection(e, "methods-types")}
            >
              Types Of Methods
            </a>
            <a
              className="links"
              href="#methods-static-nonStatic"
              onClick={(e) => scrollToSection(e, "methods-static-nonStatic")}
            >
              Methods - Static and Non Static
            </a>
            <a
              className="links"
              href="#if-else-statement"
              onClick={(e) => scrollToSection(e, "if-else-statement")}
            >
              If and Else Statement
            </a>
            <a
              className="links"
              href="#for-loop"
              onClick={(e) => scrollToSection(e, "for-loop")}
            >
              For Loop
            </a>
            <a
              className="links"
              href="#nested-for-loop"
              onClick={(e) => scrollToSection(e, "nested-for-loop")}
            >
              Nested For Loop
            </a>
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
                  style={{
                    width: "600px",
                    borderRadius: "15px",
                    boxShadow: "0 0 20px",
                  }}
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
                  style={{
                    width: "600px",
                    borderRadius: "15px",
                    boxShadow: "0 0 20px",
                  }}
                  src={image2}
                  alt=""
                />
                <h4>&gt; Working with Multiple Windows and Frames</h4>
                <img
                  style={{
                    width: "600px",
                    borderRadius: "15px",
                    boxShadow: "0 0 20px",
                  }}
                  src={image3}
                  alt=""
                />
                <h4>&gt; Implicit and Explicit Waits</h4>
                <img
                  style={{
                    width: "600px",
                    borderRadius: "15px",
                    boxShadow: "0 0 20px",
                  }}
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
          </div>
        </div>
      </div>
    </div>
  );
}
