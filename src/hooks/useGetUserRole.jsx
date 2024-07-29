'use client'
import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const axiosHook = useAxios()
const loadUserRole =async(email)=>{
      const {data}=await axiosHook.get(`/api/user/role?email=${email}`)
      return data?.role
}
const useGetUserRole = (email) => {
  // state user role 
  const [role, setRole ]=useState()
  useEffect(()=>{
    //make loader to call user role func
    const loader =async ()=>{
      const userRole = await loadUserRole(email);
      console.log(userRole);
      setRole(userRole)
    }
    loader()
  },[email])
  console.log(role);
  return [role]
};

export default useGetUserRole;