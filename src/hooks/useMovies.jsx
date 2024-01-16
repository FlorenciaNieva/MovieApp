import { useState } from "react";
import axios from "axios";

const useMovies = () => {
  const [info, setInfo] = useState([]);
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

  const getPopular = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((response) => {
        // console.log(response.data);
        setInfo(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  const getNewMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .then((response) => {
        // console.log(response.data);
        setInfo(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  const getTopRated = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then((response) => {
        // console.log(response.data);
        setInfo(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  const searchMovie = (movie) => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${apiKey}`)
      .then((response) => {
        // console.log(response.data);
        setInfo(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  return {
    info,
    getPopular,
    getNewMovies,
    getTopRated,
    searchMovie,
  };
};

export default useMovies;
