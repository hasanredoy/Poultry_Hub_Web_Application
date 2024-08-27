"use client";
import Image from "next/image";
import signUp_banner from "../../../public/sign-up.png";
import { useRef, useState } from "react";
import Link from "next/link";
// import react number input
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { postImage } from "@/hooks/postImage";
import useAxios from "@/hooks/useAxios";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";

// get axios hook
const axiosHook = useAxios();

const Register = () => {
  // state to handle loading 
  const [loading , setLoading]=useState(false)
  // get imgbb api key
  const API = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  // //console.log({API});
  // stat for phone number
  const [phone, setPhone] = useState();
  // stat for image url
  const [imageUrl, setImageUrl] = useState("");
  // //console.log(imageUrl);
  // state show and hide password
  const [showPass, setShowPass] = useState(false);

  const imageURL = postImage(imageUrl, API,setLoading);

  // //console.log(imageURL);
const router = useRouter()
  const handleRegister = (e) => {
   try {
    setLoading(true)
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (!phone||phone?.length<5) {
      return toast.error("Number is not valid");
      
    }
    if (password?.length < 6) {
      return toast.error("password must be 6 or more");
    }
    const userData = {
      name,
      email,
      phone,
      imageURL,
      password,
      type: "user",
      registerDate: new Date(),
    };
    //console.log(userData);
    if (!imageURL) return;
    axiosHook.post("/api/register", userData).then((res) => {
      //console.log(res.data);
      setLoading(false)
      if(res.data?.result?.message=='user exist'){
        toast.success("Email already in use")
      }
      if(res.data?.result?.insertedId){
        router.push("/login")
        toast.success("Register Successful ")
      }
    });
   } catch (error) {
    setLoading(false)
    //console.log(error);
   }
  };


  return (
    <main className="hero  min-h-screen  max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto">
      <section className="hero-content flex-col w-full md:flex-row-reverse">
        <div className=" flex-1 lg:text-left w-full min-h-screen h-full">
          <Image
            src={signUp_banner}
            className=" h-[400px] w-full lg:h-full"
            alt="register banner image"
            height={700}
            width={800}
          />
        </div>
        <div className="flex-1 card w-full bg-base-200 max-w-xl lg:max-w-xl shrink-0 ">
          <h3 className=" text-center text-base font-bold lg:text-xl pt-3">
            Please Register
          </h3>
          <form onSubmit={handleRegister} className="card-body">
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
                name={"name"}
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
              <PhoneInput
                className=" input input-bordered"
                placeholder="Enter phone number"
                value={phone}
              
                onChange={setPhone}
              />
            </div>
            {/* photo div  */}
            <div className="form-control">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Photo
                </span>
              </label>
              <input
                onChange={(event) => setImageUrl(event.target.files[0])}
                type="file"
                required
                className=" file-input file-input-bordered"
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
                name="email"
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
            </div>
            {/* check box div  */}
            <div className=" flex gap-2 mt-3">
              <input
                type="checkbox"
                name="remember"
                required
                aria-label="bbb"
                className="mr-1 rounded-sm focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 dark:accent-violet-600"
              />
              <h6 className=" text-sm">Accept Our Terms & Conditions </h6>
            </div>
            <div className="form-control mt-6">
              <button disabled={loading} className="btn btn-primary">{loading?<FiLoader className=" animate-spin   text-2xl font-bold text-black"></FiLoader>:"Register "}</button>
            </div>
          </form>
          <Link
            href={"/login"}
            className=" py-3 flex  justify-center gap-2  text-sm lg:text-base text-center font-medium"
          >
            Already Poultry Hub member? Please{" "}
            <span className=" font-bold text-blue-700">Login.</span>
          </Link>
        </div>
      </section>
      <Toaster />
    </main>
  );
};

export default Register;
