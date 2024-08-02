import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const GET=async(request,{params})=>{
//  console.log(params.id);
  try {
   const db = await connectDB()
   const itemsCollection = await db.collection('All_Items')
    const result = await itemsCollection.findOne({_id :new ObjectId(params.id)})
    // console.log(result);
    return Response.json({result})   

  } catch (error) {
    return Response.json({error})
  }
}
export const PATCH=async(request,{params})=>{
//  console.log(params.id);
  try {
   const db = await connectDB()
   const itemsCollection = await db.collection('All_Items')
   const updateInfo={
    $inc:{
      totalRating:1
    }
   }
    const result = await itemsCollection.updateOne({_id :new ObjectId(params.id)},updateInfo)
    // console.log(result);
    return Response.json({result})   

  } catch (error) {
    return Response.json({error})
  }
}
export const PUT=async(request,{params})=>{
//  console.log(params.id);
const data = await request.json()
  try {
   const db = await connectDB()
   const itemsCollection = await db.collection('All_Items')

    const result = await itemsCollection.updateOne({_id :new ObjectId(params.id)},data,{upsert:true})
    // console.log(result);
    return Response.json({result})   

  } catch (error) {
    return Response.json({error})
  }
}