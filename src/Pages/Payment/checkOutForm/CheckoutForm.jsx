'use client'
import Heading from '@/components/custom/Heading/Heading';
import useAxios from '@/hooks/useAxios';
import useGetUser from '@/hooks/useGetUser';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useState } from 'react';
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const CheckoutForm = () => {
  const stripe = useStripe(); // get stripe 
  const elements = useElements();// get elements
//  error state 
const [error ,setError]=useState('')
//  payment intent state 
const [paymentIntent ,setPaymentIntent]=useState('')
// get user 
const user = useGetUser()
const [phoneNumber ,setPhoneNumber]=useState(null)

// get axios
const axiosHook = useAxios()
const handleDelivery=async(e)=>{

}

  const handleSubmit = async (event) => {
   
    event.preventDefault();

    // return if no stripe and elements
    if (!stripe || !elements) {
      return ;
    }
 // return if elements is null
    if(elements==null){
      return
    }

    // get card 
    const card = elements.getElement(CardElement)
    //return if card is null
    if (card == null) {
      return;
    }

  //create payment method
  const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: "card",
    card,
  });

  if (error) {
    console.log("error", error);
    setError(error.message);
  } else {
    // console.log("payment", paymentMethod);
    setError("");
  }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
   <main className='mt-10'>
  <Heading subHeading={`Welcome ${user?.name?user?.name:'back'}`} title={'Please fill up the form'}></Heading>

    {/* delivery info form  */}
    <section className=' hidden'>
    <form
              className=" grid grid-cols-1 lg:grid-cols-2 gap-4"
              onSubmit={handleDelivery}
            >
              {/* Phone Number  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-lg ">Your Phone Number</span>
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
              {/* Location*/}
              <div className="form-control">
                <label className="label">
                  <span className=" text-base md:text-lg ">
                    Delivery Location
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="location"
                  className="input input-bordered bg-white text-black focus:outline-sky-200"
                  required
                  name="location"
                />
              </div>
              {/* House Number  */}
              <div className="form-control">
                <label className="label">
                  <span className=" text-base md:text-lg ">House Number</span>
                </label>
                <input
                  type="number"
                  placeholder="House Number"
                  className="input input-bordered bg-white text-black focus:outline-sky-200"
                  required
                  name="house"
                />
              </div>
              {/* delivery date  */}
              <div className="form-control">
                <label className="label">
                  <span className=" text-base md:text-lg ">Delivery Date</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered bg-white text-black focus:outline-sky-200"
                  required
                  name="date"
                />
              </div>

              <button
                // onClick={()=>{setShowPaymentInput(!showPaymentInput)}}
                className=" col-span-2 font-bold text-lg btn bg-sky-500 text-white"
                type="submit"
              >
                Next
              </button>
            </form>
    </section>
    {/* payment form  */}
    <section>
    <form className="  w-10/12 max-w-[600px] mx-auto  p-5" onSubmit={handleSubmit}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      backgroundColor:"#fff",
                      color: "#171414",
                      "::placeholder": {
                        color: "#171414",
                      },
                    },
                    invalid: {
                      color: "#9e214",
                    },
                  },
                }}
              />
              <div className=" flex mt-5 justify-center ">
                <button
                  className=" font-bold text-lg btn bg-sky-500 text-white"
                  type="submit"
                  // disabled={!stripe || !elements || !clientSecret}
                >
                  Pay
                </button>
              </div>
              {/* show payment error 
              <p className=" text-lg font-semibold text-red-700">{error}</p>
              <p className=" text-lg font-semibold text-green-700">{transectionID}</p> */}
            </form>
    </section>
    <CardElement
  id="my-card"
  // onChange={handleChange}
  // {/* Options are passed in on their own prop. */}
  options={{
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontSize: '16px',
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE',
      },
    },
  }}
/>
   </main>
  );
};

export default CheckoutForm;
