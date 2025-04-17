import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLink, FaLinkedin, FaStar } from 'react-icons/fa';
import './CourseDetailPage.css';
import bg2 from '../../assets/bg5B.jpg'
import instructorImg from '../../assets/profilePic.jpg';

const CourseDetailPage = () => {
  const navigate = useNavigate();
  const [expandedSyllabus, setExpandedSyllabus] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  // Sample dynamic data (this could come from an API)
  const courseData = {
    title: "SELENIUM WITH JAVA 2025 COURSE DETAILS",
    description: "This course is designed to provide students with a comprehensive understanding of Selenium WebDriver using Java. By the end of the course, students will be able to automate web applications, write robust test scripts, and implement test automation frameworks.",
    enrolled: 150,
    backgroundImage: bg2,
    stats: {
      'Live - Projects':'2',
      lectures: 32,
      duration: "2.5 Months",
      Certification:'Yes',
      Recordings:'Lifetime access',
      'Mock Test':"Weekly",
      'Skill Level': "All levels",
      language: "English",
      Placement: "Assistance",
      assessments: "Yes"
    },
    schedule: {
      classTiming: {
        indian: "07:30 AM IST",
        us: "10:00 PM GMT",
        uk: "03:00 AM GMT",
      },
      demo: "First 2 sessions are free!",
      date:'2nd May 2025',
      classDate:'5th May 2025 Onwards',
      days:'Monday to Thursday',
      features: [
        "Live Classes",
        "Recorded Sessions",
        "Resume Assistance",
        "Interview Prep",
      ]
    },
    syllabus: [
      {
        title: "Core Java Topics Covered in Course",
        topics: [
          "Installing Java, History and Features Of Java",
          "Classes and Objects",
          "Data Types, Variables, Operators",
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
          "Understanding of SelectorsHub browser extension"
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
          "ReportNG and Allure Reports",
          "Page Object Model Design Pattern",
          "Keyword Driven Framework",
          "Data Driven Framework"
        ]
      },
      {
        title: "REST Assured API Automation",
        topics: [
          "Adding REST Libraries to the Maven Project",
          "Sample Test Case Scripting",
          "Performing POST Requests",
          "Performing GET Requests",
          "Performing DELETE Requests",
          "Request and Response Spec Builder", 
          "POJO Concepts",
          "GraphQL Automation",
          "End-to-End Scenarios using REST Assured",
          "Parsing JSON and XML Responses using JSON Path and XML Path",
          "Validating JSON Schema",
          "BDD and Non-BDD Approaches",
          "Serialization and Deserialization of Requests and Responses"
        ]
      },
      {
        title: "Basics of the Cucumber Framework",
        topics: [
          "Introduction to Cucumber",
          "Creating a New Feature and File Syntax",
          "Runner File and Creating Step Definitions",
          "Combining TESTNG with Cucumber",
          "Executing Cases using Runner File",
          "Preparing the Scenario Name based on Tags",
          "Scenario Outline, Scenario Templates, and Different Cucumber Tags and Annotations",
          "Sharing Reports over the Cucumber Cloud",
          "Data Tables",
          "Parallel Testing"
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
      },
    ],
    pricing: {
      price: {
        indian: "8000 INR",
        uk: "100 EUROS",
        us: "120 USD"
      },
      contact: "+91 8810201221",
      linkedin: "https://www.linkedin.com/in/hemant-gandhi254/"
    },
    instructor: {
      name: "Hemant Gandhi",
      title:'QA Automation Lead and Trainer',
      bio: "With over 10 years of experience in the software testing industry. He has worked extensively with various automation testing tools and frameworks, specializing in delivering high-quality software solutions. His passion for quality assurance and automation drives him to share knowledge and help others excel in this field.",
      students: '200',
      ratings: '4.2',
      image: instructorImg
    }, 
    testimonials: [
      {
      userName: "Supriya D",
      userReview: "I recently completed Hemant Gandhi's automation testing class on Java and Selenium, and it was outstanding. The instructor made complex topics easy to understand, and the hands-on exercises were incredibly valuable."
      },
      {
      userName: "Srikanth chivukula",
      userReview: "I really appreciate you for taking time from daily routines and providing training on Java and Selenium. The topics covered are good and detailed. The support provided post sessions is also excellent.!"
      },
      {
      userName: "Mayooran Thiruchselvam",
      userReview: "The session was highly engaging and insightful, providing a comprehensive understanding session. I particularly appreciated how the presentation was structured, making complex concepts easy to understand."
      }
    ],
    faqs: [
        {
          question: "Is this course suitable for beginners?",
          answer: "Yes, this course starts with the basics and gradually moves to advanced topics."
        },
        {
          question: "Will I get hands-on experience?",
          answer: "Absolutely! The course includes multiple assignments and a real-world project."
        },
        {
          question: "What if I miss a class?",
          answer: "Recorded sessions will be available for all lectures with lifetime access."
        },
        {
          question: "Do I need to install any software?",
          answer: "Yes, you will need to install Java, Eclipse, and Selenium WebDriver. Detailed instructions will be provided in the class as well for both macOS and Windows."
        }
    ]
  };

  const navigateToEnroll = () =>{
    navigate('/userForm');
  }

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
          <p className="instructor-name-header"><strong>Instructor</strong>: {courseData.instructor.name}</p>
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
            <h3 className='schedule-title-class' style={{paddingLeft: '20px'}}>Timings & Features</h3>
            <div className="schedule-content">
              {/* Demo Sessions Section */}
              <p className="demo-session">
                <strong className="demo-session-label">Demo Sessions:</strong>
                <span className="demo-session-value">{courseData.schedule.demo}</span>
              </p>

              {/* Demo Schedule Section */}
              <div className="timings">
                <p className="schedule-heading">
                  <strong>Demo Schedule:</strong>
                  <span className="schedule-date">{courseData.schedule.date}</span>
                </p>

                {/* Time Zones Section */}
                <div className="timezone-wrapper">
                  <h3 className="timezone-heading">Time Zones</h3>
                  <div className="timezone-grid">
                    {Object.entries(courseData.schedule.classTiming).map(([key, value]) => (
                      <p className="timezone-item" key={key}>
                        <span className="timezone-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                        <span className="timezone-value">{value}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Class Schedule Section */}
              <div className="timings">
                <p className="schedule-heading">
                  <strong>Class Schedule:</strong>
                  <span className="schedule-date">{courseData.schedule.classDate}</span>
                  <span className="schedule-days">{courseData.schedule.days}</span>
                </p>

                <div className="timezone-wrapper">
                <h3 className="timezone-heading">Time Zones</h3>
                <div className="timezone-grid">
                  {Object.entries(courseData.schedule.classTiming).map(([key, value]) => (
                    <p className="timezone-item" key={key}>
                      <span className="timezone-label">{key.toUpperCase()}:</span>
                      <span className="timezone-value">{value}</span>
                    </p>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="pricing-card">
            <h3>Course Pricing</h3>
            <div className="pricing-content">
              <div className="prices">
                <p className="price"><strong>INDIA</strong>: {courseData.pricing.price.indian}</p>
                <p className="price"><strong>UK:</strong> {courseData.pricing.price.uk}</p>
                <p className="price"><strong>US:</strong> {courseData.pricing.price.us}</p>
              </div>
              <p style={{display:'grid'}}><strong style={{marginBottom:7}}>For Payment Or Any Other Query Whatsapp on:</strong> {courseData.pricing.contact}</p>
              <button className="enroll-btn" onClick={navigateToEnroll}>Enroll Now</button>
            </div>
          </div>
        </aside>
      </section>

      <section className="instructor-section">
      <h2 className="section-title">About Instructor</h2>
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
        {/* Rating */}
        <div className="rating-item">
          <div className="tooltip-wrapper">
            <FaStar 
              size={24} 
              color="#ffc107" 
              className="icon"
            />
            <span className="tooltip-text">Rating</span>
          </div>
          <span className="rating-number">{courseData.instructor.ratings}</span>
        </div>

        {/* Students */}
        <div className="rating-item">
          <div className="tooltip-wrapper">
            <FaUser 
              size={24} 
              color="#ffc107" 
              className="icon"
            />
            <span className="tooltip-text">Students Trained</span>
          </div>
          <span className="student-number">{courseData.instructor.students}</span>
        </div>

        {/* LinkedIn */}
        <div className="linkedin-wrapper">
          <a href={courseData.pricing.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color="#0e76a8" />
            <span className="tooltip-text">View LinkedIn Profile</span>
          </a>
        </div>
      </div>
        </div>
      </div>
      </section>

      <section className="testimonials-section-coursePage">
      <h2 className="testimonials-heading-coursePage">What Our Students Say</h2>
      <div className="testimonials-container-coursePage">
        {courseData.testimonials.map((testimonial, index) => (
          <div className="testimonial-card-coursePage" key={index}>
            <h3 className="username-coursePage">{testimonial.userName}</h3>
            <p className="user-review-coursePage">{testimonial.userReview}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="faq-section">
      <h2 className="faq-title">
        <span className="faq-highlight">Got Questions?</span> We've Got Answers!
      </h2>
      <div className="faq-container">
        {courseData.faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    </div>
  );
};

export default CourseDetailPage;