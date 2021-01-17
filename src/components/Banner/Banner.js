import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  //   console.log(movie);
  return <header></header>;
};

export default Banner;
