import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async(request)=>{
 const email = await request.nextUrl.searchParams.get('email')
//  console.log(email,'role route');
  try {
    const db = await connectDB()
    const usersCollection = await db.collection('users')
    const result = await usersCollection.findOne({email})
    const role = await result?.role
    console.log({role});
    // console.log({result});
    return NextResponse.json({role})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}