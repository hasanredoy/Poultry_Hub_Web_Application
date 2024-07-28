import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  // get query

  try {
    const db = await connectDB();
    const cartsCollection = await db.collection("carts");
    let query = {};

    const result = await cartsCollection
      .find(query)
      .toArray();
    // console.log({result},'from server');
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
export const POST = async (request) => {
  // get cart data
  const cartData = request.json()

 
  try {
    const db = await connectDB();
    const cartsCollection = await db.collection("carts");
    // send cart data to mongobd 
    const result = await cartsCollection.insertOne(cartData)
    // console.log({result},'from server');
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
