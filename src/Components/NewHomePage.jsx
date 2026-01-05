import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewHomePage.css';
import courseImageJavaSel from '../assets/javaSel.png';
import courseImagePlayTs from '../assets/playTs.jpeg';
import courseImageDevOps from '../assets/devOps.webp';
import courseImageAI from '../assets/AiTest.webp';
import logoImage from '../assets/logo-edit.png';
import profileImage from '../assets/profilePic.jpg';
import noPic from '../assets/no-img.webp';
import heroSlide1 from '../assets/slide-img1.jpg';
import heroSlide2 from '../assets/slide-img2.jpg';
import heroSlide3 from '../assets/slide-img4.jpg';
import { useState, useEffect } from 'react';

import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { BsClock, BsGoogle, BsPerson, BsFileText, BsArrowRight } from 'react-icons/bs';

const NewHomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('View All Courses');

  const filteredCourses = activeFilter === 'View All Courses'
    ? courses
    : courses.filter(course => course.category === activeFilter);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="new-home-page">
      <div className="container">
        {/* Top Bar */}
        <header className="top-bar">
          <nav className="social-nav">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">X / Twitter</a>
            <a href="#" className="social-link">YouTube</a>
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">Instagram</a>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="hero-section">
          <div className="hero-content">
            
            <h1 className="hero-title">
              Don't Let AI <span className="highlight-blue">Over-Power</span><br />
              <span className="highlight-purple">You!</span> Become an AI-Powered<br />
              Test Engineer
            </h1>

            <div className="info-cards">
              <div className="info-card">
                <BsClock className="info-icon" />
                <div className="info-text">
                  <span className="info-label">Demo Session</span>
                  <span className="info-value">25th January, Sunday | 09:00 PM IST</span>
                </div>
              </div>
              <div className="info-card">
                <BsGoogle className="info-icon google-icon" />
                <div className="info-text">
                  <span className="info-label">Online Platform</span>
                  <span className="info-value">Google Meet</span>
                </div>
              </div>
            </div>

            <div className="cta-group">
              <button className="register-btn">Register now</button>
            </div>
          </div>

          <div className="hero-image-column">
            <div className="hero-slider">
              {heroSlides.map((slide, index) => (
                <div 
                  key={index} 
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="slide-overlay">
                    <div className="journey-container">
                      {/* Left Box: Initial Role */}
                      <div className="role-box initial">
                        <span className="role-label">Started as</span>
                        <h3 className="role-title">{slide.initialRole}</h3>
                      </div>

                      {/* Arrow */}
                      <div className="arrow-container">
                        <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="curvy-arrow">
                          <path d="M5 35 C 30 35, 30 5, 55 5 C 80 5, 80 35, 95 35" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                          <path d="M85 28 L 95 35 L 85 42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      </div>

                      {/* Right Box: Current Role */}
                      <div className="role-box current">
                        <div className="role-header">
                          <span className="role-label">Currently</span>
                        </div>
                        <h3 className="role-title">{slide.currentRole}</h3>
                        <p className="company-name">{slide.currentCompany}</p>
                      </div>
                    </div>
                    
                    <div className="person-name">
                      <h3>{slide.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="slider-progress">
                {heroSlides.map((_, index) => (
                  <div key={index} className="progress-bar-container">
                    <div 
                      className={`progress-bar ${index === currentSlide ? 'active' : ''}`}
                      style={{ 
                        animationDuration: index === currentSlide ? '5s' : '0s' 
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Popular Courses Section */}
        <section className="popular-courses-section">
          <div className="section-header">
            <h2 className="section-title">Find your perfect program.</h2>
            <div className="title-underline"></div>
          </div>

          <div className="course-filters">
            {['View All Courses', 'Selenium', 'Playwright', 'AI Testing', 'DevOps'].map((filter) => (
              <button 
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="courses-grid">
            {filteredCourses.map((course, index) => (
              <div key={index} className="course-card">
                
                {/* Image Section */}
                <div className="course-image-wrapper">
                  <img src={course.image} alt={course.title} className="course-image" />
                  
                  <div className="badge-container">
                    {course.discount && <span className="discount-badge">{course.discount}</span>}
                    <span className="category-badge">{course.category}</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="card-overlay">
                    <p className="overlay-text">{course.description}</p>
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="course-content">
                  <div className="rating-row">
                    <span className="stars">★★★★★</span>
                    <span className="rating-number">{course.rating}</span>
                    <span className="review-text">({course.reviews} reviews)</span>
                  </div>

                  <h3 className="course-title">{course.title}</h3>

                  <div className="meta-row">
                    <div className="meta-item">
                      <BsPerson className="meta-icon" />
                      <span>{course.students}</span>
                    </div>
                    <div className="meta-item">
                      <BsFileText className="meta-icon" />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="price-box">
                      <button 
                        className="current-price" 
                        onClick={() => navigate(course.link)}
                        style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0, font: 'inherit' }}
                      >
                        know more
                      </button>
                    </div>
                    <button 
                      className="enroll-arrow"
                      onClick={() => navigate(course.link)}
                    >
                      <BsArrowRight />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="about-image-column">
            <div className="about-image-container">
              <img 
                src={profileImage} 
                alt="Instructor" 
                className="about-image" 
              />
              <div className="success-rate-card">
                <div className="success-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.40179 5.49706C5.80637 3.8578 7.71001 2.71537 9.83297 2.23759C11.9559 1.75981 14.1852 1.97279 16.19 2.83" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="success-text">
                  <span className="success-percent">91%</span>
                  <span className="success-label">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-content-column">
            <span className="about-subtitle">// About Us</span>
            <h2 className="about-title">Ways we can help</h2>
            <div className="title-underline-left"></div>
            
            <p className="about-description">
              Our eLearning platform is a dynamic and innovative online education hub designed to meet the needs of students, educators, and lifelong learners. We believe that learning should be accessible to everyone.
            </p>

            <ul className="benefits-list">
              <li className="benefit-item">
                <span className="check-icon">✓</span>
                Personalised learning experiences
              </li>
              <li className="benefit-item">
                <span className="check-icon">✓</span>
                Access to a wide range of resources
              </li>
              <li className="benefit-item">
                <span className="check-icon">✓</span>
                Flexibility and convenience
              </li>
            </ul>

            <button className="explore-btn">Explore Course →</button>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="stats-title">Building a lifelong learning community</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">1.5M</h3>
              <p className="stat-label">Learners available in this platform and more are counting daily.</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number">87%</h3>
              <p className="stat-label">Our students have the highest success rate in getting hired.</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number">364+</h3>
              <p className="stat-label">High-quality teachers offering courses and videos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="review-section">
        <div className="container">
          <div className="review-header">
            <div className="header-content">
              <span className="section-subtitle">// Reviews</span>
              <h2 className="section-title">Feedback from Our Students</h2>
              <div className="title-underline-left"></div>
            </div>

            <div className="review-nav">
              <button className="nav-btn prev">‹</button>
              <button className="nav-btn next">›</button>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                {/* Header */}
                <div className="review-card-header">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="reviewer-image"
                  />
                  <div>
                    <h4 className="reviewer-name">{review.name}</h4>
                    <span className="reviewer-role">{review.role}</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="review-text">“{review.text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2 className="cta-title">Finding Your Right Courses</h2>
              <p className="cta-description">
                It is important to consider various factors such as your interests, skills, academic background, and future aspirations. Researching the different options available and seeking advice.
              </p>
            </div>
            <button className="cta-button">Get Started Now →</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-column brand-column">
              <div className="footer-logo">
                <div className="logo-icon-small">
                  <img
                    src={logoImage}
                    alt="Logo"
                    className="logo-image-small"
                  />
                </div>
                <span className="footer-brand-name">Journey To Automation</span>
              </div>
              <p className="footer-description">
                Learn Automation Testing with industry-standard tools and real-world projects.
              </p>
              <div className="footer-socials">
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaYoutube /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaLinkedin /></a>
              </div>
            </div>

            {/* Explore Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Explore</h3>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Popular Courses</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Reviews</a></li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Contact Info</h3>
              <ul className="contact-list">
                <li className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>journeytoautomation@gmail.com</span>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+91 XXX XXX XXXX</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="copyright">© 2025 JourneyToAutomation. All rights reserved.</span>
            <div className="footer-legal">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const courses = [
  {
    title: "Java and Selenium",
    rating: 4.9,
    reviews: 2023,
    students: "4,912",
    lessons: 37,
    price: "$79.00",
    image: courseImageJavaSel,
    category: "Selenium",
    description: "Master web automation testing using Selenium. Learn to build reliable test scripts and real-world automation frameworks.",
    link: "/courseSDET"
  },
  {
    title: "Playwright with Typescript",
    rating: 4.9,
    reviews: 1425,
    students: "3,866",
    lessons: 22,
    price: "$59.00",
    image: courseImagePlayTs,
    category: "Playwright",
    description: "Master end-to-end web automation using Playwright with TypeScript. Build fast, reliable tests with real-world projects.",
    link: "/coursePlaywrightInterview"
  },
  {
    title: "Devops for Automation Testing",
    rating: 4.9,
    reviews: 3652,
    students: "3,982",
    lessons: 19,
    price: "$29.00",
    originalPrice: "$39.00",
    discount: "20% OFF",
    image: courseImageDevOps,
    category: "DevOps",
    description: "Master DevOps fundamentals for test automation. Automate builds, tests, and deployments with real-world workflows.",
    link: "/course/devops"
  },
  {
    title: "AI for Automation Testing",
    rating: 4.9,
    reviews: 3652,
    students: "3,982",
    lessons: 19,
    price: "$29.00",
    originalPrice: "$39.00",
    discount: "20% OFF",
    image: courseImageAI,
    category: "AI Testing",
    description: "End-to-end AI for automation testing. Covers intelligent test design, maintenance, and real-world use cases.",
    link: "/coursePlaywrightInterviewAI"
  },
];

const reviews = [
  {
    text: "The trainer's expertise in Java and Selenium shone through, and his patience in addressing our queries was impressive. I feel confident applying these skills in real-world scenarios. Kudos to Hemanth for an outstanding learning experience.",
    name: "Veerabhadra Sarma Kunapuli",
    role: "QA Manager",
    image: noPic,
    preCompany: "Cerner",
    postCompany: "Airtel Payments Bank",
  },
  {
    text: "I really appreciate you for taking time from daily routines and providing training on Java and Selenium. The topics covered are good and detailed. The support provided post sessions is also excellent.!",
    name: "Srikanth chivukula",
    role: "Senior Test Specialist",
    image: noPic,    
    preCompany: "Infozech Software Pvt Ltd",
    postCompany: "Google",
  },{
    text: "The session was highly engaging and insightful, providing a comprehensive understanding session. I particularly appreciated how the presentation was structured, making complex concepts easy to understand.",
    name: "Mayooran Thiruchselvam",
    role: "Associate QA Engineer",
    image: noPic,
    preCompany: "Infozech Software Pvt Ltd",
    postCompany: "Google",
  },
  {
    text: "Its been a wonderful journey of going through your course and recently landed a job and the programming questions were helpful to Crack the interviews . Focus on the core fundamentals was the key which helped me. I have landed a job in Landmark group as an SDET.",
    name: "Sai Rahul PALUVAI",
    role: "SDET Manager",
    image: noPic,
    preCompany: "Infozech Software Pvt Ltd",
    postCompany: "Google",
  },
  {
    text: "I am truly grateful to share my appreciation for Hemant Gandhi and his outstanding Playwright Automation Testing course. Hemant’s course helped me refine my understanding, strengthen my foundation, and elevate my technical approach to a much more polished level.",
    name: "Anik Roychoudhury",
    role: "Test Lead",
    image: noPic,
    preCompany: "Infozech Software Pvt Ltd",
    postCompany: "Google",
  },
  {
    text: "I have enrolled in Automation testing class on Java and Selenium and Hemant  is outstanding 👌  made complex topics easy to understand.. and topics  are covered in details.",
    name: "Faiyaz Bagwan",
    role: "Sr. QA Engineer",
    image: noPic,
    preCompany: "Infozech Software Pvt Ltd",
    postCompany: "Google",
  },
];

export default NewHomePage;

const heroSlides = [
  {
    name: "Rahul Bharadwaj",
    initialRole: "Associate QA",
    currentRole: "QA",
    currentCompany: "Volkswagen Group",
    image: heroSlide2,
    badge: "QA"
  },
  {
    name: "Anik Roychoudhury",
    initialRole: "Associate QA",
    currentRole: "Senior Specialist - QA",
    currentCompany: "LTIMindtree",
    image: heroSlide2,
    badge: "QA"
  },
  {
    name: "Medha pallavi",
    initialRole: "Associate Consultant",
    currentRole: "Senior Quality Engineer",
    currentCompany: "LTIMindtree",
    image: heroSlide3,
    badge: "Senior Quality Engineer"
  },
  {
    name: "Hyder Ali",
    initialRole: "Conultant QA",
    currentRole: "Senior QA",
    currentCompany: "IBM",
    image: heroSlide1,
    badge: "Senior QA"
  },
];