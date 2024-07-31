import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './checkOutForm/CheckoutForm';

// load stipe with pk
const stripePromise = loadStripe(process.env.NEXT_STRIPE_PK);
console.log({pk:process.env.NEXT_STRIPE_PK});

const Payment = () => {
  return (
    <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
  );
};

export default Payment;