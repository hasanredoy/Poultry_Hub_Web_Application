'use client'
import Banner from "@/Pages/Home/Banner/Banner";
import BuyProduct from "@/Pages/Home/BuyProduct/BuyProduct";
import GenerateIdea from "@/Pages/Home/GenerateIdea/GenerateIdea";
import OurSuccess from "@/Pages/Home/OurSuccess/OurSuccess";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


export default function Main() {

  return (
    <QueryClientProvider client={queryClient}>
      
    
    <main className="">
      {/* banner  */}
      <div className=" w-full mb-20 ">
        <Banner></Banner>
      </div>
      <div className=" w-full ">
        <BuyProduct></BuyProduct>
      </div>
      <div>
        <OurSuccess></OurSuccess>
      </div>
      <div>
        <GenerateIdea></GenerateIdea>
      </div>
    </main>
    </QueryClientProvider>
  );
}
