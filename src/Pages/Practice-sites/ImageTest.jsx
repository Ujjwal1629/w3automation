import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../Components/Navbar';

const ImageTest = () => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [showEditor, setShowEditor] = useState(false);
  const [editedImage, setEditedImage] = useState(null);
  const contextMenuRef = useRef(null);
  const canvasRef = useRef(null);
  const [editorSettings, setEditorSettings] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    rotation: 0
  });

  // Handle click outside to close context menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
        setShowContextMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle right-click on image
  const handleImageContextMenu = (e) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };

  // Handle menu item clicks
  const handleMenuItemClick = async (action) => {
    const image = document.querySelector('.test-image');
    if (!image) {
      alert('Image not found!');
      return;
    }
    const imageUrl = image.src;
    const fileName = imageUrl.split('/').pop() || 'image.jpg';

    switch(action) {
      case 'view':
        // Open image in a more controlled way
        const viewWindow = window.open('', '_blank');
        if (viewWindow) {
          viewWindow.document.write(`
            <html>
              <head>
                <title>Full Size Image</title>
                <style>
                  body { margin: 0; background: #000; height: 100vh; display: flex; align-items: center; justify-content: center; }
                  img { max-width: 100%; max-height: 100vh; object-fit: contain; }
                </style>
              </head>
              <body>
                <img src="${imageUrl}" alt="Full Size Image"/>
              </body>
            </html>
          `);
        }
        break;

      case 'save':
        try {
          const response = await fetch(imageUrl);
          if (!response.ok) throw new Error('Failed to fetch image');
          
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        } catch (error) {
          console.error('Error saving image:', error);
          alert('Failed to save image. Please try again.');
        }
        break;

      case 'copy':
        try {
          const response = await fetch(imageUrl);
          if (!response.ok) throw new Error('Failed to fetch image');
          
          const blob = await response.blob();
          
          // Try modern clipboard API first
          if (navigator.clipboard?.write) {
            await navigator.clipboard.write([
              new ClipboardItem({
                [blob.type]: blob
              })
            ]);
          } else {
            // Fallback to creating a temporary canvas
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            img.onload = function() {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
              canvas.toBlob(async (blob) => {
                try {
                  await navigator.clipboard.write([
                    new ClipboardItem({
                      [blob.type]: blob
                    })
                  ]);
                  alert('Image copied to clipboard!');
                } catch (err) {
                  console.error('Fallback copy failed:', err);
                  alert('Could not copy image. Your browser may not support this feature.');
                }
              });
            };
            
            img.src = imageUrl;
          }
          alert('Image copied to clipboard!');
        } catch (error) {
          console.error('Error copying image:', error);
          alert('Failed to copy image. Your browser may not support this feature.');
        }
        break;

      case 'edit':
        setShowEditor(true);
        setShowContextMenu(false);
        break;

      case 'share':
        try {
          // Try Web Share API first
          if (navigator.share) {
            const response = await fetch(imageUrl);
            if (!response.ok) throw new Error('Failed to fetch image');
            
            const blob = await response.blob();
            const file = new File([blob], fileName, { type: blob.type });
            
            await navigator.share({
              title: 'Shared Image',
              text: 'Check out this image!',
              files: [file]
            });
          } else {
            // Fallback to copy link
            const shareUrl = window.location.href;
            await navigator.clipboard.writeText(shareUrl);
            alert('Link copied to clipboard! You can now share this link with others.');
          }
        } catch (error) {
          console.error('Error sharing image:', error);
          if (error.name === 'AbortError') {
            // User cancelled sharing
            return;
          }
          alert('Failed to share image. Copying link to clipboard instead...');
          try {
            await navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
          } catch (clipboardError) {
            alert('Could not share or copy link. Please try again.');
          }
        }
        break;

      default:
        break;
    }
  };

  const applyImageEffects = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();

    image.onload = () => {
      // Reset canvas and set proper dimensions
      canvas.width = image.width;
      canvas.height = image.height;
      
      // Save the context state
      ctx.save();
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply rotation
      if (editorSettings.rotation !== 0) {
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate((editorSettings.rotation * Math.PI) / 180);
        ctx.translate(-canvas.width/2, -canvas.height/2);
      }

      // Draw image
      ctx.drawImage(image, 0, 0);
      
      // Apply filters
      ctx.filter = `brightness(${editorSettings.brightness}%) contrast(${editorSettings.contrast}%) saturate(${editorSettings.saturation}%)`;
      ctx.drawImage(image, 0, 0);
      
      // Restore context
      ctx.restore();
    };

    image.src = editedImage || document.querySelector('.test-image').src;
  };

  const handleEditorChange = (setting, value) => {
    setEditorSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleSaveEdit = () => {
    const canvas = canvasRef.current;
    const editedImageUrl = canvas.toDataURL('image/jpeg', 0.8);
    setEditedImage(editedImageUrl);
    setShowEditor(false);

    // Optional: trigger download of edited image
    const a = document.createElement('a');
    a.href = editedImageUrl;
    a.download = 'edited-image.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <div className="image-test-page">
        <header className="test-header">
          <h1>Image Context Menu Testing</h1>
          <p>Right-click on the image to see a custom context menu</p>
        </header>

        <div className="image-container">
          <img 
            src="/test.jpeg" 
            alt="Test Image"
            onContextMenu={handleImageContextMenu}
            className="test-image"
          />
          <p className="image-caption">Right-click on this image to test the custom context menu</p>
        </div>

        {showEditor && (
          <div className="image-editor-overlay">
            <div className="image-editor-container">
              <h2>Image Editor</h2>
              <div className="editor-controls">
                <div className="control-group">
                  <label>Brightness</label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={editorSettings.brightness}
                    onChange={(e) => handleEditorChange('brightness', e.target.value)}
                    onMouseUp={applyImageEffects}
                  />
                </div>
                <div className="control-group">
                  <label>Contrast</label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={editorSettings.contrast}
                    onChange={(e) => handleEditorChange('contrast', e.target.value)}
                    onMouseUp={applyImageEffects}
                  />
                </div>
                <div className="control-group">
                  <label>Saturation</label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={editorSettings.saturation}
                    onChange={(e) => handleEditorChange('saturation', e.target.value)}
                    onMouseUp={applyImageEffects}
                  />
                </div>
                <div className="control-group">
                  <label>Rotation</label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={editorSettings.rotation}
                    onChange={(e) => handleEditorChange('rotation', e.target.value)}
                    onMouseUp={applyImageEffects}
                  />
                </div>
                <div className="editor-buttons">
                  <button onClick={handleSaveEdit}>Save</button>
                  <button onClick={() => setShowEditor(false)}>Cancel</button>
                </div>
              </div>
              <div className="canvas-container">
                <canvas ref={canvasRef} />
              </div>
            </div>
          </div>
        )}

        {showContextMenu && (
          <div 
            ref={contextMenuRef}
            className="custom-context-menu"
            style={{ 
              top: `${menuPosition.y}px`, 
              left: `${menuPosition.x}px`
            }}
          >
            <ul>
              <li onClick={() => handleMenuItemClick('view')}>
                <span className="menu-icon">🔍</span>
                <span>View Full Size</span>
              </li>
              <li onClick={() => handleMenuItemClick('save')}>
                <span className="menu-icon">💾</span>
                <span>Save Image</span>
              </li>
              <li onClick={() => handleMenuItemClick('copy')}>
                <span className="menu-icon">📋</span>
                <span>Copy Image</span>
              </li>
              <li onClick={() => handleMenuItemClick('edit')}>
                <span className="menu-icon">✏️</span>
                <span>Edit Image</span>
              </li>
              <li className="divider"></li>
              <li onClick={() => handleMenuItemClick('share')}>
                <span className="menu-icon">🔗</span>
                <span>Share Image</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      <style jsx>{`
        .image-test-page {
          padding: 2rem;
          background: linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .test-header {
          text-align: center;
          margin-bottom: 3rem;
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

        .image-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          max-width: 800px;
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .test-image {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          cursor: context-menu;
          transition: transform 0.3s ease;
        }

        .test-image:hover {
          transform: scale(1.01);
        }

        .image-caption {
          margin-top: 1rem;
          color: #64748b;
          font-size: 0.95rem;
          text-align: center;
        }

        .custom-context-menu {
          position: fixed;
          background: white;
          width: 220px;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 100;
          overflow: hidden;
          animation: fadeIn 0.15s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .custom-context-menu ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .custom-context-menu li {
          padding: 10px 15px;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .custom-context-menu li:hover {
          background-color: #f8fafc;
        }

        .menu-icon {
          margin-right: 10px;
          font-size: 1.1rem;
          width: 24px;
          text-align: center;
        }

        .divider {
          height: 1px;
          background-color: #e2e8f0;
          margin: 5px 0;
          padding: 0 !important;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .image-container {
            padding: 1.5rem;
          }
        }

        .image-editor-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .image-editor-container {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          width: 90%;
          max-width: 1200px;
          max-height: 90vh;
          overflow: auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .image-editor-container h2 {
          margin: 0;
          color: #1a1a1a;
          font-size: 1.5rem;
        }

        .editor-controls {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .control-group label {
          font-size: 0.9rem;
          color: #4a5568;
        }

        .control-group input[type="range"] {
          width: 100%;
        }

        .canvas-container {
          display: flex;
          justify-content: center;
          align-items: center;
          max-height: 60vh;
          overflow: auto;
        }

        canvas {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .editor-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .editor-buttons button {
          padding: 0.5rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .editor-buttons button:first-child {
          background: #3b82f6;
          color: white;
        }

        .editor-buttons button:first-child:hover {
          background: #2563eb;
        }

        .editor-buttons button:last-child {
          background: #e5e7eb;
          color: #4b5563;
        }

        .editor-buttons button:last-child:hover {
          background: #d1d5db;
        }
      `}</style>
    </>
  );
};

export default ImageTest;