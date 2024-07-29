'use client'
import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import useGetUser from "./useGetUser";

const axiosHook = useAxios()
// function to load cart
const loadCart= async(email)=>{
 const {data}=await axiosHook.get(`/api/cart?email=${email}`)
//  console.log(data);
 return data?.result
}
const useUserCart = (email) => {
 // state for refetch cart
  // cart state
  const [cart,setCart]=useState([])
  // get user 
  const user = useGetUser()
  useEffect(()=>{
    const loader = async()=>{
      const cartData = await loadCart(email)
      setCart(cartData)
    }
    loader()
  },[email])
//  console.log(cart);
  return [cart]
};

export default useUserCart;