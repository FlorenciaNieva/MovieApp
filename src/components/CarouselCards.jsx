import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMovie from "./CardMovie";
import { Heading } from "@chakra-ui/react";

export default function CarouselCards( title, info ) {
  return (
    <>
      <Heading as='h3' size='lg' pl={5}>{title}</Heading>
      <Carousel
        additionalTransfrom={10}
        arrows
        autoPlaySpeed={3000}
        centerMode={true}
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
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 4,
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
        {info?.map((movie) => (
          <CardMovie key={movie.id} id={movie.id} name={movie.title} poster={movie.poster_path}/>
        ))}
      </Carousel>
    </>
  );
}
