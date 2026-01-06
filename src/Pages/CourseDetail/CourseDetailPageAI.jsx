import React, { useState } from 'react';
import { FaCheck, FaPlay, FaChevronDown, FaChevronUp, FaVideo, FaFileAlt, FaCalendarAlt, FaLaptopCode, FaRocket, FaProjectDiagram } from 'react-icons/fa';
import './CourseDetailPageAI.css';
import certImage from '../../assets/certificate.png'; 
import previewImage from '../../assets/logo-edit.png'

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
    "AI Testing Mindset: Move from traditional testing to probabilistic, risk-based AI quality thinking.",
    "Data-Centric Testing: Validate data quality, detect bias, and treat data as source code.",
    "Model Testing & Metrics: Test model behavior, detect overfitting, and interpret evaluation metrics.",
    "AI API & Workflow Testing: Test probabilistic APIs, integrations, performance, and cost efficiency.",
    "LLM & GenAI Testing: Test prompts, handle non-determinism, detect hallucinations, and ensure safety.",
    "RAG System Validation: Test retrieval accuracy, grounding, vector databases, and source attribution.",
    "NLP & Computer Vision Testing: Validate chatbots, intent recognition, image classification, and detection.",
    "Ethical AI & MLOps: Test fairness, compliance, CI/CD pipelines, drift detection, and production monitoring."
  ];

  const courseContent = [
    {
      title: "Week 1: AI Testing Paradigm Shift & Data Testing",
      desc: "Mindset transformation and data quality fundamentals.",
      sections: [
        {
          title: "Mindset Transformation",
          items: [
            "Traditional vs AI testing: The fundamental differences",
            "Probabilistic thinking for testers",
            "New quality dimensions: Reliability, confidence, risk",
            "Activity: Rewrite traditional test cases for AI systems"
          ]
        },
        {
          title: "Data Testing Fundamentals",
          items: [
            "Data as the new source code",
            "Data quality dimensions (completeness, consistency, bias)",
            "Bias detection techniques",
            "Hands-on: Data profiling and bias hunting exercise",
            "Deliverable: Data quality assessment report"
          ]
        },
        {
          title: "Track-Specific Focus",
          items: [
            "Manual: Exploratory data testing techniques",
            "Automation: Automated data validation scripts"
          ]
        }
      ]
    },
    {
      title: "Week 2: Model Testing & Statistics",
      desc: "Black-box testing for models and statistical validation.",
      sections: [
        {
          title: "Black-Box Model Testing",
          items: [
            "Functional behavior testing for models",
            "Sensitivity and stability analysis",
            "Overfitting/underfitting detection",
            "Hands-on: Test pre-trained models (sentiment, classification)"
          ]
        },
        {
          title: "Statistics for Testers",
          items: [
            "Confusion matrix as your truth table",
            "Precision, recall, F1-score - business implications",
            "Metric selection based on risk",
            "Activity: Analyze model performance reports",
            "Deliverable: Model evaluation cheat sheet"
          ]
        },
        {
          title: "Track-Specific Focus",
          items: [
            "Manual: Metric interpretation and reporting",
            "Automation: Statistical validation in test automation"
          ]
        }
      ]
    },
    {
      title: "Week 3: AI API & Integration Testing",
      desc: "Testing AI APIs, integration workflows, and performance.",
      sections: [
        {
          title: "Testing AI APIs",
          items: [
            "Probabilistic API testing strategies",
            "Input/output validation for AI endpoints",
            "Confidence score testing",
            "Hands-on: REST API testing for AI services"
          ]
        },
        {
          title: "Integration & Performance Testing",
          items: [
            "End-to-end AI workflow testing",
            "Performance testing for inference latency",
            "Cost testing (token economics for LLMs)",
            "Activity: Build comprehensive API test suite",
            "Deliverable: API testing framework/checklist"
          ]
        },
        {
          title: "Track-Specific Focus",
          items: [
            "Manual: Exploratory API testing",
            "Automation: Performance test automation"
          ]
        }
      ]
    },
    {
      title: "Week 4: LLM & Generative AI Testing",
      desc: "Methodologies for testing non-deterministic LLM and GenAI systems.",
      sections: [
        {
          title: "LLM Testing Fundamentals",
          items: [
            "Non-determinism challenge in GenAI",
            "Prompt testing methodology",
            "Prompt equivalence classes and regression",
            "Hands-on: Test ChatGPT-like interfaces"
          ]
        },
        {
          title: "Hallucination & Safety Testing",
          items: [
            "Hallucination detection techniques",
            "Safety testing for harmful content",
            "Creative output validation",
            "Activity: Create hallucination detection test suite",
            "Deliverable: Prompt testing strategy document"
          ]
        },
        {
          title: "Track-Specific Focus",
          items: [
            "Manual: Manual verification of LLM outputs",
            "Automation: Automated prompt testing framework"
          ]
        }
      ]
    },
    {
      title: "Week 5: RAG (Retrieval-Augmented Generation) Testing",
      desc: "Testing strategies for RAG architectures and knowledge retrieval.",
      sections: [
        {
          title: "RAG Architecture & Testing",
          items: [
            "Understanding RAG components (retriever, generator)",
            "Common RAG failure patterns",
            "Grounding validation techniques",
            "Hands-on: Test a RAG system end-to-end"
          ]
        },
        {
          title: "Knowledge Base & Source Testing",
          items: [
            "Vector database testing",
            "Source attribution validation",
            "Missing retrieval detection",
            "Activity: Build RAG test scenarios",
            "Deliverable: RAG testing checklist"
          ]
        },
        {
          title: "Track-Specific Focus",
          items: [
            "Manual: Source relevance verification",
            "Automation: Automated retrieval accuracy testing"
          ]
        }
      ]
    },
    {
      title: "Week 6: NLP & Computer Vision Testing",
      desc: "Validation techniques for specialized AI domains: NLP and CV.",
      sections: [
        {
          title: "NLP System Testing",
          items: [
            "Ambiguity and context testing",
            "Intent recognition validation",
            "Conversational AI testing",
            "Hands-on: Test chatbot systems"
          ]
        },
        {
          title: "Computer Vision Testing",
          items: [
            "Image classification testing",
            "Object detection validation",
            "Adversarial testing for CV systems",
            "Activity: Test image recognition APIs",
            "Deliverable: AI modality testing guide"
          ]
        },
        {
          title: "Track-Specific Focus",
          items: [
            "Manual: Visual verification of CV outputs",
            "Automation: Automated image testing pipelines"
          ]
        }
      ]
    },
    {
      title: "Week 7: Ethical AI & Responsible Testing",
      desc: "Ensuring fairness, explainability, and regulatory compliance.",
      sections: [
        {
          title: "Live Sessions",
          items: ["Tuesday & Thursday, 7-9 PM EST"]
        },
        {
          title: "Fairness & Bias Testing",
          items: [
            "Comprehensive fairness testing methodologies",
            "Group comparison techniques",
            "Intersectional bias detection",
            "Hands-on: Conduct bias audit on sample system"
          ]
        },
        {
          title: "Explainability & Compliance",
          items: [
            "Testing model explanations",
            "Feature importance validation",
            "Regulatory compliance (GDPR, EU AI Act)",
            "Activity: Create compliance checklist",
            "Deliverable: Ethical AI testing report"
          ]
        },
        {
          title: "Track-Specific Focus",
          items: [
            "Manual: Ethical review processes",
            "Automation: Automated fairness monitoring"
          ]
        }
      ]
    },
    {
      title: "Week 8: AI Test Automation & MLOps",
      desc: "Strategies for automating AI tests and integrating into CI/CD pipelines.",
      sections: [
        {
          title: "Automation Strategy",
          items: [
            "What to automate vs what to keep manual",
            "Flaky test management for probabilistic systems",
            "Probabilistic assertions in automation",
            "Activity: Design automation strategy for AI system"
          ]
        },
        {
          title: "CI/CD for AI (MLOps)",
          items: [
            "Model version testing in pipelines",
            "Automated deployment validation",
            "Canary releases for AI systems",
            "Hands-on: Build CI pipeline for model testing",
            "Deliverable: CI/CD pipeline design"
          ]
        },
        {
          title: "Track-Specific Focus",
          items: [
            "Manual: Manual approval gates in automation",
            "Automation: Complete automation framework"
          ]
        }
      ]
    },
    {
      title: "Week 9: Monitoring & Production Testing",
      desc: "Detecting drift and monitoring AI models in production.",
      sections: [
        {
          title: "Drift Detection & Management",
          items: [
            "Data drift vs concept drift",
            "Statistical detection methods",
            "Alerting strategies",
            "Hands-on: Set up drift detection for sample model"
          ]
        },
        {
          title: "Production Monitoring Strategy",
          items: [
            "Key metrics to monitor in production",
            "Human-in-the-loop systems",
            "Feedback loop testing",
            "Activity: Design monitoring dashboard",
            "Deliverable: Production monitoring plan"
          ]
        },
        {
          title: "Track-Specific Focus",
          items: [
            "Manual: Human review workflow design",
            "Automation: Automated monitoring implementation"
          ]
        }
      ]
    },
    {
      title: "Week 10: AI Testing Strategy & Real Project Planning",
      desc: "Planning for the capstone project and defining risk-based strategies.",
      sections: [
        {
          title: "Risk-Based Test Strategy",
          items: [
            "AI-specific risk assessment techniques",
            "Test coverage dimensions for AI",
            "Resource allocation for AI testing",
            "Activity: Create test strategy for complex AI system"
          ]
        },
        {
          title: "Real Project Kickoff",
          items: [
            "Team formation (mixed manual/automation)",
            "Project selection and scope definition",
            "Success criteria and timeline",
            "Deliverable: Real project proposal"
          ]
        }
      ]
    },
    {
      title: "Week 11: Real Project Execution",
      desc: "Execution of the QoDeBench real-world AI testing project.",
      sections: [
        {
          title: "QoDeBench Project",
          items: [
            "Pipeline-based ML-enhanced Code Analysis Benchmarking System",
            "Testing focus: Pipeline integrity and data flow",
            "Component accuracy validation",
            "Scoring validity analysis",
            "Performance at scale (real workloads)",
            "Comparison fairness (unbiased benchmarking)"
          ]
        }
      ]
    },
    {
      title: "Week 12: Capstone Completion & Career Transition",
      desc: "Finalizing projects and preparing for an AI testing career.",
      sections: [
        {
          title: "Finalize AI Real Projects",
          items: [
            "Complete testing execution",
            "Analyze results",
            "Prepare final reports",
            "Activity: Peer review of projects"
          ]
        },
        {
          title: "Portfolio & Career Development",
          items: [
            "Building AI testing portfolio",
            "Resume transformation for AI roles"
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
            <h1 className="ai-hero-title">AI Testing Mastery</h1>
            <p className="ai-hero-subtitle">The No.1 Course to Master AI-Powered Automation Testing</p>
            
            <div className="ai-stats-row">
              <div className="ai-stat-item">
                <FaCalendarAlt className="ai-stat-icon" />
                <span className="ai-stat-value">12</span>
                <span className="ai-stat-label">Weeks</span>
              </div>
              <div className="ai-stat-item">
                <FaVideo className="ai-stat-icon" />
                <span className="ai-stat-value">40+</span>
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
              <button className="ai-btn-primary" onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>
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
        <div className="ai-container" style={{display: 'block'}}>
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
        <div className="ai-container" style={{display: 'block'}}>
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
                    <span className="ai-chapter-badge">Free Preview</span>
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
            
            <button className="ai-btn-primary" style={{marginTop: '2rem'}}>Interested</button>
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