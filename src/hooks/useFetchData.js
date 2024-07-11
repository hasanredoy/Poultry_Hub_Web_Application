import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const axiosHook =useAxios()

const useFetchData = (url) => {
  // console.log(url);
const {data=[],isFetching,refetch}=useQuery({
  queryKey:[url],
  queryFn:async()=>{
    const res= await axiosHook.get(url)
    return res.data.result;
  }
})
return [data,isFetching,refetch]

};

export default useFetchData;
