"use client";
// import CheckOutForm from "@/Pages/Payment/CheckOutForm";

// import "@stripe/stripe-js";

// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// // load stipe with pk
// const pk = process.env.NEXT_PUBLIC_STRIPE_PK;
// // console.log({pk});

// const stripePromise = loadStripe(`${pk}`);
// const page = () => {
//   return (
//     <div>
//       hello
//     </div>
//     // <Elements stripe={stripePromise}>
//     //   {/* <CheckOutForm /> */}
//     // </Elements>
//   );
// };


// export default page;

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";
import useAxios from "@/hooks/useAxios";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

export default function App() {
  const [clientSecret, setClientSecret] = React.useState("");
 const axiosHook = useAxios()
  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
     axiosHook.post('/api/create_payment_intent',{ items: [{ id: "xl-tshirt" }]} )
  
      .then((data) => {
        // console.log(data?.data);
        setClientSecret(data?.data?.clientSecret)});
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientS={clientSecret} />
        </Elements>
      )}
    </div>
  );
}