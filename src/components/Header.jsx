import {
  Flex,
  Box,
  Heading,
  Link as ChakraLink,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";

export default function Header() {
  return (
    <header style={{ position: "relative", zIndex: "1", }}>
      <Flex
        w="100%"
        h="80px"
        bgGradient="linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0) 100%)"
      >
        <Heading size="lg" color="#ff2323" mt="2" ml="5">
          MovieApp
        </Heading>
        <Box flex="1" m="4" color="white">
          <nav>
            <ChakraLink as={Link} to="/" m="2" _hover={{ color: "#ff2323" }}>
              Home
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/premieres"
              m="2"
              _hover={{ color: "#ff2323" }}
            >
              Premieres
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/popular"
              m="2"
              _hover={{ color: "#ff2323" }}
            >
              Popular
            </ChakraLink>
          </nav>
        </Box>
        <Spacer />
        <Flex mt="4" mr="5" color="white" fontSize="25px">
            <ChakraLink
              as={Link}
              to="/favorites"
              mr="5"
              _hover={{ color: "#ff2323" }}
              aria-label="Favorites"
            >
              <MdFavorite />
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/search"
              _hover={{ color: "#ff2323" }}
              aria-label="Search"
            >
              <FiSearch />
            </ChakraLink>
        </Flex>
      </Flex>
    </header>
  );
}
