"use client";
import Image from "next/image";
import login_banner from "../../../public/login-image.png";
import React, { Suspense, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import {useRouter, useSearchParams } from "next/navigation";
import GoogleLogin from "@/components/custom/social-login/GoogleLogin";
import useGetUser from "@/hooks/useGetUser";

const Login = () => {
  // state to handle loading
  const [loading, setLoading] = useState(false);
  // state show and hide password
  const [showPass, setShowPass] = useState(false);
  const router = useRouter()
  const session = useSession()
  const searchParams = useSearchParams()
  const path = searchParams.get("redirect")||'/'
  const user = useGetUser()
  

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      // callbackUrl: path?path:"/"
    });
    if (res) {
      setLoading(false);
    }
    if(user){
      toast.success('login successful')
    }
    // if (session.data?.user?.email) {
      //   // router.push(path?.redirect)
      //   //console.log(res);
      // }
    };
    // if (session.data?.user?.email) {
      //   router.push(path?.redirect)
      // }
     if(user){
      router.push(path?path:'/')
     }
  //console.log(session);
  return (
    <Suspense fallback={<span>Loading</span>}>
    <main className="hero  min-h-screen  max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto">
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center flex-1 lg:text-left">
          <Image
            src={login_banner}
            className=" h-[300px] lg:h-full"
            alt="login banner imge"
            height={700}
            width={700}
          />
        </div>
        <div className="flex-1 card bg-base-200 w-full max-w-md shrink-0 ">
          <h3 className=" text-center subtitle pt-3">Please Login</h3>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className=" text-sm font-bold lg:text-lg  ">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
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
              </a>
              <label className="label">
                <a href="#" className="text-base link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button disabled={loading} className="btn btn-primary">
                {loading ? (
                  <FiLoader className=" animate-spin text-2xl font-bold text-black"></FiLoader>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
          <div className="divider">or</div>
          <GoogleLogin/>
          <Link
            href={"/register"}
            className=" py-3 flex  justify-center gap-2 text-sm lg:text-base text-center "
          >
            New in Poultry Hub? Please{" "}
            <span className=" font-semibold text-blue-700">Register</span>.
          </Link>
        </div>
      </div>
      <Toaster></Toaster>
    </main>
    </Suspense>
  );
};

export default Login;
