import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLink, FaLinkedin, FaStar } from 'react-icons/fa';
import './CourseDetailPage.css';
import { courseDetails } from './CourseData';
// import bg2 from '../../assets/bg5B.jpg'
// import instructorImg from '../../assets/profilePic.jpg';

const CourseDetailPageSDET = () => {
  const navigate = useNavigate();
  const [expandedSyllabus, setExpandedSyllabus] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const courseData = courseDetails["sdet"]; // Hardcoded for SDET course
  
  if (!courseData) {
    return <div>Course not found.</div>;
  }

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
                        <li key={idx}>
                          {topic.header && <strong>{topic.header}</strong>}
                          {topic.content && (
                            <div style={{ marginLeft: topic.header ? "12px" : "0" }}>
                              {topic.content}
                            </div>
                          )}
                        </li>
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

export default CourseDetailPageSDET;