import React, { useState, useEffect } from 'react';
import './WhatsApp.css';

const WhatsApp = () => {
  // Sample user data - in a real app, this would come from props or an API
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // State for the personalized message template
  const [messageTemplate, setMessageTemplate] = useState(
    'Hello {name}, this is a personalized message for you!'
  );

  // Batch sending state
  const [isSending, setIsSending] = useState(false);
  const [currentBatch, setCurrentBatch] = useState(0);
  const [batchSize] = useState(10); // Number of messages to send at once
  const [completedCount, setCompletedCount] = useState(0);
  const [paused, setPaused] = useState(false);

  // Load users (simulating API call)
  useEffect(() => {
    // In a real app, you would fetch this from your API
    const loadUsers = async () => {
      setIsLoading(true);
      // Simulate generating 200 users
      const mockUsers = Array.from({ length: 200 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        number: `12345678${String(i).padStart(3, '0')}`,
        messageSent: false
      }));
      setUsers(mockUsers);
      setIsLoading(false);
    };
    
    loadUsers();
  }, []);

  // Process a batch of messages
  const processBatch = () => {
    if (paused || currentBatch * batchSize >= users.length) {
      setIsSending(false);
      return;
    }

    const startIdx = currentBatch * batchSize;
    const endIdx = Math.min(startIdx + batchSize, users.length);
    const batchUsers = users.slice(startIdx, endIdx);

    batchUsers.forEach((user, index) => {
      if (!user.messageSent) {
        setTimeout(() => {
          const personalizedMessage = messageTemplate.replace(/{name}/g, user.name);
          const encodedMessage = encodeURIComponent(personalizedMessage);
          const whatsappUrl = `https://wa.me/${user.number}?text=${encodedMessage}`;
          
          window.open(whatsappUrl, '_blank');
          
          setUsers(prevUsers => 
            prevUsers.map(u => 
              u.id === user.id ? {...u, messageSent: true} : u
            )
          );
          setCompletedCount(prev => prev + 1);
        }, index * 1000); // 1 second delay between each in batch
      }
    });

    setCurrentBatch(prev => prev + 1);
  };

  // Effect to handle batch processing
  useEffect(() => {
    if (isSending && !paused) {
      const batchTimer = setTimeout(processBatch, batchSize * 1000 + 2000); // Wait for current batch to finish
      return () => clearTimeout(batchTimer);
    }
  }, [isSending, currentBatch, paused]);

  const startSending = () => {
    setIsSending(true);
    setPaused(false);
  };

  const pauseSending = () => {
    setPaused(true);
  };

  const resumeSending = () => {
    setPaused(false);
    if (!isSending) setIsSending(true);
  };

  const resetSending = () => {
    setIsSending(false);
    setCurrentBatch(0);
    setPaused(false);
  };

  const pendingCount = users.filter(user => !user.messageSent).length;
  const progress = users.length > 0 ? Math.round((completedCount / users.length) * 100) : 0;

  return (
    <div className="whatsapp-container">
      <h1>WhatsApp Bulk Message Sender</h1>
      
      <div className="message-template">
        <label htmlFor="messageTemplate">Message Template:</label>
        <textarea
          id="messageTemplate"
          value={messageTemplate}
          onChange={(e) => setMessageTemplate(e.target.value)}
          placeholder="Enter your message template. Use {name} for the user's name."
        />
      </div>
      
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div className="progress-text">
          {completedCount} of {users.length} sent ({progress}%)
        </div>
      </div>
      
      <div className="bulk-actions">
        {!isSending ? (
          <button 
            onClick={startSending}
            disabled={pendingCount === 0 || isLoading}
          >
            {isLoading ? 'Loading Users...' : `Start Sending (${pendingCount} remaining)`}
          </button>
        ) : (
          <>
            {paused ? (
              <button onClick={resumeSending} className="resume-btn">
                Resume Sending
              </button>
            ) : (
              <button onClick={pauseSending} className="pause-btn">
                Pause Sending
              </button>
            )}
            <button onClick={resetSending} className="reset-btn">
              Reset
            </button>
          </>
        )}
      </div>
      
      <div className="batch-info">
        Current Batch: {Math.min(currentBatch * batchSize + 1, users.length)}-
        {Math.min((currentBatch + 1) * batchSize, users.length)} of {users.length}
      </div>
      
      {!isLoading && (
        <div className="users-summary">
          <span className="sent-count">{users.length - pendingCount} sent</span>
          <span className="pending-count">{pendingCount} pending</span>
        </div>
      )}
    </div>
  );
};

export default WhatsApp;