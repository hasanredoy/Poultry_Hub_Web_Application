'use client'
import axios from "axios";
import { useState } from "react";

const usePostImage = (image) => {
  console.log({image});
  const [imageURL, setImageURL] = useState();
  const API = process.env.IMAGE_BB;
  const imageData = new FormData();
  imageData.append("image", image);
  console.log(API);

  if (image) {
    axios
      .post(`https://api.imgbb.com/1/upload?${API}`, imageData)
      .then((res) => {
        console.log(res.data);
        setImageURL(res.data);
      });
  }
  console.log(imageURL);
  return imageURL;
};

export default usePostImage;
