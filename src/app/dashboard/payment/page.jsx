// "use client";
// import CheckOutForm from "@/Pages/Payment/CheckOutForm";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import "@stripe/stripe-js";
// // load stipe with pk
// const pk = process.env.NEXT_PUBLIC_STRIPE_PK;
// // console.log({pk});

// const stripePromise = loadStripe(`${pk}`);
const page = () => {
  return (
    <div>
      hello
    </div>
    // <Elements stripe={stripePromise}>
    //   {/* <CheckOutForm /> */}
    // </Elements>
  );
};


export default page;