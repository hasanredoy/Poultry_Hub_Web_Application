'use client'
import Banner from "@/Pages/Home/Banner/Banner";
import BecomeSeller from "@/Pages/Home/BecomeSeller/BecomeSeller";
import BuyProduct from "@/Pages/Home/BuyProduct/BuyProduct";
import FaQ from "@/Pages/Home/FaQ/FaQ";
import Featured from "@/Pages/Home/Featured/Featured";
import GenerateIdea from "@/Pages/Home/GenerateIdea/GenerateIdea";
import Modal from "@/Pages/Home/Modal/Modal";
import OurPartners from "@/Pages/Home/OurPartners/OurPartners";
import OurSuccess from "@/Pages/Home/OurSuccess/OurSuccess";
import Testimonial from "@/Pages/Home/Testimonial/Testimonial";
import WhyChooseUs from "@/Pages/Home/WhyChooseUs/WhyChooseUs";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


export default function Main() {

  return (
 
    
    <main className="">
 
      {/* banner  */}
      <section className=" w-full mb-20 ">
        <Banner></Banner>
      </section>
  
      <section className="">
        <BuyProduct></BuyProduct>
      </section>
      <section className="">
        <Featured></Featured>
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
      <section>
        <OurPartners></OurPartners>
      </section>
      <section>
        <FaQ></FaQ>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
    </main>
  );
}
