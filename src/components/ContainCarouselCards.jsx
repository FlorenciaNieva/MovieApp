import React, { useEffect } from "react";
import CarouselCards from "./CarouselCards";
import useMovies from "../hooks/useMovies";

export default function ContainCarouselCards({ category }) {
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

  return <CarouselCards info={data()} />;
}
