import { useContext } from "react";
import { FavoritesContext } from "../context/favoritesContext";
import { Flex, Heading } from "@chakra-ui/react";
import CardMovie from "./CardMovie";
import { RiHeartAddFill } from "react-icons/ri";

export default function ContainFavorites() {
  const { allFavorites } = useContext(FavoritesContext);

  if (allFavorites.length === 0) {
    return (
      <>
        <Heading textAlign="center">Favorites</Heading>
        <Flex h="80vh" justifyContent="center" alignItems="center">
          <Heading color="#93959C" mr={2}>Add Favorites</Heading>
          <RiHeartAddFill color="#93959C" fontSize="3rem" />
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <Heading textAlign="center">Favorites</Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          {allFavorites.map((movie) => (
            <CardMovie id={movie.id} name={movie.name} poster={movie.image} />
          ))}
        </Flex>
      </>
    );
  }
}
