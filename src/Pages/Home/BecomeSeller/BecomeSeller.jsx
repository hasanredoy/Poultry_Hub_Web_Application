import Image from "next/image";
import seller from "../../../../public/seller/seller-image.jpg"
import Heading from "@/components/custom/Heading/Heading";
import Link from "next/link";
const BecomeSeller = () => {
  return (
   <main  className="my-28 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto  pb-5 ">
    <Heading subHeading={'Become Seller'} title={'Start Selling in Our Shop'}></Heading>
  <section className=" flex flex-col gap-5 lg:gap-10 md:flex-row mt-10">
      {/* image section  */}
      <section className=" flex-1 relative">
        <div className="w-full h-full absolute bg-green-800 bg-opacity-20"></div>
      <Image src={seller} className=" w-full z-40" alt=" seller image" width={500} height={500}></Image>
    </section>
    {/* text section  */}
     <section className=" flex-1">
      <h1 className=" subtitle mb-5">
       <span className="text-[#fe6702]   -500">21+</span> Farmers are selling. 
      </h1>
      <p>Start selling in our shop , every day new products are listed in our shop. </p>
      <p>You can trust us , over 21 farmers trusted us and selling their products in our shop, and they never been scammed because our security of selling and listing product is in next level.</p>
      <p className=" mb-5">Don't think anything start selling in our website..</p>
      <Link href={'/become_seller'} className=" btn-primary">Become Seller</Link>

     </section>
  </section>
   </main>
  );
};

export default BecomeSeller;