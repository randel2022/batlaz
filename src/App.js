import * as React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Verification from "./components/Verification/Verification";

import LatestBattle from "./components/Games/LatestBattle";

import RecentBattle from "./components/Games/RecentBattle";
import Games from "./components/Games/Games";

import { ChakraProvider } from "@chakra-ui/react";

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

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box w="100%">
          {/* <Header /> */}
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/LatestBattle" element={<LatestBattle />} />
            <Route exact path="/RecentBattle" element={<RecentBattle />} />
            <Route exact path="/Verification" element={<Verification />} />
          </Routes>
          {/* <Footer /> */}
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
