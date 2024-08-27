"use client";
import { useContext, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useUserCart from "@/hooks/useUserCart";
import { GeneralContext } from "@/services/ContextProvider";

const PostOnCart = ({ cart}) => {
  const user = useGetUser()
  const router = useRouter()
  const axiosHook = useAxios();
  const {refetch,setRefetch}=useContext(GeneralContext)||{}
  // //console.log({carts});
  const cartData = {
    name: user?.name,
    email: user?.email,
    id: cart?._id,
    price: cart?.price,
    itemName: cart?.name,
    bookingDate: new Date(),
    category: cart?.category,
    sellerEmail:cart?.email
  };
  // //console.log(cartData);
  const handlePost = () => {
    if(!user){
      toast.error('Please login to make purchase')
      return router.push('/login')
    }
    axiosHook.post("/api/cart", cartData).then((res) => {
      // //console.log(res.data);
      if(res?.data?.result?.insertedId){
        setRefetch(refetch+1)
        toast.success(`${cart?.name} added to cart`)
      }
    });
  };

  return (
 <>
    <button
      onClick={handlePost}
      className=" btn-card border-b-4   border-gray-300"
    >
      Add to Cart
    </button>
    <Toaster/>
 </>
  );
};

export default PostOnCart;
