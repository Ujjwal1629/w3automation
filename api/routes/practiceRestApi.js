import express from 'express';

const router = express.Router();

// Sample data for users
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
  },
];

// GET /practice/restapi/users
router.get('/users', (req, res) => {
  res.status(200).json({ data: users });
});

// GET /practice/restapi/users/:id
router.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.status(200).json({ data: user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

export default router; 