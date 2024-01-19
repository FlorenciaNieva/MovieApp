import { Card, Image, Box, Text } from "@chakra-ui/react";

export default function CardMovie() {
  return (
    <>
      <Box m={5} maxW="160px">
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
