import React, { useContext, useEffect } from "react";
import useMovies from "../hooks/useMovies";
import { useParams } from "react-router";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import ModalTrailer from "./ModalTrailer";
import { FavoritesContext } from "../context/favoritesContext";

export default function DetailsMovie() {
  const { info, getMovieId, trailer, getVideo } = useMovies();
  const params = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [isTablet] = useMediaQuery("(max-width: 720px)");

  useEffect(() => {
    getMovieId(params.id);
    getVideo(params.id);
  }, [params.id]);

  function minToHs(min) {
    const horas = Math.floor(min / 60);
    const minutosRestantes = min % 60;

    return `${horas}hs ${minutosRestantes}min`;
  }

  const handleButtonTrailer = () => {
    onOpen();
  };

  return (
    <>
      <Box position="absolute" top={0}>
        <Image
          src={
            isMobile
              ? `https://image.tmdb.org/t/p/original${info.poster_path}`
              : `https://image.tmdb.org/t/p/original${info.backdrop_path}`
          }
          alt={info.title}
          w="100vw"
          h="100vh"
          filter="auto"
          brightness="40%"
        />
      </Box>
      <Box
        position="absolute"
        top={isTablet ? "10vh" : "25vh"}
        left="5vw"
        color="white"
      >
        <Flex w="90vw" h="60vh">
          <Image
            src={`https://image.tmdb.org/t/p/original${info.poster_path}`}
            alt={info.title}
            w={isMobile ? "0" : "60%"}
            h={isTablet ? "60%" : "100%"}
            borderRadius={5}
          />
          <Box ml={5}>
            <Flex>
              <Text as="b">{info.vote_average?.toFixed(1)}</Text>
              <Text ml={1} mt={1}>
                <FaStar />
              </Text>
            </Flex>
            <Heading mb={3}>{info.title}</Heading>
            <Heading as="h5" size="sm">
              {new Date(info.release_date).getFullYear()}
            </Heading>
            {info.genres?.map((gen) => (
              <Text as="b" key={gen.name} mr={3} color="RGB(217 218 222)">
                {gen.name}
              </Text>
            ))}
            <Text>{minToHs(info.runtime)}</Text>
            <Heading as="h5" size="sm" mt="1">
              Overview
            </Heading>
            <Text>{info.overview}</Text>
            <Button
              onClick={() => handleButtonTrailer()}
              bg="#f90909"
              color="white"
              mt={4}
              p={3}
              _hover={{ bg: "#ff2929" }}
            >
              <IoPlayCircleOutline fontSize="25px" />
              Ver thriller
            </Button>
            <ModalTrailer
              isOpen={isOpen}
              onClose={onClose}
              trailerId={trailer?.key}
            />
            <Button
              bg="rgb(111,111,129)"
              mt={4}
              ml={3}
              p={3}
              position="absolute"
              fontSize="30px"
              _hover={{ bg: "rgb(55,56,69)" }}
            >
              {isFavorite(info.id) ? (
                <MdFavorite
                  color="red"
                  onClick={() => removeFavorite(info.id)}
                />
              ) : (
                <MdFavoriteBorder
                  color="white"
                  onClick={() =>
                    addFavorite({
                      id: info.id,
                      name: info.title,
                      image: info.poster_path,
                    })
                  }
                />
              )}
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
