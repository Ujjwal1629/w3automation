import React from "react";
import "./Home.css";
import search from "../assets/search-b.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home-head">
        <h1>
          Learn <span>Automation</span> with Hemant Gandhi
        </h1>
        <p>Explore Our Courses...</p>
      </div>
      <div className="home-search">
        <input type="text" placeholder="Search for a Course" />
        <img src={search} alt="" />
      </div>
    </div>
  );
}
