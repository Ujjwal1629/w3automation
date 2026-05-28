import React, { useState } from 'react';
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaVideo,
  FaCalendarAlt,
  FaLaptopCode,
  FaRocket,
  FaProjectDiagram,
  FaTools,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa';
import './CourseDetailPageAI.css';
import certImage from '../../assets/certificate.png';
import previewImage from '../../assets/AiTest.webp';

const CourseDetailPageAIML = () => {
  const [expandedChapters, setExpandedChapters] = useState([
    0, 1, 2, 3, 4, 5, 6, 7,
  ]);

  const toggleChapter = (index) => {
    setExpandedChapters((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const whatYouWillLearn = [
    'AI/ML Fundamentals: Understand how AI works from a tester\'s perspective — tokens, embeddings, temperature, and non-determinism.',
    'Prompt Engineering & Testing: Write effective prompts and systematically test where they break with edge cases and adversarial inputs.',
    'LLM Evaluation Tools: Master PromptFoo, DeepEval, and Giskard to write assertion-based eval suites and run model comparisons.',
    'Hallucination Detection: Build automated hallucination test suites using factual grounding checks and cross-reference validation.',
    'Security & Red Teaming: Test for OWASP Top 10 LLM risks — prompt injection, jailbreaks, data leakage, and bias.',
    'LangChain & LangGraph Testing: Test AI chains and multi-step agents with LangSmith and LangFuse tracing.',
    'LLM API Automation: Test OpenAI, Anthropic, and Gemini APIs using Postman and Python, plus chatbot UIs with Playwright.',
    'AI Observability: Set up Arize Phoenix and LangFuse for production monitoring, cost tracking, and drift detection.',
    'CI/CD for AI: Integrate eval suites into GitHub Actions pipelines with quality gates on every PR.',
    'Capstone Project: Build and test a complete RAG chatbot — PromptFoo + DeepEval + red teaming + Playwright + CI/CD.',
  ];

  const toolsData = [
    { category: 'LLM Evaluation & Testing', tools: 'PromptFoo, DeepEval, Ragas', action: 'Compare models, write assertions, automate eval suites' },
    { category: 'Security & Red Teaming', tools: 'PromptFoo Red Teaming, Giskard', action: 'Prompt injection, jailbreak, data leakage testing' },
    { category: 'Observability & Tracing', tools: 'LangFuse, LangSmith, Arize Phoenix', action: 'Trace LLM calls, monitor quality, detect drift' },
    { category: 'LLM Frameworks', tools: 'LangChain, LangGraph', action: 'Build and test AI chains and agents' },
    { category: 'Vector Databases', tools: 'ChromaDB, Qdrant', action: 'Store and query embeddings for RAG testing' },
    { category: 'API & Automation', tools: 'Postman, Playwright, Python requests', action: 'Test LLM APIs and chatbot UIs end-to-end' },
    { category: 'Guardrails', tools: 'Guardrails AI, NeMo Guardrails', action: 'Output validation, safety filters, structured output enforcement' },
    { category: 'CI/CD', tools: 'GitHub Actions, PromptFoo CI', action: 'Automated eval on every PR/deployment' },
  ];

  const courseContent = [
    {
      title: 'Module 1: AI/ML Fundamentals for Testers',
      desc: 'Week 1 · 3 Sessions',
      sections: [
        {
          title: 'Session 1: What is AI/ML — The Tester\'s Perspective',
          items: [
            'Explore ChatGPT, Claude, Gemini — observe how the same prompt gives different outputs.',
            'Discuss: where does testing fit in AI? Non-determinism as the fundamental challenge.',
            'Supervised vs Unsupervised vs Reinforcement Learning (high-level, tester-relevant).',
          ],
        },
        {
          title: 'Session 2: How LLMs Actually Work — Tokens, Probabilities & Temperature',
          items: [
            'Experiment with temperature settings (0 to 1) in OpenAI Playground.',
            'See how the same prompt at different temperatures produces different outputs.',
            'LLMs, tokens, embeddings, context windows — explained simply. Understand tokens and costs.',
          ],
        },
        {
          title: 'Session 3: AI Application Architectures — What You\'ll Be Testing',
          items: [
            'Map a real AI product (e.g., customer support chatbot) into components: prompt → model → output → guardrails → user.',
            'Identify test points at each layer.',
            'Fine-tuning vs RAG vs Prompt Engineering — when companies use what.',
          ],
        },
      ],
    },
    {
      title: 'Module 2: LLM Behavior & Prompt Engineering',
      desc: 'Week 2 · 3 Sessions',
      sections: [
        {
          title: 'Session 4: Prompt Engineering Fundamentals — Writing Effective Prompts',
          items: [
            'Write 10 different prompts for the same task and compare outputs.',
            'System prompts, user prompts, few-shot examples, chain-of-thought prompting.',
            'Multi-language prompt behavior — why LLMs hallucinate more in non-English.',
          ],
        },
        {
          title: 'Session 5: Prompt Testing — Finding Where Prompts Break',
          items: [
            'Take a working prompt and systematically break it: edge cases, ambiguous inputs, adversarial inputs.',
            'Document failure modes — prompt testing as a skill.',
            'Boundary values for prompts: what happens at extremes.',
          ],
        },
        {
          title: 'Session 6: Structured Outputs & Output Validation',
          items: [
            'Test JSON mode, function calling, tool use across GPT-4 and Claude.',
            'Build validation checks: is the JSON valid? Does it match the schema?',
            'What happens when the model hallucinates a field?',
          ],
        },
      ],
    },
    {
      title: 'Module 3: LLM Evaluation & Testing Tools',
      desc: 'Weeks 3–4 · 5 Sessions',
      sections: [
        {
          title: 'Session 7: PromptFoo Deep Dive — Setup, Config & First Eval',
          items: [
            'Install PromptFoo. Write YAML config. Define test cases for a customer support chatbot.',
            'Run eval. View results in browser UI.',
            'YAML-based eval configs vs code-based testing approaches.',
          ],
        },
        {
          title: 'Session 8: PromptFoo Advanced — Assertions, LLM-as-Judge & Model Comparison',
          items: [
            'Write advanced assertions: contains, regex, llm-rubric, semantic similarity.',
            'Compare GPT-4o vs GPT-4o-mini vs Gemini. Analyze cost vs quality trade-offs.',
          ],
        },
        {
          title: 'Session 9: DeepEval — Pytest for LLMs',
          items: [
            'Install DeepEval. Write test cases using Pytest syntax.',
            'Use HallucinationMetric, AnswerRelevancyMetric, FaithfulnessMetric.',
            'Run test suite. View Confident AI dashboard. 50+ available metrics.',
          ],
        },
        {
          title: 'Session 10: Hallucination Detection — Techniques & Automation',
          items: [
            'Build a hallucination test suite: factual accuracy tests, grounding checks, cross-reference validation.',
            'Compare SelfCheckGPT approach vs tool-based detection.',
            'Test at different temperatures. Golden datasets for regression testing.',
          ],
        },
        {
          title: 'Session 11: Model Comparison & Regression Testing',
          items: [
            'Build a golden dataset of 50 Q&A pairs. Run the same dataset across 3 models.',
            'Track scores over time. Simulate a model upgrade and check what broke.',
            'Snapshot testing for LLMs. Cost & latency testing — token usage tracking.',
          ],
        },
      ],
    },
    {
      title: 'Module 4: LLM API & Automation Testing',
      desc: 'Week 5 · 2 Sessions',
      sections: [
        {
          title: 'Session 12: LLM API Testing — OpenAI, Anthropic, Gemini Endpoints',
          items: [
            'Test LLM APIs using Postman and Python requests: send prompts, validate responses.',
            'Test error handling, rate limits, timeout behavior.',
            'Streaming responses — testing server-sent events (SSE) and chunked responses.',
            'Compare API structures across providers. Performance benchmarking — response times.',
          ],
        },
        {
          title: 'Session 13: Chatbot UI Testing with Playwright',
          items: [
            'Build end-to-end tests for a chatbot interface using Playwright.',
            'Test: message sending, response rendering, streaming output, conversation history.',
            'Edge cases: empty input, very long input, special characters.',
            'Playwright for chatbot testing — waiting for AI responses, asserting on dynamic content.',
          ],
        },
      ],
    },
    {
      title: 'Module 5: LangChain & LangGraph Testing',
      desc: 'Week 6 · 2 Sessions',
      sections: [
        {
          title: 'Session 14: LangChain Fundamentals & Testing Chains',
          items: [
            'Build a simple LangChain app (prompt → LLM → output parser).',
            'Test each component independently. Test the chain end-to-end.',
            'Use LangSmith to trace every step — node-by-node state diffs, execution graphs.',
          ],
        },
        {
          title: 'Session 15: LangGraph Agent Testing & Tracing',
          items: [
            'Build a multi-step LangGraph agent (tool-using agent that searches web + does calculations).',
            'Test agent decisions at each node. Use LangFuse for tracing.',
            'Identify where agents fail and why. Agent testing challenges: multi-step decisions, loop detection, error recovery.',
          ],
        },
      ],
    },
    {
      title: 'Module 6: Security, Safety & Red Teaming',
      desc: 'Week 7 · 3 Sessions',
      sections: [
        {
          title: 'Session 16: OWASP Top 10 for LLMs — Understanding AI Vulnerabilities',
          items: [
            'Walk through all 10 OWASP LLM risks with real-world examples.',
            'For each risk, identify: what it looks like, who\'s affected, and how to test for it.',
            'Prompt injection attacks — direct injection, indirect injection, multi-turn attacks.',
          ],
        },
        {
          title: 'Session 17: Red Teaming with PromptFoo & Giskard',
          items: [
            'Run PromptFoo red teaming (npx promptfoo redteam run) on a chatbot.',
            'Run Giskard\'s 40+ automated attack probes. Compare results.',
            'Map findings to OWASP Top 10. Jailbreaking techniques — DAN, role-playing exploits, encoding attacks.',
          ],
        },
        {
          title: 'Session 18: Guardrails, Output Validation & Bias Testing',
          items: [
            'Implement Guardrails AI for output validation. Test NeMo Guardrails for safety filtering.',
            'Run bias and toxicity tests using DeepEval metrics.',
            'Test for fairness across demographics. Data leakage testing — PII exposure, system prompt extraction.',
          ],
        },
      ],
    },
    {
      title: 'Module 7: AI Test Planning, Metrics & Observability',
      desc: 'Week 8 · 3 Sessions',
      sections: [
        {
          title: 'Session 19: AI Test Strategy & Planning',
          items: [
            'Create a complete AI test plan for a real-world scenario (AI-powered customer support).',
            'Define: test scope, test types, tools, metrics, and risk assessment.',
            'AI test strategy — what to test, when to test, how much to test.',
          ],
        },
        {
          title: 'Session 20: AI Quality Metrics & Reporting',
          items: [
            'Build a quality dashboard: hallucination rate, faithfulness score, latency P95, cost per session.',
            'Create executive-level reports from eval results.',
            'Quality metrics — hallucination rate, faithfulness, answer relevancy, toxicity rate, cost per query.',
          ],
        },
        {
          title: 'Session 21: AI Observability & Production Monitoring',
          items: [
            'Set up Arize Phoenix for production monitoring.',
            'Build alerts for: hallucination spikes, cost anomalies, latency degradation, model drift.',
            'Integrate with LangFuse for real-time tracing. Silent model updates detection.',
          ],
        },
      ],
    },
    {
      title: 'Module 8: Capstone Project & Career Kit',
      desc: 'Weeks 9–10 · 4 Sessions',
      sections: [
        {
          title: 'Session 22: Project Setup — Build the AI App to Test',
          items: [
            'Build a customer support RAG chatbot using LangChain + ChromaDB.',
            'Load company FAQ documents. Deploy as an API.',
            'This is the application you\'ll test throughout the capstone.',
          ],
        },
        {
          title: 'Session 23: Project Execution — Full Test Pipeline',
          items: [
            'Write complete test suite: PromptFoo eval (20 test cases) + DeepEval hallucination tests.',
            'PromptFoo red teaming + Giskard vulnerability scan + Playwright UI tests.',
            'Trace everything with LangFuse.',
          ],
        },
        {
          title: 'Session 24: CI/CD Integration & Project Presentation',
          items: [
            'Integrate eval suite into GitHub Actions (run on every PR).',
            'Build a quality dashboard. Present your project: test results, vulnerabilities found, quality metrics.',
            'Peer review session.',
          ],
        },
        {
          title: 'Session 25: AI Testing Career Kit — Resume, Portfolio & Interviews',
          items: [
            'Build your AI testing resume: highlight capstone project, tools mastery, and metrics.',
            'Optimize LinkedIn profile for AI testing roles.',
            'Practice 20 common AI testing interview questions. Portfolio presentation tips. Job search strategy.',
          ],
        },
      ],
    },
  ];

  const careerOutcomes = [
    'AI Test Engineer',
    'LLM Evaluation Specialist',
    'AI Quality Engineer',
    'SDET — AI/ML Applications',
    'QA Lead — AI Products',
    'Red Team Analyst — AI Security',
  ];

  return (
    <div className="ai-course-page">
      {/* Hero Section */}
      <section className="ai-hero-section">
        <div className="ai-container">
          <div className="ai-hero-content">
            <span className="ai-badge">Phase 1 — Foundations</span>
            <h1 className="ai-hero-title">AI & ML Testing Professional Course</h1>
            <p className="ai-hero-subtitle">
              Built specifically for QA Engineers, SDETs & Test Leads. No Machine Learning background required.
              Master 10+ industry tools and build a portfolio of 6 AI testing projects you can show in interviews.
            </p>

            <div className="ai-stats-row">
              <div className="ai-stat-item">
                <FaCalendarAlt className="ai-stat-icon" />
                <span className="ai-stat-value">10</span>
                <span className="ai-stat-label">Weeks</span>
              </div>
              <div className="ai-stat-item">
                <FaVideo className="ai-stat-icon" />
                <span className="ai-stat-value">25</span>
                <span className="ai-stat-label">Sessions</span>
              </div>
              <div className="ai-stat-item">
                <FaProjectDiagram className="ai-stat-icon" />
                <span className="ai-stat-value">6</span>
                <span className="ai-stat-label">Projects</span>
              </div>
              <div className="ai-stat-item">
                <FaLaptopCode className="ai-stat-icon" />
                <span className="ai-stat-value">8</span>
                <span className="ai-stat-label">Modules</span>
              </div>
              <div className="ai-stat-item">
                <FaTools className="ai-stat-icon" />
                <span className="ai-stat-value">10+</span>
                <span className="ai-stat-label">Tools</span>
              </div>
            </div>

            <div className="ai-hero-actions">
              <button
                className="ai-btn-primary"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/hemant-gandhi254/',
                    '_blank'
                  )
                }
              >
                Register Interest
              </button>
            </div>
          </div>

          <div className="ai-hero-media">
            <div className="ai-media-wrapper">
              <img
                src={previewImage}
                alt="AI ML Testing Course"
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

      {/* Tools Section */}
      <section className="ai-section" style={{ background: '#0f172a' }}>
        <div className="ai-container">
          <h2 className="ai-section-title">Tools You'll Master</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
              <thead>
                <tr style={{ background: '#1e293b' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', color: '#60a5fa', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', border: '1px solid #334155', background: '#1e293b' }}>Category</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', color: '#60a5fa', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', border: '1px solid #334155', background: '#1e293b' }}>Tools</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', color: '#60a5fa', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', border: '1px solid #334155', background: '#1e293b' }}>What You'll Do</th>
                </tr>
              </thead>
              <tbody>
                {toolsData.map((row, idx) => (
                  <tr key={idx} style={{ background: idx % 2 === 0 ? '#111827' : '#0f172a' }}>
                    <td style={{ padding: '0.85rem 1rem', color: '#60a5fa', fontWeight: 600, border: '1px solid #1e293b', fontSize: '0.9rem' }}>{row.category}</td>
                    <td style={{ padding: '0.85rem 1rem', color: '#e2e8f0', border: '1px solid #1e293b', fontSize: '0.9rem' }}>{row.tools}</td>
                    <td style={{ padding: '0.85rem 1rem', color: '#94a3b8', border: '1px solid #1e293b', fontSize: '0.9rem' }}>{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Course Content Accordion */}
      <section className="ai-content-section">
        <div className="ai-container">
          <h2 className="ai-section-title">Course Content</h2>
          <div className="ai-accordion">
            {courseContent.map((module, index) => (
              <div className="ai-accordion-item" key={index}>
                <div
                  className="ai-accordion-header"
                  onClick={() => toggleChapter(index)}
                >
                  <span className="ai-chapter-num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="ai-chapter-info">
                    <h3 className="ai-chapter-title">{module.title}</h3>
                    <p className="ai-chapter-desc">{module.desc}</p>
                  </div>
                  <div className="ai-chapter-meta">
                    {expandedChapters.includes(index) ? (
                      <FaChevronUp style={{ marginLeft: '1rem', color: '#94a3b8' }} />
                    ) : (
                      <FaChevronDown style={{ marginLeft: '1rem', color: '#94a3b8' }} />
                    )}
                  </div>
                </div>

                {expandedChapters.includes(index) && (
                  <div className="ai-lesson-list">
                    {module.sections.map((section, sIdx) => (
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

      {/* Career Outcomes */}
      <section className="ai-section" style={{ background: '#0f172a' }}>
        <div className="ai-container">
          <h2 className="ai-section-title">Career Outcomes</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', textAlign: 'center' }}>
            After completing Phase 1, you'll be qualified for these roles:
          </p>
          <div className="ai-learn-grid">
            {careerOutcomes.map((role, index) => (
              <div className="ai-learn-item" key={index}>
                <div className="ai-check-icon">
                  <FaRocket />
                </div>
                <p className="ai-learn-text">{role}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', background: '#1e293b', borderRadius: '0.75rem', border: '1px solid #334155' }}>
            <p style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '0.5rem' }}>Phase 2 — Mastery (coming soon)</p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>
              RAG system testing, vector database testing, chatbot & virtual assistant testing, DSPy & synthetic data generation, advanced observability, benchmarking, performance & CI/CD.
            </p>
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
              Earn a Certificate of Completion from QodeBench — Journey to Automation upon completing the course.
            </p>
            <div className="ai-cert-highlights">
              <div className="ai-highlight-item">
                <FaCheck className="ai-blue-check" />
                <span>Portfolio of 6 AI testing projects for interviews</span>
              </div>
              <div className="ai-highlight-item">
                <FaCheck className="ai-blue-check" />
                <span>Hands-on experience with 10+ industry tools</span>
              </div>
              <div className="ai-highlight-item">
                <FaCheck className="ai-blue-check" />
                <span>Complete end-to-end AI test pipeline (eval + red teaming + observability + CI/CD)</span>
              </div>
              <div className="ai-highlight-item">
                <FaCheck className="ai-blue-check" />
                <span>Professional certification to showcase your skills</span>
              </div>
              <div className="ai-highlight-item">
                <FaCheck className="ai-blue-check" />
                <span>AI Testing resume, LinkedIn optimization & interview prep kit</span>
              </div>
            </div>

            <button
              className="ai-btn-primary"
              style={{ marginTop: '2rem' }}
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/hemant-gandhi254/',
                  '_blank'
                )
              }
            >
              Register Interest
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

export default CourseDetailPageAIML;
