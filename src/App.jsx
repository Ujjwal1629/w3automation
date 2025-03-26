import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import ReactGA from "react-ga4";
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
import CertificateTemplate from "./Template/CertificateTemplate.jsx"

function App() {
  ReactGA.initialize("G-FPDLKPFE8H");
  return (
    <div className="route">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Selenium/*" element={<Selenium />} />
        <Route path="/Playwright/*" element={<Playwright />} />
        {/* <Route path="/ApiTesting/*" element={<ApiTesting />} /> */}
        <Route path="/InterviewQuestions/*" element={<InterviewQuestions />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Blogs" element={<BlogPost />} />
        <Route path="/AuthPractice" element={<TestPractice />} />
        <Route path="/APITestPractice" element={<APITestPractice />} />
        <Route path="/AlertTest" element={<AlertTest />} />
        <Route path="/userForm" element={<UserForm/>} />
        <Route path="/syllabus-java-selenium" element={<CourseDetailPage/>} />
        <Route path="/ImageTest" element={<ImageTest />} />
        <Route path="/BrowserWindowTabOpener" element={<BrowserWindowTabOpener />} />
        <Route path="/LinksTesting" element={<LinksTesting />} />
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="/practice/*" element={<Practice />} />
        <Route path="/getCertificate" element={<CertificateTemplate />} />
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
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;
