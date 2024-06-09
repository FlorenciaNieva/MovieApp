import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Heading, Box } from "@chakra-ui/react";
import CardMovie from "../CardMovie/CardMovie";
import useMovies from "../../hooks/useMovies";

export default function CarouselCards({ title, category }) {
  const { info, page, getMovies } = useMovies();

  useEffect(() => {
    getMovies(page, category);
  }, []);

  return (
    <Box px={{ base: "20px", lg: "80px" }}>
      <Heading as="h3" size="lg" pt="20px" pl="20px">
        {title}
      </Heading>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container"
        draggable
        focusOnSelect={false}
        infinite={false}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1280,
            },
            items: 8,
            partialVisibilityGutter: 1,
          },
          laptop: {
            breakpoint: {
              max: 1280,
              min: 720,
            },
            items: 5,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 720,
              min: 550,
            },
            items: 4,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 550,
              min: 0,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        {info.map((movie) => (
          <CardMovie
            key={movie.id}
            id={movie.id}
            name={movie.title}
            poster={movie.poster_path}
          />
        ))}
      </Carousel>
    </Box>
  );
}
