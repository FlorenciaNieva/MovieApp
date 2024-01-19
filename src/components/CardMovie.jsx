import { Card, Image, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CardMovie({ id, name, poster,}) {
  const navigate = useNavigate();

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
