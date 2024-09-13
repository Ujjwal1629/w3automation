import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import toggle_light from "../assets/day.png";
import toggle_dark from "../assets/night.png";
import search_light from "../assets/search-w.png";
import search_dark from "../assets/search-b.png";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <img
        src={logo}
        alt=""
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <ul>
        <Link>
          <li>Home</li>
        </Link>
        <Link>
          <li>Courses</li>
        </Link>
        <Link>
          <li>Editor</li>
        </Link>
        <Link>
          <li>Contact Us</li>
        </Link>
      </ul>

      <button
        className="login-btn"
        onClick={() => {
          navigate("/Register");
        }}
      >
        Sign Up
      </button>

      <button
        className="login-btn"
        onClick={() => {
          navigate("/Login");
        }}
      >
        Log In
      </button>
    </nav>
  );
}
