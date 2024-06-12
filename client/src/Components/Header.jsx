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
            SELENIUM WITH JAVA <i class="arrow down"></i>            
          </li>
          <li className="ga-active"
            onClick={() => {
              navigate("/API");
            }}>
            API <i class="arrow down">
            </i>
          </li>
          <li>
            PLAYWRIGHT <i class="arrow down"></i>
          </li>
          <li>
            CYPRESS <i class="arrow down"></i>
          </li>
          <li>
            JMETER <i class="arrow down"></i>
          </li>
        </ul>
      </div>
    </>
  );
}
