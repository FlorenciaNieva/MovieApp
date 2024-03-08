import CarouselBanner from "../CarouselBanner/CarouselBanner";
import { Box, Heading } from "@chakra-ui/react";
import ContainCarouselCards from "../ContainCarouselCards/ContainCarouselCards";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <CarouselBanner />
      <Box position="relative" top="90vh">
        <Heading as="h3" size="lg" pl={5}>
          Popular Movies
        </Heading>
        <ContainCarouselCards category="popular" />
        <Heading as="h3" size="lg" pl={5}>
          Top Ranking Movies
        </Heading>
        <ContainCarouselCards category="top_rated" />
      </Box>
      <Footer position="relative" bottom="-90vh" />
    </>
  );
}
