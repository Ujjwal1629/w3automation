import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast"; //using react hot toast to fetch conditions and display, stated inside authController
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Selenium from "./Pages/Selenium";
import API from "./Pages/API";
import Playwright from "./Pages/Playwright";
import Jmeter from "./Pages/Jmeter";
import Cypress from "./Pages/Cypress";
import Footer from "./Components/Footer";

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
        <Route path="/Selenium" element={<Selenium />} />
        <Route path="/API" element={<API />} />
        <Route path="/Playwright" element={<Playwright />} />
        <Route path="/Jmeter" element={<Jmeter />} />
        <Route path="/Cypress" element={<Cypress />} />
      </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
