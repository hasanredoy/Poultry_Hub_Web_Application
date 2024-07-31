import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async(request,{params})=>{
//  const email = await request.nextUrl.searchParams.get('email')
//  console.log(params.email,'role route');
  try {
    const db = await connectDB()
    const usersCollection = await db.collection('users')
    const result = await usersCollection.findOne({email:params?.email})
    const role =  result?.type
    // console.log({role});
    // console.log({result});
    return NextResponse.json({role})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}