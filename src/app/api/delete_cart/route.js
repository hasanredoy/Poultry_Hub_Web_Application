import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const DELETE = async (request) => {
  // get cart data
  const email= await request.nextUrl.searchParams.get("email");
  try {
    const db = await connectDB();
    const cartsCollection = await db.collection("carts");
    // find and delete cart
    const result = await cartsCollection.deleteMany({email});
    // console.log({result},'from server');
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};