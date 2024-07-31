import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

// react number
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import swal from "sweetalert";

import moment from "moment"
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";

const CheckOutForm = () => {
  const axiosHook = useAxios();
  // get user
  const  user  = useGetUser()

  // phon number state
  const [phoneNumber, setPhoneNumber] = useState();
  //state for show payment form after filling out delivery form
  const [showPaymentInput, setShowPaymentInput] = useState(false);

  //state for  payment error
  const [error, setError] = useState("");
  //state for  client secret
  const [clientSecret, setClientSecret] = useState("");
  //state for transectionID
  const [transectionID, setTransectionID] = useState("");
  //state for delivery info
  const [delivery , setDelivery] = useState({});


// console.log(clientSecret);

  // get all cart and price
  // const [data,refetch] = useCart();
  // const cart =data.map(item=>item.cart)
  // console.log(cart);
  // console.log(data);
  const totalPrice = 100
  
  // data?.reduce((a, b) => {
  //   const priceB = parseFloat(b?.cart?.price) || 0;
  //   const priceA = parseFloat(a) || 0;
  //   return priceA + priceB;
  // }, 0);


  const email =user?.email
  //  get result and post function 
  const [mutateAsync,result]=axiosHook.post(`/payments?email=`)
  // console.log({result});
  // show toast after successfully payment 
  if(result?.result?.insertedId&&result?.deleteRes?.deletedCount>0){
  //  refetch()
  //  navigate("/dashboard/paymentHistory")
    swal.fire({
      text:"Payment Successfully",
      icon:'success'
    })
  }

  // get stripe and elements from stripe
  const stripe = useStripe();
  const elements = useElements();
// console.log(totalPrice);
  //handler for delivery info
  const handleDelivery = async (e) => {
    e.preventDefault();
    const form = e.target;
    const house = form.house.value;
    const location = form.location.value;
    const date = form.date.value;
    const newDate = moment(new Date()).format().split("T")[0];
    // console.log(date,newDate);
    if(date<newDate){
      swal.fire({
        text:"Invalid Date",
        icon:"error",
        didClose:true
      })
      return 
    }
    const deliveryInfo = {
      phone: phoneNumber,
      location: location,
      house: house,
      date: date,
    };
    if (house && location && date) {
      setShowPaymentInput(!showPaymentInput); 
      setDelivery(deliveryInfo)
       const res = await axiosCommon.post("/payment-intent", {
      price: totalPrice,
    });
    // console.log(res.data);
    setClientSecret(res.data?.clientSecret);
    }
    // console.log(deliveryInfo);
  
  };
  // console.log({ clientSecret });
// console.log(delivery);

  // handler function for payment
  const handleSubmit = async (event) => {
    event.preventDefault();
    // return if not stripe and elements
    if (!stripe || !elements) {
      return;
    }
    // return if elements == null
    if (elements == null) {
      return;
    }
    // get card Element
    const card = elements.getElement(CardElement);
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

    //  confirm payment 
    const {paymentIntent , error:confirmError}= await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: card,
        billing_details:{
          email: user?.email||'anonymous',
          name: user?.displayName||'anonymous',
        }
      }

    })
    if(confirmError){
      console.log({confirmError});
    }else{
      // console.log(paymentIntent);
    }
    if(paymentIntent?.status=='succeeded'){
      setTransectionID(paymentIntent.id)
       const payment ={
        transectionID:paymentIntent.id,
        email:user?.email,
        name:user?.displayName,
        totalPrice,
        delivery,
        cart,
        status:"order received"
       }
      //  console.log(payment);
       await mutateAsync(payment)
    }
  };

  return (
    <div className=" mt-[5%]">
      <div>
        <h1 className=" text-2xl font-bold text-center">
          Welcome{" "}
          <span className=" text-sky-500">
            {user?.displayName ? user.displayName : "Back"}
          </span>
        </h1>
      </div>
      {/* form div  */}
      <div>
        <div className=" bg-base-200 rounded-xl  p-5 lg:p-10  shadow-lg ">
          <h1 className=" text-lg md:text-lg font-bold text-center mb-5">
            {!showPaymentInput
              ? "Please Provide your delivery information blew.. "
              : "Please give your card info blew and pay.."}
          </h1>

          {showPaymentInput || (
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
          )}
          {showPaymentInput && (
            <form className="  w-10/12 mx-auto  p-5" onSubmit={handleSubmit}>
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
                      color: "#9e2146",
                    },
                  },
                }}
              />
              <div className=" flex mt-5 justify-center ">
                <button
                  className=" font-bold text-lg btn bg-sky-500 text-white"
                  type="submit"
                  disabled={!stripe || !elements || !clientSecret}
                >
                  Pay
                </button>
              </div>
              {/* show payment error  */}
              <p className=" text-lg font-semibold text-red-700">{error}</p>
              <p className=" text-lg font-semibold text-green-700">{transectionID}</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOutForm;
