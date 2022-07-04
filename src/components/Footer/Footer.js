import React from "react";
import gstore from ".././assets/gstore.png";
import astore from ".././assets/appstore.png";
import ig from ".././assets/ig.png";
import fb from ".././assets/fb.png";
import twitter from ".././assets/twitter.png";
import "./Footer.css";

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

export default function Footer() {
  return (
    <div>
      <div className="flex top-footer ">
        <div className="w-1/2 px-20 py-10">
          <h2 className="text-4xl">Download our app</h2>
          <p>
            Vestibulum felis sapien, tristique vitae finibus et, aliquam quis
            turpis. Nam euismod nisi in mauris convallis tempor. In hac
            habitasse platea dictumst.
          </p>
        </div>
        <div className="w-1/2 flex justify-start items-center">
          <img src={gstore} className="w-1/4 h-14" />
          <img src={astore} className="w-1/4 h-14 mx-10" />
        </div>
      </div>

      <div className="flex justify-between px-10 py-3 bg-white">
        <Text color="#484848">
          BatLaz © Copyright 2022, Inc. All rights reserved.
        </Text>

        <div className="flex">
          <div>
            <Link className="px-2" color="#484848">
              Terms of Service
            </Link>
            <Link className="px-2" color="#484848">
              Privacy Policy
            </Link>
            <Link className="px-2" color="#484848">
              FAQs
            </Link>
          </div>
          <div className="flex items-center">
            <img src={ig} className="h-4 px-1" />
            <img src={fb} className="h-4 px-1" />
            <img src={twitter} className="h-4 px-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
