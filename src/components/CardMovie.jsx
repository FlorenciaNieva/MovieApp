import { Card, Image, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CardMovie() {
  const navigate = useNavigate();

  return (
    <>
      <Box m={5} maxW="160px" cursor="pointer" onClick={() => navigate("/")}>
        <Card
          maxW="100%"
          h="250px"
          borderRadius="10px"
          mb={2}
          position="relative"
        >
          <Image
            src=""
            alt=""
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
          Name
        </Text>
      </Box>
    </>
  );
}
