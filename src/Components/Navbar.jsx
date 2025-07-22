import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { User, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
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

// Define practice tool categories
const practiceTools = {
  ui: [
    { label: 'Form Test', path: '/practice/form' },
    { label: 'Alert Box', path: '/practice/alert' },
    { label: 'Image Context', path: '/practice/image' },
    { label: 'Browser Tab Opener', path: '/practice/browser' },
    { label: 'Links Testing', path: '/practice/links' },
    { label: 'Authentication', path: '/practice/auth' },
    { label: 'iFrame Testing', path: '/practice/iframe' },
    { label: 'Slider', path: '/practice/slider' },
    { label: 'Resizable', path: '/practice/resizable' },
    { label: 'Drag Drop', path: '/practice/dragdrop' },
    { label: 'Date Picker', path: '/practice/datepicker' },
  ],
  api: [
    { label: 'REST API', path: '/practice/restapi' },
    { label: 'GraphQL', path: '/practice/graphql' },
  ],
  ecommerce: [
    { label: 'Ecommerce Store', path: '/practice/ecommerce' },
  ]
};

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ practice: {}, courses: {} });
  const [searchTerm, setSearchTerm] = useState("");
  const themeContext = useTheme();
  const isDarkMode = themeContext ? themeContext.isDarkMode : false;
  const toggleDarkMode = themeContext ? themeContext.toggleDarkMode : () => {};
  const practiceDropdownRef = useRef(null);
  const dropdownCloseTimerRef = useRef(null);
  const [activePracticeCategory, setActivePracticeCategory] = useState(localStorage.getItem('practiceCategory') || 'ui');


  // User state for auth
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
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

  // Handle dropdown opening and closing with delay
  const handlePracticeDropdownEnter = () => {
    if (dropdownCloseTimerRef.current) {
      clearTimeout(dropdownCloseTimerRef.current);
      dropdownCloseTimerRef.current = null;
    }
    setIsPracticeDropdownOpen(true);
  };

  const handlePracticeDropdownLeave = () => {
    dropdownCloseTimerRef.current = setTimeout(() => {
      setIsPracticeDropdownOpen(false);
    }, 200); // 200ms delay before closing
  };

  const togglePracticeDropdown = () => {
    setIsPracticeDropdownOpen(!isPracticeDropdownOpen);
    setIsCoursesDropdownOpen(false);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
    setIsPracticeDropdownOpen(false);
  };

  const handleCategoryClick = (category) => {
    setActivePracticeCategory(category);
    // Store the category in localStorage so it persists across page navigations
    localStorage.setItem('practiceCategory', category);
    // Navigate to practice page
    navigate('/practice');
    // Close the dropdown
    setIsPracticeDropdownOpen(false);
    // We also need to dispatch a custom event to inform other components
    const event = new CustomEvent('practiceCategoryChanged', { detail: category });
    document.dispatchEvent(event);
  };

  // Get tools based on selected category
  const getFilteredTools = () => {
    return practiceTools[activePracticeCategory] || [];
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
        setIsMenuOpen(false);
      }
    }
  };

  const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return width;
  };

  const width = useWindowSize();
  const isMobile = width < 768;

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

      {/* Main Navbar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 5%',
        gap: '1rem',
        borderBottom: isDarkMode
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(0, 0, 0, 0.1)',
      }}>
        {/* Logo */}
        <div
          style={{
            flex: '1 1 120px',
            cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: '1.5rem',
            background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
          }}
          onClick={() => navigate('/')}
        >
          Journeyto<span style={{ color: '#8c52ff' }}>Automation</span>
        </div>

        {/* Hamburger for Mobile (Single) or Main Nav for Non-Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: isDarkMode ? '#fff' : '#2d3748',
            zIndex: 1001,
            display: isMobile ? 'block' : 'none'
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Main Nav Content (Non-Mobile) */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '0.5rem',
              width: 'auto',
            }}
          >
            {/* Search Bar */}
            <div
              style={{
                flex: '2 1 200px',
                maxWidth: '400px',
                display: 'flex',
                width: '100%',
              }}
            >
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
                  fontSize: '1rem',
                }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '0.5rem',
              width: 'auto',
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
                <div className={userMenuStyles['user-menu']} style={{ position: 'relative' }}>
                  <div
                    className={userMenuStyles['user-avatar']}
                    onClick={() => setShowUserMenu((v) => !v)}
                    title={user.name}
                  >
                    <User size={18} style={{ marginRight: 2 }} />
                  </div>
                  <span
                    className={userMenuStyles['user-name']}
                    onClick={() => setShowUserMenu((v) => !v)}
                  >
                    {user.name.split(' ')[0]}
                  </span>
                  {showUserMenu && (
                    <div className={userMenuStyles['user-menu-dropdown']}>
                      <button
                        className={userMenuStyles['user-menu-dropdown-btn']}
                        onClick={handleLogout}
                      >
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
                      padding: '0.6rem 1.2rem',
                      borderRadius: '50px',
                      border: 'none',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => {
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
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
                      padding: '0.6rem 1.2rem',
                      borderRadius: '50px',
                      border: isDarkMode
                        ? '1.5px solid #8c52ff'
                        : '1.5px solid #ff5757',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => {
                      navigate('/register');
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu (Combined Nav and Sub-Nav) */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            width: '100%',
            height: '100vh',
            backgroundColor: isDarkMode ? '#2d3748' : 'white',
            padding: '1rem',
            zIndex: 1000,
            position: 'fixed',
            top: 0,
            left: 0,
            overflowY: 'auto',
          }}
        >
          {/* Content Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1.5rem',
            width: '100%',
            maxWidth: '400px',
            padding: '1rem',
          }}>
            {/* Search Bar */}
            <div style={{ flex: '1 1 100%', maxWidth: '100%', display: 'flex', width: '100%' }}>
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
                  fontSize: '1rem',
                }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              width: '100%',
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
                <div className={userMenuStyles['user-menu']} style={{ position: 'relative' }}>
                  <div
                    className={userMenuStyles['user-avatar']}
                    onClick={() => setShowUserMenu((v) => !v)}
                    title={user.name}
                  >
                    <User size={18} style={{ marginRight: 2 }} />
                  </div>
                  <span
                    className={userMenuStyles['user-name']}
                    onClick={() => setShowUserMenu((v) => !v)}
                  >
                    {user.name.split(' ')[0]}
                  </span>
                  {showUserMenu && (
                    <div className={userMenuStyles['user-menu-dropdown']}>
                      <button
                        className={userMenuStyles['user-menu-dropdown-btn']}
                        onClick={handleLogout}
                      >
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
                      padding: '0.6rem 1.2rem',
                      borderRadius: '50px',
                      border: 'none',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => {
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
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
                      padding: '0.6rem 1.2rem',
                      borderRadius: '50px',
                      border: isDarkMode
                        ? '1.5px solid #8c52ff'
                        : '1.5px solid #ff5757',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => {
                      navigate('/register');
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>

            {/* Sub-Nav Content */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: '1rem 0',
            }}>
              <a
                onClick={() => {
                  navigate("/Selenium");
                  setIsMenuOpen(false);
                }}
                style={{ color: isDarkMode ? '#fff' : 'inherit', textDecoration: 'none', cursor: 'pointer', fontSize: '1rem' }}
              >
                SELENIUM WITH JAVA
              </a>
              <a
                onClick={() => {
                  navigate("/Playwright");
                  setIsMenuOpen(false);
                }}
                style={{ color: isDarkMode ? '#fff' : 'inherit', textDecoration: 'none', cursor: 'pointer', fontSize: '1rem' }}
              >
                PLAYWRIGHT
              </a>
              <a
                onClick={() => {
                  navigate("/InterviewQuestions");
                  setIsMenuOpen(false);
                }}
                style={{ color: isDarkMode ? '#fff' : 'inherit', textDecoration: 'none', cursor: 'pointer', fontSize: '1rem' }}
              >
                INTERVIEW QUESTIONS
              </a>
              <a
                onClick={() => {
                  navigate("/Blogs");
                  setIsMenuOpen(false);
                }}
                style={{ color: isDarkMode ? '#fff' : 'inherit', textDecoration: 'none', cursor: 'pointer', fontSize: '1rem' }}
              >
                BLOGS
              </a>

              {/* Practice Dropdown */}
              <div 
                className="dropdown-container" 
                style={{ position: 'relative' }}
              >
                <a 
                  onClick={togglePracticeDropdown} 
                  style={{ color: isDarkMode ? '#fff' : 'inherit', textDecoration: 'none', cursor: 'pointer', fontSize: '1rem' }}
                >
                  PRACTICE SITE
                </a>
                {isPracticeDropdownOpen && (
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
                    padding: '0.75rem',
                    width: '95%',
                    overflowY: 'visible',
                    marginTop: '0.5rem',
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      width: '100%',
                    }}>
                                          {['ui', 'api', 'ecommerce'].map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          handleCategoryClick(category);
                          setIsMenuOpen(false);
                        }}
                          style={{
                            background: activePracticeCategory === category
                              ? 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)'
                              : 'transparent',
                            color: activePracticeCategory === category
                              ? '#fff'
                              : (isDarkMode ? '#fff' : '#2d3748'),
                            border: 'none',
                            padding: '0.7rem 1rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: activePracticeCategory === category ? '600' : '500',
                            transition: 'all 0.2s ease',
                            fontSize: '0.95rem',
                            textAlign: 'left',
                            width: '100%',
                            boxShadow: activePracticeCategory === category 
                              ? '0 4px 12px rgba(140, 82, 255, 0.2)' 
                              : 'none',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {category === 'ui' ? (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                              UI Tools
                            </>
                          ) : category === 'api' ? (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/></svg>
                              API Tools
                            </>
                          ) : (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                              E-commerce Tools
                            </>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Courses Dropdown */}
              <div className="dropdown-container courses-container" style={{ position: 'relative' }}>
                <a 
                  className={isCoursesDropdownOpen ? 'active' : ''} 
                  onClick={toggleCoursesDropdown}
                  style={{ color: isDarkMode ? '#fff' : 'inherit', textDecoration: 'none', cursor: 'pointer', fontSize: '1rem' }}
                >
                  UPCOMING COURSES
                </a>
                {isCoursesDropdownOpen && (
                  <div className="dropdown-menu courses-menu" style={{
                    backgroundColor: isDarkMode ? '#2d3748' : 'white',
                    boxShadow: isDarkMode ? '0 4px 6px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.1)',
                    borderRadius: '12px',
                    padding: '0.5rem',
                    minWidth: '160px',
                    marginTop: '0.5rem',
                  }}>
                    <a 
                      onClick={() => {
                        navigate("/course/selenium");
                        setIsCoursesDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                      className="dropdown-item"
                      style={{ color: isDarkMode ? '#fff' : 'inherit', cursor: 'pointer', textDecoration: 'none', fontSize: '0.95rem' }}
                    >
                      Java & Selenium
                    </a>
                    <a 
                      onClick={() => {
                        navigate("/course/playwright");
                        setIsCoursesDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                      className="dropdown-item"
                      style={{ color: isDarkMode ? '#fff' : 'inherit', cursor: 'pointer', textDecoration: 'none', fontSize: '0.95rem' }}
                    >
                      Playwright with JavaScript
                    </a>
                    <a 
                      onClick={() => {
                        navigate("/courseSDET");
                        setIsCoursesDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                      className="dropdown-item"
                      style={{ color: isDarkMode ? '#fff' : 'inherit', cursor: 'pointer', textDecoration: 'none', fontSize: '0.95rem' }}
                    >
                      SDET/Automation Testing Interview Prepration course
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub-Nav (Non-Mobile) */}
      {!isMobile && (
        <div className="sub-nav" style={{
          backgroundColor: isDarkMode ? '#2d3748' : 'white',
          borderBottom: isDarkMode ? '1px solid #4a5568' : '1px solid #e2e8f0',
          padding: '0.75rem 1rem',
          position: 'relative',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}>
            <a
              onClick={() => navigate("/Selenium")}
              style={{ color: isDarkMode ? '#fff' : 'inherit', textDecoration: 'none', cursor: 'pointer' }}
            >
              SELENIUM WITH JAVA
            </a>
            <a
              onClick={() => navigate("/Playwright")}
              style={{ color: isDarkMode ? '#fff' : 'inherit', textDecoration: 'none', cursor: 'pointer' }}
            >
              PLAYWRIGHT
            </a>
            <a
              onClick={() => navigate("/InterviewQuestions")}
              style={{ color: isDarkMode ? '#fff' : 'inherit', textDecoration: 'none', cursor: 'pointer' }}
            >
              INTERVIEW QUESTIONS
            </a>
            <a
              onClick={() => navigate("/Blogs")}
              style={{ color: isDarkMode ? '#fff' : 'inherit', textDecoration: 'none', cursor: 'pointer' }}
            >
              BLOGS
            </a>

            {/* Practice Dropdown */}
            <div 
              className="dropdown-container" 
              style={{ position: 'relative' }}
              onMouseEnter={handlePracticeDropdownEnter}
              onMouseLeave={handlePracticeDropdownLeave}
            >
              <a 
                onClick={togglePracticeDropdown} 
                style={{ color: isDarkMode ? '#fff' : 'inherit', textDecoration: 'none', cursor: 'pointer' }}
              >
                PRACTICE SITE
              </a>
              <DropdownPortal isOpen={isPracticeDropdownOpen}>
                <div 
                  className="dropdown-menu" 
                  style={{
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
                    zIndex: 99999,
                    padding: '0.75rem',
                    width: '200px',
                    overflowY: 'visible',
                  }}
                  ref={practiceDropdownRef}
                  onMouseEnter={handlePracticeDropdownEnter}
                  onMouseLeave={handlePracticeDropdownLeave}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}>
                    {['ui', 'api', 'ecommerce'].map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        style={{
                          background: activePracticeCategory === category
                            ? 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)'
                            : 'transparent',
                          color: activePracticeCategory === category
                            ? '#fff'
                            : (isDarkMode ? '#fff' : '#2d3748'),
                          border: 'none',
                          padding: '0.7rem 1rem',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontWeight: activePracticeCategory === category ? '600' : '500',
                          transition: 'all 0.2s ease',
                          fontSize: '0.95rem',
                          textAlign: 'left',
                          width: '100%',
                          boxShadow: activePracticeCategory === category 
                            ? '0 4px 12px rgba(140, 82, 255, 0.2)' 
                            : 'none',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        onMouseEnter={(e) => {
                          if (activePracticeCategory !== category) {
                            e.currentTarget.style.backgroundColor = isDarkMode 
                              ? 'rgba(255, 255, 255, 0.1)' 
                              : 'rgba(0, 0, 0, 0.05)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activePracticeCategory !== category) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        {category === 'ui' ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                            UI Tools
                          </>
                        ) : category === 'api' ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/></svg>
                            API Tools
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                            E-commerce Tools
                          </>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </DropdownPortal>
            </div>

            {/* Courses Dropdown */}
            <div className="dropdown-container courses-container" style={{ position: 'relative' }}>
              <a 
                className={isCoursesDropdownOpen ? 'active' : ''} 
                onClick={toggleCoursesDropdown}
                style={{ 
                  color: isDarkMode ? '#fff' : 'inherit',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Segoe UI, Roboto, sans-serif',
                  fontSize: '0.95rem'
                }}
              >
                UPCOMING COURSES
              </a>

              <DropdownPortal isOpen={isCoursesDropdownOpen}>
                <div
                  className="dropdown-menu courses-menu"
                  style={{
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
                    top: `${dropdownPosition.courses.top}px`,
                    left: `${dropdownPosition.courses.left}px`,
                    zIndex: 99999,
                    padding: '0.5rem',
                    minWidth: '180px',
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontSize: '0.95rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem'
                  }}
                >
                  {[
                    { label: "Java & Selenium", route: "/course/selenium" },
                    { label: "Playwright with JavaScript", route: "/course/playwright" },
                    { label: "SDET/Automation Testing Interview Prepration course", route: "/courseSDET" }
                  ].map(({ label, route }) => (
                    <a
                      key={route}
                      onClick={() => {
                        navigate(route);
                        setIsCoursesDropdownOpen(false);
                        if (route === "/course/playwright") setIsMenuOpen(false);
                      }}
                      style={{
                        display: 'block',
                        padding: '0.5rem 0.75rem',
                        color: isDarkMode ? '#fff' : '#1a202c',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = isDarkMode ? '#4a5568' : '#f1f1f1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </DropdownPortal>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}