import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
// import axioHook 

const axiosHook =useAxios()
// function for get Data 
const useGetData = (url)=> { //receive dynamic url  

const {data=[],isFetching,refetch}=useQuery({
  queryKey:[url],
  queryFn:async()=>{
    // get response from fetching data by tanstack
    const res= await axiosHook.get(url)
    // return data 
    return res.data.result;
  }
})

return [data,isFetching,refetch]

};

export default useGetData;
