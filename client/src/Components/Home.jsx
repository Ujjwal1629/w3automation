import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import search from "../assets/search-b.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home-head">
        <h1>
          Learn <span>Automation</span> with Hemant Gandhi
        </h1>
        <div className="home-container">
          <p>Learn </p>
          <Typewriter
            className="typewriter"
            options={{
              strings: ["Selenium", "Playwright", "Jira"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="home-search">
        <input type="text" placeholder="Search for a Course" />
        <img src={search} alt="" />
      </div>
    </div>
  );
}
