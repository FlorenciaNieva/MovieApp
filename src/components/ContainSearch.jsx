import {
  InputGroup,
  Input,
  InputLeftElement,
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import useMovies from "../hooks/useMovies";
import CardMovie from "./CardMovie";
import { GrSearchAdvanced } from "react-icons/gr";
import Footer from "./Footer";

export default function ContainSearch() {
  const { info, searchMovie } = useMovies();

  return (
    <>
      <Container maxW="2xl" centerContent mt={5}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search"
            border="1px solid black"
            borderRadius={20}
            _focus={{ border: "2px solid red" }}
            _active={{ border: "2px solid red" }}
            onChange={(e) => searchMovie(e.target.value)}
          />
        </InputGroup>
      </Container>
      {info.length === 0 ? (
        <Flex h="85vh" justifyContent="center" alignItems="center">
          <Heading color="#93959C" mr={2}>
            Enter a search term
          </Heading>
          <GrSearchAdvanced color="#93959C" fontSize="3rem" />
        </Flex>
      ) : (
        <Flex flexWrap="wrap" justifyContent="center">
          {info.map((movie) => (
            <CardMovie
              key={movie.id}
              id={movie.id}
              name={movie.title}
              poster={movie.poster_path}
            />
          ))}
        </Flex>
      )}
      <Footer position="absolute" bottom="-15vh" />
    </>
  );
}
