import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"
const stripe = require("stripe")(process.env.NEXT_SK_Payment);


export const POST=async(request)=>{
  const data = await request.json()
  console.log(data,'from server');
  const price = data.price
  try {
        // create payment intent 
        const paymentIntent=await stripe.paymentIntents.create({
          amount: parseFloat(price * 100).toFixed(0),
          currency:"usd",
          payment_method_types:['card']
        })
  return NextResponse.json({paymentIntent})
} catch (error) {
   return NextResponse.json({error})
  
 }
}