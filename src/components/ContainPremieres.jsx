import { useEffect } from "react";
import useMovies from "../hooks/useMovies";
import CardMovie from "./CardMovie";
import { Flex, Heading } from "@chakra-ui/react";

export default function ContainPremieres() {
  const { info, page, getNewMovies } = useMovies();

  useEffect(() => {
    getNewMovies(page);
  }, [page]);

  return (
    <>
      <Heading textAlign="center">Premieres Movies</Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        {info.map((movie) => (
          <CardMovie
            id={movie.id}
            name={movie.title}
            poster={movie.poster_path}
          />
        ))}
      </Flex>
    </>
  );
}
