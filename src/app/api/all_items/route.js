import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET=async(request)=>{
  // get query 
  const filter = await request.nextUrl.searchParams.get('filter')
  const search = await request.nextUrl.searchParams.get('search')
  
  try {
    const db = await connectDB()
    const itemsCollection = await db.collection('All_Items')
    let query ={}

    if(filter){
      query = {category:filter}
    }  
   
    // check if any search query then set query search value
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