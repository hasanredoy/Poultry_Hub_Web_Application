import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async()=>{

  try {
    const db = await connectDB()
    const allItemsCollection = await db.collection('All_Items')
    const price = await allItemsCollection.aggregate([
      {
        $group: {
          _id: null, // Grouping by null to get the total sum for the entire collection
          totalPrice: { $sum: '$price' }
        }
      }
    ]).toArray();
    const totalPrice = price[0]?.totalPrice
    //console.log({totalPrice});
    const count = await allItemsCollection.estimatedDocumentCount()
    // //console.log({count});
    return NextResponse.json({count,totalPrice})
  } catch (error) {
    return NextResponse.json({error})
    
  }
}