import useAxios from "@/hooks/useAxios";
const axiosHook =useAxios()
const loadAllItems =async()=>{
  const res =await axiosHook.get(`/api/all_items`)
  console.log(res?.data?.result);
  return res?.data?.result
}
const ChickenAndFeeds = () => {
  return (
    <main>
      
    </main>
  );
};

export default ChickenAndFeeds;