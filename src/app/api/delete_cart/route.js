import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const PATCH = async (request) => {
  // get cart data
  const email= await request.nextUrl.searchParams.get("email");
  try {
    const db = await connectDB();
    const cartsCollection = await db.collection("carts");
    const updateDoc = {
      $set:{
        email:null
      }
    }
    // find and delete cart
    const result = await cartsCollection.updateMany({email},updateDoc);
    // console.log({result},'from server');
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};