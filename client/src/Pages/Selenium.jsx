import React from "react";
import "./Selenium.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import image from "../assets/night.png" // always store images in assets folder then import it like this and name accordingly like image, myImage, car, bike etc

export default function Selenium() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <Navbar />
      <Header />
      <div className="main">
        <div className="container-left">
          <div className="container-links">
            <h1>Selenium With Java</h1>
            <a className="links" href="#Selenium-Java-Intro" onClick={(e) => scrollToSection(e, 'Selenium-Java-Intro')}>
              Selenium With Java Course Introduction
            </a>
            <a className="links" href="#preRequisite-Selenium-Java" onClick={(e) => scrollToSection(e, 'preRequisite-Selenium-Java')}>
              Pre-Requisites For Selenium With Java
            </a>
            <a className="links" href="#Intro-Java" onClick={(e) => scrollToSection(e, 'Intro-Java')}>
              Introduction To Java
            </a>
            <a className="links" href="#Classes And Objects Class-Object" onClick={(e) => scrollToSection(e, 'Classes And Objects Class-Object')}>
              Classes And Objects
            </a>
            <a className="links" href="#Java-Programming-Features" onClick={(e) => scrollToSection(e, 'Java-Programming-Features')}>
              Basic Java Programming and Features
            </a>
            <a className="links" href="#java-methods" onClick={(e) => scrollToSection(e, 'java-methods')}>
              Methods Introduction
            </a>
            <a className="links" href="#methods-types" onClick={(e) => scrollToSection(e, 'methods-types')}>
              Types Of Methods
            </a>
            <a className="links" href="#methods-static-nonStatic" onClick={(e) => scrollToSection(e, 'methods-static-nonStatic')}>
              Methods - Static and Non Static
            </a>
            <a className="links" href="#if-else-statement" onClick={(e) => scrollToSection(e, 'if-else-statement')}>
              If and Else Statement
            </a>
            <a className="links" href="#for-loop" onClick={(e) => scrollToSection(e, 'for-loop')}>
              For Loop
            </a>
            <a className="links" href="#nested-for-loop" onClick={(e) => scrollToSection(e, 'nested-for-loop')}>
              Nested For Loop
            </a>
            <a className="links" href="">
              Break and Continue Statement
            </a>
            <a className="links" href="">
              While and Do While Loop
            </a>
            <a className="links" href="">
              Arrays 2D and 3D
            </a>
            <a className="links" href="">
              OOPs Concepts
            </a>
            <a className="links" href="">
              Exception Handling
            </a>
            <a className="links" href="">
              Java Collections
            </a>
            <a className="links" href="">
              Introduction To Selenium WebDriver
            </a>
            <a className="links" href="">
              Finding WebElement By Locators
            </a>
            <a className="links" href="">
              Handling Dropdowns
            </a>
            <a className="links" href="">
              Handling 
            </a>
          </div>
        </div>
        <div className="main-container">
          <div className="container-head">
            <button className="prev">Prev</button>
            <button className="next">Next</button>
          </div>
          <div className="main-page">
            <div id="Selenium-Java-Intro" class = "IntroJava">
              <h1>Introduction To Selenium With Java Course</h1>
              <img src={image} alt="" /> 
              <p>
               This course is designed in a manner to cater the students and the working professionals to learn and upskill
                their knowledge towards creating a test automation framework which will include following segments or pieces.
                <ol>
                <li>Core Java</li>
                <li>Keyword Driven Framework</li>
                <li>Data Driven Framework</li>
                <li>TestNG Framework</li>
                <li>Page Object Model Approach</li>
                </ol>
              Above topics will be taken one by one in depth and after completing this course one can easily become master 
              in test automation testing with a most important trait into your skillset bucket i.e Selenium with Java. After 
              completing this course working professionals with profile as functional/manual testing engineer can explain test 
              automation as his/her part of daily testing.Talking about students, this course will help kick start their career 
              with highly paid professionals in software testing domain. 
              <br></br>
              <br></br>
              There is no pre-requisite skill required for this course no manual testing or development background. 
              So Lets design the complete test automation framework from scratch.

              <h3> What is Selenium?</h3>
              Selenium is an open source tool/ framework/ library/ set of apis for automation testing of Web Applications only.
              <br></br>
              <br></br>
              <b>Various Tools for Testing  </b>
              <ol>
                <li>For web based applications testing - Selenium, Cypress, PlayWright, Tosca etc. </li>
                <li>For desktop based applications testing - UFT/QTP(Mercury / HP) (VB Script - Windows only).</li>
                <li>For database testing - SQLMap, DbFit, Mockup Data, SQL Test etc.</li>
                <li>For mobile applications testing - Appium</li>
                <li>For Webservices API(REST / SOAP) - Postman, SoapUI, REST Assured.</li>
                </ol>
              <b>Features Of Selenium</b>
              <ol>
                <li>Multiple Language Support - Java, C#, Ruby, Python, JavaScript. </li>
                <li>Multiple Platform Support / Operating System - Windows, Linux, Mac OS, Solaris, Android. </li>                
                <li>Multiple Browser Support - Chrome, Firefox, Edge, Internet Explorer, Safari, Opera </li>
                </ol>

              When we talk about language support it means Selenium has a set of language specific client drivers.
              It does not mean that if in case website is developed in a certain language for exampl.e in C# one has 
              to choose same set of language binding of selenium. Whichever language one is confortable with can choose 
              among the available language bindings available like Java, C#, Ruby, Python and Javascript.
              <br></br>
              <br></br>
              <b>History Of Selenium</b>
              <br></br>
              <br></br>
              Who created Selenium? It was created by a company called ThoughtWorks and the person who developed this is Jason Huggins.
              He started the project in 2006. In order to automate, daily manual testing routine task. He created a small library, that library
              went to such an extend they thought of giving it a name and they came up with a name called as Selenium. Why they named it as 
              Selenium? What is the reason behind this name. At the time around 2006 Mercury company tools were very popular.
              Prior to QTP it was WinRunner for desktop application testing as that time there were more desktop applications.
              In order to automate those applications the user need to purchase the license. If we talk about mercury in general terms, what is 
              mercury. There is a saying if someone intakes mercury one can die because of it. Someone intakes mercury, he/she has to give 
              antidote to it. That antidote is named as selenium. Selenium kills mercury so they have given such name to end the market of QTP mercury.
              To such an extend they are successful as well. Not just the cost effective reason but also there are alot of other reasons.


              Why Selenium is so popular. why companies are not looking at other paid tools like QTP,Mercury,RFT. Why they are investing more in selenium. 
              Not in terms of cost but in terms of resources. We have already discussed alot of reason like what all things it supports vs what all things 
              QTP supports.
              <br></br>
              <br></br>
              All the discussion done around the scope of performing test automation can be done in a single project which include Selenium, Java and other 
              APIs which countributes to the different requirements of a project. You can automate web based, mobile based, webservices testing,
              Database testing, Desktop application testing. All these application can be easily handled in one single project/one single framework. 
              That is how robust Selenium is. You have alot of integration done with selenium which you cannot do with QTP.
              <br></br>
              <br></br>
              There is a saying that 100% cannot be automated, means we can use only those functionalities which are provided by the automation tool. If in case 
              you identify any new functionality to test some item in your application and that is not available, you can ask for add on from the company mercury 
              in case of QTP.
              </p>
            </div>
            <div id="preRequisite-Selenium-Java" class = "IntroJava">
              <h1>Pre Requisites For Selenium and Java</h1>
              <p>
               Install Java  
               You might find Java already installed into your system.

               To check if you have a java installed on a windows PC, search in the start bar for Java or type the following 
               in Command Prompt (cmd.exe):
               <br></br>
              ADD A PICTURE OF CMD LOOKING FOR JAVA VERSION ALSO ADD TEXT AND PICTURE TO FIND JAVA VERSION IN MAC.
              <br></br>
              If Java is already installed in your machine. You will find something like this below based on the version installed into your system.

              <br></br>
              ADD A PICTURE TO SHOW JAVA VERSION DETAILS IN CMD FOR BOTH MAC AND WINDOWS.

              If you do not find java in your system. Please visit to website <a href="https://www.oracle.com/in/java/technologies/javase/jdk11-archive-downloads.html" target="_blank">oracle.com</a>
              <br></br>
              <b>Note: </b>A text editor is provided while learning core java concepts. You can have good hands on while going through
              each topics. Other way to do it to use any available Integrated Development Enviroment, like Eclipse, IntelliJ or Netbeans,
              Eclipse is most preferable one while opting for Selenium with Java course.
              <br></br>
              <br></br>
              <b>How to Setup Java on Windows:</b>
              <br></br>
              <b>Below are the steps to follow to install Java on windows machine.</b>
              <ol>
                <li>First of all go to "System Properties" (Can be found on Control Panel &gt; System and Security &gt; System &gt; Advanced System Settings) </li>
                <li>Click on the "Environment variables" button under the "Advanced" tab. </li>                
                <li>Then, select the "Path" variable in System variables and click on the "Edit" button </li>                    
                <li>Click on the "New" button and add the path where Java is installed, followed by \bin. By default, Java is installed in C:\Program Files\Java\jdk-11.0.1 (If nothing else was specified when you installed it). In that case, You will have to add a new path with: C:\Program Files\Java\jdk-11.0.1\bin
                Then, click "OK", and save the settings</li>    
                <li>At last, open Command Prompt (cmd.exe) and type java -version to see if Java is running on your machine</li>
              </ol>           

                PUT SOME SCREENSHOTS IN ABOVE STEPS 
                <br></br>
                <br></br>
                <b>Install Maven</b>
                <br></br>
                Go to the maven website to download zip file which can help setting up maven in your machine. Here is the link to download zip file <a href="https://maven.apache.org/download.cgi" target="_blank">maven download</a>.
                <br></br>Go to Files section of the webpage and click on zip file link displayed below. 
              <b>Show a screenshot of the maven website location where to download</b>
              <b>How to Setup Maven on Windows:</b>
              <br></br>
              <b>Below are the steps to follow to setup maven on windows machine.</b>
              <ol>
                <li>First go to "System Properties" (Can be found on Control Panel &gt; System and Security &gt; System &gt; Advanced System Settings). </li>
                <li>Click on the "Environment variables" button under the "Advanced" tab. </li>                
                <li>Then, select the "Path" variable in System variables and click on the "Edit" button. </li>                    
                <li>Click on the "New" button and add the path where maven is installed, followed by \bin.  In that case, You will have to add a new path with: ------\jdk-11.0.1\bin(update the path)
                Then, click "OK", and save the settings</li>    
                <li>At last, open Command Prompt (cmd.exe) and type <b>mvn -version</b> to see if maven is setup on your machine successfully.</li>
              </ol>      
              </p>
            </div>
            <div id="Introduction To Java" class = "IntroJava">
              <h1>Introduction To Java</h1>
              <p>
                What is Java?
                Java is a very popular pro 
                JavaScript is the world's most popular programming language.
                JavaScript is the programming language of the Web. JavaScript is
                easy to learn. This tutorial will teach you JavaScript from
                basic to advanced.
              </p>
            </div>
            <div id="Introduction To Java" class = "IntroJava">
              <h1>Introduction To Java</h1>
              <p>
                What is Java?
                Java is a very popular pro
                JavaScript is the world's most popular programming language.
                JavaScript is the programming language of the Web. JavaScript is
                easy to learn. This tutorial will teach you JavaScript from
                basic to advanced.
              </p>
            </div>
            <div id="Introduction To Java" class = "IntroJava">
              <h1>Introduction To Java</h1>
              <p>
                What is Java?
                Java is a very popular pro
                JavaScript is the world's most popular programming language.
                JavaScript is the programming language of the Web. JavaScript is
                easy to learn. This tutorial will teach you JavaScript from
                basic to advanced.
              </p>
            </div>
            <div id="Types Of Methods java-method" class = "IntroJava">
              <h1>Types Of Methods</h1>
              <p>
                What is Method?
                Java is a very popular pro
                JavaScript is the world's most popular programming language.
                JavaScript is the programming language of the Web. JavaScript is
                easy to learn. This tutorial will teach you JavaScript from
                basic to advanced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
