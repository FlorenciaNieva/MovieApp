import { Flex, Text, Heading  } from '@chakra-ui/react'
import { MdErrorOutline } from "react-icons/md";

export default function Error404() {
  return (
    <>
      <Flex h="80vh" direction="column" justifyContent="center" alignItems="center">
          <MdErrorOutline fontSize="50px"  color='#f90909'/>
          <Heading>The page could not be found</Heading>
          <Text>Try one of the links or searches</Text>
      </Flex>
    </>
  )
}
