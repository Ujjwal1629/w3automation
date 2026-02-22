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
    'AI Testing Mindset: Move from traditional testing to probabilistic, risk-based AI quality thinking.',
    'Data-Centric Testing: Validate data quality, detect bias, and treat data as source code.',
    'Model Testing & Metrics: Test model behavior, detect overfitting, and interpret evaluation metrics.',
    'AI API & Workflow Testing: Test probabilistic APIs, integrations, performance, and cost efficiency.',
    'LLM & GenAI Testing: Test prompts, handle non-determinism, detect hallucinations, and ensure safety.',
    'RAG System Validation: Test retrieval accuracy, grounding, vector databases, and source attribution.',
    'NLP & Computer Vision Testing: Validate chatbots, intent recognition, image classification, and detection.',
    'Ethical AI & MLOps: Test fairness, compliance, CI/CD pipelines, drift detection, and production monitoring.',
  ];

  const courseContent = [
    {
      title: 'Week 1: AI Testing Paradigm Shift & Data Testing',
      desc: 'Mindset transformation and data quality fundamentals.',
      sections: [
        {
          title: 'Mindset Transformation',
          items: [
            'Understand the differences between traditional testing and AI testing.',
            'Embrace probabilistic thinking, new quality dimensions (reliability, confidence, risk), and the uncertainty inherent in AI.',
            'Activity: Rewrite traditional test cases for AI systems.',
            'Deliverable: Mindset reflection.',
          ],
        },
        {
          title: 'Data Testing Fundamentals',
          items: [
            'Learn why data is the new source code and the foundation of AI systems.',
            'Explore data quality dimensions: completeness, consistency, bias.',
            'Bias detection techniques and practical applications across domains (healthcare, finance, retail).',
            'Hands-on: Data profiling and bias hunting exercises using open datasets.',
            'Deliverable: Data quality assessment report.',
          ],
        },
        {
          title: 'Track-Specific Focus',
          items: [
            'Manual: Exploratory data testing techniques.',
            'Automation: Automated data validation scripts.',
            'CT-AI Integration: Introduce AI-specific risk-based data testing.',
            'CT-Gen AI Integration: Generate test cases from dataset specifications.',
            'Multi-domain Examples:',
            'Healthcare: Patient records with missing fields.',
            'Finance: Credit scoring datasets for bias detection.',
            'Retail: Customer purchase history for anomaly detection.',
          ],
        },
      ],
    },
    {
      title: 'Week 2: Model Testing & Statistics',
      desc: 'Black-box testing for models and statistical validation.',
      sections: [
        {
          title: 'Black-Box Model Testing',
          items: [
            'Functional behavior testing for AI models.',
            'Sensitivity, stability, overfitting/underfitting detection.',
            'Hands-on: Test pre-trained models (sentiment, classification, regression).',
            'CT-AI Integration: Evaluate model performance in multiple domains using probabilistic risk scoring.',
          ],
        },
        {
          title: 'Statistics for Testers',
          items: [
            'Confusion matrix, precision, recall, F1-score — business implications across domains.',
            'Activity: Analyze model performance reports and select metrics based on domain risk.',
            'Deliverable: Model evaluation cheat sheet.',
          ],
        },
        {
          title: 'Track-Specific Focus',
          items: [
            'Manual: Metric interpretation and reporting.',
            'Automation: Statistical validation in test automation.',
            'Multi-domain Examples:',
            'Healthcare: Disease prediction model evaluation.',
            'Finance: Fraud detection performance metrics.',
            'Retail: Customer churn model testing.',
          ],
        },
      ],
    },
    {
      title: 'Week 3: AI API & Integration Testing',
      desc: 'Testing AI APIs, integration workflows, and performance.',
      sections: [
        {
          title: 'Testing AI APIs',
          items: [
            'Probabilistic API testing strategies, input/output validation, confidence score testing.',
            'Hands-on: REST API testing for AI services.',
          ],
        },
        {
          title: 'Integration & Performance Testing',
          items: [
            'End-to-end workflow testing.',
            'Performance testing (inference latency) and cost testing (LLM token economics).',
            'Activity: Build comprehensive API test suite.',
            'Deliverable: API testing framework/checklist.',
          ],
        },
        {
          title: 'Track-Specific Focus',
          items: [
            'Manual: Exploratory API testing.',
            'Automation: Performance test automation.',
            'AT SQA AI Integration: Use AI to automate API testing and implement self-healing scripts.',
            'Multi-domain Examples:',
            'Healthcare: Patient triage API.',
            'Finance: Credit approval API.',
            'Retail: Recommendation engine API.',
          ],
        },
      ],
    },
    {
      title: 'Week 4: LLM & Generative AI Testing',
      desc: 'Methodologies for testing non-deterministic LLM and GenAI systems.',
      sections: [
        {
          title: 'LLM Testing Fundamentals',
          items: [
            'Challenges of non-determinism in generative AI.',
            'Prompt testing methodology and regression using equivalence classes.',
            'Hands-on: Test ChatGPT-like interfaces.',
          ],
        },
        {
          title: 'Hallucination & Safety Testing',
          items: [
            'Hallucination detection techniques.',
            'Safety testing for harmful content.',
            'Creative output validation.',
            'Activity: Create hallucination detection test suite.',
            'Deliverable: Prompt testing strategy document.',
          ],
        },
        {
          title: 'Track-Specific Focus',
          items: [
            'Manual: Manual verification of LLM outputs.',
            'Automation: Automated prompt testing framework.',
            'CT-Gen AI Integration: Generate prompts and expected outputs for automated verification.',
            'Multi-domain Examples:',
            'Customer support chatbot (retail).',
            'Legal document summarization (law).',
            'Clinical assistant for symptom triage (healthcare).',
          ],
        },
      ],
    },
    {
      title: 'Week 5: RAG (Retrieval-Augmented Generation) Testing',
      desc: 'Testing strategies for RAG architectures and knowledge retrieval.',
      sections: [
        {
          title: 'RAG Architecture & Testing',
          items: [
            'Components: retriever, generator.',
            'Common failure patterns, grounding validation techniques.',
            'Hands-on: Test a RAG system end-to-end.',
          ],
        },
        {
          title: 'Knowledge Base & Source Testing',
          items: [
            'Vector database testing.',
            'Source attribution validation.',
            'Missing retrieval detection.',
            'Activity: Build RAG test scenarios.',
            'Deliverable: RAG testing checklist.',
          ],
        },
        {
          title: 'Track-Specific Focus',
          items: [
            'Manual: Source relevance verification.',
            'Automation: Automated retrieval accuracy testing.',
            'CT-Gen AI Integration: Use AI to auto-generate retrieval test queries.',
            'Multi-domain Examples:',
            'Knowledge retrieval for customer support (retail).',
            'Medical literature search (healthcare).',
            'Legal precedents retrieval (law/finance).',
          ],
        },
      ],
    },
    {
      title: 'Week 6: NLP & Computer Vision Testing',
      desc: 'Validation techniques for specialized AI domains: NLP and CV.',
      sections: [
        {
          title: 'NLP System Testing',
          items: [
            'Ambiguity, context testing, intent recognition, conversational AI testing.',
            'Hands-on: Test chatbot systems.',
          ],
        },
        {
          title: 'Computer Vision Testing',
          items: [
            'Image classification, object detection, adversarial testing.',
            'Hands-on: Test image recognition APIs.',
            'Deliverable: AI modality testing guide.',
          ],
        },
        {
          title: 'Track-Specific Focus',
          items: [
            'Manual: Visual verification of CV outputs.',
            'Automation: Automated image testing pipelines.',
            'AT SQA AI Integration: Automate NLP and CV pipelines with predictive failure alerts.',
            'Multi-domain Examples:',
            'NLP: Social media sentiment, medical notes, call center transcripts.',
            'CV: Autonomous vehicles, retail shelf monitoring, medical imaging.',
          ],
        },
      ],
    },
    {
      title: 'Week 7: Ethical AI & Responsible Testing',
      desc: 'Ensuring fairness, explainability, and regulatory compliance.',
      sections: [
        {
          title: 'Live Sessions',
          items: ['Flexible schedules to fit different time zones'],
        },
        {
          title: 'Fairness & Bias Testing',
          items: [
            'Group comparison techniques, intersectional bias detection.',
            'Hands-on: Conduct bias audits.',
          ],
        },
        {
          title: 'Explainability & Compliance',
          items: [
            'Model explanations, feature importance validation.',
            'Regulatory compliance (GDPR, EU AI Act).',
            'Activity: Create compliance checklist.',
            'Deliverable: Ethical AI testing report.',
          ],
        },
        {
          title: 'Track-Specific Focus',
          items: [
            'Manual: Ethical review processes.',
            'Automation: Automated fairness monitoring.',
            'CT-AI Integration: Apply AI-specific fairness, explainability, and compliance techniques.',
            'Multi-domain Examples:',
            'Hiring algorithms (HR).',
            'Loan approval models (finance).',
            'Disease prediction (healthcare).',
          ],
        },
      ],
    },
    {
      title: 'Week 8: AI Test Automation & MLOps',
      desc: 'Strategies for automating AI tests and integrating into CI/CD pipelines.',
      sections: [
        {
          title: 'Automation Strategy',
          items: [
            'What to automate, flaky test management, probabilistic assertions.',
            'Activity: Design automation strategy.',
          ],
        },
        {
          title: 'CI/CD for AI (MLOps)',
          items: [
            'Model version testing in pipelines',
            'Automated deployment validation',
            'Canary releases for AI systems',
            'Hands-on: Build CI pipeline for model testing',
            'Deliverable: CI/CD pipeline design',
          ],
        },
        {
          title: 'Track-Specific Focus',
          items: [
            'Manual: Manual approval gates in automation.',
            'Automation: Complete automation framework.',
            'AT SQA AI Integration: Predictive defect detection, self-healing automation, pipeline monitoring.',
            'Multi-domain Examples:',
            'NLP pipelines, CV pipelines, recommendation engines across domains.',
          ],
        },
      ],
    },
    {
      title: 'Week 9: Monitoring & Production Testing',
      desc: 'Detecting drift and monitoring AI models in production.',
      sections: [
        {
          title: 'Drift Detection & Management',
          items: [
            'Data drift vs concept drift.',
            'Statistical detection and alerting strategies.',
            'Hands-on: Set up drift detection.',
          ],
        },
        {
          title: 'Production Monitoring Strategy',
          items: [
            'Key metrics, human-in-the-loop systems, feedback loops.',
            'Activity: Design monitoring dashboard.',
            'Deliverable: Production monitoring plan.',
          ],
        },
        {
          title: 'Track-Specific Focus',
          items: [
            'Manual: Human review workflow.',
            'Automation: Automated monitoring implementation.',
            'CT-AI Integration: Detect drift in AI models using risk-prioritized strategies.',
            'AT SQA AI Integration: Implement automated production monitoring pipelines.',
            'Multi-domain Examples:',
            'Retail recommender drift, financial fraud detection, clinical model drift.',
          ],
        },
      ],
    },
    {
      title: 'Week 10: AI Testing Strategy & Real Project Planning',
      desc: 'Risk-based strategy, project kickoff, and team formation.',
      sections: [
        {
          title: 'Risk-Based Test Strategy',
          items: [
            'AI-specific risk assessment, risk coverage, and resource allocation.',
          ],
        },
        {
          title: 'Real Project Kickoff',
          items: [
            'Team formation, project selection, scope, and success criteria.',
            'Deliverable: Real project proposal.',
          ],
        },
        {
          title: 'Integration & Examples',
          items: [
            'Incorporate CT-AI, CT-Gen AI, AT SQA AI principles into project design.',
            'Multi-domain Examples: Projects spanning NLP, CV, healthcare, finance, or retail AI systems.',
          ],
        },
      ],
    },
    {
      title: 'Week 11: Real Project Execution',
      desc: 'Execution of real-world AI projects with focus on pipeline integrity and accuracy.',
      sections: [
        {
          title: 'Execution Focus',
          items: [
            'Pipeline integrity, component accuracy, and scoring validity.',
            'Performance at scale and comparison fairness.',
          ],
        },
        {
          title: 'Integration & Collaboration',
          items: [
            'Apply CT-AI, CT-Gen AI, AT SQA AI concepts in hands-on project work.',
            'Peer review and collaboration across tracks.',
          ],
        },
        {
          title: 'Multi-domain Application',
          items: [
            'Students choose domains for their projects to apply learned principles.',
          ],
        },
      ],
    },
    {
      title: 'Week 12: Capstone Completion & Career Transition',
      desc: 'Finalizing projects, peer reviews, and career preparation.',
      sections: [
        {
          title: 'Capstone Completion and Career Transition',
          items: [
            'Finalize projects: Testing execution, analysis, and reporting.',
            'Activity: Peer review of projects.',
            'Portfolio & Career Development: Final project report including documentation of CT-AI, CT-Gen AI, AT SQA AI techniques.',
            'Deliverable: Building AI testing portfolio and resume transformation.',
            'Multi-domain Emphasis: Highlight learning across healthcare, finance, retail, and other AI applications.',
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
            <h1 className="ai-hero-title">AI and ML Testing Mastery</h1>
            <p className="ai-hero-subtitle">
              This course is inspired from syllabus and content of CT-AI (AI
              Testing Specialist), CT-Gen AI (Generative AI for testing), and AT
              SQA AI (AI-driven QA and automation).
            </p>

            <div className="ai-stats-row">
              <div className="ai-stat-item">
                <FaCalendarAlt className="ai-stat-icon" />
                <span className="ai-stat-value">12</span>
                <span className="ai-stat-label">Weeks</span>
              </div>
              <div className="ai-stat-item">
                <FaVideo className="ai-stat-icon" />
                <span className="ai-stat-value">48+</span>
                <span className="ai-stat-label">Lessons</span>
              </div>
              <div className="ai-stat-item">
                <FaLaptopCode className="ai-stat-icon" />
                <span className="ai-stat-value">20+</span>
                <span className="ai-stat-label">Exercises</span>
              </div>
              <div className="ai-stat-item">
                <FaProjectDiagram className="ai-stat-icon" />
                <span className="ai-stat-value">8+</span>
                <span className="ai-stat-label">Mini-Projects</span>
              </div>
              <div className="ai-stat-item">
                <FaRocket className="ai-stat-icon" />
                <span className="ai-stat-value">1</span>
                <span className="ai-stat-label">Capstone</span>
              </div>
            </div>

            <div className="ai-hero-actions">
              <button
                className="ai-btn-primary"
                onClick={() =>
                  window.open(
                    'https://zoom.us/meeting/register/Xaq9WQf9Q628pcZmxXz-Jw',
                    '_blank'
                  )
                }
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

      {/* Career Transformation Paths Section */}
      <section className="ai-career-section">
        <div className="ai-container">
          <h2 className="ai-section-title">Career Transformation Paths</h2>

          <div className="ai-career-grid">
            {/* Manual Tester Path */}
            <div className="ai-career-card">
              <div className="ai-card-header-styled">
                <div className="ai-icon-box">
                  <FaUserTie />
                </div>
                <h3>Manual Tester Progression</h3>
              </div>
              <div className="ai-timeline">
                <div className="ai-timeline-item">
                  <span className="ai-dot"></span>
                  <div className="ai-timeline-content">
                    <h4>AI Test Analyst</h4>
                    <p>AI Testing Fundamentals</p>
                  </div>
                </div>
                <div className="ai-timeline-item">
                  <span className="ai-dot"></span>
                  <div className="ai-timeline-content">
                    <h4>AI Test Specialist (NLP, Vision, etc.)</h4>
                    <p>Specialized Testing</p>
                  </div>
                </div>
                <div className="ai-timeline-item highlight">
                  <span className="ai-dot pulse"></span>
                  <div className="ai-timeline-content">
                    <h4>AI Test Lead/Manager</h4>
                    <p>Strategy & Governance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Automation Tester Path */}
            <div className="ai-career-card">
              <div className="ai-card-header-styled">
                <div className="ai-icon-box">
                  <FaRobot />
                </div>
                <h3>Automation Tester Progression</h3>
              </div>
              <div className="ai-timeline">
                <div className="ai-timeline-item">
                  <span className="ai-dot"></span>
                  <div className="ai-timeline-content">
                    <h4>AI Automation Engineer</h4>
                    <p>AI Automation Fundamentals</p>
                  </div>
                </div>
                <div className="ai-timeline-item">
                  <span className="ai-dot"></span>
                  <div className="ai-timeline-content">
                    <h4>AI Quality Engineer</h4>
                    <p>MLOps & Pipeline</p>
                  </div>
                </div>
                <div className="ai-timeline-item highlight">
                  <span className="ai-dot pulse"></span>
                  <div className="ai-timeline-content">
                    <h4>AI Quality Architect</h4>
                    <p>Architecture & Strategy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Path */}
            <div className="ai-career-card">
              <div className="ai-card-header-styled">
                <div className="ai-icon-box">
                  <FaSitemap />
                </div>
                <h3>Common Leadership Path</h3>
              </div>
              <div className="ai-timeline">
                <div className="ai-timeline-item">
                  <span className="ai-dot"></span>
                  <div className="ai-timeline-content">
                    <h4>AI Test Manager</h4>
                    <p>Resource & Risk Mgmt</p>
                  </div>
                </div>
                <div className="ai-timeline-item">
                  <span className="ai-dot"></span>
                  <div className="ai-timeline-content">
                    <h4>Head of AI Quality</h4>
                    <p>Process & Standards</p>
                  </div>
                </div>
                <div className="ai-timeline-item highlight">
                  <span className="ai-dot pulse"></span>
                  <div className="ai-timeline-content">
                    <h4>Director of Responsible AI</h4>
                    <p>Vision & Compliance</p>
                  </div>
                </div>
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
              onClick={() =>
                window.open(
                  'https://zoom.us/meeting/register/Xaq9WQf9Q628pcZmxXz-Jw',
                  '_blank'
                )
              }
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
