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
        <Box textAlign="center">
          <Heading size="lg" color="#ff2323">
            MovieApp
          </Heading>
          <Text color="white" mt={2}>
            Hecho con ♥ por {" "}
            <a href="https://www.linkedin.com/in/florencia-nievaa/">Florencia Nieva</a>
          </Text>
        </Box>
      </Flex>
    </footer>
  );
}
