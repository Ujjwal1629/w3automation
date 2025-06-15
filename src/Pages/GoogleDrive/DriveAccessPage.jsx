import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

// Folder map (update with real IDs)
const folderLinks = {
  Dec: 'https://drive.google.com/drive/folders/YOUR_DEC_FOLDER_ID',
  Jan: 'https://drive.google.com/drive/folders/YOUR_JAN_FOLDER_ID',
};

const DriveAccessPage = () => {
  const [folderName, setFolderName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
  const checkUserAccess = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.warn('No token found in localStorage');
      setLoading(false);
      return;
    }

    let email = null;
    try {
      const decoded = jwtDecode(token);
      console.log('Decoded token:', decoded);

      email = decoded.email;
      if (!email) {
        console.warn('Email not found in decoded token');
        setLoading(false);
        return;
      }

      setUserEmail(email);
    } catch (err) {
      console.error('Failed to decode token:', err);
      setLoading(false);
      return;
    }

    try {
      const spreadsheetId = 'your_id'; // replace with your actual spreadsheet ID
      const range = 'Sheet1!A1:E100';

      const response = await axios.get(
        'https://w3-backend-salvatores-projects-9d7f38e8.vercel.app/api/getUserGoogleSheet',
        { params: { spreadsheetId, range } }
      );

      const rows = response.data?.data || [];
      console.log('Fetched rows:', rows);

      const matchedRow = rows.find(row => row[2] === email && row[3] === 'Y');

      if (matchedRow) {
        console.log('Matched row:', matchedRow);
        setFolderName(matchedRow[4]); // e.g., 'Dec'
      } else {
        console.log('No matching row found for email:', email);
      }
    } catch (err) {
      console.error('Error fetching user access from spreadsheet:', err);
    } finally {
      setLoading(false);
    }
  };

  checkUserAccess();
}, []);


  return (
    <div style={{ padding: '2rem' }}>
      <h1>Google Drive Access</h1>
      {loading ? (
        <p>Checking access...</p>
      ) : folderName && folderLinks[folderName] ? (
        <div>
          <p>Email: <strong>{userEmail}</strong></p>
          <p>You have access to <strong>{folderName}</strong> folder.</p>
          <a
            href={folderLinks[folderName]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Access Google Drive Folder
          </a>
        </div>
      ) : (
        <p>No access to any folders.</p>
      )}
    </div>
  );
};

export default DriveAccessPage;