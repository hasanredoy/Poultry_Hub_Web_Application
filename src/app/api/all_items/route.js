import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET=async(request)=>{
  // get query 
  const filter = await request.nextUrl.searchParams.get('filter')
  console.log(filter);
  try {
    const db = await connectDB()
    const itemsCollection = await db.collection('All_Items')
    console.log('hello');
    let query ={}
    if(filter){
      query = {category:filter}
    }  
    const result = await itemsCollection.find(query).toArray()
    console.log('hellp');
    return NextResponse.json({result}) 
  } catch (error) {
    return NextResponse.json({error}) 
    
  }
}