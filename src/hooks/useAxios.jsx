import axios from "axios";

const axiosHook = axios.create({
  baseURL: process.env.Base_Url // import base url from env file
})
const useAxios = () => {
  // return axios hook 
  return axiosHook;
};

export default useAxios;