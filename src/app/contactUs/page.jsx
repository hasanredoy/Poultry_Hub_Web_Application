import Image from "next/image";
import contactUs from "../../../public/about.crdownload";
const ContactUs = () => {
  return (
    <main className=" my-28 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto">
      {/* banner section  */}
      <section
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default ContactUs;
