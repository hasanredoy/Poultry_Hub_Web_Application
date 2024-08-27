import useAxios from "@/hooks/useAxios"

export const dataLoader = async(url)=>{
  //console.log({url});
  const axiosHook= useAxios()
  const res  = await axiosHook.get(`/api${url}`)
  //console.log(res,'server');
  return await res.data
}