'use client'
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext(null)
const axiosHook = useAxios();
// function to load cart
const loadCart = async (email) => {
  const { data } = await axiosHook.get(`/api/count/cart?email=${email}`);
  //  console.log(data);
  return data?.count;
};

const ContextProvider = ({children}) => {
    //  state to handle refetch
    const [refetch, setRefetch] = useState(0);
    // cart state
    const [cart, setCart] = useState([]);

    const user = useGetUser()
    	// effect to call cart 
  useEffect(() => {
    const loader = async () => {
      const cartData = await loadCart(user?.email);
      setCart(cartData);
    };
    loader();
  }, [user, refetch]);
  // console.log(cart);
  const contextInfo ={
    carts:cart,
    refetch,
    setRefetch
  }
  return (
    <GeneralContext.Provider value={contextInfo}>
      {children}
    </GeneralContext.Provider>
  );
};

export default ContextProvider;