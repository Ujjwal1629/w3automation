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
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const res = await api.post('/auth/login', {
        email,
        password,
      });
      if (res.data.error) {
        toast.error(res.data.error);
      } else {
        setData({ email: '', password: '' });
        toast.success('Login successful');
        localStorage.setItem('token', res.data.token);
        navigate("/");
      }
    } catch (error) {
      toast.error('Login failed');
    }
  };
  return (
    <div className="auth-bg">
      <div className="auth-card">
        <button className="auth-back-btn" onClick={() => navigate('/')}>← Home</button>
        <div className="auth-brand">Journey<span style={{color:'#8c52ff'}}>to</span><span style={{color:'#ff5757'}}>automation</span></div>
        <h2 className="auth-title">Sign in to your account</h2>
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
