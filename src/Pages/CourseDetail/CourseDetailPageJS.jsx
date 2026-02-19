import React, { useState } from 'react';
import { FaCheck, FaPlay, FaChevronDown, FaChevronUp, FaVideo, FaCalendarAlt, FaLaptopCode, FaRocket, FaProjectDiagram, FaUserTie, FaRobot, FaChartLine, FaSitemap, FaArrowRight } from 'react-icons/fa';
import './CourseDetailPageAI.css';
import certImage from '../../assets/certificate.png'; 
import previewImage from '../../assets/sdet2.jpg'

const CourseDetailPageAI = () => {
  // State to manage expanded chapters (all expanded by default)
  const [expandedChapters, setExpandedChapters] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  const toggleChapter = (index) => {
    setExpandedChapters(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

const whatYouWillLearn = [
  "JavaScript & TypeScript Mastery: Build strong foundations with async/await, types, and modern ES6+.",
  "Playwright Core Concepts: Master locators, assertions, fixtures, and test architecture.",
  "Advanced UI Automation: Handle forms, frames, dialogs, multi-tabs, and complex workflows.",
  "Scalable Framework Design: Implement POM and reusable fixtures for maintainable automation.",
  "Data-Driven Testing: Use JSON/CSV, configuration management, and test tagging effectively.",
  "API Automation: Test REST APIs with authentication and robust response validation.",
  "Debugging & Reporting: Use Inspector, Trace Viewer, HTML & Allure reports confidently.",
  "CI/CD & AI Integration: Integrate with GitHub Actions, Jenkins, and leverage AI-powered test generation."
];



const courseContent = [
  {
    title: "Module 1: JavaScript & TypeScript Foundations",
    desc: "Strong programming fundamentals required for Playwright automation.",
    sections: [
      {
        title: "JavaScript Basics",
        items: [
          "Variables, data types, functions, and scope.",
          "Modern JS syntax: arrow functions, destructuring, template literals.",
          "Modules: ES6 imports/exports in Node.js."
        ]
      },
      {
        title: "TypeScript Essentials",
        items: [
          "Types, interfaces, and type annotations.",
          "Writing strongly-typed automation scripts.",
          "Best practices for scalable TypeScript projects."
        ]
      },
      {
        title: "Async Programming",
        items: [
          "Promises and async/await fundamentals.",
          "Error handling strategies.",
          "Using async/await effectively in automation workflows."
        ]
      }
    ]
  },
  {
    title: "Module 2: Playwright Fundamentals & Setup",
    desc: "Getting started with Playwright using TypeScript.",
    sections: [
      {
        title: "Introduction & Setup",
        items: [
          "Introduction to Playwright with TypeScript.",
          "Installation and project configuration.",
          "Understanding Playwright architecture."
        ]
      },
      {
        title: "First Test & Core Concepts",
        items: [
          "Writing your first Playwright test.",
          "Page fixtures deep dive.",
          "Test structure and execution flow."
        ]
      }
    ]
  },
  {
    title: "Module 3: Locators, Assertions & UI Interactions",
    desc: "Mastering element identification and user interactions.",
    sections: [
      {
        title: "Locators & Assertions",
        items: [
          "CSS, XPath, text, ID locator strategies.",
          "Advanced locators: has, hasText, hasNot.",
          "getBy methods and best practices.",
          "Assertions with expect()."
        ]
      },
      {
        title: "UI Interactions",
        items: [
          "Form handling and button actions.",
          "Mouse hover, drag & drop, keyboard actions.",
          "Radio buttons, checkboxes, dropdowns, file uploads."
        ]
      }
    ]
  },
  {
    title: "Module 4: Advanced Browser Handling",
    desc: "Working with complex browser scenarios.",
    sections: [
      {
        title: "Dialogs & Frames",
        items: [
          "Handling alerts, confirms, and prompts.",
          "iFrame and frame interactions."
        ]
      },
      {
        title: "Multi-Page Scenarios",
        items: [
          "Tabs and child windows.",
          "Managing multiple browser contexts."
        ]
      }
    ]
  },
  {
    title: "Module 5: Framework Design & Test Architecture",
    desc: "Building scalable and maintainable automation frameworks.",
    sections: [
      {
        title: "Page Object Model (POM)",
        items: [
          "Designing scalable test frameworks.",
          "Integrating POM with Playwright fixtures."
        ]
      },
      {
        title: "Fixtures, Hooks & Organization",
        items: [
          "Custom fixtures for reusable setups.",
          "beforeEach, afterEach, beforeAll, afterAll.",
          "Test grouping with describe() and annotations."
        ]
      }
    ]
  },
  {
    title: "Module 6: Data-Driven Testing & Configuration",
    desc: "Managing test data and execution configuration effectively.",
    sections: [
      {
        title: "Configuration Deep Dive",
        items: [
          "playwright.config.ts configuration.",
          "Environment setup and test filtering."
        ]
      },
      {
        title: "Data-Driven Testing",
        items: [
          "Using JSON and CSV data sources.",
          "Parameterized tests and data-driven fixtures."
        ]
      }
    ]
  },
  {
    title: "Module 7: Debugging & Developer Tools",
    desc: "Efficient debugging and AI-powered development tools.",
    sections: [
      {
        title: "Debugging Tools",
        items: [
          "Playwright Inspector and Trace Viewer.",
          "UI mode execution.",
          "VS Code debugging with breakpoints."
        ]
      },
      {
        title: "Code Generation & AI Assistance",
        items: [
          "Codegen for recording tests.",
          "Auto-locator features.",
          "Using GitHub Copilot for AI-assisted test generation."
        ]
      }
    ]
  },
  {
    title: "Module 8: API Testing with Playwright",
    desc: "Automating REST APIs using Playwright.",
    sections: [
      {
        title: "API Fundamentals",
        items: [
          "HTTP methods: GET, POST, PUT, PATCH, DELETE.",
          "Request configuration and authentication.",
          "Response validation and assertions."
        ]
      },
      {
        title: "Advanced API Testing",
        items: [
          "BaseURL and headers management.",
          "Token-based authentication.",
          "Building reusable API test utilities."
        ]
      }
    ]
  },
  {
    title: "Module 9: Reporting & Test Execution",
    desc: "Test reporting, artifacts, and optimized execution.",
    sections: [
      {
        title: "Built-in Reporting",
        items: [
          "HTML, JSON, JUnit, list, dot reporters.",
          "Screenshots, videos, and trace attachments."
        ]
      },
      {
        title: "Advanced Reporting",
        items: [
          "Allure reporting integration.",
          "Authentication state reuse to skip login."
        ]
      }
    ]
  },
  {
    title: "Module 10: DevOps & CI/CD Integration",
    desc: "Integrating Playwright automation into CI/CD pipelines.",
    sections: [
      {
        title: "Version Control & Collaboration",
        items: [
          "Git basics: push, clone, pull requests.",
          "GitHub repository management."
        ]
      },
      {
        title: "CI/CD Pipelines",
        items: [
          "GitHub Actions CI setup.",
          "Jenkins integration.",
          "Cross-browser execution in CI environments."
        ]
      }
    ]
  },
  {
    title: "Module 11: AI-Powered Testing with Playwright",
    desc: "Leveraging AI tools to enhance automation productivity.",
    sections: [
      {
        title: "AI Concepts in Automation",
        items: [
          "Understanding AI assistants in testing.",
          "MCP servers and AI automation workflows."
        ]
      },
      {
        title: "Copilot + Playwright",
        items: [
          "Setting up GitHub Copilot.",
          "Generating test cases using AI.",
          "Best practices for AI-assisted automation."
        ]
      }
    ]
  }
];


  return (
    <div className="ai-course-page">
      
      {/* Hero Section */}
      <section className="ai-hero-section">
        <div className="ai-container">
          <div className="ai-hero-content">
            <span className="ai-badge">Mostly Popular</span>
            <h1 className="ai-hero-title">Playwright with TypeScript</h1>
            <p className="ai-hero-subtitle">
  Master Playwright with TypeScript, build scalable automation frameworks, and integrate API, CI/CD, and AI-powered testing.
</p>
            
            <div className="ai-stats-row">
        <div className="ai-stat-item">
          <FaCalendarAlt className="ai-stat-icon" />
          <span className="ai-stat-value">2.5</span>
          <span className="ai-stat-label">Months</span>
        </div>

        <div className="ai-stat-item">
          <FaVideo className="ai-stat-icon" />
          <span className="ai-stat-value">32</span>
          <span className="ai-stat-label">Lectures</span>
        </div>

        <div className="ai-stat-item">
          <FaLaptopCode className="ai-stat-icon" />
          <span className="ai-stat-value">2</span>
          <span className="ai-stat-label">Projects</span>
        </div>

        <div className="ai-stat-item">
          <FaProjectDiagram className="ai-stat-icon" />
          <span className="ai-stat-value">12+</span>
          <span className="ai-stat-label">Modules</span>
        </div>

        <div className="ai-stat-item">
          <FaRocket className="ai-stat-icon" />
          <span className="ai-stat-value">AI</span>
          <span className="ai-stat-label">Powered Testing</span>
        </div>
      </div>


            <div className="ai-hero-actions">
              <button
                className="ai-btn-primary"
                // onClick={() =>
                //   window.open(
                //     "https://zoom.us/meeting/register/Xaq9WQf9Q628pcZmxXz-Jw",
                //     "_blank"
                //   )
                // }
              >
                <FaPlay size={12} /> Start Learning
              </button>
            </div>
          </div>

          <div className="ai-hero-media">
            <div className="ai-media-wrapper">
              <img src={previewImage} alt="Course Preview" className="ai-preview-img" />
              <div className="ai-play-overlay">
                <FaPlay color="white" size={24} style={{marginLeft: '4px'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="ai-section">
        <div className="ai-container">
          <h2 className="ai-section-title">What you'll learn</h2>
          <div className="ai-learn-grid">
            {whatYouWillLearn.map((item, index) => (
              <div className="ai-learn-item" key={index}>
                <div className="ai-check-icon"><FaCheck /></div>
                <p className="ai-learn-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content Accordion */}
      <section className="ai-content-section">
        <div className="ai-container">
          <h2 className="ai-section-title">Course Content</h2>
          <div className="ai-accordion">
            {courseContent.map((week, index) => (
              <div className="ai-accordion-item" key={index}>
                <div className="ai-accordion-header" onClick={() => toggleChapter(index)}>
                  <span className="ai-chapter-num">{String(index + 1).padStart(2, '0')}</span>
                  <div className="ai-chapter-info">
                    <h3 className="ai-chapter-title">{week.title}</h3>
                    <p className="ai-chapter-desc">{week.desc}</p>
                  </div>
                  <div className="ai-chapter-meta">
                    {expandedChapters.includes(index) ? <FaChevronUp style={{marginLeft: '1rem', color: '#94a3b8'}} /> : <FaChevronDown style={{marginLeft: '1rem', color: '#94a3b8'}} />}
                  </div>
                </div>
                
                {expandedChapters.includes(index) && (
                  <div className="ai-lesson-list">
                    {week.sections.map((section, sIdx) => (
                      <div key={sIdx} className="ai-syllabus-section">
                        <h4>{section.title}</h4>
                        <ul>
                          {section.items.map((item, iIdx) => (
                            <li key={iIdx}>
                              {item.includes(':') ? (
                                <span>
                                  <strong>{item.split(':')[0]}:</strong>
                                  {item.substring(item.indexOf(':') + 1)}
                                </span>
                              ) : item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="ai-cert-section">
        <div className="ai-cert-container">
          <div className="ai-cert-text">
            <h2 className="ai-section-title" style={{textAlign: 'left', marginBottom: '1rem'}}>
              What you'll get
            </h2>
            <p className="ai-intro-text">
              Earn a Certificate of Completion from JourneyToAutomation upon completing the course.
            </p>
            <div className="ai-cert-highlights">
              <div className="ai-highlight-item">
                <FaCheck className="ai-blue-check" />
                <span>Professional certification to showcase your skills</span>
              </div>
              <div className="ai-highlight-item">
                <FaCheck className="ai-blue-check" />
                <span>Downloadable PDF to share in social networks</span>
              </div>
            </div>
            
            <button
              className="ai-btn-primary"
              style={{ marginTop: '2rem' }}
              onClick={() =>
                window.open(
                  "https://zoom.us/meeting/register/Xaq9WQf9Q628pcZmxXz-Jw",
                  "_blank"
                )
              }
            >
              Interested
            </button>
          </div>
          <div className="ai-cert-preview">
            {/* Using a placeholder or the uploaded image if accessible, but for now a simple styled div or generic image */}
            <img src={certImage} alt="Certificate Preview" className="ai-certificate-img" onError={(e) => {e.target.onerror = null; e.target.src='https://via.placeholder.com/600x400?text=Certificate+Preview'}} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPageAI;