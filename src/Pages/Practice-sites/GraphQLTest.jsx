import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './GraphQLTest.css';

const GraphQLTest = () => {
  const [selectedQuery, setSelectedQuery] = useState('getUsers');
  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');
  const [response, setResponse] = useState(null);
  const themeContext = useTheme();
  const isDarkMode = themeContext ? themeContext.isDarkMode : false;
  
  const predefinedQueries = {
    getUsers: {
      query: `query GetUsers {
  users {
    data {
      id
      name
      email
    }
  }
}`,
      variables: `{}`,
    },
    getUserById: {
      query: `query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    posts {
      data {
        id
        title
        body
      }
    }
  }
}`,
      variables: `{
  "id": 1
}`,
    },
    createPost: {
      query: `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    body
    user {
      id
      name
    }
  }
}`,
      variables: `{
  "input": {
    "title": "A New Post",
    "body": "Some content."
  }
}`,
    },
    updatePost: {
      query: `mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
  updatePost(id: $id, input: $input) {
    id
    title
    body
  }
}`,
      variables: `{
  "id": 1,
  "input": {
    "title": "An Updated Post",
    "body": "Some updated content."
  }
}`,
    },
    deletePost: {
      query: `mutation DeletePost($id: ID!) {
  deletePost(id: $id)
}`,
      variables: `{
  "id": 1
}`,
    },
    fragmentExample: {
        query: `query GetPostsWithComments {
  posts {
    data {
      ...PostFields
      comments {
        data {
          ...CommentFields
        }
      }
    }
  }
}

fragment PostFields on Post {
  id
  title
  body
  user {
    id
    name
  }
}

fragment CommentFields on Comment {
  id
  name
  email
  body
}`,
        variables: `{}`,
    }
  };
  
  const handleSelectQuery = (queryKey) => {
    setSelectedQuery(queryKey);
    const selectedQueryData = predefinedQueries[queryKey];
    setQuery(selectedQueryData.query);
    setVariables(selectedQueryData.variables);
    setResponse(null);
  };

  const executeQuery = async (customQuery = query, customVariables = variables) => {
    if (!customQuery) return;
    try {
      const endpointUrl = import.meta.env.MODE === 'development'
        ? 'http://localhost:5001/practice/graphql'
        : '/practice/graphql';

      const res = await fetch(endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: customQuery,
          variables: typeof customVariables === 'string' ? JSON.parse(customVariables || '{}') : customVariables,
        }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: error.message });
    }
  };

  // Initialize with the first query
  useEffect(() => {
    const selectedQueryData = predefinedQueries[selectedQuery];
    setQuery(selectedQueryData.query);
    setVariables(selectedQueryData.variables);
    setResponse(null);
    // Automatically execute the selected query
    executeQuery(selectedQueryData.query, selectedQueryData.variables);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedQuery]);
  
  return (
    <div className={`graphql-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>GraphQL Testing</h1>
      
      <div className="graphql-layout">
        <div className="query-selector">
          <h3>Example Queries</h3>
          <div className="query-list">
            <div className={`query-item ${selectedQuery === 'getUsers' ? 'selected' : ''}`} onClick={() => handleSelectQuery('getUsers')}>
              <span className="operation-type query">Query</span> GetUsers
            </div>
            <div className={`query-item ${selectedQuery === 'getUserById' ? 'selected' : ''}`} onClick={() => handleSelectQuery('getUserById')}>
              <span className="operation-type query">Query</span> GetUserById
            </div>
            <div className={`query-item ${selectedQuery === 'createPost' ? 'selected' : ''}`} onClick={() => handleSelectQuery('createPost')}>
              <span className="operation-type mutation">Mutation</span> CreatePost
            </div>
            <div className={`query-item ${selectedQuery === 'updatePost' ? 'selected' : ''}`} onClick={() => handleSelectQuery('updatePost')}>
              <span className="operation-type mutation">Mutation</span> UpdatePost
            </div>
            <div className={`query-item ${selectedQuery === 'deletePost' ? 'selected' : ''}`} onClick={() => handleSelectQuery('deletePost')}>
              <span className="operation-type mutation">Mutation</span> DeletePost
            </div>
            <div className={`query-item ${selectedQuery === 'fragmentExample' ? 'selected' : ''}`} onClick={() => handleSelectQuery('fragmentExample')}>
              <span className="operation-type fragment">Fragment</span> Using Fragments
            </div>
          </div>
        </div>
        
        <div className="graphql-explorer">
          <div className="explorer-panel">
            <div className="query-editor-container">
              <h3>Operation</h3>
              <textarea 
                className="query-editor" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="execute-btn" onClick={() => executeQuery()}>
                Run Query
              </button>
            </div>
            
            <div className="variables-container">
              <h3>Variables</h3>
              <textarea 
                className="variables-editor" 
                value={variables} 
                onChange={(e) => setVariables(e.target.value)}
              />
            </div>
          </div>
          
          <div className="response-panel">
            <h3>Response</h3>
            <div className="response-content">
            {response && (
                <pre>{JSON.stringify(response, null, 2)}</pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphQLTest; 