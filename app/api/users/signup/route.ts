import { NextResponse } from 'next/server';
import connectDB from '@/app/db';
import User from '@/app/models/User'; // Ensure this path is correct

export async function POST(request: Request) {
  try {
    const bodyText = await request.text();
    const { proNumber, avatar, name, surname, email, password, } = JSON.parse(bodyText);
    
    console.log(
        "name :", name,
        "surname :", surname,
        "email :", email,
        "password :", password,
        "proNumber :", proNumber)
  

    await connectDB();

    const newUser = new User({
        proNumber,
        name,
        surname,
        email,
        password,
    })

    console.log("newUser", newUser)

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
