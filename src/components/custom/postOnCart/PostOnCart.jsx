"use client";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const PostOnCart = ({ cart }) => {
  const user = useGetUser();
  const router = useRouter()
  const axiosHook = useAxios();
  const cartData = {
    name: user?.name,
    email: user?.email,
    id: cart?._id,
    price: cart?.price,
    itemName: cart?.name,
  };
  // console.log(cartData);
  const [response, setResponse] = useState();
  const handlePost = () => {
    if(!user){
      toast.error('Please login to make purchase')
      return router.push('/login')
    }
    axiosHook.post("/api/cart", cartData).then((res) => {
      setResponse(res.data?.result);
      // console.log(res.data);
      if(res?.data?.result?.insertedId){
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
