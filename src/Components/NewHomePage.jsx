import React from 'react';
import './NewHomePage.css';
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaInstagram, FaMicrosoft } from 'react-icons/fa';
import { BsClock, BsGoogle } from 'react-icons/bs';

const NewHomePage = () => {
  return (
    <div className="new-home-page">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="logo-section">
          <div className="logo-container">
            <div className="logo-icon">
              {/* Placeholder for the abstract logo */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="logo-text">
              <span className="company-name">AI Innovation<br />Institute Ltd</span>
              <span className="company-sub">Part of the<br />Karnavati Group<br />of Learning</span>
            </div>
          </div>
          <div className="linkedin-badge">
            <FaLinkedin className="linkedin-icon" />
            <div className="badge-text">
              <span className="badge-label">LinkedIn</span>
              <span className="badge-title">Top Startup 2024</span>
            </div>
          </div>
        </div>
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
          <div className="workshop-badge">
            <span className="ai-icon">🤖</span> GenAI 8.0 Workshop
          </div>
          
          <h1 className="hero-title">
            Don't Let AI <span className="highlight-blue">Over-Power</span><br />
            <span className="highlight-purple">You!</span> Become an AI-Powered<br />
            Professional
          </h1>
          
          <p className="hero-subtitle">
            Learn Groundbreaking Secrets to Save 1000s of Dollars, Streamline<br />
            Work Processes & Supercharge Your Growth in 2024
          </p>

          <div className="info-cards">
            <div className="info-card">
              <BsClock className="info-icon" />
              <div className="info-text">
                <span className="info-label">Application Deadline</span>
                <span className="info-value">6th April, Sunday | 11:00 AM IST</span>
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
            <button className="register-btn">Register now for $ 25.00 USD</button>
            <a href="#" className="discount-link">click here to get team discount</a>
          </div>
        </div>

        <div className="hero-image-column">
          <div className="profile-card">
            <div className="profile-bg-pattern"></div>
            <div className="profile-image-container">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                alt="Olivia Smith" 
                className="profile-image" 
              />
            </div>
            <div className="profile-info">
              <div className="profile-details">
                <span className="profile-role">Program Director</span>
                <h3 className="profile-name">Olivia Smith</h3>
                <div className="profile-company">
                  <span>Product Manager at</span>
                  <FaMicrosoft className="microsoft-icon" />
                  <span>Microsoft</span>
                </div>
              </div>
              <div className="clutch-review">
                <span className="clutch-logo">Clutch</span>
                <div className="stars">★★★★★</div>
                <span className="review-text">5 Star Reviews<br />on Clutch</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Popular Courses Section */}
      <section className="popular-courses-section">
        <div className="section-header">
          {/* <span className="section-subtitle">// Popular Courses</span> */}
          <h2 className="section-title">Find your perfect program.</h2>
          <div className="title-underline"></div>
        </div>

        <div className="course-filters">
          <button className="filter-btn active">Data Science</button>
          <button className="filter-btn">Programming</button>
          <button className="filter-btn">Artificial Intelligent</button>
          <button className="filter-btn">Cloud Computing</button>
          <button className="filter-btn">Cybersecurity</button>
          <button className="filter-btn view-all">View All Courses</button>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-image-container">
                <img src={course.image} alt={course.title} className="course-image" />
                {course.discount && <span className="discount-badge">{course.discount}</span>}
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <div className="course-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-value">{course.rating}</span>
                  <span className="review-count">({course.reviews})</span>
                </div>
                <div className="course-meta">
                  <span className="student-count">👤 {course.students}</span>
                  <span className="lesson-count">📄 {course.lessons} Lessons</span>
                </div>
                <div className="course-footer">
                  <div className="price-container">
                    <span className="current-price">{course.price}</span>
                    {course.originalPrice && <span className="original-price">{course.originalPrice}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const courses = [
  {
    title: "Data Structures and Algorithms",
    rating: 4.9,
    reviews: 2023,
    students: "4,912",
    lessons: 37,
    price: "$79.00",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Machine Learning Foundations",
    rating: 4.9,
    reviews: 1425,
    students: "3,866",
    lessons: 22,
    price: "$59.00",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Google Professional Certificate Data Analytics",
    rating: 4.9,
    reviews: 3652,
    students: "3,982",
    lessons: 19,
    price: "$29.00",
    originalPrice: "$39.00",
    discount: "20% OFF",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Supervised Machine Learning: Regression",
    rating: 4.9,
    reviews: 1452,
    students: "10,253",
    lessons: 78,
    price: "$79.00",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Fundamentos: dados, dados, em todos os lugares",
    rating: 4.9,
    reviews: 2023,
    students: "4,912",
    lessons: 37,
    price: "$79.00",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Data Analytics Basics: Data, Data Everywhere",
    rating: 4.9,
    reviews: 1425,
    students: "3,866",
    lessons: 22,
    price: "$59.00",
    discount: "25% OFF",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Processing Data from Dirty to Clean",
    rating: 4.9,
    reviews: 3652,
    students: "3,982",
    lessons: 19,
    price: "$29.00",
    originalPrice: "$39.00",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Advanced Learning Algorithms",
    rating: 4.9,
    reviews: 1452,
    students: "10,253",
    lessons: 78,
    price: "$79.00",
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

export default NewHomePage;