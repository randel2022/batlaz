import React from "react";

import { useNavigate } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";

import { BsFillArrowUpCircleFill, BsFillCircleFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import iuser from ".././assets/Icon-User.png";
import ibell from ".././assets/icon-Bell.png";
import iwallet from ".././assets/icon-wallet.png";
import imessage from ".././assets/icon-message.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";

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
} from "@chakra-ui/react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex justify-between py-5 px-10 w-full">
      <div className="flex items-center w-1/3">
        <p>LOGO</p>
      </div>

      <div className="flex justify-center items-center py-2 w-1/3	">
        <AiFillClockCircle className="text-3xl"></AiFillClockCircle>
        <div>
          <p>23:03:48 GMT</p>
          <p className="font-time text-center">Thurday, 2022 June 9</p>
        </div>
      </div>

      <div className="flex items-center justify-end py-3 w-1/3">
        <img src={iwallet} className="h-8 px-2" />
        <img src={imessage} className="h-8 px-2" />
        <img src={ibell} className="h-8 px-2" />
        <img src={iuser} className="h-8 px-2" />
        <GiHamburgerMenu className="text-2xl mx-2"></GiHamburgerMenu>
      </div>
    </div>
  );
}
