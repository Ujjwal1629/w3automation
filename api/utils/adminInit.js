import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Checks if admin user exists and creates one if not
 */
export const initializeAdminUser = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123'; // Changed to capital A

    console.log(`Checking for admin user with email: ${adminEmail}`);

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (!existingAdmin) {
      console.log('Admin user not found. Creating new admin user...');
      
      // Hash the password
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      
      // Create new admin user
      const adminUser = new User({
        username: adminUsername,
        email: adminEmail,
        password: hashedPassword
      });
      
      await adminUser.save();
      
      // Verify the admin was created
      const verifyAdmin = await User.findOne({ email: adminEmail });
      if (verifyAdmin) {
        console.log('Admin user created and verified successfully');
      } else {
        console.error('Failed to verify admin user creation');
      }
    } else {
      console.log('Admin user already exists');
      
      // Check if we need to update the admin password (optional)
      // Uncomment if you want to reset the admin password on server restart
      /*
      const isCorrectPassword = await bcrypt.compare(adminPassword, existingAdmin.password);
      if (!isCorrectPassword) {
        console.log('Updating admin password...');
        existingAdmin.password = await bcrypt.hash(adminPassword, 10);
        await existingAdmin.save();
        console.log('Admin password updated successfully');
      }
      */
    }
  } catch (error) {
    console.error('Error initializing admin user:', error);
  }
}; 