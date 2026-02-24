import bg2 from '../../assets/bg5B.jpg';
import jsBg from '../../assets/js-background1.jpg';
import sdetBg from '../../assets/sdet2.jpg';
import instructorImg from '../../assets/profilePic.jpg';

const seleniumCourseData = {
  title: 'SELENIUM WITH JAVA 2025',
  description:
    'This course is designed to provide students with a comprehensive understanding of Selenium WebDriver using Java. By the end of the course, students will be able to automate web applications, write robust test scripts, and implement test automation frameworks.',
  enrolled: 150,
  backgroundImage: bg2,
  stats: {
    'Live - Projects': '2',
    lectures: 32,
    duration: '2.5 Months',
    Certification: 'Yes',
    Recordings: 'Lifetime access',
    'Mock Test': 'Weekly',
    'Skill Level': 'All levels',
    language: 'English',
    Placement: 'Assistance',
    assessments: 'Yes',
  },
  schedule: {
    classTiming: {
      indian: '08:00 PM IST',
      us: '09:30 AM GMT',
      uk: '03:30 PM GMT',
    },
    demo: 'First 2 sessions are free!',
    date: '15th July 2025',
    classDate: '16th July 2025 Onwards',
    days: 'Monday to Thursday',
    features: [
      'Live Classes',
      'Recorded Sessions',
      'Resume Assistance',
      'Interview Prep',
    ],
  },
  syllabus: [
    {
      title: 'Core Java Topics Covered in Course',
      topics: [
        'Installing Java, History and Features Of Java',
        'Classes and Objects',
        'Data Types, Variables, Operators',
        'Strings',
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
        'Java Keywords - this, static, super and final',
        'OOPS - Static and Non Static',
        'Exception Handling',
        'Packages and Access Modifiers',
        'Java Collections - ArrayList, HashMap, HashSet',
      ],
    },
    {
      title: 'Introduction to Selenium',
      topics: [
        'What is Test Automation?',
        'Why Test Automation?',
        'Types of Testing Tools',
        'Effective Use of Tools - potential benefits and risks',
        'Difference between manual and Automation.',
        'The automated Testing process',
      ],
    },
    {
      title: 'Locators',
      topics: [
        'Locating elements using ID, Name, link and Xpath, Relative locators in Selenium 4.0',
        'Understanding of SelectorsHub browser extension',
      ],
    },
    {
      title: 'Selenium Webdriver',
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
      title: 'Advance Selenium Webdriver',
      topics: [
        'Handling JavaScript alerts and Keyboard Events',
        'Maven, DB Connectivity and TestNG',
        'POI JARS',
        'Log4j API',
        'TestNG - Parameterization, groups, testsuites etc',
        'ReportNG and Allure Reports',
        'Page Object Model Design Pattern',
        'Keyword Driven Framework',
        'Data Driven Framework',
      ],
    },
    {
      title: 'REST Assured API Automation',
      topics: [
        'Adding REST Libraries to the Maven Project',
        'Sample Test Case Scripting',
        'Performing POST Requests',
        'Performing GET Requests',
        'Performing DELETE Requests',
        'Request and Response Spec Builder',
        'POJO Concepts',
        'GraphQL Automation',
        'End-to-End Scenarios using REST Assured',
        'Parsing JSON and XML Responses using JSON Path and XML Path',
        'Validating JSON Schema',
        'BDD and Non-BDD Approaches',
        'Serialization and Deserialization of Requests and Responses',
      ],
    },
    {
      title: 'Basics of the Cucumber Framework',
      topics: [
        'Introduction to Cucumber',
        'Creating a New Feature and File Syntax',
        'Runner File and Creating Step Definitions',
        'Combining TESTNG with Cucumber',
        'Executing Cases using Runner File',
        'Preparing the Scenario Name based on Tags',
        'Scenario Outline, Scenario Templates, and Different Cucumber Tags and Annotations',
        'Sharing Reports over the Cucumber Cloud',
        'Data Tables',
        'Parallel Testing',
      ],
    },
    {
      title: 'Version Control',
      topics: ['Git', 'GitHub', 'Github Desktop'],
    },
    {
      title: 'CI / CD - Jenkins Pipeline',
      topics: [
        'Continuous Integration using Jenkins and GIT on EC2 Instance',
        'Configuring the CI CD Pipeline',
        'Running the pipeline from Jenkins File',
      ],
    },
  ],
  pricing: {
    price: {
      indian: '8000 INR',
      uk: '100 EUROS',
      us: '120 USD',
    },
    contact: '+91 8810201221',
    linkedin: 'https://www.linkedin.com/in/hemant-gandhi254/',
  },
  instructor: {
    name: 'Hemant Gandhi',
    title: 'QA Automation Lead and Trainer',
    bio: 'With over 10 years of experience in the software testing industry. He has worked extensively with various automation testing tools and frameworks, specializing in delivering high-quality software solutions. His passion for quality assurance and automation drives him to share knowledge and help others excel in this field.',
    students: '200',
    ratings: '4.2',
    image: instructorImg,
  },
  testimonials: [
    {
      userName: 'Supriya D',
      userReview:
        "I recently completed Hemant Gandhi's automation testing class on Java and Selenium, and it was outstanding. The instructor made complex topics easy to understand, and the hands-on exercises were incredibly valuable.",
    },
    {
      userName: 'Srikanth chivukula',
      userReview:
        'I really appreciate you for taking time from daily routines and providing training on Java and Selenium. The topics covered are good and detailed. The support provided post sessions is also excellent.!',
    },
    {
      userName: 'Mayooran Thiruchselvam',
      userReview:
        'The session was highly engaging and insightful, providing a comprehensive understanding session. I particularly appreciated how the presentation was structured, making complex concepts easy to understand.',
    },
  ],
  faqs: [
    {
      question: 'Is this course suitable for beginners?',
      answer:
        'Yes, this course starts with the basics and gradually moves to advanced topics.',
    },
    {
      question: 'Will I get hands-on experience?',
      answer:
        'Absolutely! The course includes multiple assignments and a real-world project.',
    },
    {
      question: 'What if I miss a class?',
      answer:
        'Recorded sessions will be available for all lectures with lifetime access.',
    },
    {
      question: 'Do I need to install any software?',
      answer:
        'Yes, you will need to install Java, Eclipse, and Selenium WebDriver. Detailed instructions will be provided in the class as well for both macOS and Windows.',
    },
  ],
};

const playwrightAICourseData = {
  title:
    'Playwright with TypeScript - The Right Way (AI + Strong Fundamentals)',
  description:
    'A practical and modern course on mastering Playwright with TypeScript, combining strong fundamentals with AI-assisted testing to build scalable, robust automation frameworks.',
  enrolled: 150,
  backgroundImage: bg2,
  stats: {
    'Live - Projects': '2',
    lectures: 32,
    duration: '2.5 Months',
    Certification: 'Yes',
    Recordings: 'Lifetime access',
    'Mock Test': 'Weekly',
    'Skill Level': 'All levels',
    language: 'English',
    Placement: 'Assistance',
    assessments: 'Yes',
  },
  schedule: {
    classTiming: {
      indian: '07:45 AM IST',
      us: '09:15 PM GMT',
      aus: '01:15 PM AEDT',
    },
    demo: 'First 2 sessions are free!',
    date: '21st and 22nd Nov 2025',
    dateUS: '20th and 21st Nov 2025',
    classDate: '23rd Nov 2025',
    classDateUS: '22nd Nov 2025',
    days: 'Thursday to Sunday',
    daysUS: 'Wednesday to Saturday',
    features: [
      'Live Classes',
      'Recorded Sessions',
      'Resume Assistance',
      'Interview Prep',
    ],
  },
  syllabus: [
    {
      title: 'JavaScript/TypeScript Crash Course',
      topics: [
        'JavaScript basics: variables, data types, functions, scope',
        'TypeScript essentials: types, interfaces, type annotations',
        'Async/Await fundamentals: promises, async functions, error handling',
        'Modern JS syntax: arrow functions, destructuring, template literals',
        'Modules & imports/exports: ES6 modules in Node.js',
      ],
    },
    {
      title: 'Playwright Fundamentals & Setup',
      topics: [
        'Introduction to Playwright with JavaScript/TypeScript',
        'Installation & project setup for Playwright',
        'Async/Await usage in Playwright and page fixture deep dive',
        'Building your first Playwright test script',
        'Understanding core Playwright architecture',
      ],
    },
    {
      title: 'Locators & Element Interactions',
      topics: [
        'Locator strategies: CSS, XPath, text, ID',
        'Advanced locators: has, hasNot, hasText, hasNotText',
        'getBy methods: role-based & best-practice locator usage',
        'Assertions mastery with expect()',
        'Element handling strategies & stability best practices',
      ],
    },
    {
      title: 'Core UI Interactions & Elements',
      topics: [
        'Form handling: filling forms & sequential button clicks',
        'Click actions: click, double-click, right-click, programmatic clicks',
        'Form elements: radio buttons, checkboxes, selects, multi-selects',
        'Advanced UI: mouse hover, drag & drop, keyboard actions, file uploads',
      ],
    },
    {
      title: 'Advanced Browser Features',
      topics: [
        'Dialog handling: alerts, confirms, prompts',
        'Frame management: iFrame/frame navigation & interactions',
        'Multi-page scenarios: tabs, new pages, child windows',
      ],
    },
    {
      title: 'Framework Design & Patterns',
      topics: [
        'Page Object Model (POM): building scalable frameworks',
        'Custom fixtures for reusable test setups',
        'Integrating POM with fixtures',
        'Fixtures vs Hooks: beforeEach, afterEach, beforeAll, afterAll',
        'Test organization: annotations & grouping with describe()',
      ],
    },
    {
      title: 'Data-Driven Testing & Configuration',
      topics: [
        'playwright.config.ts deep dive',
        'Parameterization with JSON & CSV data sources',
        'Data-driven fixtures for test inputs',
        'Test tags & filtering: running selected tests',
      ],
    },
    {
      title: 'Debugging & Developer Tools',
      topics: [
        'Codegen: record & generate tests automatically',
        'Auto-locator: AI-powered element detection',
        'VS Code debugging: breakpoints, logs, step execution',
        'Playwright Inspector: advanced debugging',
        'Trace viewer: time-travel debugging',
        'UI mode: visual test run & debug',
      ],
    },
    {
      title: 'API Testing with Playwright',
      topics: [
        'Introduction to REST API automation with Playwright',
        'HTTP methods: GET, POST, PUT, PATCH, DELETE',
        'Request configuration: baseURL, headers, JSON body',
        'Response validation: status, headers, data',
        'Authentication: Basic Auth, API keys, tokens',
      ],
    },
    {
      title: 'Reporting & Execution',
      topics: [
        'HTML reports, screenshots, videos, trace viewer',
        'Built-in reporters: list, dot, HTML, JSON, JUnit, GitHub',
        'Allure reports with attachments',
        'Authentication state: skip login & reuse auth',
      ],
    },
    {
      title: 'DevOps & CI/CD Integration',
      topics: [
        'Git & GitHub: push, clone, pull requests',
        'GitHub Actions CI setup',
        'Jenkins integration: local & repo-based',
        'Cross-browser execution strategies in CI',
      ],
    },
    {
      title: 'AI-Powered Testing (Advanced)',
      topics: [
        'AI automation concepts: MCP servers & AI assistants',
        'GitHub Copilot setup for test generation',
        'AI-powered test automation with Copilot + Playwright',
      ],
    },
  ],
  pricing: {
    price: {
      indian: '8000 INR',
      aus: '150 AUD',
      us: '120 USD',
    },
    contact: '+91 8810201221',
    linkedin: 'https://www.linkedin.com/in/hemant-gandhi254/',
  },
  instructor: {
    name: 'Hemant Gandhi',
    title: 'QA Automation Lead and Trainer',
    bio: 'With over 10 years of experience in the software testing industry. He has worked extensively with various automation testing tools and frameworks, specializing in delivering high-quality software solutions. His passion for quality assurance and automation drives him to share knowledge and help others excel in this field.',
    students: '200',
    ratings: '4.2',
    image: instructorImg,
  },
  testimonials: [
    {
      userName: 'Supriya D',
      userReview:
        "I recently completed Hemant Gandhi's automation testing class on Java and Selenium, and it was outstanding. The instructor made complex topics easy to understand, and the hands-on exercises were incredibly valuable.",
    },
    {
      userName: 'Srikanth chivukula',
      userReview:
        'I really appreciate you for taking time from daily routines and providing training on Java and Selenium. The topics covered are good and detailed. The support provided post sessions is also excellent.!',
    },
    {
      userName: 'Mayooran Thiruchselvam',
      userReview:
        'The session was highly engaging and insightful, providing a comprehensive understanding session. I particularly appreciated how the presentation was structured, making complex concepts easy to understand.',
    },
  ],
  faqs: [
    {
      question: 'Is this course suitable for beginners?',
      answer:
        'Yes, this course starts with the basics and gradually moves to advanced topics.',
    },
    {
      question: 'Will I get hands-on experience?',
      answer:
        'Absolutely! The course includes multiple assignments and a real-world project.',
    },
    {
      question: 'What if I miss a class?',
      answer:
        'Recorded sessions will be available for all lectures with lifetime access.',
    },
    {
      question: 'Do I need to install any software?',
      answer:
        'Yes, you will need to install Java, Eclipse, and Selenium WebDriver. Detailed instructions will be provided in the class as well for both macOS and Windows.',
    },
  ],
};

const playwrightCourseData = {
  title: 'PLAYWRIGHT WITH JAVASCRIPT 2025',
  description:
    'This course is designed to provide students with a comprehensive understanding of Playwright using JavaScript. By the end of the course, students will be able to automate web applications, write robust test scripts, and implement test automation frameworks using Playwright.',
  enrolled: 120,
  backgroundImage: jsBg,
  stats: {
    'Live - Projects': '2',
    lectures: 36,
    duration: '2.5 Months',
    Certification: 'Yes',
    Recordings: 'Lifetime access',
    'Mock Test': 'Weekly',
    'Skill Level': 'All levels',
    language: 'English',
    Placement: 'Assistance',
    assessments: 'Yes',
  },
  schedule: {
    classTiming: {
      indian: '07:30 AM IST',
      us: '10:00 PM GMT',
      uk: '02:00 AM GMT',
    },
    demo: 'First 2 sessions are free!',
    date: '1st & 2nd September 2025',
    classDate: '3rd September 2025 Onwards',
    days: 'Monday to Friday (Weekdays only)',
    features: [
      'Live Classes',
      'Recorded Sessions',
      'Resume Assistance',
      'Interview Prep',
    ],
  },
  syllabus: [
    {
      title: 'JavaScript Fundamentals for Test Automation',
      topics: [
        'Variables (var, let, const), data types, operators, string manipulation methods, and template literals',
        'Control flow structures like if/else, switch, and loops (for, while, do-while), including break and continue',
        'Functions and scope, including function declarations, arrow functions, the this keyword, closures, and callback functions',
        'Arrays and objects with methods like map, filter, reduce, object literals, destructuring, and the spread operator',
        'ES6+ features such as let/const, default parameters, rest/spread operators, optional chaining, template strings, and module imports/exports',
      ],
    },
    {
      title: 'Advanced JavaScript Concepts',
      topics: [
        'Promises & Async/Await: Callbacks, Promises (resolve, reject, then, catch), async/await, Promise.all(), Promise.race()',
        'JavaScript & Web Interactions: DOM access (querySelector, innerText), Events (click, change, keydown), Event Listeners, Local & Session Storage',
        'JavaScript & API Testing: fetch() API, JSON.stringify/parse, HTTP methods (GET, POST, PUT, DELETE), API error handling',
      ],
    },
    {
      title: 'Getting Started with Playwright & Setup',
      topics: [
        'What is Playwright and Why Use It?',
        'Installing Playwright and Node.js',
        'Setting Up VS Code for Playwright',
        'Creating Your First Playwright Test',
        'Understanding Core Features of Playwright',
      ],
    },
    {
      title: 'Locators & Element Interactions in Playwright',
      topics: [
        'Playwright Locators: locator(), getByRole(), getByText()',
        'Handling Clicks, Inputs, and Form Submissions',
        'Keyboard and Mouse Events',
        'Interacting with Dropdowns, Checkboxes, and Radio Buttons',
        'Handling Alerts, Modals, and Frames',
      ],
    },
    {
      title: 'Assertions, Hooks & Test Execution in Playwright',
      topics: [
        'Using Playwright Assertions (expect())',
        'Soft vs Hard Assertions',
        'Test Hooks: beforeAll, afterAll',
        'Debugging with Trace Viewer and Debug Mode',
        'Handling Dynamic Elements with Waits: waitForSelector, waitForTimeout',
      ],
    },
    {
      title: 'Playwright Advanced Features',
      topics: [
        'Mocking API Requests and Network Interception',
        'Handling File Uploads and Downloads',
        'Authentication Handling: JWT, Cookies, Session Storage',
        'Mobile Emulation and Responsive Testing',
        'Running Tests Across Multiple Browsers',
      ],
    },
    {
      title: 'Playwright Integration with JavaScript Frameworks',
      topics: [
        'Writing Reusable Test Functions',
        'Using Page Object Model (POM) with Playwright',
        'Data-Driven Testing with JSON and CSV',
        'Handling Configuration Files (playwright.config.js)',
      ],
    },
    {
      title: 'Using TypeScript in Playwright Automation',
      topics: [
        'Understand the Differences Between TypeScript and JavaScript',
        'Deep Dive into TypeScript Type Syntaxes and Their Usage',
        'Build Playwright Page Object Files in TypeScript and Enforce Typing Standards',
        'Create Utility Files in TypeScript with Typing Enforcement',
        'Refactor Playwright Tests into TypeScript-Compatible Code and Run E2E Tests',
      ],
    },
    {
      title: 'BDD with Cucumber integration',
      topics: [
        'Introduction to BDD & Cucumber',
        'Setting Up Cucumber with Playwright (JavaScript)',
        'Writing Simple Feature Files (Gherkin)',
        'Step Definitions with Playwright',
        'Data Tables & Examples (Basic Parameterization)',
        'Tags & Hooks',
        'Reporting',
      ],
    },
    {
      title: 'CI/CD Integration & Reporting',
      topics: [
        'Generating Reports: HTML, JSON, Allure',
        'Running Playwright Tests in CI/CD: GitHub Actions, Jenkins',
        'Running Playwright Tests in Docker',
        'Parallel Test Execution in CI/CD Pipelines',
      ],
    },
  ],
  pricing: {
    price: {
      indian: '8000 INR',
      uk: '100 EUROS',
      us: '120 USD',
    },
    contact: '+91 8810201221',
    linkedin: 'https://www.linkedin.com/in/hemant-gandhi254/',
  },
  instructor: {
    name: 'Hemant Gandhi',
    title: 'QA Automation Lead and Trainer',
    bio: 'With over 10 years of experience in the software testing industry. He has worked extensively with various automation testing tools and frameworks, specializing in delivering high-quality software solutions. His passion for quality assurance and automation drives him to share knowledge and help others excel in this field.',
    students: '200',
    ratings: '4.2',
    image: instructorImg,
  },
  testimonials: [
    {
      userName: 'Supriya D',
      userReview:
        "I recently completed Hemant Gandhi's automation testing class on Playwright and JavaScript, and it was outstanding. The instructor made complex topics easy to understand, and the hands-on exercises were incredibly valuable.",
    },
    {
      userName: 'Srikanth chivukula',
      userReview:
        'I really appreciate you for taking time from daily routines and providing training on Playwright and JavaScript. The topics covered are good and detailed. The support provided post sessions is also excellent.!',
    },
    {
      userName: 'Mayooran Thiruchselvam',
      userReview:
        'The session was highly engaging and insightful, providing a comprehensive understanding session. I particularly appreciated how the presentation was structured, making complex concepts easy to understand.',
    },
  ],
  faqs: [
    {
      question: 'Is this course suitable for beginners?',
      answer:
        'Yes, this course starts with the basics and gradually moves to advanced topics.',
    },
    {
      question: 'Will I get hands-on experience?',
      answer:
        'Absolutely! The course includes multiple assignments and a real-world project.',
    },
    {
      question: 'What if I miss a class?',
      answer:
        'Recorded sessions will be available for all lectures with lifetime access.',
    },
    {
      question: 'Do I need to install any software?',
      answer:
        'Yes, you will need to install Node.js and Playwright. Detailed instructions will be provided in the class as well for both macOS and Windows.',
    },
  ],
};

const SDETCourseData = {
  title: 'Selenium With Java - Interview Preparation Course',
  description:
    "This course prepares you for SDET interviews by focusing on Java coding, automation frameworks, API testing, and CI/CD tools. It's designed to build strong problem-solving skills and real-world test automation experience.",
  enrolled: 120,
  backgroundImage: sdetBg,
  stats: {
    lectures: 40,
    duration: '2 Months',
    Certification: 'Yes',
    Recordings: 'Lifetime access',
    'Mock Test': 'Weekly',
    'Skill Level': 'All levels',
    language: 'English',
    Placement: 'Assistance',
  },
  schedule: {
    classTiming: {
      indian: '08:00 PM IST',
      us: '10:30 AM GMT',
      uk: '03:30 PM GMT',
    },
    demo: 'First 3 sessions are free!',
    date: '23rd July 2025',
    classDate: '23rd July 2025 Onwards',
    days: 'Monday to Friday',
    features: [
      'Live Classes',
      'Recorded Sessions',
      'Resume Assistance',
      'Interview Prep',
    ],
  },
  syllabus: [
    {
      title: 'Phase 1: Coding Rounds & Core Java (Weeks 1-3)',
      objective:
        'Strengthen problem-solving, algorithmic thinking, and Java fluency for initial SDET coding interviews.',
      topics: [
        {
          header: 'Java Language Essentials',
          content: 'Data types, variables, control flow, OOP fundamentals',
        },
        {
          header: 'Data Structures',
          content:
            'Arrays, Strings, Linked Lists, Stacks, Queues, HashMaps, Sets',
        },
        {
          header: 'Algorithms',
          content:
            'Sorting, searching, recursion, two-pointer, sliding window, basic dynamic programming',
        },
        { header: 'Popular Coding Problems:' },
        {
          header: 'Array',
          content:
            'Reverse, duplicates, subarray sum, max/min, merge intervals',
        },
        {
          header: 'String',
          content: 'Palindrome, anagram, substring search, frequency count',
        },
        {
          header: 'Linked List',
          content: 'Reverse, detect cycle, merge, find middle',
        },
        {
          header: 'Stack/Queue',
          content: 'Evaluate expressions, balanced parentheses',
        },
        {
          header: 'Mock Coding Interviews',
          content:
            'Timed tests, Whiteboard rounds, One to one interview with Hemant, Peer code reviews',
        },
        {
          header: 'Sample Coding Session Plan',
          content: '15m Theory Recap, 40m Coding, 20m Discussion',
        },
      ],
    },
    {
      title: 'Phase 2: Test Automation Frameworks & Selenium (Weeks 4-5)',
      objective:
        'Prepare for framework design and hands-on implementation interviews.',
      topics: [
        {
          header: 'Selenium WebDriver Advanced Usage',
          content:
            'Locator strategies (XPath, CSS), waits, actions, handling pop-ups',
        },
        {
          header: 'Framework Patterns',
          content:
            'Page Object Model, Page Factory, DRY principle, data-driven tests',
        },
        {
          header: 'TestNG Integration',
          content:
            'Test structuring, annotations, grouping, parallel execution',
        },
        {
          header: 'Data Management',
          content: 'Parameterization using Excel/CSV; Apache POI',
        },
        {
          header: 'Framework Enhancement',
          content:
            'Logging, reporting (Extent, Allure), config mgmt (properties, YAML)',
        },
        {
          header: 'Coding Task Practice',
          content: 'Helpers, validators, POMs, utilities',
        },
      ],
    },
    {
      title: 'Phase 3: API Testing & Backend Automation (Week 6)',
      objective:
        'Demonstrate backend test skills with REST Assured and API automation.',
      topics: [
        {
          header: 'REST Basics',
          content: 'HTTP methods, status codes, headers, payload',
        },
        {
          header: 'REST Assured Setup',
          content:
            'Request/response handling, path parameters, JSON/XML assertions',
        },
        {
          header: 'Authentication & Authorization',
          content: 'Basic, OAuth, token strategies',
        },
        {
          header: 'API Chaining and Data Driven Tests',
          content: 'Data providers, response chaining',
        },
      ],
    },
    {
      title: 'Phase 4: CI/CD, Jenkins & DevOps Basics (Week 7)',
      objective:
        'Showcase end-to-end automation and integration capabilities essential for SDET roles.',
      topics: [
        {
          header: 'Jenkins Setup',
          content: 'Job configuration, Git integration, triggering builds',
        },
        {
          header: 'Pipeline Basics',
          content:
            'Freestyle and scripted pipelines, integration of Selenium/API tests',
        },
        { header: 'Reporting', content: 'Report publishing, notifications' },
        { header: 'Overview of Docker & Test Containerization' },
      ],
    },
    {
      title: 'Phase 5: Comprehensive Mock Interviews & Soft Skills (Week 8)',
      objective:
        'Build interview confidence for both technical and non-technical rounds.',
      topics: [
        {
          header: 'Mock Technical Interviews',
          content:
            'Coding questions, debugging, code review discussions, Framework design scenarios, best practices dialogue',
        },
        { header: 'Behavioral/Situational Questions' },
        { header: 'Resume and Portfolio Review' },
      ],
    },
  ],
  pricing: {
    price: {
      indian: '8000 INR',
      uk: '100 EUROS',
      us: '120 USD',
    },
    contact: '+91 8810201221',
    linkedin: 'https://www.linkedin.com/in/hemant-gandhi254/',
  },
  instructor: {
    name: 'Hemant Gandhi',
    title: 'QA Automation Lead and Trainer',
    bio: 'With over 10 years of experience in the software testing industry. He has worked extensively with various automation testing tools and frameworks, specializing in delivering high-quality software solutions. His passion for quality assurance and automation drives him to share knowledge and help others excel in this field.',
    students: '200',
    ratings: '4.2',
    image: instructorImg,
  },
  testimonials: [
    {
      userName: 'Supriya D',
      userReview:
        "I recently completed Hemant Gandhi's automation testing class on Playwright and JavaScript, and it was outstanding. The instructor made complex topics easy to understand, and the hands-on exercises were incredibly valuable.",
    },
    {
      userName: 'Srikanth chivukula',
      userReview:
        'I really appreciate you for taking time from daily routines and providing training on Playwright and JavaScript. The topics covered are good and detailed. The support provided post sessions is also excellent.!',
    },
    {
      userName: 'Mayooran Thiruchselvam',
      userReview:
        'The session was highly engaging and insightful, providing a comprehensive understanding session. I particularly appreciated how the presentation was structured, making complex concepts easy to understand.',
    },
  ],
  faqs: [
    {
      question: 'Is this course suitable for beginners?',
      answer:
        'Yes, this course starts with the basics and gradually moves to advanced topics.',
    },
    {
      question: 'Will I get hands-on experience?',
      answer:
        'Absolutely! The course includes multiple assignments and a real-world project.',
    },
    {
      question: 'What if I miss a class?',
      answer:
        'Recorded sessions will be available for all lectures with lifetime access.',
    },
    {
      question: 'Do I need to install any software?',
      answer:
        'Yes, you will need to install Node.js and Playwright. Detailed instructions will be provided in the class as well for both macOS and Windows.',
    },
  ],
};

const PlaywrightInterviewCourseData = {
  title: 'Playwright with JavaScript/TypeScript – Interview Prep Course',
  description:
    'This comprehensive course prepares you for Playwright automation interviews by focusing on JavaScript/TypeScript coding, modern test automation frameworks, API testing, and CI/CD integration. Build strong problem-solving skills and real-world automation experience.',
  enrolled: 95,
  backgroundImage: jsBg,
  stats: {
    lectures: 38,
    duration: '2 Months',
    Certification: 'Yes',
    Recordings: 'Lifetime access',
    'Mock Test': 'Weekly',
    'Skill Level': 'All levels',
    language: 'English',
    Placement: 'Assistance',
  },
  schedule: {
    classTiming: {
      indian: '08:00 AM IST',
      us: '10:30 PM GMT',
      uk: '02:30 PM GMT',
    },
    demo: 'First 2 sessions are free!',
    date: '1st & 2nd September 2025',
    classDate: '3rd September 2025 Onwards',
    days: 'Monday to Thursday',
    features: [
      'Live Classes',
      'Recorded Sessions',
      'Resume Assistance',
      'Interview Prep',
    ],
  },
  syllabus: [
    {
      title:
        'Phase 1: JavaScript/TypeScript Fundamentals & Coding Rounds (Weeks 1-2)',
      objective:
        'Master JavaScript/TypeScript programming and algorithmic thinking for technical interviews.',
      topics: [
        {
          header: 'JavaScript Core Concepts',
          content:
            'Variables, data types, functions, closures, promises, async/await',
        },
        {
          header: 'TypeScript Fundamentals',
          content: 'Type annotations, interfaces, generics, decorators',
        },
        {
          header: 'Data Structures in JS/TS',
          content: 'Arrays, Objects, Maps, Sets, implementation patterns',
        },
        {
          header: 'Algorithms & Problem Solving',
          content: 'Sorting, searching, recursion, dynamic programming',
        },
        { header: 'Popular Coding Problems:' },
        {
          header: 'Array Manipulation',
          content: 'Filter, map, reduce, find duplicates, merge arrays',
        },
        {
          header: 'String Operations',
          content: 'Palindrome check, anagram detection, pattern matching',
        },
        {
          header: 'Object Handling',
          content: 'Deep cloning, property manipulation, JSON operations',
        },
        {
          header: 'Async Programming',
          content: 'Promise chains, error handling, concurrent operations',
        },
        {
          header: 'Mock Coding Interviews',
          content: 'Live coding sessions, whiteboard problems, peer reviews',
        },
        {
          header: 'Best Practices',
          content:
            'Code quality, debugging techniques, performance optimization',
        },
      ],
    },
    {
      title: 'Phase 2: Playwright Framework Mastery (Weeks 3-4)',
      objective:
        'Build expertise in Playwright automation framework and testing patterns.',
      topics: [
        {
          header: 'Playwright Essentials',
          content:
            'Playwright setup with JS/TS, Browsers: Chromium, Firefox, WebKit, Locators & Selectors: CSS, text, XPath, Handling UI elements: inputs, dropdowns, checkboxes, alerts',
        },
        {
          header: 'Smart Features',
          content:
            'Auto-wait & retry-ability (no explicit waits), Parallel test execution, Screenshots, videos, trace viewer',
        },
        {
          header: 'Test Runner & Assertions',
          content:
            'Playwright Test framework basics, Assertions & expect conditions, Test hooks & fixtures',
        },
        // { header: "Test Data Management", content: "Fixtures, test data factories, environment configuration" },
        // { header: "Advanced Interactions", content: "File uploads/downloads, drag-drop, keyboard/mouse events" },
        // { header: "Visual Testing", content: "Screenshot comparison, visual regression testing" },
        // { header: "Mobile & Cross-browser", content: "Device emulation, browser-specific testing" }
      ],
    },
    {
      title: 'Phase 3: Framework Design & Best Practices (Week 5)',
      // objective: "Master API testing and network interception with Playwright.",
      topics: [
        {
          header: 'Scalable Framework Patterns',
          content:
            'Page Object Model (POM) with Playwright, Reusable utilities & helpers, Config management (env files, JSON, YAML)',
        },
        {
          header: 'Test Organization',
          content:
            'Test data-driven approach, Parametrization with JSON/Excel/CSV, Tags & grouping',
        },
        {
          header: 'Reporting & Debugging',
          content:
            'HTML reports (Allure, Playwright built-in), Logging strategies, Debug mode & inspector tool',
        },
        // { header: "Authentication Testing", content: "JWT, OAuth, session management, security testing" },
        // { header: "API Chaining", content: "Sequential API calls, data dependency management" },
        // { header: "GraphQL Testing", content: "Queries, mutations, schema validation" }
      ],
    },
    {
      title: 'Phase 4: API Testing with Playwright  (Week 6)',
      // objective: "Implement comprehensive automation pipelines and DevOps practices.",
      topics: [
        {
          header: 'API Basics',
          content:
            'HTTP methods, headers, payload, status codes, REST API automation with Playwright’s request context',
        },
        {
          header: 'Advanced API Testing',
          content:
            'Chaining requests & response validations, Authentication (basic, token-based, OAuth), Data-driven API testing',
        },
        // { header: "Reporting & Analytics", content: "HTML reports, Allure integration, test metrics" },
        // { header: "Pipeline Optimization", content: "Test parallelization, caching strategies, performance" },
        // { header: "Environment Management", content: "Multi-environment testing, configuration management" }
      ],
    },
    {
      title: 'Phase 5: CI/CD Integration & DevOps (Week 7)',
      objective:
        'Implement comprehensive automation pipelines and DevOps practices.',
      topics: [
        {
          header: 'CI/CD Integration',
          content:
            'GitHub Actions / Jenkins with Playwright, Running tests in pipelines, Report publishing & notifications',
        },
        {
          header: 'Docker & Test Containers',
          content:
            'Docker basics for test execution, Running Playwright tests inside containers',
        },
        // { header: "Reporting & Analytics", content: "HTML reports, Allure integration, test metrics" },
        // { header: "Pipeline Optimization", content: "Test parallelization, caching strategies, performance" },
        // { header: "Environment Management", content: "Multi-environment testing, configuration management" }
      ],
    },
    {
      title: 'Phase 6: Interview Preparation & Advanced Topics (Week 8)',
      objective:
        'Build confidence for technical interviews and advanced automation scenarios.',
      topics: [
        {
          header: 'Technical Mock Interviews',
          content:
            'UI automation scenarios, Framework design discussions, Debugging & optimization questions',
        },
        {
          header: 'Interview Q&A',
          content:
            'Playwright-specific interview questions, JavaScript/TS coding interview practice',
        },
        {
          header: 'Career & Soft Skills',
          content:
            'Resume & LinkedIn optimization, HR & behavioral mock questions, How to present automation projects in interviews',
        },
        // { header: "Mock Technical Interviews", content: "Live coding, framework design, best practices discussion" },
        // { header: "Behavioral Interviews", content: "STAR method, technical leadership scenarios" },
        // { header: "Portfolio Development", content: "GitHub projects, resume optimization, interview tips" }
      ],
    },
  ],
  pricing: {
    price: {
      indian: '8000 INR',
      uk: '100 EUROS',
      us: '120 USD',
    },
    contact: '+91 8810201221',
    linkedin: 'https://www.linkedin.com/in/hemant-gandhi254/',
  },
  instructor: {
    name: 'Hemant Gandhi',
    title: 'QA Automation Lead and Trainer',
    bio: 'With over 10 years of experience in the software testing industry. He has worked extensively with various automation testing tools and frameworks, specializing in delivering high-quality software solutions. His passion for quality assurance and automation drives him to share knowledge and help others excel in this field.',
    students: '200',
    ratings: '4.2',
    image: instructorImg,
  },
  testimonials: [
    {
      userName: 'Priya Sharma',
      userReview:
        "Hemant's Playwright interview prep course was game-changing! The combination of JavaScript fundamentals with real interview scenarios helped me land my dream SDET role. The mock interviews were incredibly realistic.",
    },
    {
      userName: 'Rajesh Kumar',
      userReview:
        'The course structure is perfect for interview preparation. Starting from JS/TS basics to advanced Playwright concepts - everything was covered in detail. The CI/CD integration module was particularly helpful.',
    },
    {
      userName: 'Sarah Johnson',
      userReview:
        'As someone transitioning to test automation, this course provided the perfect blend of theory and practical implementation. The live coding sessions and portfolio guidance were exceptional.',
    },
  ],
  faqs: [
    {
      question: 'Is prior Coding experience required?',
      answer:
        'No, the course starts with fundamentals and builds up to advanced concepts. Basic JavaScript knowledge is helpful but not mandatory.',
    },
    {
      question:
        'Will this help with both JavaScript and TypeScript interviews?',
      answer:
        'Yes! We cover both JavaScript and TypeScript extensively, including type systems, interfaces, and best practices for both languages.',
    },
    {
      question: 'Are mock interviews included?',
      answer:
        'Absolutely! The course includes multiple mock interview sessions, live coding challenges, and personalized feedback to build your confidence.',
    },
    {
      question: 'What tools do I need to install?',
      answer:
        "You'll need Node.js, VS Code, and Playwright. We provide detailed setup instructions for Windows, macOS environments.",
    },
  ],
};

export const courseDetails = {
  selenium: seleniumCourseData,
  playwright: playwrightCourseData,
  sdet: SDETCourseData,
  playwrightInterview: PlaywrightInterviewCourseData,
  playwrightAI: playwrightAICourseData,
};
