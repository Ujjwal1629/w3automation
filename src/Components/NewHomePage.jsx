import React from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './NewHomePage.css';
import courseImageJavaSel from '../assets/javaSel.png';
import courseImagePlayTs from '../assets/playTs.jpeg';
import courseImageDevOps from '../assets/devOps.webp';
import courseImageAI from '../assets/AiTest.webp';
import courseImageAIPowered from '../assets/ai_test_automation_cover.png';
import courseImageAIML from '../assets/AiTest.webp';
import logoImage from '../assets/logo-edit.png';
import profileImage from '../assets/profilePic.jpg';
import noPic from '../assets/no-img.webp';
import heroSlide1 from '../assets/slide-img1.jpg';
import heroSlide2 from '../assets/slide-img5.jpg';
import heroSlide3 from '../assets/slide-img4.jpg';
import heroSlide4 from '../assets/slide-img6.jpg';
import { useState, useEffect } from 'react';

import {
  FaLinkedin,
  FaYoutube,
  FaCheck,
  FaStar,
  FaEnvelope,
  FaInfoCircle,
  FaTimes,
} from 'react-icons/fa';
import {
  BsClock,
  BsPerson,
  BsFileText,
  BsArrowRight,
  BsCameraVideo,
} from 'react-icons/bs';

const CACHE_KEY = 'demo_course_cache';
const CACHE_TIME = 15 * 60 * 1000; // 15 minutes

const fetcher = (url) => api.get(url).then((res) => res.data);

const NewHomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('View All Courses');
  const [showDevOpsPopup, setShowDevOpsPopup] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerForm, setRegisterForm] = useState({ name: '', session: '', email: '' });

  const { data } = useSWR('/courses?course_id=HOMEPAGE-2026', fetcher, {
    dedupingInterval: 300000, // 5 min: same request won't be repeated within 5 min
    refreshInterval: 0, // no automatic polling
    revalidateOnFocus: true, // fetch when tab is focused
  });

  // Optional: force a background refetch every 5 minutes
  useEffect(() => {
    const interval = setInterval(
      () => {
        mutate('/courses?course_id=HOMEPAGE-2026');
      },
      5 * 60 * 1000
    ); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  const demoCourse = data?.[0];

  const handleCourseClick = (course) => {
    if (course.title.toLowerCase().includes('devops')) {
      setShowDevOpsPopup(true);
    } else {
      navigate(course.link);
    }
  };

  const filteredCourses =
    activeFilter === 'View All Courses'
      ? courses
      : courses.filter((course) => course.category === activeFilter);

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
            <a
              href="https://www.linkedin.com/in/hemant-gandhi254/"
              className="social-link linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span className="tooltip">LinkedIn</span>
            </a>
            <a
              href="https://www.youtube.com/@hemantgandhi2708"
              className="social-link youtube"
              aria-label="YouTube"
            >
              <FaYoutube />
              <span className="tooltip">YouTube</span>
            </a>
            <a
              href="mailto:hemanttestengineer@gmail.com"
              className="social-link email"
              aria-label="Email"
            >
              <FaEnvelope />
              <span className="tooltip">Email</span>
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Don't Let AI{' '}
              <span className="highlight-blue">Over-Power You!</span>
              <br />
              <span className="highlight-purple"></span> Become an AI-Powered
              Test Engineer
              <br />
            </h1>

            <div className="info-cards">
              <div className="info-card">
                <BsClock className="info-icon" />
                <div className="info-text">
                  <span className="info-label">
                    AI/ML Testing Demo Session
                  </span>
                  <span className="info-value">
                    <strong>AI and ML Testing Mastery</strong> | 7 and 9 Sep,
                    7:15 AM IST | 9:45 PM EST
                  </span>
                </div>
              </div>
              <div className="info-card">
                <BsCameraVideo className="info-icon zoom-icon" />
                <div className="info-text">
                  <span className="info-label">Online Platform</span>
                  <span className="info-value">Zoom</span>
                </div>
              </div>
            </div>

            <div className="cta-group">
              <button
                className="register-btn"
                onClick={() =>
                  window.open(
                    'https://zoom.us/meeting/register/oaxXeZmNR6K6_PNND2tT6w',
                    '_blank'
                  )
                }
              >
                Register now
              </button>
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
                        <svg
                          width="100"
                          height="40"
                          viewBox="0 0 100 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="curvy-arrow"
                        >
                          <path
                            d="M5 35 C 30 35, 30 5, 55 5 C 80 5, 80 35, 95 35"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                          />
                          <path
                            d="M85 28 L 95 35 L 85 42"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
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
                        animationDuration: index === currentSlide ? '5s' : '0s',
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
            {[
              'View All Courses',
              'Selenium',
              'Playwright',
              'AI Testing',
              'DevOps',
            ].map((filter) => (
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
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-image"
                  />

                  <div className="badge-container">
                    {course.discount && (
                      <span className="discount-badge">{course.discount}</span>
                    )}
                    <span className="category-badge">{course.category}</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="card-overlay">
                    <p className="overlay-text">{course.description}</p>
                    <button
                      className="view-details-btn"
                      onClick={() => handleCourseClick(course)}
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="course-content">
                  <div className="rating-row">
                    <span className="stars">★★★★★</span>
                    <span className="rating-number">{course.rating}</span>
                    <span className="review-text">
                      ({course.reviews} reviews)
                    </span>
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
                        onClick={() => handleCourseClick(course)}
                        style={{
                          cursor: 'pointer',
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          font: 'inherit',
                        }}
                      >
                        know more
                      </button>
                    </div>
                    <button
                      className="enroll-arrow"
                      onClick={() => handleCourseClick(course)}
                    >
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Your Instructor Section */}
        <section className="about-section">
          <div className="about-image-column">
            <div className="about-image-container">
              <img
                src={profileImage}
                alt="Hemant Gandhi"
                className="about-image"
              />
              <div className="success-rate-card">
                <div className="success-icon-box">
                  <FaStar style={{ color: 'white', fontSize: '1.5rem' }} />
                </div>
                <div className="success-text">
                  <span className="success-percent">11+</span>
                  <span className="success-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-content-column">
            <span className="about-subtitle">// MEET YOUR INSTRUCTOR</span>
            <h2 className="about-title">
              Hemant <span className="highlight-blue">Gandhi</span>
            </h2>
            <h3 className="instructor-role">
              Full Stack Automation Engineer, Trainer & Founder –
              JourneyToAutomation
            </h3>
            <div className="title-underline-left"></div>

            <p className="about-description">
              Hemant Gandhi is a seasoned QA Automation Specialist with 11+
              years of industry experience. He specializes in building scalable
              automation frameworks for Web, API, and Mobile testing using
              modern tools and AI-driven automation strategies. His mission is
              to create confident, industry-ready automation engineers who
              leverage AI to boost productivity, not just test.
            </p>

            <ul className="benefits-list">
              <li className="benefit-item">
                <span className="check-icon">
                  <FaCheck />
                </span>
                11+ Years of Core Industry Experience
              </li>
              <li className="benefit-item">
                <span className="check-icon">
                  <FaCheck />
                </span>
                Expert in Automation, AI & Framework Design
              </li>
              <li className="benefit-item">
                <span className="check-icon">
                  <FaCheck />
                </span>
                Real-World, Project-Driven Mentorship
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="stats-title">
            Building a lifelong learning community
          </h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">300+</h3>
              <p className="stat-label">
                Learners available in this platform and more are counting daily.
              </p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number">90%</h3>
              <p className="stat-label">
                Our students have the highest success rate in getting hired.
              </p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number">4+</h3>
              <p className="stat-label">
                High-quality teachers offering courses and videos.
              </p>
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
                It is important to consider various factors such as your
                interests, skills, academic background, and future aspirations.
                Researching the different options available and seeking advice.
              </p>
            </div>
            <button
              className="cta-button"
              onClick={() =>
                window.open(
                  'https://zoom.us/meeting/register/oaxXeZmNR6K6_PNND2tT6w',
                  '_blank'
                )
              }
            >
              Get Started Now →
            </button>
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
                Learn Automation Testing with industry-standard tools and
                real-world projects.
              </p>
              <div className="footer-socials">
                <a
                  href="https://www.linkedin.com/in/hemant-gandhi254/s"
                  className="social-icon"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.youtube.com/@hemantgandhi2708"
                  className="social-icon"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Explore Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Explore</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
                <li>
                  <a href="#">Popular Courses</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Contact Info</h3>
              <ul className="contact-list">
                <li className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>hemanttestengineer@gmail.com</span>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+91 8810201221</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="copyright">
              © 2025 JourneyToAutomation. All rights reserved.
            </span>
            <div className="footer-legal">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="popup-overlay" onClick={() => setShowRegisterModal(false)}>
          <div className="popup-content register-modal" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowRegisterModal(false)}>
              <FaTimes />
            </button>
            <h2 className="register-modal-title">Register for Demo Session</h2>
            <p className="register-modal-subtitle">Playwright with TypeScript</p>
            <form
              className="register-modal-form"
              onSubmit={(e) => {
                e.preventDefault();
                const sessionLabel =
                  registerForm.session === 'thursday'
                    ? 'Thursday at 8 PM IST to 9 PM IST'
                    : 'Friday at 5:30 AM IST to 6:30 AM IST';
                const message = `Hi Hemant, I am interested in attending your Playwright with TypeScript demo session on ${sessionLabel}.\nMy name is ${registerForm.name}.\nMy email address is ${registerForm.email}.`;
                const encoded = encodeURIComponent(message);
                window.open(`https://wa.me/918810201221?text=${encoded}`, '_blank');
                setShowRegisterModal(false);
                setRegisterForm({ name: '', session: '', email: '' });
              }}
            >
              <div className="register-field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={registerForm.name}
                  required
                  onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                />
              </div>
              <div className="register-field">
                <label>Preferred Session</label>
                <select
                  value={registerForm.session}
                  required
                  onChange={(e) => setRegisterForm({ ...registerForm, session: e.target.value })}
                >
                  <option value="" disabled>Select a session</option>
                  <option value="thursday">Thursday — 8:00 PM to 9:00 PM IST</option>
                  <option value="friday">Friday — 5:30 AM to 6:30 AM IST</option>
                </select>
              </div>
              <div className="register-field">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={registerForm.email}
                  required
                  onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                />
              </div>
              <button type="submit" className="register-btn register-modal-submit">
                Register via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      {/* DevOps Popup */}
      {showDevOpsPopup && (
        <div
          className="popup-overlay"
          onClick={() => setShowDevOpsPopup(false)}
        >
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="popup-close"
              onClick={() => setShowDevOpsPopup(false)}
            >
              <FaTimes />
            </button>
            <div className="popup-icon-container">
              <FaInfoCircle className="popup-icon" />
            </div>
            <h3 className="popup-title">Updates Coming Soon!</h3>
            <p className="popup-message">Please check back soon!</p>
            <button
              className="popup-btn"
              onClick={() => setShowDevOpsPopup(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const courses = [
  {
    title: 'Java and Selenium',
    rating: 4.7,
    reviews: 107,
    students: '190',
    lessons: 37,
    price: '$79.00',
    image: courseImageJavaSel,
    category: 'Selenium',
    description:
      'Master web automation testing using Selenium. Learn to build reliable test scripts and real-world automation frameworks.',
    link: '/courseSDET',
  },
  {
    title: 'Playwright with AI',
    rating: 4.3,
    reviews: 95,
    students: '186',
    lessons: 36,
    price: '$120.00',
    image: courseImagePlayTs,
    category: 'Playwright',
    description:
      'Build a modern, intelligent automation ecosystem with Playwright, TypeScript, BDD, AI-powered self-healing tests, and MCP agent integration.',
    link: '/courseDetailJS',
  },
  {
    title: 'Devops for Automation Testing',
    rating: 4.1,
    reviews: 112,
    students: '150',
    lessons: 19,
    price: '$29.00',
    originalPrice: '$39.00',
    discount: '20% OFF',
    image: courseImageDevOps,
    category: 'DevOps',
    description:
      'Master DevOps fundamentals for test automation. Automate builds, tests, and deployments with real-world workflows.',
    link: '/courseAIMLTesting',
  },
  {
    title: 'AI for Automation Testing',
    rating: 4.9,
    reviews: 125,
    students: '175',
    lessons: 19,
    price: '$29.00',
    originalPrice: '$39.00',
    discount: '20% OFF',
    image: courseImageAI,
    category: 'AI Testing',
    description:
      'End-to-end AI for automation testing. Covers intelligent test design, maintenance, and real-world use cases.',
    link: '/courseAIMLTesting',
  },
  {
    title: 'AI Assisted Testing',
    rating: 4.9,
    reviews: 100,
    students: '150',
    lessons: 18,
    price: '$170',
    image: courseImageAIPowered,
    category: 'AI Testing',
    description:
      'Master AI-assisted testing — prompt engineering, AI-generated tests, automation scripting, MCP, and building your own QA agents.',
    link: '/courseAIPowered',
  },
  {
    title: 'AI & ML Testing Professional Course',
    rating: 4.9,
    reviews: 20,
    students: '0',
    lessons: 25,
    price: 'Contact Us',
    image: courseImageAIML,
    category: 'AI Testing',
    description:
      'Phase 1 — Foundations. Master LLM evaluation, red teaming, observability, and AI test pipelines using PromptFoo, DeepEval, Giskard, LangSmith & more.',
    link: '/courseAIMLTesting-phase1-and-phase2',
  },
];

const reviews = [
  {
    text: "The trainer's expertise in Java and Selenium shone through, and his patience in addressing our queries was impressive. I feel confident applying these skills in real-world scenarios. Kudos to Hemanth for an outstanding learning experience.",
    name: 'Veerabhadra Sarma Kunapuli',
    role: 'QA Manager',
    image: noPic,
    preCompany: 'Cerner',
    postCompany: 'Airtel Payments Bank',
  },
  {
    text: 'I really appreciate you for taking time from daily routines and providing training on Java and Selenium. The topics covered are good and detailed. The support provided post sessions is also excellent.!',
    name: 'Srikanth chivukula',
    role: 'Senior Test Specialist',
    image: noPic,
    preCompany: 'Infozech Software Pvt Ltd',
    postCompany: 'Google',
  },
  {
    text: 'The session was highly engaging and insightful, providing a comprehensive understanding session. I particularly appreciated how the presentation was structured, making complex concepts easy to understand.',
    name: 'Mayooran Thiruchselvam',
    role: 'Associate QA Engineer',
    image: noPic,
    preCompany: 'Infozech Software Pvt Ltd',
    postCompany: 'Google',
  },
  {
    text: 'Its been a wonderful journey of going through your course and recently landed a job and the programming questions were helpful to Crack the interviews . Focus on the core fundamentals was the key which helped me. I have landed a job in Landmark group as an SDET.',
    name: 'Sai Rahul PALUVAI',
    role: 'SDET Manager',
    image: noPic,
    preCompany: 'Infozech Software Pvt Ltd',
    postCompany: 'Google',
  },
  {
    text: 'I am truly grateful to share my appreciation for Hemant Gandhi and his outstanding Playwright Automation Testing course. Hemant’s course helped me refine my understanding, strengthen my foundation, and elevate my technical approach to a much more polished level.',
    name: 'Anik Roychoudhury',
    role: 'Test Lead',
    image: noPic,
    preCompany: 'Infozech Software Pvt Ltd',
    postCompany: 'Google',
  },
  {
    text: 'I have enrolled in Automation testing class on Java and Selenium and Hemant  is outstanding 👌  made complex topics easy to understand.. and topics  are covered in details.',
    name: 'Faiyaz Bagwan',
    role: 'Sr. QA Engineer',
    image: noPic,
    preCompany: 'Infozech Software Pvt Ltd',
    postCompany: 'Google',
  },
];

export default NewHomePage;

const heroSlides = [
  {
    name: 'Rahul Bharadwaj',
    initialRole: 'Associate QA',
    currentRole: 'QA',
    currentCompany: 'Volkswagen Group',
    image: heroSlide2,
    badge: 'QA',
  },
  {
    name: 'Anik Roychoudhury',
    initialRole: 'Associate QA',
    currentRole: 'Senior Specialist - QA',
    currentCompany: 'LTIMindtree',
    image: heroSlide4,
    badge: 'QA',
  },
  {
    name: 'Medha pallavi',
    initialRole: 'Associate Consultant',
    currentRole: 'Senior Quality Engineer',
    currentCompany: 'LTIMindtree',
    image: heroSlide3,
    badge: 'Senior Quality Engineer',
  },
  {
    name: 'Hyder Ali',
    initialRole: 'Consultant QA',
    currentRole: 'Senior QA',
    currentCompany: 'IBM',
    image: heroSlide1,
    badge: 'Senior QA',
  },
];
