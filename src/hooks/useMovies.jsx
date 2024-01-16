import { useState } from "react";

const useMovies = () => {
  const [info, setInfo] = useState([]);
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

  return {
    info,
  }
}

export default useMovies
