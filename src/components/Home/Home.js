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
} from "@chakra-ui/react";

import "./Home.css";

export default function Home() {
  return (
    <Box bgImage={LandingImg} height="auto" py="">
      <Box>
        <Text>Home</Text>
      </Box>

      <Box>
        <div className="flex top-footer">
          <div className="w-1/2 px-20 py-10 flex flex-col bg-black gap-y-2">
            <h2 className="text-4xl text-white">Download our app</h2>
            <p className="text-white">
              Vestibulum felis sapien, tristique vitae finibus et, aliquam quis
              turpis. Nam euismod nisi in mauris convallis tempor. In hac
              habitasse platea dictumst.
            </p>
          </div>
          <div className="w-1/2 flex justify-start items-center bg-black">
            <img src={gstore} className="w-1/4 h-14" />
            <img src={astore} className="w-1/4 h-14 mx-10" />
          </div>
        </div>
      </Box>
    </Box>
  );
}
