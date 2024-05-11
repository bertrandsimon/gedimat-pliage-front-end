import { NextResponse } from 'next/server';

// import connectDB from '../db';
// import User from '../models/User';

// Connect to the database
// connectDB();

export async function GET (){
  return NextResponse.json({
    hello: "world,"
  })
}