import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import useGetUser from "./useGetUser";

const axiosHook = useAxios()
// function to load cart
const loadCart= async(email)=>{
 const {data}=await axiosHook.get(`/api/cart?email=${email}`)
 console.log(data);
 return data?.result
}
const useUserCart = () => {
  // cart state
  const [cart,setCart]=useState([])
  // get user 
  const user = useGetUser()
  useEffect(()=>{
    const loader = async()=>{
      const cartData = await loadCart(user?.email)
      setCart(cartData)
    }
    loader()
  },[user?.email])
 console.log(cart);
  return [cart]
};

export default useUserCart;