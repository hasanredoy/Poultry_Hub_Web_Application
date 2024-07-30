import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET=async(request)=>{
    // get queries
    const page = (await request.nextUrl.searchParams.get("page"));
  
    const size = (await request.nextUrl.searchParams.get("size")) ;
    // console.log({size,page});
    const parsedPage = parseInt(page);
    const parsedSize = parseInt(size);
  try {
    const db = await connectDB()
    // console.log('hello');
  const reviewsCollections = await db.collection('reviews')
  // console.log({reviewsCollections});
  const result = await reviewsCollections.find().sort({postedDate:-1}).limit(parsedSize).skip(parsedPage*parsedSize).toArray()
  // console.log({result},'hello2');
  return NextResponse.json({result})
} catch (error) {
   return NextResponse.json({error})
  
 }
}
export const POST=async(request)=>{
  const reviewData = await request.json()
  try {
    const db = await connectDB()
    // console.log('hello');
  const reviewsCollections = await db.collection('reviews')
  // console.log({reviewsCollections});
  const result = await reviewsCollections.insertOne(reviewData)
  // console.log({result},'hello2');
  return NextResponse.json(result?{result}:{})
} catch (error) {
   return NextResponse.json({error})
  
 }
}
export const DELETE = async (request) => {
  // get cart data
  const id = await request.nextUrl.searchParams.get("id");
  try {
    const db = await connectDB();
    const reviewsCollection = await db.collection("reviews");
    // find and delete reviews
    const result = await reviewsCollection.deleteOne({ _id: new ObjectId(id)});
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
