'use client'
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";

const PostOnCart = ({cart}) => {
  const user = useGetUser()          
  const axiosHook = useAxios()
  const cartData= {
    name:user?.name,
    email:user?.email,
    id :cart?._id,
    price:cart?.price,
    itemName:cart?.name,

  }
  console.log(cartData);
  const [response, setResponse]=useState()
  const handlePost=()=>{
    axiosHook.post('/api/cart',cartData)
    .then(res=>{
      setResponse(res.data?.result)
      console.log(res.data)})
  }
return(
  <button onClick={handlePost} className=" btn-card border-b-4   border-gray-300">
            Add to Cart
          </button>
)
  };

export default PostOnCart;