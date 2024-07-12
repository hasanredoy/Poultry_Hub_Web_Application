'use client'
import Banner from "@/Pages/Home/Banner/Banner";
import BecomeSeller from "@/Pages/Home/BecomeSeller/BecomeSeller";
import BuyProduct from "@/Pages/Home/BuyProduct/BuyProduct";
import GenerateIdea from "@/Pages/Home/GenerateIdea/GenerateIdea";
import OurSuccess from "@/Pages/Home/OurSuccess/OurSuccess";
import Testimonial from "@/Pages/Home/Testimonial/Testimonial";
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
      <section className=" w-full mb-20 ">
        <Banner></Banner>
      </section>
      <section className="">
        <BuyProduct></BuyProduct>
      </section>
      <section className="">
        <OurSuccess></OurSuccess>
      </section>
      <section>
        <GenerateIdea></GenerateIdea>
      </section>
      <section>
        <Testimonial></Testimonial>
      </section>
      <section>
        <BecomeSeller></BecomeSeller>
      </section>
    </main>
    </QueryClientProvider>
  );
}
