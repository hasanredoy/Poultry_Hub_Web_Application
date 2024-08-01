import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async()=>{

  try {
    const db = await connectDB()
    const usersCollection = await db.collection('users')
    const result = await usersCollection.find().toArray()
    // console.log({result});
    return NextResponse.json({result})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}