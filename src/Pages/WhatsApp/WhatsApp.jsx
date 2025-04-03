import React, { useState, useEffect } from 'react';
import './WhatsApp.css';

const WhatsApp = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [messageTemplate, setMessageTemplate] = useState(
    'Hello {name}, this is a personalized message for you!'
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState('');

  // Load users (simulating API call)
  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      // Simulate 200 users
      const mockUsers = Array.from({ length: 200 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        number: `12345678${String(i).padStart(3, '0')}`,
        completed: false
      }));
      setUsers(mockUsers);
      setIsLoading(false);
    };
    loadUsers();
  }, []);

  const startProcess = () => {
    setCurrentIndex(0);
    setIsActive(true);
    prepareNextMessage();
  };

  const prepareNextMessage = () => {
    if (currentIndex >= users.length || !isActive) {
      setIsActive(false);
      return;
    }

    const user = users[currentIndex];
    const message = messageTemplate.replace(/{name}/g, user.name);
    setCopiedMessage(message);
    
    // Update UI to show current user
    setUsers(prevUsers => 
      prevUsers.map((u, idx) => 
        idx === currentIndex ? {...u, active: true} : {...u, active: false}
      )
    );
  };

  const handleMessageSent = () => {
    setUsers(prevUsers => 
      prevUsers.map((u, idx) => 
        idx === currentIndex ? {...u, completed: true, active: false} : u
      )
    );
    setCurrentIndex(prev => prev + 1);
    prepareNextMessage();
  };

  const generateWhatsAppLink = (number) => {
    const encodedMessage = encodeURIComponent(copiedMessage);
    return `https://wa.me/${number}?text=${encodedMessage}`;
  };

  const pauseProcess = () => {
    setIsActive(false);
  };

  const resumeProcess = () => {
    setIsActive(true);
    prepareNextMessage();
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
            <button onClick={startProcess} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Start Messaging'}
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