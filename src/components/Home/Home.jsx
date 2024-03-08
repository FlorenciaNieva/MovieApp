import CarouselBanner from "../CarouselBanner/CarouselBanner";
import { Box } from "@chakra-ui/react";
import ContainCarouselCards from "../ContainCarouselCards/ContainCarouselCards";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <CarouselBanner />
      <Box position="relative" top="90vh">
        <ContainCarouselCards title="Popular Movies" category="popular" />
        <ContainCarouselCards title="Top Ranking Movies" category="top_rated" />
      </Box>
      <Footer position="relative" bottom="-90vh" />
    </>
  );
}
