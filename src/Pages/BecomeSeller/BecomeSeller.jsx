'use client'
import Heading from "@/components/custom/Heading/Heading";
import { FaLocationArrow } from "react-icons/fa";
import seller from '../../../public/seller/happy-farmer-hens-organic-eggs-600nw-2317428329.webp'
import seller2 from '../../../public/seller/seller-image.jpg'
import Image from "next/image";

const BecomeSeller = () => {
  return (
    <div>
          {/* banner section  */}
          <section className="">
        <div className=" mt-10 mb-20 flex flex-col lg:flex-row-reverse">
         <div className=" flex-1 flex justify-center ">
         <Image
            alt="contact us"
            height={600}
            width={600}
            src={seller}
            className=" w-full  md:w-2/3 mx-auto lg:w-full "
          />
         </div>
          <div className=" flex-1">
            <h1 className="text-xl font-bold lg:text-3xl">Join Our Community of Poultry Entrepreneurs
            </h1>
            <p className="py-6 ">
            At Poultry Hub, we believe in empowering local farmers and entrepreneurs to thrive in the poultry industry. By becoming a seller on our platform, you gain access to a wide network of customers who are looking for quality poultry products and supplies. Whether you are an established business or just starting out, Poultry Hub provides the tools and support you need to grow and succeed.
            </p>
            <a href="#seller" className="btn-primary">
              Become Seller
            </a>
          </div>
        </div>
      </section>
      {/* form section  */}
      <section className=" my-10 ">
        {/* import custom heading  */}
        <Heading
          subHeading={"Fill the form blew"}
          title={"Start Selling"}
        ></Heading>
        <div className=" flex gap-5 mt-10 justify-between flex-col lg:flex-row">
          {/* message image  */}
          <div className="  w-full">
          <Image 
          
          alt="seller form image us image"
          height={600}
          width={500}
          src={seller2}
          className=" w-full bg-gray-300 ] "
        />
          </div>
          {/* form div  */}
          <div className="card bg-base-200 w-full max-w-md shrink-0 ">
            <h3 className="subtitle text-center pt-2">Fill the form</h3>
            <form className="card-body">
              {/* name div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                    Full Name*
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name "
                  className="input "
                  required
                />
              </div> 
              {/* email div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                    Email*
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input "
                  required
                />
              </div> 
              {/* farm name div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                    Farm / Factory Name*
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Farm / Factory"
                  className="input "
                  required
                />
              </div> 
              {/* message div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                   Tell us why you wanna become seller*
                  </span>
                </label>
                <textarea
                  name="message"
                  className=" textarea "
                  id=""
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn flex items-center gap-2 btn-primary">
                  Send <FaLocationArrow></FaLocationArrow>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeSeller;