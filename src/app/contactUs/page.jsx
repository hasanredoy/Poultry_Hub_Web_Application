"use client";
import Image from "next/image";
import contactUs from "../../../public/contactus/contact_us.png";
import messageImage from "../../../public/contactus/message.png";
import Heading from "@/components/custom/Heading/Heading";
import { FaBuilding, FaClock, FaLocationArrow } from "react-icons/fa";
import { MdHome, MdLocationPin, MdMail, MdPhone, MdStreetview } from "react-icons/md";
const ContactUs = () => {
  return (
    <main className=" my-10 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto">
      {/* banner section  */}
      <section className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            alt="contact us"
            height={600}
            width={600}
            src={contactUs}
            className="max-w-md rounded-lg "
          />
          <div>
            <h1 className="title">Get in Touch with Poultry Hub</h1>
            <p className="py-6 max-w-md">
              We’re here to help with any questions, feedback, or support you
              need. Whether you're looking for more information about our
              products, need assistance with your account, or want to share your
              experience with us, our dedicated team is ready to assist you.
            </p>
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </section>
      <div className="divider"></div>
      {/* message section  */}
        
      <section className=" my-10 ">
        {/* import custom heading  */}
        <Heading
          subHeading={"Feel Free "}
          title={"Send Us Direct Message"}
        ></Heading>
        <div className="hero-content justify-between flex-col lg:flex-row">
          {/* message image  */}
          <Image
            alt="message us image"
            height={400}
            width={400}
            src={messageImage}
            className="max-w-md rounded-lg "
          />
          {/* form div  */}
          <div className="card bg-base-200 w-full max-w-md shrink-0 ">
            <h3 className="subtitle text-center pt-2">Send a Message</h3>
            <form className="card-body">
              {/* subject div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                    Subject*
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="subject"
                  className="input "
                  required
                />
              </div> 
              {/* message div  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-sm lg:text-base font-bold">
                    Message*
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
<div className="divider"></div>
      {/* direct contact section  */}
      <section className=" my-10 mt-20">
    {/* get custom heading for direct contact section  */}
        <Heading subHeading={'Reach out'} title={'Contact Us'}></Heading>
        {/* text section  */}
        <section className=" flex flex-col md:flex-row w-[90%] mx-auto  justify-center md:justify-evenly md:w-[70%] lg:w-[50%] mt-5">
          {/*number email contact  section  */}
        <div className="  ">
            <h1 className="subtitle">Contact Via</h1>
            <p className="py-1 mt-1 gap-2 flex items-center">
            <MdMail></MdMail> support@poultryhub.com
            </p>
            
            <p className="py-1 mt-1 gap-2 flex items-center">
            <MdPhone></MdPhone> +91114444552.
            </p>
            
            <p className="py-1 gap-2 flex items-center">
            <FaClock></FaClock> mon-sat , 10am to 10pm. 

            </p>
            
          </div>
          <div className="divider divider-vertical md:divider-horizontal lg:mx-10">or</div>
          {/*direct contact  section  */}
        <div className="  ">
            <h1 className="subtitle">Direct Contact</h1>
            <p className="py-1  mt-1 gap-2 flex items-center"> 
            <MdHome></MdHome> Poultry hub LLC,
            </p>
            <p className="py-1  mt-1 gap-2 flex items-center">
              
            <FaBuilding></FaBuilding> arl3 , 14th floor,
            </p>
          
            <p className="py-1  gap-2 flex items-center">
            <MdLocationPin></MdLocationPin> Abu Dhabi , United Arab Emirates. 

            </p>
            
          </div>
        </section>
      </section>
    </main>
  );
};

export default ContactUs;
