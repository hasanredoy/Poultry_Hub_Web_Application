import useGetUser from "@/hooks/useGetUser";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const path = searchParams.get("redirect")
  const user = useGetUser()
    console.log(path);
  const LoginWithGoogle=()=>{
    return signIn('google',{
      redirect:false,
      //  callbackUrl: path?path:"/"
    })
  }
  if(user){
    setTimeout(() => {
      swal("Logged in",{icon:"success"})
      router.push(`/`)
      
    }, 1000);
  }
  return (
    <div className=" flex justify-center my-5 ">
      <button onClick={LoginWithGoogle} className=" btn border-gray-500 flex items-center"> Continue With <FcGoogle className=" text-2xl"></FcGoogle></button>
    </div>
  );
};

export default GoogleLogin;