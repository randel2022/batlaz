import React from "react";

import placeholderImg from ".././assets/Image-placeholder.png";
import sectionBG from ".././assets/section-background.png";
import HeroCup from ".././assets/Hero-cup.png";

import "./Login.css";
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
    <Box className="pb-36" h="120vh" py="10" px="24" bgImage={sectionBG}>
      <Flex alignItems="center" height="100vh" marginTop="10">
        <Box w="50%" gap="5" display="flex" flexDirection="column">
          <Link
            href="/"
            color="white"
            fontSize="xl"
            position="absolute"
            top="2%"
            left="4%"
          >
            Batlaz.
          </Link>
          <Heading
            className="mainfont"
            as="h2"
            fontWeight="bold"
            size="4xl"
            color="white"
          >
            Ready to engage<br></br> with Batlaz?
          </Heading>
          <Text color="white">
            Nunc tincidunt urna dui, in porttitor mauris congue et. <br></br>
            Proin ullamcorper purus quis tempor interdum.
          </Text>
          <InputGroup
            className="label"
            display="flex"
            flexDirection="column"
            gap="5"
            marginTop="2vh"
          >
            <Input
              className="email"
              type="text"
              placeholder="Email*"
              w="70%"
              bgColor="black"
              focusBorderColor="#7E20C9"
              _placeholder={{ color: "white" }}
              border="none"
            />
            <Input
              className="email"
              type="text"
              placeholder="Phone*"
              w="70%"
              bgColor="black"
              focusBorderColor="#7E20C9"
              _placeholder={{ color: "white" }}
              border="none"
            />
            <Input
              className="btn-submit"
              type="submit"
              value="Login"
              bgColor="#7E20C9"
              zIndex="10"
              w="22%"
              color="white"
              border="none"
              fontSize="xs"
              fontWeight="bold"
              marginTop="4vh"
            />
          </InputGroup>
          <Text color="white">
            Don’t have an account? <Link color="#7E20C9">Sign up here</Link>
          </Text>
        </Box>
        <Box w="50%">
          <Image src={HeroCup} />
        </Box>
      </Flex>
    </Box>
  );
}
