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

import StarTop from ".././assets/StarTop.png";

import iphoneImage from ".././assets/iPhone13.png";
import warImg from ".././assets/img1.png";
import batlazwar from ".././assets/Batlaz-War.png";

import gstore from ".././assets/gstore.png";
import astore from ".././assets/appstore.png";

import footerBG from ".././assets/Footer-Background.png";
import ig from ".././assets/ig-violet.png";
import twitter from ".././assets/twitter-violet.png";
import fb from ".././assets/fb-violet.png";

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

import "./Extras.css";
import { TbMinusVertical } from "react-icons/tb";

export default function Contact() {
  return (
    <Box
      bgImage={footerBG}
      height="50vh"
      display="flex"
      className=""
      justifyContent="center"
      px="20"
      alignItems="center"
    >
      <Box display="flex">
        <Box w="45%" paddingRight="20vh">
          <Text href="/" color="white" fontSize="3xl">
            Batlazz.
          </Text>
          <Text color="white" marginTop="1">
            Maecenas sit amet urna ornare ligula faucibus consectetur nec vitae
            augue. Quisque dolor leo, tristique et hendrerit nec, vestibulum nec
            tellus. Vivamus ut ex velit. Ut in ex mattis, porta urna eu,
            placerat risus.
          </Text>
        </Box>
        <Box w="15%">
          <Text fontSize="xl" color="white">
            Contact
          </Text>
          <Box display="flex" flexDirection="column" marginTop="3">
            <Link color="white">Home</Link>
            <Link color="white">About</Link>
            <Link color="white">Leaderboard</Link>
            <Link color="white">News</Link>
          </Box>
        </Box>
        <Box w="15%">
          <Text fontSize="xl" color="white">
            Contact
          </Text>
          <Box display="flex" flexDirection="column" marginTop="3">
            <Link color="white">Privacy</Link>
            <Link color="white">FAQ</Link>
            <Link color="white">Contact</Link>
          </Box>
        </Box>
        <Box w="25%" display="flex" justifyContent="end">
          <Image src={fb} px="1" height="40px" />
          <Image src={twitter} px="1" height="40px" />
          <Image src={ig} px="1" height="40px" />
        </Box>
      </Box>
    </Box>
  );
}
