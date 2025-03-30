import React, { useState,useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isPracticeDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsPracticeDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isPracticeDropdownOpen]);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
    if (item === 'practice') {
      setIsPracticeDropdownOpen(true);
    } else if (item === 'courses') {
      setIsCoursesDropdownOpen(true);
    }
  };

  const handleMouseLeave = (item) => {
    setTimeout(() => {
      if (!hoveredItem) {
        if (item === 'practice') {
          setIsPracticeDropdownOpen(false);
        } else if (item === 'courses') {
          setIsCoursesDropdownOpen(false);
        }
      }
    }, 100);
  };

  const togglePracticeDropdown = () => {
    setIsPracticeDropdownOpen(!isPracticeDropdownOpen);
    setIsCoursesDropdownOpen(false);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
    setIsPracticeDropdownOpen(false);
  };

  const topics = [
    { title: "Java Basics", step: 1, route: "/Selenium/Intro" },
    { title: "Variables", step: 2, route: "/Selenium/Variables" },
    { title: "Data Types", step: 3, route: "/Selenium/DataTypes" },
    { title: "Java Operations", step: 4, route: "/Selenium/JavaOperation" },
    { title: "Java Strings", step: 5, route: "/Selenium/JavaStrings" },
    { title: "Java Methods", step: 6, route: "/Selenium/JavaMethods" },
    { title: "Java Arrays", step: 7, route: "/Selenium/JavaArrays" },
    { title: "Java Abstraction", step: 8, route: "/Selenium/JavaAbstraction" },
    { title: "Java Conditions", step: 9, route: "/Selenium/JavaConditions" },
    { title: "Java APIs", step: 10, route: "/Selenium/JavaAPIs" },
    { title: "Java Constructor", step: 11, route: "/Selenium/JavaConstructor" },
    { title: "Data Type Conversion", step: 12, route: "/Selenium/DataTypeConversion" },
    { title: "Encapsulation", step: 13, route: "/Selenium/Encapsulation" },
    { title: "Enum in Java", step: 14, route: "/Selenium/EnumInJava" },
    { title: "Exception Handling", step: 15, route: "/Selenium/ExceptionHandlingInJava" },
    { title: "File Handling", step: 16, route: "/Selenium/FileHandlingInJava" },
    { title: "Inheritance", step: 17, route: "/Selenium/InheritanceDocument" },
    { title: "Java Iteration", step: 18, route: "/Selenium/JavaIteration" },
    { title: "POI", step: 19, route: "/Selenium/Poi" },
    { title: "Polymorphism", step: 20, route: "/Selenium/Polymorphism" },
    { title: "Selenium Alerts", step: 21, route: "/Selenium/SeleniumAlertsTheory" },
    { title: "CDP in Selenium", step: 22, route: "/Selenium/CdpSeleniumTheory" },
    { title: "Data Driven Framework", step: 23, route: "/Selenium/DataDrivenFramework" },
    { title: "Docker in Selenium", step: 24, route: "/Selenium/DockerInSelenium" },
    { title: "Extent Reports", step: 25, route: "/Selenium/ExtentReportsInSelenium" },
    { title: "Handling Web Elements", step: 26, route: "/Selenium/HandlingWebElements" },
    { title: "Window Handling", step: 27, route: "/Selenium/HandlingWindowInSelenium" },
    { title: "Is Element Present", step: 28, route: "/Selenium/IsElementPresentInSelenium" },
    { title: "iFrames in Selenium", step: 29, route: "/Selenium/HandlingIFramesInSelenium" },
    { title: "JavaScript Executor", step: 30, route: "/Selenium/JavaScriptExecutorInSelenium" },
    { title: "Log4j", step: 31, route: "/Selenium/Log4jInSelenium" },
    { title: "Page Object Model", step: 32, route: "/Selenium/PageObjectModelInSelenium" },
    { title: "Relative Locators", step: 33, route: "/Selenium/RelativeLocatorsInSelenium" },
    { title: "ReportNG", step: 34, route: "/Selenium/ReportNGInSelenium" },
    { title: "Screenshots", step: 35, route: "/Selenium/ScreenshotsInSelenium" },
    { title: "Action APIs", step: 36, route: "/Selenium/ActionAPIsInSelenium" },
    { title: "Selenium Grid", step: 37, route: "/Selenium/SeleniumGrid" },
    { title: "Selenium Select", step: 38, route: "/Selenium/SeleniumSelect" },
    { title: "Selenium Waits", step: 39, route: "/Selenium/SeleniumWaits" },
    { title: "XPath", step: 40, route: "/Selenium/SeleniumXPath" },
    { title: "TestNG", step: 41, route: "/Selenium/TestNGFramework" },
  ];

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const searchTermLower = searchTerm.toLowerCase();
      const foundTopic = topics.find(topic => 
        topic.title.toLowerCase().includes(searchTermLower)
      );

      if (foundTopic) {
        navigate(foundTopic.route);
        setSearchTerm("");
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="main-nav">
        <a href="/" className="header-logo">
          JourneyToAutomation
        </a>
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="search-container">
            <input 
              type="search" 
              placeholder="Search JourneyToAutomation" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleSearch}
            />
          </div>
          <div className="nav-buttons">
            <button onClick={() => window.open("https://courses.journeytoautomation.org/store")}>Courses</button>
            <button>Contact Us</button>
            <button onClick={() => navigate("/about")}>About Us</button>
          </div>
        </div>
      </div>

      <div className="sub-nav">
        <a 
          onClick={() => navigate("/Selenium")}
          onMouseEnter={() => handleMouseEnter('selenium')}
          onMouseLeave={() => handleMouseLeave('selenium')}
        >
          SELENIUM WITH JAVA
        </a>
        <a 
          onClick={() => navigate("/Playwright")}
          onMouseEnter={() => handleMouseEnter('playwright')}
          onMouseLeave={() => handleMouseLeave('playwright')}
        >
          PLAYWRIGHT
        </a>
        <a 
          onClick={() => navigate("/InterviewQuestions")}
          onMouseEnter={() => handleMouseEnter('interview')}
          onMouseLeave={() => handleMouseLeave('interview')}
        >
          INTERVIEW QUESTIONS
        </a>
        {/* <a onClick={() => navigate("/ApiTesting")}>API TESTING</a> */}
        <a 
          onClick={() => navigate("/Blogs")}
          onMouseEnter={() => handleMouseEnter('blogs')}
          onMouseLeave={() => handleMouseLeave('blogs')}
        >
          BLOGS
        </a>
        <div 
          className="dropdown-container"
          onMouseEnter={() => handleMouseEnter('practice')}
          onMouseLeave={() => handleMouseLeave('practice')}
        >
          <a onClick={() => navigate("/practice")}>PRACTICE SITE</a>
          {isPracticeDropdownOpen && (
            <div className="dropdown-menu">
              <a onClick={() => {
                navigate("/practice");
                setIsPracticeDropdownOpen(false);
              }}>Form Test</a>
              <a onClick={() => {
                navigate("/practice/alert");
                setIsPracticeDropdownOpen(false);
              }}>Alert Box</a>
              <a onClick={() => {
                navigate("/practice/image");
                setIsPracticeDropdownOpen(false);
              }}>Image Context</a>
              <a onClick={() => {
                navigate("/practice/browser");
                setIsPracticeDropdownOpen(false);
              }}>Browser Tab Opener</a>
              <a onClick={() => {
                navigate("/practice/links");
                setIsPracticeDropdownOpen(false);
              }}>Links Testing</a>
              <a onClick={() => {
                navigate("/practice/auth");
                setIsPracticeDropdownOpen(false);
              }}>Authentication</a>
                <a onClick={() => navigate("/ecommerce")} className="ecommerce-link">
              ECOMMERCE STORE
            </a>
            </div>
          )}
        </div>

          {/* New Upcoming Courses Dropdown */}
        <div 
          className="dropdown-container"
          onMouseEnter={() => handleMouseEnter('courses')}
          onMouseLeave={() => handleMouseLeave('courses')}
          onClick={toggleCoursesDropdown}
        >
          <a 
            className={isCoursesDropdownOpen ? 'active' : ''} 
            onClick={(e) => {
              e.stopPropagation();
              toggleCoursesDropdown();
            }}
          >
            UPCOMING COURSES
          </a>
          {isCoursesDropdownOpen && (
            <div className="dropdown-menu courses-menu">
              <a 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/syllabus-java-selenium");
                  setIsCoursesDropdownOpen(false);
                }}
                className="dropdown-item"
              >
                Java & Selenium
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
