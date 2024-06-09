import {
  Flex,
  Heading,
  Spacer,
  useMediaQuery,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

  return (
    <header style={{ position: "relative", zIndex: "1" }}>
      <Flex
        pl={{ base: "20px", lg: "80px" }}
        pr={{ base: "40px", lg: "80px" }}
        py="10px"
        w="100%"
        h="85px"
        bgGradient="linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0) 100%)"
      >
        <Heading size="lg" color="#ff2323" mt="2" ml="5">
          <ChakraLink as={Link} to="/" m="2" _hover={{ color: "#ff2323" }}>
            MovieApp
          </ChakraLink>
        </Heading>

        {isSmallerThan768 ? (
          <>
            <Spacer />
            <Menu />
          </>
        ) : (
          <NavBar />
        )}
      </Flex>
    </header>
  );
}
