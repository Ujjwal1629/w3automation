import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { User, ChevronRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTheme as useThemeHook } from '../context/ThemeContext';
import userMenuStyles from './NavbarUserMenu.module.css';
import ReactDOM from 'react-dom';

const GlassNavStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
};

// Component for the dropdown that will be rendered in a portal
const DropdownPortal = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    children,
    document.body
  );
};

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ practice: {}, courses: {} });
  const themeContext = useTheme();
  // Only use theme context if it exists (i.e., component is within ThemeProvider)
  const isDarkMode = themeContext ? themeContext.isDarkMode : false;
  const toggleDarkMode = themeContext ? themeContext.toggleDarkMode : () => {};

  // User state for auth
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    // Check for JWT and extract user info (assume JWT payload contains username)
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({ name: payload.username || payload.name || payload.email || 'User' });
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (isPracticeDropdownOpen) {
      const practiceContainer = document.querySelector('.dropdown-container');
      if (practiceContainer) {
        const rect = practiceContainer.getBoundingClientRect();
        setDropdownPosition(prev => ({
          ...prev,
          practice: { top: rect.bottom + 5, left: rect.left }
        }));
      }
    }
  }, [isPracticeDropdownOpen]);

  useEffect(() => {
    if (isCoursesDropdownOpen) {
      const coursesContainer = document.querySelector('.courses-container');
      if (coursesContainer) {
        const rect = coursesContainer.getBoundingClientRect();
        setDropdownPosition(prev => ({
          ...prev,
          courses: { top: rect.bottom + 5, left: rect.left }
        }));
      }
    }
  }, [isCoursesDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setShowUserMenu(false);
    navigate('/');
  };

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
    <nav
      className="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        ...GlassNavStyles,
        backgroundColor: isDarkMode 
          ? 'rgba(26, 32, 44, 0.85)'
          : 'rgba(255, 255, 255, 0.85)',
      }}>
      {/* Modern upper navbar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 5%',
        borderBottom: isDarkMode 
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(0, 0, 0, 0.1)',
      }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <div 
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: '1.5rem',
              background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginRight: '1rem',
              cursor: 'pointer',
              letterSpacing: '-0.02em',
            }}
            onClick={() => navigate('/')}
          >
            Journeyto<span style={{color: '#8c52ff'}}>Automation</span>
          </div>
        </div>

        {/* Search bar with glass effect */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flex: 1,
            maxWidth: '400px',
            margin: '0 2rem',
          }}>
          <input 
            type="search" 
            placeholder="Search JourneyToAutomation" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSearch}
            style={{
              width: '100%',
              padding: '0.75rem 1.25rem',
              borderRadius: '50px',
              border: isDarkMode 
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.1)',
              outline: 'none',
              backgroundColor: isDarkMode 
                ? 'rgba(45, 55, 72, 0.5)'
                : 'rgba(255, 255, 255, 0.5)',
              color: isDarkMode ? '#fff' : '#2d3748',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              transition: 'all 0.3s ease',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          />
        </div>

        {/* Call-to-action buttons with glass effect */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginLeft: 'auto',
        }}>
          <button
            onClick={toggleDarkMode}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: isDarkMode 
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.1)',
              backgroundColor: isDarkMode 
                ? 'rgba(45, 55, 72, 0.5)'
                : 'rgba(255, 255, 255, 0.5)',
              color: isDarkMode ? '#fff' : '#2d3748',
              cursor: 'pointer',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              transition: 'all 0.3s ease',
            }}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {user ? (
            <div className={userMenuStyles['user-menu']} style={{marginLeft: '1rem', position: 'relative'}}>
              <div
                className={userMenuStyles['user-avatar']}
                onClick={() => setShowUserMenu((v) => !v)}
                title={user.name}
              >
                <User size={18} style={{marginRight: 2}} />
                {/* {user.name.split(' ')[0][0]} */}
              </div>
              <span
                className={userMenuStyles['user-name']}
                onClick={() => setShowUserMenu((v) => !v)}
              >
                {user.name.split(' ')[0]}
              </span>
              {showUserMenu && (
                <div className={userMenuStyles['user-menu-dropdown']}>
                  <button className={userMenuStyles['user-menu-dropdown-btn']} onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
                  color: '#fff',
                  padding: '0.75rem 1.3rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '1rem',
                  boxShadow: '0 2px 8px rgba(140, 82, 255, 0.10)',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => navigate('/login')}
              >
                Sign In
              </button>
              <button 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: isDarkMode 
                    ? 'rgba(45, 55, 72, 0.5)'
                    : 'rgba(255, 255, 255, 0.5)',
                  color: isDarkMode ? '#fff' : '#2d3748',
                  padding: '0.75rem 1.3rem',
                  borderRadius: '50px',
                  border: isDarkMode 
                    ? '1.5px solid #8c52ff'
                    : '1.5px solid #ff5757',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '1rem',
                  boxShadow: '0 2px 8px rgba(255, 87, 87, 0.10)',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => navigate('/register')}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Original sub-nav */}
      <div className="sub-nav" style={{
        backgroundColor: isDarkMode ? '#2d3748' : 'white',
        borderBottom: isDarkMode ? '1px solid #4a5568' : '1px solid #e2e8f0',
      }}>
        <a onClick={() => navigate("/Selenium")} style={{ color: isDarkMode ? '#fff' : 'inherit' }}>SELENIUM WITH JAVA</a>
        <a onClick={() => navigate("/Playwright")} style={{ color: isDarkMode ? '#fff' : 'inherit' }}>PLAYWRIGHT</a>
        <a onClick={() => navigate("/InterviewQuestions")} style={{ color: isDarkMode ? '#fff' : 'inherit' }}>INTERVIEW QUESTIONS</a>
        <a onClick={() => navigate("/Blogs")} style={{ color: isDarkMode ? '#fff' : 'inherit' }}>BLOGS</a>
        <div className="dropdown-container">
          <a 
            onClick={togglePracticeDropdown} 
            style={{ color: isDarkMode ? '#fff' : 'inherit' }}>
            PRACTICE SITE
          </a>
          <DropdownPortal isOpen={isPracticeDropdownOpen}>
            <div className="dropdown-menu" style={{
              backgroundColor: isDarkMode 
                ? 'rgba(45, 55, 72, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
              border: isDarkMode 
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
              position: 'fixed',
              top: `${dropdownPosition.practice.top}px`,
              left: `${dropdownPosition.practice.left}px`,
              zIndex: 99999
            }}>
              <a 
                onClick={() => {
                  navigate("/AuthPractice");
                  setIsPracticeDropdownOpen(false);
                }} 
                style={{ color: isDarkMode ? '#fff' : 'inherit' }}>
                Form Test
              </a>
              <a 
                onClick={() => {
                  navigate("/AlertTest");
                  setIsPracticeDropdownOpen(false);
                }} 
                style={{ color: isDarkMode ? '#fff' : 'inherit' }}>
                Alert Box
              </a>
              <a 
                onClick={() => {
                  navigate("/ImageTest");
                  setIsPracticeDropdownOpen(false);
                }} 
                style={{ color: isDarkMode ? '#fff' : 'inherit' }}>
                Image Context
              </a>
              <a 
                onClick={() => {
                  navigate("/BrowserWindowTabOpener");
                  setIsPracticeDropdownOpen(false);
                }} 
                style={{ color: isDarkMode ? '#fff' : 'inherit' }}>
                Browser Tab Opener
              </a>
              <a 
                onClick={() => {
                  navigate("/LinksTesting");
                  setIsPracticeDropdownOpen(false);
                }} 
                style={{ color: isDarkMode ? '#fff' : 'inherit' }}>
                Links Testing
              </a>
              <a 
                onClick={() => {
                  navigate("/Authentication");
                  setIsPracticeDropdownOpen(false);
                }} 
                style={{ color: isDarkMode ? '#fff' : 'inherit' }}>
                Authentication
              </a>
            </div>
          </DropdownPortal>
        </div>

        {/* Upcoming Courses Dropdown */}
        <div className="dropdown-container courses-container">
          <a 
            className={isCoursesDropdownOpen ? 'active' : ''} 
            onClick={toggleCoursesDropdown}
            style={{ color: isDarkMode ? '#fff' : 'inherit' }}
          >
            UPCOMING COURSES
          </a>
          <DropdownPortal isOpen={isCoursesDropdownOpen}>
            <div className="dropdown-menu courses-menu" style={{
              backgroundColor: isDarkMode ? '#2d3748' : 'white',
              boxShadow: isDarkMode ? '0 4px 6px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.1)',
              position: 'fixed',
              top: `${dropdownPosition.courses.top}px`,
              left: `${dropdownPosition.courses.left}px`,
              zIndex: 99999
            }}>
              <a 
                onClick={() => {
                  navigate("/syllabus-java-selenium");
                  setIsCoursesDropdownOpen(false);
                }}
                className="dropdown-item"
                style={{ color: isDarkMode ? '#fff' : 'inherit' }}
              >
                Java & Selenium
              </a>
            </div>
          </DropdownPortal>
        </div>
      </div>
    </nav>
  );
}