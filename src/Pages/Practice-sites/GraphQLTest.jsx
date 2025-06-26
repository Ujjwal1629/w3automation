import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './GraphQLTest.css';

const GraphQLTest = () => {
  const [selectedQuery, setSelectedQuery] = useState('getUsers');
  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');
  const themeContext = useTheme();
  const isDarkMode = themeContext ? themeContext.isDarkMode : false;
  
  const predefinedQueries = {
    getUsers: {
      query: `query GetUsers {
  users {
    id
    name
    email
    posts {
      id
      title
    }
  }
}`,
      variables: `{}`,
      response: {
        data: {
          users: [
            {
              id: "1",
              name: "John Smith",
              email: "john@example.com",
              posts: [
                {
                  id: "1",
                  title: "Getting Started with GraphQL"
                },
                {
                  id: "2",
                  title: "Understanding Apollo Client"
                }
              ]
            },
            {
              id: "2",
              name: "Jane Doe",
              email: "jane@example.com",
              posts: [
                {
                  id: "3",
                  title: "GraphQL vs REST API"
                }
              ]
            }
          ]
        }
      }
    },
    getUserById: {
      query: `query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    posts {
      id
      title
      content
    }
  }
}`,
      variables: `{
  "id": "1"
}`,
      response: {
        data: {
          user: {
            id: "1",
            name: "John Smith",
            email: "john@example.com",
            posts: [
              {
                id: "1",
                title: "Getting Started with GraphQL",
                content: "GraphQL is a query language for APIs..."
              },
              {
                id: "2",
                title: "Understanding Apollo Client",
                content: "Apollo Client is a comprehensive state management library..."
              }
            ]
          }
        }
      }
    },
    createPost: {
      query: `mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    id
    title
    content
    author {
      id
      name
    }
  }
}`,
      variables: `{
  "input": {
    "title": "My New Post",
    "content": "This is the content of my post",
    "authorId": "1"
  }
}`,
      response: {
        data: {
          createPost: {
            id: "4",
            title: "My New Post",
            content: "This is the content of my post",
            author: {
              id: "1",
              name: "John Smith"
            }
          }
        }
      }
    },
    updatePost: {
      query: `mutation UpdatePost($id: ID!, $input: PostUpdateInput!) {
  updatePost(id: $id, input: $input) {
    id
    title
    content
    updatedAt
  }
}`,
      variables: `{
  "id": "1",
  "input": {
    "title": "Updated Title",
    "content": "Updated content for the post"
  }
}`,
      response: {
        data: {
          updatePost: {
            id: "1",
            title: "Updated Title",
            content: "Updated content for the post",
            updatedAt: new Date().toISOString()
          }
        }
      }
    },
    deletePost: {
      query: `mutation DeletePost($id: ID!) {
  deletePost(id: $id) {
    success
    message
  }
}`,
      variables: `{
  "id": "2"
}`,
      response: {
        data: {
          deletePost: {
            success: true,
            message: "Post deleted successfully"
          }
        }
      }
    },
    fragmentExample: {
      query: `query GetPostsWithComments {
  posts {
    ...PostFields
    comments {
      ...CommentFields
    }
  }
}

fragment PostFields on Post {
  id
  title
  content
  author {
    id
    name
  }
}

fragment CommentFields on Comment {
  id
  text
  user {
    name
  }
}`,
      variables: `{}`,
      response: {
        data: {
          posts: [
            {
              id: "1",
              title: "Getting Started with GraphQL",
              content: "GraphQL is a query language for APIs...",
              author: {
                id: "1",
                name: "John Smith"
              },
              comments: [
                {
                  id: "101",
                  text: "Great introduction to GraphQL!",
                  user: {
                    name: "Alice Johnson"
                  }
                },
                {
                  id: "102",
                  text: "This was very helpful, thanks!",
                  user: {
                    name: "Bob Williams"
                  }
                }
              ]
            },
            {
              id: "2",
              title: "Understanding Apollo Client",
              content: "Apollo Client is a comprehensive state management library...",
              author: {
                id: "1",
                name: "John Smith"
              },
              comments: []
            }
          ]
        }
      }
    }
  };
  
  const handleSelectQuery = (queryKey) => {
    setSelectedQuery(queryKey);
    const selectedQueryData = predefinedQueries[queryKey];
    setQuery(selectedQueryData.query);
    setVariables(selectedQueryData.variables);
  };

  // Initialize with the first query
  React.useEffect(() => {
    const selectedQueryData = predefinedQueries[selectedQuery];
    setQuery(selectedQueryData.query);
    setVariables(selectedQueryData.variables);
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
              <pre>{JSON.stringify(predefinedQueries[selectedQuery].response, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphQLTest; 