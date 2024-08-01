'use client'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import "@stripe/stripe-js";
import CheckOutForm from './checkOutForm/CheckOutForm';
// load stipe with pk./checkOutForm/CheckOutForm

const stripePromise = loadStripe('');
const Payment =() => {
  const pk= process.env.NEXT_STRIPE_PK
  console.log({pk});
  

  return (
    <Elements stripe={stripePromise} >
    <CheckOutForm />
  </Elements>
  );
};

export default Payment;