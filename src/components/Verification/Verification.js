import React from "react";

import placeholderImg from ".././assets/Image-placeholder.png";
import sectionBG from ".././assets/section-background.png";
import HeroCup from ".././assets/Hero-cup.png";

import "./Verification.css";
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
  PinInput,
  PinInputField,
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

export default function Verification() {
  return (
    <Box className="pb-36" h="120vh" py="10" px="24" bgImage={sectionBG}>
      <Flex
        alignItems="center"
        height="100vh"
        marginTop="10"
        flexDirection="column"
        justifyContent="center"
      >
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
        <Box
          w="50%"
          gap="5"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            className="mainfont"
            as="h2"
            fontWeight="bold"
            size="3xl"
            color="white"
          >
            Authentication Code
          </Heading>
          <Text color="white" textAlign="center">
            Please confirm your account by enteting authetication code sent to
            <br></br>
            j***b*****@gmail.com.
          </Text>
        </Box>
        <Box
          w="50%"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Stack>
            <HStack>
              <PinInput size="lg">
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Stack>
          <Text color="white">
            It may take a minute to receive your code. Haven’t received it?
            Resend a new code.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
