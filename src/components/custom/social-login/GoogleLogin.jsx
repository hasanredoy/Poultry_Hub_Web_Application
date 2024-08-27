'use client'
import useGetUser from "@/hooks/useGetUser";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const path = searchParams.get("redirect")
  const user = useGetUser()
    //console.log(path);
  const LoginWithGoogle= async()=>{
    
    const res = await signIn('google',{
      redirect:true,
      //  callbackUrl: path?path:"/"
    })
    if(user){
      //console.log({path});
      toast.success('login successful')
    }
  }
 if(user){
  router.push(path?path:"/")
 }

  return (
    <div className=" flex justify-center my-5 ">
      <button onClick={LoginWithGoogle} className=" btn border-gray-500 flex items-center"> Continue With <FcGoogle className=" text-2xl"></FcGoogle></button>
      <Toaster/>
    </div>
  );
};

export default GoogleLogin;