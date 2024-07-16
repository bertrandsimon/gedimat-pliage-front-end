import { NextResponse } from 'next/server';
import connectDB from '@/app/db';
import User from '@/app/models/User'; // Ensure this path is correct
import bcrypt from 'bcrypt'; 


export async function POST(request: Request) {
  try {
    const bodyText = await request.text();
    const { email, password } = JSON.parse(bodyText);
    //console.log(email, password)
    if (!email || !password) {
      return NextResponse.json({ result: false, error: 'Something is missing' });
    }

    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
       
      return NextResponse.json({ result: false, error: "Email non enregistré" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ result: false, error: 'Mot de passe incorrect' });
    }
    
    return NextResponse.json({
      result: true,
      name: user.name,
      surname: user.surname,
       
    });

  } catch (error) {
    console.error('Error during signin:', error);
    return NextResponse.json({ result: false, error: 'Internal server error' });
  }
}
