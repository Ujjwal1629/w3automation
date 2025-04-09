import React, { useState, useRef, useEffect } from 'react';

const ResizableDiv = () => {
  const [size, setSize] = useState({ width: 400, height: 300 });
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isResizing, setIsResizing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [resizeHandle, setResizeHandle] = useState(null);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [startSize, setStartSize] = useState({ width: 0, height: 0 });
  const [showDimensions, setShowDimensions] = useState(true);
  const [bgColor, setBgColor] = useState('#e2e8f0');
  const [borderStyle, setBorderStyle] = useState('solid');
  const [borderWidth, setBorderWidth] = useState(1);
  const [borderColor, setBorderColor] = useState('#94a3b8');
  const [borderRadius, setBorderRadius] = useState(8);
  
  const divRef = useRef(null);
  const MIN_SIZE = 50;

  // Handle mouse down on resize handles
  const handleResizeStart = (e, handle) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setResizeHandle(handle);
    setStartPos({ x: e.clientX, y: e.clientY });
    setStartSize({ width: size.width, height: size.height });
    
    // Add event listeners for mouse move and up
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleResizeEnd);
  };

  // Handle mouse move during resize
  const handleResize = (e) => {
    if (!isResizing) return;
    
    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;
    
    let newWidth = startSize.width;
    let newHeight = startSize.height;
    let newX = position.x;
    let newY = position.y;
    
    // Calculate new size based on which handle is being dragged
    switch (resizeHandle) {
      case 'right':
        newWidth = Math.max(MIN_SIZE, startSize.width + deltaX);
        break;
      case 'bottom':
        newHeight = Math.max(MIN_SIZE, startSize.height + deltaY);
        break;
      case 'left':
        newWidth = Math.max(MIN_SIZE, startSize.width - deltaX);
        newX = position.x + (startSize.width - newWidth);
        break;
      case 'top':
        newHeight = Math.max(MIN_SIZE, startSize.height - deltaY);
        newY = position.y + (startSize.height - newHeight);
        break;
      case 'top-left':
        newWidth = Math.max(MIN_SIZE, startSize.width - deltaX);
        newHeight = Math.max(MIN_SIZE, startSize.height - deltaY);
        newX = position.x + (startSize.width - newWidth);
        newY = position.y + (startSize.height - newHeight);
        break;
      case 'top-right':
        newWidth = Math.max(MIN_SIZE, startSize.width + deltaX);
        newHeight = Math.max(MIN_SIZE, startSize.height - deltaY);
        newY = position.y + (startSize.height - newHeight);
        break;
      case 'bottom-left':
        newWidth = Math.max(MIN_SIZE, startSize.width - deltaX);
        newHeight = Math.max(MIN_SIZE, startSize.height + deltaY);
        newX = position.x + (startSize.width - newWidth);
        break;
      case 'bottom-right':
        newWidth = Math.max(MIN_SIZE, startSize.width + deltaX);
        newHeight = Math.max(MIN_SIZE, startSize.height + deltaY);
        break;
      default:
        break;
    }
    
    setSize({ width: newWidth, height: newHeight });
    setPosition({ x: newX, y: newY });
  };

  // Clean up event listeners when resize ends
  const handleResizeEnd = () => {
    setIsResizing(false);
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', handleResizeEnd);
  };

  // Handle dragging the entire div
  const handleDragStart = (e) => {
    if (e.target !== divRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    
    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;
    
    // Make sure div stays within visible area
    const maxX = window.innerWidth - size.width;
    const maxY = window.innerHeight - size.height;
    
    setPosition({
      x: Math.max(0, Math.min(maxX, newX)),
      y: Math.max(0, Math.min(maxY, newY))
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);
  };

  // Reset to default size and position
  const handleReset = () => {
    setSize({ width: 400, height: 300 });
    setPosition({ x: 100, y: 100 });
  };

  // Toggle dimensions display
  const toggleDimensions = () => {
    setShowDimensions(!showDimensions);
  };

  // Clean up event listeners on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', handleResizeEnd);
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
    };
  }, [isResizing, isDragging]);

  // Cursor styles for resize handles
  const getCursorStyle = (handle) => {
    switch (handle) {
      case 'top':
      case 'bottom':
        return 'ns-resize';
      case 'left':
      case 'right':
        return 'ew-resize';
      case 'top-left':
      case 'bottom-right':
        return 'nwse-resize';
      case 'top-right':
      case 'bottom-left':
        return 'nesw-resize';
      default:
        return 'move';
    }
  };

  return (
    <>
      <div className="resizable-test-page">
        <header className="test-header">
          <h1>Resizable Div Testing</h1>
          <p>Drag the corners and edges to resize the box</p>
        </header>

        <div className="controls-panel">
          <div className="control-group">
            <h3>Box Properties</h3>
            <label>
              Width:
              <input
                type="number"
                min={MIN_SIZE}
                value={size.width}
                onChange={(e) => setSize({ ...size, width: Math.max(MIN_SIZE, parseInt(e.target.value) || MIN_SIZE) })}
              />
            </label>
            <label>
              Height:
              <input
                type="number"
                min={MIN_SIZE}
                value={size.height}
                onChange={(e) => setSize({ ...size, height: Math.max(MIN_SIZE, parseInt(e.target.value) || MIN_SIZE) })}
              />
            </label>
            <label>
              Background Color:
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
              />
            </label>
          </div>

          <div className="control-group">
            <h3>Border Properties</h3>
            <label>
              Border Style:
              <select
                value={borderStyle}
                onChange={(e) => setBorderStyle(e.target.value)}
              >
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
                <option value="none">None</option>
              </select>
            </label>
            <label>
              Border Width:
              <input
                type="number"
                min="0"
                max="20"
                value={borderWidth}
                onChange={(e) => setBorderWidth(parseInt(e.target.value) || 0)}
              />
            </label>
            <label>
              Border Color:
              <input
                type="color"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
              />
            </label>
            <label>
              Border Radius:
              <input
                type="number"
                min="0"
                max="50"
                value={borderRadius}
                onChange={(e) => setBorderRadius(parseInt(e.target.value) || 0)}
              />
            </label>
          </div>

          <div className="control-group">
            <h3>Options</h3>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showDimensions}
                onChange={toggleDimensions}
              />
              Show Dimensions
            </label>
            <button className="reset-button" onClick={handleReset}>
              Reset Size & Position
            </button>
          </div>
        </div>

        <div className="workspace">
          <div
            ref={divRef}
            className="resizable-div"
            style={{
              width: `${size.width}px`,
              height: `${size.height}px`,
              left: `${position.x}px`,
              top: `${position.y}px`,
              backgroundColor: bgColor,
              borderStyle: borderStyle,
              borderWidth: `${borderWidth}px`,
              borderColor: borderColor,
              borderRadius: `${borderRadius}px`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleDragStart}
          >
            {showDimensions && (
              <div className="dimensions-display">
                {size.width} × {size.height}
              </div>
            )}

            {/* Resize handles */}
            <div 
              className="resize-handle top"
              style={{ cursor: getCursorStyle('top') }}
              onMouseDown={(e) => handleResizeStart(e, 'top')}
            ></div>
            <div 
              className="resize-handle right"
              style={{ cursor: getCursorStyle('right') }}
              onMouseDown={(e) => handleResizeStart(e, 'right')}
            ></div>
            <div 
              className="resize-handle bottom"
              style={{ cursor: getCursorStyle('bottom') }}
              onMouseDown={(e) => handleResizeStart(e, 'bottom')}
            ></div>
            <div 
              className="resize-handle left"
              style={{ cursor: getCursorStyle('left') }}
              onMouseDown={(e) => handleResizeStart(e, 'left')}
            ></div>
            
            {/* Corner handles */}
            <div 
              className="resize-handle top-left"
              style={{ cursor: getCursorStyle('top-left') }}
              onMouseDown={(e) => handleResizeStart(e, 'top-left')}
            ></div>
            <div 
              className="resize-handle top-right"
              style={{ cursor: getCursorStyle('top-right') }}
              onMouseDown={(e) => handleResizeStart(e, 'top-right')}
            ></div>
            <div 
              className="resize-handle bottom-left"
              style={{ cursor: getCursorStyle('bottom-left') }}
              onMouseDown={(e) => handleResizeStart(e, 'bottom-left')}
            ></div>
            <div 
              className="resize-handle bottom-right"
              style={{ cursor: getCursorStyle('bottom-right') }}
              onMouseDown={(e) => handleResizeStart(e, 'bottom-right')}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .resizable-test-page {
          padding: 2rem;
          background: linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
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

        .controls-panel {
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

        .control-group {
          flex: 1;
          min-width: 250px;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 8px;
        }

        .control-group h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          color: #334155;
          font-size: 1.2rem;
        }

        .control-group label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          color: #475569;
          font-size: 0.95rem;
        }

        .control-group input[type="number"],
        .control-group input[type="color"],
        .control-group select {
          width: 100px;
          padding: 6px;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          margin-left: 10px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
        }

        .checkbox-label input {
          margin-right: 10px;
          width: auto;
        }

        .reset-button {
          width: 100%;
          padding: 8px;
          margin-top: 12px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .reset-button:hover {
          background: #2563eb;
        }

        .workspace {
          position: relative;
          width: 100%;
          height: 60vh;
          min-height: 400px;
          background-color: #f1f5f9;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.05);
        }

        .resizable-div {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          user-select: none;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.2s ease;
        }

        .resizable-div:hover {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }

        .dimensions-display {
          font-size: 1rem;
          color: #475569;
          background-color: rgba(255, 255, 255, 0.7);
          padding: 5px 10px;
          border-radius: 4px;
          pointer-events: none;
        }

        .resize-handle {
          position: absolute;
          background-color: rgba(59, 130, 246, 0.5);
          z-index: 2;
        }

        .resize-handle:hover {
          background-color: rgba(59, 130, 246, 0.8);
        }

        .resize-handle.top,
        .resize-handle.bottom {
          height: 8px;
          left: 8px;
          right: 8px;
        }

        .resize-handle.left,
        .resize-handle.right {
          width: 8px;
          top: 8px;
          bottom: 8px;
        }

        .resize-handle.top {
          top: 0;
        }

        .resize-handle.right {
          right: 0;
        }

        .resize-handle.bottom {
          bottom: 0;
        }

        .resize-handle.left {
          left: 0;
        }

        .resize-handle.top-left,
        .resize-handle.top-right,
        .resize-handle.bottom-left,
        .resize-handle.bottom-right {
          width: 16px;
          height: 16px;
          background-color: rgba(59, 130, 246, 0.7);
          border-radius: 50%;
        }

        .resize-handle.top-left {
          top: -8px;
          left: -8px;
        }

        .resize-handle.top-right {
          top: -8px;
          right: -8px;
        }

        .resize-handle.bottom-left {
          bottom: -8px;
          left: -8px;
        }

        .resize-handle.bottom-right {
          bottom: -8px;
          right: -8px;
        }

        @media (max-width: 768px) {
          .controls-panel {
            flex-direction: column;
          }
          
          .control-group {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default ResizableDiv;