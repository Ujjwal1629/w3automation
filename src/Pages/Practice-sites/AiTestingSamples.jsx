import React, { useState, useRef, useEffect } from "react";
import "./AiTestingSamples.css";
import { FiChevronDown } from "react-icons/fi";

const SAMPLES = [
  {
    id: "bankbot",
    label: "BankBot AI Assistant",
    header: "Conversational Banking AI Agent",
    file: "ai-samples/bankbot-demo.html",
    description:
      "Test the capabilities of a banking chatbot agent, checking for context retention and intent recognition."
  },
  {
    id: "login-bias",
    label: "Login Bias Testing",
    header: "AI Bias in Authentication",
    file: "ai-samples/ai_login_bias_demo.html",
    description:
      "Evaluate potential biases in AI-driven authentication or facial recognition login systems."
  },
  {
    id: "bias-lab",
    label: "Bias Testing Lab",
    header: "Comprehensive Bias Analysis Lab",
    file: "ai-samples/ai-bias-testing-lab.html",
    description:
      "A laboratory environment for stress-testing AI models against various demographic and edge-case inputs."
  },
  {
    id: "dashboard",
    label: "AI Data Dashboard",
    header: "AI Performance Metrics",
    file: "ai-samples/AIDataTestingDashboard.html",
    description:
      "Real-time dashboard visualization of AI model performance, accuracy, and error rates."
  },
  {
    id: "data-quality",
    label: "Data Quality Dimensions",
    header: "Data Quality Verification",
    file: "ai-samples/data-quality-dimensions.html",
    description:
      "Analyze the six dimensions of data quality including completeness, consistency, and accuracy."
  }
];

const AiTestingSamples = () => {
  const [selectedSample, setSelectedSample] = useState(SAMPLES[0]);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const iframeRef = useRef(null);

  const handleSelect = (sample) => {
    setSelectedSample(sample);
    setIsOpen(false);

    // reset height while loading new iframe
    if (iframeRef.current) {
      iframeRef.current.style.height = "0px";
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Listen for iframe height messages (dynamic content)
  useEffect(() => {
    const handleMessage = (event) => {
      if (
        event.data?.type === "IFRAME_HEIGHT" &&
        iframeRef.current
      ) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Resize iframe on initial load (static content)
  const handleIframeLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    try {
      const doc =
        iframe.contentDocument || iframe.contentWindow.document;

      iframe.style.height =
        doc.documentElement.scrollHeight + "px";
    } catch (err) {
      console.warn("Iframe resize blocked (cross-origin)");
    }
  };

  return (
    <div className="ai-samples-container">
      <div className="ai-samples-header">
        <h1>AI Testing Samples</h1>
        <p>Explore and test various AI model implementations.</p>
      </div>

      <div className="controls-section">
        <div className="custom-dropdown" ref={dropdownRef}>
          <button
            className={`dropdown-trigger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectedSample.label}</span>
            <FiChevronDown
              className={`dropdown-icon ${isOpen ? "rotate" : ""}`}
            />
          </button>

          <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
            {SAMPLES.map((sample) => (
              <div
                key={sample.id}
                className={`dropdown-item ${
                  selectedSample.id === sample.id ? "selected" : ""
                }`}
                onClick={() => handleSelect(sample)}
              >
                {sample.label}
              </div>
            ))}
          </div>
        </div>

        <div className="sample-info-card">
          <h2>{selectedSample.header}</h2>
          <p>{selectedSample.description}</p>
        </div>
      </div>

      <div className="tab-display-section">
        <div className="iframe-container">
          <iframe
            ref={iframeRef}
            src={`/${selectedSample.file}`}
            title={selectedSample.label}
            className="sample-iframe"
            key={selectedSample.id}
            scrolling="no"
            onLoad={handleIframeLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default AiTestingSamples;