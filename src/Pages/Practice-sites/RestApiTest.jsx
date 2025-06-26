import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './RestApiTest.css';

const RestApiTest = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('listUsers');
  const themeContext = useTheme();
  const isDarkMode = themeContext ? themeContext.isDarkMode : false;
  
  const endpoints = [
    { id: 'listUsers', method: 'GET', label: 'LIST USERS', url: '/api/users', statusCode: 200 },
    { id: 'singleUser', method: 'GET', label: 'SINGLE USER', url: '/api/users/2', statusCode: 200 },
    { id: 'userNotFound', method: 'GET', label: 'SINGLE USER NOT FOUND', url: '/api/users/23', statusCode: 404 },
    { id: 'listResource', method: 'GET', label: 'LIST <RESOURCE>', url: '/api/unknown', statusCode: 200 },
    { id: 'singleResource', method: 'GET', label: 'SINGLE <RESOURCE>', url: '/api/unknown/2', statusCode: 200 },
    { id: 'resourceNotFound', method: 'GET', label: 'SINGLE <RESOURCE> NOT FOUND', url: '/api/unknown/23', statusCode: 404 },
    { id: 'create', method: 'POST', label: 'CREATE', url: '/api/users', statusCode: 201 },
    { id: 'update', method: 'PUT', label: 'UPDATE', url: '/api/users/2', statusCode: 200 },
    { id: 'patch', method: 'PATCH', label: 'PATCH', url: '/api/users/2', statusCode: 200 },
    { id: 'delete', method: 'DELETE', label: 'DELETE', url: '/api/users/2', statusCode: 204 }
  ];

  const getCurrentEndpoint = () => {
    return endpoints.find(endpoint => endpoint.id === selectedEndpoint) || endpoints[0];
  };

  const generateResponse = () => {
    const endpoint = getCurrentEndpoint();
    
    switch (endpoint.id) {
      case 'listUsers':
        return {
          page: 1,
          per_page: 6,
          total: 12,
          total_pages: 2,
          data: [
            { id: 1, email: "george.bluth@reqres.in", first_name: "George", last_name: "Bluth", avatar: "https://reqres.in/img/faces/1-image.jpg" },
            { id: 2, email: "janet.weaver@reqres.in", first_name: "Janet", last_name: "Weaver", avatar: "https://reqres.in/img/faces/2-image.jpg" }
          ]
        };
      case 'singleUser':
        return {
          data: {
            id: 2,
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
          },
          support: {
            url: "https://contentcaddy.io?utm=test",
            text: "Tired of writing endless sample responses"
          }
        };
      case 'userNotFound':
        return { };
      case 'listResource':
        return {
          page: 1,
          per_page: 6,
          total: 12,
          total_pages: 2,
          data: [
            { id: 1, name: "cerulean", year: 2000, color: "#98B2D1", pantone_value: "15-4020" },
            { id: 2, name: "fuchsia rose", year: 2001, color: "#C74375", pantone_value: "17-2031" }
          ]
        };
      case 'singleResource':
        return {
          data: {
            id: 2,
            name: "fuchsia rose",
            year: 2001,
            color: "#C74375",
            pantone_value: "17-2031"
          }
        };
      case 'resourceNotFound':
        return { };
      case 'create':
        return {
          name: "morpheus",
          job: "leader",
          id: "123",
          createdAt: new Date().toISOString()
        };
      case 'update':
        return {
          name: "morpheus",
          job: "zion resident",
          updatedAt: new Date().toISOString()
        };
      case 'patch':
        return {
          name: "morpheus",
          job: "zion resident",
          updatedAt: new Date().toISOString()
        };
      case 'delete':
        return null;
      default:
        return { };
    }
  };

  const getRequestBody = () => {
    const endpoint = getCurrentEndpoint();
    
    if (['POST', 'PUT', 'PATCH'].includes(endpoint.method)) {
      return {
        name: 'morpheus',
        job: endpoint.method === 'POST' ? 'leader' : 'zion resident'
      };
    }
    
    return null;
  };

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
            <div className={`status-code status-${Math.floor(getCurrentEndpoint().statusCode/100)}00`}>
              {getCurrentEndpoint().statusCode}
            </div>
            
            <div className="response-body">
              <pre>{JSON.stringify(generateResponse(), null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestApiTest; 