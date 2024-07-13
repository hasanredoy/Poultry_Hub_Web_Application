import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
// import axioHook 

const axiosHook =useAxios()
// function for get Data 
const useGetData = (url)=> { //receive dynamic url  

return [data,isFetching,refetch]

};

export default useGetData;
