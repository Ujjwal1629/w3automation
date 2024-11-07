import React from 'react';
import { Mail, MapPin, Phone, ChevronRight, Send } from 'lucide-react';
import { FaLinkedin,FaGithub,FaTwitter,FaYoutube } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-container">
          {/* Newsletter Section */}
          <div className="newsletter-section">
            <h2>Stay Updated with Latest Tutorials</h2>
            <p>Get the latest automation testing tips and tutorials directly in your inbox</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="input-group">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">
                  <Send size={20} />
                  <span>Subscribe</span>
                </button>
              </div>
            </form>
          </div>

          {/* Main Footer Content */}
          <div className="footer-content">
            {/* About Section */}
            <div className="footer-section">
              <h3>About Us</h3>
              <p>
                Empowering professionals with cutting-edge automation testing knowledge. 
                Our platform offers comprehensive courses designed for all skill levels, 
                from beginners to advanced practitioners.
              </p>
              <div className="social-links">
  <a
    href="https://www.linkedin.com/in/hemant-gandhi254/"
    className="social-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/hemantgandhi1"
    className="social-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>
  <a
    href="https://x.com/Journeytoauto"
    className="social-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitter />
  </a>
  <a
    href="https://www.youtube.com/@Journeytoautomation"
    className="social-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaYoutube />
  </a>
</div>

            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="quick-links">
                <li><ChevronRight size={16} /><a href="/">Home</a></li>
                <li><ChevronRight size={16} /><a href="https://courses.journeytoautomation.org/store">Courses</a></li>
                <li><ChevronRight size={16} /><a href="/">Tutorials</a></li>
                <li><ChevronRight size={16} /><a href="/">Contact</a></li>
              </ul>
            </div>

            {/* Popular Courses */}
            <div className="footer-section">
              <h3>Popular Courses</h3>
              <ul className="course-links">
                <li><a href="/selenium">Selenium Master Course</a></li>
                <li><a href="/playwright">Playwright Testing</a></li>
                <li><a href="/">Cypress Automation</a></li>
                <li><a href="/">API Testing</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul className="contact-info">
                <li>
                  <MapPin size={18} />
                  <span>New Delhi, 110001</span>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:gandhihemant10@gmail.com">journeytoautomation@gmail.com</a>
                </li>
                <li>
                  <Phone size={18} />
                  <span>+91 XXX XXX XXXX</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} JourneyToAutomation. All rights reserved.</p>
            </div>
            <div className="bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
              <a href="/faq">FAQ</a>
            </div>
            <div className="credits">
              <p>Developed/Designed by <a href="#" className="developer-link">JourneyToAutomation</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}