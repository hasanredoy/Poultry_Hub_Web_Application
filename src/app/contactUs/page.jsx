'use client'
import Image from "next/image";
import contactUs from "../../../public/contactus/contact_us.png";
import messageImage from '../../../public/contactus/message.png'
import Heading from "@/components/custom/Heading/Heading";
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
      <div className="hero-content flex-col lg:flex-row">
    <Image
     alt="message us image"
     height={600} 
     width={600}
      src={messageImage}
      className="max-w-md rounded-lg " />
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
      </section>
    </main>
  );
};

export default ContactUs;
