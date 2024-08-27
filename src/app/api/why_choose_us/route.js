import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async()=>{

  try {
    const db = await connectDB()
    const About_UsCollection = await db.collection('About_Us')
    const result = await About_UsCollection.find().toArray()
    // //console.log({result});
    return NextResponse.json({result})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}