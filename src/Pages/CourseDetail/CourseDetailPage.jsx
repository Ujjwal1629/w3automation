// CourseDetailPage.jsx
import React, { useState } from 'react';
import './CourseDetailPage.css';
import courseImage from '../../assets/night.png'

const CourseDetailPage = () => {
  const [expandedSyllabus, setExpandedSyllabus] = useState(null);

  // Sample dynamic data (this could come from an API)
  const courseData = {
    title: "Complete Automation Testing Masterclass",
    description: "Master automation testing with industry-standard tools and practices",
    enrolled: 521000,
    stats: {
      lectures: 95,
      quiz: 0,
      duration: "30 hours",
      skillLevel: "All levels",
      language: "English",
      students: 1100,
      assessments: "Yes"
    },
    schedule: {
      classTiming: "Mon - Thu, 8:00 PM - 9:30 PM IST",
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
        title: "Core Java",
        topics: [
          "Basic Java Programming and Features",
          "Methods - Introduction",
          "Predefined Method - MathRandom Class",
          "Methods - Static and Non Static"
        ]
      },
      {
        title: "Introduction to Selenium",
        topics: [
          "Selenium Basics",
          "Setup and Configuration",
          "First Test Case"
        ]
      }
    ],
    pricing: {
      price: "$199",
      contact: "+1-555-0123",
      linkedin: "https://linkedin.com/company/example"
    },
    instructor: {
      name: "John Doe",
      bio: "10+ years industry experience in automation testing",
      image: courseImage
    }
  };

  return (
    <div className="course-detail-page">
      {/* Header Section */}
      <header className="course-header">
        <div className="header-content">
          <h1 className="course-title">{courseData.title}</h1>
          <p className="course-desc">{courseData.description}</p>
          <p className="enrollment">
            {courseData.enrolled.toLocaleString()} students enrolled
          </p>
        </div>
        <div className="header-image">
          <img src={`${courseImage}`} alt="Course" className="course-img-3d" />
        </div>
      </header>

      {/* Middle Section */}
      <section className="course-middle">
        <div className="middle-content">
          {/* Course Stats */}
          <div className="stats-grid">
            {Object.entries(courseData.stats).map(([key, value]) => (
              <div key={key} className="stat-card card-3d">
                <span className="stat-value">{value}</span>
                <span className="stat-label">{key}</span>
              </div>
            ))}
          </div>

          {/* Schedule Section */}
          <div className="schedule-section card-3d">
            <h2>Class/Demo Timings & Features</h2>
            <div className="schedule-content">
              <p><strong>Class Schedule:</strong> {courseData.schedule.classTiming}</p>
              <p><strong>Demo Sessions:</strong> {courseData.schedule.demo}</p>
              <div className="features">
                <h3>Salient Features:</h3>
                <ul>
                  {courseData.schedule.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
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

        {/* Pricing Sidebar */}
        <aside className="pricing-sidebar card-3d">
          <h3>Pricing</h3>
          <p className="price">{courseData.pricing.price}</p>
          <p>Contact: {courseData.pricing.contact}</p>
          <a href={courseData.pricing.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
          <button className="enroll-btn">Enroll Now</button>
        </aside>
      </section>

      {/* Instructor Section */}
      <section className="instructor-section">
        <img src={courseData.instructor.image} alt={courseData.instructor.name} className="instructor-img card-3d" />
        <div className="instructor-info">
          <h2>About Instructor</h2>
          <h3>{courseData.instructor.name}</h3>
          <p>{courseData.instructor.bio}</p>
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