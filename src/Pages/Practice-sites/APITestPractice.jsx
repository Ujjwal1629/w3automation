import React, { useState } from 'react';
import { Send, Copy, Check, AlertCircle, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import './APITestPractice.css';
import Navbar from '../../Components/Navbar';

const APITestPractice = () => {
  const [method, setMethod] = useState('GET');
  const [endpoint, setEndpoint] = useState('');
  const [headers, setHeaders] = useState([{ key: '', value: '' }]);
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [copied, setCopied] = useState(false);

  const testScenarios = [
    {
      id: 1,
      name: 'Success Response',
      method: 'GET',
      endpoint: '/api/users',
      description: 'Returns a list of users with 200 status code',
      expectedStatus: 200
    },
    {
      id: 2,
      name: 'Not Found Error',
      method: 'GET',
      endpoint: '/api/users/999',
      description: 'Returns 404 for non-existent user',
      expectedStatus: 404
    },
    {
      id: 3,
      name: 'Validation Error',
      method: 'POST',
      endpoint: '/api/users',
      description: 'Returns 400 for invalid user data',
      body: '{"username": ""}',
      expectedStatus: 400
    },
    {
      id: 4,
      name: 'Authentication Required',
      method: 'GET',
      endpoint: '/api/admin/users',
      description: 'Returns 401 for unauthorized access',
      expectedStatus: 401
    },
    {
      id: 5,
      name: 'Create Resource',
      method: 'POST',
      endpoint: '/api/users',
      description: 'Creates a new user with 201 status code',
      body: '{\n  "username": "testuser",\n  "email": "test@example.com"\n}',
      expectedStatus: 201
    }
  ];

  const addHeader = () => {
    setHeaders([...headers, { key: '', value: '' }]);
  };

  const removeHeader = (index) => {
    const newHeaders = headers.filter((_, i) => i !== index);
    setHeaders(newHeaders);
  };

  const updateHeader = (index, field, value) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  const formatJSON = (json) => {
    try {
      return JSON.stringify(JSON.parse(json), null, 2);
    } catch {
      return json;
    }
  };

  const copyResponse = () => {
    if (response) {
      navigator.clipboard.writeText(JSON.stringify(response, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const loadScenario = (scenario) => {
    setMethod(scenario.method);
    setEndpoint(scenario.endpoint);
    if (scenario.body) {
      setBody(scenario.body);
    } else {
      setBody('');
    }
    setSelectedScenario(scenario.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    // Simulate API call with random delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Generate mock response based on the scenario
    const scenario = testScenarios.find(s => s.id === selectedScenario);
    let mockResponse;

    if (scenario) {
      switch (scenario.expectedStatus) {
        case 200:
          mockResponse = {
            status: 200,
            data: {
              users: [
                { id: 1, username: "user1", email: "user1@example.com" },
                { id: 2, username: "user2", email: "user2@example.com" }
              ]
            }
          };
          break;
        case 404:
          mockResponse = {
            status: 404,
            error: "User not found"
          };
          break;
        case 400:
          mockResponse = {
            status: 400,
            error: "Validation failed",
            details: {
              username: ["Username is required"]
            }
          };
          break;
        case 401:
          mockResponse = {
            status: 401,
            error: "Authentication required"
          };
          break;
        case 201:
          mockResponse = {
            status: 201,
            data: {
              id: Math.floor(Math.random() * 1000),
              username: "testuser",
              email: "test@example.com",
              created_at: new Date().toISOString()
            }
          };
          break;
        default:
          mockResponse = {
            status: 500,
            error: "Internal server error"
          };
      }
    } else {
      // Random response for custom requests
      const statuses = [200, 201, 400, 401, 403, 404, 500];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      
      mockResponse = {
        status: randomStatus,
        timestamp: new Date().toISOString(),
        path: endpoint,
        method: method
      };

      if (randomStatus >= 400) {
        mockResponse.error = `Mock ${randomStatus} error`;
      } else {
        mockResponse.data = { message: "Mock success response" };
      }
    }

    setResponse(mockResponse);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="api-test-practice">
        <div className="practice-container">
          <div className="test-scenarios">
            <h2>Test Scenarios</h2>
            <div className="scenarios-list">
              {testScenarios.map((scenario) => (
                <div 
                  key={scenario.id}
                  className={`scenario-card ${selectedScenario === scenario.id ? 'active' : ''}`}
                  onClick={() => loadScenario(scenario)}
                >
                  <div className="scenario-header">
                    <span className={`method-badge ${scenario.method.toLowerCase()}`}>
                      {scenario.method}
                    </span>
                    <h3>{scenario.name}</h3>
                  </div>
                  <p>{scenario.description}</p>
                  <span className="status-badge">
                    Expected: {scenario.expectedStatus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="request-builder">
            <h2>Request Builder</h2>
            <form onSubmit={handleSubmit}>
              <div className="request-header">
                <select 
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                  className="method-select"
                >
                  <option>GET</option>
                  <option>POST</option>
                  <option>PUT</option>
                  <option>DELETE</option>
                  <option>PATCH</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter endpoint (e.g., /api/users)"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  className="endpoint-input"
                />
              </div>

              <div className="headers-section">
                <div className="section-title">
                  <h3>Headers</h3>
                  <button type="button" onClick={addHeader} className="add-header-btn">
                    + Add Header
                  </button>
                </div>
                {headers.map((header, index) => (
                  <div key={index} className="header-row">
                    <input
                      type="text"
                      placeholder="Key"
                      value={header.key}
                      onChange={(e) => updateHeader(index, 'key', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Value"
                      value={header.value}
                      onChange={(e) => updateHeader(index, 'value', e.target.value)}
                    />
                    <button 
                      type="button" 
                      onClick={() => removeHeader(index)}
                      className="remove-header-btn"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
                <div className="body-section">
                  <h3>Request Body</h3>
                  <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Enter request body in JSON format"
                    rows="6"
                  />
                </div>
              )}

              <button type="submit" className="send-button" disabled={loading}>
                {loading ? (
                  <RefreshCw className="loading-icon" />
                ) : (
                  <>
                    <Send size={18} />
                    Send Request
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="response-section">
            <div className="response-header">
              <h2>Response</h2>
              {response && (
                <button onClick={copyResponse} className="copy-button">
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              )}
            </div>
            <div className="response-content">
              {response ? (
                <pre>
                  <code>{JSON.stringify(response, null, 2)}</code>
                </pre>
              ) : (
                <div className="no-response">
                  <AlertCircle size={24} />
                  <p>No response yet. Send a request to see the response here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default APITestPractice;