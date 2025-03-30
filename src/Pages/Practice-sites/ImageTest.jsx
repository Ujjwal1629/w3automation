import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../Components/Navbar';

const ImageTest = () => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const contextMenuRef = useRef(null);

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
    const imageUrl = image.src;

    switch(action) {
      case 'view':
        // Open image in full screen
        const fullScreenWindow = window.open(imageUrl, '_blank');
        if (fullScreenWindow) {
          fullScreenWindow.focus();
        }
        break;

      case 'save':
        try {
          // Fetch the image and create a download link
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'image.jpg'; // You can customize the filename
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
          // Copy image to clipboard
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          await navigator.clipboard.write([
            new ClipboardItem({
              [blob.type]: blob
            })
          ]);
          alert('Image copied to clipboard!');
        } catch (error) {
          console.error('Error copying image:', error);
          alert('Failed to copy image. Please try again.');
        }
        break;

      case 'edit':
        // Open image in a new tab with basic editing capabilities
        const editWindow = window.open(`https://pixlr.com/e/?image=${encodeURIComponent(imageUrl)}`, '_blank');
        if (editWindow) {
          editWindow.focus();
        }
        break;

      case 'share':
        if (navigator.share) {
          try {
            // Fetch the image and convert to blob
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
            
            await navigator.share({
              title: 'Shared Image',
              text: 'Check out this image!',
              files: [file]
            });
          } catch (error) {
            console.error('Error sharing image:', error);
            alert('Failed to share image. Please try again.');
          }
        } else {
          // Fallback for browsers that don't support Web Share API
          const shareUrl = window.location.href;
          await navigator.clipboard.writeText(shareUrl);
          alert('Link copied to clipboard! Share this link with others.');
        }
        break;

      default:
        break;
    }
    setShowContextMenu(false);
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
            src="/src/assets/test.jpeg" 
            alt="Test Image"
            onContextMenu={handleImageContextMenu}
            className="test-image"
          />
          <p className="image-caption">Right-click on this image to test the custom context menu</p>
        </div>

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
      `}</style>
    </>
  );
};

export default ImageTest;