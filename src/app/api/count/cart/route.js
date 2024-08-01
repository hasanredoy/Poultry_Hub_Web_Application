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
      const price = result.reduce((a,b)=> parseInt(a)+ parseInt(b.price),0)
      // console.log(result,'server');
    // console.log({price},'from server');
    return NextResponse.json({ count,price,result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};