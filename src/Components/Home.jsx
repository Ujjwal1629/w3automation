import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, BookOpen, Code, Terminal, Search } from 'lucide-react';
import './Home.css';
import LearningPathways from './Learning';
import ReactGA from "react-ga4";

const codeExamples = {
  selenium: `
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FirstTest {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.example.com");
        // Start automating!
    }
}`,
  playwright: `
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.example.com');
  // Start automating!
})();`,
  api: `
import io.restassured.RestAssured;
import org.testng.annotations.Test;

public class APITest {
    @Test
    public void testAPI() {
        RestAssured.given()
            .get("https://api.example.com/data")
            .then()
            .statusCode(200);
    }
}`,
  cypress: `
describe('My First Test', () => {
  it('Visits example website', () => {
    cy.visit('https://www.example.com')
    // Start automating with Cypress!
    cy.get('.element').should('be.visible')
    cy.contains('Welcome').click()
  })
})`,
interview: `
Q1: How do you handle dynamic elements in Selenium?
---------------------------------------------------
✓ Solution:
We use WebDriverWait to implement explicit waits. This ensures the element is in a clickable state before interacting with it.

Example:
WebDriverWait wait = new WebDriverWait(driver, 10);
WebElement element = wait.until(
    ExpectedConditions.elementToBeClickable(By.id("dynamicId"))
);

💡 Key Points:
• Prevents flaky tests due to timing issues
• Better than Thread.sleep()
• Maximum wait time of 10 seconds
• Throws TimeoutException if element isn't found
`,
};

const placeholderTexts = ["Search Selenium", "Search Playwright", "Search API Testing", "Search Cypress", "Search Interview Questions"];

const TOPICS_MAP = {
  selenium: {
    path: '/Selenium',
    title: 'Selenium with Java',
    description: 'Master web automation with the industry standard tool'
  },
  playwright: {
    path: '/Playwright',
    title: 'Playwright',
    description: 'Modern automation for modern web apps'
  },
  api: {
    path: '/',
    title: 'API Testing',
    description: 'Learn REST API automation fundamentals'
  },
  cypress: {
    path: '/',
    title: 'Cypress',
    description: 'Modern, all-in-one testing framework'
  },
  interview: {
    path: '/',
    title: 'Interview Questions',
    description: 'Prepare for automation testing interviews'
  }
};

export default function Home() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState('selenium');
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  ReactGA.initialize("G-FPDLKPFE8H");

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    
    // Track initial landing
    ReactGA.event({
      category: "User Engagement",
      action: "Page Visit",
      label: "Home Page",
    });
  }, []);

  const filteredTopics = Object.entries(TOPICS_MAP).filter(([key, value]) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      value.title.toLowerCase().includes(searchLower) ||
      value.description.toLowerCase().includes(searchLower)
    );
  });

  const handleStartLearning = () => {
    const selectedPath = TOPICS_MAP[selectedTopic]?.path;
    if (selectedPath) {
      // Track when user starts learning a topic
      ReactGA.event({
        category: "Learning Journey",
        action: "Started Learning",
        label: TOPICS_MAP[selectedTopic].title,
      });
      
      window.scrollTo(0, 0);
      navigate(selectedPath);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Track search interactions
    if (query.length > 2) {
      ReactGA.event({
        category: "Search",
        action: "Topic Search",
        label: query,
      });
    }

    if (filteredTopics.length === 1) {
      setSelectedTopic(filteredTopics[0][0]);
      
      // Track automatic topic selection from search
      ReactGA.event({
        category: "Search",
        action: "Auto Select Topic",
        label: filteredTopics[0][0],
      });
    }
  };

  const handleTopicSelection = (key) => {
    setSelectedTopic(key);
    
    // Track manual topic selection
    ReactGA.event({
      category: "User Interaction",
      action: "Topic Selected",
      label: TOPICS_MAP[key].title,
    });
  };

  // Track code example viewing
  useEffect(() => {
    if (selectedTopic) {
      ReactGA.event({
        category: "Content Interaction",
        action: "Viewed Code Example",
        label: TOPICS_MAP[selectedTopic].title,
      });
    }
  }, [selectedTopic]);
  // const filteredTopics = Object.entries(TOPICS_MAP).filter(([key, value]) => {
  //   const searchLower = searchQuery.toLowerCase();
  //   return (
  //     value.title.toLowerCase().includes(searchLower) ||
  //     value.description.toLowerCase().includes(searchLower)
  //   );
  // });
  // const handleStartLearning = () => {
  //   const selectedPath = TOPICS_MAP[selectedTopic]?.path;
  //   if (selectedPath) {
  //     window.scrollTo(0, 0);
  //     navigate(selectedPath);
  //   }
  // };
  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  //   if (filteredTopics.length === 1) {
  //     setSelectedTopic(filteredTopics[0][0]);
  //   }
  // };

  useEffect(() => {
    const currentText = placeholderTexts[textIndex];
    if (charIndex < currentText.length) {
      const typingTimeout = setTimeout(() => {
        setPlaceholder((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(typingTimeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % placeholderTexts.length);
        setCharIndex(0);
        setPlaceholder('');
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }
  }, [charIndex, textIndex]);

  return (
    <>
      <div className="home">
        <div className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>
                Learn <span className="highlight">Test Automation</span>
                <br />Today
              </h1>
              <p className="subtitle">
                Learn industry-leading automation tools and frameworks through our interactive modules.
              </p>

              <div className="search-bar-home">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder={placeholder || "Search topics..."}
                  className="search-input"
                />
                <Search className="search-icon-home" />
              </div>
            </div>

            <div className="topics-container">
              <div className="topics-scroll-wrapper">
                <div className="topics-grid" ref={scrollContainerRef}>
                  {filteredTopics.map(([key, value]) => (
                    <div
                      key={key}
                      className={`topic-card ${selectedTopic === key ? 'selected' : ''}`}
                      onClick={() => setSelectedTopic(key)}
                    >
                      {key === 'selenium' && <Terminal className="topic-icon" />}
                      {key === 'playwright' && <Code className="topic-icon" />}
                      {key === 'api' && <BookOpen className="topic-icon" />}
                      {key === 'cypress' && <Code className="topic-icon" />}
                      {key === 'interview' && <BookOpen className="topic-icon" />}
                      <h2>{value.title}</h2>
                      <p>{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="code-example-section">
              <div className="example-header">
                <Play className="play-icon" />
                <h3>Try it yourself</h3>
              </div>
              <pre className="code-block">
                <code>{codeExamples[selectedTopic]}</code>
              </pre>
              <button 
                className="start-button"
                onClick={handleStartLearning}
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
        <LearningPathways />
      </div>
    </>
  );
}