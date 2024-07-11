import axios from "axios";

const axiosHook = axios.create({
  baseURL: process.env.Base_Url
})
const useAxios = () => {
  return axiosHook;
};

export default useAxios;