import { useContext } from 'react'
import { FavoritesContext } from '../context/favoritesContext';
import { Flex, Heading } from '@chakra-ui/react';
import CardMovie from './CardMovie';

export default function ContainFavorites() {
  const { allFavorites } = useContext(FavoritesContext);

  return (
    <>
      <Heading textAlign="center">Favorites</Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        {allFavorites.map((movie) => (
          <CardMovie
            id={movie.id}
            name={movie.name}
            poster={movie.image}
          />
        ))}
      </Flex>
    </>
  )
}
