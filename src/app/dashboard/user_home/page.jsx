import Image from "next/image";
import cart from  '../../../../public/dashboard_icons/shopping-cart.png'

const page = () => {
  //  get user
  const user = {
    name: "Mr X",
    email: "hello@gmail.com",
    phone: "+934990898",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  };
  const userStats = {
    cart:5,
    reviews:2,
    payments:3
  }
  return (
    <main>
      {/* stats section  */}
      <section className="stats shadow flex justify-center mx-5">
        {/* stat 1 user cart  */}
        <div className="stat bg-orange-300">
          <div className="stat-figure text-primary">
            <Image alt=" cart image" width={40} height={40} src={cart}>

            </Image>
          </div>
          <div className="stat-title">Your Cart</div>
          <div className="stat-value text-primary">{userStats?.cart}</div>
            <div className="stat-desc text-black">3 from last month</div>
        </div>
        {/* stat 2 user reviews  */}

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value  text-green-600 ">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        {/* stat 3 user payment  */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </section>

      {/* container section  */}
      <section className=" flex gap-10 flex-col lg:flex-row">
        {/* user info section */}
        <section></section>
        {/* user order info  section */}
        <section></section>
      </section>
    </main>
  );
};

export default page;
