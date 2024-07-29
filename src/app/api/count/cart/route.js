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
      const count=  result?.length
    // console.log({result},'from server');
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json({ error });
  }
};