import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/logo-edit.png';
import './PlaywrightDemoRegister.css';

const PlaywrightDemoRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', session: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sessionLabel =
      form.session === 'thursday'
        ? 'Thursday at 8 PM IST to 9 PM IST'
        : 'Friday at 5:30 AM IST to 6:30 AM IST';
    const message = `Hi Hemant, I am interested in attending your Playwright with TypeScript demo session on ${sessionLabel}.\nMy name is ${form.name}.\nMy email address is ${form.email}.`;
    const encoded = encodeURIComponent(message);
    setSubmitted(true);
    window.open(`https://wa.me/918810201221?text=${encoded}`, '_blank');
  };

  return (
    <div className="pdr-page">
      <div className="pdr-card">
        <img
          src={logoImage}
          alt="W3 Automation"
          className="pdr-logo"
          onClick={() => navigate('/')}
        />

        <div className="pdr-badge">Free Demo Session</div>

        <h1 className="pdr-title">Playwright with TypeScript</h1>
        <p className="pdr-subtitle">Register for a live demo session and see what you'll learn</p>

        <div className="pdr-sessions">
          <div className="pdr-session-option">
            <span className="pdr-session-day">Thursday</span>
            <span className="pdr-session-time">8:00 PM – 9:00 PM IST</span>
          </div>
          <div className="pdr-session-divider">OR</div>
          <div className="pdr-session-option">
            <span className="pdr-session-day">Friday</span>
            <span className="pdr-session-time">5:30 AM – 6:30 AM IST</span>
          </div>
        </div>

        {!submitted ? (
          <form className="pdr-form" onSubmit={handleSubmit}>
            <div className="pdr-field">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                required
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="pdr-field">
              <label>Preferred Session</label>
              <select
                value={form.session}
                required
                onChange={(e) => setForm({ ...form, session: e.target.value })}
              >
                <option value="" disabled>Select a session</option>
                <option value="thursday">Thursday — 8:00 PM to 9:00 PM IST</option>
                <option value="friday">Friday — 5:30 AM to 6:30 AM IST</option>
              </select>
            </div>
            <div className="pdr-field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                required
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <button type="submit" className="pdr-submit-btn">
              Register via WhatsApp
            </button>
          </form>
        ) : (
          <div className="pdr-success">
            <div className="pdr-success-icon">✓</div>
            <h3>You're all set!</h3>
            <p>WhatsApp opened with your registration message. We'll confirm your spot shortly.</p>
            <button className="pdr-back-btn" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        )}

        <p className="pdr-platform">Online Platform: <strong>Zoom</strong></p>
      </div>
    </div>
  );
};

export default PlaywrightDemoRegister;
