import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './RestApiTest.css';

const RestApiTest = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('listUsers');
  const [response, setResponse] = useState(null);
  const themeContext = useTheme();
  const isDarkMode = themeContext ? themeContext.isDarkMode : false;
  
  const endpoints = [
    { id: 'listUsers', method: 'GET', label: 'LIST USERS', url: '/users', statusCode: 200 },
    { id: 'singleUser', method: 'GET', label: 'SINGLE USER', url: '/users/2', statusCode: 200 },
    { id: 'userNotFound', method: 'GET', label: 'SINGLE USER NOT FOUND', url: '/users/99', statusCode: 404 },
    { id: 'listPosts', method: 'GET', label: 'LIST POSTS', url: '/posts', statusCode: 200 },
    { id: 'singlePost', method: 'GET', label: 'SINGLE POST', url: '/posts/1', statusCode: 200 },
    { id: 'postNotFound', method: 'GET', label: 'SINGLE POST NOT FOUND', url: '/posts/999', statusCode: 404 },
    { id: 'create', method: 'POST', label: 'CREATE USER', url: '/users', statusCode: 201 },
    { id: 'update', method: 'PUT', label: 'UPDATE USER', url: '/users/2', statusCode: 200 },
    { id: 'patch', method: 'PATCH', label: 'PATCH USER', url: '/users/2', statusCode: 200 },
    { id: 'delete', method: 'DELETE', label: 'DELETE USER', url: '/users/2', statusCode: 200 }
  ];

  const getCurrentEndpoint = () => {
    return endpoints.find(endpoint => endpoint.id === selectedEndpoint) || endpoints[0];
  };

  const getRequestBody = () => {
    const endpoint = getCurrentEndpoint();
    
    if (['POST', 'PUT', 'PATCH'].includes(endpoint.method)) {
      return {
        name: 'morpheus',
        username: endpoint.method === 'POST' ? 'leader' : 'zion resident'
      };
    }
    
    return null;
  };

  useEffect(() => {
    const fetchApi = async () => {
      setResponse(null);
      const endpoint = getCurrentEndpoint();
      
      // Prefer our own JourneyToAutomation practice API. Try multiple environments so the component works
      // during local development, preview builds, and production hosting.
      const candidateBaseUrls = import.meta.env.MODE === 'development'
        ? [
            // Same origin (e.g. `npm run dev` serving the SPA under /practice)
            window.location.origin + '/practice/restapi',
            // Typical Vite dev server default port
            'http://localhost:5173/practice/restapi',
            // Production site
            'https://www.journeytoautomation.org/practice/restapi',
          ]
        : ['https://www.journeytoautomation.org/practice/restapi'];

      // Probe each candidate until one yields a JSON (or 204) response.
      let url;
      let res;
      for (const base of candidateBaseUrls) {
        url = base + endpoint.url;
        try {
          const probeOptions = { method: endpoint.method };
          res = await fetch(url, probeOptions);
          const ct = res.headers.get('content-type') || '';
          if (res.status === 204 || ct.includes('application/json')) {
            break; // Found a working endpoint
          }
        } catch {
          res = undefined;
        }
        res = undefined; // Force next iteration if response unacceptable
      }

      if (!res) {
        setResponse({ status: 'Error', data: 'All API base URLs failed' });
        return;
      }

      const options = {
        method: endpoint.method,
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      const requestBody = getRequestBody();
      if (requestBody) {
        options.body = JSON.stringify(requestBody);
      }
      
      try {
        // Perform the actual request with full headers/body (the earlier probe used minimal options).
        res = await fetch(url, options);
        let data;
        if (res.status === 204) {
          data = "No Content";
        } else if (res.headers.get("content-type")?.includes("application/json")) {
          data = await res.json();
        } else {
          data = await res.text();
        }
        setResponse({ status: res.status, data: data });

        // --- NEW: also open the response in a fresh browser tab ---
        try {
          if (endpoint.method === 'GET') {
            // For simple GET requests just open the URL so the user sees the native JSON in the browser.
            window.open(url, '_blank', 'noopener,noreferrer');
          } else {
            // For requests that include a body (POST, PUT, PATCH, DELETE) construct a blob so the user can inspect it.
            const blobPayload = new Blob([
              JSON.stringify(
                {
                  request: requestBody ?? undefined,
                  response: data,
                },
                null,
                2,
              ),
            ], { type: 'application/json' });
            const blobUrl = URL.createObjectURL(blobPayload);
            window.open(blobUrl, '_blank', 'noopener,noreferrer');
          }
        } catch (openErr) {
          // Fail silently – opening a new tab is best-effort and should not block the main UI.
          // eslint-disable-next-line no-console
          console.error('Unable to open response in a new tab:', openErr);
        }
      } catch (err) {
        setResponse({ status: 'Error', data: err.message });
      }
    };
    
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEndpoint]);

  const getMethodClass = (method) => {
    switch(method) {
      case 'GET': return 'method-get';
      case 'POST': return 'method-post';
      case 'PUT': return 'method-put';
      case 'PATCH': return 'method-patch';
      case 'DELETE': return 'method-delete';
      default: return '';
    }
  };

  return (
    <div className={`rest-api-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>REST API Testing</h1>
      
      <div className="rest-endpoints">
        {endpoints.map((endpoint) => (
          <div 
            key={endpoint.id}
            className={`endpoint-item ${selectedEndpoint === endpoint.id ? 'selected' : ''}`}
            onClick={() => setSelectedEndpoint(endpoint.id)}
          >
            <span className={`method-badge ${getMethodClass(endpoint.method)}`}>
              {endpoint.method}
            </span>
            <span className="endpoint-label">{endpoint.label}</span>
          </div>
        ))}
      </div>
      
      <div className="rest-content">
        <div className="request-response-container">
          <div className="request-panel">
            <h3>Request</h3>
            <div className="request-url">{getCurrentEndpoint().url}</div>
            
            {getRequestBody() && (
              <div className="request-body">
                <h4>Request Body:</h4>
                <pre>{JSON.stringify(getRequestBody(), null, 2)}</pre>
              </div>
            )}
          </div>
          
          <div className="response-panel">
            <h3>Response</h3>
            {response ? (
              <>
                <div className={`status-code ${typeof response.status === 'number' ? `status-${Math.floor(response.status/100)}00` : 'status-error'}`}>
                  {response.status}
                </div>
                <div className="response-body">
                  <pre>{response.data && typeof response.data === 'object' ? JSON.stringify(response.data, null, 2) : response.data}</pre>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestApiTest; 