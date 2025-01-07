import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './TestimonialSection.css';
import videoPath from "../assets/video1.mp4";

const testimonials = [
  {
    id: 1,
    name: "Sarthak Gupta",
    role: "QA Lead",
    text: "The Selenium Master course transformed our testing process. The practical examples and in-depth explanations made complex concepts easy to understand.",
    rating: 5,
    course: "Selenium Master Course",
    type: "text",
  },
  {
    id: 2,
    name: "Ujjwal Singh",
    role: "Senior Automation Tester",
    text: "I went from manual testing to automation expert in just 3 months. The Playwright course content is top-notch and always up-to-date with latest practices.",
    rating: 5,
    course: "Playwright Testing",
    type: "text",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    role: "Test Automation Engineer",
    text: "The API testing course provided invaluable insights into modern testing practices. The hands-on projects really helped cement my understanding.",
    rating: 5,
    course: "API Testing Masterclass",
    type: "text",
  },
  {
    id: 4,
    name: "Vishvesh Kushwaha",
    role: "DevOps Engineer",
    text: "Cypress course was exactly what our team needed. Clear explanations, real-world examples, and excellent support from the instructors.",
    rating: 5,
    course: "Cypress Automation",
    type: "text",
  },
  {
    id: 5,
    name: "Ankita Sharma",
    role: "Automation Architect",
    videoUrl: videoPath,
    course: "Advanced Automation Strategies",
    type: "video",
  },
  {
    id: 6,
    name: "Manoj Kumar",
    role: "Senior QA Engineer",
    videoUrl: "https://www.example.com/video2.mp4",
    course: "Load Testing Mastery",
    type: "video",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>What Our Students Say</h2>
          <p>Join thousands of successful automation engineers who transformed their careers with us</p>
        </div>

        <div className="testimonials-carousel">
          <button className="nav-button prev" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>
          <button className="nav-button next" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>

          <div className="testimonials-wrapper">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  opacity: index === currentIndex ? 1 : 0,
                  zIndex: index === currentIndex ? 1 : 0,
                }}
              >
                {testimonial.type === "text" ? (
                  <>
                    <Quote className="quote-icon" size={40} />
                    <div className="testimonial-content">
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="star" size={16} fill="#FFD700" color="#FFD700" />
                        ))}
                      </div>
                      <div className="course-tag">{testimonial.course}</div>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="video-testimonial">
                    <video controls className="testimonial-video">
                      <source src={testimonial.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
