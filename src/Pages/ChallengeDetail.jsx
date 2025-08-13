import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, Play, Code, Check, ChevronDown, X, CheckCircle, XCircle, Star, Clock, MemoryStick } from 'lucide-react';
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

  // State management
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState([]);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [progressResult, setProgressResult] = useState(null);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  // Get challenge data
  const challenge = useMemo(() => getProblemById(id), [id]);

  useEffect(() => {
    setCode(challenge.starterCode[language]);
  }, [challenge, language]);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return '#22c55e';
      case 'medium': return '#f59e0b';
      case 'hard': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const handleRunCode = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setTestResults([]);
    
    try {
      const result = await challengeApi.runTests(id, code, language);
      setTestResults(result.results);
    } catch (error) {
      console.error('Error running code:', error);
      setTestResults([
        { testCase: 1, status: 'failed', input: 'Error', expected: 'N/A', actual: 'Failed to run tests', executionTime: '0ms' }
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      const result = await challengeApi.submitSolution(id, code, language);
      setSubmissionResult(result);
      setShowResults(true);
      
      if (result.success && result.results.testsPassed === result.results.totalTests) {
        // Save progress
        const user = userService.getCurrentUser();
        if (user) {
          await challengeApi.saveProgress(user.id, id, 'solved', challenge.difficulty);
        }
      }
    } catch (error) {
      console.error('Error submitting:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: isDarkMode ? '#0f172a' : '#f8fafc',
      color: isDarkMode ? '#f1f5f9' : '#0f172a'
    }}>
      <Navbar />
      
      {/* Modern Container */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem 1rem',
        height: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Header Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
          flexShrink: 0,
          marginTop: '150px'
        }}>
          <button
            onClick={() => navigate('/live-practice')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              backgroundColor: isDarkMode ? 'rgba(71, 85, 105, 0.3)' : 'rgba(248, 250, 252, 0.8)',
              border: 'none',
              borderRadius: '12px',
              color: isDarkMode ? '#cbd5e1' : '#475569',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            <ArrowLeft size={18} />
            Back to Problems
          </button>
          
          <div style={{
            backgroundColor: getDifficultyColor(challenge.difficulty),
            color: '#ffffff',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: '600',
            textTransform: 'capitalize'
          }}>
            {challenge.difficulty}
          </div>
        </div>

        {/* Main Content - Split Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          flex: 1,
          overflow: 'visible',
          minHeight: 0,
          alignItems: 'start',
        }}>
          
          {/* Left Panel - Problem Description */}
          <div style={{
            backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.8)',
            borderRadius: '16px',
            padding: '2rem',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${isDarkMode ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.8)'}`,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            
            {/* Problem Title */}
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: isDarkMode ? '#f1f5f9' : '#1e293b'
            }}>
              {id}. {challenge.title}
            </h1>

            {/* Scrollable Content */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              paddingRight: '0.5rem',
              // Custom scrollbar
              scrollbarWidth: 'thin',
              scrollbarColor: `${isDarkMode ? '#475569' : '#cbd5e1'} transparent`
            }}>
              
              {/* Description */}
              <div style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                marginBottom: '2rem',
                color: isDarkMode ? '#cbd5e1' : '#475569',
                whiteSpace: 'pre-line'
              }}>
                {challenge.description}
              </div>

              {/* Examples */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: isDarkMode ? '#f1f5f9' : '#1e293b'
                }}>
                  Examples:
                </h3>
                {challenge.examples.map((example, index) => (
                  <div key={index} style={{
                    backgroundColor: isDarkMode ? 'rgba(51, 65, 85, 0.4)' : 'rgba(248, 250, 252, 0.6)',
                    border: `1px solid ${isDarkMode ? 'rgba(71, 85, 105, 0.4)' : 'rgba(226, 232, 240, 0.8)'}`,
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '1rem',
                    fontFamily: "'Fira Code', 'Consolas', monospace"
                  }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <strong>Input:</strong> {example.input}
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <strong>Output:</strong> {example.output}
                    </div>
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: isDarkMode ? '#94a3b8' : '#64748b',
                      fontStyle: 'italic'
                    }}>
                      {example.explanation}
                    </div>
                  </div>
                ))}
              </div>

              {/* Constraints */}
              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: isDarkMode ? '#f1f5f9' : '#1e293b'
                }}>
                  Constraints:
                </h3>
                <ul style={{
                  fontSize: '0.95rem',
                  color: isDarkMode ? '#cbd5e1' : '#475569',
                  paddingLeft: '1.5rem'
                }}>
                  {challenge.constraints.map((constraint, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                      {constraint}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Panel - Code Editor */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            overflow: 'visible',
            minHeight: 0
          }}>
            
            {/* Editor Header */}
            <div style={{
              backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.8)',
              borderRadius: '16px',
              padding: '1rem 1.5rem',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${isDarkMode ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.8)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0
            }}>
              
              {/* Language Selector */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{
                  backgroundColor: isDarkMode ? 'rgba(51, 65, 85, 0.6)' : 'rgba(248, 250, 252, 0.8)',
                  color: isDarkMode ? '#f1f5f9' : '#1e293b',
                  border: `1px solid ${isDarkMode ? 'rgba(71, 85, 105, 0.4)' : 'rgba(226, 232, 240, 0.8)'}`,
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
              </select>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: isRunning ? '#6b7280' : '#3b82f6',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    fontWeight: '600',
                    cursor: isRunning ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Play size={16} />
                  {isRunning ? 'Running...' : 'Run Code'}
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: isSubmitting ? '#6b7280' : '#10b981',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Check size={16} />
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>

            {/* Code Editor */}
            <div style={{
              backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.8)',
              borderRadius: '16px',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${isDarkMode ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.8)'}`,
              overflow: 'hidden',
              height: testResults.length > 0 ? '350px' : '500px',
              minHeight: '300px'
            }}>
              <Editor
                height="100%"
                language={language === 'javascript' ? 'javascript' : 'java'}
                value={code}
                onChange={(value) => setCode(value || '')}
                theme={isDarkMode ? 'vs-dark' : 'light'}
                options={{
                  fontSize: 14,
                  fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', monospace",
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
                  quickSuggestions: true,
                  parameterHints: { enabled: true },
                  hover: { enabled: true },
                  contextmenu: true,
                  selectOnLineNumbers: true,
                  cursorBlinking: 'smooth',
                  renderLineHighlight: 'gutter',
                  scrollbar: {
                    vertical: 'auto',
                    horizontal: 'auto',
                    useShadows: true,
                    verticalScrollbarSize: 10,
                    horizontalScrollbarSize: 10,
                  }
                }}
                loading={
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '200px',
                    color: isDarkMode ? '#cbd5e1' : '#64748b'
                  }}>
                    Loading Monaco Editor...
                  </div>
                }
              />
            </div>

            {/* Test Results */}
            {testResults.length > 0 && (
              <div style={{
                backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.8)',
                borderRadius: '16px',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${isDarkMode ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.8)'}`,
                maxHeight: '400px',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                marginTop: '1rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}>
                
                {/* Results Header */}
                <div style={{
                  padding: '1rem 1.5rem',
                  borderBottom: `1px solid ${isDarkMode ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.8)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: isDarkMode ? 'rgba(51, 65, 85, 0.4)' : 'rgba(248, 250, 252, 0.6)',
                  flexShrink: 0
                }}>
                  <Code size={18} />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>
                    Test Results ({testResults.filter(r => r.status === 'passed').length}/{testResults.length} passed)
                  </span>
                </div>

                {/* Scrollable Results */}
                <div style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '1rem',
                  scrollbarWidth: 'thin',
                  scrollbarColor: `${isDarkMode ? '#475569' : '#cbd5e1'} transparent`
                }}>
                  {testResults.map((result, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1rem',
                      marginBottom: '0.75rem',
                      backgroundColor: result.status === 'passed' 
                        ? 'rgba(34, 197, 94, 0.1)' 
                        : 'rgba(239, 68, 68, 0.1)',
                      border: `2px solid ${result.status === 'passed' ? '#22c55e' : '#ef4444'}`,
                      borderRadius: '12px',
                      fontSize: '0.9rem'
                    }}>
                      
                      {/* Status Icon */}
                      <div style={{
                        flexShrink: 0,
                        marginTop: '0.1rem'
                      }}>
                        {result.status === 'passed' ? 
                          <CheckCircle size={20} color="#22c55e" /> : 
                          <XCircle size={20} color="#ef4444" />
                        }
                      </div>

                      {/* Test Details */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ 
                          fontWeight: '600',
                          marginBottom: '0.5rem',
                          color: result.status === 'passed' ? '#22c55e' : '#ef4444'
                        }}>
                          Test Case {result.testCase}: {result.status.toUpperCase()}
                        </div>
                        
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr',
                          gap: '0.5rem',
                          fontFamily: "'Fira Code', monospace",
                          fontSize: '0.85rem'
                        }}>
                          <div><strong>Input:</strong> {result.input}</div>
                          <div><strong>Expected:</strong> {result.expected}</div>
                          <div><strong>Actual:</strong> {result.actual}</div>
                          
                          <div style={{
                            display: 'flex',
                            gap: '1rem',
                            marginTop: '0.5rem',
                            fontSize: '0.8rem',
                            color: isDarkMode ? '#94a3b8' : '#64748b'
                          }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                              <Clock size={14} />
                              {result.executionTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(8px)'
          }}>
            <div style={{
              backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
              borderRadius: '20px',
              padding: '2rem',
              maxWidth: '500px',
              width: '90%',
              maxHeight: '80vh',
              overflowY: 'auto',
              border: `1px solid ${isDarkMode ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.8)'}`
            }}>
              
              {/* Modal Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: submissionResult.results.testsPassed === submissionResult.results.totalTests ? '#22c55e' : '#f59e0b'
                }}>
                  {submissionResult.results.testsPassed === submissionResult.results.totalTests ? 
                    '🎉 Accepted!' : '❌ Wrong Answer'
                  }
                </h3>
                
                <button
                  onClick={() => setShowResults(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: isDarkMode ? '#94a3b8' : '#64748b',
                    cursor: 'pointer'
                  }}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Results Summary */}
              <div style={{
                backgroundColor: submissionResult.results.testsPassed === submissionResult.results.totalTests ? 
                  'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                border: `2px solid ${submissionResult.results.testsPassed === submissionResult.results.totalTests ? '#22c55e' : '#f59e0b'}`,
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem'
                }}>
                  {submissionResult.results.testsPassed}/{submissionResult.results.totalTests}
                </div>
                <div style={{ fontSize: '1rem', marginBottom: '1rem' }}>
                  test cases passed
                </div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  fontSize: '0.9rem',
                  color: isDarkMode ? '#cbd5e1' : '#475569'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={16} />
                    {submissionResult.results.executionTime}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MemoryStick size={16} />
                    {submissionResult.results.memoryUsage}
                  </div>
                </div>
              </div>

              {/* Success Message */}
              {submissionResult.results.testsPassed === submissionResult.results.totalTests && (
                <div style={{
                  textAlign: 'center',
                  padding: '1rem',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  borderRadius: '12px',
                  marginBottom: '1rem'
                }}>
                  <Star size={24} color="#fbbf24" style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontWeight: '600', color: '#22c55e' }}>
                    Great job! Your solution is correct.
                  </div>
                </div>
              )}
              
              <button
                onClick={() => setShowResults(false)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${isDarkMode ? 'rgba(51, 65, 85, 0.3)' : 'rgba(226, 232, 240, 0.3)'};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? 'rgba(71, 85, 105, 0.6)' : 'rgba(148, 163, 184, 0.6)'};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${isDarkMode ? 'rgba(71, 85, 105, 0.8)' : 'rgba(148, 163, 184, 0.8)'};
        }
      `}</style>
    </div>
  );
};

export default ChallengeDetail;