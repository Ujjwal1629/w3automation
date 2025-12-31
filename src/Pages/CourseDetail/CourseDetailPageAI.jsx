import React, { useState } from 'react';
import { FaCheck, FaPlay, FaChevronDown, FaChevronUp, FaVideo, FaFileAlt } from 'react-icons/fa';
import './CourseDetailPageAI.css';
// import bgImage from '../../assets/ai-bg.jpg'; // Assuming generic or reusing
import certImage from '../../assets/logo-edit.png'; // Placeholder or reuse
import previewImage from '../../assets/logo-edit.png'

const CourseDetailPageAI = () => {
  const [expandedChapter, setExpandedChapter] = useState(0);

  const toggleChapter = (index) => {
    setExpandedChapter(expandedChapter === index ? null : index);
  };

  const courseContent = [
    {
      title: "Introduction to AI Testing",
      desc: "Overview of AI in software testing, benefits, and tools.",
      lessons: [
        { title: "Course Introduction", duration: "05:20", type: "video" },
        { title: "Why AI Testing?", duration: "08:15", type: "video" },
        { title: "Tools Overview", duration: "12:10", type: "video" },
      ]
    },
    {
      title: "Setting Up Environment",
      desc: "Configuring your system for AI-driven automation testing.",
      lessons: [
        { title: "Installing Python/Java", duration: "10:00", type: "video" },
        { title: "Setting up IDE", duration: "06:45", type: "video" },
        { title: "Installing Dependencies", duration: "04:30", type: "doc" },
      ]
    },
    {
      title: "AI Test Generation",
      desc: "Generating test cases automatically using AI models.",
      lessons: [
        { title: "Understanding Generative AI", duration: "15:20", type: "video" },
        { title: "Auto-generating Test Scripts", duration: "18:45", type: "video" },
        { title: "Optimizing Generated Code", duration: "11:10", type: "video" },
      ]
    },
    {
      title: "Self-Healing Tests",
      desc: "Implementing self-healing mechanisms for robust automation.",
      lessons: [
        { title: "What is Self-Healing?", duration: "09:30", type: "video" },
        { title: "Handling Locator Changes", duration: "14:15", type: "video" },
        { title: "Practice: Fixing Broken Tests", duration: "20:00", type: "video" },
      ]
    },
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
                <FaVideo className="ai-stat-icon" />
                <span className="ai-stat-value">42</span>
                <span className="ai-stat-label">Lessons</span>
              </div>
              <div className="ai-stat-item">
                <FaFileAlt className="ai-stat-icon" />
                <span className="ai-stat-value">12</span>
                <span className="ai-stat-label">Exercises</span>
              </div>
              <div className="ai-stat-item">
                <FaCheck className="ai-stat-icon" />
                <span className="ai-stat-value">8+</span>
                <span className="ai-stat-label">Projects</span>
              </div>
            </div>

            <div className="ai-hero-actions">
              <button className="ai-btn-primary" onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>
                <FaPlay size={12} /> Start Learning
              </button>
              <button className="ai-btn-outline">Download Syllabus</button>
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
            {[
              "Fundamentals of AI-driven testing and its advantages over traditional methods",
              "How to set up and configure AI testing tools for your projects",
              "Generating test cases automatically using machine learning models",
              "Implementing self-healing tests to reduce maintenance overhead",
              "Visual regression testing using AI-powered tools",
              "Integrating AI testing into CI/CD pipelines for continuous delivery",
              "Best practices for training and fine-tuning AI models for testing",
              "Real-world case studies of successful AI testing implementations"
            ].map((item, index) => (
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
            {courseContent.map((chapter, index) => (
              <div className="ai-accordion-item" key={index}>
                <div className="ai-accordion-header" onClick={() => toggleChapter(index)}>
                  <span className="ai-chapter-num">{String(index + 1).padStart(2, '0')}</span>
                  <div className="ai-chapter-info">
                    <h3 className="ai-chapter-title">{chapter.title}</h3>
                    <p className="ai-chapter-desc">{chapter.desc}</p>
                  </div>
                  <div className="ai-chapter-meta">
                    <span className="ai-chapter-badge">Free Preview</span>
                    {expandedChapter === index ? <FaChevronUp style={{marginLeft: '1rem', color: '#94a3b8'}} /> : <FaChevronDown style={{marginLeft: '1rem', color: '#94a3b8'}} />}
                  </div>
                </div>
                
                {expandedChapter === index && (
                  <div className="ai-lesson-list">
                    {chapter.lessons.map((lesson, idx) => (
                      <div className="ai-lesson-item" key={idx}>
                        <div className="ai-lesson-icon">
                          {lesson.type === 'video' ? <FaPlay size={12} /> : <FaFileAlt size={12} />}
                        </div>
                        <span>{lesson.title}</span>
                        <span className="ai-lesson-duration">{lesson.duration}</span>
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
              <div className="ai-highlight-item">
                <FaCheck className="ai-blue-check" />
                <span>Verifiable with a unique certificate ID</span>
              </div>
            </div>
            
            <button className="ai-btn-primary" style={{marginTop: '2rem'}}>Buy Now</button>
          </div>
          <div className="ai-cert-preview">
            {/* Using a placeholder or the uploaded image if accessible, but for now a simple styled div or generic image */}
            <img src={certImage} alt="Certificate Preview" className="ai-certificate-img" onError={(e) => {e.target.onerror = null; e.target.src='https://via.placeholder.com/600x400?text=Certificate+Preview'}} />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="ai-pricing-section" id="pricing">
        <h2 className="ai-pricing-title">Start Learning <span className="ai-span-blue">Today</span></h2>
        
        <div className="ai-pricing-grid">
          {/* Box 1 */}
          <div className="ai-price-card">
            <div className="ai-card-header">
              <h3>Lectures</h3>
              <p className="ai-price">$139 <span>USD</span></p>
              <p className="ai-access-text">One-time. Lifetime access.</p>
            </div>
            <button className="ai-buy-btn">Buy Now</button>
            <div className="ai-features-list">
              <div className="ai-feature-item"><FaCheck className="ai-check" /> Access to all 42 lessons</div>
              <div className="ai-feature-item"><FaCheck className="ai-check" /> Private course channel</div>
              <div className="ai-feature-item"><FaCheck className="ai-check" /> LIVE instructor support</div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="ai-price-card recommended">
            <div className="ai-rec-badge">Recommended</div>
            <div className="ai-card-header" style={{marginTop: '1rem'}}>
              <h3>Lectures + Practice</h3>
              <p className="ai-price">$499 <span>USD</span></p>
              <p className="ai-access-text">One-time. Lifetime access.</p>
            </div>
            <button className="ai-buy-btn">Buy Now</button>
            <div className="ai-features-list">
              <div className="ai-feature-item"><FaCheck className="ai-check" /> Everything in "Lectures" plus:</div>
              <div className="ai-feature-item"><FaCheck className="ai-check" /> 12 test case coding assignments</div>
              <div className="ai-feature-item"><FaCheck className="ai-check" /> 6 code review sessions</div>
              <div className="ai-feature-item"><FaCheck className="ai-check" /> Personal portfolio project</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CourseDetailPageAI;