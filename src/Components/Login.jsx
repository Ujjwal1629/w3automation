import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import api from '../api';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  
  const loginUser = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    const { email, password } = data;
    try {
      const res = await api.post('/auth/login', {
        email,
        password,
      });
      if (res.data.error) {
        setError(res.data.error);
      } else {
        setData({ email: '', password: '' });
        toast.success('Login successful');
        localStorage.setItem('token', res.data.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Login failed. Please check your credentials.");
      }
    }
  };
  
  return (
    <div className="auth-bg">
      <div className="auth-card">
        <button className="auth-back-btn" onClick={() => navigate('/')}>← Home</button>
        <div className="auth-brand">Journey<span style={{color:'#8c52ff'}}>to</span><span style={{color:'#ff5757'}}>automation</span></div>
        <h2 className="auth-title">Sign in to your account</h2>
        
        {error && (
          <div className="auth-error">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}
        
        <form onSubmit={loginUser} className="auth-form">
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </div>
          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
          </div>
          <div className="auth-footer">
            <span className="auth-link-text">New user?</span>
            <span className="auth-link" onClick={() => navigate('/register')}>Register</span>
          </div>
          <button className="auth-submit" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
