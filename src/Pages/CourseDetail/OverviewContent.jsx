import React from 'react';
import './OverviewContent.css'; // Import the corresponding CSS file

const OverviewContent = ({ details, features }) => {
  return (
    <div className="overview-container">
      {/* Left Section (70%) */}
      <div className="left-section">
        <h3>Class Schedule</h3>
        <p>{details.classSchedule}</p>

        <h3>Demo Sessions</h3>
        <p>{details.demoSessions}</p>

        <h3>Salient Features</h3>
        <ul>
          {details.salientFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h3>Course Syllabus</h3>
        <ul>
          {details.syllabus.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>

        <h3>Sample Video</h3>
        <iframe
          width="100%"
          height="315"
          src={details.videoUrl}
          title="Sample Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Right Section (30%) */}
      <div className="right-section">
  <h3>Course Features</h3>
  <table>
    <tbody>
      <tr>
        <td>Lectures</td>
        <td>{features.lectures}</td>
      </tr>
      <tr>
        <td>Quiz</td>
        <td>{features.quiz}</td>
      </tr>
      <tr>
        <td>Duration</td>
        <td>{features.duration}</td>
      </tr>
      <tr>
        <td>Skill Level</td>
        <td>{features.skillLevel}</td>
      </tr>
      <tr>
        <td>Language</td>
        <td>{features.language}</td>
      </tr>
      <tr>
        <td>Students</td>
        <td>{features.students}</td>
      </tr>
      <tr>
        <td>Assessments</td>
        <td>{features.assessments}</td>
      </tr>
    </tbody>
  </table>
      </div>
    </div>
  );
};

export default OverviewContent;