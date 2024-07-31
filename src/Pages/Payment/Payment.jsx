'use client'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import "@stripe/stripe-js";
import CheckOutForm from './checkOutForm/CheckOutForm';
// load stipe with pk./checkOutForm/CheckOutForm

const stripePromise = loadStripe(`${process.env.NEXT_STRIPE_PK}`);
const Payment =() => {
  const pk= process.env.NEXT_STRIPE_PK
  console.log({pk});
  
const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};
  return (
    <Elements stripe={stripePromise} options={options}>
    <CheckOutForm />
  </Elements>
  );
};

export default Payment;