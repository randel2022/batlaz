import React from "react";
import banner from ".././assets/Hero-cup.png";
import egame from ".././assets/egame-new.png";
import circle1 from ".././assets/b1.png";
import circle2 from ".././assets/b2.png";
import circle3 from ".././assets/b3.png";
import speaker from ".././assets/speaker.png";
import googlegray from ".././assets/google-play-new.png";
import claygray from ".././assets/clay-games-new.png";
import whiteCrown from ".././assets/VectorCrown-White.png";
import BlackCrown from ".././assets/VectorCrown.png";
import console from ".././assets/console.png";
import thunder from ".././assets/VectorThunder-White.png";
import LandingImg from ".././assets/Landing.png";
import sectionBg from ".././assets/section-background.png";
import Hero from ".././assets/home-hero.png";

import StarTop from ".././assets/StarTop.png";

import iphoneImage from ".././assets/iPhone13.png";
import warImg from ".././assets/img1.png";
import batlazwar from ".././assets/Batlaz-War.png";

import gstore from ".././assets/gstore.png";
import astore from ".././assets/appstore.png";

import Featured from ".././assets/Feature-Image.png";
import HeroController from ".././assets/Hero-Controller.png";
import Sword from ".././assets/Sword.png";
import Arrow from ".././assets/CTA-Arrow.png";

import { FaLongArrowAltRight } from "react-icons/fa";

import Controller from ".././assets/Controller.png";
import Trophy from ".././assets/Trophy.png";
import Flag from ".././assets/Flag.png";
import Star from ".././assets/Flag.png";
import Thunder from ".././assets/Thunder.png";
import Chest from ".././assets/Chest.png";

import LatestBattle from "../Games/LatestBattle";
import Download from "../Extras/Download";

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
  Center,
} from "@chakra-ui/react";

import "./WarRoom.css";
import { TbMinusVertical } from "react-icons/tb";

export default function WarRoom() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      bgColor="black"
      w="100%"
      px="20"
      py="20"
      flexDirection="column"
      gap="5"
      position="relative"
    >
      <Box w="100%" paddingBottom="50">
        <Text color="white" fontSize="3xl">
          Our batlaz war room
        </Text>
      </Box>

      <Box
        w="100%"
        display="flex"
        alignItems="center"
        border="1px"
        borderColor="#454545"
        borderRightRadius="50"
        borderLeftRadius="50"
      >
        <Box w="10%">
          <Image src={warImg} className="h-20" />
        </Box>
        <Box w="30%">
          <Text color="#716B76" fontSize="sm">
            ROOM NAME
          </Text>
          <Text color="white" fontSize="lg">
            Our batlaz war room
          </Text>
        </Box>
        <Box
          w="50%"
          bgImage={batlazwar}
          height="10vh"
          display="flex"
          alignItems="start"
          flexDirection="column"
          justifyContent="center"
        >
          <Text color="#716B76" fontSize="sm">
            ROOM DESCRIPTION
          </Text>
          <Text color="white" fontSize="lg">
            Proin ullamcorper purus quis tempor interdum.
          </Text>
        </Box>
        <Center w="10%" bgColor="#7E20C9" py="8" borderRightRadius="50">
          <Link textAlign="center" color="white">
            JOIN NOW
          </Link>
        </Center>
      </Box>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        border="1px"
        borderColor="#454545"
        borderRightRadius="50"
        borderLeftRadius="50"
      >
        <Box w="10%">
          <Image src={warImg} className="h-20" />
        </Box>
        <Box w="30%">
          <Text color="#716B76" fontSize="sm">
            ROOM NAME
          </Text>
          <Text color="white" fontSize="lg">
            Our batlaz war room
          </Text>
        </Box>
        <Box
          w="50%"
          bgImage={batlazwar}
          height="10vh"
          display="flex"
          alignItems="start"
          flexDirection="column"
          justifyContent="center"
        >
          <Text color="#716B76" fontSize="sm">
            ROOM DESCRIPTION
          </Text>
          <Text color="white" fontSize="lg">
            Proin ullamcorper purus quis tempor interdum.
          </Text>
        </Box>
        <Center w="10%" bgColor="#7E20C9" py="8" borderRightRadius="50">
          <Link textAlign="center" color="white">
            JOIN NOW
          </Link>
        </Center>
      </Box>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        border="1px"
        borderColor="#454545"
        borderRightRadius="50"
        borderLeftRadius="50"
      >
        <Box w="10%">
          <Image src={warImg} className="h-20" />
        </Box>
        <Box w="30%">
          <Text color="#716B76" fontSize="sm">
            ROOM NAME
          </Text>
          <Text color="white" fontSize="lg">
            Our batlaz war room
          </Text>
        </Box>
        <Box
          w="50%"
          bgImage={batlazwar}
          height="10vh"
          display="flex"
          alignItems="start"
          flexDirection="column"
          justifyContent="center"
        >
          <Text color="#716B76" fontSize="sm">
            ROOM DESCRIPTION
          </Text>
          <Text color="white" fontSize="lg">
            Proin ullamcorper purus quis tempor interdum.
          </Text>
        </Box>
        <Center w="10%" bgColor="#7E20C9" py="8" borderRightRadius="50">
          <Link textAlign="center" color="white">
            JOIN NOW
          </Link>
        </Center>
      </Box>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        border="1px"
        borderColor="#454545"
        borderRightRadius="50"
        borderLeftRadius="50"
      >
        <Box w="10%">
          <Image src={warImg} className="h-20" />
        </Box>
        <Box w="30%">
          <Text color="#716B76" fontSize="sm">
            ROOM NAME
          </Text>
          <Text color="white" fontSize="lg">
            Our batlaz war room
          </Text>
        </Box>
        <Box
          w="50%"
          bgImage={batlazwar}
          height="10vh"
          display="flex"
          alignItems="start"
          flexDirection="column"
          justifyContent="center"
        >
          <Text color="#716B76" fontSize="sm">
            ROOM DESCRIPTION
          </Text>
          <Text color="white" fontSize="lg">
            Proin ullamcorper purus quis tempor interdum.
          </Text>
        </Box>
        <Center w="10%" bgColor="#7E20C9" py="8" borderRightRadius="50">
          <Link textAlign="center" color="white">
            JOIN NOW
          </Link>
        </Center>
      </Box>
    </Box>
  );
}
