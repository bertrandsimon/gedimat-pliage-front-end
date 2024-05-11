import User from '../models/User';
import connectDB from '../db';

connectDB();

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const users = await User.find();
      return res.json(users);
    } 
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}