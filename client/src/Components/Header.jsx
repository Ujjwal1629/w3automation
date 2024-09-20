import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <ul>
          <li className="ga-active"
            onClick={() => {
              navigate("/Selenium");
            }}
          >
            SELENIUM WITH JAVA          
          </li>
          <li  onClick={() => {
              navigate("/Playwright");
            }}>
            PLAYWRIGHT
          </li>
        </ul>
      </div>
    </>
  );
}
