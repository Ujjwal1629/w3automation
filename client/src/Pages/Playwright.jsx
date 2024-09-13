import React from 'react'
import "./Playwright.css"
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

export default function Playwright() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="Playwright">
    <Navbar />
    <Header />
    <div className="main">
    <div className="container-left">
        <div className="container-links">
          <h1>Playwright</h1>
          <a className="links" href="#Intro-Java" onClick={(e) => scrollToSection(e, 'Intro-Java')}>
            Introduction To Playwright
          </a>
          <a className="links" href="#Class-Object" onClick={(e) => scrollToSection(e, 'Class-Object')}>
            Classes And Objects
          </a>
          <a className="links" href="#java-method" onClick={(e) => scrollToSection(e, 'java-method')}>
            Types Of Methods
          </a>
          <a className="links" href="#java-method" onClick={(e) => scrollToSection(e, 'java-method')}>
            Types Of Methods
          </a>
          <a className="links" href="#java-method" onClick={(e) => scrollToSection(e, 'java-method')}>
            Types Of Methods
          </a>
          <a className="links" href="#java-method" onClick={(e) => scrollToSection(e, 'java-method')}>
            Types Of Methods
          </a>
          <a className="links" href="#java-method" onClick={(e) => scrollToSection(e, 'java-method')}>
            Types Of Methods
          </a>
          <a className="links" href="#java-method" onClick={(e) => scrollToSection(e, 'java-method')}>
            Types Of Methods
          </a>
          <a className="links" href="#java-method" onClick={(e) => scrollToSection(e, 'java-method')}>
            Types Of Methods
          </a>
        </div>
      </div>
      <div className="main-container">
        <div className="container-head">
          <button className="prev">Prev</button>e
          <button className="next">Next</button>
        </div>
        <div className="main-page">
          <div id="Intro-Java" className="IntroJava">
            <h1>Introduction To Playwright</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, impedit beatae atque voluptate hic architecto nam dolorum est eum vero cupiditate, ipsa ratione molestias et exercitationem fugiat in! Illum, sapiente?
            </p>
          </div>
          <div id="Class-Object" className="IntroJava">
            <h1>Classes And Objects</h1>
            <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus iure sequi vitae dicta quis ad, quibusdam corrupti sapiente omnis ducimus impedit facilis voluptas? Illo rerum, est possimus maxime cupiditate unde quam minus doloremque aut consequuntur optio deserunt, ipsam recusandae praesentium vitae commodi molestias facilis labore quaerat officia! Rem, est nostrum.
            </p>
          </div>
          <div id="java-method" className="IntroJava">
            <h1>Types Of Methods</h1>
            <p>
              What is Method?
              Java is a very popular pro
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
  )
}
