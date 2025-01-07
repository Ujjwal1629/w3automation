import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast"; //using react hot toast to fetch conditions and display, stated inside authController
import Dashboard from "./Components/Dashboard";
import Selenium from "./Pages/Selenium";
import Playwright from "./Pages/Playwright";
import Footer from "./Components/Footer";
import TestimonialSection from "./Components/TestimonialSection";
import InterviewQuestions from "./Pages/InterviewQuestions";
import AboutUs from './Pages/AboutUs';
import ApiTesting from "./Pages/ApiTesting";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="route">
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Selenium/*" element={<Selenium />} />
        <Route path="/Playwright/*" element={<Playwright />} />
        <Route path="/ApiTesting/*" element={<ApiTesting />} />
        <Route path="/InterviewQuestions/*" element={<InterviewQuestions />} />
        <Route path="/about" element={<AboutUs />} />
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
