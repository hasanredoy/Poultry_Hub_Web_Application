import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET=async()=>{
  try {
    const db = await connectDB()
    const itemsCollection = await db.collection('All_Items')
    console.log('hello');  
    const result = await itemsCollection.find().toArray()
    console.log('hellp');
    return NextResponse.json({result}) 
  } catch (error) {
    return NextResponse.json({error}) 
    
  }
}