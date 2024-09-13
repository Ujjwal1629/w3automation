import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer-w3">
  <div class="footer-container">
    <div class="footer">
      <div class="footer-content">
        <div class="newsletter">
          <h2>Subscribe to Our Newsletter</h2>
          <div class="newsletter-form">
            <input class="newsletter-input" placeholder="Email here" />
            <button class="newsletter-btn">Submit</button>
          </div>
        </div>
        <div class="footer-row">
          <div class="footer-column">
            <div class="footer-about">
              <h3>About Us</h3>

              <p>
              At W3AUTOMATION, we are dedicated to empowering professionals with the knowledge and skills needed to excel in the field of automation testing. Our comprehensive library of courses is designed to cover a wide range of tools, frameworks, and best practices, ensuring that learners of all levels—from beginners to experts—can find the right resources to advance their careers.

              </p>

            </div>
          </div>

          <div class="footer-column">
            <div class="footer-links">
              <h3>Useful Links</h3>
              <a href="/">Home</a>
              <a href="/aboutus">About</a>
              <a href="/services">Courses</a>
              <a href="/contact">Contact Us</a>
            </div>
          </div>
          <div class="footer-column">
            <div class="footer-contact">
              <h3>Get In Touch</h3>
              <p>
                <i class="fa fa-map-marker" aria-hidden="true"></i> New Delhi, 110001
              </p>
              <p>
                <i class="fa fa-envelope"></i> gandhihemant10@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-menu">
        <div class="f-menu">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQs</a>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="footer-row">
          <div class="footer-column">
            <p>
              &copy; <a href="#">W3automation</a>, All Rights
              Reserved.
            </p>
          </div>
          <div class="footer-column">
            <p>
              Developed & Maintained By{" "}
              Ujjwal Singh
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
