import React from 'react';
import './NewHomePage.css';
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaInstagram, FaMicrosoft } from 'react-icons/fa';
import { BsClock, BsGoogle } from 'react-icons/bs';

const NewHomePage = () => {
  return (
    <div className="new-home-page">
      <div className="container">
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

        {/* About Section */}
        <section className="about-section">
          <div className="about-image-column">
            <div className="about-image-container">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
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
                  <span className="success-percent">85%</span>
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

      {/* Experts Section */}
      <section className="experts-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet our experts</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="experts-grid">
            {experts.map((expert, index) => (
              <div key={index} className="expert-card">
                <div className="expert-image-container">
                  <img src={expert.image} alt={expert.name} className="expert-image" />
                </div>
                <div className="expert-info">
                  <h3 className="expert-name">{expert.name}</h3>
                  <p className="expert-role">{expert.role}</p>
                </div>
              </div>
            ))}
          </div>
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

const experts = [
  {
    name: "Cameron Williamson",
    role: "Wordpress Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Devon Lane",
    role: "UI Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Ronald Richards",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

export default NewHomePage;