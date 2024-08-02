import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async(request)=>{
  const email = await request.nextUrl.searchParams.get('email')
  try {
    const db = await connectDB()
    // console.log('hello');
    // connect usersCollection 
  const sellerCollection = await db.collection('sellers')
  // console.log({usersCollection});
  // check user exist or not
  const result= await sellerCollection.findOne({email})
  // console.log({result},'hello2');
  return NextResponse.json({result})
} catch (error) {
   return NextResponse.json({error})
  
 }
}
export const POST=async(request)=>{
  const sellerData = await request.json()
  try {
    const db = await connectDB()
    // console.log('hello');
    // connect usersCollection 
  const sellerCollection = await db.collection('sellers')
  // console.log({usersCollection});
  // check user exist or not
  const checkUser= await sellerCollection.findOne({email:sellerData.email})

  if(checkUser){
    return NextResponse.json({message:"user exist"})
  }
  const result = await sellerCollection.insertOne(sellerData)
  // console.log({result},'hello2');
  return NextResponse.json({result})
} catch (error) {
   return NextResponse.json({error})
  
 }
}

export const PATCH=async(request)=>{
   const email = await request.nextUrl.searchParams.get('email')
  //  console.log(params.email,'role route');
    try {
      const db = await connectDB()
      const usersCollection = await db.collection('users')
      const sellerCollection = await db.collection('sellers')
      const updateDocForUserCollection = {
        $set:{
          type:"seller"
        }
      }
      const updateDocForSellerCollection = {
        $set:{
          status:"approved"
        }
      }
      const resultUserCollection = await usersCollection.updateOne({email},updateDocForUserCollection)
      const resultSellerCollection = await sellerCollection.updateOne({email},updateDocForSellerCollection)
      return NextResponse.json({resultSellerCollection,resultUserCollection})
    } catch (error) {
      return NextResponse.json({error})
      
    }
  }
export const DELETE=async(request)=>{
   const email = await request.nextUrl.searchParams.get('email')
  //  console.log(params.email,'role route');
    try {
      const db = await connectDB()
      const sellerCollection = await db.collection('sellers')
  
      const updateDocForSellerCollection = {
        $set:{
          status:"rejected"
        }
      }
    
      const result = await sellerCollection.updateOne({email},updateDocForSellerCollection)
      return NextResponse.json({result})
    } catch (error) {
      return NextResponse.json({error})
      
    }
  }
 