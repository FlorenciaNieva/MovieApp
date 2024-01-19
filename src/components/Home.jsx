import React from 'react'
import Carousel from './Carousel'
import { Box } from '@chakra-ui/react';
import CarouselCards from './CarouselCards';

export default function Home() {
  return (
    <>
      <Carousel />
      <Box position="relative" top="90vh">
        <CarouselCards title="Popular Movies" category="popular"/>
        <CarouselCards title="Top Ranking Movies" category="top_rated"/>
      </Box>
    </>
  );
}
