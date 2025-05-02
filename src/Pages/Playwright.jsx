import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Playwright.css";
import Navbar from "../Components/Navbar";
import PageLayout from '../Components/PageLayout';
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
import Footer from "../Components/Footer";

const sections = [
  { path: 'JavaScriptOverview', component: <JavaScriptOverview /> },
  { path: 'VariablesInJavaScript', component: <VariablesInJavaScript /> },
  { path: 'StringsInJavaScript', component: <StringsInJavaScript /> },
  { path: 'ObjectsInOOP', component: <ObjectsInOOP /> },
  { path: 'BuiltInObjects', component: <BuiltInObjects /> },
  { path: 'JavaScriptLoops', component: <JavaScriptLoops /> },
  { path: 'JavaScriptPrimitivesAndObjects', component: <JavaScriptPrimitivesAndObjects /> },
  { path: 'OperatorsAndExpressions', component: <OperatorsAndExpressions /> },
  { path: 'ConditionsInJavaScript', component: <ConditionsInJavaScript /> },
  { path: 'EncapsulationInJavaScript', component: <EncapsulationInJavaScript /> },
  { path: 'FunctionsInJavaScript', component: <FunctionsInJavaScript /> },
  { path: 'InheritanceInOOP', component: <InheritanceInOOP /> },
  { path: 'AbstractionInJavaScript', component: <AbstractionInJavaScript /> },
  { path: 'ClassOOPS', component: <ClassOOPS /> },
  { path: 'ArraysInJavaScript', component: <ArraysInJavaScript /> },
  { path: 'StaticMethods', component: <StaticMethods /> },
  { path: 'Polymorphism', component: <Polymorphism /> },
  { path: 'NodeInstallation', component: <NodeInstallation /> },
];

export default function Playwright() {
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sectionNames = sections.map(section => section.path);

  const handleLinkClick = (e, stepValue) => {
    e.preventDefault();
    setStep(stepValue);
    navigate(`/Playwright/${sectionNames[stepValue]}`);
    document.getElementById("main-page").scrollIntoView({ behavior: "smooth" });
  };
  
  const handleNextClick = () => {
    if (step < sectionNames.length - 1) {
      const nextStep = step + 1;
      setStep(nextStep);
      navigate(`/Playwright/${sectionNames[nextStep]}`);
    }
  };
  
  const handlePrevClick = () => {
    if (step > 0) {
      const prevStep = step - 1;
      setStep(prevStep);
      navigate(`/Playwright/${sectionNames[prevStep]}`);
    }
  };

  return (
    <div className="Playwright">
      <Navbar />
      <PageLayout>
        <div className="main">
          <div className={`container-left ${isMobile ? 'hidden' : ''}`}>
            <div className="container-leftt">
              <div className="container-links">
                <h1>Playwright</h1>
                {sections.map((section, index) => (
                  <a
                    key={index}
                    className="links"
                    href={`#${section.path}`}
                    onClick={(e) => handleLinkClick(e, index)}
                  >
                    {section.path.replace(/([A-Z])/g, ' $1').trim()}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="main-container">
            <div className="container-head">
              <button className="prev" onClick={handlePrevClick}>Prev</button>
              <button className="next" onClick={handleNextClick}>Next</button>
            </div>
            <div className="main-page" id="main-page">
              {sections.map((section, index) => (
                step === index && section.component
              ))}
            </div>
          </div>
        </div>
        {/* Fade effect at the bottom if scrollable */}
        <div className="main-fade-bottom" aria-hidden="true"></div>
      </PageLayout>
      <Footer />
    </div>
  );
}
