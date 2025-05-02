import React, { useState } from 'react';
import { Mail, MapPin, Phone, ChevronRight, Send, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import "./Footer.css";

export default function Footer() {
  const theme = useTheme();
  const isDarkMode = theme ? theme.isDarkMode : false;
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isNewsletterFocused, setIsNewsletterFocused] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  const footerLinks = {
    quickLinks: [
      { text: 'Home', url: '/' },
      { text: 'Courses', url: 'https://courses.journeytoautomation.org/store' },
      { text: 'Tutorials', url: '/' },
      { text: 'Contact', url: '/' }
    ],
    courses: [
      { text: 'Selenium Master Course', url: '/selenium' },
      { text: 'Playwright Testing', url: '/playwright' },
      { text: 'Cypress Automation', url: '/' },
      { text: 'API Testing', url: '/' }
    ],
    socials: [
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/hemant-gandhi254/", name: "LinkedIn" },
      { icon: <FaGithub />, url: "https://github.com/hemantgandhi1", name: "GitHub" },
      { icon: <FaTwitter />, url: "https://x.com/Journeytoauto", name: "Twitter" },
      { icon: <FaYoutube />, url: "https://www.youtube.com/@Journeytoautomation", name: "YouTube" }
    ]
  };

  return (
    <footer style={{
      backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
      color: isDarkMode ? '#e2e8f0' : '#1a202c',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '6rem',
    }}>
      {/* Background Gradient Mesh */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: isDarkMode 
          ? 'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(244, 63, 94, 0.15) 0%, transparent 40%)'
          : 'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(244, 63, 94, 0.1) 0%, transparent 40%)',
        zIndex: 0,
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            marginBottom: '6rem',
          }}
        >
          <motion.div
            animate={{
              boxShadow: isNewsletterFocused
                ? isDarkMode 
                  ? '0 0 0 2px rgba(99, 102, 241, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  : '0 0 0 2px rgba(99, 102, 241, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                : isDarkMode
                  ? '0 20px 40px -12px rgba(0, 0, 0, 0.4)'
                  : '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
            }}
            style={{
              background: isDarkMode 
                ? 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))'
                : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9))',
              borderRadius: '24px',
              padding: '3rem',
              backdropFilter: 'blur(20px)',
              border: isDarkMode 
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'center',
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontSize: '3rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #6366f1 0%, #f43f5e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Join Our Newsletter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: '1.125rem',
                color: isDarkMode ? '#94a3b8' : '#64748b',
                marginBottom: '2.5rem',
                maxWidth: '600px',
                margin: '0 auto 2.5rem',
              }}
            >
              Stay ahead in automation testing with our weekly insights, tips, and exclusive content.
            </motion.p>
            <motion.form
              onSubmit={handleSubscribe}
              style={{
                maxWidth: '500px',
                margin: '0 auto',
              }}
            >
              <motion.div
                style={{
                  display: 'flex',
                  gap: '1rem',
                }}
              >
                <motion.input
                  onFocus={() => setIsNewsletterFocused(true)}
                  onBlur={() => setIsNewsletterFocused(false)}
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    border: isDarkMode 
                      ? '1px solid rgba(255, 255, 255, 0.1)'
                      : '1px solid rgba(0, 0, 0, 0.1)',
                    background: isDarkMode 
                      ? 'rgba(15, 23, 42, 0.5)'
                      : 'rgba(255, 255, 255, 0.9)',
                    color: isDarkMode ? '#e2e8f0' : '#1a202c',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #f43f5e)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Subscribe
                  <ArrowUpRight size={18} />
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '4rem',
          marginBottom: '4rem',
        }}>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #6366f1, #f43f5e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              JourneyToAutomation
            </motion.h3>
            <p style={{
              color: isDarkMode ? '#94a3b8' : '#64748b',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}>
              Empowering professionals with cutting-edge automation testing knowledge and practical skills.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
            }}>
              {footerLinks.socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                    color: isDarkMode ? '#e2e8f0' : '#1a202c',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
            }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ marginBottom: '1rem' }}
                >
                  <motion.a
                    href={link.url}
                    onHoverStart={() => setHoveredLink(`quick-${index}`)}
                    onHoverEnd={() => setHoveredLink(null)}
                    style={{
                      color: isDarkMode ? '#94a3b8' : '#64748b',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <motion.span
                      animate={{
                        x: hoveredLink === `quick-${index}` ? 5 : 0,
                      }}
                    >
                      {link.text}
                    </motion.span>
                    <motion.span
                      animate={{
                        opacity: hoveredLink === `quick-${index}` ? 1 : 0,
                        x: hoveredLink === `quick-${index}` ? 0 : -10,
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
            }}>Popular Courses</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.courses.map((course, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ marginBottom: '1rem' }}
                >
                  <motion.a
                    href={course.url}
                    onHoverStart={() => setHoveredLink(`course-${index}`)}
                    onHoverEnd={() => setHoveredLink(null)}
                    style={{
                      color: isDarkMode ? '#94a3b8' : '#64748b',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <motion.span
                      animate={{
                        x: hoveredLink === `course-${index}` ? 5 : 0,
                      }}
                    >
                      {course.text}
                    </motion.span>
                    <motion.span
                      animate={{
                        opacity: hoveredLink === `course-${index}` ? 1 : 0,
                        x: hoveredLink === `course-${index}` ? 0 : -10,
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
            }}>Contact</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { icon: <MapPin size={18} />, text: 'New Delhi, 110001' },
                { icon: <Mail size={18} />, text: 'journeytoautomation@gmail.com', isLink: true },
                { icon: <Phone size={18} />, text: '+91 XXX XXX XXXX' }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6366f1',
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  {item.isLink ? (
                    <a
                      href={`mailto:${item.text}`}
                      style={{
                        color: isDarkMode ? '#94a3b8' : '#64748b',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>
                      {item.text}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            borderTop: isDarkMode 
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(0, 0, 0, 0.1)',
            padding: '2rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{
            color: isDarkMode ? '#94a3b8' : '#64748b',
            fontSize: '0.875rem',
          }}>
            &copy; {new Date().getFullYear()} JourneyToAutomation. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '2rem',
          }}>
            {['Privacy Policy', 'Terms of Use', 'FAQ'].map((text, index) => (
              <motion.a
                key={index}
                href={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ color: '#6366f1' }}
                style={{
                  color: isDarkMode ? '#94a3b8' : '#64748b',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.3s ease',
                }}
              >
                {text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}