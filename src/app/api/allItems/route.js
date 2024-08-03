import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  // get query
   const email = await request.nextUrl.searchParams.get('email')
  const page = (await request.nextUrl.searchParams.get("page")) || "0";

  const size = (await request.nextUrl.searchParams.get("size")) || "8";
  // console.log({ queryFilter });
  const parsedPage = parseInt(page);
  const parsedSize = parseInt(size);

  try {
    const db = await connectDB();
    const itemsCollection = await db.collection("All_Items");
 
    const result = await itemsCollection
      .find({email})
      .limit(parsedSize)
      .skip(parsedPage * parsedSize)
      .toArray();
    // console.log({result},'from server');
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
