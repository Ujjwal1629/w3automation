import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`Login attempt with email: ${email}`);
    
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`User not found with email: ${email}`);
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password does not match');
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' }
    );
    console.log(`User ${user.username} logged in successfully`);
    res.json({ token, username: user.username });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Debug endpoint to check if admin exists
router.get('/check-admin', async (req, res) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const admin = await User.findOne({ email: adminEmail });
    
    if (admin) {
      // Return admin info without password
      const { password, ...adminInfo } = admin.toObject();
      return res.json({ 
        message: 'Admin user exists', 
        admin: adminInfo 
      });
    } else {
      return res.json({ message: 'Admin user does not exist' });
    }
  } catch (err) {
    console.error('Check admin error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create or reset admin user
router.post('/reset-admin', async (req, res) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123'; // Changed to capital A
    
    // Check if admin exists
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (existingAdmin) {
      // Update existing admin
      existingAdmin.username = adminUsername;
      existingAdmin.password = await bcrypt.hash(adminPassword, 10);
      await existingAdmin.save();
      console.log('Admin user reset successfully');
      res.json({ message: 'Admin user reset successfully' });
    } else {
      // Create new admin
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      const adminUser = new User({
        username: adminUsername,
        email: adminEmail,
        password: hashedPassword
      });
      await adminUser.save();
      console.log('Admin user created manually');
      res.json({ message: 'Admin user created successfully' });
    }
  } catch (err) {
    console.error('Reset admin error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Debug endpoint to test password comparison
router.post('/test-password', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`Testing password for email: ${email}`);
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(`Password match result: ${isMatch}`);
    console.log(`Provided password: ${password}`);
    console.log(`Stored hash: ${user.password}`);
    
    return res.json({ 
      match: isMatch,
      message: isMatch ? 'Password matches' : 'Password does not match'
    });
  } catch (err) {
    console.error('Test password error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
