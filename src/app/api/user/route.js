import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async(request)=>{

  const search = await request.nextUrl.searchParams.get("search") 
  const page = await request.nextUrl.searchParams.get("page") 

  const size = await request.nextUrl.searchParams.get("size")
  // console.log({ queryFilter });
  const parsedPage = parseInt(page);
  const parsedSize = parseInt(size);
  let query={}
  try {
    const db = await connectDB()
    const usersCollection = await db.collection('users')
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }
    // console.log({parsedPage,parsedSize});
    const result = await usersCollection.find(query).limit(parsedSize).skip(parsedPage*parsedSize).sort({registerDate:-1}).toArray()
    // console.log({result});
    
    return NextResponse.json({result})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}