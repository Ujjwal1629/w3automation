import React, { useState, useEffect } from 'react';
import './WhatsApp.css';

const WhatsApp = () => {
  // Test data matching your API structure
  const testData = {
    data: [
      ["101", "Bastard", "6388574174", "email@example.com"],
      ["102", "Mum", "6393841758", "email@example.com"],
      ["103", "Dad", "7505497194", "email@example.com"]
    ]
  };

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [messageTemplate, setMessageTemplate] = useState(
    'Hello {name}, this is a personalized message for you!'
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState('');

  // Load users data
  useEffect(() => {
    const loadData = () => {
      setIsLoading(true);
      
      // Simulate API call with timeout
      setTimeout(() => {
        const formattedUsers = testData.data.map(user => ({
          id: user[0],
          name: user[1],
          number: user[2],
          completed: false,
          active: false
        }));
        
        setUsers(formattedUsers);
        setIsLoading(false);
        console.log('Users loaded:', formattedUsers);
      }, 1000);
    };

    loadData();
  }, []);

  // Handle the messaging process
  useEffect(() => {
    if (isActive && currentIndex < users.length) {
      prepareNextMessage();
    }
  }, [isActive, currentIndex, users.length]);

  const startProcess = () => {
    console.log('Start process clicked');
    
    // Reset all users to inactive
    setUsers(prevUsers => 
      prevUsers.map(u => ({ ...u, active: false }))
    );
    
    setCurrentIndex(0);
    setIsActive(true);
  };

  const prepareNextMessage = () => {
    const user = users[currentIndex];
    console.log('Processing user:', user);

    const message = messageTemplate.replace(/{name}/g, user.name);
    console.log('Generated message:', message);

    setCopiedMessage(message);
    
    // Update UI to show current user
    setUsers(prevUsers => 
      prevUsers.map((u, idx) => 
        idx === currentIndex ? {...u, active: true} : {...u, active: false}
      )
    );
  };

  const handleMessageSent = () => {
    console.log('Marking message as sent for user:', users[currentIndex].name);

    setUsers(prevUsers => 
      prevUsers.map((u, idx) => 
        idx === currentIndex ? {...u, completed: true, active: false} : u
      )
    );
    
    // Move to next user or end the process
    if (currentIndex < users.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsActive(false);
      console.log('All messages sent!');
    }
  };

  const generateWhatsAppLink = (number) => {
    // Ensure number is in international format (remove leading 0 if present)
    const formattedNumber = number.startsWith('0') ? number.substring(1) : number;
    const encodedMessage = encodeURIComponent(copiedMessage);
    return `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
  };

  const pauseProcess = () => {
    setIsActive(false);
  };

  const resumeProcess = () => {
    setIsActive(true);
  };

  const pendingCount = users.filter(u => !u.completed).length;
  const completedCount = users.length - pendingCount;
  const progress = users.length > 0 ? Math.round((completedCount / users.length) * 100) : 0;

  return (
    <div className="whatsapp-container">
      <h1>WhatsApp Message Sequence</h1>
      
      <div className="message-template">
        <label>Message Template:</label>
        <textarea
          value={messageTemplate}
          onChange={(e) => setMessageTemplate(e.target.value)}
          placeholder="Use {name} for the user's name"
        />
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div className="progress-text">
          {completedCount} of {users.length} ({progress}%)
        </div>
      </div>

      {!isActive ? (
        <div className="control-buttons">
          {completedCount === 0 ? (
            <button onClick={startProcess} disabled={isLoading || users.length === 0}>
              {isLoading ? 'Loading Users...' : 'Start Messaging'}
            </button>
          ) : (
            <>
              {completedCount < users.length && (
                <button onClick={resumeProcess}>Resume</button>
              )}
              <button onClick={startProcess}>Restart</button>
            </>
          )}
        </div>
      ) : (
        <div className="current-message">
          <h3>Now sending to: {users[currentIndex]?.name}</h3>
          <div className="contact-info">
            <p><strong>Phone:</strong> {users[currentIndex]?.number}</p>
          </div>
          <div className="message-preview">
            <p>{copiedMessage}</p>
          </div>
          
          <div className="action-buttons">
            <a
              href={generateWhatsAppLink(users[currentIndex]?.number)}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
              onClick={handleMessageSent}
            >
              Open WhatsApp
            </a>
            <button onClick={pauseProcess} className="pause-button">
              Pause
            </button>
          </div>
        </div>
      )}

      <div className="user-status">
        <span className="completed">{completedCount} completed</span>
        <span className="pending">{pendingCount} remaining</span>
      </div>
    </div>
  );
};

export default WhatsApp;