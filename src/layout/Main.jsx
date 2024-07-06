'use client'
import Banner from "@/Pages/Home/Banner/Banner";
import BuyProduct from "@/Pages/Home/BuyProduct/BuyProduct";
import { useEffect, useState } from "react";

export default function Main() {
  const [theme , setTheme]=useState('light')

//check local storage and set the local storage value in theme state
useEffect(()=>{
  const currentTheme= localStorage.getItem('theme') 
  if(currentTheme){
  setTheme(currentTheme)
  document.documentElement.setAttribute('data-theme',currentTheme)
  }
},[])
  return (
    <main className="">
      {/* banner  */}
      <div className=" w-full mb-20 ">
        <Banner></Banner>
      </div>
      <div className=" w-full ">
        <BuyProduct></BuyProduct>
      </div>
    </main>
  );
}
