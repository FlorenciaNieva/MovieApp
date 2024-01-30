import React from 'react'
import CarouselBanner from './CarouselBanner'
import { Box } from '@chakra-ui/react';
import CarouselCards from './CarouselCards';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <CarouselBanner />
      <Box position="relative" top="90vh">
        <CarouselCards title="Popular Movies" category="popular"/>
        <CarouselCards title="Top Ranking Movies" category="top_rated"/>
      </Box>
      <Footer position="relative" bottom="-90vh" />
    </>
  );
}
