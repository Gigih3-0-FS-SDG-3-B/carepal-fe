import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useAuth } from "../auth/authContext";

function NavBar() {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Box as="header" bg="gray.800" p="4">
      <Flex align="center">
        <Image src="/logo-transparent.png" alt="CarePal Logo" boxSize="10" mr="2" />
        <Link href="/home" color="white" fontWeight="extrabold">
          CarePal
        </Link>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Link href="/home" color="white" fontWeight="bold" mr="4">
            Home
          </Link>
          <Link href="/caregivers" color="white" fontWeight="bold">
            Caregivers
          </Link>
        </Box>
        <Spacer />
        <Box>
          {isLoggedIn ? (
            <Menu>
              <MenuButton as={Button} variant="link" color="white" fontWeight="bold">
                Menu <HamburgerIcon boxSize="6" />
              </MenuButton>
              <MenuList bg="gray.700">
                <MenuItem as={Link} href="/orders" color="black" fontWeight="bold">
                  Orders
                </MenuItem>
                <MenuItem onClick={handleLogout} color="black" fontWeight="bold">
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link href="/login" color="white" fontWeight="bold">
              Login
            </Link>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export default NavBar;
