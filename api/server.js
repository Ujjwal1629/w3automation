import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import authRoutes from './routes/auth.js';
import { initializeAdminUser } from './utils/adminInit.js';

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env'
});

const app = express();

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://w3automation.vercel.app', 'https://journeytoautomation.org']
    : 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('MongoDB connected');
  
  // Initialize admin user
  await initializeAdminUser();
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('DB connection error:', err);
});
