import { NextResponse } from "next/server";
import connectDB from '../../db';
import User from '../../models/User';



// export async function GET() {
//     return NextResponse.json({
//         hello: "world,"
//       })
// }

// GET ALL USERS

export async function GET() {
   await connectDB();
   try {
    const users = await User.find()
      return NextResponse.json(users)
   }
   catch {
    return NextResponse.json('ERREUR');
   }

}

// POST SIGNIN

export async function POST(request: Request){
   const credentials = await request.json();
   
   const userCredentials = {
      email : credentials.email,
      password : credentials.password
   }
   return NextResponse.json(userCredentials)

}