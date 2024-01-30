import React, { useEffect } from 'react';
import CarouselCards from './CarouselCards';
import useMovies from '../hooks/useMovies';

export default function ContainCarouselCards({ category }) {
  const {info, page, getPopular, getTopRated} = useMovies();

  if(category === "popular" ) {
    useEffect(() => {
      getPopular(page);
    }, []);
    return (
      <>
        <CarouselCards info={info}/>
      </>
    )
  } else {
    useEffect(() => {
      getTopRated();
    }, []);
    return (
      <>
        <CarouselCards info={info} />
      </>
    )
  }
}
