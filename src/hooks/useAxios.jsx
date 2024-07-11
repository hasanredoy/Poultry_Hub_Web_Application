import axios from "axios"
const axiosURL = axios.create({
  baseURL:"http://localhost:3000"
})
const useAxios = () => {
  return (
    axiosURL
  );
};

export default useAxios;