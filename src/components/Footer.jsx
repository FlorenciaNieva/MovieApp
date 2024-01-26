import { Flex, Box, Heading, Text } from "@chakra-ui/react";

export default function Footer({ position, bottom }) {
  return (
    <footer>
      <Flex
        position={position}
        bottom={bottom}
        w="100%"
        h="80px"
        justifyContent="center"
        alignItems="center"
        bg="black"
      >
        <Box>
          <Heading size="lg" color="#ff2323">
            MovieApp
          </Heading>
          <Text textAlign="center" color="white" mt={2}>
            Hecho con ♥ por Flor
          </Text>
        </Box>
      </Flex>
    </footer>
  );
}
