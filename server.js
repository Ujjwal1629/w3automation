const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Google Sheets
const initGoogleSheets = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: process.env.GOOGLE_TYPE || 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: process.env.GOOGLE_AUTH_URI,
      token_uri: process.env.GOOGLE_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_CERT_URL,
      client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
};

// Initialize Nodemailer (optional)
const initEmailTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    return null;
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });
};

// API endpoint
app.post('/api/saveUserGoogleSheet', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      whatsappNumber,
      email,
      country,
      experience,
      queries
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !whatsappNumber) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Get timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Prepare data
    const rowData = [
      firstName,
      lastName,
      whatsappNumber,
      email,
      country || '',
      experience || '',
      queries || '',
      timestamp
    ];

    // Save to Google Sheets
    console.log('Saving to Google Sheets...');
    const sheets = await initGoogleSheets();
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:H',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [rowData]
      }
    });

    console.log('Data saved successfully:', appendResponse.data.updates);

    // Send email (optional)
    let emailSent = false;
    const transporter = initEmailTransporter();
    if (transporter) {
      try {
        const sheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}`;
        await transporter.sendMail({
          from: {
            name: 'Enrollment System',
            address: process.env.EMAIL_USER
          },
          to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
          subject: 'New Enrollment Received',
          html: `
            <h2>New Student Enrollment</h2>
            <ul>
              <li>Name: ${firstName} ${lastName}</li>
              <li>Email: ${email}</li>
              <li>WhatsApp: ${whatsappNumber}</li>
              <li>Country: ${country}</li>
              <li>Experience: ${experience}</li>
              <li>Queries: ${queries}</li>
            </ul>
            <p><a href="${sheetUrl}">View in Google Sheets</a></p>
          `
        });
        emailSent = true;
        console.log('Email sent successfully');
      } catch (emailError) {
        console.log('Email not sent:', emailError.message);
      }
    }

    // Success response
    res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      data: {
        timestamp,
        email,
        sheetUpdated: true,
        emailSent,
        updatedRange: appendResponse.data.updates?.updatedRange
      }
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to save data',
      error: error.message
    });
  }
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Server is running',
    hasGoogleCreds: !!process.env.GOOGLE_CLIENT_EMAIL,
    hasSpreadsheetId: !!process.env.GOOGLE_SPREADSHEET_ID
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Test the API at http://localhost:${PORT}/api/test`);
});