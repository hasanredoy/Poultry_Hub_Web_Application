"use client";
import useAxios from "@/hooks/useAxios";
import useGetUser from "@/hooks/useGetUser";
import { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext(null);
const axiosHook = useAxios();
// function to load cart
const loadCart = async (email) => {
  const { data } = await axiosHook.get(`/api/count/cart?email=${email}`);
  //  console.log(data);
  return data;
};
// function to load reviews
const loadReviews = async (size,page) => {
  const { data } = await axiosHook.get(`/api/reviews?size=${size}&page=${page}`);
  console.log(data);
  return data?.result;
};

// load all user count
const loadUsersCount = async () => {
  const res = await axiosHook.get(`/api/count/user`);
  // console.log(res?.data?.result);
  return res?.data?.count;
};

const ContextProvider = ({ children }) => {
  //  state to handle cart refetch
  const [refetch, setRefetch] = useState(0);
  //  state to handle reviews refetch
  const [refetchReview, setRefetchReview] = useState(0);
  // cart state
  const [cart, setCart] = useState([]);
  // reviews state
  const [reviews, setReviews] = useState([]);
  // state to handle pagination page
  const [currentPage, setCurrentPage] = useState(0);
  // state to handle user count
  const [userCount, setUserCount] = useState(0);

  const [totalCartItem , setTotalCartItem]=useState([])

  const user = useGetUser();
  // effect to call cart
  useEffect(() => {
    const loader = async () => {
      const cartData = await loadCart(user?.email);
      setCart(cartData?.count);
      setTotalCartItem(cartData?.result)
    };
    loader();
  }, [user, refetch]);
  // effect to call reviews
  useEffect(() => {
    const loader = async () => {
      const reviewsData = await loadReviews(6 , currentPage);
      setReviews(reviewsData);

    };
    loader();
  }, [refetchReview,currentPage]);
  // effect to call user count
  useEffect(() => {
    const loader = async () => {
      const countUser = await loadUsersCount();
      setUserCount(countUser);

    };
    loader();
  }, []);
  // console.log(reviews);

  const contextInfo = {
    carts: cart,
    refetch,
    setRefetch,
    user,
    reviews,
    refetchReview,
    setRefetchReview,
    currentPage,
    setCurrentPage,
    totalCartItem,
    userCount
  };
  return (
    <GeneralContext.Provider value={contextInfo}>
      {children}
    </GeneralContext.Provider>
  );
};

export default ContextProvider;
