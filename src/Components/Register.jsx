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
  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const res = await api.post('/auth/register', {
        username: name,
        email,
        password,
      });
      if (res.data.error) {
        toast.error(res.data.error);
      } else {
        setData({ name: '', email: '', password: '' });
        toast.success('Registration successful');
        navigate('/login');
      }
    } catch (error) {
      toast.error('Registration failed');
    }
  };
  return (
    <div className="auth-bg">
      <div className="auth-card">
        <button className="auth-back-btn" onClick={() => navigate('/')}>← Home</button>
        <div className="auth-brand">Journey<span style={{color:'#8c52ff'}}>to</span><span style={{color:'#ff5757'}}>automation</span></div>
        <h2 className="auth-title">Create your account</h2>
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
