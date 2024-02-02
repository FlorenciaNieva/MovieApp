import { useContext } from "react";
import { FavoritesContext } from "../context/favoritesContext";
import { Flex, Heading } from "@chakra-ui/react";
import CardMovie from "./CardMovie";
import { RiHeartAddFill } from "react-icons/ri";
import Footer from "./Footer";

export default function ContainFavorites() {
  const { allFavorites } = useContext(FavoritesContext);

  return (
    <>
      <Heading textAlign="center">Favorites</Heading>
      {allFavorites.length === 0 ? (
        <Flex h="90vh" justifyContent="center" alignItems="center">
          <Heading color="#93959C" mr={2}>
            Add Favorites
          </Heading>
          <RiHeartAddFill color="#93959C" fontSize="3rem" />
        </Flex>
      ) : (
        <Flex flexWrap="wrap" justifyContent="center" minH="85vh">
          {allFavorites.map((movie) => (
            <CardMovie  key={movie.id} id={movie.id} name={movie.name} poster={movie.image} />
          ))}
        </Flex>
      )}
      <Footer position="absolute" bottom="-12vh" />
    </>
  );
}
