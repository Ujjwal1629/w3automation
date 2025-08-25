const { google } = require('googleapis');
const nodemailer = require('nodemailer');

// Initialize Google Sheets API
const initGoogleSheets = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: process.env.GOOGLE_TYPE,
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

// Initialize Nodemailer transporter
const initEmailTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });
};

// Format email body
const formatEmailBody = (formData, sheetUrl) => {
  return `
    <h2>New Student Enrollment Received</h2>
    <hr>
    <p><strong>Student Details:</strong></p>
    <ul>
      <li><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</li>
      <li><strong>Email:</strong> ${formData.email}</li>
      <li><strong>WhatsApp:</strong> ${formData.whatsappNumber}</li>
      <li><strong>Country:</strong> ${formData.country}</li>
      <li><strong>Experience:</strong> ${formData.experience}</li>
      <li><strong>Queries:</strong> ${formData.queries || 'None'}</li>
      <li><strong>Registered at:</strong> ${formData.timestamp}</li>
    </ul>
    <hr>
    <p><a href="${sheetUrl}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">View in Google Sheets</a></p>
  `;
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    // Extract form data
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

    // Get current timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Prepare data for Google Sheets
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

    // Initialize Google Sheets
    console.log('Initializing Google Sheets connection...');
    const sheets = await initGoogleSheets();
    
    // Append data to sheet
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const range = 'Sheet1!A:H';
    
    console.log('Appending to spreadsheet:', spreadsheetId);
    console.log('Data being appended:', rowData);
    
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [rowData]
      }
    });

    console.log('Google Sheets response:', appendResponse.data);

    // Skip email if credentials not provided
    let emailSent = false;
    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      try {
        const transporter = initEmailTransporter();
        const sheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}`;
        
        await transporter.sendMail({
          from: {
            name: 'Enrollment System',
            address: process.env.EMAIL_USER
          },
          to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
          subject: 'New Enrollment Received',
          html: formatEmailBody({
            firstName,
            lastName,
            whatsappNumber,
            email,
            country,
            experience,
            queries,
            timestamp
          }, sheetUrl)
        });
        emailSent = true;
      } catch (emailError) {
        console.log('Email not sent (credentials may not be configured):', emailError.message);
      }
    }

    // Success response
    return res.status(200).json({
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
    // Enhanced error handling
    console.error('Error details:', error);
    const errorMessage = error.message || 'Internal server error';
    const statusCode = error.response?.status || 500;

    return res.status(statusCode).json({
      success: false,
      message: 'Failed to process form submission',
      error: errorMessage,
      details: error.errors || error.response?.data
    });
  }
}