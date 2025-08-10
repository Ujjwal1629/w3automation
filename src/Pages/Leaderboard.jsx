import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Trophy, Medal, Award, User, Crown, Star, TrendingUp, Calendar, Code, RefreshCw } from 'lucide-react';
import { challengeApi } from '../services/challengeApi';
import Navbar from '../Components/Navbar';

const Leaderboard = () => {
  const navigate = useNavigate();
  const themeContext = useTheme();
  const isDarkMode = themeContext?.isDarkMode || false;
  const [selectedTimeframe, setSelectedTimeframe] = useState('all-time');
  const [leaderboardData, setLeaderboardData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [nextUpdate, setNextUpdate] = useState(null);
  const [isRealData, setIsRealData] = useState(false);

  // Fetch leaderboard data from API
  const fetchLeaderboard = useCallback(async (timeframe) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await challengeApi.getLeaderboard(timeframe);
      if (response.success) {
        setLeaderboardData(prev => ({
          ...prev,
          [timeframe]: response.data
        }));
        setLastUpdated(response.lastUpdated);
        setIsRealData(response.isRealData || false);
      } else {
        throw new Error('Failed to fetch leaderboard data');
      }
    } catch (err) {
      console.error('Error fetching leaderboard:', err);
      setError('Failed to load leaderboard data');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch data on component mount and timeframe change
  useEffect(() => {
    fetchLeaderboard(selectedTimeframe);
  }, [selectedTimeframe, fetchLeaderboard]);

  // Auto-refresh functionality
  useEffect(() => {
    if (!autoRefresh) return;

    const REFRESH_INTERVAL = 10000; // 10 seconds
    
    const updateCountdown = () => {
      const now = Date.now();
      const nextRefreshTime = now + REFRESH_INTERVAL;
      setNextUpdate(nextRefreshTime);
      
      const countdownInterval = setInterval(() => {
        const timeLeft = Math.max(0, Math.ceil((nextRefreshTime - Date.now()) / 1000));
        if (timeLeft <= 0) {
          clearInterval(countdownInterval);
        }
      }, 1000);
      
      return countdownInterval;
    };

    const refreshInterval = setInterval(() => {
      if (!loading) { // Only refresh if not currently loading
        fetchLeaderboard(selectedTimeframe);
      }
    }, REFRESH_INTERVAL);

    // Start countdown
    const countdownInterval = updateCountdown();

    return () => {
      clearInterval(refreshInterval);
      clearInterval(countdownInterval);
    };
  }, [autoRefresh, selectedTimeframe, fetchLeaderboard, loading]);

  // Listen for leaderboard update events (real-time updates)
  useEffect(() => {
    const handleLeaderboardUpdate = () => {
      if (!loading) {
        fetchLeaderboard(selectedTimeframe);
      }
    };

    window.addEventListener('leaderboardUpdate', handleLeaderboardUpdate);
    
    return () => {
      window.removeEventListener('leaderboardUpdate', handleLeaderboardUpdate);
    };
  }, [fetchLeaderboard, selectedTimeframe, loading]);

  // Refresh leaderboard data
  const refreshLeaderboard = () => {
    fetchLeaderboard(selectedTimeframe);
  };

  // Legacy placeholder data for fallback (keeping original structure)
  const fallbackLeaderboardData = {
    'all-time': [
      { 
        rank: 1, 
        username: 'CodeMaster2024', 
        avatar: null,
        totalSolved: 342, 
        easy: 156, 
        medium: 128, 
        hard: 58,
        points: 2840,
        streak: 47,
        joinDate: 'Jan 2023',
        country: '🇺🇸',
        badge: 'Grand Master'
      },
      { 
        rank: 2, 
        username: 'AlgorithmQueen', 
        avatar: null,
        totalSolved: 298, 
        easy: 142, 
        medium: 109, 
        hard: 47,
        points: 2456,
        streak: 23,
        joinDate: 'Mar 2023',
        country: '🇨🇦',
        badge: 'Expert'
      },
      { 
        rank: 3, 
        username: 'JavaNinja', 
        avatar: null,
        totalSolved: 267, 
        easy: 134, 
        medium: 95, 
        hard: 38,
        points: 2189,
        streak: 15,
        joinDate: 'Feb 2023',
        country: '🇮🇳',
        badge: 'Expert'
      },
      { 
        rank: 4, 
        username: 'PythonWizard', 
        avatar: null,
        totalSolved: 234, 
        easy: 127, 
        medium: 78, 
        hard: 29,
        points: 1876,
        streak: 31,
        joinDate: 'May 2023',
        country: '🇩🇪',
        badge: 'Advanced'
      },
      { 
        rank: 5, 
        username: 'ReactRocket', 
        avatar: null,
        totalSolved: 212, 
        easy: 118, 
        medium: 68, 
        hard: 26,
        points: 1698,
        streak: 12,
        joinDate: 'Apr 2023',
        country: '🇬🇧',
        badge: 'Advanced'
      },
      { 
        rank: 6, 
        username: 'DataStructureGuru', 
        avatar: null,
        totalSolved: 198, 
        easy: 105, 
        medium: 67, 
        hard: 26,
        points: 1592,
        streak: 8,
        joinDate: 'Jun 2023',
        country: '🇫🇷',
        badge: 'Advanced'
      },
      { 
        rank: 7, 
        username: 'BinarySearchPro', 
        avatar: null,
        totalSolved: 187, 
        easy: 98, 
        medium: 65, 
        hard: 24,
        points: 1498,
        streak: 19,
        joinDate: 'Jul 2023',
        country: '🇯🇵',
        badge: 'Intermediate'
      },
      { 
        rank: 8, 
        username: 'StackOverflowHero', 
        avatar: null,
        totalSolved: 165, 
        easy: 89, 
        medium: 56, 
        hard: 20,
        points: 1312,
        streak: 5,
        joinDate: 'Aug 2023',
        country: '🇦🇺',
        badge: 'Intermediate'
      },
      { 
        rank: 9, 
        username: 'DebugKnight', 
        avatar: null,
        totalSolved: 152, 
        easy: 84, 
        medium: 49, 
        hard: 19,
        points: 1203,
        streak: 14,
        joinDate: 'Sep 2023',
        country: '🇰🇷',
        badge: 'Intermediate'
      },
      { 
        rank: 10, 
        username: 'CodeCrusader', 
        avatar: null,
        totalSolved: 143, 
        easy: 78, 
        medium: 47, 
        hard: 18,
        points: 1134,
        streak: 7,
        joinDate: 'Oct 2023',
        country: '🇧🇷',
        badge: 'Intermediate'
      }
    ],
    'monthly': [
      { 
        rank: 1, 
        username: 'CodeMaster2024', 
        avatar: null,
        totalSolved: 45, 
        easy: 20, 
        medium: 18, 
        hard: 7,
        points: 380,
        streak: 28,
        joinDate: 'Jan 2023',
        country: '🇺🇸',
        badge: 'Grand Master'
      },
      { 
        rank: 2, 
        username: 'ReactRocket', 
        avatar: null,
        totalSolved: 38, 
        easy: 19, 
        medium: 14, 
        hard: 5,
        points: 304,
        streak: 12,
        joinDate: 'Apr 2023',
        country: '🇬🇧',
        badge: 'Advanced'
      },
      { 
        rank: 3, 
        username: 'PythonWizard', 
        avatar: null,
        totalSolved: 35, 
        easy: 18, 
        medium: 12, 
        hard: 5,
        points: 278,
        streak: 31,
        joinDate: 'May 2023',
        country: '🇩🇪',
        badge: 'Advanced'
      }
    ],
    'weekly': [
      { 
        rank: 1, 
        username: 'AlgorithmQueen', 
        avatar: null,
        totalSolved: 12, 
        easy: 6, 
        medium: 4, 
        hard: 2,
        points: 98,
        streak: 7,
        joinDate: 'Mar 2023',
        country: '🇨🇦',
        badge: 'Expert'
      },
      { 
        rank: 2, 
        username: 'JavaNinja', 
        avatar: null,
        totalSolved: 10, 
        easy: 5, 
        medium: 4, 
        hard: 1,
        points: 78,
        streak: 5,
        joinDate: 'Feb 2023',
        country: '🇮🇳',
        badge: 'Expert'
      },
      { 
        rank: 3, 
        username: 'DebugKnight', 
        avatar: null,
        totalSolved: 9, 
        easy: 5, 
        medium: 3, 
        hard: 1,
        points: 69,
        streak: 14,
        joinDate: 'Sep 2023',
        country: '🇰🇷',
        badge: 'Intermediate'
      }
    ]
  };

  const currentData = leaderboardData[selectedTimeframe] || [];

  const getRankIcon = (rank) => {
    switch(rank) {
      case 1: return <Crown size={24} color="#FFD700" />;
      case 2: return <Medal size={24} color="#C0C0C0" />;
      case 3: return <Award size={24} color="#CD7F32" />;
      default: return <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)' }}>#{rank}</span>;
    }
  };

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Grand Master': return '#FFD700';
      case 'Expert': return '#8c52ff';
      case 'Advanced': return '#4ade80';
      case 'Intermediate': return '#fbbf24';
      default: return '#64748b';
    }
  };

  const LeaderboardRow = ({ user, isTopThree }) => (
    <div
      style={{
        backgroundColor: isTopThree 
          ? (isDarkMode ? 'rgba(140, 82, 255, 0.1)' : 'rgba(140, 82, 255, 0.05)')
          : (isDarkMode ? 'rgba(45, 55, 72, 0.5)' : 'rgba(255, 255, 255, 0.9)'),
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: isTopThree 
          ? '2px solid rgba(140, 82, 255, 0.3)'
          : (isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'),
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '1rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(140, 82, 255, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {/* Rank */}
        <div style={{ 
          minWidth: '60px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: isTopThree ? '1.5rem' : '1.2rem'
        }}>
          {getRankIcon(user.rank)}
        </div>

        {/* Avatar */}
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: isDarkMode ? 'rgba(140, 82, 255, 0.2)' : 'rgba(140, 82, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid rgba(140, 82, 255, 0.3)'
        }}>
          <User size={24} style={{ color: '#8c52ff' }} />
        </div>

        {/* User Info */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: isDarkMode ? '#fff' : '#2d3748',
              margin: 0
            }}>
              {user.username}
            </h3>
            <span style={{ fontSize: '1.2rem' }}>{user.country}</span>
            <div style={{
              backgroundColor: getBadgeColor(user.badge),
              color: '#fff',
              padding: '0.25rem 0.75rem',
              borderRadius: '15px',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              {user.badge}
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.9rem',
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Calendar size={14} />
              Joined {user.joinDate}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <TrendingUp size={14} />
              {user.streak} day streak
            </span>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {/* Total Solved */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#8c52ff',
              marginBottom: '0.25rem'
            }}>
              {user.totalSolved}
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
              fontWeight: '500'
            }}>
              Total Solved
            </div>
          </div>

          {/* Difficulty Breakdown */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#4ade80',
                marginBottom: '0.25rem'
              }}>
                {user.easy}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
                fontWeight: '500'
              }}>
                Easy
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#fbbf24',
                marginBottom: '0.25rem'
              }}>
                {user.medium}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
                fontWeight: '500'
              }}>
                Medium
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#f87171',
                marginBottom: '0.25rem'
              }}>
                {user.hard}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
                fontWeight: '500'
              }}>
                Hard
              </div>
            </div>
          </div>

          {/* Points */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: isDarkMode ? '#fff' : '#2d3748',
              marginBottom: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}>
              <Star size={16} color="#FFD700" />
              {user.points.toLocaleString()}
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
              fontWeight: '500'
            }}>
              Points
            </div>
          </div>
        </div>
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
        maxWidth: '1400px',
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
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <Trophy size={48} style={{ color: '#FFD700' }} />
            Leaderboard
          </h1>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              See how you rank against other coders. Solve more challenges to climb the leaderboard!
            </p>
            
            {/* Refresh Controls */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <button
                onClick={refreshLeaderboard}
                disabled={loading}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'transparent',
                  border: '1.5px solid #8c52ff',
                  color: loading ? '#999' : '#8c52ff',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontWeight: '500',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  opacity: loading ? 0.6 : 1
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.backgroundColor = 'rgba(140, 82, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <RefreshCw 
                  size={16} 
                  style={{
                    animation: loading ? 'spin 1s linear infinite' : 'none'
                  }}
                />
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>

              {/* Auto-refresh Toggle */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
              }}>
                <input
                  type="checkbox"
                  id="auto-refresh"
                  checked={autoRefresh}
                  onChange={(e) => setAutoRefresh(e.target.checked)}
                  style={{
                    accentColor: '#8c52ff',
                    transform: 'scale(1.2)'
                  }}
                />
                <label 
                  htmlFor="auto-refresh"
                  style={{
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  Auto-refresh (10s)
                </label>
              </div>
            </div>
            
            {/* Status Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.8rem',
              color: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
            }}>
              {lastUpdated && (
                <div>
                  Last updated: {new Date(lastUpdated).toLocaleTimeString()}
                </div>
              )}
              
              {/* Data Source Indicator */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.25rem'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: isRealData ? '#4ade80' : '#fbbf24'
                }} />
                {isRealData ? 'Connected to live database' : 'Using demo data'}
              </div>
              
              {/* Live Update Status */}
              {autoRefresh && !loading && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#4ade80',
                    animation: 'pulse 2s infinite'
                  }} />
                  Auto-refresh enabled
                </div>
              )}
              
              {!autoRefresh && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#fbbf24'
                  }} />
                  Manual refresh mode
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Time Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {[
            { key: 'all-time', label: 'All Time' },
            { key: 'monthly', label: 'This Month' },
            { key: 'weekly', label: 'This Week' }
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSelectedTimeframe(key)}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '50px',
                border: selectedTimeframe === key 
                  ? 'none' 
                  : isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
                background: selectedTimeframe === key 
                  ? 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)'
                  : isDarkMode ? 'rgba(45, 55, 72, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                color: selectedTimeframe === key ? '#fff' : (isDarkMode ? '#fff' : '#2d3748'),
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => {
                if (selectedTimeframe !== key) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Stats Summary */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.5)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <Code size={24} style={{ color: '#8c52ff', marginBottom: '0.5rem' }} />
            <div style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#8c52ff',
              marginBottom: '0.25rem'
            }}>
              {currentData.length}
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
            }}>
              Active Coders
            </div>
          </div>
          
          <div style={{
            backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.5)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <Trophy size={24} style={{ color: '#FFD700', marginBottom: '0.5rem' }} />
            <div style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#FFD700',
              marginBottom: '0.25rem'
            }}>
              {currentData.reduce((sum, user) => sum + user.totalSolved, 0).toLocaleString()}
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
            }}>
              Problems Solved
            </div>
          </div>

          <div style={{
            backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.5)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <TrendingUp size={24} style={{ color: '#4ade80', marginBottom: '0.5rem' }} />
            <div style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#4ade80',
              marginBottom: '0.25rem'
            }}>
              {Math.max(...currentData.map(user => user.streak))}
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
            }}>
              Max Streak (Days)
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div style={{
            backgroundColor: 'rgba(248, 113, 113, 0.1)',
            borderLeft: '4px solid #f87171',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              color: isDarkMode ? '#fff' : '#2d3748',
              fontSize: '1rem',
              marginBottom: '0.5rem'
            }}>
              {error}
            </div>
            <button
              onClick={refreshLeaderboard}
              style={{
                backgroundColor: '#f87171',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Try Again
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '3rem',
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
          }}>
            <RefreshCw 
              size={24} 
              style={{
                animation: 'spin 1s linear infinite',
                marginRight: '0.75rem'
              }}
            />
            Loading leaderboard data...
          </div>
        )}

        {/* Leaderboard List */}
        {!loading && !error && (
          <div>
            {currentData.length > 0 ? (
              currentData.map((user, index) => (
                <LeaderboardRow 
                  key={user.username + user.rank} 
                  user={user} 
                  isTopThree={user.rank <= 3}
                />
              ))
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '3rem',
                color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
              }}>
                {isRealData ? (
                  <div>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      marginBottom: '1rem',
                      color: isDarkMode ? '#fff' : '#2d3748'
                    }}>
                      🏆 Be the First!
                    </h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                      No one has solved any challenges yet. Be the first to appear on the leaderboard!
                    </p>
                    <button
                      onClick={() => navigate('/live-practice')}
                      style={{
                        background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
                        color: '#fff',
                        padding: '0.75rem 2rem',
                        borderRadius: '25px',
                        border: 'none',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(140, 82, 255, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      Start Solving Challenges
                    </button>
                  </div>
                ) : (
                  'No leaderboard data available for this timeframe.'
                )}
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <button
            onClick={() => navigate('/live-practice')}
            style={{
              background: 'linear-gradient(90deg, #ff5757 0%, #8c52ff 100%)',
              color: '#fff',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(140, 82, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Code size={20} />
            Start Solving Challenges
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

// Add the animations CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }
`;
document.head.appendChild(style);

export default Leaderboard;