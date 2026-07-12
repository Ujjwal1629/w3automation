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
import certImage from '../../assets/certificate_ai_assisted.png';
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
    'AI Landscape for Testers: Get hands-on with ChatGPT, Claude, Gemini, Copilot, Cursor, and Antigravity.',
    'Prompt Engineering for QA: Write token-efficient prompts that get usable output without burning tokens or time.',
    'AI-Generated Test Assets: Generate positive, negative, edge, and boundary test cases plus realistic test data.',
    'AI-Assisted Testing Workflows: Use AI for exploratory testing, bug reports, documentation, and the full STLC.',
    'AI for Automation Scripting: Build Playwright and Selenium scripts with AI, master the Playwright CLI, and package reusable playbooks as Claude Skills.',
    'AI for API Testing & Code Quality: Apply AI to Postman, REST Assured, code review, and refactoring.',
    'AI Agents & MCP: Build no-code agents with n8n, Make.com, and Langflow, understand MCP for testers, and code your own AI QA assistant with the Claude or OpenAI API.',
    'Judgment & Career: Know the limits of AI, handle hallucinations, and build your resume, LinkedIn, and AI portfolio.',
  ];

  const courseContent = [
    {
      title: 'Module 1: AI FOUNDATIONS FOR TESTERS',
      desc: 'Topics 1-2',
      sections: [
        {
          title: 'Topic 1: AI Landscape for Testers',
          items: [
            'Tools Covered: ChatGPT, Claude, Gemini, Copilot, Cursor, Antigravity.'
          ],
        },
        {
          title: 'Topic 2: Prompt Engineering for QA',
          items: [
            'Token-efficient prompting: Getting usable output without burning tokens/time.'
          ],
        },
      ],
    },
    {
      title: 'Module 2: AI-ASSISTED TEST DESIGN & ANALYSIS',
      desc: 'Topics 3-6',
      sections: [
        {
          title: 'Topic 3: AI-Generated Test Cases',
          items: [
            'Coverage Types: Positive, negative, edge, and boundary test cases.'
          ],
        },
        {
          title: 'Topic 4: AI-Generated Test Data',
          items: [
            'Topics Covered: Generating realistic, varied test data with AI.'
          ],
        },
        {
          title: 'Topic 5: AI-Assisted Exploratory Testing',
          items: [
            'Topics Covered: Using AI as a pairing partner to plan and drive exploratory sessions.'
          ],
        },
        {
          title: 'Topic 6: AI for Bug Reports & Documentation',
          items: [
            'Topics Covered: Writing clear bug reports and test documentation with AI.'
          ],
        },
      ],
    },
    {
      title: 'Module 3: AI FOR AUTOMATION & CODE QUALITY',
      desc: 'Topics 7-8',
      sections: [
        {
          title: 'Topic 7: AI for Automation Scripting — Playwright, Selenium',
          items: [
            'Playwright CLI mastery: Codegen, trace viewer, debug mode, sharding.',
            'Claude Skills: Packaging reusable test playbooks as Claude Skills.'
          ],
        },
        {
          title: 'Topic 8: AI Code Review & Refactoring',
          items: [
            'Topics Covered: Reviewing and refactoring automation code with AI.'
          ],
        },
      ],
    },
    {
      title: 'Module 4: AI FOR API TESTING & THE STLC',
      desc: 'Topics 9-10',
      sections: [
        {
          title: 'Topic 9: AI for API Testing — Postman, REST Assured',
          items: [
            'Topics Covered: AI-assisted API test design and automation with Postman and REST Assured.'
          ],
        },
        {
          title: 'Topic 10: AI Across the Full STLC',
          items: [
            'Topics Covered: Applying AI at every stage of the software testing life cycle.'
          ],
        },
      ],
    },
    {
      title: 'Module 5: AI AGENTS & MCP',
      desc: 'Topics 11-14',
      sections: [
        {
          title: 'Topic 11: No-Code AI Agents — n8n, Make.com, Langflow',
          items: [
            'Topics Covered: Building QA automation agents without writing code.'
          ],
        },
        {
          title: 'Topic 12: MCP for Testers',
          items: [
            'MCP vs CLI: When to connect AI to your tools via MCP vs a simple CLI wrapper.'
          ],
        },
        {
          title: 'Topic 13: Build Your Own AI QA Assistant (Code)',
          items: [
            'Tools Covered: Claude API / OpenAI API.'
          ],
        },
        {
          title: 'Topic 14: Orchestrating a Team of QA Agents',
          items: [
            'Topics Covered: Specialized agents vs one giant agent.'
          ],
        },
      ],
    },
    {
      title: 'Module 6: WORKFLOW, LIMITS & HUMAN JUDGMENT',
      desc: 'Topics 15-16',
      sections: [
        {
          title: 'Topic 15: AI in the Daily QA Workflow',
          items: [
            'Topics Covered: Fitting AI into your everyday testing routine.'
          ],
        },
        {
          title: 'Topic 16: Limits, Hallucinations & Human Judgment',
          items: [
            'Topics Covered: Knowing where AI fails and where human judgment must stay in the loop.'
          ],
        },
      ],
    },
    {
      title: 'Module 7: CAREER & FINAL PROJECT',
      desc: 'Topics 17-18',
      sections: [
        {
          title: 'Topic 17: Resume, LinkedIn & AI Portfolio',
          items: [
            'Topics Covered: Showcasing your AI-assisted testing skills to employers.'
          ],
        },
        {
          title: 'Topic 18: Final Project',
          items: [
            'Topics Covered: Apply everything from the course in an end-to-end AI-assisted testing project.'
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
            <h1 className="ai-hero-title">AI Assisted Testing</h1>
            <p className="ai-hero-subtitle">
              Master AI-assisted testing end to end — from prompt engineering
              and AI-generated test cases to automation scripting, MCP, and
              building your own AI QA agents.
            </p>

            <div className="ai-stats-row">
              <div className="ai-stat-item">
                <FaCalendarAlt className="ai-stat-icon" />
                <span className="ai-stat-value">1</span>
                <span className="ai-stat-label">Month</span>
              </div>
              <div className="ai-stat-item">
                <FaVideo className="ai-stat-icon" />
                <span className="ai-stat-value">18</span>
                <span className="ai-stat-label">Topics</span>
              </div>
              <div className="ai-stat-item">
                <FaProjectDiagram className="ai-stat-icon" />
                <span className="ai-stat-value">1</span>
                <span className="ai-stat-label">Final Project</span>
              </div>
              <div className="ai-stat-item">
                <FaLaptopCode className="ai-stat-icon" />
                <span className="ai-stat-value">7</span>
                <span className="ai-stat-label">Modules</span>
              </div>
              <div className="ai-stat-item">
                <FaRocket className="ai-stat-icon" />
                <span className="ai-stat-value">AI</span>
                <span className="ai-stat-label">Assisted Testing</span>
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
