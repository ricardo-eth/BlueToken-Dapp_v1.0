import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  useColorMode,
  AvatarBadge,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <NavLink to="/">Home</NavLink>
            <HStack as={"nav"} spacing={4} display={{ md: "flex" }}>
              <NavLink to="/ERC20">ERC20</NavLink>
              <NavLink to="/Faucet">Faucet</NavLink>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Box mr={5}>
              {colorMode === "light" ? (
                <Button onClick={toggleColorMode}>
                  <MoonIcon />
                </Button>
              ) : (
                <Button onClick={toggleColorMode}>
                  <SunIcon />
                </Button>
              )}
            </Box>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Avatar size="sm">
                  {colorMode === "light" ? (
                    <AvatarBadge
                      bg="tomato"
                      borderColor="papayawhip"
                      boxSize="1.25em"
                    />
                  ) : (
                    <AvatarBadge
                      bg="green.500"
                      borderColor="papayawhip"
                      boxSize="1.25em"
                    />
                  )}
                </Avatar>
              </MenuButton>
              <MenuList>
                {colorMode === "light" ? (
                  <>
                    <MenuItem>Connect</MenuItem>
                  </>
                ) : (
                  <>
                    <NavLink to="/Account">
                      <MenuItem>Account</MenuItem>
                    </NavLink>
                    <MenuDivider />
                    <MenuItem>Deconnect</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
