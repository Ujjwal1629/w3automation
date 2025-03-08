import React, { useState } from 'react';
import { FaUser, FaLink, FaLinkedin } from 'react-icons/fa';
import './CourseDetailPage.css';
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg5B.jpg'
import { useNavigate } from 'react-router-dom';

const CourseDetailPage = () => {
  const navigate = useNavigate();
  const [expandedSyllabus, setExpandedSyllabus] = useState(null);

  // Sample dynamic data (this could come from an API)
  const courseData = {
    title: "SELENIUM WITH JAVA 2025 COURSE DETAILS",
    description: "This course is designed to provide students with a comprehensive understanding of Selenium WebDriver using Java. By the end of the course, students will be able to automate web applications, write robust test scripts, and implement test automation frameworks.",
    enrolled: 521000,
    courseImage: bg1,
    backgroundImage: bg2,
    stats: {
      lectures: 95,
      'Mock Test':"Yes",
      quiz: 0,
      duration: "30 hours",
      'Skill Level': "All levels",
      language: "English",
      Placement: "Assistance",
      students: 1100,
      assessments: "Yes"
    },
    schedule: {
      classTiming: {
        indian: "10:00 AM IST",
        uk: "9:00 AM GMT",
        us: "8:00 AM EST"
      },
      demo: "First 2 sessions are free!",
      features: [
        "Live Classes",
        "Recorded Sessions",
        "Resume Assistance",
        "Interview Prep",
        "Course Syllabus"
      ]
    },
    syllabus: [
      {
        title: "Core Java Topics Covered in Course",
        topics: [
          "Introduction to Core Java",
          "Classes and Objects",
          "Basic Java Programming and Features",
          "Strings",
          "Methods - Introduction",
          "Predefined Method - MathRandom Class",
          "Methods - Static and Non Static",
          "If and Else Statements",
          "For Loops",
          "Nested Loops",
          "Break and Continue",
          "Switch cases",
          "Do While Loops",
          "Arrays 2D and 3D",
          "Java Keywords - this, static, super and final",
          "OOPS - Static and Non Static",
          "Exception Handling",
          "Packages and Access Modifiers",
          "Java Collections - ArrayList, HashMap, HashSet"
        ]
      },
      {
        title: "Introduction to Selenium",
        topics: [
          "What is Test Automation?",
          "Why Test Automation?",
          "Types of Testing Tools",
          "Effective Use of Tools - potential benefits and risks",
          "Difference between manual and Automation.",
          "The automated Testing process"
        ]
      },
      {
        title: "Locators",
        topics: [
          "Locating elements using ID, Name, link and Xpath, Relative locators in Selenium 4.0",
          "Understanding of ChroPath and SelectorsHub"
        ]
      },
      {
        title: "Selenium Webdriver",
        topics: [
          "WebDriver Introduction",
          "Selenium Webdriver Basics and Architecture",
          "WebElement, Explicit and Implicit Wait",
          "Handling MouseOvers, drag and drop and other gestures",
          "Alerts and Actions",
          "Iframes, tabs and popups handling",
          "Handling CheckBoxes and Alerts",
          "Xpath vs CSS, Actions",
          "Window Handling, JavaScriptExecutor, Properties"
        ]
      },
      {
        title: "Advance Selenium Webdriver",
        topics: [
          "Handling JavaScript alerts and Keyboard Events",
          "Maven, DB Connectivity and TestNG",
          "POI JARS",
          "Log4j API",
          "TestNG - Parameterization, groups, testsuites etc",
          "Extent Reports and Allure Reports",
          "Page Object Model Design Pattern",
          "Keyword Driven Framework",
          "Data Driven Framework"
        ]
      },
      {
        title: "Version Control",
        topics: [
          "Git",
          "GitHub",
          "Github Desktop"
        ]
      },
      {
        title: "CI / CD - Jenkins Pipeline",
        topics: [
          "Continuous Integration using Jenkins and GIT on EC2 Instance",
          "Configuring the CI CD Pipeline",
          "Running the pipeline from Jenkins File"
        ]
      }
    ],
    pricing: {
      price: {
        indian: "8000 INR",
        uk: "100 EUROS",
        us: "120 USD"
      },
      contact: "+1-555-0123",
      linkedin: "https://www.linkedin.com/in/hemant-gandhi254/"
    },
    instructor: {
      name: "Hemant Gandhi",
      bio: "10+ years industry experience in automation testing",
      image: bg1
    }
  };

  const navigateToEnroll = () =>{
    navigate('/userForm');
  }

  return (
    <div className="course-detail-page">

      {/* Header Section  */}
      <header className="course-header" style={{ backgroundImage: `url(${courseData.backgroundImage})` }}>
        <div className="header-content">
          <h1 className="course-title">
            {courseData.title.split(" ").slice(0, 4).join(" ")}{" "}
            <span>{courseData.title.split(" ").slice(4).join(" ")}</span>
          </h1>
          <p className="course-desc">{courseData.description}</p>
          <p className="instructor-name"><strong>Instructor</strong>: {courseData.instructor.name}</p>
          <p className="enrollment">
            {courseData.enrolled.toLocaleString()} students enrolled already
          </p>
        </div>
      </header>

      {/* Middle Section */}
      <section className="course-middle">
        <div className="middle-content">
          
          {/* Course Stats */}
          <div className="stats-grid">
            {Object.entries(courseData.stats).map(([key, value]) => (
              <div key={key} className="stat-card card-3d">
                <span className="stat-label">{key}</span>
                <span className="stat-value">{value}</span>
              </div>
            ))}
          </div>

          {/* Syllabus Section */}
          <div className="syllabus-section">
            <h2>Course Syllabus</h2>
            {courseData.syllabus.map((item, index) => (
              <div key={index} className="syllabus-item card-3d">
                <div 
                  className="syllabus-header"
                  onClick={() => setExpandedSyllabus(
                    expandedSyllabus === item.title ? null : item.title
                  )}
                >
                  <h3>{item.title}</h3>
                  <span className="expand-btn">
                    {expandedSyllabus === item.title ? '-' : '+'}
                  </span>
                </div>
                {expandedSyllabus === item.title && (
                  <ul className="syllabus-topics">
                    {item.topics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <aside className="pricing-sidebar card-3d">
          {/* Schedule Card */}
          <div className="schedule-card">
            <h3>Timings & Features</h3>
            <div className="schedule-content">
              <div className="timings">
                <p style={{ color: '#ffffff'}}><strong>Class Schedule:</strong></p>
                <p>India: {courseData.schedule.classTiming.indian}</p>
                <p>UK: {courseData.schedule.classTiming.uk}</p>
                <p>US: {courseData.schedule.classTiming.us}</p>
              </div>
              <p>
                <strong style={{ color:'#ffffff'}}>Demo Sessions:</strong> {courseData.schedule.demo}
              </p>
              <div className="features-list">
                <h4>Salient Features:</h4>
                <ul>
                  {courseData.schedule.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="pricing-card">
            <h3>Course Pricing</h3>
            <div className="pricing-content">
              <div className="prices">
                <p className="price">India: {courseData.pricing.price.indian}</p>
                <p className="price">UK: {courseData.pricing.price.uk}</p>
                <p className="price">US: {courseData.pricing.price.us}</p>
              </div>
              <p><strong>Contact:</strong> {courseData.pricing.contact}</p>
              <a 
                href={courseData.pricing.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                <FaLinkedin size={24} />
              </a>
              <button className="enroll-btn" onClick={navigateToEnroll}>Enroll Now</button>
            </div>
          </div>
        </aside>
      </section>

      <section className="instructor-section">
      <h2 className="instructor-title">About Instructor</h2>
      <div className="instructor-container">
        <div className="instructor-img">
          <img src={courseData.instructor.image} alt={courseData.instructor.name} className="instructor-img" />
          <div className="img-circle"></div> {/* Placeholder for circular border */}
        </div>
        <div className="instructor-info">
          <h3 className="instructor-name">{courseData.instructor.name}</h3>
          <p className="instructor-title">{courseData.instructor.title}</p>
          <p className="instructor-bio">{courseData.instructor.bio}</p>
          <div className="ratings">
            <div className="rating-item">
              <FaUser size={24} color="#ffc107" /> {/* User icon */}
              <span className="rating-number">{courseData.instructor.ratings}</span>
            </div>
            <div className="rating-item">
              <FaLink size={24} color="#ffc107" /> {/* Link icon */}
              <span className="student-number">{courseData.instructor.students}</span>
            </div>
          </div>
          <a href={courseData.instructor.linkedin} className="linkedin-link" target="_blank" rel="noopener noreferrer">
            <FaLink size={24} color="#0e76a8" /> {/* LinkedIn icon */}
            LinkedIn Profile
          </a>
        </div>
      </div>
      </section>

      {/* Additional Sections */}
      <section className="video-section card-3d">
        <h2>Sample Video</h2>
        {/* Add video player here */}
      </section>

      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        {/* Add testimonial cards */}
      </section>

      <section className="faq-section">
        <h2>FAQs</h2>
        {/* Add accordion-style FAQs */}
      </section>
    </div>
  );
};

export default CourseDetailPage;