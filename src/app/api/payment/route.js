import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST=async(request)=>{
  const paymentData = await request.json()
  try {
    const db = await connectDB()
    // console.log('hello');
  const paymentCollections = await db.collection('payments')
  // console.log({reviewsCollections});
  const result = await paymentCollections.insertOne(paymentData)
  // console.log({result},'hello2');
  return NextResponse.json(result?{result}:{})
} catch (error) {
   return NextResponse.json({error})
  
 }
}
