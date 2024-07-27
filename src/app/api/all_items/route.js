import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET=async(request)=>{
  // get query 
  const queryFilter = await request.nextUrl.searchParams.get('filter')
  const search = await request.nextUrl.searchParams.get('search')
  
  const page = await request.nextUrl.searchParams.get('page')
  
  const size = await request.nextUrl.searchParams.get('size')
  console.log({queryFilter});
  const parsedPage = parseInt(page)
  const parsedSize = parseInt(size)
  
  try {
    const db = await connectDB()
    const itemsCollection = await db.collection('All_Items')
    let query ={}
   let filter = {}
    if(queryFilter){
      filter = {category:queryFilter}
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
    const result = await itemsCollection.find(query).limit(parsedSize).skip(parsedPage*parsedSize).toArray()
    // console.log({result},'from server');
    return NextResponse.json({result}) 
  } catch (error) {
    return NextResponse.json({error}) 
    
  }
}