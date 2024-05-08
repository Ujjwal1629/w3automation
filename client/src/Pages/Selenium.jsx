import React from "react";
import "./Selenium.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

export default function Selenium() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="main">
        <div className="container-left">
          <div className="container-links">
            <h1>JS Tutorials</h1>
            <a className="links" href="">
              JS Home
            </a>
            <a className="links" href="">
              JS Introduction
            </a>
            <a className="links" href="">
              JS Statements
            </a>
            <a className="links" href="">
              JS Data Types
            </a>
            <a className="links" href="">
              JS Operators
            </a>
            <a className="links" href="">
              JS Loops
            </a>
            <a className="links" href="">
              JS Functions
            </a>
            <a className="links" href="">
              JS Objects
            </a>
          </div>
        </div>
        <div className="main-container">
          <div className="container-head">
            <button className="prev">Prev</button>
            <button className="next">Next</button>
          </div>
          <div className="main-page">
            <div id="JS-Home">
              <h1>JavaScript Tutorial</h1>
              <p>
                JavaScript is the world's most popular programming language.
                JavaScript is the programming language of the Web. JavaScript is
                easy to learn. This tutorial will teach you JavaScript from
                basic to advanced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
