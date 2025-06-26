import "./App.css";
import React, { useEffect } from "react";
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
// import EcommerceTesting from "./Pages/Practice-sites/pages/EcommerceTesting.jsx";
import EcommerceStore from "./Pages/EcommerceStore/EcommerceStore";
import SliderTest from "./Pages/Practice-sites/SliderTest.jsx";
import ResizableDiv from "./Pages/Practice-sites/Resizable.jsx";
import DragDropTest from "./Pages/Practice-sites/DragDropTest.jsx";
import DatePickerDropdown from "./Pages/Practice-sites/DatePickerDropdown.jsx";
import SeleniumIDE from "./Pages/Selenium-Java/SeleniumIDE";
import { ThemeProvider } from './context/ThemeContext';
import { initGA, trackPageView } from './utils/analytics';
import DriveAccessPage from "./Pages/GoogleDrive/DriveAccessPage.jsx";

initGA();

function App() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

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
        <Route path="/practice/*" element={<Practice />} />
        <Route path="/getCertificate" element={<GetCertificate />} />
        <Route path="/template" element={<Template />} />
        <Route path="/ecommerce/*" element={<Navigate to="/practice/ecommerce" replace />} />
        <Route path="practice/ecommerce/*" element={<EcommerceStore />} />
        <Route path="/selenium-java" element={<SeleniumIDE />} />
        <Route path="/drivePage" element={<DriveAccessPage/>} />
      </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <div className="app">
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
