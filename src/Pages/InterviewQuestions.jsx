import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, BookOpen, Code, Terminal, Laptop } from 'lucide-react';
import './InterviewQA.css';
import Navbar from "../Components/Navbar";

const InterviewQA = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 1,
      title: 'Java Fundamentals',
      icon: <Code size={32} />,
      description: 'Core Java concepts and programming fundamentals',
      questions: [
        {
          question: 'What makes the Java platform independent?',
          answer: 'Java works on the principle of writing once and running anywhere. Once a Java program is written, it is compiled into byte code, which can then be run on any Java Virtual Machine or JVM. Different operating systems and hardware architectures have JVMs custom-designed for themselves, making code agnostic to the underlying hardware and OS.'
        },
        {
          question: 'Explain the concept of OOP in Java.',
          answer: 'Java is an Object-Oriented Programming (OOP) language that organizes data and behavior in objects. Key concepts include: Encapsulation (bundling data and methods), Abstraction (hiding complexity), Inheritance (allowing new classes to inherit properties), and Polymorphism (enabling objects to be treated as instances of their parent class).'
        },
        {
          question: 'What is the difference between HashMap and HashTable?',
          answer: 'HashMap is non-synchronized and permits null values/keys, while HashTable is synchronized and doesn\'t allow nulls. HashMap performs better in non-threaded applications, while HashTable is thread-safe but has lower performance.'
        },
        {
          question: 'Explain the Java Memory Model.',
          answer: 'The Java Memory Model consists of Heap (object storage), Stack (method execution and local variables), Method Area (class metadata), and Native Method Stack. It defines how threads interact with memory, ensuring consistent behavior across platforms.'
        },
        {
          question: 'What are the differences between Abstract Class and Interface?',
          answer: 'Abstract classes can have constructor, instance variables, and concrete methods, while interfaces can only have constants and abstract methods (prior to Java 8). A class can implement multiple interfaces but extend only one abstract class.'
        },
        {
          question: 'testing?',
          answer: 'testing'
        }
      ]
    },
    {
      id: 2,
      title: 'Selenium Basics',
      icon: <Terminal size={32} />,
      description: 'Essential Selenium WebDriver concepts',
      questions: [
        {
          question: 'What is Selenium and what are its components?',
          answer: 'Selenium is a tool for automating web browser interactions. Components include: Selenium WebDriver (allows direct browser interaction), Selenium IDE (browser extension for record-and-playback), and Selenium Grid (distributes tests across multiple machines).'
        },
        {
          question: 'Explain different locators in Selenium WebDriver.',
          answer: 'Selenium WebDriver provides various locators: ID, Name, Class Name, Tag Name, Link Text, Partial Link Text, CSS Selector, and XPath. Each serves different purposes in identifying elements on a webpage.'
        }
      ]
    },
    {
      id: 3,
      title: 'Advanced Automation',
      icon: <BookOpen size={32} />,
      description: 'Advanced testing frameworks and practices',
      questions: [
        {
          question: 'What is the Page Object Model (POM)?',
          answer: 'Page Object Model is a design pattern that creates object repositories for web UI elements. It reduces code duplication and improves test maintenance. Each web page has a corresponding Page Class containing web element locators and methods to interact with them.'
        }
      ]
    },
    {
      id: 4,
      title: 'JavaScript',
      icon: <Laptop size={32} />,
      description: 'Modern JavaScript concepts and features',
      questions: [
        {
          question: 'What are the different data types in JavaScript?',
          answer: 'JavaScript has Primitive Types (String, Number, Boolean, Undefined, Null, Symbol, BigInt) and Non-Primitive Types (Object, which includes arrays and functions).'
        },
        {
          question: 'Explain promises and async/await in JavaScript.',
          answer: 'Promises represent a value that may be available now, in the future, or never. They handle asynchronous operations using .then() and .catch() methods. Async/await is a syntactic sugar over promises that makes asynchronous code look synchronous, making it easier to read and maintain.'
        },
        {
          question: 'What is event delegation in JavaScript?',
          answer: 'Event delegation is a pattern where a single event listener is added to a parent element to handle events on multiple child elements. This improves performance by reducing the number of event listeners needed.'
        }
      ]
    },
    {
      id: 5,
      title: 'Playwright',
      icon: <BookOpen size={32} />,
      description: 'Modern browser automation with Playwright',
      questions: [
        {
          question: 'What is Playwright and why is it used?',
          answer: 'Playwright is an open-source browser automation tool by Microsoft that enables end-to-end testing of web applications across multiple browsers (Chromium, Firefox, WebKit). It supports modern JavaScript frameworks and allows for cross-browser and cross-platform testing with a single API.'
        },
        {
          question: 'How do you handle different types of waits in Playwright?',
          answer: 'Playwright has built-in automatic waiting for elements to be actionable. You can use explicit waits like page.waitForSelector() for elements, page.waitForTimeout() for time-based waits, and page.waitForLoadState() for network activity.'
        },
        {
          question: 'What are locators in Playwright and how do you use them?',
          answer: 'Locators in Playwright are used to find and interact with elements on a page. They automatically handle waiting for elements to be actionable. Common locators include page.getByText(), page.getByRole(), page.getByLabel(), page.getByTestId(), and page.getByTitle().'
        }
      ]
    }
  ];

  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const filteredCategories = searchTerm 
    ? categories.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : categories;

  return (
    <>
      <Navbar />
      <div className="interview-qa">
        <div className="container">
          {/* <div className="search-section">
            <div className="search-bar">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search interview questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div> */}
          
          <div className="content-layout">
            <div className="categories-sidebar">
              <h2>Categories</h2>
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-info">
                    <h3>{category.title}</h3>
                    <span className="question-count">{category.questions.length} questions</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="questions-content">
              {selectedCategory ? (
                <div className="qa-section">
                  <div className="section-header">
                    <div className="header-left">
                      {filteredCategories.find(cat => cat.id === selectedCategory)?.icon}
                      <h3>{filteredCategories.find(cat => cat.id === selectedCategory)?.title}</h3>
                    </div>
                    <span className="question-total">
                      {filteredCategories.find(cat => cat.id === selectedCategory)?.questions.length} Questions
                    </span>
                  </div>

                  <div className="questions-container">
                    {filteredCategories
                      .find(cat => cat.id === selectedCategory)
                      ?.questions.map((qa, index) => (
                        <div
                          key={index}
                          className={`qa-card ${expandedQuestions[index] ? 'expanded' : ''}`}
                          onClick={() => toggleQuestion(index)}
                        >
                          <div className="question-header">
                            <h4>{qa.question}</h4>
                            {expandedQuestions[index] ? (
                              <ChevronUp className="chevron-icon" />
                            ) : (
                              <ChevronDown className="chevron-icon" />
                            )}
                          </div>
                          {expandedQuestions[index] && (
                            <div className="answer">
                              {qa.answer}
                            </div>
                          )}
                        </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="no-selection">
                  <BookOpen size={48} />
                  <h3>Select a category to view questions</h3>
                  <p>Choose from the categories on the left to explore interview questions</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewQA;