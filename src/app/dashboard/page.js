"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPen } from "react-icons/fa";

const page = () => {
  // state for from modal
  const [modal, setModal] = useState(false);

  //  get user
  const user = {
    name: "Mr X",
    email: "hello@gmail.com",
    phone: "+934990898",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  };
  return (
    <section className="   flex flex-col justify-center items-center ">
      {/* avatar section  */} {/* from section  */}
      {!modal ? (
        <section className="my-20  flex flex-col justify-center items-center ">
          <div className="avatar">
            <div className=" flex justify-center ring-success ring-offset-base-100 w-20 md:w-44 rounded-full ring ring-offset-2">
              <Image
                className=" h-20 w-20 md:w-44 md:h-44"
                alt=" avatar"
                width={200}
                height={200}
                src={user?.image}
              />
            </div>
          </div>
          <div className=" flex flex-col gap-5 justify-center text-center my-6">
            <h3 className=" text-xl text-center font-bold">
              Hi Welcome Back,{" "}
              <span className=" text-primary">
                {user?.name ? user.name : "User"}
              </span>
            </h3>
            <button 
            onClick={()=>setModal(!modal)}
            className=" btn btn-neutral text-white flex items-center gap-3">
              <FaPen></FaPen>
              Update Profile
            </button>
          </div>
        </section>
      ) : (
        <section className=" relative mt-5  flex-1 card bg-base-300 border w-full max-w-2xl lg:max-w-md shrink-0 ">
          <h3 className=" text-center text-base font-bold lg:text-xl pt-3">
            Update your profile
          </h3>
          <button onClick={()=>setModal(!modal)} className=" btn btn-circle text-xl font-semibold  absolute right-1 top-1 ">X</button>
          <form className="card-body">
            {/* Name div  */}
            <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Phone number div  */}
            <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Phone Number
                </span>
              </label>
              <input
                type="number"
                placeholder="Your Phone Number"
                className="input input-bordered"
                required
              />
            </div>
            {/* email div  */}
            <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            {/* password div  */}
            <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Enter your Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral text-white">Update</button>
            </div>
          </form>
        </section>
      )}
    </section>
  );
};

export default page;
