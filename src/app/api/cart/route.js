import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  // get query
  const email = await request.nextUrl.searchParams.get('email')
  try {
    const db = await connectDB();
    const cartsCollection = await db.collection("carts");
    let query = {};
  if(email){
    query={email}
  }
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
  const cartData =await request.json()

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
