import React, { useEffect } from "react";
import useMovies from "../hooks/useMovies";
import { useParams } from "react-router";
import { Box, Image } from "@chakra-ui/react";

export default function DetailsMovie() {
  const { info, getMovieId } = useMovies();
  const params = useParams();

  useEffect(() => {
    getMovieId(params.id);
  }, [info.id]);

  return (
    <>
      <Box position="absolute" top={0}>
        <Image
          src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`}
          alt={info.title}
          w="100vw"
          h="100vh"
          filter="auto"
          brightness="40%"
        />
      </Box>
    </>
  );
}
