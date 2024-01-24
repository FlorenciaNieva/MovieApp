import { useContext } from "react";
import { Card, Image, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FavoritesContext } from "../context/favoritesContext";

export default function CardMovie({ id, name, poster }) {
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);

  return (
    <>
      <Box m={5} maxW="160px" cursor="pointer" key={id} onClick={() => navigate(`/details/${id}`)}>
        <Card
          maxW="100%"
          h="250px"
          borderRadius="10px"
          mb={2}
          position="relative"
        >
          <Box
            mt={4}
            ml={3}
            p={3}
            position="absolute"
            top={-5}
            right={-1}
            fontSize="30px"
          >
            {isFavorite(id) ? (
              <MdFavorite color="red" onClick={(e) => {
                e.stopPropagation();
                removeFavorite(id);
              }} />
            ) : (
              <MdFavoriteBorder
                color="white"
                onClick={(e) =>
                  {
                    e.stopPropagation();
                    addFavorite({
                      id,
                      name,
                      image: poster,
                    });
                  }
                  
                }
              />
            )}
          </Box>
          <Image
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt={name}
            w="100%"
            h="100%"
            borderRadius="10px"
          />
        </Card>
        <Text 
          textAlign="center"
          as="b"
          overflow="hidden"
          display="-webkit-box"
          style={{
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
          }}
        >
          {name}
        </Text>
      </Box>
    </>
  );
}
