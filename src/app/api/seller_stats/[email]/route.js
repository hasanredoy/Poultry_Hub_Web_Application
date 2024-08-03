import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  // get cart data
  const email = await params?.email;
  try {
    const db = await connectDB();
    const allListedItemByUser = await db
      .collection("All_Items")
      .find({ email })
      .toArray();

    const cartsCollection = await db.collection("carts");
    const totalSell = await cartsCollection
      .find({ sellerEmail: email })
      .toArray();
    const reviews = allListedItemByUser?.totalReviews;
    const itemListed = allListedItemByUser?.length;
    const sell = totalSell?.length;
    // find and delete cart
    const result = {
      listedItem: itemListed,
      customerFeedback: reviews,
      totalSell: sell,
    };
    // console.log({result},'from server');
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
