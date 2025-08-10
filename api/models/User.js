import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
  // Progress tracking fields
  totalSolved: { type: Number, default: 0 },
  easy: { type: Number, default: 0 },
  medium: { type: Number, default: 0 },
  hard: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  streak: { type: Number, default: 0 },
  lastSolvedDate: { type: Date, default: null },
  
  // Challenge progress
  solvedChallenges: [{
    challengeId: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    status: { type: String, enum: ['solved', 'attempted'], required: true },
    pointsEarned: { type: Number, default: 0 },
    solvedAt: { type: Date, default: Date.now }
  }],
  
  // Additional profile info
  country: { type: String, default: '🌍' },
  badge: { type: String, default: 'Beginner' }
}, { timestamps: true });

// Calculate badge based on total solved problems
userSchema.methods.calculateBadge = function() {
  if (this.totalSolved >= 200) return 'Grand Master';
  if (this.totalSolved >= 100) return 'Expert';
  if (this.totalSolved >= 50) return 'Advanced';
  if (this.totalSolved >= 10) return 'Intermediate';
  return 'Beginner';
};

// Update streak based on last solved date
userSchema.methods.updateStreak = function() {
  const now = new Date();
  const lastSolved = this.lastSolvedDate;
  
  if (!lastSolved) {
    this.streak = 1;
  } else {
    const daysDiff = Math.floor((now - lastSolved) / (1000 * 60 * 60 * 24));
    
    if (daysDiff === 0) {
      // Same day, don't change streak
    } else if (daysDiff === 1) {
      // Consecutive day, increment streak
      this.streak += 1;
    } else {
      // Streak broken, reset to 1
      this.streak = 1;
    }
  }
  
  this.lastSolvedDate = now;
};

// Calculate points earned for a challenge
userSchema.methods.calculatePoints = function(difficulty) {
  const pointsMap = {
    'easy': 10,
    'medium': 20,
    'hard': 30
  };
  return pointsMap[difficulty] || 10;
};

export default mongoose.model('User', userSchema);
