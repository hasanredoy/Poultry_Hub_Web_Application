import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const GET=async(request,{params})=>{
//  //console.log(params.id);
  try {
   const db = await connectDB()
   const itemsCollection = await db.collection('All_Items')
    const result = await itemsCollection.findOne({_id :new ObjectId(params.id)})
    // //console.log(result);
    return Response.json({result})   

  } catch (error) {
    return Response.json({error})
  }
}
export const PATCH=async(request,{params})=>{
//  //console.log(params.id);
  try {
   const db = await connectDB()
   const itemsCollection = await db.collection('All_Items')
   const updateInfo={
    $inc:{
      totalRating:1
    }
   }
    const result = await itemsCollection.updateOne({_id :new ObjectId(params.id)},updateInfo)
    // //console.log(result);
    return Response.json({result})   

  } catch (error) {
    return Response.json({error})
  }
}
export const PUT=async(request,{params})=>{
//  //console.log(params.id);
const data = await request.json()
//console.log(data);
  try {
   const db = await connectDB()
   const itemsCollection = await db.collection('All_Items')
  //console.log('object');
  const updateInfo={
    $set:{
      ...data
    }
  }
  const options = { upsert: true };
    const result = await itemsCollection.updateOne({_id :new ObjectId(params.id)},updateInfo,options)
    //console.log({result});
    return Response.json({result})   

  } catch (error) {
    return Response.json({error})
  }
}
export const DELETE=async(request,{params})=>{
//  //console.log(params.id);
  try {
   const db = await connectDB()
   const itemsCollection = await db.collection('All_Items')

  const options = { upsert: true };
    const result = await itemsCollection.deleteOne({_id :new ObjectId(params.id)})
    //console.log({result});
    return Response.json({result})   

  } catch (error) {
    return Response.json({error})
  }
}