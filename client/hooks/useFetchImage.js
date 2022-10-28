import { useState } from "react";
import axios from "axios";

export const useFetchImage = (data) => {
  const [imgUrl, setImgUrl] = useState("");

  if (data.imgUrl) return data.imgUrl;

  axios
    .get(`/api/scrapper?url=${data.url}`)
    .then((res) => {
      setImgUrl(res.data.url);
    })
    .catch(() => setImgUrl("assets/no_image_available.jpeg"));
  return imgUrl;
};
