import Image from "next/image";
import seller from "../../../../public/seller/seller-image.jpg"
import Heading from "@/components/custom/Heading/Heading";
const BecomeSeller = () => {
  return (
   <main  className="my-20 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto ">
    <Heading subHeading={'Become Seller'} title={'Start Selling in Our Shop'}></Heading>
    {/* image section  */}
    <section>
      <Image src={seller} alt=" seller image" width={500} height={500}></Image>
    </section>
    {/* text section  */}
     <section></section>
   </main>
  );
};

export default BecomeSeller;