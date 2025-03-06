import React from 'react';
import './CurriculumContent.css'; // Import the corresponding CSS file

const CurriculumContent = ({ curriculum }) => {
  return (
    <div className="curriculum-container">
      <h2>Course Curriculum</h2>
      {curriculum.map((week, index) => (
        <div key={index} className="week">
          <h3>{week.week}</h3>
          <ul>
            {week.topics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CurriculumContent;