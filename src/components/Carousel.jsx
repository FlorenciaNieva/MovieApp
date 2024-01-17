import React, { useEffect } from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import useMovies from "../hooks/useMovies";
import { Image, Box } from "@chakra-ui/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Carousel() {
  const { info, getNewMovies } = useMovies();

  useEffect(() => {
    getNewMovies();
  }, []);

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <Box
        onClick={onClick}
        position="absolute"
        top="50%"
        left="10px"
        zIndex="1"
        fontSize="30px"
        cursor="pointer"
        transform="translateY(-50%)"
      >
        <FaChevronLeft />
      </Box>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <Box
        onClick={onClick}
        position="absolute"
        top="50%"
        right="10px"
        zIndex="1"
        fontSize="30px"
        cursor="pointer"
        transform="translateY(-50%)"
      >
        <FaChevronRight />
      </Box>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
