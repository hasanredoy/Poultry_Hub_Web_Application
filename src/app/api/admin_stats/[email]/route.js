import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  // get cart data
  const adminEmail = await params?.email;
  //console.log({adminEmail});
  try {
    const db = await connectDB();
    // all items collection
    const allItemsCollection = await db.collection("All_Items");
    // admin listed items
    const allListedItemByAdmin = await db
      .collection("All_Items")
      .find({ email: adminEmail })
      .toArray();
    // get all review count
    const allReviews = await db.collection("reviews").estimatedDocumentCount();
    // get all items count
    const allItems = await allItemsCollection.estimatedDocumentCount();
    // get cart collection
    const cartsCollection = await db.collection("carts");
    // get total sell

    const totalSell = await cartsCollection.find({ email: null }).toArray();
    // count all  items price
    const countAllRevenue = await allItemsCollection
      .aggregate([
        {
          $group: {
            _id: null,
            totalPrice: { $sum: "$price" },
          },
        },
      ])
      .toArray();
    // get revenue
    const revenue = await countAllRevenue[0]?.totalPrice;
    //  get all users count
    const users = await db.collection("users").estimatedDocumentCount();

    const sellStats = await db.collection("payments").aggregate([
      { $unwind: "$itemsName" },
      {
        $lookup: {
          from: "All_Items",
          localField: "itemsName",
          foreignField: "name",
          as: "Items",
        },
      },
      { $unwind: "$Items" },
      {
        $group:{
          _id:"$Items.category",
          quantity:{
            $sum:1
          },
          revenue:{
            $sum:"$Items.price"
          }
        }
      },
    {
      $project:{
        _id:0,
        category:"$_id",
        quantity:"$quantity",
        revenue:"$revenue"
      }
    }

    ]).toArray();
    const stats1 = {
      totalItem:allItems,
      totalReviews:allReviews,
      totalSell:totalSell?.length,
      totalUsers:users,
      totalRevenue:revenue,
      adminListedItem:allListedItemByAdmin?.length
    };
    const stats2=sellStats
    // //console.log({result},'from server');
    return NextResponse.json({ stats1,stats2 });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
