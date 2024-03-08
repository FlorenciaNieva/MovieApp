import React, { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import CarouselCards from "../CarouselCards/CarouselCards";
import useMovies from "../../hooks/useMovies";

export default function ContainCarouselCards({ title, category }) {
  const { info, page, getPopular, getTopRated } = useMovies();

  const data = () => {
    if (category === "popular") {
      useEffect(() => {
        getPopular(page);
      }, []);
      return info;
    } else {
      useEffect(() => {
        getTopRated();
      }, []);
      return info;
    }
  };

  return (
    <>
      <Heading as="h3" size="lg" pl={5}>
        {title}
      </Heading>
      <CarouselCards info={data()} />
    </>
  );
}
