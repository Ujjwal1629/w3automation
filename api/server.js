import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { createHandler } from 'graphql-http/lib/use/express';
import graphqlSchema from './graphql/schema.js';

import authRoutes from './routes/auth.js';
import practiceRestApiRoutes from './routes/practiceRestApi.js';
import challengeRoutes from './routes/challenges.js';
import { initializeAdminUser } from './utils/adminInit.js';

// Load environment variables based on NODE_ENV
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env'
});

const app = express();

// Configure CORS with all possible domain variations
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://w3automation.vercel.app',
        'https://journeytoautomation.org',
        'https://www.journeytoautomation.org',
        'http://journeytoautomation.org',
        'http://www.journeytoautomation.org'
      ]
    : 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api', challengeRoutes);
app.use('/practice/restapi', practiceRestApiRoutes);
app.use('/practice/graphql', createHandler({ schema: graphqlSchema }));

const PORT = process.env.PORT || 5001;

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('MongoDB connected');
  
  // Initialize admin user
  await initializeAdminUser();
  
  app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('DB connection error:', err);
});
