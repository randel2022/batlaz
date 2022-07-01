import React from "react";

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
    <Box className="pb-36" h="100vh" p="10" bgColor="#CFCFCF">
      <Flex alignItems="center" bgColor="red" height="100vh">
        <Box w="50%">
          <Link
            color="black"
            borderColor="black"
            border="1px solid"
            py="3"
            px="10"
          >
            LOGO
          </Link>
          <Heading className="mainfont" as="h2" fontWeight="bold" size="4xl">
            Ready to engage<br></br> with Batlaz?
          </Heading>
          <Text>
            Nunc tincidunt urna dui, in porttitor mauris congue et. <br></br>
            Proin ullamcorper purus quis tempor interdum.
          </Text>
          <InputGroup className="label" display="flex" flexDirection="column">
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
              value="Subscribe"
              bgColor="#9C4FFF"
              zIndex="10"
              w="22%"
            />
          </InputGroup>
          <Text>Don’t have an account? Sign up here</Text>
        </Box>
        <Box w="50%">
          <Image />
        </Box>
      </Flex>
    </Box>
  );
}
