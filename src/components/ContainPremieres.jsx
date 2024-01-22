import { useEffect } from "react";
import useMovies from "../hooks/useMovies";

export default function ContainPremieres() {
  const { info, page, getNewMovies } = useMovies();

  useEffect(() => {
    getNewMovies(page);
  }, [page]);

  return (
    <div>Contain Premieres</div>
  )
}
