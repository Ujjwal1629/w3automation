import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from '../api';
import "./auth.css";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  
  const registerUser = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    const { name, email, password } = data;
    try {
      const res = await api.post('/auth/register', {
        username: name,
        email,
        password,
      });
      if (res.data.error) {
        setError(res.data.error);
      } else {
        setData({ name: '', email: '', password: '' });
        toast.success('Registration successful');
        navigate('/login');
      }
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };
  
  return (
    <div className="auth-bg">
      <div className="auth-card">
        <button className="auth-back-btn" onClick={() => navigate('/')}>← Home</button>
        <div className="auth-brand">Journey<span style={{color:'#8c52ff'}}>to</span><span style={{color:'#ff5757'}}>automation</span></div>
        <h2 className="auth-title">Create your account</h2>
        
        {error && (
          <div className="auth-error">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}
        
        <form onSubmit={registerUser} className="auth-form">
          <div className="auth-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
            />
          </div>
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
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
              placeholder="Enter your password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
          </div>
          <div className="auth-footer">
            <span className="auth-link-text">Already have an account?</span>
            <span className="auth-link" onClick={() => navigate('/login')}>Login</span>
          </div>
          <button className="auth-submit" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

//1d50AMQXMFCj6TLX
