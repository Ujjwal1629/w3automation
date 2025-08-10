import "./App.css";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";//using react hot toast to fetch conditions and display, stated inside authController
import Dashboard from "./Components/Dashboard";
import Selenium from "./Pages/Selenium";
import Playwright from "./Pages/Playwright";
import Footer from "./Components/Footer";
import TestimonialSection from "./Components/TestimonialSection";
import InterviewQuestions from "./Pages/InterviewQuestions";
import AboutUs from './Pages/AboutUs';
import ApiTesting from "./Pages/ApiTesting";
import BlogPost from "./Pages/BlogPost";
import TestPractice from "./Pages/Practice-sites/TestPractice";
import APITestPractice from "./Pages/Practice-sites/APITestPractice";
import AlertTest from './Pages/Practice-sites/AlertTest.jsx';
import UserForm from './Pages/UserForm/UserForm.jsx';
import CourseDetailPage from "./Pages/CourseDetail/CourseDetailPage.jsx";
import ImageTest from "./Pages/Practice-sites/ImageTest.jsx";
import BrowserWindowTabOpener from "./Pages/Practice-sites/BrowserWindowTabOpener.jsx";
import LinksTesting from "./Pages/Practice-sites/LinksTesting.jsx";
import Authentication from "./Pages/Practice-sites/Authentication.jsx";
import Practice from "./Pages/Practice.jsx";
import GetCertificate from "./Pages/GetCertificate/GetCertificate.jsx"
import Template from "./Template/CertificateTemplate.jsx"
import EcommerceStore from "./Pages/EcommerceStore/EcommerceStore";
import SliderTest from "./Pages/Practice-sites/SliderTest.jsx";
import ResizableDiv from "./Pages/Practice-sites/Resizable.jsx";
import DragDropTest from "./Pages/Practice-sites/DragDropTest.jsx";
import DatePickerDropdown from "./Pages/Practice-sites/DatePickerDropdown.jsx";
import SeleniumIDE from "./Pages/Selenium-Java/SeleniumIDE";
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { initGA, trackPageView } from './utils/analytics';
import DriveAccessPage from "./Pages/GoogleDrive/DriveAccessPage.jsx";
import ColdStartOverlay from './Components/ColdStartOverlay';
import IframeTest from "./Pages/Practice-sites/IframeTest";
import GraphQLTest from "./Pages/Practice-sites/GraphQLTest";
import RestApiTest from "./Pages/Practice-sites/RestApiTest";
import CourseDetailPageSDET from "./Pages/CourseDetail/CourseDetailPageSDET.jsx";
import LivePractice from "./Pages/LivePractice";
import ChallengeDetail from "./Pages/ChallengeDetail";
import Leaderboard from "./Pages/Leaderboard";
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, X } from 'lucide-react';

initGA();

// Banner component to ensure consistent styling and behavior
// const PromoBanner = ({ showBanner, setShowBanner, isDarkMode, isMobile }) => {
//   const handleBannerClick = () => {
//     window.open('https://zoom.us/meeting/register/Giq7w6dIRAqSZQjdLxLvOw', '_blank');
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.5 }}
//       className="promo-banner"
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1001,
//         backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.95)' : 'rgba(255, 255, 255, 0.95)',
//         backdropFilter: 'blur(8px)',
//         WebkitBackdropFilter: 'blur(8px)',
//         padding: isMobile ? '12px 16px' : '16px 24px',
//         cursor: 'pointer',
//         overflow: 'hidden',
//         width: '100%',
//         display: 'flex',
//         flexDirection: isMobile ? 'column' : 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         borderBottom: `2px solid ${isDarkMode ? 'rgba(140, 82, 255, 0.5)' : 'rgba(140, 82, 255, 0.3)'}`,
//         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//       }}
//       onClick={handleBannerClick}
//       whileHover={{ scale: 1.005 }}
//       whileTap={{ scale: 0.995 }}
//     >
//       {/* Modern gradient overlay */}
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: `linear-gradient(135deg, ${isDarkMode ? 'rgba(140, 82, 255, 0.15)' : 'rgba(140, 82, 255, 0.08)'} 0%, ${isDarkMode ? 'rgba(255, 87, 87, 0.15)' : 'rgba(255, 87, 87, 0.08)'} 100%)`,
//         backgroundSize: '200% 200%',
//         animation: 'gradientAnimation 6s ease infinite',
//         zIndex: 0,
//       }} />
      
//       <div style={{ 
//         display: 'flex', 
//         alignItems: 'center', 
//         zIndex: 1, 
//         flexGrow: 1,
//         marginBottom: isMobile ? '8px' : '0',
//         width: isMobile ? '100%' : 'auto',
//       }}>
//         <div style={{
//           backgroundColor: isDarkMode ? 'rgba(140, 82, 255, 0.2)' : 'rgba(140, 82, 255, 0.1)',
//           borderRadius: '50%',
//           padding: '8px',
//           marginRight: '12px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           boxShadow: '0 4px 12px rgba(140, 82, 255, 0.2)',
//           animation: 'pulse 2s infinite ease-in-out',
//           flexShrink: 0,
//         }}>
//           <Calendar 
//             size={isMobile ? 18 : 24} 
//             style={{ color: '#8c52ff' }} 
//           />
//         </div>
//         <div style={{ maxWidth: isMobile ? '100%' : '500px' }}>
//           <span style={{ 
//             fontWeight: 700, 
//             fontSize: isMobile ? '13px' : '16px',
//             color: isDarkMode ? '#fff' : '#333',
//             letterSpacing: '0.3px',
//             display: 'block',
//           }}>
//             🎫 FREE LIVE SESSIONS (For Interview Preparation batch)
//           </span>
//           <span style={{
//             fontSize: isMobile ? '11px' : '14px',
//             color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)',
//             display: 'block',
//             marginTop: '2px',
//             whiteSpace: isMobile ? 'normal' : 'nowrap',
//           }}>
//             TODAY AND TOMORROW • 24TH & 25TH JULY • 8 PM IST
//           </span>
//         </div>
//       </div>
      
//       <div style={{ 
//         display: 'flex', 
//         alignItems: 'center',
//         justifyContent: isMobile ? 'center' : 'flex-start',
//         zIndex: 1,
//         backgroundColor: '#8c52ff',
//         padding: isMobile ? '8px 16px' : '10px 20px',
//         borderRadius: '50px',
//         marginLeft: isMobile ? '0' : '16px',
//         transition: 'all 0.3s ease',
//         boxShadow: '0 4px 15px rgba(140, 82, 255, 0.3)',
//         position: 'relative',
//         overflow: 'hidden',
//         width: isMobile ? '100%' : 'auto',
//         marginTop: isMobile ? '4px' : 0,
//         marginBottom: isMobile ? '4px' : 0,
//       }}>
//         {/* Button gradient overlay */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'linear-gradient(90deg, rgba(140, 82, 255, 1), rgba(162, 89, 255, 1))',
//           zIndex: -1,
//         }} />
        
//         {/* Button shine effect */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: '-100%',
//           width: '100%',
//           height: '100%',
//           background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
//           animation: 'shineEffect 3s infinite',
//           zIndex: 0,
//         }} />
        
//         <span style={{ 
//           color: '#fff', 
//           fontWeight: 600, 
//           marginRight: '8px',
//           fontSize: isMobile ? '13px' : '14px',
//           letterSpacing: '0.5px',
//           zIndex: 1,
//         }}>
//           REGISTER NOW
//         </span>
//         <ExternalLink size={isMobile ? 14 : 16} color="#fff" style={{ zIndex: 1 }} />
//       </div>
      
//       <motion.button 
//         whileHover={{ scale: 1.1, rotate: 90 }}
//         whileTap={{ scale: 0.9 }}
//         style={{
//           background: 'none',
//           border: 'none',
//           color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)',
//           cursor: 'pointer',
//           marginLeft: '12px',
//           padding: '8px',
//           zIndex: 1,
//           position: isMobile ? 'absolute' : 'relative',
//           top: isMobile ? '8px' : 'auto',
//           right: isMobile ? '8px' : 'auto',
//           borderRadius: '50%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           transition: 'all 0.2s ease',
//         }}
//         onClick={(e) => {
//           e.stopPropagation();
//           setShowBanner(false);
//         }}
//       >
//         <X size={isMobile ? 16 : 18} />
//       </motion.button>
//     </motion.div>
//   );
// };

function App() {
  const location = useLocation();
  const [serverReady, setServerReady] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Ping backend once on initial load
  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => setShowMessage(true), 3000); // show msg if takes >3s

    const ping = async () => {
      try {
        const endpointUrl = import.meta.env.MODE === 'development'
          ? 'http://localhost:5001/health'
          : '/health';
        await fetch(endpointUrl, { signal: controller.signal, cache: 'no-store' });
      } catch (err) {
        // ignore – overlay stays until it eventually succeeds or user refreshes
      } finally {
        clearTimeout(timeoutId);
        setServerReady(true);
      }
    };

    ping();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  if (!serverReady) {
    return <ColdStartOverlay message={showMessage ? 'Waking up server… please hold on.' : ''} />;
  }

  return (
    <div className="route">
      <Routes>
        <Route path="/" element={
          <ThemeProvider>
            <HomePage />
          </ThemeProvider>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Selenium/*" element={<Selenium />} />
        <Route path="/Playwright/*" element={<Playwright />} />
        {/* <Route path="/ApiTesting/*" element={<ApiTesting />} /> */}
        <Route path="/InterviewQuestions/*" element={<InterviewQuestions />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Blogs" element={<BlogPost />} />
        
        {/* Redirects for old URLs */}
        <Route path="/AuthPractice" element={<Navigate to="/practice/form" replace />} />
        <Route path="/APITestPractice" element={<Navigate to="/practice/api" replace />} />
        <Route path="/AlertTest" element={<Navigate to="/practice/alert" replace />} />
        <Route path="/ImageTest" element={<Navigate to="/practice/image" replace />} />
        <Route path="/BrowserWindowTabOpener" element={<Navigate to="/practice/browser" replace />} />
        <Route path="/LinksTesting" element={<Navigate to="/practice/links" replace />} />
        <Route path="/Authentication" element={<Navigate to="/practice/auth" replace />} />
        <Route path="/slider" element={<Navigate to="/practice/slider" replace />} />
        <Route path="/resizable" element={<Navigate to="/practice/resizable" replace />} />
        <Route path="/dragdrop" element={<Navigate to="/practice/dragdrop" replace />} />
        <Route path="/datepicker" element={<Navigate to="/practice/datepicker" replace />} />
        
        <Route path="/userForm" element={<UserForm/>} />
        <Route path="/course/:courseId" element={<CourseDetailPage/>} />
        <Route path="/courseSDET" element={<CourseDetailPageSDET/>} />
        <Route path="/practice/*" element={<Practice />} />
        <Route path="/getCertificate" element={<GetCertificate />} />
        <Route path="/template" element={<Template />} />
        
        {/* E-commerce routes */}
        <Route path="/ecommerce/*" element={<EcommerceStore />} />
        
        {/* Other practice routes */}
        <Route path="/selenium-java" element={<SeleniumIDE />} />
        <Route path="/drivePage" element={<DriveAccessPage/>} />
        <Route path="/practice/iframe" element={<IframeTest />} />
        <Route path="/practice/graphql" element={<GraphQLTest />} />
        <Route path="/practice/restapi" element={<RestApiTest />} />
        <Route path="/live-practice" element={
          <ThemeProvider>
            <LivePractice />
          </ThemeProvider>
        } />
        <Route path="/live-practice/:id" element={
          <ThemeProvider>
            <ChallengeDetail />
          </ThemeProvider>
        } />
        <Route path="/leaderboard" element={
          <ThemeProvider>
            <Leaderboard />
          </ThemeProvider>
        } />
      </Routes>
    </div>
  );
}

function HomePage() {
  // const [showBanner, setShowBanner] = useState(true);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { isDarkMode } = useTheme();
  // const [bannerHeight, setBannerHeight] = useState(0);
  // const bannerRef = React.useRef(null);

  // Handle window resize
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // Measure banner height
  // useLayoutEffect(() => {
  //   if (showBanner && bannerRef.current) {
  //     const height = bannerRef.current.offsetHeight;
  //     setBannerHeight(height);
  //   } else {
  //     setBannerHeight(0);
  //   }
  // }, [showBanner, windowWidth]);

  // Update navbar margin when banner visibility changes
  // useEffect(() => {
  //   const navbar = document.querySelector('.navbar');
  //   if (navbar) {
  //     // Position navbar below banner
  //     navbar.style.top = showBanner ? `${bannerHeight}px` : '0';
  //     navbar.style.transition = 'top 0.3s ease';
  //   }
  // }, [showBanner, bannerHeight]);

  // Check if mobile view
  // const isMobile = windowWidth < 768;

  return (
    <div className="app">
      {/* Registration Banner */}
      {/* {showBanner && (
        <div ref={bannerRef} style={{ height: 'auto', width: '100%' }}>
          <PromoBanner 
            showBanner={showBanner} 
            setShowBanner={setShowBanner} 
            isDarkMode={isDarkMode} 
            isMobile={isMobile} 
          />
        </div>
      )} */}
      {/* <div style={{ marginTop: showBanner ? `${bannerHeight}px` : '0', transition: 'margin-top 0.3s ease' }}> */}
      <div>
        <Navbar />
      </div>     
      <Home />
      {/* <TestimonialSection /> */}
      <Footer />
    </div>
  );
}

export default App;
