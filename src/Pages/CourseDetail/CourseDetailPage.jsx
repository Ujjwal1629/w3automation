import React, { useState } from 'react';
import Tabs from './Tabs/Tabs';
import OverviewContent from './Overview/OverviewContent';
import CurriculumContent from './Curriculum/CurriculumContent';
import InstructorContent from './Instructor/InstructorContent';
import './CourseDetailPage.css'; // Import the corresponding CSS file
import profilePic from '../../assets/night.png';

const CourseDetailPage = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const courseDetails = {
    courseName: 'Selenium Java Automation Training',
    instructorName: 'Hemant Gandhi',
    instructorProfilePic: profilePic, // Replace with actual image URL
    overview: {
      classSchedule: 'Mon - Thu, 8:00 PM - 9:30 PM IST',
      demoSessions: 'First 2 sessions are free!',
      salientFeatures: ['Live Classes', 'Recorded Sessions', 'Resume Assistance', 'Interview Prep'],
      syllabus: ['Java Basics', 'Selenium WebDriver', 'TestNG', 'Page Object Model'],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    },
    courseFeatures: {
      lectures: 95,
      quiz: 0,
      duration: '30 hours',
      skillLevel: 'All levels',
      language: 'English',
      students: 1100,
      assessments: 'Yes',
    },
    curriculum: [
      { week: 'Week 1', topics: ['Introduction to Java', 'Basic Syntax'] },
      { week: 'Week 2', topics: ['Control Flow', 'Functions'] },
      { week: 'Week 3', topics: ['OOP Concepts', 'Exception Handling'] },
    ],
    instructorBio:
      'Hemant Gandhi is an experienced automation tester with over 10 years of experience in Selenium and Java.',
  };

  return (
    <div className="course-page">
      {/* Course Name */}
      <div className="course-header">
        <h1>{courseDetails.courseName}</h1>
      </div>

      {/* Instructor Info */}
      <div className="instructor-info">
        <img src={courseDetails.instructorProfilePic} alt="Instructor" />
        <h2>{courseDetails.instructorName}</h2>
      </div>

      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'Overview' && (
          <OverviewContent details={courseDetails.overview} features={courseDetails.courseFeatures} />
        )}
        {activeTab === 'Curriculum' && <CurriculumContent curriculum={courseDetails.curriculum} />}
        {activeTab === 'Instructor' && <InstructorContent bio={courseDetails.instructorBio} />}
      </div>
    </div>
  );
};

export default CourseDetailPage;