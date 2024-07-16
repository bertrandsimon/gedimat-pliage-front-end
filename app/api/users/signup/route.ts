import { NextResponse } from 'next/server';
import connectDB from '@/app/db';
import User from '@/app/models/User'; // Ensure this path is correct
import bcrypt from 'bcrypt'; 

export async function POST(request: Request) {
  try {
    const bodyText = await request.text();
    const { proNumber, avatar, name, surname, email, password, } = JSON.parse(bodyText);
 
    await connectDB();
  
      // Check if the email already exists in the database
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return new Response(JSON.stringify({ error: 'Cet email est déja enregistré' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
  

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        proNumber,
        name,
        surname,
        email,
        password: hashedPassword,
    })

    await newUser.save()



 
    return NextResponse.json({
      result: true,
      user : newUser,
       
    });

  } catch (error) {
    console.error('Error during signin:', error);
    return NextResponse.json({ result: false, error: 'Internal server error' });
  }
}
