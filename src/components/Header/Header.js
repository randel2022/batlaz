import React from "react";

import { useNavigate } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";

import { BsFillArrowUpCircleFill, BsFillCircleFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import iuser from ".././assets/Avatar1.png";
import ibell from ".././assets/bell.png";
import iwallet from ".././assets/wallet.png";
import imessage from ".././assets/comment.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";

import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

import {
  Box,
  Flex,
  HStack,
  Container,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Input,
} from "@chakra-ui/react";

export default function Header({ links = [] }) {
  const history = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      color={"white"}
      // backgroundColor="#1A1A1A"
      py={2}
      zIndex="50"
      sx={{
        position: "fixed",
      }}
      w="100%"
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={{ base: "0", md: "0", lg: "0" }}
        paddingBottom={{ base: "0", md: "0", lg: "0" }}
        flexDirection={{ base: "row", md: "row", lg: "row" }}
      >
        <Flex paddingStart="10" w="70%" py="5">
          <Link href="/" color="white" fontSize="xl">
            Batlaz.
          </Link>
        </Flex>

        <Flex
          bgColor="black"
          w="30%"
          py="5"
          flexDirection="row"
          justifyContent="center"
        >
          <Box
            w="30%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            paddingStart="3"
          >
            <AiFillClockCircle color="white" fontSize="md"></AiFillClockCircle>
            <Flex flexDirection="column" paddingStart="2">
              <Text color="white" fontSize="sm">
                23:03:48 GMT
              </Text>
              <Text className="font-time text-center" color="white">
                Thurday, 2022 June 9
              </Text>
            </Flex>
          </Box>
          <Box
            w="70%"
            display="flex"
            alignItems="center"
            gap="2"
            paddingStart="10"
          >
            <Box
              padding="2"
              border="1px"
              borderColor="white"
              borderRadius="50%"
              _hover={{ backgroundColor: "gray" }}
            >
              <img src={iwallet} className="h-4" alt="" />
            </Box>

            <Box
              padding="2"
              border="1px"
              borderColor="white"
              borderRadius="50%"
              _hover={{ backgroundColor: "gray" }}
            >
              <img src={imessage} className="h-4" alt="" />
            </Box>

            <Box
              padding="2"
              border="1px"
              borderColor="white"
              borderRadius="50%"
              _hover={{ backgroundColor: "gray" }}
            >
              <img src={ibell} className="h-4" alt="" />
            </Box>

            <Box
              padding="1"
              border="1px"
              borderColor="white"
              borderRadius="50%"
              _hover={{ backgroundColor: "gray" }}
            >
              <img src={iuser} className="h-7" alt="" />
            </Box>

            <Box
              // padding="2"
              border="1px"
              borderColor="white"
              borderRadius="50%"
              _hover={{ backgroundColor: "gray" }}
            >
              <IconButton
                size={"md"}
                icon={
                  isOpen ? (
                    <CloseIcon color="white" />
                  ) : (
                    <HamburgerIcon color="white" marginTop="-3px" />
                  )
                }
                borderRadius="50%"
                bgColor="black"
                focusBorderColor="none"
                aria-label={"Open Menu"}
                onClick={isOpen ? onClose : onOpen}
                _focus={{ outline: "none" }}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box
          pb={4} // display={{ md: "none" }}
        >
          <Stack as={"nav"} spacing={4}>
            <Box
              cursor={"pointer"}
              minW={0}
              // bgColor="#1A1A1A"
              // bgColor="red"
            >
              <Flex
                alignItems={"end"}
                justifyContent={"end"}
                w="100%"
                flexDirection="row"
                gap="5"
                marginTop="2"
                px="19"
              >
                <Link
                  fontSize={{ base: "10", md: "sm", lg: "md" }}
                  paddingStart="3"
                  paddingEnd="3"
                  colorScheme="blue"
                  href="/Home"
                  className="header"
                  _focus={{ outline: "none" }}
                >
                  Home
                </Link>
                <Link
                  fontSize={{ base: "10", md: "sm", lg: "md" }}
                  paddingStart="3"
                  paddingEnd="3"
                  colorScheme="blue"
                  href="/Login"
                  textAlign="center"
                  className="header"
                  _focus={{ outline: "none" }}
                >
                  Login
                </Link>
                <Link
                  fontSize={{ base: "10", md: "sm", lg: "md" }}
                  paddingStart="3"
                  paddingEnd="3"
                  colorScheme="blue"
                  href="/Signup"
                  textAlign="center"
                  className="header"
                  _focus={{ outline: "none" }}
                >
                  SignUp
                </Link>
                <Link
                  fontSize={{ base: "10", md: "sm", lg: "md" }}
                  paddingStart="3"
                  paddingEnd="3"
                  colorScheme="blue"
                  href="/Whitelist"
                  textAlign="center"
                  className="header"
                  _focus={{ outline: "none" }}
                >
                  Option4
                </Link>
              </Flex>
            </Box>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
