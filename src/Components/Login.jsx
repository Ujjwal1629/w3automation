import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

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
      const { data } = await axios.post("/dashboard", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login successful");
        navigate("/");
      }
    } catch (error) {}
  };
  return (
    <section className="login">
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>

      <div className="login-container">
        <h1 className="login-title">
          Welcome back😀 <br /> Please login using your credentials
        </h1>
        <div className="login-content">
          <div className="login-head">
            <h1>Log in to your account</h1>
          </div>
          <button className="google1">
            Continue with Google <FaGoogle />
          </button>
          <form onSubmit={loginUser} className="login-form">
            <div className="login-mail">
              <span>
                <IoIosMail />
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="login-password">
              <span>
                <FaLock />
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <div className="login-links">
              <label htmlFor="" className="forgot">
                Forgot your password?
              </label>
            </div>
            <button className="signup" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
