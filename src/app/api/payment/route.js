import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async(request)=>{
  const email = await request.nextUrl.searchParams.get("email")
  try {
    const db = await connectDB()
    // console.log('hello');
    const paymentCollections = await db.collection('payments')
    console.log({email});
  // console.log({reviewsCollections});
  const result = await paymentCollections.find({email}).toArray()
  console.log({result},'hello2');
  return NextResponse.json({result})
} catch (error) {
   return NextResponse.json({error})
  
 }
}
export const POST=async(request)=>{
  const paymentData = await request.json()
  // console.log({paymentData},'from server');
  try {
    const db = await connectDB()
    // console.log('hello');
  const paymentCollections = await db.collection('payments')
  // console.log({reviewsCollections});
  const result = await paymentCollections.insertOne(paymentData)
  // console.log({result},'hello3');
  return NextResponse.json({result})
} catch (error) {
   return NextResponse.json({error})
  
 }
}
