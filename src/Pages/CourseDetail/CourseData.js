import bg2 from '../../assets/bg5B.jpg';
import jsBg from '../../assets/js-background1.jpg';
import instructorImg from '../../assets/profilePic.jpg';

const seleniumCourseData = {
    title: "SELENIUM WITH JAVA 2025 COURSE DETAILS",
    description: "This course is designed to provide students with a comprehensive understanding of Selenium WebDriver using Java. By the end of the course, students will be able to automate web applications, write robust test scripts, and implement test automation frameworks.",
    enrolled: 150,
    backgroundImage: bg2,
    stats: {
        'Live - Projects':'2',
        lectures: 32,
        duration: "2.5 Months",
        Certification:'Yes',
        Recordings:'Lifetime access',
        'Mock Test':"Weekly",
        'Skill Level': "All levels",
        language: "English",
        Placement: "Assistance",
        assessments: "Yes"
    },
    schedule: {
        classTiming: {
            indian: "07:30 AM IST",
            us: "10:00 PM GMT",
            uk: "03:00 AM GMT",
        },
        demo: "First 2 sessions are free!",
        date:'2nd May 2025',
        classDate:'5th May 2025 Onwards',
        days:'Monday to Thursday',
        features: [
            "Live Classes",
            "Recorded Sessions",
            "Resume Assistance",
            "Interview Prep",
        ]
    },
    syllabus: [
        {
            title: "Core Java Topics Covered in Course",
            topics: [
                "Installing Java, History and Features Of Java",
                "Classes and Objects",
                "Data Types, Variables, Operators",
                "Strings",
                "Methods - Introduction",
                "Predefined Method - MathRandom Class",
                "Methods - Static and Non Static",
                "If and Else Statements",
                "For Loops",
                "Nested Loops",
                "Break and Continue",
                "Switch cases",
                "Do While Loops",
                "Arrays 2D and 3D",
                "Java Keywords - this, static, super and final",
                "OOPS - Static and Non Static",
                "Exception Handling",
                "Packages and Access Modifiers",
                "Java Collections - ArrayList, HashMap, HashSet"
            ]
        },
        {
            title: "Introduction to Selenium",
            topics: [
                "What is Test Automation?",
                "Why Test Automation?",
                "Types of Testing Tools",
                "Effective Use of Tools - potential benefits and risks",
                "Difference between manual and Automation.",
                "The automated Testing process"
            ]
        },
        {
            title: "Locators",
            topics: [
                "Locating elements using ID, Name, link and Xpath, Relative locators in Selenium 4.0",
                "Understanding of SelectorsHub browser extension"
            ]
        },
        {
            title: "Selenium Webdriver",
            topics: [
                "WebDriver Introduction",
                "Selenium Webdriver Basics and Architecture",
                "WebElement, Explicit and Implicit Wait",
                "Handling MouseOvers, drag and drop and other gestures",
                "Alerts and Actions",
                "Iframes, tabs and popups handling",
                "Handling CheckBoxes and Alerts",
                "Xpath vs CSS, Actions",
                "Window Handling, JavaScriptExecutor, Properties"
            ]
        },
        {
            title: "Advance Selenium Webdriver",
            topics: [
                "Handling JavaScript alerts and Keyboard Events",
                "Maven, DB Connectivity and TestNG",
                "POI JARS",
                "Log4j API",
                "TestNG - Parameterization, groups, testsuites etc",
                "ReportNG and Allure Reports",
                "Page Object Model Design Pattern",
                "Keyword Driven Framework",
                "Data Driven Framework"
            ]
        },
        {
            title: "REST Assured API Automation",
            topics: [
                "Adding REST Libraries to the Maven Project",
                "Sample Test Case Scripting",
                "Performing POST Requests",
                "Performing GET Requests",
                "Performing DELETE Requests",
                "Request and Response Spec Builder", 
                "POJO Concepts",
                "GraphQL Automation",
                "End-to-End Scenarios using REST Assured",
                "Parsing JSON and XML Responses using JSON Path and XML Path",
                "Validating JSON Schema",
                "BDD and Non-BDD Approaches",
                "Serialization and Deserialization of Requests and Responses"
            ]
        },
        {
            title: "Basics of the Cucumber Framework",
            topics: [
                "Introduction to Cucumber",
                "Creating a New Feature and File Syntax",
                "Runner File and Creating Step Definitions",
                "Combining TESTNG with Cucumber",
                "Executing Cases using Runner File",
                "Preparing the Scenario Name based on Tags",
                "Scenario Outline, Scenario Templates, and Different Cucumber Tags and Annotations",
                "Sharing Reports over the Cucumber Cloud",
                "Data Tables",
                "Parallel Testing"
            ]
        },
        {
            title: "Version Control",
            topics: [
                "Git",
                "GitHub",
                "Github Desktop"
            ]
        },
        {
            title: "CI / CD - Jenkins Pipeline",
            topics: [
                "Continuous Integration using Jenkins and GIT on EC2 Instance",
                "Configuring the CI CD Pipeline",
                "Running the pipeline from Jenkins File"
            ]
        },
    ],
    pricing: {
        price: {
            indian: "8000 INR",
            uk: "100 EUROS",
            us: "120 USD"
        },
        contact: "+91 8810201221",
        linkedin: "https://www.linkedin.com/in/hemant-gandhi254/"
    },
    instructor: {
        name: "Hemant Gandhi",
        title:'QA Automation Lead and Trainer',
        bio: "With over 10 years of experience in the software testing industry. He has worked extensively with various automation testing tools and frameworks, specializing in delivering high-quality software solutions. His passion for quality assurance and automation drives him to share knowledge and help others excel in this field.",
        students: '200',
        ratings: '4.2',
        image: instructorImg
    }, 
    testimonials: [
        {
            userName: "Supriya D",
            userReview: "I recently completed Hemant Gandhi's automation testing class on Java and Selenium, and it was outstanding. The instructor made complex topics easy to understand, and the hands-on exercises were incredibly valuable."
        },
        {
            userName: "Srikanth chivukula",
            userReview: "I really appreciate you for taking time from daily routines and providing training on Java and Selenium. The topics covered are good and detailed. The support provided post sessions is also excellent.!"
        },
        {
            userName: "Mayooran Thiruchselvam",
            userReview: "The session was highly engaging and insightful, providing a comprehensive understanding session. I particularly appreciated how the presentation was structured, making complex concepts easy to understand."
        }
    ],
    faqs: [
            {
                question: "Is this course suitable for beginners?",
                answer: "Yes, this course starts with the basics and gradually moves to advanced topics."
            },
            {
                question: "Will I get hands-on experience?",
                answer: "Absolutely! The course includes multiple assignments and a real-world project."
            },
            {
                question: "What if I miss a class?",
                answer: "Recorded sessions will be available for all lectures with lifetime access."
            },
            {
                question: "Do I need to install any software?",
                answer: "Yes, you will need to install Java, Eclipse, and Selenium WebDriver. Detailed instructions will be provided in the class as well for both macOS and Windows."
            }
    ]
};

const playwrightCourseData = {
    title: "PLAYWRIGHT WITH JAVASCRIPT 2025 COURSE DETAILS",
    description: "This course is designed to provide students with a comprehensive understanding of Playwright using JavaScript. By the end of the course, students will be able to automate web applications, write robust test scripts, and implement test automation frameworks using Playwright.",
    enrolled: 120,
    backgroundImage: jsBg,
    stats: {
        'Live - Projects':'2',
        lectures: 28,
        duration: "2 Months",
        Certification:'Yes',
        Recordings:'Lifetime access',
        'Mock Test':"Weekly",
        'Skill Level': "All levels",
        language: "English",
        Placement: "Assistance",
        assessments: "Yes"
    },
    schedule: {
        classTiming: {
            indian: "08:00 AM IST",
            us: "09:30 PM GMT",
            uk: "02:30 AM GMT",
        },
        demo: "First 2 sessions are free!",
        date:'10th May 2025',
        classDate:'13th May 2025 Onwards',
        days:'Monday to Thursday',
        features: [
            "Live Classes",
            "Recorded Sessions",
            "Resume Assistance",
            "Interview Prep",
        ]
    },
    syllabus: [
        {
            title: "Core JavaScript Topics Covered in Course",
            topics: [
                "JavaScript Basics: Variables, Data Types, Operators",
                "Functions and Scope",
                "Arrays and Objects",
                "ES6 Features: let, const, arrow functions, destructuring",
                "Promises and Async/Await",
                "Error Handling",
                "Modules and Imports/Exports"
            ]
        },
        {
            title: "Introduction to Playwright",
            topics: [
                "What is Playwright?",
                "Why Playwright over other tools?",
                "Supported Browsers and Platforms",
                "Playwright vs Selenium"
            ]
        },
        {
            title: "Playwright Setup",
            topics: [
                "Installing Node.js and Playwright",
                "Project Structure",
                "Playwright Test Runner",
                "Configuration Files"
            ]
        },
        {
            title: "Locators and Selectors",
            topics: [
                "Locating Elements using CSS, XPath, Text, Role",
                "Best Practices for Selectors",
                "Debugging Selectors"
            ]
        },
        {
            title: "Playwright API",
            topics: [
                "Browser, Context, and Page Objects",
                "Navigation and Interactions",
                "Handling Alerts, Frames, and Popups",
                "Taking Screenshots and Videos",
                "Assertions and Waits"
            ]
        },
        {
            title: "Advanced Playwright",
            topics: [
                "Parallel Test Execution",
                "Data Driven Testing",
                "Custom Test Fixtures",
                "Network Interception and Mocking",
                "Handling File Uploads/Downloads",
                "Visual Regression Testing"
            ]
        },
        {
            title: "API Testing with Playwright",
            topics: [
                "Making API Requests",
                "Validating API Responses",
                "Combining UI and API Tests"
            ]
        },
        {
            title: "Cucumber with Playwright",
            topics: [
                "Introduction to BDD",
                "Setting up Cucumber with Playwright",
                "Writing Feature Files and Step Definitions",
                "Running BDD Tests"
            ]
        },
        {
            title: "Version Control",
            topics: [
                "Git",
                "GitHub",
                "Github Desktop"
            ]
        },
        {
            title: "CI / CD - GitHub Actions",
            topics: [
                "Continuous Integration using GitHub Actions",
                "Configuring the CI CD Pipeline",
                "Running the pipeline from Workflow Files"
            ]
        },
    ],
    pricing: {
        price: {
            indian: "7500 INR",
            uk: "95 EUROS",
            us: "110 USD"
        },
        contact: "+91 8810201221",
        linkedin: "https://www.linkedin.com/in/hemant-gandhi254/"
    },
    instructor: {
        name: "Hemant Gandhi",
        title:'QA Automation Lead and Trainer',
        bio: "With over 10 years of experience in the software testing industry. He has worked extensively with various automation testing tools and frameworks, specializing in delivering high-quality software solutions. His passion for quality assurance and automation drives him to share knowledge and help others excel in this field.",
        students: '200',
        ratings: '4.2',
        image: instructorImg
    }, 
    testimonials: [
        {
            userName: "Supriya D",
            userReview: "I recently completed Hemant Gandhi's automation testing class on Playwright and JavaScript, and it was outstanding. The instructor made complex topics easy to understand, and the hands-on exercises were incredibly valuable."
        },
        {
            userName: "Srikanth chivukula",
            userReview: "I really appreciate you for taking time from daily routines and providing training on Playwright and JavaScript. The topics covered are good and detailed. The support provided post sessions is also excellent.!"
        },
        {
            userName: "Mayooran Thiruchselvam",
            userReview: "The session was highly engaging and insightful, providing a comprehensive understanding session. I particularly appreciated how the presentation was structured, making complex concepts easy to understand."
        }
    ],
    faqs: [
            {
                question: "Is this course suitable for beginners?",
                answer: "Yes, this course starts with the basics and gradually moves to advanced topics."
            },
            {
                question: "Will I get hands-on experience?",
                answer: "Absolutely! The course includes multiple assignments and a real-world project."
            },
            {
                question: "What if I miss a class?",
                answer: "Recorded sessions will be available for all lectures with lifetime access."
            },
            {
                question: "Do I need to install any software?",
                answer: "Yes, you will need to install Node.js and Playwright. Detailed instructions will be provided in the class as well for both macOS and Windows."
            }
    ]
};

export const courseDetails = {
  selenium: seleniumCourseData,
  playwright: playwrightCourseData
};