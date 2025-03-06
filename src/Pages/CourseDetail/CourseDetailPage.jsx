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
      syllabus: [
        {
            title: 'Core Java Topics Covered in Course – 18 Sessions – 25 Hours',
            topics: [
                'Introduction to Core Java',
                'Basic Java Programming and Features',
                'Methods - Introduction',
                'Predefined Method - MathRandom Class',
                'Methods - Static and Non Static',
                'If and Else Statements',
                'For Loops',
                'Nested Loops',
                'Break and Continue',
                'Switch cases',
                'Do While Loops',
                'Arrays 2D and 3D',
                'Java Keywords - this, static, super and final, Constructors, Exception handling.',
                'OOPS - Static and Non Static',
                'Exception Handling',
                'Packages and Access Modifiers',
                'Java Collections - ArrayList, HashMap, HashSet',                
            ],
          },
          {
            title: 'Introduction to Selenium – 2 Sessions – 3 Hours',
            topics: [
                'What is Test Automation?',
                'Why Test Automation?',
                'Types of Testing Tools',
                'Effective Use of Tools - potential benefits and risks',
                'Difference between manual and Automation.',
                'The automated Testing process',
                'Introduction to Selenium',
                'Discussion on Selenium platform independence and browser independence',
                'Detailed Discussion on selenium architecture and components',
                'Locators',
                'Locating elements using ID, Name, link and Xpath, Relative locators in Selenium 4.0',
                'Understanding of ChroPath and SelectorsHub',
            ],
          },
        {
          title: 'Selenium Webdriver – 9 Sessions – 15 Hours',
          topics: [
            'WebDriver Introduction',
            'Selenium Webdriver Basics and Architecture',
            'WebElement, Explicit and Implicit Wait',
            'Handling MouseOvers, drag and drop and other gestures',
            'Alerts and Actions',
            'Iframes, tabs and popups handling',
            'Handling CheckBoxes and Alerts',
            'Xpath vs CSS, Actions',
            'Window Handling, JavaScriptExecutor, Properties',
          ],
        },
        {
          title: 'Advance Selenium Webdriver – 9 Sessions – 18 Hours',
          topics: [
            'Handling JavaScript alerts and Keyboard Events',
            'Maven, DB Connectivity and TestNG',
            'POI JARS',
            'Log4j API',
            'TestNG - Parameterization, groups, testsuites etc',
            'Extent Reports and Allure Reports',
            'Page Object Model Design Pattern',
            'Keyword Driven Framework',
            'Data Driven Framework',
          ],
        },
        {
          title: 'Version Control – 1 Session – 2 hours',
          topics: ['Git', 'GitHub', 'Github Desktop'],
        },
        {
          title: 'CI / CD - Jenkins Pipeline – 2 Sessions – 3 Hours',
          topics: [
            'Continuous Integration using Jenkins and GIT on EC2 Instance of AWS cloud',
            'Configuring the CI CD Pipeline',
            'Running the pipeline from Jenkins File'
            ],
        },
      ],
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