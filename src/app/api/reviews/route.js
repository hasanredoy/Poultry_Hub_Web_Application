import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async()=>{
  try {
    const db = await connectDB()
    // console.log('hello');
  const reviewsCollections = await db.collection('reviews')
  // console.log({reviewsCollections});
  const result = await reviewsCollections.find().toArray()
  // console.log({result},'hello2');
  return NextResponse.json(result?{result}:{})
} catch (error) {
   return NextResponse.json({error})
  
 }
}