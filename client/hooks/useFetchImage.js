import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchImage = (url) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    axios
      .get(`/api/scrapper?url=${url}`)
      .then((res) => {
        setImgUrl(res.data.url);
      })
      .catch(() => setImgUrl("assets/no_image_placeholder.png"));
  }, []);
  return { imgUrl };
};
