'use client'
import axios from "axios";
import { useState } from "react";

// const API = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
// console.log({API}); 
export const postImage = (image,API,setLoading) => {
  // console.log(image);
  const [imageURL , setImageURL]=useState(null)

  const imageData = new FormData();
  imageData.append("image", image);
 try {
  if(!image)return
    axios.post(`https://api.imgbb.com/1/upload?key=${API}`,imageData)
      .then((res) => {
        // console.log(res.data);
       setImageURL(res.data?.data?.display_url)
      });
  
  // console.log(imageURL);
 } catch (error) {
console.log(error);
setLoading(false)
}
return imageURL
};

