require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');

async function testGoogleSheets() {
  try {
    console.log('Testing Google Sheets connection...\n');
    
    // Check environment variables
    console.log('Environment variables check:');
    console.log('- GOOGLE_CLIENT_EMAIL:', process.env.GOOGLE_CLIENT_EMAIL);
    console.log('- GOOGLE_SPREADSHEET_ID:', process.env.GOOGLE_SPREADSHEET_ID);
    console.log('- Has GOOGLE_PRIVATE_KEY:', !!process.env.GOOGLE_PRIVATE_KEY);
    console.log('- Private key starts with:', process.env.GOOGLE_PRIVATE_KEY?.substring(0, 30));
    console.log('\n');

    // Initialize auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
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
    
    // Try to get spreadsheet metadata
    console.log('Attempting to read spreadsheet metadata...');
    const metadata = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID
    });
    
    console.log('✅ Successfully connected to sheet:', metadata.data.properties.title);
    console.log('Sheet URL: https://docs.google.com/spreadsheets/d/' + process.env.GOOGLE_SPREADSHEET_ID);
    console.log('\n');

    // Try to read existing data
    console.log('Reading existing data...');
    const readResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: 'Sheet1!A:H'
    });
    
    const existingRows = readResponse.data.values?.length || 0;
    console.log(`✅ Found ${existingRows} rows in the sheet`);
    console.log('\n');

    // Try to append test data
    console.log('Attempting to append test data...');
    const testData = [
      'Test',
      'User',
      '+1234567890',
      'test@example.com',
      'Test Country',
      'Beginner',
      'This is a test',
      new Date().toISOString()
    ];

    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: 'Sheet1!A:H',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [testData]
      }
    });

    console.log('✅ Successfully appended data!');
    console.log('Updated range:', appendResponse.data.updates.updatedRange);
    console.log('Updated rows:', appendResponse.data.updates.updatedRows);
    console.log('\n');
    console.log('🎉 All tests passed! Check your Google Sheet for the new test row.');
    
  } catch (error) {
    console.error('❌ Error occurred:');
    console.error('Message:', error.message);
    
    if (error.code === 403) {
      console.error('\n⚠️  Permission error! Make sure you have:');
      console.error('1. Shared the sheet with:', process.env.GOOGLE_CLIENT_EMAIL);
      console.error('2. Given Editor permissions to the service account');
    } else if (error.code === 404) {
      console.error('\n⚠️  Sheet not found! Check if:');
      console.error('1. The GOOGLE_SPREADSHEET_ID is correct');
      console.error('2. The sheet exists and is not deleted');
    } else if (error.message?.includes('invalid_grant')) {
      console.error('\n⚠️  Authentication error! Check if:');
      console.error('1. Your private key is correctly formatted');
      console.error('2. The service account credentials are valid');
    }
    
    if (error.errors) {
      console.error('\nDetailed errors:', JSON.stringify(error.errors, null, 2));
    }
  }
}

// Run the test
testGoogleSheets();