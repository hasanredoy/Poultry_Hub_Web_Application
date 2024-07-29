import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  // get query
  const email = await request.nextUrl.searchParams.get("email");
  const page = (await request.nextUrl.searchParams.get("page"));

  const size = (await request.nextUrl.searchParams.get("size")) ;
  console.log({size,page});
  const parsedPage = parseInt(page);
  const parsedSize = parseInt(size);

  try {
    const db = await connectDB();
    const cartsCollection = await db.collection("carts");
    let query = {};
    if (email) {
      query = { email };
    }
    const result = await cartsCollection.find(query).limit(parsedSize).skip(parsedPage * parsedSize).toArray();
    console.log({result},'from server');
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
export const POST = async (request) => {
  // get cart data
  const cartData = await request.json();

  try {
    const db = await connectDB();
    const cartsCollection = await db.collection("carts");
    // send cart data to mongobd
    const result = await cartsCollection.insertOne(cartData);
    // console.log({result},'from server');
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
export const DELETE = async (request) => {
  // get cart data
  const id = await request.nextUrl.searchParams.get("id");
  try {
    const db = await connectDB();
    const cartsCollection = await db.collection("carts");
    // find and delete cart
    const result = await cartsCollection.deleteOne({ _id: new ObjectId(id) });
    // console.log({result},'from server');
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
