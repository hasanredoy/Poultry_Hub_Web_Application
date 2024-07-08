import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async()=>{
  const db = await connectDB()
 try {
  const reviewsCollections = await db.collection('reviews')
  const result = await reviewsCollections.find().toArray()
  return NextResponse.json({result})
} catch (error) {
   return NextResponse.json({error})
  
 }
}