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
import previewImage from '../../assets/sdet2.jpg';

const CourseDetailPageAI = () => {
  // State to manage expanded chapters (all expanded by default)
  const [expandedChapters, setExpandedChapters] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);

  const toggleChapter = (index) => {
    setExpandedChapters((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const whatYouWillLearn = [
    'TypeScript for Testers: Write clean, typed, scalable test code with interfaces, generics, and async/await.',
    'Playwright Core: Master UI & API testing — locators, assertions, fixtures, cross-browser and mobile testing.',
    'BDD with Cucumber: Bridge business requirements and code using Gherkin, step definitions, and data-driven scenarios.',
    'POM Architecture: Build maintainable frameworks with BasePage patterns, fixtures, and clean folder structure.',
    'AI-Powered Testing: Generate smart test data, auto-fix broken locators, and analyse failures using LLMs.',
    'MCP & Playwright Agent: Give AI agents full browser control via @playwright/mcp — the future of test automation.',
    'CI/CD Pipelines: Set up Jenkins & GitHub Actions with Allure reporting and quality gate enforcement.',
    'Integrate AI to self-heal broken tests, generate smart test data & analyse failures automatically.',
  ];

  const courseContent = [
    {
      title: 'Module 01: TypeScript Fundamentals for Test Automation',
      desc: 'Write clean, typed, scalable test code from day one.',
      sections: [
        {
          title: 'TS Basics',
          items: [
            'Types, interfaces, enums & generics.',
            'Functions, arrow functions, async/await & Promises.',
            'Modules — import/export patterns.',
            'tsconfig.json setup for Playwright projects.',
          ],
        },
        {
          title: 'TS for Testers',
          items: [
            'Typed page objects & step definitions.',
            'Type-safe API clients & response models.',
            'Null safety & optional chaining in test code.',
          ],
        },
        {
          title: 'Dev Environment',
          items: [
            'VS Code setup — ESLint, Prettier, Path aliases.',
            'Node.js & npm project structure.',
            'Running your first TypeScript test.',
          ],
        },
      ],
    },
    {
      title: 'Module 02: Playwright Core — UI & API Testing',
      desc: 'Master end-to-end UI flows AND API validation in one framework.',
      sections: [
        {
          title: 'Playwright Setup',
          items: [
            'Installation, project scaffold & folder structure.',
            'Browser contexts, pages, fixtures & hooks.',
            'playwright.config.ts deep dive — envs, retries, timeouts.',
          ],
        },
        {
          title: 'UI Testing',
          items: [
            'Locators & selectors — best practices & anti-patterns.',
            'Actions: click, fill, drag, upload, keyboard & mouse events.',
            'Assertions — expect(), soft assertions & auto-waiting.',
            'Screenshots, videos & trace on failure.',
          ],
        },
        {
          title: 'API Testing',
          items: [
            'APIRequestContext — GET, POST, PUT, DELETE.',
            'Request/response schema validation.',
            'Auth token injection & header management.',
            'Combining UI + API in a single test flow.',
          ],
        },
        {
          title: 'Cross-Browser & Mobile',
          items: [
            'Running tests on Chromium, Firefox & WebKit.',
            'Mobile device emulation — viewport, touch, geolocation.',
            'Playwright device descriptor library.',
            'Responsive layout testing strategies.',
          ],
        },
        {
          title: 'Test Organisation',
          items: [
            'Tags, grep filters & test.describe blocks.',
            'Before/After hooks — setup & teardown patterns.',
            'Parallel execution, sharding & retries.',
          ],
        },
      ],
    },
    {
      title: 'Module 03: BDD with Cucumber & Gherkin',
      desc: 'Bridge the gap between business requirements and test code.',
      sections: [
        {
          title: 'BDD Foundations',
          items: [
            'Why BDD? Business value of readable test scenarios.',
            'Gherkin syntax — Feature, Scenario, Given/When/Then/And.',
            'Scenario Outline & Examples for data-driven BDD.',
          ],
        },
        {
          title: 'Cucumber Setup',
          items: [
            'cucumber-js setup with Playwright + TypeScript.',
            'Writing Step Definitions — mapping Gherkin to actions.',
            'World object & shared state across steps.',
            'Hooks — Before, After, BeforeAll, AfterAll.',
          ],
        },
        {
          title: 'Advanced BDD',
          items: [
            'Tags & filtering — @smoke, @regression, @wip.',
            'Background steps & shared preconditions.',
            'DocString & DataTable usage in steps.',
            'HTML + JSON report output from Cucumber.',
          ],
        },
      ],
    },
    {
      title: 'Module 04: Page Object Model (POM) Architecture',
      desc: 'Build maintainable, reusable & scalable test structure.',
      sections: [
        {
          title: 'POM Design',
          items: [
            'BasePage class — shared methods & constructor patterns.',
            'Page-specific classes & locator strategy.',
            'Lazy locator pattern & element encapsulation.',
            'Avoiding anti-patterns — no logic in tests, no hardcoded selectors.',
          ],
        },
        {
          title: 'API Client Layer',
          items: [
            'Reusable API request builder class.',
            'Response schema validation.',
            'Auth token management & session handling.',
            'Chaining API + UI in POM flows.',
          ],
        },
        {
          title: 'Clean Architecture',
          items: [
            'Enforcing folder structure across the team.',
            'Dependency injection via Playwright fixtures.',
            'Environment config management — .env + config files.',
            'Code review checklist for test architecture.',
          ],
        },
      ],
    },
    {
      title: 'Module 05: AI-Powered Test Intelligence',
      desc: 'Smart test data, self-healing locators & AI-driven defect insights.',
      sections: [
        {
          title: 'Smart Test Data',
          items: [
            'AI-generated test data using LLMs (GPT-4o, Claude, Gemini).',
            'Dynamic edge case generation for boundary testing.',
            'Seeding DB with AI-generated realistic datasets.',
          ],
        },
        {
          title: 'Self-Healing Tests',
          items: [
            'Locator failure detection & LLM-powered auto-fix flow.',
            'GitHub PR auto-creation for healed test files.',
            'Live demo — real-world app flaky test fix.',
          ],
        },
        {
          title: 'Defect Insights',
          items: [
            'AI-powered failure log analysis & root cause summarisation.',
            'Integrating AI analysis into CI pipeline output.',
            'Auto-generate Gherkin scenarios from requirements doc.',
            'Summarise test run results via LLM.',
          ],
        },
      ],
    },
    {
      title: 'Module 06: MCP Server + Playwright Agent',
      desc: 'Connect AI to your tools, data & test actions — the future of automation.',
      sections: [
        {
          title: 'MCP Fundamentals',
          items: [
            'What is MCP? Protocol & architecture explained.',
            'How AI connects to external tools via MCP layer.',
            'MCP vs traditional API integration — when to use what.',
          ],
        },
        {
          title: 'Playwright MCP Server',
          items: [
            '@playwright/mcp — official Playwright MCP server setup.',
            'Giving AI agents full browser control via Playwright.',
            'Claude, GPT-4o, Gemini — any LLM using Playwright as a tool.',
            'Natural language to browser action pipeline.',
          ],
        },
        {
          title: 'Building MCP Layers & Live Agent Demo',
          items: [
            'Connecting AI assistant to your Playwright test suite.',
            'MCP + DB, Docs & API as intelligent data sources.',
            'Prompt engineering for test execution actions.',
            'End-to-end: User prompt → AI → MCP → Browser → Result.',
            'AI agent generating & running tests automatically.',
            'Analysing failures and self-correcting via MCP loop.',
          ],
        },
      ],
    },
    {
      title: 'Module 07: CI/CD Pipeline Integration',
      desc: 'Quality gates in every build — no broken code ships.',
      sections: [
        {
          title: 'Pipeline Concepts',
          items: [
            'CI/CD fundamentals for QA engineers.',
            'Flow: Code Commit > Build > Run Tests > Report > Quality Gate.',
            'Branching strategies & test trigger rules.',
          ],
        },
        {
          title: 'Jenkins + GitHub Actions',
          items: [
            'Jenkins setup & Playwright pipeline config.',
            'GitHub Actions .yml workflows for Playwright + Cucumber.',
            'Matrix testing — multi-browser in parallel.',
            'PR quality gate — block merge on test failure.',
          ],
        },
        {
          title: 'Allure Reporting',
          items: [
            'Allure setup with Playwright + Cucumber output.',
            'Rich HTML reports — trends, history & attachments.',
            'Publishing Allure reports in Jenkins & GitHub Actions.',
            'Scheduled nightly regression runs.',
          ],
        },
      ],
    },
    {
      title: 'Module 08: Capstone Project & Career Readiness',
      desc: 'Bring it all together — build, present, and get hired.',
      sections: [
        {
          title: 'Capstone Project',
          items: [
            'End-to-end framework: Playwright + TypeScript + BDD + AI + CI/CD.',
            'Live project with UI, API, database & cross-browser coverage.',
            'Resume-ready GitHub portfolio with working automation framework.',
          ],
        },
        {
          title: 'Interview Preparation',
          items: [
            'Mock technical interviews — coding challenges & framework walkthroughs.',
            'Common SDET interview questions & best practices.',
            'Resume & LinkedIn profile guidance for automation roles.',
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
            <span className="ai-badge">New Batch</span>
            <h1 className="ai-hero-title">Playwright with AI</h1>
            <p className="ai-hero-subtitle">
              Build a modern, scalable & intelligent automation ecosystem with
              Playwright, TypeScript, BDD, AI-powered self-healing tests, and
              MCP agent integration.
            </p>

            <div className="ai-stats-row">
              <div className="ai-stat-item">
                <FaCalendarAlt className="ai-stat-icon" />
                <span className="ai-stat-value">3</span>
                <span className="ai-stat-label">Months</span>
              </div>

              <div className="ai-stat-item">
                <FaVideo className="ai-stat-icon" />
                <span className="ai-stat-value">36+</span>
                <span className="ai-stat-label">Lectures</span>
              </div>

              <div className="ai-stat-item">
                <FaLaptopCode className="ai-stat-icon" />
                <span className="ai-stat-value">2</span>
                <span className="ai-stat-label">Projects</span>
              </div>

              <div className="ai-stat-item">
                <FaProjectDiagram className="ai-stat-icon" />
                <span className="ai-stat-value">8</span>
                <span className="ai-stat-label">Modules</span>
              </div>

              <div className="ai-stat-item">
                <FaRocket className="ai-stat-icon" />
                <span className="ai-stat-value">AI+MCP</span>
                <span className="ai-stat-label">Powered</span>
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
              <img
                src={previewImage}
                alt="Course Preview"
                className="ai-preview-img"
              />
              <div className="ai-play-overlay">
                <FaPlay color="white" size={24} style={{ marginLeft: '4px' }} />
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
              onClick={() => window.open('/playwright-demo', '_self')}
            >
              Interested
            </button>
          </div>
          <div className="ai-cert-preview">
            {/* Using a placeholder or the uploaded image if accessible, but for now a simple styled div or generic image */}
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

export default CourseDetailPageAI;
