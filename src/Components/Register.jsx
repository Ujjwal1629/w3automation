import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import { toast } from "react-hot-toast";
import logo from "../assets/logo.png";
//Icons
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
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
      const data = await axios.post("/register", {
        email,
        password,
        name,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Registration successful");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="register">
      <Link to={"/"}>
        {" "}
        <img src={logo} alt="" className="logo" />
      </Link>
      <div className="register-container">
        <div className="register-details">
          <h1>
            Become an Automation Engineer! <br />
            Enroll now💚
          </h1>
        </div>
        <div className="registration">
          <div className="sign-up">
            <h1 className="sign-up-head">Create Your Account</h1>
          </div>
          <button className="google">
            Continue with Google <FaGoogle />
          </button>
          <form onSubmit={registerUser} className="sign-up-form">
            <div className="sign-up-name">
              <span>
                <FaUser />
              </span>
              <input
                type="text"
                placeholder="Enter your name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="sign-up-mail">
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
            <div className="sign-up-password">
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
            <div className="sign-up-links">
              <label htmlFor="" className="forgot">
                Forgot your password?
              </label>
            </div>
            <button className="signup" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

//1d50AMQXMFCj6TLX
