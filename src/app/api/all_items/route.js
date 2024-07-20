import { connectDB } from "@/lib/connectDB"

export const GET =async()=>{
  try {
    const db = connectDB()
    const itemsCollection = await db.collection('All_Items')
    const result = await itemsCollection.find().toArray()
    return Response.json({result}) 
  } catch (error) {
    return Response.json({error}) 
    
  }
}