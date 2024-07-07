'use client'
import Banner from "@/Pages/Home/Banner/Banner";
import BuyProduct from "@/Pages/Home/BuyProduct/BuyProduct";

export default function Main() {

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
