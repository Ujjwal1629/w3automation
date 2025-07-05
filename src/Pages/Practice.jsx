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
import EcommerceStore from './EcommerceStore/EcommerceStore';
import SliderTest from './Practice-sites/SliderTest';
import ResizableDiv from './Practice-sites/Resizable';
import DragDropTest from './Practice-sites/DragDropTest';
import DatePickerDropdown from './Practice-sites/DatePickerDropdown';
// import APITestPractice from './Practice-sites/APITestPractice';
import IframeTest from './Practice-sites/IframeTest';
import RestApiTest from './Practice-sites/RestApiTest';
import GraphQLTest from './Practice-sites/GraphQLTest';

// Define tool categories
const practiceTools = {
  ui: [
    { name: 'Form Elements', path: 'form' },
    { name: 'Alert Box', path: 'alert' },
    { name: 'Image Context', path: 'image' },
    { name: 'Browser Tab Opener', path: 'browser' },
    { name: 'Links Testing', path: 'links' },
    { name: 'Authentication', path: 'auth' },
    { name: 'iFrame Testing', path: 'iframe' },
    { name: 'Slider', path: 'slider' },
    { name: 'Resizable', path: 'resizable' },
    { name: 'Drag Drop', path: 'dragdrop' },
    { name: 'Date Picker', path: 'datepicker' },
  ],
  api: [
    { name: 'REST API', path: 'restapi' },
    { name: 'GraphQL', path: 'graphql' },
  ],
  ecommerce: [
    { name: 'Ecommerce Store', path: 'ecommerce' },
  ]
};

const Practice = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(localStorage.getItem('practiceCategory') || 'ui');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Listen for category changes from navbar
  useEffect(() => {
    const handleCategoryChange = (event) => {
      setActiveCategory(event.detail);
    };

    document.addEventListener('practiceCategoryChanged', handleCategoryChange);
    
    return () => {
      document.removeEventListener('practiceCategoryChanged', handleCategoryChange);
    };
  }, []);

  // Get practice links based on active category
  const getFilteredLinks = () => {
    return practiceTools[activeCategory] || [];
  };

  // Navigate to first component by default if on base practice route
  useEffect(() => {
    if (location.pathname === '/practice') {
      const defaultPath = practiceTools[activeCategory]?.[0]?.path || 'form';
      navigate(`/practice/${defaultPath}`);
    }
  }, [location, navigate, activeCategory]);
  
  // Effect to scroll to top and add page transition when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add and remove a class to the content area for a transition effect
    const contentElement = document.querySelector('.practice-content');
    if (contentElement) {
      contentElement.classList.add('category-transition');
      setTimeout(() => {
        contentElement.classList.remove('category-transition');
      }, 500);
    }
  }, [activeCategory]);

  // Handle category selection in the sidebar
  const handleSidebarCategoryClick = (category) => {
    setActiveCategory(category);
    localStorage.setItem('practiceCategory', category);
    
    // Dispatch event to sync with navbar
    const event = new CustomEvent('practiceCategoryChanged', { detail: category });
    document.dispatchEvent(event);
  };

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
          
          {/* Category filters in sidebar */}
          <div style={{ 
            marginBottom: '1.5rem',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            paddingBottom: '1rem',
          }}>
            {['ui', 'api', 'ecommerce'].map((category) => (
              <button
                key={category}
                onClick={() => handleSidebarCategoryClick(category)}
                style={{
                  background: activeCategory === category 
                    ? 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)' 
                    : 'rgba(255, 255, 255, 0.05)',
                  color: activeCategory === category ? '#fff' : 'inherit',
                  border: 'none',
                  padding: '0.7rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: activeCategory === category ? '600' : '500',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  textAlign: 'left',
                  marginBottom: '0.75rem',
                  boxShadow: activeCategory === category 
                    ? '0 4px 12px rgba(140, 82, 255, 0.2)' 
                    : '0 2px 4px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.2s ease',
                }}
              >
                {category === 'ui' ? (
                   <>
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                     UI Tools
                   </>
                 ) : category === 'api' ? (
                   <>
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/></svg>
                     API Tools
                   </>
                 ) : (
                   <>
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                     E-commerce Tools
                   </>
                 )}
              </button>
            ))}
          </div>
          
          {/* Category indication */}
          <div style={{
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            background: 'rgba(140, 82, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px dashed rgba(140, 82, 255, 0.3)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {activeCategory === 'ui' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              ) : activeCategory === 'api' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              )}
              <span style={{ fontWeight: '600' }}>
                {activeCategory === 'ui' ? 'UI Tools' : 
                 activeCategory === 'api' ? 'API Tools' : 
                 'E-commerce Tools'}
              </span>
            </div>
            <div style={{ 
              background: '#8c52ff', 
              color: 'white',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}>
              {getFilteredLinks().length}
            </div>
          </div>

          {/* Tool list header */}
          <div style={{
            marginBottom: '0.75rem',
            paddingLeft: '0.5rem',
            fontSize: '0.85rem',
            fontWeight: '500',
            color: '#666',
            display: 'flex',
            alignItems: 'center',
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><path d="M9 6 6 9H2V4l3-3"/><path d="m14 6 3 3h4V4l-3-3"/><path d="M9 18l-3-3H2v5l3 3"/><path d="m14 18 3-3h4v5l-3 3"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
            Available Tools
          </div>

          {/* Filtered practice links */}
          <div style={{
            paddingLeft: '0.5rem',
            animation: 'fadeIn 0.3s ease-in-out',
          }}>
            {getFilteredLinks().map((link, index) => (
              <div
                key={link.path}
                className="practice-sidebar-link"
                onClick={() => navigate(`/practice/${link.path}`)}
                style={{
                  position: 'relative',
                  paddingLeft: '1rem',
                  animation: `slideIn 0.3s ease-in-out ${index * 0.05}s both`
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: '0',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)'
                }}></div>
                {link.name}
              </div>
            ))}
          </div>
          
          {/* Add animation keyframes */}
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              
              @keyframes slideIn {
                from {
                  opacity: 0;
                  transform: translateX(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
              
              .practice-content {
                transition: opacity 0.3s ease-in-out;
              }
              
              .category-transition {
                opacity: 0.5;
              }
            `}
          </style>
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
            {/* <Route path="api" element={<APITestPractice />} /> */}
            <Route path="iframe" element={<IframeTest />} />
            <Route path="restapi" element={<RestApiTest />} />
            <Route path="graphql" element={<GraphQLTest />} />
            <Route path="ecommerce/*" element={<EcommerceStore />} />
            <Route path="slider" element={<SliderTest />} />
            <Route path="resizable" element={<ResizableDiv />} />
            <Route path="dragdrop" element={<DragDropTest />} />
            <Route path="datepicker" element={<DatePickerDropdown />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Practice;