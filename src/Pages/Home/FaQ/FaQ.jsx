import Heading from "@/components/custom/Heading/Heading";
import FAQ from "../../../../public/speech-bubble-with-question-mark.png";
import Image from "next/image";

const FaQ = () => {
  return (
    <main className="my-20 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto ">
      <section className="  my-10 rounded-md ">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <div>
            <Heading
              subHeading={"Some Asked QnA About Gadgets Shop"}
              title={"Frequently Asked Questions"}
            ></Heading>
          </div>
          {/* main content  */}
          <div className=" mt-10 flex flex-col-reverse lg:flex-row-reverse gap-5 ">
            <div className="flex flex-col w-full lg:w-[60%] divide-y sm:px-8 lg:px-10 divide-gray-600 gap-3">
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                  What is Poultry Hub?
                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                    Poultry Hub is an online platform where users can buy and
                    sell chickens, and feed, and generate ideas about building
                    and managing poultry farms. We aim to provide a
                    comprehensive solution for all poultry farming needs.
                  </p>
                </div>
              </details>
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                  How do I buy or sell chickens and feed on Poultry Hub?
                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                  To buy or sell chickens and feed, you need to create an account on our website. Once registered, you can browse listings, post your own products for sale, and connect with other users to complete transactions.
                  </p>
                </div>
              </details>
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                Is there a fee for using Poultry Hub?
                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                  Creating an account and browsing the platform is free. However, there may be listing fees or transaction fees for certain services. Please refer to our pricing page for detailed information.
                  </p>
                </div>
              </details>
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                How can Poultry Hub help me in building a poultry farm?
                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                  Poultry Hub provides resources, articles, and expert advice to help you plan and build your poultry farm. Whether you are a beginner or an experienced farmer, you will find valuable information and ideas to enhance your farming practices.
                  </p>
                </div>
              </details>
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                What measures does Poultry Hub take to ensure the safety and quality of transactions?
                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                  We have a verification process for sellers and buyers to ensure the credibility of our users. Additionally, we provide a secure payment gateway and a rating system to maintain transparency and trust in transactions.
                  </p>
                </div>
              </details>
              <details className=" border border-gray-300 rounded-md pl-2">
                <summary className="py-2 font-bold text-xl outline-none cursor-pointer hover:underline">
                How can I contact customer support if I have an issue?
                </summary>
                <div className="pl-7 pb-4">
                  <p className="">
                  If you have any questions or encounter any issues, you can reach out to our customer support team through the contact form on our website. We are here to assist you with any concerns you may have.
                  </p>
                </div>
              </details>
        
            </div>
            <div className="w-full h-[400px] lg:w-[40%] ">
              <Image
                src={FAQ}
                alt="FaQ image"
                className=" w-full h-full bg-slate-200"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FaQ;
