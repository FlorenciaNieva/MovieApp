import { useContext } from "react";
import { Card, Image, Box, Text, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FavoritesContext } from "../../context/favoritesContext";
import notAvailableImage from "../../assets/images/image_not_available.png"

export default function CardMovie({ id, name, poster }) {
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const [isTablet] = useMediaQuery("(max-width: 720px)");

  return (
    <>
      <Box 
        m={5} 
        maxW={isTablet ? "120px" : "160px"} 
        cursor="pointer" 
        key={id} 
        onClick={() => navigate(`/details/${id}`)}
      >
        <Card maxW="100%" borderRadius="10px" mb={2} position="relative">
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
              <MdFavorite
                color="red"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFavorite(id);
                }}
              />
            ) : (
              <MdFavoriteBorder
                color="white"
                onClick={(e) => {
                  e.stopPropagation();
                  addFavorite({
                    id,
                    name,
                    image: poster,
                  });
                }}
              />
            )}
          </Box>
          <Image
            src={ poster 
              ? `https://image.tmdb.org/t/p/original${poster}`
              : notAvailableImage
            }
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
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Text>
      </Box>
    </>
  );
}
