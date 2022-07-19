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

import recent1 from ".././assets/recent1.png";
import recent2 from ".././assets/recent2.png";
import recent3 from ".././assets/recent3.png";
import recent4 from ".././assets/recent4.png";

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

import {
  Box,
  Flex,
  Center,
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

import "./index.css";
export default function RecentBattle() {
  return (
    <Box
      height="110vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      bgColor="black"
    >
      <Box className="flex px-20 justify-between py-5 items-center" w="100%">
        <Text className="text-3xl" color="white">
          Latest batlaz battle
        </Text>
        <Link color="white" bgColor="black" px="3" py="1" borderRadius="15">
          View All Games
        </Link>
      </Box>
      <Box display="flex" flexDirection="row" className="px-20 gap-10" w="100%">
        <Box
          bgColor="black"
          px="3"
          paddingTop="3"
          paddingBottom="8"
          borderRadius="35"
          height="auto"
          borderWidth="1px"
          borderColor="gray"
        >
          <Image src={recent1} />
          <Text className="text-center text-white" py="4">
            Maecenas sit amet urna ornare
          </Text>
          <Center marginTop="8">
            <Link className="text-center bg-black text-white px-10 py-2 rounded-md">
              View Battle
            </Link>
          </Center>
        </Box>
        <Box
          bgColor="black"
          px="3"
          paddingTop="3"
          paddingBottom="8"
          borderRadius="35"
          height="auto"
          borderWidth="1px"
          borderColor="gray"
        >
          <Image src={recent2} />
          <Text className="text-center text-white" py="4">
            Maecenas sit amet urna ornare
          </Text>
          <Center marginTop="8">
            <Link className="text-center bg-black text-white px-10 py-2 rounded-md">
              View Battle
            </Link>
          </Center>
        </Box>
        <Box
          bgColor="black"
          px="3"
          paddingTop="3"
          paddingBottom="8"
          borderRadius="35"
          height="auto"
          borderWidth="1px"
          borderColor="gray"
        >
          <Image src={recent3} />
          <Text className="text-center text-white" py="4">
            Maecenas sit amet urna ornare
          </Text>
          <Center marginTop="8">
            <Link className="text-center bg-black text-white px-10 py-2 rounded-md">
              View Battle
            </Link>
          </Center>
        </Box>
        <Box
          bgColor="black"
          px="3"
          paddingTop="3"
          paddingBottom="8"
          borderRadius="35"
          height="auto"
          borderWidth="1px"
          borderColor="gray"
        >
          <Image src={recent4} />
          <Text className="text-center text-white" py="4">
            Maecenas sit amet urna ornare
          </Text>
          <Center marginTop="8">
            <Link className="text-center bg-black text-white px-10 py-2 rounded-md">
              View Battle
            </Link>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
