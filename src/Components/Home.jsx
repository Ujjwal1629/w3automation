import React, { useState, useEffect, useRef } from 'react';
import { Play, BookOpen, Code, Terminal, Search, User, CheckCircle, Clock, Award, Users, ChevronRight, Menu, X, Video } from 'lucide-react';
import Navbar from './Navbar';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
// Import video assets
import video1 from '../assets/video1.mp4';
import whatsAppVideo from '../assets/WhatsApp Video 2024-11-24 at 09.38.41.mp4';

const GlassPanelStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  position: 'relative',
  zIndex: 1
};

export default function AutomationTutorPage() {
  const [activeTab, setActiveTab] = useState('selenium');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [count, setCount] = useState({ students: 0, courses: 0, reviews: 0 });
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Counter animation effect
    const maxCount = { students: 10000, courses: 2, reviews: 5000 };
    const duration = 2000; // 2 seconds
    const steps = 50;
    const interval = duration / steps;
    
    const timer = setInterval(() => {
      setCount(prevCount => ({
        students: prevCount.students < maxCount.students ? prevCount.students + Math.ceil(maxCount.students/steps) : maxCount.students,
        courses: prevCount.courses < maxCount.courses ? prevCount.courses + Math.ceil(maxCount.courses/steps) : maxCount.courses,
        reviews: prevCount.reviews < maxCount.reviews ? prevCount.reviews + Math.ceil(maxCount.reviews/steps) : maxCount.reviews,
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const courses = [
    {
      id: 'selenium',
      title: 'Selenium with Java',
      subtitle: 'Master Web Automation',
      description: 'Master web automation with the industry-standard tool used by top companies worldwide.',
      icon: <Terminal size={28} />,
      price: {
        original: '$199',
        current: '$129'
      },
      features: [
        '60+ Hours of HD Video Content',
        'Real-world Projects & Case Studies',
        'Lifetime Access to Course Updates',
        '24/7 Support & Community Access',
        'Interview Preparation & Career Guidance'
      ],
      color: '#a8d8ea',  // Soft light blue
      students: '4,250+',
      level: 'Beginner to Advanced',
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FirstTest {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.example.com");
        // Start automating!
    }
}`
    },
    {
      id: 'playwright',
      title: 'Playwright Mastery',
      subtitle: 'Modern Web Testing',
      description: "Learn end-to-end testing for modern web apps with Microsoft's powerful framework.",
      icon: <Code size={28} />,
      price: {
        original: '$179',
        current: '$149'
      },
      features: [
        '45+ Hours of Comprehensive Content',
        '10 Real-world Projects',
        'TypeScript & JavaScript Coverage',
        'CI/CD Integration Tutorials',
        'Visual Testing & Reporting'
      ],
      color: '#f7d794',  // Soft light yellow
      students: '2,750+',
      level: 'Intermediate',
      code: `const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.example.com');
  // Start automating!
})();`
    }
  ];

  const handleCourseChange = (courseId) => {
    setActiveTab(courseId);
  };
  
  const currentCourse = courses.find(course => course.id === activeTab);

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: isDarkMode ? '#1a202c' : '#f7fafc',
      paddingTop: '120px',
      fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
      margin: 0,
      padding: 0,
      color: isDarkMode ? '#fff' : '#2d3748',
      overflowX: 'hidden',
    }}>
      <Navbar />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: '4rem 5% 5rem',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: isDarkMode ? '#2d3748' : 'white',
        }}>
        {/* Gradient Orbs */}
        <div style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,87,87,0.15) 0%, rgba(255,87,87,0) 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-200px',
          left: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(140,82,255,0.15) 0%, rgba(140,82,255,0) 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }} />

        <motion.div variants={staggerChildren} initial="initial" animate="animate" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1,
          marginTop: '6rem',
        }}>
          <motion.div variants={fadeInUp} style={{
            maxWidth: '600px',
          }}>
            <motion.div whileHover={{ scale: 1.05 }} style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              ...GlassPanelStyles,
              backgroundColor: 'rgba(140, 82, 255, 0.1)',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 600,
                background: 'linear-gradient(90deg, #8c52ff 0%, #5e72eb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                #1 Automation Testing Platform
              </span>
            </motion.div>

            <h1 style={{
              fontSize: '4rem',
              fontWeight: 800,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: '-0.02em',
              color: isDarkMode ? '#ffffff' : '#2d3748',
            }}>
              Become an{' '}
              <span style={{
                background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Automation Testing
              </span>{' '}
              Expert
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: isDarkMode ? '#e2e8f0' : '#718096',
              marginBottom: '2rem',
              lineHeight: 1.6,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Learn Automation Testing with industry-standard tools and real-world projects
            </p>

            {/* Course Features */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginTop: '2rem',
            }}>
              {[
                '60+ Hours of HD Video Content',
                'Real-world Projects & Case Studies',
                'Lifetime Access to Course Updates',
                '24/7 Support & Community Access',
                'Interview Preparation & Career Guidance'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(140, 82, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <CheckCircle size={14} color="#8c52ff" />
                  </div>
                  <span style={{
                    color: isDarkMode ? '#e2e8f0' : '#4a5568',
                    fontSize: '1rem',
                    fontWeight: 500,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats Cards with Glassmorphism */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginTop: '3rem',
            }}>
              {[
                { label: 'Students', value: count.students.toLocaleString() + '+' },
                { label: 'Courses', value: count.courses + '+' },
                { label: 'Reviews', value: count.reviews.toLocaleString() + '+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  style={{
                    ...GlassPanelStyles,
                    padding: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: isDarkMode ? '#e2e8f0' : '#718096',
                    fontWeight: 500,
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code Editor with Glassmorphism */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              width: '500px',
              height: '400px',
              ...GlassPanelStyles,
              overflow: 'hidden',
            }}>
            {/* Code editor mockup */}
            <div style={{
              backgroundColor: '#1e1e3f',
              color: 'white',
              padding: '0.5rem 1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
              }}>
                <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56'}}></div>
                <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e'}}></div>
                <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f'}}></div>
              </div>
              <div style={{fontSize: '0.75rem'}}>Automation.java</div>
              <div></div>
            </div>
            <pre style={{
              padding: '1rem',
              margin: 0,
              backgroundColor: '#1e1e3f',
              color: '#fff',
              height: 'calc(100% - 36px)',
              overflow: 'auto',
              fontSize: '0.875rem',
              fontFamily: 'monospace',
              lineHeight: 1.6,
            }}>
              <code>{currentCourse.code}</code>
            </pre>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Courses Section */}
      <section id="courses" style={{
        padding: '5rem 5%',
        backgroundColor: isDarkMode ? '#1a202c' : '#f8f9fa',
        position: 'relative',
      }}>
        {/* Background gradient for courses section */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(circle, rgba(140,82,255,0.07) 0%, rgba(140,82,255,0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
        }} />

        {/* Course cards with glassmorphism */}
        <motion.div
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(255, 87, 87, 0.1)',
              color: '#ff5757',
              borderRadius: '50px',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}>
              OUR COURSES
            </div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              marginBottom: '1.5rem',
              color: isDarkMode ? '#ffffff' : '#2d3748',
            }}>
              Learn Automation Testing <span style={{
                background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Step by Step</span>
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: isDarkMode ? '#e2e8f0' : '#718096',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}>
              Structured learning paths designed by industry experts to help you master the most in-demand automation testing skills
            </p>
          </div>

          {/* Course tabs with hover animation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
            overflowX: 'auto',
            padding: '0.5rem',
          }}>
            {courses.map(course => (
              <motion.button 
                key={course.id}
                onClick={() => handleCourseChange(course.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: activeTab === course.id ? course.color : 'white',
                  color: activeTab === course.id ? 'white' : '#2d3748',
                  border: activeTab === course.id ? 'none' : '1px solid #e2e8f0',
                  padding: '0.75rem 1.5rem',
                  margin: '0 0.5rem',
                  borderRadius: '50px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: 'fit-content',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: activeTab === course.id ? `0 4px 15px ${course.color}40` : 'none',
                }}
              >
                {course.icon}
                {course.title}
              </motion.button>
            ))}
          </div>

          {/* Active course details with animation */}
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '1200px',
              margin: '0 auto',
              backgroundColor: isDarkMode ? '#2d3748' : 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: isDarkMode 
                ? '0 4px 6px rgba(0,0,0,0.2)'
                : '0 4px 6px rgba(0,0,0,0.05)',
            }}>
            <div style={{
              display: 'flex',
              backgroundColor: currentCourse.color,
              padding: '2rem',
              color: 'white',
            }}>
              <div style={{
                flexGrow: 1,
              }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  marginTop: 0,
                }}>{currentCourse.title}</h3>
                <p style={{
                  fontSize: '1.125rem',
                  opacity: 0.9,
                  marginBottom: '1.5rem',
                }}>{currentCourse.subtitle}</p>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.8,
                  maxWidth: '600px',
                  lineHeight: 1.6,
                }}>{currentCourse.description}</p>
                
                <div style={{
                  display: 'flex',
                  gap: '2rem',
                  marginTop: '2rem',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <Users size={20} />
                    <span>{currentCourse.students} Students</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <Clock size={20} />
                    <span>Lifetime Access</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <Award size={20} />
                    <span>{currentCourse.level}</span>
                  </div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                minWidth: '200px',
              }}>
                <div style={{
                  textDecoration: 'line-through',
                  opacity: 0.7,
                  marginBottom: '0.5rem',
                }}>{currentCourse.price.original}</div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  marginBottom: '1.5rem',
                }}>{currentCourse.price.current}</div>
                <button style={{
                  backgroundColor: 'white',
                  color: currentCourse.color,
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontWeight: 700,
                  cursor: 'pointer',
                  width: '100%',
                }}>
                  Enroll Now
                </button>
              </div>
            </div>
            
            <div style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#2d3748',
                marginBottom: '1rem',
              }}>What You'll Learn</h4>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
              }}>
                {currentCourse.features.map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}>
                    <div style={{
                      backgroundColor: `${currentCourse.color}20`,
                      color: currentCourse.color,
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <CheckCircle size={14} />
                    </div>
                    <span style={{
                      fontSize: '1rem',
                      color: isDarkMode ? '#e2e8f0' : '#4a5568',
                      lineHeight: 1.5,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                    }}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div style={{
                marginTop: '1rem',
                padding: '1.5rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                border: '1px dashed #e2e8f0',
              }}>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: '#2d3748',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <Code size={20} style={{ color: currentCourse.color }} />
                  Sample Code Preview
                </h4>
                <pre style={{
                  padding: '1rem',
                  backgroundColor: '#1e1e3f',
                  color: '#fff',
                  borderRadius: '8px',
                  overflow: 'auto',
                  fontSize: '0.875rem',
                  margin: 0,
                  fontFamily: 'monospace',
                  lineHeight: 1.6,
                }}>
                  <code>{currentCourse.code}</code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
          }}>
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  ...GlassPanelStyles,
                  padding: '2rem',
                }}
              >
                <motion.button 
                  onClick={() => handleCourseChange(course.id)}
                  style={{
                    backgroundColor: activeTab === course.id ? course.color : 'white',
                    color: activeTab === course.id ? 'white' : '#2d3748',
                    border: activeTab === course.id ? 'none' : '1px solid #e2e8f0',
                    padding: '0.75rem 1.5rem',
                    margin: '0 0.5rem',
                    borderRadius: '50px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    minWidth: 'fit-content',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: activeTab === course.id ? `0 4px 15px ${course.color}40` : 'none',
                  }}
                >
                  {course.icon}
                  {course.title}
                </motion.button>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </section>

      {/* Testimonials with glassmorphism */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: '5rem 5%',
          backgroundColor: isDarkMode ? '#1a202c' : 'white',
          position: 'relative',
          overflow: 'hidden',
        }}>
        {/* Background elements */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: isDarkMode 
            ? 'linear-gradient(45deg, rgba(140,82,255,0.05) 0%, rgba(255,87,87,0.05) 100%)'
            : 'linear-gradient(45deg, rgba(140,82,255,0.03) 0%, rgba(255,87,87,0.03) 100%)',
          zIndex: 0,
        }} />

        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(140, 82, 255, 0.1)',
            color: '#8c52ff',
            borderRadius: '50px',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '1rem',
          }}>
            SUCCESS STORIES
          </div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            color: isDarkMode ? '#ffffff' : '#2d3748',
          }}>
            What Our <span style={{
              background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Students</span> Say
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: isDarkMode ? '#e2e8f0' : '#718096',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Hear from students who have transformed their careers with our automation testing courses
          </p>
        </div>

        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {[
            { 
              name: "Supriya Deshpande",
              rating: 4,
              text: "I recently completed Hemant Gandhi's automation testing class on Java and Selenium, and it was outstanding. The instructor made complex topics easy to understand, and the hands-on exercises were incredibly valuable. I highly recommend this course to anyone looking to advance their automation testing skills. Hemant Gandhi's expertise and the practical approach make it ideal for both beginners and those with some experience.",
              course: "Selenium with Java"
            },
            {
              name: "Srikanth Chivukula",
              rating: 4,
              text: "I really appreciate you for taking time from daily routines and providing training on Java and Selenium. The topics covered are good and detailed. The support provided post sessions is also excellent.",
              course: "Selenium with Java"
            },
            {
              name: "Mayooran Thiruchselvam",
              rating: 5,
              text: "The session was highly engaging and insightful, providing a comprehensive understanding session. I particularly appreciated how the presentation was structured, making complex concepts easy to understand. Additionally, the practical demonstrations were effective in showcasing the functionality and potential use cases.",
              course: "Automation Testing Masterclass"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: isDarkMode 
                  ? '0 10px 30px rgba(0,0,0,0.3)'
                  : '0 10px 30px rgba(0,0,0,0.1)'
              }}
              style={{
                backgroundColor: isDarkMode ? '#2d3748' : 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: isDarkMode 
                  ? '0 4px 15px rgba(0,0,0,0.2)'
                  : '0 4px 15px rgba(0,0,0,0.05)',
                border: `1px solid ${isDarkMode ? '#4a5568' : '#edf2f7'}`,
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}>
              <div style={{
                color: '#ff5757',
                fontSize: '2rem',
                fontWeight: 800,
                lineHeight: 1,
                marginBottom: '1rem',
              }}>❝</div>
              <p style={{
                fontSize: '1rem',
                color: isDarkMode ? '#e2e8f0' : '#4a5568',
                lineHeight: 1.6,
                marginBottom: '2rem',
                flex: 1,
              }}>{testimonial.text}</p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginTop: 'auto',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                }}>
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: isDarkMode ? '#ffffff' : '#2d3748',
                    marginBottom: '0.25rem',
                  }}>{testimonial.name}</div>
                  
                  <div style={{
                    display: 'flex',
                    gap: '0.25rem',
                    marginBottom: '0.75rem',
                  }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{
                        color: i < testimonial.rating ? '#FFD700' : '#CBD5E0',
                        fontSize: '1.25rem',
                      }}>★</span>
                    ))}
                  </div>
                </div>
                
                <div style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : '#f8f9fa',
                  borderRadius: '50px',
                  fontSize: '0.875rem',
                  color: isDarkMode ? '#e2e8f0' : '#718096',
                  fontWeight: 500,
                }}>
                  {testimonial.course}
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
        
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
        }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              backgroundColor: 'rgba(140, 82, 255, 0.1)',
              color: '#8c52ff',
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            See More Testimonials
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </motion.section>

      {/* Video Testimonials Section */}
      <section style={{
        padding: '5rem 5%',
        backgroundColor: isDarkMode ? '#2d3748' : '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background elements */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: isDarkMode 
            ? 'linear-gradient(45deg, rgba(255,87,87,0.05) 0%, rgba(140,82,255,0.05) 100%)'
            : 'linear-gradient(45deg, rgba(255,87,87,0.03) 0%, rgba(140,82,255,0.03) 100%)',
          zIndex: 0,
        }} />

        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(255, 87, 87, 0.1)',
            color: '#ff5757',
            borderRadius: '50px',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '1rem',
          }}>
            VIDEO TESTIMONIALS
          </div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            color: isDarkMode ? '#ffffff' : '#2d3748',
          }}>
            Watch What Our <span style={{
              background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Students</span> Share
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: isDarkMode ? '#e2e8f0' : '#718096',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Hear success stories directly from our students who have mastered automation testing
          </p>
        </div>

        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {[
            {
              id: 1,
              name: "Kunal",
              videoUrl: video1,
              course: "Selenium with Java",
              rating: 5
            },
            {
              id: 2,
              name: "Mayank Garg",
              role: "Senior QA Engineer",
              videoUrl: whatsAppVideo,
              course: "Playwright Masterclass",
              rating: 4
            }
          ].map((videoTestimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -8, 
                boxShadow: isDarkMode 
                  ? '0 15px 35px rgba(0,0,0,0.3)'
                  : '0 15px 35px rgba(0,0,0,0.1)'
              }}
              style={{
                backgroundColor: isDarkMode ? '#2d3748' : 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: isDarkMode 
                  ? '0 4px 15px rgba(0,0,0,0.2)'
                  : '0 4px 15px rgba(0,0,0,0.05)',
                border: `1px solid ${isDarkMode ? '#4a5568' : '#edf2f7'}`,
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                position: 'relative',
                paddingTop: '56.25%', // 16:9 aspect ratio
                backgroundColor: '#000',
              }}>
                <video 
                  controls
                  preload="metadata"
                  playsInline
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                >
                  <source src={videoTestimonial.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div style={{
                padding: '1.5rem',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: isDarkMode ? '#ffffff' : '#2d3748',
                      marginBottom: '0.25rem',
                    }}>{videoTestimonial.name}</h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: isDarkMode ? '#e2e8f0' : '#718096',
                      fontWeight: 500,
                    }}>{videoTestimonial.role}</p>
                  </div>
                  
                  <div style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : '#f8f9fa',
                    borderRadius: '50px',
                    fontSize: '0.875rem',
                    color: isDarkMode ? '#e2e8f0' : '#718096',
                    fontWeight: 500,
                  }}>
                    {videoTestimonial.course}
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '0.25rem',
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{
                      color: i < videoTestimonial.rating ? '#FFD700' : '#CBD5E0',
                      fontSize: '1.25rem',
                    }}>★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}