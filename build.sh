#!/bin/bash
# Build script for Vercel

echo "Starting Vercel build process..."
npm install --legacy-peer-deps
npm run build
echo "Build completed successfully!" 