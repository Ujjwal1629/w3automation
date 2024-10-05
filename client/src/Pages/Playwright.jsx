import React from 'react'
import "./Playwright.css"
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { useState } from 'react';
import { useEffect } from 'react';
import ArraysInJavaScript from '../Sections/Sections-Playwright/ArraysInJavaScript';
import ClassOOPS from '../Sections/Sections-Playwright/ClassOOPS';
import ConditionsInJavaScript from '../Sections/Sections-Playwright/ConditionsInJavaScript';
import ConstructorsInOOP from '../Sections/Sections-Playwright/ConstructorsInOOP';
import EncapsulationInJavaScript from '../Sections/Sections-Playwright/EncapsulationInJavaScript';
import FunctionsInJavaScript from '../Sections/Sections-Playwright/FunctionsInJavaScript';
import InheritanceInOOP from '../Sections/Sections-Playwright/InheritanceInOOP';
import JavaScriptOverview from '../Sections/Sections-Playwright/JavaScriptOverview';
import JavaScriptPrimitivesAndObjects from '../Sections/Sections-Playwright/JavaScriptPrimitivesAndObjects';
import JavaScriptLoops from '../Sections/Sections-Playwright/JavaScriptLoops';
import NodeInstallation from '../Sections/Sections-Playwright/NodeInstallation';
import BuiltInObjects from '../Sections/Sections-Playwright/BuiltInObjects';
import ObjectsInOOP from '../Sections/Sections-Playwright/ObjectsInOOP';
import OperatorsAndExpressions from '../Sections/Sections-Playwright/OperatorsAndExpressions';
import Polymorphism from '../Sections/Sections-Playwright/Polymorphism';
import StaticMethods from '../Sections/Sections-Playwright/StaticMethods';
import StringsInJavaScript from '../Sections/Sections-Playwright/StringsInJavaScript';
import VariablesInJavaScript from '../Sections/Sections-Playwright/VariablesInJavaScript';
import AbstractionInJavaScript from '../Sections/Sections-Playwright/AbstractionInJavaScript';

export default function Playwright() {
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = (e, stepValue) => {
    e.preventDefault();
    setStep(stepValue);
    document.getElementById("main-page").scrollIntoView({ behavior: "smooth" });
  };

  const handleNextClick = () => {
    setStep((prevStep) => (prevStep < 17 ? prevStep + 1 : prevStep));
  };

  const handlePrevClick = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
    <div className="Playwright">
    <Navbar />
      <div className="header">
      <Header />
      </div>
    <div className="main">
    <div className={`container-left ${isMobile ? 'hidden' : ''}`}>
    <div className="container-left">
    <div className="container-links">
    <h1>Playwright</h1>
    <a className="links" href="#JavaScriptOverview" onClick={(e) => handleLinkClick(e, 1)}>
      JavaScript Overview
    </a>
    <a className="links" href="#VariablesInJavaScript" onClick={(e) => handleLinkClick(e, 2)}>
    Variables In JavaScript
    </a>
    <a className="links" href="#StringsInJavaScript" onClick={(e) => handleLinkClick(e, 3)}>
    Strings In JavaScript
    </a>
    <a className="links" href="#ObjectsInOOP" onClick={(e) => handleLinkClick(e, 4)}>
    Objects In OOP
    </a>
    <a className="links" href="#BuiltInObjects" onClick={(e) => handleLinkClick(e, 5)}>
    Built-In Objects
    </a>
    <a className="links" href="#JavaScriptLoops" onClick={(e) => handleLinkClick(e, 6)}>
    JavaScript Loops
    </a>
    <a className="links" href="#JavaScriptPrimitivesAndObjects" onClick={(e) => handleLinkClick(e, 7)}>
    JavaScript Primitives And Objects
    </a>
    <a className="links" href="#OperatorsAndExpressions" onClick={(e) => handleLinkClick(e, 8)}>
    Operators And Expressions
    </a>
    <a className="links" href="#ConditionsInJavaScript" onClick={(e) => handleLinkClick(e, 9)}>
    Conditions In JavaScript
    </a>
    <a className="links" href="#EncapsulationInJavaScript" onClick={(e) => handleLinkClick(e, 10)}>
      Encapsulation In JavaScript
    </a>
    <a className="links" href="#FunctionsInJavaScript" onClick={(e) => handleLinkClick(e, 11)}>
      Functions In JavaScript
    </a>
    <a className="links" href="#InheritanceInOOP" onClick={(e) => handleLinkClick(e, 12)}>
      Inheritance In OOP
    </a>
    <a className="links" href="#AbstractionInJavaScript" onClick={(e) => handleLinkClick(e, 13)}>
      Abstraction In JavaScript
    </a>
    <a className="links" href="#ClassOOPS" onClick={(e) => handleLinkClick(e, 14)}>
      Classes And OOP
    </a>
    <a className="links" href="#ArraysInJavaScript" onClick={(e) => handleLinkClick(e, 15)}>
      Arrays In JavaScript
    </a>
    <a className="links" href="#StaticMethods" onClick={(e) => handleLinkClick(e, 16)}>
      Static Methods
    </a>
    <a className="links" href="#Polymorphism" onClick={(e) => handleLinkClick(e, 17)}>
      Polymorphism
    </a>
    <a className="links" href="#NodeInstallation" onClick={(e) => handleLinkClick(e, 18)}>
      Node Installation
    </a>
</div>

      </div>
      </div>
      <div className="main-container">
        <div className="container-head">
          <button className="prev" onClick={handlePrevClick}>Prev</button>
          <button className="next" onClick={handleNextClick}>Next</button>
        </div>
        <div className="main-page">
        {step === 0 && (
       <JavaScriptOverview />
          )}
          {step === 1 && <VariablesInJavaScript />}
{step === 2 && <StringsInJavaScript />}
{step === 3 && <ObjectsInOOP />}
{step === 4 && <BuiltInObjects />}
{step === 5 && <JavaScriptLoops />}
{step === 6 && <JavaScriptPrimitivesAndObjects />}
{step === 7 && <OperatorsAndExpressions />}
{step === 8 && <ConditionsInJavaScript />}
{/* {step === 9 && <ConstructorsInOOP />} */}
{step === 9 && <EncapsulationInJavaScript />}
{step === 10 && <FunctionsInJavaScript />}
{step === 11 && <InheritanceInOOP />}
{step === 12 && <AbstractionInJavaScript />}
{step === 13 && <ClassOOPS />}
{step === 14 && <ArraysInJavaScript />}
{step === 15 && <StaticMethods />}
{step === 16 && <Polymorphism />}
{step === 17 && <NodeInstallation />}

        </div>
      </div>
    </div>
    </div>
  )
}
