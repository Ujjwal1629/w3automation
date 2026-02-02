import React, { useState, useEffect } from 'react';
import './ApiPlayground.css';
import { FiChevronDown, FiChevronRight, FiPlay, FiCopy, FiCheck, FiSearch } from 'react-icons/fi';

const API_BASE = '/api';

// Mock Data representing the documentation structure
const API_COLLECTION = [
  {
    group: "Auth",
    requests: [
      {
        id: "create-token",
        name: "CreateToken",
        method: "POST",
        url: `${API_BASE}/auth`,
        description: "Creates a new auth token to use for access to the PUT and DELETE /booking",
        headers: [
            { key: "Content-Type", value: "application/json", type: "string", desc: "Media type" }
        ],
        body: JSON.stringify({
          username: "admin",
          password: "password123"
        }, null, 2)
      }
    ]
  },
  {
    group: "Booking",
    requests: [
      {
        id: "get-booking-ids",
        name: "GetBookingIds",
        method: "GET",
        url: `${API_BASE}/booking`,
        description: "Returns the ids of all the bookings that exist within the API. Can take optional query strings to search and return a subset of booking ids.",
        params: [
            { key: "firstname", value: "", type: "String", desc: "Return bookings with valid firstname" },
            { key: "lastname", value: "", type: "String", desc: "Return bookings with valid lastname" },
            { key: "checkin", value: "", type: "Date", desc: "Return bookings with checkin date greater than or equal to set date" },
            { key: "checkout", value: "", type: "Date", desc: "Return bookings with checkout date greater than or equal to set date" }
        ]
      },
      {
        id: "get-booking",
        name: "GetBooking",
        method: "GET",
        url: `${API_BASE}/booking/:id`,
        description: "Returns a specific booking based upon the booking id provided",
        pathParams: [
            { key: "id", value: "1", type: "Integer", desc: "The id of the booking you would like to retrieve" }
        ],
        headers: [
            { key: "Accept", value: "application/json", type: "string", desc: "Return format" }
        ]
      },
      {
        id: "create-booking",
        name: "CreateBooking",
        method: "POST",
        url: `${API_BASE}/booking`,
        description: "Creates a new booking in the API",
        headers: [
            { key: "Content-Type", value: "application/json", type: "string", desc: "Media type" },
            { key: "Accept", value: "application/json", type: "string", desc: "Return format" }
        ],
        body: JSON.stringify({
            firstname: "Jim",
            lastname: "Brown",
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"
        }, null, 2)
      },
      {
        id: "update-booking",
        name: "UpdateBooking",
        method: "PUT",
        url: `${API_BASE}/booking/:id`,
        description: "Updates a current booking",
        requiresAuth: true,
        headerWarning: "Requires Auth (Cookie: token=...)",
        pathParams: [
            { key: "id", value: "1", type: "Integer", desc: "ID of booking to update" }
        ],
        headers: [
            { key: "Content-Type", value: "application/json", type: "string", desc: "Media type" },
            { key: "Accept", value: "application/json", type: "string", desc: "Return format" },
        ],
        body: JSON.stringify({
            firstname: "James",
            lastname: "Brown",
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"
        }, null, 2)
      },
      {
        id: "delete-booking",
        name: "DeleteBooking",
        method: "DELETE",
        url: `${API_BASE}/booking/:id`,
        description: "Returns a specific booking based upon the booking id provided",
        pathParams: [
            { key: "id", value: "1", type: "Integer", desc: "The id of the booking you would like to delete" }
        ],
        headers: [
            { key: "Content-Type", value: "application/json", type: "string", desc: "Media type" },
        ]
      }
    ]
  },
  {
    group: "Ping",
    requests: [
      {
        id: "health-check",
        name: "HealthCheck",
        method: "GET",
        url: `${API_BASE}/ping`,
        description: "A simple health check endpoint to confirm the API is up and running."
      }
    ]
  }
];

const ApiPlayground = () => {
    // Selection State
  const [selectedRequest, setSelectedRequest] = useState(API_COLLECTION[1].requests[1]); // Default to GetBooking
  const [expandedGroups, setExpandedGroups] = useState({ "Booking": true, "Auth": true, "Ping": true });

  // Execution State (local to the selected request)
  const [currentParams, setCurrentParams] = useState([]);
  const [currentHeaders, setCurrentHeaders] = useState([]);
  const [currentPathParams, setCurrentPathParams] = useState([]);
  const [currentBody, setCurrentBody] = useState('');
  
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);


  // Search State
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [authToken, setAuthToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    if (!searchTerm.trim()) {
        setSearchResults([]);
        return;
    }
    const results = [];
    API_COLLECTION.forEach(group => {
        group.requests.forEach(req => {
            if (req.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                req.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                results.push(req);
            }
        });
    });
    setSearchResults(results);
  }, [searchTerm]);

  const handleSearchSelect = (req) => {
      setSelectedRequest(req);
      setSearchTerm('');
      setSearchResults([]);
      const groupName = API_COLLECTION.find(g => g.requests.includes(req))?.group;
      if (groupName) {
          setExpandedGroups(prev => ({ ...prev, [groupName]: true }));
      }
  };

  // Initialize local state when selection changes
  useEffect(() => {
    if (selectedRequest) {
        setCurrentParams(selectedRequest.params ? [...selectedRequest.params] : []);
        setCurrentHeaders(selectedRequest.headers ? [...selectedRequest.headers] : []);
        setCurrentPathParams(selectedRequest.pathParams ? [...selectedRequest.pathParams] : []);
        setCurrentBody(selectedRequest.body || '');
        setResponse(null); // Clear previous response
    }
  }, [selectedRequest]);

  const toggleGroup = (groupName) => {
    setExpandedGroups(prev => ({...prev, [groupName]: !prev[groupName]}));
  };

  const executeRequest = async () => {
    setLoading(true);
    setResponse(null);

    // Auto-auth if required
    let activeToken = authToken;
    if (requiresAuth(selectedRequest)) {
        // If we don't have a token, or want to ensure we have one, getting it fresh is safer
        // but for now let's reuse if existing, or fetch if missing.
        if (!activeToken) {
            activeToken = await runAuthIfNeeded(); // Returns token string or null
            if (!activeToken) {
                setLoading(false);
                return;
            }
        }
    }

    try {
        // 1. Construct URL with Path Params
        let constructedUrl = selectedRequest.url;
        currentPathParams.forEach(p => {
            constructedUrl = constructedUrl.replace(`:${p.key}`, p.value);
        });

        // 2. Append Query Query Params
        const queryParams = new URLSearchParams();
        currentParams.forEach(p => {
            if(p.value) queryParams.append(p.key, p.value);
        });
        const finalUrl = queryParams.toString() ? `${constructedUrl}?${queryParams.toString()}` : constructedUrl;

        // 3. Prepare Headers
        const headersInit = {};
        currentHeaders.forEach(h => {
        if (h.value && h.key.toLowerCase() !== 'cookie') {
            headersInit[h.key] = h.value;
        }
        });

        // 🔐 RESTFUL BOOKER AUTH
        if (selectedRequest.requiresAuth && activeToken) {
            // Send as custom header, let Vite Proxy rewrite it to Cookie
            headersInit['X-Auth-Token'] = activeToken;
        }

        // 4. Prepare Options (Body)
        const options = {
            method: selectedRequest.method,
            headers: headersInit
        };

        if (['POST', 'PUT', 'PATCH'].includes(selectedRequest.method) && currentBody) {
             options.body = currentBody; // Assume stringified JSON
        }

        const res = await fetch(finalUrl, options);
        let data;
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
             data = await res.json();
        } else {
             data = await res.text();
        }

        setResponse({
            status: res.status,
            statusText: res.statusText,
            data
        });

    } catch (err) {
        setResponse({
            status: 'Error',
            data: err.message
        });
    } finally {
        setLoading(false);
    }
  };

  const handleCopy = (text) => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
  };

  const updateParamValue = (index, newValue) => {
      const updated = [...currentParams];
      updated[index].value = newValue;
      setCurrentParams(updated);
  };

  const updateHeaderValue = (index, newValue) => {
      const updated = [...currentHeaders];
      updated[index].value = newValue;
      setCurrentHeaders(updated);
  };
  
  const updatePathParamValue = (index, newValue) => {
      const updated = [...currentPathParams];
      updated[index].value = newValue;
      setCurrentPathParams(updated);
  };

    const requiresAuth = (req) => {
        return req.requiresAuth || req.headers?.some(
            h => h.key.toLowerCase() === 'cookie'
        );
    };

    const runAuthIfNeeded = async () => {
    if (authToken) return authToken;

    const authReq = API_COLLECTION
        .find(g => g.group === 'Auth')
        ?.requests[0];

    try {
        const res = await fetch(authReq.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: authReq.body
        });

        if (!res.ok) throw new Error('Auth failed');

        const data = await res.json();

        setAuthToken(data.token);
        setIsAuthenticated(true);
        return data.token;
    } catch (e) {
        setIsAuthenticated(false);
        return null;
    }
    };

  return (
    <div className="doc-playground">
      {/* Sidebar */}
      <div className="doc-sidebar">
        <div className="doc-search">
            <div className="search-wrapper">
                <FiSearch className="search-icon" />
                <input 
                    type="text" 
                    placeholder="Search endpoints..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchResults.length > 0 && (
                    <div className="search-results">
                        {searchResults.map(req => (
                            <div 
                                key={req.id} 
                                className="search-result-item"
                                onClick={() => handleSearchSelect(req)}
                            >
                                <span className={`method-tag ${req.method.toLowerCase()}`}>{req.method}</span>
                                <span className="result-name">{req.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        <div className="doc-nav">
            {API_COLLECTION.map((group) => (
                <div key={group.group} className="nav-group">
                    <div className="nav-group-title" onClick={() => toggleGroup(group.group)}>
                        <h3>{group.group}</h3>
                        {expandedGroups[group.group] ? <FiChevronDown /> : <FiChevronRight />}
                    </div>
                    {expandedGroups[group.group] && (
                        <div className="nav-items">
                            {group.requests.map(req => (
                                <div 
                                    key={req.id} 
                                    className={`nav-item ${selectedRequest.id === req.id ? 'active' : ''}`}
                                    onClick={() => setSelectedRequest(req)}
                                >
                                    {req.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="doc-content">
        <div className="doc-header-block">
             <div className="doc-breadcrumbs">
                 <span>{API_COLLECTION.find(g => g.requests.includes(selectedRequest))?.group}</span>
                 <span className="separator">/</span>
                 <span className="current">{selectedRequest.name}</span>
             </div>
             <div
                className={`auth-badge ${isAuthenticated ? 'on' : 'off'}`}
             >
                {isAuthenticated ? '🟢 Authenticated' : '🔴 Not Authenticated'}
             </div>
             {/* <span className="version-badge">1.0.0</span> */}
        </div>

        <h1 className="request-title">{selectedRequest.name}</h1>
        <p className="request-desc">{selectedRequest.description}</p>
        
        {/* Method & URL Block */}
        <div className="url-block">
             <span className={`method-badge ${selectedRequest.method.toLowerCase()}`}>{selectedRequest.method}</span>
             <span className="url-text">{selectedRequest.url}</span>
             <button className="copy-btn" onClick={() => handleCopy(selectedRequest.url)}>
                {copied ? <FiCheck /> : <FiCopy />}
             </button>
        </div>

        {/* Interactive Sections */}
        <div className="interaction-section">
            
            {/* Headers Table */}
            {currentHeaders.length > 0 && (
                <div className="table-section">
                    <h3>Header</h3>
                    <div className="doc-table">
                        <div className="doc-table-header">
                            <div className="col-field">Field</div>
                            <div className="col-value">Value</div>
                            <div className="col-type">Type</div>
                            <div className="col-desc">Description</div>
                        </div>
                        {currentHeaders.map((h, idx) => (
                            <div key={idx} className="doc-table-row">
                                <div className="col-field">{h.key}</div>
                                <div className="col-value">
                                    <input 
                                        type="text" 
                                        value={h.value} 
                                        onChange={(e) => updateHeaderValue(idx, e.target.value)} 
                                    />
                                </div>
                                <div className="col-type">{h.type}</div>
                                <div className="col-desc">{h.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Path Params Table */}
             {currentPathParams.length > 0 && (
                <div className="table-section">
                    <h3>Url Parameters</h3>
                    <div className="doc-table">
                        <div className="doc-table-header">
                            <div className="col-field">Field</div>
                            <div className="col-value">Value</div>
                            <div className="col-type">Type</div>
                            <div className="col-desc">Description</div>
                        </div>
                        {currentPathParams.map((p, idx) => (
                            <div key={idx} className="doc-table-row">
                                <div className="col-field">{p.key}</div>
                                <div className="col-value">
                                    <input 
                                        type="text" 
                                        value={p.value} 
                                        onChange={(e) => updatePathParamValue(idx, e.target.value)}
                                    />
                                </div>
                                <div className="col-type">{p.type}</div>
                                <div className="col-desc">{p.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Query Params Table */}
            {currentParams.length > 0 && (
                <div className="table-section">
                    <h3>Query Parameters</h3>
                    <div className="doc-table">
                        <div className="doc-table-header">
                            <div className="col-field">Field</div>
                            <div className="col-value">Value</div>
                            <div className="col-type">Type</div>
                            <div className="col-desc">Description</div>
                        </div>
                        {currentParams.map((p, idx) => (
                            <div key={idx} className="doc-table-row">
                                <div className="col-field">{p.key}</div>
                                <div className="col-value">
                                    <input 
                                        type="text" 
                                        value={p.value} 
                                        onChange={(e) => updateParamValue(idx, e.target.value)}
                                    />
                                </div>
                                <div className="col-type">{p.type}</div>
                                <div className="col-desc">{p.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Body Editor */}
            {['POST', 'PUT', 'PATCH'].includes(selectedRequest.method) && (
                <div className="body-section">
                    <h3>Request Body</h3>
                    <textarea 
                        className="body-editor"
                        value={currentBody}
                        onChange={(e) => setCurrentBody(e.target.value)}
                    />
                </div>
            )}

            <div className="action-bar">
                <button className="execute-btn" onClick={executeRequest} disabled={loading}>
                    {loading ? <div className="spinner-sm" /> : <FiPlay />} 
                    Execute
                </button>
            </div>

            {/* Response Area */}
            {response && (
                <div className="response-section">
                    <div className="response-header">
                        <h3>Response</h3>
                        <div className={`status-badge ${response.status >= 200 && response.status < 300 ? 'success' : 'error'}`}>
                            {response.status} {response.statusText}
                        </div>
                    </div>
                    <pre className="response-block">
                        {typeof response.data === 'object' ? JSON.stringify(response.data, null, 2) : response.data}
                    </pre>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default ApiPlayground;
