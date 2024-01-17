import React, { useEffect } from "react";
import useMovies from "../hooks/useMovies";
import { useParams } from "react-router";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function DetailsMovie() {
  const { info, getMovieId } = useMovies();
  const params = useParams();

  useEffect(() => {
    getMovieId(params.id);
  }, [info.id]);

  function minToHs(min) {
    const horas = Math.floor(min / 60);
    const minutosRestantes = min % 60;

    return `${horas}hs ${minutosRestantes}min`;
  }

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
      <Box boxSize="sm" position="absolute" top="25vh" left="5vw" color="white">
        <Flex w="90vw" h="60vh">
          <Image
            src={`https://image.tmdb.org/t/p/original${info.poster_path}`}
            alt="Dan Abramov"
            w={250}
            borderRadius={5}
          />
          <Box ml={5}>
            <Flex>
              <Text as='b'>{info.vote_average?.toFixed(1)}</Text>
              <Text ml={1} mt={1}>
                <FaStar/>
              </Text>
            </Flex>
            <Heading mb={3}>{info.title}</Heading>
            {info.genres?.map((gen) => (
              <Text as='b' mr={3} color="RGB(217 218 222)">{gen.name}</Text>
            ))}
            <Text>{minToHs(info.runtime)}</Text>
            <Text>{new Date(info.release_date).getFullYear()}</Text>
            <Heading as='h5' size='sm' mt="1">Overview</Heading>
            <Text>{info.overview}</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
