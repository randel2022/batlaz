import React from "react";

import placeholderImg from ".././assets/Image-placeholder.png";

import "./Signup.css";
import {
  Box,
  Flex,
  HStack,
  Container,
  IconButton,
  Button,
  Image,
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
  Heading,
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
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <Box className="pb-36" h="120vh" py="10" px="24" bgColor="#CFCFCF">
      <Flex alignItems="center" height="100vh" marginTop="10">
        <Box w="50%" gap="5" display="flex" flexDirection="column">
          <Link
            color="black"
            borderColor="black"
            border="1px solid"
            py="3"
            px="10"
            w="20%"
          >
            LOGO
          </Link>
          <Heading className="mainfont" as="h2" fontWeight="bold" size="3xl">
            Sign up on Batlaz & enjoy our battle
          </Heading>
          <Text>
            Nunc tincidunt urna dui, in porttitor mauris congue et. <br></br>
            Proin ullamcorper purus quis tempor interdum.
          </Text>
        </Box>
        <Box w="50%">
          <InputGroup
            className="label"
            display="flex"
            flexDirection="column"
            gap="5"
          >
            <Input
              className="email"
              type="text"
              placeholder="Type here"
              w="70%"
              bgColor="white"
              focusBorderColor="none"
            />
            <Input
              className="email"
              type="text"
              placeholder="Type here"
              w="70%"
              bgColor="white"
              focusBorderColor="none"
            />
            <Input
              className="email"
              type="text"
              placeholder="Type here"
              w="70%"
              bgColor="white"
              focusBorderColor="none"
            />
            <Input
              className="email"
              type="text"
              placeholder="Type here"
              w="70%"
              bgColor="white"
              focusBorderColor="none"
            />
            <Input
              className="btn-submit"
              type="submit"
              value="Next"
              bgColor="#181818"
              zIndex="10"
              w="22%"
            />
          </InputGroup>
          <Text>Already have an account? Login here</Text>
        </Box>
      </Flex>
    </Box>
  );
}
