'use client'
import Image from 'next/image';
import login_banner from '../../../public/login-image.png';
import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi';



const Login = () => {
    // state to handle loading 
    const [loading , setLoading]=useState(false)
    // state show and hide password
      const [showPass, setShowPass] = useState(false)
  const handleLogin=async(e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const res =await signIn("credentials",{
      email,
      password,
      redirect:false
    })
    console.log(res);
  }
  return (
    <main className="hero  min-h-screen  max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto">
  <div className="hero-content flex-col md:flex-row">
    <div className="text-center flex-1 lg:text-left">
      <Image src={login_banner} className=' h-[300px] lg:h-full' alt='login banner imge' height={700} width={700}/>
    </div>
    <div className="flex-1 card bg-base-200 w-full max-w-md shrink-0 ">
    <h3 className=' text-center subtitle pt-3'>Please Login</h3>

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className=" text-sm font-bold lg:text-lg  ">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
            {/* password div  */}
            <div className="form-control relative">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Password
                </span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered"
                required
                name="password"
              />
              <a
                onClick={() => setShowPass(!showPass)}
                className=" absolute top-14 right-5 "
              >
                {showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </a><label className="label">
            <a href="#" className="text-base link link-hover">Forgot password?</a>
          </label>
            </div>
        <div className="form-control mt-6">
        <button disabled={loading} className="btn btn-primary">{loading?<FiLoader className=" loading-infinity text-2xl font-bold text-black"></FiLoader>:"Login"}</button>
        </div>
      </form>
      <Link href={'/register'} className=' py-3 flex  justify-center gap-2 text-sm lg:text-lg text-center font-medium'>New in Poultry Hub? Please  <span className=' font-bold text-blue-700'>Register</span>.</Link>
    </div>
  </div>

    </main>
  );
};

export default Login;