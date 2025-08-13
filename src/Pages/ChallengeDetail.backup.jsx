import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, Play, Code, Check, ChevronDown, X, CheckCircle, XCircle, Star } from 'lucide-react';
import { challengeApi } from '../services/challengeApi';
import { userService } from '../services/userService';
import { getProblemById } from '../data/problemsData';
import Editor from '@monaco-editor/react';
import Navbar from '../Components/Navbar';

const ChallengeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const themeContext = useTheme();
  const isDarkMode = themeContext?.isDarkMode || false;
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState([]);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [progressResult, setProgressResult] = useState(null);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  
  // Get challenge data from the centralized problems data file
  const challenge = useMemo(() => getProblemById(id), [id]);

  useEffect(() => {
    // Initialize/reset with starter code when challenge id or language changes
    setCode(challenge.starterCode[language]);
  }, [challenge, language]);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return '#4ade80';
      case 'medium': return '#fbbf24';
      case 'hard': return '#f87171';
      default: return '#8c52ff';
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmissionResult(null);
    setProgressResult(null);

    try {
      // Submit the solution
      const result = await challengeApi.submitSolution(id, code, language);
      setSubmissionResult(result);

      // If submission is successful and tests pass, save progress
      if (result.success && result.results) {
        const testsPassedRatio = result.results.testsPassed / result.results.totalTests;
        
        // Consider challenge "solved" if 80% or more tests pass
        if (testsPassedRatio >= 0.8) {
          // Check if user is authenticated
          const isAuthenticated = userService.isAuthenticated();
          
          if (!isAuthenticated) {
            // Show authentication prompt
            setSubmissionResult({
              ...result,
              isSolved: true,
              requiresAuth: true,
              message: 'Great job! You solved this challenge successfully.'
            });
            setShowAuthPrompt(true);
          } else {
            // Save progress for authenticated users
            try {
              const userId = userService.getCurrentUserId();
              const difficulty = challenge.difficulty || 'easy'; // Get difficulty from challenge data
              console.log('🚀 Attempting to save progress:', { userId, challengeId: id, status: 'solved', difficulty });
              const progressData = await challengeApi.saveProgress(userId, id, 'solved', difficulty);
              console.log('📊 Progress saved successfully:', progressData);
              setProgressResult(progressData);
              
              // Update submission result to include progress info
              setSubmissionResult({
                ...result,
                isSolved: true,
                progressSaved: true,
                pointsEarned: progressData.pointsEarned
              });
              
              // Notify leaderboard to refresh
              challengeApi.notifyLeaderboardUpdate();
            } catch (progressError) {
              console.error('Failed to save progress:', progressError);
              setSubmissionResult({
                ...result,
                isSolved: true,
                progressSaved: false,
                progressError: 'Failed to save progress, but challenge was solved!'
              });
            }
          }
        } else {
          // Challenge attempted but not fully solved
          const isAuthenticated = userService.isAuthenticated();
          
          if (isAuthenticated) {
            try {
              const userId = userService.getCurrentUserId();
              const difficulty = challenge.difficulty || 'easy';
              await challengeApi.saveProgress(userId, id, 'attempted', difficulty);
            } catch (progressError) {
              console.error('Failed to save attempt progress:', progressError);
            }
          }
        }
      }

      setShowResults(true);
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmissionResult({
        success: false,
        message: 'Failed to submit solution. Please try again.',
        error: error.message
      });
      setShowResults(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setTestResults([]);

    try {
      const result = await challengeApi.runTests(id, code, language);
      setTestResults(result.results || []);
    } catch (error) {
      console.error('Test run failed:', error);
      setTestResults([{
        testCase: 'Error',
        status: 'failed',
        input: 'N/A',
        expected: 'N/A',
        actual: 'Error: Failed to run tests',
        executionTime: '0ms'
      }]);
    } finally {
      setIsRunning(false);
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
    setCode(challenge.starterCode[lang]);
  };

  return (
    <>
      <Navbar />
      <div style={{
        minHeight: '100vh',
        backgroundColor: isDarkMode ? '#1a202c' : '#f7fafc',
        paddingTop: '100px',
      }}>
      {/* Header */}
      <div style={{
        backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.5)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        padding: '1rem 2rem',
        position: 'sticky',
        top: '80px',
        zIndex: 100,
        marginTop: '3rem'
      }}>
        <div style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => navigate('/live-practice')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'none',
                border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
                color: isDarkMode ? '#fff' : '#2d3748',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <ArrowLeft size={16} />
              Back
            </button>
            
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: isDarkMode ? '#fff' : '#2d3748',
              margin: 0
            }}>
              {challenge.title}
            </h2>
            
            <div style={{
              backgroundColor: getDifficultyColor(challenge.difficulty),
              color: '#fff',
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '600',
              textTransform: 'capitalize'
            }}>
              {challenge.difficulty}
            </div>
          </div>

          {/* Language Selector */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
                color: isDarkMode ? '#fff' : '#2d3748',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              <Code size={16} />
              {language === 'javascript' ? 'JavaScript' : 'Java'}
              <ChevronDown size={16} />
            </button>
            
            {showLanguageDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '0.5rem',
                backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                zIndex: 1000
              }}>
                <button
                  onClick={() => handleLanguageChange('javascript')}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.75rem 1.5rem',
                    background: language === 'javascript' ? 'rgba(140, 82, 255, 0.1)' : 'none',
                    border: 'none',
                    color: isDarkMode ? '#fff' : '#2d3748',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    textAlign: 'left',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (language !== 'javascript') {
                      e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (language !== 'javascript') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  JavaScript
                </button>
                <button
                  onClick={() => handleLanguageChange('java')}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.75rem 1.5rem',
                    background: language === 'java' ? 'rgba(140, 82, 255, 0.1)' : 'none',
                    border: 'none',
                    color: isDarkMode ? '#fff' : '#2d3748',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    textAlign: 'left',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (language !== 'java') {
                      e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (language !== 'java') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Java
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        height: 'calc(100vh - 180px)',
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        {/* Left Panel - Problem Description */}
        <div style={{
          width: '40%',
          padding: '2rem',
          overflowY: 'auto',
          borderRight: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: isDarkMode ? '#fff' : '#2d3748',
              marginBottom: '1rem'
            }}>
              Description
            </h3>
            <div style={{
              color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
              lineHeight: '1.8',
              whiteSpace: 'pre-wrap'
            }}>
              {challenge.description}
            </div>
          </div>

          {/* Examples */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: isDarkMode ? '#fff' : '#2d3748',
              marginBottom: '1rem'
            }}>
              Examples
            </h3>
            {challenge.examples.map((example, index) => (
              <div key={index} style={{
                backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.3)' : 'rgba(0, 0, 0, 0.05)',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: isDarkMode ? '#8c52ff' : '#6b46c1' }}>
                    Example {index + 1}:
                  </strong>
                </div>
                <div style={{ 
                  fontFamily: 'monospace', 
                  fontSize: '0.9rem',
                  backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)' }}>
                      Input:
                    </strong> <span style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)' }}>{example.input}</span>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)' }}>
                      Output:
                    </strong> <span style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)' }}>{example.output}</span>
                  </div>
                </div>
                {example.explanation && (
                  <div style={{
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
                    fontSize: '0.9rem',
                    fontStyle: 'italic'
                  }}>
                    <strong>Explanation:</strong> {example.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Constraints */}
          {challenge.constraints && (
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: isDarkMode ? '#fff' : '#2d3748',
                marginBottom: '1rem'
              }}>
                Constraints
              </h3>
              <ul style={{
                paddingLeft: '1.5rem',
                color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
                lineHeight: '1.8'
              }}>
                {challenge.constraints.map((constraint, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>
                    <code style={{
                      backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.3)' : 'rgba(0, 0, 0, 0.05)',
                      padding: '0.125rem 0.375rem',
                      borderRadius: '4px',
                      fontSize: '0.9rem'
                    }}>
                      {constraint}
                    </code>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Panel - Code Editor */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: isDarkMode ? '#1e293b' : '#ffffff'
        }}>
          {/* Code Editor */}
          <div style={{ 
            flex: 1, 
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '400px',
            border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff'
          }}>
            {/* Editor Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 1rem',
              backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)',
              borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
              fontSize: '0.875rem',
              color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code size={16} />
                Code Editor ({language === 'javascript' ? 'JavaScript' : 'Java'})
              </div>
              <div style={{ fontSize: '0.8rem' }}>
                Press Tab for indentation • Ctrl+A to select all
              </div>
            </div>

            {/* Code Editor Container */}
            <div style={{ 
              flex: 1, 
              position: 'relative',
              display: 'flex'
            }}>
              {/* Line Numbers */}
              <div style={{
                width: '50px',
                backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)',
                borderRight: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                padding: '1rem 0.5rem',
                fontSize: '12px',
                color: isDarkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
                userSelect: 'none',
                fontFamily: "'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace",
                lineHeight: '1.6',
                overflowY: 'hidden',
                flexShrink: 0
              }}>
                {code.split('\n').map((_, index) => (
                  <div key={index} style={{ height: '22.4px' }}>
                    {index + 1}
                  </div>
                ))}
              </div>

              {/* Monaco Editor */}
              <Editor
                height="400px"
                language={language === 'javascript' ? 'javascript' : 'java'}
                value={code}
                onChange={(value) => setCode(value || '')}
                theme={isDarkMode ? 'vs-dark' : 'light'}
                options={{
                  fontSize: 14,
                  fontFamily: "'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace",
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 2,
                  insertSpaces: true,
                  wordWrap: 'on',
                  lineNumbers: 'on',
                  folding: true,
                  bracketMatching: 'always',
                  autoClosingBrackets: 'always',
                  autoClosingQuotes: 'always',
                  autoIndent: 'full',
                  formatOnPaste: true,
                  formatOnType: true,
                  suggestOnTriggerCharacters: true,
                  acceptSuggestionOnEnter: 'on',
                  quickSuggestions: true,
                  parameterHints: { enabled: true },
                  hover: { enabled: true },
                  contextmenu: true,
                  selectOnLineNumbers: true,
                  cursorStyle: 'line',
                  cursorBlinking: 'blink',
                  renderLineHighlight: 'line',
                  scrollbar: {
                    vertical: 'auto',
                    horizontal: 'auto',
                    verticalScrollbarSize: 12,
                    horizontalScrollbarSize: 12,
                  }
                }}
                loading="Loading editor..."
              />
            </div>
          </div>

          {/* Test Results */}
          {testResults.length > 0 && (
            <div style={{
              backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.5)' : 'rgba(255, 255, 255, 0.9)',
              borderTop: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
              padding: '1rem',
              maxHeight: '200px',
              overflowY: 'auto'
            }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: isDarkMode ? '#fff' : '#2d3748',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Code size={16} />
                Test Results
              </h4>
              {testResults.map((result, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  backgroundColor: result.status === 'passed' 
                    ? 'rgba(74, 222, 128, 0.1)' 
                    : 'rgba(248, 113, 113, 0.1)',
                  borderLeft: `4px solid ${result.status === 'passed' ? '#4ade80' : '#f87171'}`,
                  borderRadius: '6px',
                  marginBottom: '0.5rem'
                }}>
                  {result.status === 'passed' ? (
                    <CheckCircle size={16} color="#4ade80" />
                  ) : (
                    <XCircle size={16} color="#f87171" />
                  )}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      color: isDarkMode ? '#fff' : '#2d3748',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      marginBottom: '0.25rem'
                    }}>
                      Test Case {result.testCase}: {result.status === 'passed' ? 'Passed' : 'Failed'}
                      <span style={{ 
                        color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
                        fontSize: '0.8rem',
                        marginLeft: '0.5rem'
                      }}>
                        ({result.executionTime})
                      </span>
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
                      fontFamily: 'monospace'
                    }}>
                      Input: {result.input}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Submit Button */}
          <div style={{
            padding: '1.5rem',
            backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.5)' : 'rgba(255, 255, 255, 0.9)',
            borderTop: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'flex-end'
          }}>
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'transparent',
                border: '1.5px solid #8c52ff',
                color: isRunning ? '#999' : '#8c52ff',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: isRunning ? 'not-allowed' : 'pointer',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                opacity: isRunning ? 0.6 : 1
              }}
              onMouseEnter={(e) => {
                if (!isRunning) {
                  e.currentTarget.style.backgroundColor = 'rgba(140, 82, 255, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isRunning) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <Play size={18} />
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: isSubmitting 
                  ? 'linear-gradient(90deg, #a0a0a0 0%, #808080 100%)'
                  : 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
                color: '#fff',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                opacity: isSubmitting ? 0.7 : 1
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(140, 82, 255, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Check size={18} />
              {isSubmitting ? 'Submitting...' : 'Submit Solution'}
            </button>
          </div>
        </div>
      </div>

      {/* Submission Results Modal */}
      {showResults && submissionResult && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}>
          <div style={{
            backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '80vh',
            overflowY: 'auto',
            border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: isDarkMode ? '#fff' : '#2d3748',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                {submissionResult.success ? (
                  <>
                    <CheckCircle size={24} color="#4ade80" />
                    {submissionResult.isSolved ? 'Challenge Solved! 🎉' : 'Submission Successful!'}
                  </>
                ) : (
                  <>
                    <XCircle size={24} color="#f87171" />
                    Submission Failed
                  </>
                )}
              </h3>
              <button
                onClick={() => setShowResults(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{
              backgroundColor: submissionResult.success 
                ? 'rgba(74, 222, 128, 0.1)' 
                : 'rgba(248, 113, 113, 0.1)',
              borderLeft: `4px solid ${submissionResult.success ? '#4ade80' : '#f87171'}`,
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}>
              <p style={{
                color: isDarkMode ? '#fff' : '#2d3748',
                margin: 0,
                fontSize: '1rem',
                marginBottom: submissionResult.isSolved ? '0.75rem' : 0
              }}>
                {submissionResult.message}
              </p>
              
              {/* Progress saved notification */}
              {submissionResult.isSolved && submissionResult.progressSaved && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                }}>
                  <Star size={16} color="#FFD700" />
                  Progress saved! You earned {submissionResult.pointsEarned || 0} points.
                </div>
              )}

              {/* Progress error notification */}
              {submissionResult.progressError && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                }}>
                  <XCircle size={16} color="#f87171" />
                  {submissionResult.progressError}
                </div>
              )}

              {/* Authentication required notification */}
              {submissionResult.requiresAuth && (
                <div style={{
                  backgroundColor: isDarkMode ? 'rgba(140, 82, 255, 0.1)' : 'rgba(140, 82, 255, 0.05)',
                  borderLeft: '4px solid #8c52ff',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginTop: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
                    marginBottom: '0.75rem'
                  }}>
                    <Star size={16} color="#8c52ff" />
                    Log in to save your progress and earn points!
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '0.75rem'
                  }}>
                    <button
                      onClick={() => navigate('/login')}
                      style={{
                        background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
                        color: '#fff',
                        padding: '0.5rem 1.25rem',
                        borderRadius: '6px',
                        border: 'none',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      Log In
                    </button>
                    <button
                      onClick={() => navigate('/register')}
                      style={{
                        backgroundColor: 'transparent',
                        border: '1.5px solid #8c52ff',
                        color: '#8c52ff',
                        padding: '0.5rem 1.25rem',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(140, 82, 255, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              )}
            </div>

            {submissionResult.success && submissionResult.results && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: isDarkMode ? '#fff' : '#2d3748',
                  marginBottom: '1rem'
                }}>
                  Test Results
                </h4>
                
                {/* Test Results Summary */}
                <div style={{
                  backgroundColor: isDarkMode ? 'rgba(74, 222, 128, 0.1)' : 'rgba(74, 222, 128, 0.05)',
                  border: `2px solid ${submissionResult.results.testsPassed === submissionResult.results.totalTests ? '#4ade80' : '#fbbf24'}`,
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.5rem'
                  }}>
                    {submissionResult.results.testsPassed === submissionResult.results.totalTests ? (
                      <CheckCircle size={32} color="#4ade80" />
                    ) : (
                      <XCircle size={32} color="#fbbf24" />
                    )}
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '800',
                      color: submissionResult.results.testsPassed === submissionResult.results.totalTests ? '#4ade80' : '#fbbf24'
                    }}>
                      {submissionResult.results.testsPassed}/{submissionResult.results.totalTests}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: isDarkMode ? '#fff' : '#2d3748',
                    marginBottom: '0.5rem'
                  }}>
                    {submissionResult.results.testsPassed === submissionResult.results.totalTests 
                      ? 'All Tests Passed! 🎉' 
                      : `${submissionResult.results.testsPassed} of ${submissionResult.results.totalTests} Tests Passed`}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
                  }}>
                    {submissionResult.results.testsPassed === submissionResult.results.totalTests 
                      ? 'Great job! Your solution is working correctly.'
                      : 'Keep trying! You\'re on the right track.'}
                  </div>
                </div>

                {/* Performance Info (Optional, less prominent) */}
                {submissionResult.results.executionTime && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)',
                    backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.03)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px'
                  }}>
                    ⚡ Runtime: {submissionResult.results.executionTime}
                  </div>
                )}
              </div>
            )}

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              {submissionResult.success && submissionResult.results && submissionResult.results.testsPassed === submissionResult.results.totalTests ? (
                // All tests passed - show different options
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => navigate('/live-practice')}
                    style={{
                      backgroundColor: 'transparent',
                      border: '1.5px solid #8c52ff',
                      color: '#8c52ff',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(140, 82, 255, 0.1)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    Next Challenge
                  </button>
                  <button
                    onClick={() => setShowResults(false)}
                    style={{
                      background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
                      color: '#fff',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      border: 'none',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease'
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
                    Keep Practicing
                  </button>
                </div>
              ) : (
                // Some tests failed or error - single button to continue
                <button
                  onClick={() => setShowResults(false)}
                  style={{
                    background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
                    color: '#fff',
                    padding: '0.75rem 2rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease'
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
                  Try Again
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ChallengeDetail;