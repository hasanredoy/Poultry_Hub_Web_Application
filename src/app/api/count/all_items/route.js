import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async()=>{

  try {
    const db = await connectDB()
    const allItemsCollection = await db.collection('All_Items')
    const count = await allItemsCollection.estimatedDocumentCount()
    // console.log({count});
    return NextResponse.json({count})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}