import axios from "axios"
const axiosURL = axios.create({
  baseURL:process.env.Base_URL
})
console.log(process.env.Base_URL);
const useAxios = () => {
  return (
    axiosURL
  );
};

export default useAxios;