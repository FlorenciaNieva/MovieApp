import { useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import {
  Image,
  Box,
  Heading,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function CarouselBanner({ category }) {
  const { info, page, getMovies } = useMovies();
  const navigate = useNavigate();
  const [isSmaller] = useMediaQuery("(max-width: 320px)");
  const [isTablet] = useMediaQuery("(max-width: 780px)");

  useEffect(() => {
    getMovies(page, category);
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
    dots: false,
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
      style={{
        maxWidth: "100%",
        color: "white",
        position: "absolute",
        top: "0",
      }}
    >
      {info.map((movie) => (
        <Box key={movie.id}>
          <Image
            src={
              !isTablet
                ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                : `https://image.tmdb.org/t/p/original${movie.poster_path}`
            }
            alt="image"
            h="95vh"
            w="100%"
            position="relative"
          />
          <Box
            position="absolute"
            top={0}
            w="50rem"
            height="99%"
            bgGradient={
              isSmaller
                ? "none"
                : "linear(to-r, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0) 100%)"
            }
          >
            <Box
              position="absolute"
              bottom={isSmaller ? "0vh" : "10vh"}
              pl="45px"
              pb={5}
              maxW="70vw"
            >
              {isSmaller ? (
                <></>
              ) : isTablet ? (
                <>
                  <Heading
                    as="h2"
                    size="xl"
                    noOfLines={2}
                    overflow="hidden"
                    textOverflow="ellipsis"
                    pb={2}
                  >
                    {movie.title}
                  </Heading>
                  <Text
                    noOfLines={6}
                    overflow="hidden"
                    textOverflow="ellipsis"
                    pb={1}
                  >
                    {movie.overview}
                  </Text>
                </>
              ) : (
                <>
                  <Heading as="h2" size="xl" pb={3}>
                    {movie.title}
                  </Heading>
                  <Text pb={3}>{movie.overview}</Text>
                </>
              )}
              <Button
                bg="#f90909"
                color="white"
                onClick={() => navigate(`/details/${movie.id}`)}
              >
                See more
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Slider>
  );
}
