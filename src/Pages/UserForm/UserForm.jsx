import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    whatsappNumber: '',
    email: '',
    country: '',
    experience: '',
    queries: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Have to add our backend API endpoint
      const response = await fetch('https://w3-backend-salvatores-projects-9d7f38e8.vercel.app/api/saveUserGoogleSheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for registering! You will be added to a WhatsApp group for further information on the course..');
        setFormData({
          firstName: '',
          lastName: '',
          whatsappNumber: '',
          email: '',
          country: '',
          experience: '',
          queries: '',
        });
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  // Function to handle copying the phone number to the clipboard
  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+91 8810201221').then(() => {
      alert('Phone number copied to clipboard');
    }).catch((err) => {
      console.error('Failed to copy phone number: ', err);
    });
  };

  return (
    <div className="form-container">
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      {/* Two-Column Layout */}
      <div className="course-details">
        <h2>Selenium Java Automation Training</h2>
        <p><strong>Demo sessions:</strong> 15th and 16th March 2025 at 8 PM IST</p>
        <p><strong>Batch Starting Date:</strong> 17th March 2025</p>
        <p><strong>Course Content:</strong> Java, Selenium, TestNG, Page Object Model, Framework Types, Writing Automation Framework from Scratch, Git, GitHub, GitHub Desktop, Agile Methodology, Resume Assistance, and many more!</p>
        <p><strong>Why Join Us?</strong></p>
        <ul>
          <li>🚀 Trained Over 100+ Professionals in Automation Testing</li>
          <li>📚 Tailored Notes Covering All Key Topics</li>
          <li>🔍 Detailed Core Topic Explanations with Real-World Examples</li>
          <li>🎯 Interview Prep, Resume Guidance, and Additional Support</li>
          <li>💻 Live Classes with Access to Recorded Sessions at Competitive Rates</li>
        </ul>
        <p><strong>Key Highlights:</strong></p>
        <ul>
          <li>✔ First 2 Sessions are Free (Demo Sessions)</li>
          <li>✅ Course Duration: 2 months</li>
          <li>✅ Monday to Thursday: 8:00 PM - 9:30 PM IST</li>
          <li>✅ Course Fees: INR 8000 / 100€ / 120 USD</li>
          <li>✅ Mode of Training: Online</li>
        </ul>
        <p>Catch you all on Demo Classes on <strong>15th and 16th March 2025 at 8 PM IST</strong>.</p>
        <p><em>Thank You!</em></p>
        <p><strong>Trainer Name:</strong>Hemant Gandhi
        {/* <strong>(+91-8810201221)</strong></p> */}
        <strong><span onClick={copyPhoneNumber} style={{ cursor: 'pointer', textDecoration: 'none', userSelect: 'none' }}>
          (+91-8810201221)
        </span></strong>
        </p>
      </div>

      {/* Registration Form */}
      <div className="form-section">
        <h2>Register Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="whatsappNumber">WhatsApp Number</label>
            <input
              type="tel"
              id="whatsappNumber"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="Enter your WhatsApp number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="experience">Total Experience in IT/Testing</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 5 years"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="queries">Any Queries?</label>
            <textarea
              id="queries"
              name="queries"
              value={formData.queries}
              onChange={handleChange}
              placeholder="Mention your queries here (optional)"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;