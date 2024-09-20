import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false); // State for opening/closing the menu
  const navigate = useNavigate();

  const handleHamburgerClick = () => {
    setNavOpen(!navOpen); // Toggle state for nav menu
  };

  return (
    <nav>
      <div className="logo">
        <img 
          src={logo} 
          alt="Logo" 
          onClick={() => navigate("/")} 
        />
      </div>
      <div 
        className={`hamburger ${navOpen ? "toggle" : ""}`} 
        onClick={handleHamburgerClick}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-links ${navOpen ? "open" : ""}`}>
        <li className={`${navOpen ? "fade" : ""}`}>
          <a  onClick={() => navigate("/")} >Home</a>
        </li>
        <li className={`${navOpen ? "fade" : ""}`}>
          <a href="#">Courses</a>
        </li>
        <li className={`${navOpen ? "fade" : ""}`}>
  <a href="https://www.hemantgandhi.graphy.com">Graphy</a>
</li>
        <li className={`${navOpen ? "fade" : ""}`}>
          <a href="#">Contact Us</a>
        </li>
        <li className={`${navOpen ? "fade" : ""}`}>
          <button
            className="login-button"
            onClick={() => navigate("/Login")}
          >
            Login
          </button>
        </li>
        <li className={`${navOpen ? "fade" : ""}`}>
          <button
            className="join-button"
            onClick={() => navigate("/Register")}
          >
            Register
          </button>
        </li>
      </ul>
    </nav>
  );
}
