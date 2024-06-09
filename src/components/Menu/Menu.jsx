import {
  Menu as MenuChakra,
  MenuButton,
  MenuList,
  MenuItem,
  Link as ChakraLink,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

export default function Menu() {
  return (
    <MenuChakra>
      <MenuButton
        as={IconButton}
        aria-label="Navegation"
        variant="outline"
        border="none"
        icon={<IoMenu />}
        bg="transparent"
        color="red"
        fontSize="35px"
        _hover="none"
        _focus="none"
        _active="none"
      />
      <MenuList color="white" bg="black">
        <MenuItem as={Link} to="/" bg="black" _hover={{ color: "#ff2323" }}>
          Home
        </MenuItem>
        <MenuItem
          as={Link}
          to="/premieres"
          bg="black"
          _hover={{ color: "#ff2323" }}
        >
          Premieres
        </MenuItem>
        <MenuItem
          as={Link}
          to="/popular"
          bg="black"
          _hover={{ color: "#ff2323" }}
        >
          Popular
        </MenuItem>
        <MenuItem
          as={Link}
          to="/favorites"
          bg="black"
          _hover={{ color: "#ff2323" }}
        >
          Favorites
        </MenuItem>
        <MenuItem
          as={Link}
          to="/search"
          bg="black"
          _hover={{ color: "#ff2323" }}
        >
          Search
        </MenuItem>
      </MenuList>
    </MenuChakra>
  );
}
