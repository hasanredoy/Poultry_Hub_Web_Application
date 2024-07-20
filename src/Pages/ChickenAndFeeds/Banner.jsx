
const Banner = () => {
  return (
    <section
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Welcome To <span className=" text-primary">Poultry Hub</span></h1>
        <p className="mb-5">
         Hello there, we are providing fresh chicken from 100% organic farms. And we're also selling poultry feed that came from organic factories.
        </p>
        <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
      </div>
    </div>
  </section>
  );
};

export default Banner;