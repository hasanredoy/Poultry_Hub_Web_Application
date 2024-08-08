"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "@stripe/stripe-js";
import CheckOutForm from "./checkOutForm/CheckOutForm";
// load stipe with pk./checkOutForm/CheckOutForm
const pk = process.env.NEXT_PUBLIC_STRIPE_PK;
// console.log({pk});

const stripePromise = loadStripe(`${pk}`);
const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
  );
};

export default Payment;
