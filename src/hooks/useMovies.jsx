import { useState } from "react";

const useMovies = () => {
  const [info, setInfo] = useState([]);

  return {
    info,
  }
}

export default useMovies
