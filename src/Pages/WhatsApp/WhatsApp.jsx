import React, { useState, useEffect } from 'react';
import './WhatsApp.css';

const WhatsApp = () => {
  // Sample user data - in a real app, this would come from props or an API
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', number: '1234567890', messageSent: false },
    { id: 2, name: 'Jane Smith', number: '9876543210', messageSent: false },
    { id: 3, name: 'Bob Johnson', number: '5551234567', messageSent: false }
  ]);

  // State for the personalized message template
  const [messageTemplate, setMessageTemplate] = useState(
    'Hello {name}, this is a personalized message for you!'
  );

  // Function to handle sending the message
  const sendWhatsAppMessage = (user) => {
    // Replace {name} placeholder with the actual user's name
    const personalizedMessage = messageTemplate.replace(/{name}/g, user.name);
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(personalizedMessage);
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${user.number}?text=${encodedMessage}`;
    
    // Open the URL in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Update the user's messageSent status (in a real app, you might want to save this to a database)
    setUsers(users.map(u => 
      u.id === user.id ? {...u, messageSent: true} : u
    ));
  };

  // Function to handle message template change
  const handleTemplateChange = (e) => {
    setMessageTemplate(e.target.value);
  };

  return (
    <div className="whatsapp-container">
      <h1>WhatsApp Message Sender</h1>
      
      <div className="message-template">
        <label htmlFor="messageTemplate">Message Template:</label>
        <textarea
          id="messageTemplate"
          value={messageTemplate}
          onChange={handleTemplateChange}
          placeholder="Enter your message template. Use {name} for the user's name."
        />
      </div>
      
      <div className="users-list">
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.number}</td>
                <td>
                  {user.messageSent ? (
                    <span className="status sent">Sent</span>
                  ) : (
                    <span className="status pending">Pending</span>
                  )}
                </td>
                <td>
                  <button 
                    onClick={() => sendWhatsAppMessage(user)}
                    disabled={user.messageSent}
                  >
                    {user.messageSent ? 'Message Sent' : 'Send Message'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WhatsApp;