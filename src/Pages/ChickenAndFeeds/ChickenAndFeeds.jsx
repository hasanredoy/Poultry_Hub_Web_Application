'use client'
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import Banner from "./Banner";

// get custom axios hook
const axiosHook =useAxios()
// load all chicken and feeds data
const loadAllItems =async()=>{
  const res =await axiosHook.get(`/api/all_items`)
  // console.log(res?.data?.result);
  return res?.data?.result
}
const ChickenAndFeeds = () => {
  // state for all chicken and feed 
  const [allChickenAndFeeds, setAllChickenAndFeeds]= useState([])

  useEffect(()=>{
    //function for call loadAllItems 
    const loader=async()=>{
      const data =await loadAllItems()
      // console.log({data});
    setAllChickenAndFeeds(data)
    } 
    loader()
  },[])
  // console.log({allChickenAndFeeds});

  return (
    <main >
      {/* banner  */}
      <section >
        <Banner></Banner>
      </section>
   
    </main>
  );
};

export default ChickenAndFeeds;