import { useContext } from "react";
import { FavoritesContext } from "../context/favoritesContext";
import { Flex, Heading } from "@chakra-ui/react";
import CardMovie from "./CardMovie";
import { RiHeartAddFill } from "react-icons/ri";

export default function ContainFavorites() {
  const { allFavorites } = useContext(FavoritesContext);

  return (
    <>
      <Heading textAlign="center">Favorites</Heading>
      {allFavorites.length === 0 ? (
        <Flex h="80vh" justifyContent="center" alignItems="center">
          <Heading color="#93959C" mr={2}>Add Favorites</Heading>
          <RiHeartAddFill color="#93959C" fontSize="3rem" />
        </Flex>
      ) : (
        <Flex flexWrap="wrap" justifyContent="center">
          {allFavorites.map((movie) => (
            <CardMovie id={movie.id} name={movie.name} poster={movie.image} />
          ))}
        </Flex>
      )}
    </>
  )
}
