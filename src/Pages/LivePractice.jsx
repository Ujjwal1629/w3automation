import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Play, Clock, Code, Trophy } from 'lucide-react';
import Navbar from '../Components/Navbar';

const LivePractice = () => {
  const navigate = useNavigate();
  const themeContext = useTheme();
  const isDarkMode = themeContext?.isDarkMode || false;
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  // Placeholder challenge data
  const challenges = {
    easy: [
      { id: 1, title: "Two Sum", description: "Find two numbers that add up to a target", timeLimit: "15 min", solved: 234567 },
      { id: 2, title: "Palindrome Number", description: "Check if a number reads the same backward", timeLimit: "10 min", solved: 189234 },
      { id: 3, title: "FizzBuzz", description: "Classic programming challenge", timeLimit: "10 min", solved: 298456 },
      { id: 4, title: "Reverse String", description: "Reverse a given string", timeLimit: "5 min", solved: 345678 },
      { id: 5, title: "Valid Parentheses", description: "Check if brackets are balanced", timeLimit: "15 min", solved: 167890 }
    ],
    medium: [
      { id: 6, title: "Longest Substring", description: "Find longest substring without repeating characters", timeLimit: "30 min", solved: 98765 },
      { id: 7, title: "Binary Tree Level Order", description: "Traverse tree level by level", timeLimit: "25 min", solved: 87654 },
      { id: 8, title: "Rotate Image", description: "Rotate a matrix 90 degrees", timeLimit: "30 min", solved: 76543 },
      { id: 9, title: "Group Anagrams", description: "Group strings that are anagrams", timeLimit: "25 min", solved: 92345 },
      { id: 10, title: "Search in Rotated Array", description: "Search in a sorted rotated array", timeLimit: "30 min", solved: 65432 }
    ],
    hard: [
      { id: 11, title: "Median of Two Sorted Arrays", description: "Find median of two sorted arrays", timeLimit: "45 min", solved: 34567 },
      { id: 12, title: "Regular Expression Matching", description: "Implement regex matching with . and *", timeLimit: "60 min", solved: 23456 },
      { id: 13, title: "Merge K Sorted Lists", description: "Merge k sorted linked lists", timeLimit: "45 min", solved: 28901 },
      { id: 14, title: "Trapping Rain Water", description: "Calculate water that can be trapped", timeLimit: "40 min", solved: 31234 },
      { id: 15, title: "N-Queens Problem", description: "Place N queens on NxN chessboard", timeLimit: "50 min", solved: 19876 }
    ]
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return '#4ade80';
      case 'medium': return '#fbbf24';
      case 'hard': return '#f87171';
      default: return '#8c52ff';
    }
  };

  const handleStartChallenge = (challenge, difficulty) => {
    // Navigate to practice environment with challenge details
    navigate(`/live-practice/${challenge.id}`);
  };

  const ChallengeCard = ({ challenge, difficulty }) => (
    <div
      style={{
        backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.5)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '1rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(140, 82, 255, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: isDarkMode ? '#fff' : '#2d3748',
            marginBottom: '0.5rem'
          }}>
            {challenge.title}
          </h3>
          <p style={{
            fontSize: '0.9rem',
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
            marginBottom: '1rem'
          }}>
            {challenge.description}
          </p>
        </div>
        <div style={{
          backgroundColor: getDifficultyColor(difficulty),
          color: '#fff',
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: '600',
          textTransform: 'capitalize'
        }}>
          {difficulty}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Clock size={16} style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)' }} />
          <span style={{
            fontSize: '0.85rem',
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
          }}>
            {challenge.timeLimit}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Trophy size={16} style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)' }} />
          <span style={{
            fontSize: '0.85rem',
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
          }}>
            {challenge.solved.toLocaleString()} solved
          </span>
        </div>
      </div>

      <button
        onClick={() => handleStartChallenge(challenge, difficulty)}
        style={{
          background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          border: 'none',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '0.95rem',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          width: '100%',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(140, 82, 255, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <Play size={18} />
        Start Challenge
      </button>
    </div>
  );

  const DifficultySection = ({ title, difficulty, challengeList }) => (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1.5rem',
        gap: '1rem'
      }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: '700',
          color: isDarkMode ? '#fff' : '#2d3748',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Code size={24} style={{ color: getDifficultyColor(difficulty) }} />
          {title}
        </h2>
        <div style={{
          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          fontSize: '0.85rem',
          color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
        }}>
          {challengeList.length} challenges
        </div>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '1.5rem'
      }}>
        {challengeList.map(challenge => (
          <ChallengeCard key={challenge.id} challenge={challenge} difficulty={difficulty} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div style={{
        minHeight: '100vh',
        backgroundColor: isDarkMode ? '#1a202c' : '#f7fafc',
        paddingTop: '120px',
        paddingBottom: '3rem'
      }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1.5rem 1.5rem'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            Live Practice Challenges
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Sharpen your coding skills with real-time challenges. Choose your difficulty level and start solving!
          </p>
        </div>

        {/* Difficulty Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {['all', 'easy', 'medium', 'hard'].map(level => (
            <button
              key={level}
              onClick={() => setSelectedDifficulty(level)}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '50px',
                border: selectedDifficulty === level 
                  ? 'none' 
                  : isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
                background: selectedDifficulty === level 
                  ? 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)'
                  : isDarkMode ? 'rgba(45, 55, 72, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                color: selectedDifficulty === level ? '#fff' : (isDarkMode ? '#fff' : '#2d3748'),
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize',
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => {
                if (selectedDifficulty !== level) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {level === 'all' ? 'All Levels' : level}
            </button>
          ))}
        </div>

        {/* Challenge Sections */}
        {(selectedDifficulty === 'all' || selectedDifficulty === 'easy') && (
          <DifficultySection 
            title="Easy Challenges" 
            difficulty="easy" 
            challengeList={challenges.easy} 
          />
        )}
        
        {(selectedDifficulty === 'all' || selectedDifficulty === 'medium') && (
          <DifficultySection 
            title="Medium Challenges" 
            difficulty="medium" 
            challengeList={challenges.medium} 
          />
        )}
        
        {(selectedDifficulty === 'all' || selectedDifficulty === 'hard') && (
          <DifficultySection 
            title="Hard Challenges" 
            difficulty="hard" 
            challengeList={challenges.hard} 
          />
        )}
      </div>
    </div>
    </>
  );
};

export default LivePractice;