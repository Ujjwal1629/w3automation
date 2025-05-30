import React from 'react';
import { trackEvent } from '../utils/analytics';

const AnalyticsExample = () => {
  const handleButtonClick = () => {
    trackEvent(
      'User Interaction', 
      'Button Click',   
      'Example Button' 
    );
    console.log('Button clicked');
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    trackEvent(
      'Form Interaction', 
      'Form Submit',    
      'Example Form'   
    );

    console.log('Form submitted');
  };

  return (
    <div className="analytics-example">
      <h2>Google Analytics Examples</h2>
      
      <section>
        <h3>Event Tracking Example</h3>
        <button 
          onClick={handleButtonClick} 
          className="tracking-button"
        >
          Track This Click
        </button>
      </section>
      
      <section>
        <h3>Form Tracking Example</h3>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <button type="submit">Submit Form</button>
        </form>
      </section>
    </div>
  );
};

export default AnalyticsExample; 