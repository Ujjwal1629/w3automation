import React from 'react';
import './InstructorContent.css'; // Import the corresponding CSS file

const InstructorContent = ({ bio }) => {
  return (
    <div className="instructor-container">
      <h2>About the Instructor</h2>
      <p>{bio}</p>
    </div>
  );
};

export default InstructorContent;