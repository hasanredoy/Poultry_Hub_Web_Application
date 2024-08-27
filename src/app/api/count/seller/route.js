import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async()=>{

  try {
    const db = await connectDB()
    const sellersCollection = await db.collection('sellers')
    const count = await sellersCollection.estimatedDocumentCount()
    // //console.log({count});
    return NextResponse.json({count})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}