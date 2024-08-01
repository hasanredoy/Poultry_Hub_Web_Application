import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async()=>{

  try {
    const db = await connectDB()
    const usersCollection = await db.collection('user')
    const count = await usersCollection.estimatedDocumentCount()
    // console.log({count});
    return NextResponse.json({count})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}