# Vercel Deployment Guide for W3Automation Frontend

This guide provides step-by-step instructions for deploying the W3Automation frontend to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. Your backend already deployed on Render
3. Git repository with your frontend code

## Step 1: Prepare Your Project

Ensure your project has the following files correctly configured:

- `vercel.json` - Vercel configuration
- `vite.config.js` - Vite build configuration
- `package.json` - Project dependencies and scripts
- `.vercelignore` - Files to exclude from deployment

## Step 2: Deploy to Vercel

### Option 1: Using the Vercel Dashboard

1. Log in to your [Vercel dashboard](https://vercel.com/dashboard)
2. Click "Add New" > "Project"
3. Import your Git repository
4. Configure your project:
   - Framework Preset: Vite
   - Build Command: `npm install --legacy-peer-deps && npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install --legacy-peer-deps`
5. Add environment variables if needed
6. Click "Deploy"

### Option 2: Using the Vercel CLI

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```
   vercel login
   ```

3. Deploy your project:
   ```
   vercel
   ```

4. Follow the prompts to configure your deployment

## Step 3: Troubleshooting Common Issues

### Build Errors

If you encounter build errors:

1. Check your `package.json` for correct build scripts
2. Make sure all dependencies are compatible
3. Use `--legacy-peer-deps` flag for npm install if needed
4. Check Vercel build logs for specific errors

### API Connection Issues

If your frontend can't connect to your backend:

1. Verify your API URL in `src/api.js`
2. Check CORS settings on your backend
3. Make sure your backend is running

### Routing Issues

If routes don't work after deployment:

1. Make sure `vercel.json` has the correct rewrites
2. Check that your React Router is configured correctly

## Step 4: Custom Domain (Optional)

1. In your Vercel dashboard, go to your project
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Follow the instructions to configure DNS

## Step 5: Continuous Deployment

Vercel automatically deploys when you push changes to your repository. To configure this:

1. Go to your project in the Vercel dashboard
2. Click "Settings" > "Git"
3. Configure your production branch and deployment settings

## Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Documentation](https://vercel.com/docs)
- [React Router with Vercel](https://vercel.com/guides/using-react-router-with-vercel) 