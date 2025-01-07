import React from 'react';
import './AboutUs.css';
import { Code, BookOpen, Terminal, Users, Globe, Award } from 'react-feather';
import Navbar from '../Components/Navbar';

const AboutUs = () => {
  const features = [
    {
      icon: <Terminal className="feature-icon" />,
      title: "Comprehensive Learning Path",
      description: "Structured curriculum covering Selenium, Playwright, API Testing and more to guide you from basics to advanced automation."
    },
    {
      icon: <Code className="feature-icon" />,
      title: "Practical Examples",
      description: "Real-world code examples and hands-on exercises to reinforce your learning and build practical skills."
    },
    {
      icon: <BookOpen className="feature-icon" />,
      title: "Interview Preparation",
      description: "Curated interview questions and answers to help you prepare for automation testing job interviews."
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Community Driven",
      description: "Join a community of learners and professionals to share knowledge and experiences."
    },
    {
      icon: <Globe className="feature-icon" />,
      title: "Always Accessible",
      description: "Free, open access to quality automation testing education from anywhere, anytime."
    },
    {
      icon: <Award className="feature-icon" />,
      title: "Industry Relevant",
      description: "Content aligned with current industry practices and tools used in professional testing environments."
    }
  ];

  return (
    <>
     <Navbar />
    <div className="about-us">
      <div className="hero-sectionn">
        <h1>About JourneyToAutomation</h1>
        <p className="mission-statement">
          Empowering the next generation of automation testers through comprehensive, 
          practical, and accessible learning resources.
        </p>
      </div>

      <div className="content-section">
        <div className="about-description">
          <h2>Our Story</h2>
          <p>
            JourneyToAutomation was created with a simple mission: to make quality automation 
            testing education accessible to everyone. We understand the challenges of learning 
            automation testing and have structured our platform to provide a clear, practical 
            learning path for beginners and experienced testers alike.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs; 