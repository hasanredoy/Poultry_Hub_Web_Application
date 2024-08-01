import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async(request)=>{

  const page = await request.nextUrl.searchParams.get("page") 

  const size = await request.nextUrl.searchParams.get("size")
  // console.log({ queryFilter });
  const parsedPage = parseInt(page);
  const parsedSize = parseInt(size);
  try {
    const db = await connectDB()
    const usersCollection = await db.collection('users')
    // console.log({parsedPage,parsedSize});
    const result = await usersCollection.find().limit(parsedSize).skip(parsedPage*parsedSize).sort({registerDate:-1}).toArray()
    // console.log({result});
    
    return NextResponse.json({result})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}