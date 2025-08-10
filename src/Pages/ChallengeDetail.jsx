import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, Play, Code, Check, ChevronDown, X, CheckCircle, XCircle, Star } from 'lucide-react';
import { challengeApi } from '../services/challengeApi';
import { userService } from '../services/userService';
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
  
  // Mock challenge data - in real app, fetch based on ID
  const challengeData = {
    1: { 
      title: "Two Sum", 
      difficulty: "easy",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
      examples: [
        { 
          input: "nums = [2,7,11,15], target = 9", 
          output: "[0,1]", 
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." 
        },
        { 
          input: "nums = [3,2,4], target = 6", 
          output: "[1,2]", 
          explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]." 
        },
        { 
          input: "nums = [3,3], target = 6", 
          output: "[0,1]", 
          explanation: "Because nums[0] + nums[1] == 6, we return [0, 1]." 
        }
      ],
      constraints: [
        "2 <= nums.length <= 10^4",
        "-10^9 <= nums[i] <= 10^9",
        "-10^9 <= target <= 10^9",
        "Only one valid answer exists"
      ],
      starterCode: {
        javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Write your solution here
    
}`,
        java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`
      }
    },
    // Add more challenges as needed - using a simplified version for brevity
    default: {
      title: "Problem Title",
      difficulty: "medium",
      description: "This is a placeholder problem description. The actual problem will be loaded based on the challenge ID.",
      examples: [
        {
          input: "Example input",
          output: "Example output",
          explanation: "Example explanation"
        }
      ],
      constraints: [
        "Constraint 1",
        "Constraint 2"
      ],
      starterCode: {
        javascript: `// Write your JavaScript solution here
function solution() {
    
}`,
        java: `// Write your Java solution here
class Solution {
    public void solution() {
        
    }
}`
      }
    }
  };

  const challenge = useMemo(() => challengeData[id] || challengeData.default, [id]);

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
    if (!code.trim()) {
      alert('Please write some code before submitting!');
      return;
    }

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
          try {
            const userId = userService.getCurrentUserId();
            const progressData = await challengeApi.saveProgress(userId, id, 'solved');
            setProgressResult(progressData);
            
            // Update submission result to include progress info
            setSubmissionResult({
              ...result,
              isSolved: true,
              progressSaved: true,
              pointsEarned: progressData.pointsEarned
            });
          } catch (progressError) {
            console.error('Failed to save progress:', progressError);
            // Don't fail the submission if progress saving fails
          }
        } else {
          // Challenge attempted but not fully solved
          try {
            const userId = userService.getCurrentUserId();
            await challengeApi.saveProgress(userId, id, 'attempted');
          } catch (progressError) {
            console.error('Failed to save attempt progress:', progressError);
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
    if (!code.trim()) {
      alert('Please write some code before running tests!');
      return;
    }

    setIsRunning(true);
    setTestResults([]);

    try {
      const result = await challengeApi.runTests(id, code, language);
      setTestResults(result.results || []);
    } catch (error) {
      console.error('Test run failed:', error);
      setTestResults([]);
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

              {/* Textarea Editor */}
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={(e) => {
                  // Handle Tab key for indentation
                  if (e.key === 'Tab' && !e.shiftKey) {
                    e.preventDefault();
                    const start = e.target.selectionStart;
                    const end = e.target.selectionEnd;
                    const newValue = code.substring(0, start) + '  ' + code.substring(end);
                    setCode(newValue);
                    // Set cursor position after the inserted spaces
                    setTimeout(() => {
                      e.target.selectionStart = e.target.selectionEnd = start + 2;
                    }, 0);
                  }
                  
                  // Handle Shift+Tab for unindentation
                  if (e.key === 'Tab' && e.shiftKey) {
                    e.preventDefault();
                    const start = e.target.selectionStart;
                    const beforeCursor = code.substring(0, start);
                    const afterCursor = code.substring(start);
                    
                    // Remove up to 2 spaces at the beginning of the current line
                    const lines = beforeCursor.split('\n');
                    const currentLine = lines[lines.length - 1];
                    if (currentLine.startsWith('  ')) {
                      lines[lines.length - 1] = currentLine.substring(2);
                      const newValue = lines.join('\n') + afterCursor;
                      setCode(newValue);
                      setTimeout(() => {
                        e.target.selectionStart = e.target.selectionEnd = start - 2;
                      }, 0);
                    }
                  }

                  // Auto-close brackets
                  if (e.key === '{' || e.key === '(' || e.key === '[') {
                    const closeChar = e.key === '{' ? '}' : e.key === '(' ? ')' : ']';
                    setTimeout(() => {
                      const start = e.target.selectionStart;
                      const newValue = code.substring(0, start) + closeChar + code.substring(start);
                      setCode(newValue);
                      e.target.selectionStart = e.target.selectionEnd = start;
                    }, 0);
                  }
                }}
                placeholder={`Write your ${language === 'javascript' ? 'JavaScript' : 'Java'} solution here...`}
                style={{
                  flex: 1,
                  height: '100%',
                  minHeight: '350px',
                  padding: '1rem',
                  border: 'none',
                  outline: 'none',
                  resize: 'none',
                  backgroundColor: 'transparent',
                  color: isDarkMode ? '#fff' : '#2d3748',
                  fontFamily: "'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace",
                  fontSize: '14px',
                  lineHeight: '1.6',
                  tabSize: 2,
                  whiteSpace: 'pre',
                  overflowWrap: 'normal',
                  overflowX: 'auto'
                }}
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                data-testid="code-editor"
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
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    backgroundColor: isDarkMode ? 'rgba(74, 222, 128, 0.1)' : 'rgba(74, 222, 128, 0.05)',
                    padding: '1rem',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#4ade80',
                      marginBottom: '0.25rem'
                    }}>
                      {submissionResult.results.testsPassed}/{submissionResult.results.totalTests}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
                    }}>
                      Tests Passed
                    </div>
                  </div>
                  <div style={{
                    backgroundColor: isDarkMode ? 'rgba(140, 82, 255, 0.1)' : 'rgba(140, 82, 255, 0.05)',
                    padding: '1rem',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#8c52ff',
                      marginBottom: '0.25rem'
                    }}>
                      {submissionResult.results.executionTime}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
                    }}>
                      Execution Time
                    </div>
                  </div>
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
                  backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  fontFamily: 'monospace'
                }}>
                  Submission ID: {submissionResult.submissionId}<br />
                  Memory Usage: {submissionResult.results.memoryUsage}
                </div>
              </div>
            )}

            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '1rem'
            }}>
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
                Continue Coding
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ChallengeDetail;