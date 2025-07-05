# Deploying the Backend to Render

This guide walks you through deploying the W3Automation backend to Render.

## Prerequisites

1. Create a [Render account](https://render.com)
2. Set up a MongoDB Atlas database (or other MongoDB provider)
3. Have your frontend already deployed on Vercel

## Deployment Steps

### 1. Set Up MongoDB Atlas

1. Create a MongoDB Atlas account if you don't have one: https://www.mongodb.com/cloud/atlas
2. Create a new cluster (the free tier is sufficient to start)
3. Create a database user with read/write permissions
4. Whitelist all IP addresses (`0.0.0.0/0`) for development, or specific IPs for production
5. Get your connection string: Click "Connect" > "Connect your application" > Copy the connection string
6. Replace `<password>` in the connection string with your database user's password

### 2. Deploy to Render

1. Log in to your Render account
2. Click "New" and select "Web Service"
3. Connect your GitHub repository or use the "Public Git repository" option with your repo URL
4. Configure the service:
   - **Name**: `w3automation-backend` (or your preferred name)
   - **Root Directory**: `api` (if your backend is in an api folder)
   - **Runtime**: `Node`
   - **Build Command**: `npm install` (NOT `npm run build`)
   - **Start Command**: `npm start`
   - **Instance Type**: Free (or select a paid plan for production)

5. Add Environment Variables:
   - `NODE_ENV`: `production`
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: A secure random string for JWT token signing
   - `ADMIN_EMAIL`: `admin@example.com` (or your preferred admin email)
   - `ADMIN_USERNAME`: `admin` (or your preferred admin username)
   - `ADMIN_PASSWORD`: `Admin@123` (or your preferred admin password)

6. Click "Create Web Service"

### 3. Troubleshooting Build Issues

If you encounter build errors:

1. In the Render dashboard, go to your service settings
2. Under "Build & Deploy" section:
   - Change the Build Command to: `npm install` (not `npm run build`)
   - Save changes
   - Manually deploy again

Alternative approach:
1. Use the provided `build.sh` script
2. Set the Build Command to: `chmod +x build.sh && ./build.sh`

### 4. Configure CORS on Your Backend

Ensure your backend's CORS configuration includes your Vercel frontend domain:

```javascript
app.use(cors({
  origin: ['https://w3automation.vercel.app', 'https://journeytoautomation.org'],
  credentials: true,
}));
```

### 5. Update Your Frontend API Configuration

Update your frontend's API configuration to point to your Render backend:

```javascript
const api = axios.create({
  baseURL: 'https://your-render-service-name.onrender.com/api',
  withCredentials: true,
});
```

### 6. Test the Connection

1. Visit your Vercel frontend
2. Try to log in with the admin credentials
3. Check the browser console for any CORS or connection errors

### 7. Troubleshooting

- **CORS Errors**: Ensure your backend's CORS configuration includes your frontend domain
- **Connection Timeout**: Check if your MongoDB Atlas connection is working
- **404 Errors**: Verify API routes and endpoint paths

## Monitoring and Logs

- Monitor your service on the Render dashboard
- Check logs for any errors or issues
- Set up alerts for service downtime

## Scaling (Optional)

For production applications with higher traffic:

1. Upgrade to a paid Render plan
2. Configure auto-scaling if needed
3. Set up a custom domain for your API

## Security Considerations

- Regularly rotate your JWT secret
- Use strong passwords for your admin user
- Consider implementing rate limiting for API endpoints
- Set up proper MongoDB Atlas security settings 