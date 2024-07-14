'use client'
import Image from "next/image";
import contactUs from "../../../public/contactus/contact_us.png";
import messageImage from '../../../public/contactus/message.png'
import Heading from "@/components/custom/Heading/Heading";
import { FaLocationArrow } from "react-icons/fa";
const ContactUs = () => {
  return (
    <main className=" my-28 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto">
      {/* banner section  */}
      <section className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
     alt="contact us"
     height={600} 
     width={600}
      src={contactUs}
      className="max-w-md rounded-lg " />
    <div>
      <h1 className="title">Get in Touch with Poultry Hub</h1>
      <p className="py-6 max-w-md">
      We’re here to help with any questions, feedback, or support you need. Whether you're looking for more information about our products, need assistance with your account, or want to share your experience with us, our dedicated team is ready to assist you.
      </p>
      <a href="#contact" className="btn-primary">Get Started</a>
    </div>
  </div>
</section>
{/* message section  */}
      <section className=" my-10 ">
        <Heading subHeading={'Feel Free '} title={'Send Us Direct Message'}></Heading>
      <div className="hero-content justify-between flex-col lg:flex-row">
    <Image
     alt="message us image"
     height={400} 
     width={400}
      src={messageImage}
      className="max-w-md rounded-lg " />
    <div className="card bg-base-200 w-full max-w-md shrink-0 ">
      <h3 className="subtitle text-center pt-2">Leave a Message</h3>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-sm lg:text-base font-bold">Subject</span>
          </label>
          <input type="text" placeholder="subject" className="input " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-sm lg:text-base font-bold">Message</span>
          </label>
          <textarea name="message" className=" textarea " id=""></textarea>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn flex items-center gap-2 btn-primary">Send <FaLocationArrow></FaLocationArrow></button>
        </div>
      </form>
    </div>
  </div>
      </section>
    </main>
  );
};

export default ContactUs;
