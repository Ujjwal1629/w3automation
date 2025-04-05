import React, { useState, useRef, useEffect } from 'react';

const SliderTest = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [customMarks, setCustomMarks] = useState([
    { value: 10, label: '10%' },
    { value: 50, label: '50%' },
    { value: 90, label: '90%' }
  ]);
  const [newMarkValue, setNewMarkValue] = useState('');
  const [newMarkLabel, setNewMarkLabel] = useState('');
  
  const sliderRef = useRef(null);
  const sliderTrackRef = useRef(null);
  
  // Handle slider mouse/touch events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e.touches[0]);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  // Calculate slider position based on mouse/touch position
  const updateSliderPosition = (event) => {
    if (!sliderTrackRef.current) return;
    
    const rect = sliderTrackRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    
    // Calculate percentage (0-100)
    let percentage = (x / width) * 100;
    
    // Constrain to 0-100 range
    percentage = Math.max(0, Math.min(100, percentage));
    
    setSliderValue(Math.round(percentage));
  };

  // Add a new custom mark
  const handleAddMark = () => {
    const value = parseInt(newMarkValue, 10);
    if (!isNaN(value) && value >= 0 && value <= 100 && newMarkLabel.trim()) {
      setCustomMarks([...customMarks, { value, label: newMarkLabel }]);
      setNewMarkValue('');
      setNewMarkLabel('');
    }
  };

  // Remove a custom mark
  const handleRemoveMark = (index) => {
    const updatedMarks = [...customMarks];
    updatedMarks.splice(index, 1);
    setCustomMarks(updatedMarks);
  };

  // Mouse enter/leave for tooltip
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setShowTooltip(false);
    }
  };

  // Clean up event listeners
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <>
      <div className="slider-test-page">
        <header className="test-header">
          <h1>Horizontal Slider Testing</h1>
          <p>Drag the slider to test horizontal sliding functionality</p>
        </header>

        <div className="slider-container">
          <div className="slider-info">
            <h2>Current Value: {sliderValue}</h2>
            <p className="slider-description">
              This slider lets you test horizontal dragging from 0 to 100
            </p>
          </div>

          <div 
            ref={sliderTrackRef}
            className="slider-track"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Slider marks */}
            {customMarks.map((mark, index) => (
              <div 
                key={index}
                className="slider-mark" 
                style={{ left: `${mark.value}%` }}
              >
                <div className="mark-line"></div>
                <span className="mark-label">{mark.label}</span>
              </div>
            ))}
            
            {/* Filled part of the track */}
            <div 
              className="slider-fill" 
              style={{ width: `${sliderValue}%` }}
            ></div>
            
            {/* Slider thumb */}
            <div 
              ref={sliderRef}
              className={`slider-thumb ${isDragging ? 'active' : ''}`}
              style={{ left: `${sliderValue}%` }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {showTooltip && (
                <div className="slider-tooltip">
                  {sliderValue}
                </div>
              )}
            </div>
          </div>
          
          {/* Display current value */}
          <div className="slider-value-display">
            <input 
              type="number" 
              min="0" 
              max="100" 
              value={sliderValue}
              onChange={(e) => {
                const value = Math.max(0, Math.min(100, parseInt(e.target.value) || 0));
                setSliderValue(value);
              }}
            />
          </div>

          {/* Custom marks controls */}
          <div className="custom-marks-section">
            <h3>Custom Marks</h3>
            <div className="marks-control">
              <div className="mark-input-group">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Value (0-100)"
                  value={newMarkValue}
                  onChange={(e) => setNewMarkValue(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Label"
                  value={newMarkLabel}
                  onChange={(e) => setNewMarkLabel(e.target.value)}
                />
                <button onClick={handleAddMark}>Add Mark</button>
              </div>
            </div>
            
            <div className="marks-list">
              <h4>Current Marks:</h4>
              <ul>
                {customMarks.map((mark, index) => (
                  <li key={index}>
                    Value: {mark.value}, Label: {mark.label}
                    <button 
                      className="remove-mark" 
                      onClick={() => handleRemoveMark(index)}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-test-page {
          padding: 2rem;
          background: linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .test-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .test-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .test-header p {
          font-size: 1.2rem;
          color: #64748b;
        }

        .slider-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          max-width: 800px;
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .slider-info {
          text-align: center;
          margin-bottom: 2rem;
          width: 100%;
        }

        .slider-info h2 {
          color: #334155;
          margin-bottom: 0.5rem;
        }

        .slider-description {
          color: #64748b;
          font-size: 0.95rem;
        }

        .slider-track {
          position: relative;
          width: 100%;
          height: 10px;
          background-color: #e2e8f0;
          border-radius: 5px;
          cursor: pointer;
          margin: 2rem 0;
        }

        .slider-fill {
          position: absolute;
          height: 100%;
          background: linear-gradient(90deg, #3b82f6 0%, #6366f1 100%);
          border-radius: 5px;
          pointer-events: none;
        }

        .slider-thumb {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          background: white;
          border: 2px solid #3b82f6;
          border-radius: 50%;
          cursor: grab;
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }

        .slider-thumb.active {
          transform: translate(-50%, -50%) scale(1.1);
          cursor: grabbing;
          box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.3);
        }

        .slider-thumb:hover {
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.2);
        }

        .slider-tooltip {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          background: #1e293b;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.85rem;
          white-space: nowrap;
          pointer-events: none;
          z-index: 10;
        }

        .slider-tooltip:after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #1e293b;
        }

        .slider-value-display {
          margin-top: 1rem;
        }

        .slider-value-display input {
          width: 80px;
          padding: 6px;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          text-align: center;
          font-size: 1rem;
        }

        .slider-mark {
          position: absolute;
          bottom: 100%;
          transform: translateX(-50%);
          margin-bottom: 5px;
          text-align: center;
        }

        .mark-line {
          width: 2px;
          height: 8px;
          background: #94a3b8;
          margin: 0 auto 5px;
        }

        .mark-label {
          font-size: 0.8rem;
          color: #64748b;
          white-space: nowrap;
        }

        .custom-marks-section {
          width: 100%;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
        }

        .custom-marks-section h3 {
          color: #334155;
          margin-bottom: 1rem;
        }

        .marks-control {
          margin-bottom: 1.5rem;
        }

        .mark-input-group {
          display: flex;
          gap: 10px;
        }

        .mark-input-group input {
          padding: 8px;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          flex: 1;
        }

        .mark-input-group button {
          padding: 8px 16px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .mark-input-group button:hover {
          background: #2563eb;
        }

        .marks-list {
          padding: 1rem;
          background: #f8fafc;
          border-radius: 8px;
        }

        .marks-list h4 {
          color: #334155;
          margin-bottom: 0.5rem;
        }

        .marks-list ul {
          list-style: none;
          padding: 0;
        }

        .marks-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .marks-list li:last-child {
          border-bottom: none;
        }

        .remove-mark {
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.2s ease;
        }

        .remove-mark:hover {
          background: #dc2626;
        }

        @media (max-width: 768px) {
          .slider-container {
            padding: 1.5rem;
          }
          
          .mark-input-group {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default SliderTest;