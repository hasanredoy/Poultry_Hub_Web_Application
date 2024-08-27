'use client'
import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import useGetUser from "./useGetUser";

const axiosHook = useAxios()
const loadUserRole =async(email)=>{
  // //console.log({email});
      const {data}=await axiosHook.get(`/api/user/${email}`)
      // //console.log({data});
      return data?.role
}
const useGetUserRole =() => {
  const user=useGetUser()
  // state user role 
  const [role, setRole ]=useState('user')

  useEffect(()=>{
    //make loader to call user role func
    const loader =async ()=>{
      const userRole = await loadUserRole(user?.email);
      // //console.log(userRole);
     await  setRole(userRole)
    }
    loader()
  },[user])
  // //console.log(role);
  return role
};

export default useGetUserRole;