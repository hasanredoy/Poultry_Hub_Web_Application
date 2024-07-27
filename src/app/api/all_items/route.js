import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET=async(request)=>{
  // get query 
  const filter = await request.nextUrl.searchParams.get('filter')
  const search = await request.nextUrl.searchParams.get('search')
  console.log(search);
  try {
    const db = await connectDB()
    const itemsCollection = await db.collection('All_Items')
    console.log('hello');
    let query ={}
    if(filter){
      query = {category:filter}
    }  
    if(search){
      query = {
        $or:[
          {title:{$regex:search,$options:'i'}},
          {description:{$regex:search,$options:'i'}},
        ]
      }
    }  
    const result = await itemsCollection.find(query).toArray()
    return NextResponse.json({result}) 
  } catch (error) {
    return NextResponse.json({error}) 
    
  }
}