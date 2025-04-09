import React, { useState, useEffect, useRef } from 'react';

const DatePickerDropdown = () => {
  // State for date picker
  const [selectedDate, setSelectedDate] = useState('');
  
  // State for dropdown menu
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  
  // Countries list for dropdown
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 
    'Germany', 'France', 'Japan', 'Brazil', 'India', 'China'
  ];

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if click is outside both dropdown and dropdown button
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        dropdownButtonRef.current && 
        !dropdownButtonRef.current.contains(event.target)
      ) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle dropdown toggle
  const toggleCountryDropdown = () => {
    setShowCountryDropdown(!showCountryDropdown);
  };

  // Handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  return (
    <>
      <div className="date-picker-page">
        <header className="header">
          <h1>Date Picker & Country Dropdown</h1>
          <p>Select a date and country from the dropdown</p>
        </header>

        <div className="form-container">
          <div className="form-group">
            <label htmlFor="datePicker">Select Date</label>
            <input
              type="date"
              id="datePicker"
              className="date-input"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            {selectedDate && (
              <p className="selected-info">Selected date: {selectedDate}</p>
            )}
          </div>

          <div className="form-group">
            <label>Select Country</label>
            <div className="dropdown-container">
              <button 
                ref={dropdownButtonRef}
                className="dropdown-toggle"
                onClick={toggleCountryDropdown}
                type="button"
              >
                {selectedCountry || 'Choose a country'}
                <span className="dropdown-arrow">▼</span>
              </button>

              {showCountryDropdown && (
                <div 
                  ref={dropdownRef}
                  className="dropdown-menu"
                >
                  <ul>
                    {countries.map((country, index) => (
                      <li 
                        key={index} 
                        onClick={() => handleCountrySelect(country)}
                        className={selectedCountry === country ? 'selected' : ''}
                      >
                        {/* <span className="country-icon">🌎</span> */}
                        <span>{country}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {selectedCountry && (
              <p className="selected-info">Selected country: {selectedCountry}</p>
            )}
          </div>

          <div className="form-group">
            <label>Select Region</label>
            <select className="select-dropdown">
              <option value="">Choose region</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
              <option value="central">Central</option>
            </select>
          </div>

          <div className="form-actions">
            <button className="submit-button">Submit</button>
            <button className="reset-button">Reset</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .date-picker-page {
          padding: 2rem;
          background: linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .header p {
          font-size: 1.2rem;
          color: #64748b;
        }

        .form-container {
          display: flex;
          flex-direction: column;
          max-width: 600px;
          margin: 0 auto;
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #1e293b;
        }

        .date-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .date-input:focus {
          border-color: #3b82f6;
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }

        .dropdown-container {
          position: relative;
          width: 100%;
        }

        .dropdown-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0.75rem;
          background: white;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.2s;
        }

        .dropdown-toggle:hover {
          border-color: #94a3b8;
        }

        .dropdown-arrow {
          font-size: 0.7rem;
          margin-left: 8px;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin-top: 4px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 100;
          overflow: hidden;
          animation: fadeIn 0.15s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dropdown-menu ul {
          list-style: none;
          padding: 0;
          margin: 0;
          max-height: 300px;
          overflow-y: auto;
        }

        .dropdown-menu li {
          padding: 10px 15px;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .dropdown-menu li:hover {
          background-color: #f8fafc;
        }

        .dropdown-menu li.selected {
          background-color: #e0e7ff;
          color: #4f46e5;
        }

        .country-icon {
          margin-right: 10px;
          font-size: 1.1rem;
          width: 24px;
          text-align: center;
        }

        .select-dropdown {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 1rem;
          background-color: white;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23475569' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 16px 12px;
          gap: 0.5rem;
        }

        .select-dropdown:focus {
          border-color: #3b82f6;
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }

        .selected-info {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: #4b5563;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .submit-button, .reset-button {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .submit-button {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
          color: white;
          border: none;
          flex: 1;
        }

        .submit-button:hover {
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
          transform: translateY(-1px);
        }

        .reset-button {
          background: transparent;
          color: #64748b;
          border: 1px solid #cbd5e1;
        }

        .reset-button:hover {
          background-color: #f8fafc;
          color: #334155;
        }

        @media (max-width: 768px) {
          .form-container {
            padding: 1.5rem;
          }
          
          .form-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default DatePickerDropdown;