import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';

const generateDynamicId = (base, type) => {
  const timestamp = Date.now().toString();
  if (type === 'start') return `start_${timestamp.slice(-4)}_abc`;
  if (type === 'end') return `xyz_${timestamp.slice(-4)}_end`;
  if (type === 'contains') return `mid_${timestamp.slice(-4)}_def`;
  return timestamp;
};

const TestPractice = () => {
  const [dynamicStart, setDynamicStart] = useState('');
  const [dynamicEnd, setDynamicEnd] = useState('');
  const [dynamicContains, setDynamicContains] = useState('');

  useEffect(() => {
    setDynamicStart(generateDynamicId('dynamic', 'start'));
    setDynamicEnd(generateDynamicId('dynamic', 'end'));
    setDynamicContains(generateDynamicId('dynamic', 'contains'));
  }, []);

  return (
    <>
      <div className="test-practice">
        <div className="practice-container">
          <header className="practice-header">
            <h1>Automation Testing Practice</h1>
            <p>Practice different locator strategies and test scenarios</p>
          </header>

          <div className="practice-section">
            <div className="section-header">
              <h3>📝 Identical Fields</h3>
              <span className="section-desc">Practice handling duplicate elements</span>
            </div>
            <div className="input-group">
              <input type="text" id="duplicateField" className="identical-input" placeholder="Identical Field" />
              <input type="text" id="duplicateField" className="identical-input" placeholder="Identical Field" />
            </div>
          </div>

          <div className="practice-section">
            <div className="section-header">
              <h3>🔄 Dynamic ID Testing</h3>
              <span className="section-desc">Handle elements with dynamic IDs</span>
            </div>
            <div className="input-group">
              <input type="text" id={dynamicStart} className="dynamic-input" placeholder="ID starts with" />
              <input type="text" id={dynamicContains} className="dynamic-input" placeholder="ID contains" />
              <input type="text" id={dynamicEnd} className="dynamic-input" placeholder="ID ends with" />
            </div>
          </div>

          <div className="practice-section">
            <div className="section-header">
              <h3>🎯 Relative Locator Testing</h3>
              <span className="section-desc">Practice relative locator strategies</span>
            </div>
            <div className="relative-grid">
              <input type="text" id="baseField" className="relative-input base" placeholder="Base Field" />
              <input type="text" id="aboveField" className="relative-input above" placeholder="Above Base" />
              <input type="text" id="belowField" className="relative-input below" placeholder="Below Base" />
              <input type="text" id="leftField" className="relative-input left" placeholder="Left of Base" />
              <input type="text" id="rightField" className="relative-input right" placeholder="Right of Base" />
            </div>
          </div>
        </div>

        <style jsx>{`
          .test-practice {
            padding: 2rem;
            background: linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%);
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
          }

          .practice-container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            padding: 2.5rem;
            border-radius: 16px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          }

          .practice-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .practice-header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
          }

          .practice-header p {
            font-size: 1.2rem;
            color: #64748b;
          }

          .practice-section {
            margin-bottom: 2.5rem;
            padding: 2rem;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #ffffff;
            transition: all 0.3s ease;
          }

          .practice-section:hover {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            transform: translateY(-2px);
          }

          .section-header {
            margin-bottom: 1.5rem;
          }

          .section-header h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.5rem;
          }

          .section-desc {
            font-size: 0.95rem;
            color: #64748b;
          }

          .input-group {
            display: grid;
            gap: 1rem;
          }

          .identical-input, .dynamic-input, .relative-input {
            width: 100%;
            padding: 1rem;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
            background: #f8fafc;
          }

          .identical-input:focus, .dynamic-input:focus, .relative-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }

          .relative-grid {
            display: grid;
            grid-template-areas:
              ".... above ...."
              "left base right"
              ".... below ....";
            gap: 1rem;
            max-width: 800px;
            margin: 0 auto;
          }

          .base { grid-area: base; background: #eef2ff; }
          .above { grid-area: above; }
          .below { grid-area: below; }
          .left { grid-area: left; }
          .right { grid-area: right; }

          @media (max-width: 768px) {
            .practice-container {
              padding: 1.5rem;
            }

            .practice-section {
              padding: 1.5rem;
            }

            .relative-grid {
              grid-template-areas:
                "above"
                "left"
                "base"
                "right"
                "below";
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default TestPractice;