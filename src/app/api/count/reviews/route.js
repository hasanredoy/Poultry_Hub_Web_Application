import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async()=>{

  try {
    const db = await connectDB()
    const reviewsCollection = await db.collection('reviews')
    const count = await reviewsCollection.estimatedDocumentCount()
    // //console.log({count});
    return NextResponse.json({count})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}