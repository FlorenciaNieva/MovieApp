import { Flex, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <header style={{ position: "relative", zIndex: "1" }}>
      <Flex
        w="100%"
        h="80px"
        bgGradient="linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0) 100%)"
      >
        <Heading size="lg" color="#ff2323" mt="2" ml="5">
          MovieApp
        </Heading>
      </Flex>
    </header>
  );
}
