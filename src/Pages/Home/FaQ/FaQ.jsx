
const FaQ = () => {
  return (
   <main  className="my-20 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto ">
    <section className="bg-base-200  my-10 rounded-md ">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <div>
            <p className="p-2 text-lg text-[#42dec1] font-bold tracking-wider text-center ">
              --?-- Some Asked QnA About Gadgets Shop --?-- 
            </p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          {/* main content  */}
          <div className=" flex flex-col-reverse lg:flex-row gap-5 ">
            <div className="flex flex-col w-full lg:w-[60%] divide-y sm:px-8 lg:px-10 divide-gray-600 gap-3">
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                What types of gadgets do you sell?
                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                  We offer a wide range of gadgets including smartphones, tablets, laptops, smart home devices, wearable tech, gaming consoles, and various accessories.
                  </p>
                </div>
              </details>
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                How can I place an order?
                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                  You can place an order by browsing our products, adding items to your cart, and proceeding to checkout where you can provide your shipping details and payment information.
                  </p>
                </div>
              </details>
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                What payment methods do you accept?
                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                  We accept major credit cards, debit cards, PayPal, and other secure payment methods. Check our Payment Information page for more details.
                  </p>
                </div>
              </details>
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                How long does shipping take?
                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                  Shipping times vary based on your location and the shipping method selected. Standard shipping typically takes 3-7 business days. Express shipping options are available for faster delivery.
                  </p>
                </div>
              </details>
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                What is your return policy?
                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                  We offer a 30-day return policy for most products. Items must be returned in their original condition with all accessories and packaging. 
                  </p>
                </div>
              </details>
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                Do your products come with a warranty?


                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                  Yes, all products come with a manufacturer’s warranty. The warranty period varies by product and manufacturer. Details can be found on the product page.
                  </p>
                </div>
              </details>
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                Do you offer any discounts or promotions?
                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                  Yes, we frequently offer discounts and promotions on select products. Subscribe to our newsletter or follow us on social media to stay updated on the latest deals.
                  </p>
                </div>
              </details>
             
            </div>
            <div className="w-full lg:w-[35%]">
              <img src="https://img.freepik.com/free-vector/curiosity-search-concept-illustration_114360-11031.jpg?w=740&t=st=1716631756~exp=1716632356~hmac=9678f37fe4a96f23e3b041c9f2ce4f962b2c7352711d255d2262a05da450f477" alt="" />
            </div>
          </div>
        </div>
      </section>
   </main>
  );
};

export default FaQ;