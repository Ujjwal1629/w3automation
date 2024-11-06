import React, { useState } from 'react';
import { Book, CheckCircle, Star, Trophy, Clock, Users, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const styles = `
  .learning-pathways {
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%);
  }

  .pathways-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    color: #1a1a1a;
  }

  .section-title h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .section-title p {
    font-size: 1.1rem;
    color: #666;
  }

  .frameworks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .framework-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .framework-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  .framework-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
  }

  .framework-card.selenium::before { background: #43B02A; }
  .framework-card.playwright::before { background: #45ba4b; }
  .framework-card.api::before { background: #FF6B6B; }
  .framework-card.cypress::before { background: #24B9B9; }

  .framework-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .framework-icon {
    width: 48px;
    height: 48px;
    padding: 10px;
    border-radius: 12px;
    margin-right: 1rem;
  }

  .selenium .framework-icon { background: #e8f5e9; color: #43B02A; }
  .playwright .framework-icon { background: #e8f5e9; color: #45ba4b; }
  .api .framework-icon { background: #ffe8e8; color: #FF6B6B; }
  .cypress .framework-icon { background: #e3f8f8; color: #24B9B9; }

  .framework-title {
    margin: 0;
    font-size: 1.5rem;
    color: #1a1a1a;
  }

  .topics-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .topic-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    color: #4a4a4a;
  }

  .topic-item svg {
    margin-right: 0.75rem;
    width: 16px;
    height: 16px;
    color: #43B02A;
  }

  .start-learning-btn {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    background: transparent;
    border: 2px solid #1a1a1a;
    border-radius: 8px;
    color: #1a1a1a;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .start-learning-btn:hover {
    background: #1a1a1a;
    color: white;
  }

  .progress-bar {
    width: 100%;
    height: 6px;
    background: #eee;
    border-radius: 3px;
    margin-top: 1rem;
  }

  .progress-fill {
    height: 100%;
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  .selenium .progress-fill { background: #43B02A; }
  .playwright .progress-fill { background: #45ba4b; }
  .api .progress-fill { background: #FF6B6B; }
  .cypress .progress-fill { background: #24B9B9; }
`;

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

const LearningPathways = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleStartLearning = (frameworkId) => {
    const path = TOPICS_MAP[frameworkId]?.path;
    if (path) {
      window.scrollTo(0, 0);
      navigate(path);
    }
  };

  const frameworks = [
    {
      id: 'selenium',
      title: 'Selenium WebDriver',
      icon: <Activity />,
      completionRate: 85,
      topics: [
        'WebDriver Setup & Configuration',
        'Element Location Strategies',
        'Advanced Interactions & Waits',
        'Framework Design & Best Practices'
      ]
    },
    {
      id: 'playwright',
      title: 'Playwright',
      icon: <Book />,
      completionRate: 75,
      topics: [
        'Auto-waiting & Web-first Assertions',
        'Network Interception & Mocking',
        'Parallel Testing & Fixtures',
        'Visual Testing & Screenshots'
      ]
    },
    {
      id: 'api',
      title: 'API Testing',
      icon: <Activity />,
      completionRate: 90,
      topics: [
        'REST API Fundamentals',
        'Request/Response Validation',
        'Authentication & Authorization',
        'Performance Testing Basics'
      ]
    },
    {
      id: 'cypress',
      title: 'Cypress',
      icon: <Book />,
      completionRate: 80,
      topics: [
        'Modern Web Testing Approach',
        'Real-time Test Execution',
        'Network Stubbing & Spying',
        'Custom Commands & Plugins'
      ]
    }
  ];

  return (
    <>
      <style>{styles}</style>
      <section className="learning-pathways">
        <div className="pathways-container">
          <div className="section-title">
            <h2>Choose Your Learning Path</h2>
            <p>Master test automation with our comprehensive, hands-on Tutorials</p>
          </div>
          
          <div className="frameworks-grid">
            {frameworks.map((framework) => (
              <div
                key={framework.id}
                className={`framework-card ${framework.id}`}
                onMouseEnter={() => setHoveredCard(framework.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="framework-header">
                  <div className="framework-icon">
                    {framework.icon}
                  </div>
                  <h3 className="framework-title">{framework.title}</h3>
                </div>

                <ul className="topics-list">
                  {framework.topics.map((topic, index) => (
                    <li key={index} className="topic-item">
                      <CheckCircle size={16} />
                      {topic}
                    </li>
                  ))}
                </ul>

                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: hoveredCard === framework.id ? 
                        `${framework.completionRate}%` : '0%'
                    }}
                  />
                </div>

                <button 
                  className="start-learning-btn"
                  onClick={() => handleStartLearning(framework.id)}
                >
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LearningPathways;