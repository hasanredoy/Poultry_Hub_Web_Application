'use client'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";

// react number
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import swal from "sweetalert";
import "@stripe/stripe-js";
import moment from "moment";
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import Heading from "@/components/custom/Heading/Heading";

const CheckOutForm = () => {
  const axiosHook = useAxios();
  const user = useGetUser();

  const [phoneNumber, setPhoneNumber] = useState();
  const [showPaymentInput, setShowPaymentInput] = useState(false);
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  const [transactionID, setTransactionID] = useState("");
  const [delivery, setDelivery] = useState();

  const totalPrice = 100; // Example total price

  const stripe = useStripe();
  const elements = useElements();

  // useEffect(() => {
  //   if (clientSecret) {
  //     console.log("Client secret obtained:", clientSecret);
  //   }
  // }, [clientSecret]);

  const handleDelivery = async (e) => {
    e.preventDefault();
    const form = e.target;
    const house = form.house.value;
    const location = form.location.value;
    const date = form.date.value;
    const newDate = moment(new Date()).format().split("T")[0];

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

    if (house && location && date) {
      setShowPaymentInput(true);
      setDelivery(deliveryInfo);

      try {
        const res = await axiosHook.post("/api/create-payment-intent", {
          price: totalPrice,
        });
        console.log(res.data,'hello');
        setClientSecret(res.data?.paymentIntent?.client_secret);
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    }
  };
console.log(clientSecret);
// console.log(clientSecret.paymentIntent?.client_secret);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (paymentMethodError) {
      console.log("Payment method error:", paymentMethodError);
      setError(paymentMethodError.message);
      return;
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      },
    });

    if (confirmError) {
      console.log("Payment confirmation error:", confirmError);
      setError(confirmError.message);
      return;
    }

    if (paymentIntent?.status === 'succeeded') {
      setTransactionID(paymentIntent.id);
      const payment = {
        transactionID: paymentIntent.id,
        email: user?.email,
        name: user?.displayName,
        totalPrice,
        delivery,
        status: "order received"
      };
      console.log("Payment successful:", payment);

      swal({
        text: "Payment Successfully",
        icon: "success",
      });
    }
  };

  return (
    <div className="mt-[5%]">
      <div>
        <Heading subHeading={`Welcome ${user?user?.name:"back"}`} title={'Please fill the form and pay...'}></Heading>
      </div>
      <div className="bg-base-200 rounded-xl p-5 lg:p-10 shadow-lg">
        <h1 className="text-lg md:text-lg font-bold text-center mb-5">
          {!showPaymentInput
            ? "Please Provide your delivery information below..."
            : "Please give your card info below and pay..."}
        </h1>

        {!showPaymentInput && (
          <form className=" flex flex-col" onSubmit={handleDelivery}>
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
          </form>
        )}
        {showPaymentInput && (
          <form className="bg-base-100 w-10/12 mx-auto p-5" onSubmit={handleSubmit}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    backgroundColor: "#fff",
                    color: "#171414",
                    "::placeholder": {
                      color: "#171414",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <div className="flex mt-5 justify-center">
              <button className="font-bold text-lg btn bg-sky-500 text-white" type="submit" disabled={!stripe || !elements || !clientSecret}>
                Pay
              </button>
            </div>
            <p className="text-lg font-semibold text-red-700">{error}</p>
            <p className="text-lg font-semibold text-green-700">{transactionID}</p>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckOutForm;
