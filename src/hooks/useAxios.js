const { default: axios } = require("axios");

const axiosURL = axios.create({
  baseURL:process.env.base_url
})
console.log(process.env.base_url);
const useAxios = () => {
  return (
    axiosURL
  );
};

export default useAxios;