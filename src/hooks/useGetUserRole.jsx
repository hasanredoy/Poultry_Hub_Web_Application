'use client'
import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import useGetUser from "./useGetUser";

const axiosHook = useAxios()
const loadUserRole =async(email)=>{
      const {data}=await axiosHook.get(`/api/user/role?email=${email}`)
      console.log({data});
      return data?.role
}
const useGetUserRole = () => {
  const user=useGetUser()
  // state user role 
  const [role, setRole ]=useState()
  useEffect(()=>{
    //make loader to call user role func
    const loader =async ()=>{
      const userRole = await loadUserRole(user?.email);
      console.log(userRole);
      setRole(userRole)
    }
    loader()
  },[user?.email])
  console.log(role);
  return [role]
};

export default useGetUserRole;