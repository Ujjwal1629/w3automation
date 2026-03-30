import React, { useState } from 'react';
import {
  FaCheck,
  FaPlay,
  FaChevronDown,
  FaChevronUp,
  FaVideo,
  FaCalendarAlt,
  FaLaptopCode,
  FaRocket,
  FaProjectDiagram,
  FaUserTie,
  FaRobot,
  FaChartLine,
  FaSitemap,
  FaArrowRight,
} from 'react-icons/fa';
import './CourseDetailPageAI.css';
import certImage from '../../assets/certificate.png';
import previewImage from '../../assets/ai_test_automation_cover.png';

const CourseDetailPageAIPowered = () => {
  // State to manage expanded chapters (all expanded by default)
  const [expandedChapters, setExpandedChapters] = useState([
    0, 1, 2, 3, 4, 5, 6,
  ]);

  const toggleChapter = (index) => {
    setExpandedChapters((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const whatYouWillLearn = [
    'AI in Automation: Understand how AI is revolutionizing software testing and automation workflows.',
    'Prompt Engineering for QA: Master techniques to prompt AI tools (like Copilot, ChatGPT) for test automation tasks.',
    'Self-Healing Tests: Implement strategies to make tests resilient to UI changes using AI and advanced locators.',
    'Visual Testing with AI: Integrate Applitools Eyes into UI tests for AI-powered visual validation.',
    'Smart API Automation: Use AI to generate Postman collections, tests, documentation, and contract validations.',
    'Test Refactoring & CI/CD Debugging: Leverage AI to debug pipelines, refactor code, and maintain test suites efficiently.',
    'Low-Code/No-Code Tools: Explore codeless automation that abstracts logic through AI.',
    'Advanced Agents & AI Workflows: Understand the frontier of Autonomous Agents and risk management in AI adoption.',
  ];

  const courseContent = [
    {
      title: 'Module 1: AI FOUNDATIONS FOR TESTERS',
      desc: 'Sessions 1-4',
      sections: [
        {
          title: 'Session 1: The New QA Paradigm — From Manual/Automation Engineer to AI-First QA Engineer',
          items: [
            'Learning Objectives: Understand how LLMs change test automation; differentiate between traditional coding and AI-assisted workflows.',
            'Topics Covered: History of automation, limitations of record-and-playback, prompt engineering concept, overview of AI tools.'
          ],
        },
        {
          title: 'Session 2: Prompt Engineering for QA - Getting Reliable Code',
          items: [
            'Learning Objectives: Master prompt crafting to generate accurate, maintainable automation code.',
            'Topics Covered: Context setting, persona assignment, iterative prompting, handling AI hallucinations.'
          ],
        },
        {
          title: 'Session 3: AI-Powered Debugging & Bug Analysis',
          items: [
            'Learning Objectives: Use AI to analyze stack traces, identify root causes of flaky tests, and suggest fixes.',
            'Topics Covered: Log analysis, flaky test patterns, root cause analysis (RCA).'
          ],
        },
        {
          title: 'Session 4: Test Data Generation & Code Migration',
          items: [
            'Learning Objectives: Generate synthetic test data and migrate legacy frameworks (e.g., Selenium to Playwright) using AI.',
            'Topics Covered: Synthetic data generation, framework migration strategies.'
          ],
        },
      ],
    },
    {
      title: 'Module 2: AI + UI AUTOMATION',
      desc: 'Sessions 5-9',
      sections: [
        {
          title: 'Session 5: Building a Selenium Framework with GitHub Copilot',
          items: [
            'Learning Objectives: Set up a modular Selenium Java/Python framework using AI-assisted development.',
            'Topics Covered: Project setup, WebDriverManager, Page Object Model (POM), BaseTest classes.'
          ],
        },
        {
          title: 'Session 6: Playwright Superpowers with AI',
          items: [
            'Learning Objectives: Leverage Playwright’s auto-waits and trace viewer, generating scripts using AI.',
            'Topics Covered: Playwright locators, auto-waiting, trace viewer, codegen.'
          ],
        },
        {
          title: 'Session 7: Low-Code/No-Code Automation & AI',
          items: [
            'Learning Objectives: Explore tools that abstract coding and use AI to generate logic.',
            'Topics Covered: Low-code tools, integrating AI into codeless workflows.'
          ],
        },
        {
          title: 'Session 8: Self-Healing Tests with AI & Advanced Locators',
          items: [
            'Learning Objectives: Implement strategies to make tests resilient to UI changes using AI.',
            'Topics Covered: AI-based self-healing, multi-attribute locators, heuristic strategies.'
          ],
        },
        {
          title: 'Session 9: Cursor AI for Complex UI Flows',
          items: [
            'Learning Objectives: Handle iframes, shadow DOM, drag-drop using Cursor IDE advanced AI features.',
            'Topics Covered: Cursor Composer, complex UI interactions, code refactoring.'
          ],
        },
      ],
    },
    {
      title: 'Module 3: AI + API TESTING',
      desc: 'Sessions 10-12',
      sections: [
        {
          title: 'Session 10: Postman + AI for API Discovery & Test Generation',
          items: [
            'Learning Objectives: Use AI to generate Postman collections, tests, and documentation.',
            'Topics Covered: Postman’s built-in AI, environments, pre-request scripts.'
          ],
        },
        {
          title: 'Session 11: Automating API Contracts with AI',
          items: [
            'Learning Objectives: Generate and validate API contract tests using AI.',
            'Topics Covered: Contract testing, JSON Schema validation, data-driven tests.'
          ],
        },
        {
          title: 'Session 12: AI-Based Response Validation & Data Chaining',
          items: [
            'Learning Objectives: Use AI to assert complex response data and dynamically chain API calls.',
            'Topics Covered: AI-driven assertions, dynamic data extraction.'
          ],
        },
      ],
    },
    {
      title: 'Module 4: VISUAL TESTING',
      desc: 'Sessions 13-14',
      sections: [
        {
          title: 'Session 13: Applitools Setup & AI-Based Visual Validation',
          items: [
            'Learning Objectives: Integrate Applitools Eyes into UI tests for AI-powered visual validation.',
            'Topics Covered: Applitools Eyes SDK, Visual Grid, baseline images.'
          ],
        },
        {
          title: 'Session 14: Cross-Browser & Visual AI Strategies',
          items: [
            'Learning Objectives: Implement cross-browser testing with AI-driven visual analysis.',
            'Topics Covered: Ultrafast Grid, handling dynamic content, testing in CI.'
          ],
        },
      ],
    },
    {
      title: 'Module 5: AI-DRIVEN WORKFLOW & PRODUCTIVITY',
      desc: 'Sessions 15-16',
      sections: [
        {
          title: 'Session 15: CI/CD Integration + AI for Pipeline Debugging',
          items: [
            'Learning Objectives: Integrate AI-assisted automation into CI/CD and use AI to debug failures.',
            'Topics Covered: GitHub Actions, Jenkins, pipeline as code, AI for log analysis.'
          ],
        },
        {
          title: 'Session 16: Test Maintenance & Refactoring with AI',
          items: [
            'Learning Objectives: Identify code smells, dead code, and refactor large test suites with AI.',
            'Topics Covered: Code analysis, refactoring patterns, reducing flakiness.'
          ],
        },
      ],
    },
    {
      title: 'Module 6: ADVANCED + FUTURE OF AI TESTING',
      desc: 'Sessions 17-18',
      sections: [
        {
          title: 'Session 17: Autonomous Testing Agents',
          items: [
            'Learning Objectives: Explore capabilities of autonomous agents (Devin, Cognition AI).',
            'Topics Covered: Agentic workflows, configuration, task delegation.'
          ],
        },
        {
          title: 'Session 18: AI Workflows, Risks & Validation Strategies',
          items: [
            'Learning Objectives: Manage AI-generated code risks and AI Workflows.',
            'Topics Covered: Hallucinations, security risks (API keys), validation layers.'
          ],
        },
      ],
    },
    {
      title: 'Module 7: CAPSTONE PROJECT',
      desc: 'Sessions 19-20',
      sections: [
        {
          title: 'Session 19: Capstone Kick-off - Requirements & AI Strategy',
          items: [
            'Learning Objectives: Plan the automation strategy for a real app using AI.',
            'Topics Covered: Requirement analysis, tool selection, setup.'
          ],
        },
        {
          title: 'Session 20: Capstone Implementation & Review',
          items: [
            'Learning Objectives: Build and present final AI-powered suite.',
            'Topics Covered: Implementation, debugging, CI integration.'
          ],
        },
      ],
    },
  ];

  return (
    <div className="ai-course-page">
      {/* Hero Section */}
      <section className="ai-hero-section">
        <div className="ai-container">
          <div className="ai-hero-content">
            <span className="ai-badge">Mostly Popular</span>
            <h1 className="ai-hero-title">AI Powered Test Automation</h1>
            <p className="ai-hero-subtitle">
              Master AI-powered tools and techniques to supercharge your
              automation testing, covering AI test generation, self-healing
              locators, and intelligent test execution.
            </p>

            <div className="ai-stats-row">
              <div className="ai-stat-item">
                <FaCalendarAlt className="ai-stat-icon" />
                <span className="ai-stat-value">1</span>
                <span className="ai-stat-label">Month</span>
              </div>
              <div className="ai-stat-item">
                <FaVideo className="ai-stat-icon" />
                <span className="ai-stat-value">22</span>
                <span className="ai-stat-label">Lectures</span>
              </div>
              <div className="ai-stat-item">
                <FaProjectDiagram className="ai-stat-icon" />
                <span className="ai-stat-value">2</span>
                <span className="ai-stat-label">Projects</span>
              </div>
              <div className="ai-stat-item">
                <FaLaptopCode className="ai-stat-icon" />
                <span className="ai-stat-value">7</span>
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
                onClick={() =>
                  window.open(
                    'https://zoom.us/meeting/register/2VQ6V4YwSvahyay1NRa8XQ',
                    '_blank'
                  )
                }
              >
                Register
              </button>
            </div>
          </div>

          <div className="ai-hero-media">
            <div className="ai-media-wrapper">
              <img
                src={previewImage}
                alt="Course Preview"
                className="ai-preview-img"
              />
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
                <div className="ai-check-icon">
                  <FaCheck />
                </div>
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
                <div
                  className="ai-accordion-header"
                  onClick={() => toggleChapter(index)}
                >
                  <span className="ai-chapter-num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="ai-chapter-info">
                    <h3 className="ai-chapter-title">{week.title}</h3>
                    <p className="ai-chapter-desc">{week.desc}</p>
                  </div>
                  <div className="ai-chapter-meta">
                    {expandedChapters.includes(index) ? (
                      <FaChevronUp
                        style={{ marginLeft: '1rem', color: '#94a3b8' }}
                      />
                    ) : (
                      <FaChevronDown
                        style={{ marginLeft: '1rem', color: '#94a3b8' }}
                      />
                    )}
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
                              ) : (
                                item
                              )}
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
            <h2
              className="ai-section-title"
              style={{ textAlign: 'left', marginBottom: '1rem' }}
            >
              What you'll get
            </h2>
            <p className="ai-intro-text">
              Earn a Certificate of Completion from JourneyToAutomation upon
              completing the course.
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
                  'https://zoom.us/meeting/register/2VQ6V4YwSvahyay1NRa8XQ',
                  '_blank'
                )
              }
            >
              Interested
            </button>
          </div>
          <div className="ai-cert-preview">
            <img
              src={certImage}
              alt="Certificate Preview"
              className="ai-certificate-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'https://via.placeholder.com/600x400?text=Certificate+Preview';
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPageAIPowered;
