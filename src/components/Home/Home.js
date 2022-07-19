import { useForm } from "react-hook-form";
import React from "react";

import banner from ".././assets/Hero-cup.png";
import egame from ".././assets/egame.png";
import circle from ".././assets/group-circle.png";
import speaker from ".././assets/speaker.png";
import googlegray from ".././assets/google-play-gray.png";
import claygray from ".././assets/clay-games-gray.png";
import whiteCrown from ".././assets/VectorCrown-White.png";
import BlackCrown from ".././assets/VectorCrown.png";
import console from ".././assets/console.png";
import thunder from ".././assets/VectorThunder-White.png";
import LandingImg from ".././assets/Landing.png";
import HeroImg from ".././assets/home-hero2.png";
import gameBG from ".././assets/gamebackground.png";

import Controller from ".././assets/Hero-Controller.png";

import gstore from ".././assets/gstore.png";
import astore from ".././assets/appstore.png";

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
  Form,
  Field,
  validateName,
  FormErrorMessage,
  props,
} from "@chakra-ui/react";

import "./Home.css";

import WarRoom from "../WarRoom/WarRoom";
import Contact from "../Extras/Contact";
import RecentBattle from "../Games/RecentBattle";
import Games from "../Games/Games";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Box height="auto" py="">
      <Header />
      <Box
        bgImage={HeroImg}
        bgSize="cover"
        height="100vh"
        bgPosition="center"
        className="Hero"
      ></Box>
      <Box
        bgImage={gameBG}
        bgSize="cover"
        height="auto"
        bgPosition="center"
        className="Hero"
      >
        <Games />
        <Games />
      </Box>

      <Box>
        <RecentBattle />
        <WarRoom />
      </Box>

      <Box bgColor="#7E20C9" w="100%" display="flex" px="20" py="10">
        <Box w="50%" paddingTop="0" paddingRight="40">
          <Text color="white" fontSize="5xl" padding="0" margin="0">
            Contact Us
          </Text>
          <Text color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </Text>
        </Box>
        <Box w="50%" bgColor="black" padding="10" borderRadius="25">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name} paddingBottom="4">
              <Input
                id="name"
                placeholder="Email*"
                borderRadius="10"
                _focus={{ color: "white" }}
                _placeholder={{ color: "white" }}
                borderColor="#7E20C9"
                bgColor="#1C1620"
                {...register("name", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.name} paddingBottom="4">
              <Input
                id="name"
                placeholder="Phone*"
                _focus={{ color: "white" }}
                _placeholder={{ color: "white" }}
                borderRadius="10"
                borderColor="#7E20C9"
                bgColor="#1C1620"
                {...register("name", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt={4}
              bgColor="#7E20C9"
              isLoading={isSubmitting}
              type="submit"
              color="white"
              fontSize="sm"
              px="14"
            >
              Send
            </Button>
          </form>
        </Box>
      </Box>
      <Box position="relative">
        <Image
          position="absolute"
          height="30vh"
          top="-26%"
          left="21%"
          src={Controller}
        />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
