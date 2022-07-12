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

import gstore from ".././assets/gstore.png";
import astore from ".././assets/appstore.png";

import Featured from ".././assets/Feature-Image.png";

import Controller from ".././assets/Controller.png";
import Trophy from ".././assets/Trophy.png";
import Flag from ".././assets/Flag.png";
import Star from ".././assets/Flag.png";
import Thunder from ".././assets/Thunder.png";
import Chest from ".././assets/Chest.png";

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

import "./Landing.css";
import { TbMinusVertical } from "react-icons/tb";

export default function Landing() {
  return (
    <Box>
      <Box bgImage={sectionBg} bgCover="cover" className="flex">
        <Box
          height="auto"
          display="flex"
          flexDirection="column"
          className="w-1/2 p-12"
        >
          <div>
            <img src={banner} />
          </div>

          <Box display="flex" flexDirection="">
            <div className="w-1/5 flex">
              <div>
                <Text color="white" fontSize="4xl">
                  1280
                </Text>
                <Text color="white">Collection</Text>
              </div>
            </div>
            <div className="w-1/5">
              <Text color="white" fontSize="4xl">
                1280
              </Text>
              <Text color="white">Users</Text>
            </div>
            <div className="w-1/5">
              <Text color="white" fontSize="4xl">
                1280
              </Text>
              <Text color="white">Subscribers</Text>
            </div>
          </Box>
        </Box>
        <div className="w-1/2 flex justify-center flex-col gap-10">
          <div className="px-20">
            <h2 className="text-7xl font-bold text-white">
              Best Batlaz<br></br> Battle for you
            </h2>
          </div>

          <div className="flex w-full px-20">
            <Link
              className="px-12 py-3 "
              color="white"
              borderRadius="10"
              bgColor="#7E20C9"
            >
              Explore Now
            </Link>
            <Link color="white" className="px-12 py-3 border-10">
              Get Started
            </Link>
          </div>
        </div>
      </Box>

      <Box bgColor="black" className="h-full px-20 py-10 flex w-full flex">
        <Box className="w-2/5 flex flex-col">
          <h3 className="text-4xl font-bold text-white">
            Trusted with Lorem Ipsum
          </h3>
          <Text fontSize="sm" className="text-white">
            Maecenas sit amet urna ornare ligula<br></br> faucibus consectetur
            nec vitae augue.
          </Text>
        </Box>
        <Box className="w-3/5 flex justify-between px-20 items-center">
          <Image src={googlegray} class="h-1/4" />
          <Image src={claygray} class="h-1/4" />
          <Image src={egame} class="h-1/4" />
        </Box>
      </Box>

      <Box className="flex w-full px-20 " w="100%" bgColor="#7E20C9" py="12">
        <Image src={Featured} height="auto" w="50%"></Image>
        <Box
          w="50%"
          py="10"
          display="flex"
          flexDirection="column"
          px="16"
          gap="5"
        >
          <Heading className="text-5xl" color="white">
            Join or watch streams<br></br> on batlaz war room
          </Heading>
          <Text color="white">
            Maecenas sit amet urna ornare ligula faucibus consectetur nec vitae
            augue. Quisque dolor leo, tristique et hendrerit nec, vestibulum nec
            tellus. Vivamus ut ex velit. Ut in ex mattis, porta urna eu,
            placerat risus. Vestibulum tempor ut dui ut vestibulum. Integer mi
            dui, sollicitudin id arcu ac, eleifend pulvinar lacus. Morbi
            placerat imperdiet pretium. Praesent id egestas eros, ac rutrum sem.
            Aenean scelerisque massa ac nisi egestas elementum.
          </Text>
          <Link
            py="3"
            px="12"
            bgColor="black"
            textAlign="center"
            color="white"
            w="35%"
            borderRadius="10"
          >
            Explore Now
          </Link>
        </Box>
      </Box>

      <Box className="flex flex-col">
        <Box
          bgImage={sectionBg}
          height="110vh"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Box
            className="flex px-20 justify-between py-5 items-center"
            // bgColor="red"
            w="100%"
          >
            <Text className="text-3xl" color="white">
              Latest batlaz battle
            </Text>
            <Link color="white" bgColor="black" px="3" py="1" borderRadius="15">
              View All Games
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            className="px-20 gap-10"
            w="100%"
          >
            <Box
              bgColor="black"
              px="3"
              paddingTop="3"
              paddingBottom="8"
              borderRadius="35"
              height="auto"
            >
              <Image src={circle1} />
              <Text className="text-center text-white" py="4">
                Maecenas sit amet urna ornare
              </Text>
              <Center marginTop="8">
                <Link className="text-center bg-black text-white px-10 py-2 rounded-md">
                  Play
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
            >
              <Image src={circle2} />
              <Text className="text-center text-white" py="4">
                Maecenas sit amet urna ornare
              </Text>
              <Center marginTop="8">
                <Link className="text-center bg-black text-white px-10 py-2 rounded-md">
                  Play
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
            >
              <Image src={circle3} />
              <Text className="text-center text-white" py="4">
                Maecenas sit amet urna ornare
              </Text>
              <Center marginTop="8">
                <Link className="text-center bg-black text-white px-10 py-2 rounded-md">
                  Play
                </Link>
              </Center>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          bgColor="black"
          w="100%"
          px="20"
        >
          <Box w="100%" py="50">
            <Text color="white" fontSize="3xl">
              Our batlaz war room
            </Text>
          </Box>
          <Box></Box>
        </Box>

        <Box
          display="flex"
          bgColor="#7E20C9"
          py="50"
          w="100%"
          flexDirection="column"
        >
          <Box>
            <Box className="flex px-20 justify-between flex-row">
              <Box w="60%" display="flex" gap="3" flexDirection="column">
                <Text className="text-4xl  text-white">
                  Enjoy Gaming Experience <br></br> With Batlaz App
                </Text>
                <p className="text-white">
                  Vestibulum felis sapien, tristique vitae finibus et, aliquam
                  quis turpis. Nam euismod nisi<br></br> in mauris convallis
                  tempor. In hac habitasse platea dictumst.
                </p>
              </Box>
              <Box
                w="40%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Link color="white" className="bg-black py-2 px-10 rounded-md">
                  Explore Now
                </Link>
              </Box>
            </Box>
          </Box>
          <Box w="100%" display="flex">
            <Box
              w="60%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box className="w-full flex px-20">
                <Flex paddingBottom="8" w="100%">
                  <Box w="50%" className="flex" flexDirection="column" gap="5">
                    <img src={Controller} className="w-10 circle" alt="" />
                    <Box className="" marginTop="-12">
                      <Text color="white" fontWeight="bold" fontSize="lg">
                        Easy to play
                      </Text>
                      <Text color="white">Nunc sit amet sagittis tortor. </Text>
                    </Box>
                  </Box>
                  <Box w="50%" className="flex" flexDirection="column" gap="5">
                    <img src={Trophy} className="w-10 circle" alt="" />
                    <Box className="" marginTop="-12">
                      <Text color="white" fontWeight="bold" fontSize="lg">
                        Easy to play
                      </Text>
                      <Text color="white">Nunc sit amet sagittis tortor. </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>

              <Box className="w-full flex px-20">
                <Flex paddingBottom="8" w="100%">
                  <Box w="50%" className="flex" flexDirection="column" gap="5">
                    <img src={Flag} className="w-10 circle" alt="" />
                    <Box className="" marginTop="-12">
                      <Text color="white" fontWeight="bold" fontSize="lg">
                        Easy to play
                      </Text>
                      <Text color="white">Nunc sit amet sagittis tortor. </Text>
                    </Box>
                  </Box>
                  <Box w="50%" className="flex" flexDirection="column" gap="5">
                    <img src={Star} className="w-10 circle" alt="" />
                    <Box className="" marginTop="-12">
                      <Text color="white" fontWeight="bold" fontSize="lg">
                        Easy to play
                      </Text>
                      <Text color="white">Nunc sit amet sagittis tortor. </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>

              <Box className="w-full flex px-20">
                <Flex paddingBottom="8" w="100%">
                  <Box w="50%" className="flex" flexDirection="column" gap="5">
                    <img src={Thunder} className="w-10 circle" alt="" />
                    <Box className="" marginTop="-12">
                      <Text color="white" fontWeight="bold" fontSize="lg">
                        Easy to play
                      </Text>
                      <Text color="white">Nunc sit amet sagittis tortor. </Text>
                    </Box>
                  </Box>
                  <Box w="50%" className="flex" flexDirection="column" gap="5">
                    <img src={Chest} className="w-10 circle" alt="" />
                    <Box className="" marginTop="-12">
                      <Text color="white" fontWeight="bold" fontSize="lg">
                        Easy to plays
                      </Text>
                      <Text color="white">Nunc sit amet sagittis tortor. </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Box w="40%">
              <Image src={iphoneImage} height="70vh" />
            </Box>
          </Box>
        </Box>

        <Box
          className="w-full px-20"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bgImage={sectionBg}
          height="110vh"
          gap="20"
        >
          <Center className="flex h-9 w-9">
            <Heading color="white" className="text-4xl font-normal">
              Leaderboard
            </Heading>
          </Center>

          <Box className="flex w-full ">
            <Box className="w-full w-1/2 flex flex-row gap-5">
              <Box
                w="25%"
                border="1px"
                borderColor="#7E20C9"
                borderRadius="25"
                position="relative"
                bgColor="black"
              >
                <Image
                  src={StarTop}
                  position="absolute"
                  className="h-10"
                  right="10"
                  top="-5"
                />
                <Box
                  className="flex justify-between"
                  flexDirection="column"
                  alignItems="center"
                  gap="5"
                  px="0"
                  paddingTop="10"
                >
                  <Image
                    src={whiteCrown}
                    className="h-16"
                    alt=""
                    border="2px"
                    borderColor="#7E20C9"
                    padding="2"
                    borderRadius="50%"
                  />
                  <Text className="ml-2" color="white">
                    Marley Bator
                  </Text>

                  <Box>
                    <Text textAlign="center" color="#F09C37" fontSize="3xl">
                      11,446
                    </Text>
                    <Text color="white">Total Battle Wins</Text>
                  </Box>
                  <Box w="100%">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      w="100%"
                      borderTop="1px"
                      borderBottom="1px"
                      borderColor="#1C1A1E"
                      py="2"
                      px="5"
                    >
                      <Text color="#716B76">Win Rate:</Text>
                      <Text color="white">89.8%</Text>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      w="100%"
                      py="2"
                      px="5"
                      borderTop="1px"
                      borderBottom="1px"
                      borderColor="#1C1A1E"
                    >
                      <Text color="#716B76">Favorite Room:</Text>
                      <Text color="white">Oblivion</Text>
                    </Box>

                    <Center
                      href=""
                      className="center"
                      bgColor="#7E20C9"
                      borderBottomLeftRadius="21"
                      borderBottomRightRadius="21"
                      py="3"
                    >
                      <Link color="white">View Profile</Link>
                    </Center>
                  </Box>
                </Box>
              </Box>

              <Box
                w="25%"
                border="1px"
                borderColor="#7E20C9"
                borderRadius="25"
                position="relative"
                bgColor="black"
              >
                <Image
                  src={StarTop}
                  position="absolute"
                  className="h-10"
                  right="10"
                  top="-5"
                />
                <Box
                  className="flex justify-between"
                  flexDirection="column"
                  alignItems="center"
                  gap="5"
                  px="0"
                  paddingTop="10"
                >
                  <Image
                    src={whiteCrown}
                    className="h-16"
                    alt=""
                    border="2px"
                    borderColor="#7E20C9"
                    padding="2"
                    borderRadius="50%"
                  />
                  <Text className="ml-2" color="white">
                    Marley Bator
                  </Text>

                  <Box>
                    <Text textAlign="center" color="white" fontSize="3xl">
                      11,446
                    </Text>
                    <Text color="white">Total Battle Wins</Text>
                  </Box>
                  <Box w="100%">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      w="100%"
                      borderTop="1px"
                      borderBottom="1px"
                      borderColor="#1C1A1E"
                      py="2"
                      px="5"
                    >
                      <Text color="#716B76">Win Rate:</Text>
                      <Text color="white">89.8%</Text>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      w="100%"
                      py="2"
                      px="5"
                      borderTop="1px"
                      borderBottom="1px"
                      borderColor="#1C1A1E"
                    >
                      <Text color="#716B76">Favorite Room:</Text>
                      <Text color="white">Oblivion</Text>
                    </Box>

                    <Center
                      href=""
                      className="center"
                      bgColor="#7E20C9"
                      borderBottomLeftRadius="21"
                      borderBottomRightRadius="21"
                      py="3"
                    >
                      <Link color="white">View Profile</Link>
                    </Center>
                  </Box>
                </Box>
              </Box>

              {/* box3 */}
              <Box
                w="25%"
                border="1px"
                borderColor="#7E20C9"
                borderRadius="25"
                position="relative"
                bgColor="black"
              >
                <Image
                  src={StarTop}
                  position="absolute"
                  className="h-10"
                  right="10"
                  top="-5"
                />
                <Box
                  className="flex justify-between"
                  flexDirection="column"
                  alignItems="center"
                  gap="5"
                  px="0"
                  paddingTop="10"
                >
                  <Image
                    src={whiteCrown}
                    className="h-16"
                    alt=""
                    border="2px"
                    borderColor="#7E20C9"
                    padding="2"
                    borderRadius="50%"
                  />
                  <Text className="ml-2" color="white">
                    Marley Bator
                  </Text>

                  <Box>
                    <Text textAlign="center" color="white" fontSize="3xl">
                      11,446
                    </Text>
                    <Text color="white">Total Battle Wins</Text>
                  </Box>
                  <Box w="100%">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      w="100%"
                      borderTop="1px"
                      borderBottom="1px"
                      borderColor="#1C1A1E"
                      py="2"
                      px="5"
                    >
                      <Text color="#716B76">Win Rate:</Text>
                      <Text color="white">89.8%</Text>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      w="100%"
                      py="2"
                      px="5"
                      borderTop="1px"
                      borderBottom="1px"
                      borderColor="#1C1A1E"
                    >
                      <Text color="#716B76">Favorite Room:</Text>
                      <Text color="white">Oblivion</Text>
                    </Box>

                    <Center
                      href=""
                      className="center"
                      bgColor="#7E20C9"
                      borderBottomLeftRadius="21"
                      borderBottomRightRadius="21"
                      py="3"
                    >
                      <Link color="white">View Profile</Link>
                    </Center>
                  </Box>
                </Box>
              </Box>

              {/* Box4 */}
              <Box
                w="25%"
                border="1px"
                borderColor="#7E20C9"
                borderRadius="25"
                position="relative"
                bgColor="black"
              >
                <Image
                  src={StarTop}
                  position="absolute"
                  className="h-10"
                  right="10"
                  top="-5"
                />
                <Box
                  className="flex justify-between"
                  flexDirection="column"
                  alignItems="center"
                  gap="5"
                  px="0"
                  paddingTop="10"
                >
                  <Image
                    src={whiteCrown}
                    className="h-16"
                    alt=""
                    border="2px"
                    borderColor="#7E20C9"
                    padding="2"
                    borderRadius="50%"
                  />
                  <Text className="ml-2" color="white">
                    Marley Bator
                  </Text>

                  <Box>
                    <Text textAlign="center" color="white" fontSize="3xl">
                      11,446
                    </Text>
                    <Text color="white">Total Battle Wins</Text>
                  </Box>
                  <Box w="100%">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      w="100%"
                      borderTop="1px"
                      borderBottom="1px"
                      borderColor="#1C1A1E"
                      py="2"
                      px="5"
                    >
                      <Text color="#716B76">Win Rate:</Text>
                      <Text color="white">89.8%</Text>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      w="100%"
                      py="2"
                      px="5"
                      borderTop="1px"
                      borderBottom="1px"
                      borderColor="#1C1A1E"
                    >
                      <Text color="#716B76">Favorite Room:</Text>
                      <Text color="white">Oblivion</Text>
                    </Box>

                    <Center
                      href=""
                      className="center"
                      bgColor="#7E20C9"
                      borderBottomLeftRadius="21"
                      borderBottomRightRadius="21"
                      py="3"
                    >
                      <Link color="white">View Profile</Link>
                    </Center>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
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
