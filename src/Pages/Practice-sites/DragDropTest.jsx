import React, { useState, useRef, useEffect } from 'react';

const DragDropTest = () => {
  // State for draggable items
  const [items, setItems] = useState([
    { id: 1, type: 'static', content: 'Static Item 1', color: '#3b82f6' },
    { id: 2, type: 'static', content: 'Static Item 2', color: '#8b5cf6' },
    { id: 3, type: 'static', content: 'Static Item 3', color: '#ec4899' },
    { id: 4, type: 'dynamic', content: 'Dynamic Item 1', color: '#f59e0b' },
    { id: 5, type: 'dynamic', content: 'Dynamic Item 2', color: '#10b981' }
  ]);
  
  // State for drop zones
  const [dropZones, setDropZones] = useState([
    { id: 'zone1', accepts: 'all', items: [], name: 'Drop Zone 1', color: '#e2e8f0' },
    { id: 'zone2', accepts: 'static', items: [], name: 'Static Only', color: '#f8fafc' },
    { id: 'zone3', accepts: 'dynamic', items: [], name: 'Dynamic Only', color: '#f1f5f9' }
  ]);
  
  // State for drag operation
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedSource, setDraggedSource] = useState(null);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  // Settings state
  const [snapToGrid, setSnapToGrid] = useState(false);
  const [gridSize, setGridSize] = useState(20);
  const [returnOnInvalid, setReturnOnInvalid] = useState(true);
  const [showGhost, setShowGhost] = useState(true);
  const [animateTransition, setAnimateTransition] = useState(true);
  
  // Refs
  const sourceContainerRef = useRef(null);
  const dragLayerRef = useRef(null);
  
  // Handle drag start
  const handleDragStart = (e, item, sourceType, sourceId = null) => {
    e.stopPropagation();
    
    // Get mouse position relative to the item
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    setDraggedItem(item);
    setDraggedSource({ type: sourceType, id: sourceId });
    setDragOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
    setDragPosition({ 
      x: e.clientX - offsetX, 
      y: e.clientY - offsetY 
    });
    
    // Add event listeners for move and up
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
  };
  
  // Handle drag move
  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    let x = e.clientX - dragOffset.x;
    let y = e.clientY - dragOffset.y;
    
    // Apply snap to grid if enabled
    if (snapToGrid) {
      x = Math.round(x / gridSize) * gridSize;
      y = Math.round(y / gridSize) * gridSize;
    }
    
    setDragPosition({ x, y });
  };
  
  // Handle drag end
  const handleDragEnd = (e) => {
    if (!isDragging) return;
    
    // Check if item is over a drop zone
    const droppedZone = getDroppedZone(e.clientX, e.clientY);
    
    if (droppedZone) {
      // Check if drop zone accepts this item type
      const canDrop = 
        droppedZone.accepts === 'all' || 
        droppedZone.accepts === draggedItem.type;
      
      if (canDrop) {
        handleValidDrop(droppedZone);
      } else if (returnOnInvalid) {
        // Return animation handled by cleanup
        showToast(`${draggedItem.content} cannot be dropped in ${droppedZone.name}`, 'warning');
      }
    } else if (returnOnInvalid) {
      // Return animation handled by cleanup
      showToast('Dropped outside valid zones', 'info');
    } else {
      // Remove from source
      removeFromSource();
    }
    
    // Clean up
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
    setIsDragging(false);
    setDraggedItem(null);
    setDraggedSource(null);
  };
  
  // Get drop zone element under pointer
  const getDroppedZone = (x, y) => {
    // Check each drop zone
    for (const zone of dropZones) {
      const element = document.getElementById(`dropzone-${zone.id}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (
          x >= rect.left && 
          x <= rect.right && 
          y >= rect.top && 
          y <= rect.bottom
        ) {
          return zone;
        }
      }
    }
    return null;
  };
  
  // Handle valid drop
  const handleValidDrop = (zone) => {
    // Remove from source
    removeFromSource();
    
    // Add to destination
    setDropZones(prev => 
      prev.map(dropZone => 
        dropZone.id === zone.id
          ? { ...dropZone, items: [...dropZone.items, draggedItem] }
          : dropZone
      )
    );
    
    showToast(`${draggedItem.content} dropped in ${zone.name}`, 'success');
  };
  
  // Remove item from source
  const removeFromSource = () => {
    if (draggedSource.type === 'source') {
      setItems(prev => 
        prev.filter(item => item.id !== draggedItem.id)
      );
    } else if (draggedSource.type === 'zone') {
      setDropZones(prev => 
        prev.map(zone => 
          zone.id === draggedSource.id
            ? { ...zone, items: zone.items.filter(item => item.id !== draggedItem.id) }
            : zone
        )
      );
    }
  };
  
  // Reset the test
  const handleReset = () => {
    setItems([
      { id: 1, type: 'static', content: 'Static Item 1', color: '#3b82f6' },
      { id: 2, type: 'static', content: 'Static Item 2', color: '#8b5cf6' },
      { id: 3, type: 'static', content: 'Static Item 3', color: '#ec4899' },
      { id: 4, type: 'dynamic', content: 'Dynamic Item 1', color: '#f59e0b' },
      { id: 5, type: 'dynamic', content: 'Dynamic Item 2', color: '#10b981' }
    ]);
    
    setDropZones(prev => 
      prev.map(zone => ({ ...zone, items: [] }))
    );
    
    showToast('Test reset successfully', 'info');
  };
  
  // Add new item
  const [newItemContent, setNewItemContent] = useState('');
  const [newItemType, setNewItemType] = useState('static');
  const [newItemColor, setNewItemColor] = useState('#6366f1');
  
  const handleAddItem = () => {
    if (!newItemContent.trim()) {
      showToast('Please enter content for the new item', 'warning');
      return;
    }
    
    const newItem = {
      id: Date.now(),
      type: newItemType,
      content: newItemContent,
      color: newItemColor
    };
    
    setItems(prev => [...prev, newItem]);
    setNewItemContent('');
    showToast(`New ${newItemType} item added`, 'success');
  };
  
  // Add drop zone
  const [newZoneName, setNewZoneName] = useState('');
  const [newZoneAccepts, setNewZoneAccepts] = useState('all');
  const [newZoneColor, setNewZoneColor] = useState('#e2e8f0');
  
  const handleAddDropZone = () => {
    if (!newZoneName.trim()) {
      showToast('Please enter a name for the drop zone', 'warning');
      return;
    }
    
    const newZone = {
      id: `zone${Date.now()}`,
      name: newZoneName,
      accepts: newZoneAccepts,
      items: [],
      color: newZoneColor
    };
    
    setDropZones(prev => [...prev, newZone]);
    setNewZoneName('');
    showToast('New drop zone added', 'success');
  };
  
  // Toast notification system
  const [toasts, setToasts] = useState([]);
  
  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };
  
  // Clean up event listeners
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
    };
  }, [isDragging]);
  
  // Show grid overlay if snap to grid is enabled
  const renderGridOverlay = () => {
    if (!snapToGrid) return null;
    
    return (
      <div className="grid-overlay" style={{ '--grid-size': `${gridSize}px` }}></div>
    );
  };

  return (
    <>
      <div className="drag-drop-test-page">
        <header className="test-header">
          <h1>Drag & Drop Testing</h1>
          <p>Test both static and dynamic drag & drop conditions</p>
        </header>
        
        {/* <div className="settings-panel">
          <div className="settings-group">
            <h3>Behavior Settings</h3>
            <label className="setting-option">
              <input
                type="checkbox"
                checked={snapToGrid}
                onChange={() => setSnapToGrid(!snapToGrid)}
              />
              <span>Snap to Grid</span>
            </label>
            
            {snapToGrid && (
              <label>
                Grid Size:
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={gridSize}
                  onChange={(e) => setGridSize(parseInt(e.target.value))}
                />
                <span>{gridSize}px</span>
              </label>
            )}
            
            <label className="setting-option">
              <input
                type="checkbox"
                checked={returnOnInvalid}
                onChange={() => setReturnOnInvalid(!returnOnInvalid)}
              />
              <span>Return to Source if Invalid Drop</span>
            </label>
            
            <label className="setting-option">
              <input
                type="checkbox"
                checked={showGhost}
                onChange={() => setShowGhost(!showGhost)}
              />
              <span>Show Ghost When Dragging</span>
            </label>
            
            <label className="setting-option">
              <input
                type="checkbox"
                checked={animateTransition}
                onChange={() => setAnimateTransition(!animateTransition)}
              />
              <span>Animate Transitions</span>
            </label>
          </div>
          
          <div className="settings-group">
            <h3>Add New Item</h3>
            <div className="input-group">
              <input
                type="text"
                placeholder="Item Content"
                value={newItemContent}
                onChange={(e) => setNewItemContent(e.target.value)}
              />
              
              <div className="select-color-group">
                <select
                  value={newItemType}
                  onChange={(e) => setNewItemType(e.target.value)}
                >
                  <option value="static">Static</option>
                  <option value="dynamic">Dynamic</option>
                </select>
                
                <input
                  type="color"
                  value={newItemColor}
                  onChange={(e) => setNewItemColor(e.target.value)}
                />
              </div>
              
              <button onClick={handleAddItem}>Add Item</button>
            </div>
          </div>
          
          <div className="settings-group">
            <h3>Add New Drop Zone</h3>
            <div className="input-group">
              <input
                type="text"
                placeholder="Zone Name"
                value={newZoneName}
                onChange={(e) => setNewZoneName(e.target.value)}
              />
              
              <div className="select-color-group">
                <select
                  value={newZoneAccepts}
                  onChange={(e) => setNewZoneAccepts(e.target.value)}
                >
                  <option value="all">Accept All</option>
                  <option value="static">Static Only</option>
                  <option value="dynamic">Dynamic Only</option>
                </select>
                
                <input
                  type="color"
                  value={newZoneColor}
                  onChange={(e) => setNewZoneColor(e.target.value)}
                />
              </div>
              
              <button onClick={handleAddDropZone}>Add Zone</button>
            </div>
          </div>
          
          <button className="reset-button" onClick={handleReset}>
            Reset Test
          </button>
        </div> */}
        
        <div className="test-container">
          {/* Source container */}
          <div className="sources-container" ref={sourceContainerRef}>
            <h3>Draggable Items</h3>
            <div className="items-container">
              {items.map(item => (
                <div
                  key={item.id}
                  className={`draggable-item ${item.type}`}
                  style={{ 
                    backgroundColor: item.color,
                    borderColor: item.type === 'static' ? '#1e40af' : '#047857',
                    cursor: 'grab',
                    transition: animateTransition ? 'transform 0.2s, opacity 0.2s' : 'none'
                  }}
                  onMouseDown={(e) => handleDragStart(e, item, 'source')}
                >
                  <span className="item-type-badge">{item.type}</span>
                  {item.content}
                </div>
              ))}
              {items.length === 0 && (
                <div className="empty-message">No items available</div>
              )}
            </div>
          </div>
          
          {/* Drop zones */}
          <div className="drop-zones-container">
            <h3>Drop Zones</h3>
            <div className="zones-grid">
              {dropZones.map(zone => (
                <div
                  key={zone.id}
                  id={`dropzone-${zone.id}`}
                  className={`drop-zone ${zone.accepts}`}
                  style={{ 
                    backgroundColor: zone.color,
                    borderColor: 
                      zone.accepts === 'all' ? '#64748b' : 
                      zone.accepts === 'static' ? '#1e40af' : '#047857',
                    transition: animateTransition ? 'background-color 0.2s' : 'none'
                  }}
                >
                  <h4>{zone.name}</h4>
                  <div className="zone-type">Accepts: {zone.accepts}</div>
                  
                  <div className="zone-items">
                    {zone.items.map(item => (
                      <div
                        key={item.id}
                        className={`draggable-item ${item.type}`}
                        style={{ 
                          backgroundColor: item.color,
                          borderColor: item.type === 'static' ? '#1e40af' : '#047857',
                          cursor: 'grab',
                          transition: animateTransition ? 'transform 0.2s, opacity 0.2s' : 'none'
                        }}
                        onMouseDown={(e) => handleDragStart(e, item, 'zone', zone.id)}
                      >
                        <span className="item-type-badge">{item.type}</span>
                        {item.content}
                      </div>
                    ))}
                    {zone.items.length === 0 && (
                      <div className="empty-message">Drop items here</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Grid overlay */}
        {renderGridOverlay()}
        
        {/* Dragging layer */}
        {isDragging && draggedItem && (
          <div
            ref={dragLayerRef}
            className="drag-layer"
            style={{
              left: `${dragPosition.x}px`,
              top: `${dragPosition.y}px`,
              pointerEvents: 'none',
              zIndex: 1000
            }}
          >
            <div
              className={`draggable-item ${draggedItem.type}`}
              style={{ 
                backgroundColor: draggedItem.color,
                borderColor: draggedItem.type === 'static' ? '#1e40af' : '#047857',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                transform: 'scale(1.05)',
                opacity: 0.9
              }}
            >
              <span className="item-type-badge">{draggedItem.type}</span>
              {draggedItem.content}
            </div>
          </div>
        )}
        
        {/* Ghost element at source */}
        {isDragging && draggedItem && showGhost && (
          <div className="ghost-placeholder"></div>
        )}
        
        {/* Toast notifications */}
        <div className="toast-container">
          {toasts.map(toast => (
            <div key={toast.id} className={`toast ${toast.type}`}>
              {toast.message}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .drag-drop-test-page {
          padding: 2rem;
          background: linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          position: relative;
        }

        .test-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .test-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .test-header p {
          font-size: 1.2rem;
          color: #64748b;
        }

        .settings-panel {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto 2rem;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .settings-group {
          flex: 1;
          min-width: 250px;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 8px;
        }

        .settings-group h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          color: #334155;
          font-size: 1.2rem;
        }

        .setting-option {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .setting-option input[type="checkbox"] {
          margin-right: 10px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .input-group input[type="text"] {
          padding: 8px;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
        }

        .select-color-group {
          display: flex;
          gap: 8px;
        }

        .select-color-group select {
          flex: 1;
          padding: 8px;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
        }

        .input-group button,
        .reset-button {
          padding: 8px 16px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .input-group button:hover,
        .reset-button:hover {
          background: #2563eb;
        }

        .reset-button {
          width: 100%;
          margin-top: 1rem;
          background: #ef4444;
        }

        .reset-button:hover {
          background: #dc2626;
        }

        .test-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .sources-container,
        .drop-zones-container {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .sources-container h3,
        .drop-zones-container h3 {
          color: #334155;
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.3rem;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.5rem;
        }

        .items-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          min-height: 100px;
        }

        .draggable-item {
          position: relative;
          padding: 12px 16px;
          border-radius: 6px;
          border: 2px solid;
          color: white;
          font-weight: 500;
          cursor: grab;
          user-select: none;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .draggable-item:active {
          cursor: grabbing;
        }

        .item-type-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: white;
          color: #334155;
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 12px;
          border: 1px solid #cbd5e1;
        }

        .zones-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }

        .drop-zone {
          border: 2px dashed;
          border-radius: 8px;
          padding: 1rem;
          min-height: 200px;
          display: flex;
          flex-direction: column;
        }

        .drop-zone h4 {
          margin-top: 0;
          margin-bottom: 4px;
          color: #334155;
        }

        .zone-type {
          font-size: 0.85rem;
          color: #64748b;
          margin-bottom: 12px;
        }

        .zone-items {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 0.5rem;
          min-height: 100px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.5);
        }

        .empty-message {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #94a3b8;
          font-style: italic;
        }

        .drag-layer {
          position: fixed;
          pointer-events: none;
          z-index: 1000;
        }

        .grid-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: var(--grid-size) var(--grid-size);
          pointer-events: none;
          z-index: 0;
        }

        .toast-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 2000;
        }

        .toast {
          padding: 12px 20px;
          border-radius: 6px;
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          animation: slideIn 0.3s ease, fadeOut 0.5s ease 2.5s forwards;
          max-width: 300px;
        }

        .toast.success {
          background: #10b981;
        }

        .toast.info {
          background: #3b82f6;
        }

        .toast.warning {
          background: #f59e0b;
        }

        .toast.error {
          background: #ef4444;
        }

        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @media (max-width: 768px) {
          .test-container {
            grid-template-columns: 1fr;
          }
          
          .settings-panel {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default DragDropTest;