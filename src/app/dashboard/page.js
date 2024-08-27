"use client";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaPen } from "react-icons/fa";
// import react number input
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { signIn, useSession } from "next-auth/react";
import useAxios from "@/hooks/useAxios";


const page = () => {
  // state for from modal
  const [modal, setModal] = useState(false);
  // state show and hide password
  const [showPass, setShowPass]=useState(false)

  const axiosHook = useAxios()
  //  get user
  const {data:session, update} = useSession()
  //console.log(session);
  const user = session?.user
  //console.log(user);
  const [value, setValue] = useState(user?.phone);
  const updateProfile=async(e)=>{
    e.preventDefault()
   const name = e.target?.name?.value
   const {data}= await axiosHook.post('/api/update_profile',{name})
   //console.log(data?.result);
   if(data?.result){
    await signIn('credentials', { redirect: false, email, password });
   }
  }
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
              onClick={() => setModal(!modal)}
              className=" btn btn-neutral text-white flex items-center gap-3"
            >
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
          <button
            onClick={() => setModal(!modal)}
            className=" btn btn-circle text-xl font-semibold  absolute right-1 top-1 "
          >
            X
          </button>
          <form onSubmit={updateProfile} className="card-body">
            {/* Name1 div  */}
            <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  First Name
                </span>
              </label>
              <input
                type="text"
                // defaultValue={user?.name?.split(" ")[0]}
                placeholder="First Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Name2 div  */}
            {/* <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                defaultValue={user?.name?.split(" ")[1]}
                placeholder="Last Name"
                name="name2"
                className="input input-bordered"
                required
              />
            </div> */}
            {/* Phone number div  */}
            <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Phone Number
                </span>
              </label>
              <PhoneInput
              className=" input input-bordered"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
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
                defaultValue={user?.email}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            {/* password div  */}
            <div className="form-control relative">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Enter your password to continue
                </span>
              </label>
              <input
                type={showPass?"text":"password"}
                placeholder="Password"
                className="input input-bordered"
                required
              />
            <a onClick={()=>setShowPass(!showPass)} className=" absolute top-14 right-5 ">
              {showPass?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}
            </a>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </section>
      )}
    </section>
  );
};

export default page;
