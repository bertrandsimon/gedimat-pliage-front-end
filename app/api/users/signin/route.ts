import { NextResponse } from 'next/server';
// import bcrypt
import connectDB from '@/app/db'; // Ensure this path is correct
import User from '@/app/models/User'; // Ensure this path is correct

export default async function handler(req:any, res:any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ result: false, error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ result: false, error: 'Something is missing' });
  }

  try {
    await connectDB();

    const user = await User.findOne({ email });
    console.log("user exist !", user)
    
    if (!user) {
      return res.status(404).json({ result: false, error: "User doesn't exist" });
    }

    // if (bcrypt.compareSync(password, user.password)) {
    //   return res.status(200).json({
    //     result: true,
    //     //token: user.token,
    //     name: user.name,
    //     surname: user.surname,
    //   });
    // } else {
    //   return res.status(401).json({ result: false, error: 'Wrong password' });
    // }
  } catch (error) {
    return res.status(500).json({ result: false, error: 'Internal server error' });
  }
}
