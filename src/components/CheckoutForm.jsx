"use client";
import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import useGetUser from "@/hooks/useGetUser";
// react number
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import swal from "sweetalert";
import useAxios from "@/hooks/useAxios";

const axiosHook = useAxios()


export default function CheckoutForm({ clientS }) {
  console.log({ clientS });
  const stripe = useStripe();
  const elements = useElements();
  // get user
  const user = useGetUser();
  // phone number input
  const [phoneNumber, setPhoneNumber] = useState();
  // state for show user payment input
  const [showPaymentInput, setShowPaymentInput] = useState(false);

  const [transactionID, setTransactionID] = useState("");
  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
// state for delevery info 
  const [delivery, setDelivery] = useState();



  const handleDelivery = async (e) => {
    e.preventDefault();
    const form = e.target;
    const house = form.house.value;
    const location = form.location.value;
    const date = form.date.value;
    const newDate = moment(new Date()).format().split("T")[0];

// show a error toast if data is invalid 
    if (date < newDate) {
      swal({
        text: "Invalid Date",
        icon: "error",
      });
      return;
    }

    const deliveryInfo = {
      phone: phoneNumber,
      location: location,
      house: house,
      date: date,
    };

    // proceed use if hose , location and data is there 
    if (house && location && date) {
      setShowPaymentInput(true);
      setDelivery(deliveryInfo);
  
      
    }
  };

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      console.log("client secret not fount");
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          
          const payment = {
            transactionID: Math.random()*3000,
            email: user?.email,
            name: user?.displayName,
            itemsName,
            totalPrice,
            delivery,
            paymentDate:new Date(),
            status: "order received"
          };
          // console.log("Payment successful:", payment);
          const res =  axiosHook.post('/api/payment',payment)
          // console.log(res?.data);
          if(res.data?.result?.insertedId){
            const updateResponse =  axiosHook.patch(`/api/delete_cart?email=${user?.email}`)
            // console.log(updateResponse);
            if(updateResponse.data?.result?.modifiedCount>0)
           { swal({
              text: "Payment Successfully",
              icon: "success",
            });
          router.push("/dashboard/payment_history")
          }
        }
          console.log({ paymentIntent });
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/payment_history`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <>
      {showPaymentInput?<form className=" flex flex-col" onSubmit={handleDelivery}>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="text-lg">Your Phone Number</span>
            </label>
            <PhoneInput
              className="input input-bordered bg-white text-black"
              international
              countryCallingCodeEditable={false}
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base md:text-lg">Delivery Location</span>
            </label>
            <input
              type="text"
              placeholder="location"
              className="input input-bordered bg-white text-black focus:outline-sky-200"
              required
              name="location"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base md:text-lg">House Number</span>
            </label>
            <input
              type="number"
              placeholder="House Number"
              className="input input-bordered bg-white text-black focus:outline-sky-200"
              required
              name="house"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base md:text-lg">Delivery Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered bg-white text-black focus:outline-sky-200"
              required
              name="date"
            />
          </div>
        </section>
        <div className=" flex justify-center w-full mt-5">
          <button className=" btn-primary" type="submit">
            Next
          </button>
        </div>
      </form>:
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          className="btn-primary"
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>}
    </>
  );
}
