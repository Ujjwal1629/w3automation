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
            Selenium <i class="arrow down"></i>
          </li>
          <li>
            Jmeter <i class="arrow down"></i>
          </li>
          <li>
            Jira <i class="arrow down"></i>
          </li>
          <li>
            DevOps <i class="arrow down"></i>
          </li>
          <li>
            API <i class="arrow down"></i>
          </li>
          <li>
            Tools <i class="arrow down"></i>
          </li>
          <li>
            Git <i class="arrow down"></i>
          </li>
          <li>
            Jenkins <i class="arrow down"></i>
          </li>
          <li>
            Training <i class="arrow down"></i>
          </li>
        </ul>
      </div>
    </>
  );
}
