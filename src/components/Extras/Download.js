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

export default function Download() {
  return (
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
          <Image src={gstore} className="w-1/4 h-14" alt="" />
          <Image src={astore} className="w-1/4 h-14 mx-10" alt="" />
        </div>
      </div>
    </Box>
  );
}
