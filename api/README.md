# Backend Server for w3automation
##Ujjwalsingh1629
## Setup
1. Create a `.env` file in this folder with:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   
   # Optional admin user credentials (defaults will be used if not provided)
   ADMIN_EMAIL=admin@example.com
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=Admin@123
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm run dev
   ```

## API Endpoints
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive a JWT token
- `GET /api/auth/check-admin` — Check if admin user exists (debug endpoint)
- `POST /api/auth/reset-admin` — Create or reset the admin user

## Admin User
The application automatically creates a default admin user on startup if one doesn't exist:
- Email: admin@example.com
- Username: admin
- Password: Admin@123 (note the capital 'A')

You can override these defaults by setting the corresponding environment variables in your `.env` file.

### Troubleshooting Admin Login
If you're having trouble logging in with the admin credentials, try these steps:

1. Check if the admin user exists by visiting `/api/auth/check-admin`
2. If the admin user doesn't exist or you can't log in, reset the admin user by making a POST request to `/api/auth/reset-admin`
3. Try logging in again with the admin credentials
