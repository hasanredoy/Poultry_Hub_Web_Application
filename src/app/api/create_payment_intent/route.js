import { NextResponse } from "next/server";

// This is your test secret API key.
const stripe = require("stripe")(process.env.NEXT_SK_Payment);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export async function POST(request) {
  const { items } = await request.json()

  try {
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });
  //console.log({paymentIntent});

 return NextResponse.json({
    clientSecret: paymentIntent?.client_secret,
  });
} catch (error) {
 return NextResponse.json({error})
}

};