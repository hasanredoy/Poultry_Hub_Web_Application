import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async()=>{

  try {
    const db = await connectDB()
    const partnersCollection = await db.collection('partners')
    const result = await partnersCollection.find().toArray()
    // console.log({result});
    return NextResponse.json({result})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}