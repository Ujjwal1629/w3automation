import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import './Practice.css';
import AlertTest from './Practice-sites/AlertTest';
import ImageTest from './Practice-sites/ImageTest';
import LinksTesting from './Practice-sites/LinksTesting';
import Authentication from './Practice-sites/Authentication';
import TestPractice from './Practice-sites/TestPractice';
import BrowserWindowOpener from './Practice-sites/BrowserWindowTabOpener';
import Navbar from '../Components/Navbar';
import EcommerceTesting from './Practice-sites/pages/EcommerceTesting';

const Practice = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const practiceLinks = [
    { name: 'Form Elements', path: 'form' },
    { name: 'Alert Box', path: 'alert' },
    { name: 'Image Context', path: 'image' },
    { name: 'Browser Tab Opener', path: 'browser' },
    { name: 'Links Testing', path: 'links' },
    { name: 'Authentication', path: 'auth' },
    { name: 'EcommerceTesting', path: 'ecom' }
  ];

  // Navigate to first component by default if on base practice route
  useEffect(() => {
    if (location.pathname === '/practice') {
      navigate('/practice/form');
    }
  }, [location, navigate]);

  return (
    <>
      <Navbar />
      <div className="practice-page-layout">
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        <div className={`practice-sidebar ${isMobileMenuOpen ? 'active' : ''}`}>
          <h2>Practice Tests</h2>
          {practiceLinks.map((link) => (
            <div
              key={link.path}
              className="practice-sidebar-link"
              onClick={() => navigate(`/practice/${link.path}`)}
            >
              {link.name}
            </div>
          ))}
        </div>
        <div className="practice-content">
          <Routes>
            <Route index element={<TestPractice />} />
            <Route path="form" element={<TestPractice />} />
            <Route path="alert" element={<AlertTest />} />
            <Route path="image" element={<ImageTest />} />
            <Route path="browser" element={<BrowserWindowOpener />} />
            <Route path="links" element={<LinksTesting />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="ecom" element={<EcommerceTesting />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Practice;