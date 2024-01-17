import React, { useEffect } from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import useMovies from "../hooks/useMovies";
import { Image, Box } from "@chakra-ui/react";

export default function Carousel() {
  const { info, getNewMovies } = useMovies();

  useEffect(() => {
    getNewMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <Slider
      {...settings}
      style={{ width: "100vw", backgroungColor: "red", color: "white" }}
    >
      {info.map((movie) => (
        <Box key={movie.id}>
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="image"
            maxH="80vh"
            w="100%"
            position="relative"
          />
        </Box>
      ))}
    </Slider>
  );
}
