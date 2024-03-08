import CarouselBanner from "../CarouselBanner/CarouselBanner";
import { Box } from "@chakra-ui/react";
import CarouselCards from "../CarouselCards/CarouselCards";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <CarouselBanner category="now_playing" />
      <Box position="relative" top="90vh">
        <CarouselCards title="Popular Movies" category="popular" />
        <CarouselCards title="Top Ranking Movies" category="top_rated" />
      </Box>
      <Footer position="relative" bottom="-90vh" />
    </>
  );
}
