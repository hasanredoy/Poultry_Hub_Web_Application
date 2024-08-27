import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const result =[]
  try {
    const db = await connectDB();
    const itemsCollection = await db.collection("All_Items");
      const categories = ['Chicken','Baby Chicks','Eggs','Feed']
      for(const category of categories){
        const data = await itemsCollection.findOne({category})
       result.push(data) 

      }
 
    return NextResponse.json({result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};