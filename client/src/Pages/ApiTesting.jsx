import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import "./ApiTesting.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PlaywrightWithJavaScript from '../Sections/Sections-ApiTesting/PlaywrightWithJavaScript';

// Add your API Testing section components imports here
// Example:
// import ApiOverview from '../Sections/Sections-ApiTesting/ApiOverview';

const sections = [
  { path: 'PlaywrightWithJavaScript', component: <PlaywrightWithJavaScript /> },
];

export default function ApiTesting() {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="ApiTesting">
      <Navbar />
      <div className="main">
        <div className={`container-left ${isMobile ? 'hidden' : ''}`}>
          <div className="container-leftt">
            <div className="container-links">
              <h1>API Testing</h1>
              {sections.map((section, index) => (
                <Link key={index} className="links" to={section.path}>
                  {section.path.replace(/([A-Z])/g, ' $1').trim()}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="main-page">
            <Routes>
              <Route path="/" element={PlaywrightWithJavaScript} />
              {sections.map((section, index) => (
                <Route key={index} path={`/${section.path}`} element={section.component} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
