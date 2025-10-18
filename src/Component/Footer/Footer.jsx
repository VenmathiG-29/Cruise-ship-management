import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  useColorModeValue,
  Image,
  UnorderedList,
  ListItem,
  VStack,
  ListIcon,
  List,
  HStack,
  Button,
} from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import React from "react";
const Footer = () => {
  return (
    <Box
      background="linear-gradient(180deg, #B1D9FF 0%, #081839 100%)"
      color={useColorModeValue("gray.700", "gray.200")}
      mt="2"
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={"2rem"}>
          <Stack spacing={3}>
            <Box>
              <Link to="/">
                <Image
                  src="./img/vishal/footerlogo.png"
                  alt="fds"
                  boxSize={"150px"}
                />
              </Link>
            </Box>
            <Text
              color={"#fff"}
              textAlign="left"
              fontWeight="400"
              fontSize="14px"
              lineHeight="150%"
            >
              Please visit and connect with us and give us chance to explore the
              world with you.
            </Text>
          </Stack>
          <Stack
            align={"flex-start"}
            fontWeight="400"
            color={"#fff"}
            fontSize="14px"
          >
            <VStack align={"flex-start"}>
              <Text
                fontWeight="700"
                fontSize="22px"
                lineHeight="25px"
                letterSpacing="0.02em"
              >
                Our Service
              </Text>
              <Box borderBottom="3px solid #081839" w="76px" h="2px"></Box>
              <Box mt="150px">
                <UnorderedList
                  textAlign={"left"}
                  ml="6"
                  fontSize={"14px"}
                  fontWeight="600"
                  textTransform={"capitalize"}
                >
                  <ListItem
                    mt="2"
                    _hover={{
                      transform: "translate(0.7rem)",
                      color: "blue",
                    }}
                    transition="0.7s ease-out"
                  >
                    <Link to="/">Home</Link>
                  </ListItem>
                  <ListItem
                    mt="2"
                    _hover={{
                      transform: "translate(0.7rem)",
                      color: "blue",
                    }}
                    transition="0.7s ease-out"
                  >
                    <Link to="/package">packages</Link>
                  </ListItem>
                  <ListItem
                    mt="2"
                    _hover={{
                      transform: "translate(0.7rem)",
                      color: "blue",
                    }}
                    transition="0.7s ease-out"
                  >
                    <Link to="/allpackages">Booking</Link>
                  </ListItem>
                  <ListItem
                    mt="2"
                    _hover={{
                      transform: "translate(0.7rem)",
                      color: "blue",
                    }}
                    transition="0.7s ease-out"
                  >
                    <Link to="/gallery">Gallary</Link>
                  </ListItem>
                  <ListItem mt="2">
                    <Link to="/offer">Offers</Link>
                  </ListItem>
                </UnorderedList>
              </Box>
            </VStack>
          </Stack>
          <Stack align={"flex-start"} color={"#fff"}>
            <Text
              fontWeight="700"
              fontSize="22px"
              lineHeight="25px"
              letterSpacing="0.02em"
            >
              Sail with us
            </Text>
            <Box borderBottom="3px solid #081839" w="76px" h="2px"></Box>
            <Box mt="150px">
              <UnorderedList
                textAlign={"left"}
                ml="6"
                fontSize={"14px"}
                fontWeight="600"
                textTransform={"capitalize"}
              >
                <ListItem
                  mt="2"
                  _hover={{
                    transform: "translate(0.7rem)",
                    color: "blue",
                  }}
                  transition="0.7s ease-out"
                >
                  <Link to="/allpackages">Breakfast Cruises</Link>
                </ListItem>
                <ListItem
                  mt="2"
                  _hover={{
                    transform: "translate(0.7rem)",
                    color: "blue",
                  }}
                  transition="0.7s ease-out"
                >
                  <Link to="/allpackages">Lunch Cruises</Link>
                </ListItem>
                <ListItem
                  mt="2"
                  _hover={{
                    transform: "translate(0.7rem)",
                    color: "blue",
                  }}
                  transition="0.7s ease-out"
                >
                  <Link to="/allpackages">Dinner Cruises</Link>
                </ListItem>
                <ListItem
                  mt="2"
                  _hover={{
                    transform: "translate(0.7rem)",
                    color: "blue",
                  }}
                  transition="0.7s ease-out"
                >
                  <Link to="/allpackages">Charter Cruises</Link>
                </ListItem>
                <ListItem
                  mt="2"
                  _hover={{
                    transform: "translate(0.7rem)",
                    color: "blue",
                  }}
                  transition="0.7s ease-out"
                >
                  <Link to="/sailing">Special Sailings</Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
          <Stack align={"flex-start"} color="#fff">
            <Text
              fontWeight="700"
              fontSize="22px"
              lineHeight="25px"
              letterSpacing="0.02em"
            >
              Quick Links
            </Text>
            <Box borderBottom="3px solid #081839" w="76px" h="2px"></Box>
            <Box fontSize={"16px"}>
              <List textAlign={"left"} ml="2">
                <ListItem pb="12px">
                  <HStack alignItems={"flex-start"} mt="1">
                    <Text>
                      <ListIcon as={HiLocationMarker} />
                    </Text>
                    <Text>A: 457 Morningview Lane Goa , India</Text>
                  </HStack>
                </ListItem>
                <ListItem pb="12px">
                  <HStack alignItems={"flex-start"}>
                    <Text>
                      <ListIcon as={IoIosMail} />
                    </Text>
                    <Text>contact@danaostourism.com</Text>
                  </HStack>
                </ListItem>
              </List>
            </Box>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              NEWSLETTER
            </Text>
            <HStack
              w="100%"
              mx="auto"
              spacing="0"
              flexDirection={["column", "row", "row", "row", "row"]}
            >
              <Input
                w="100%"
                h="45px"
                type="text"
                placeholder="Email"
                background="#D9D9D9"
                border="0"
                fontWeight="700"
                color="#8E8E8E"
                letterSpacing="0.02em"
                borderRadius={"2"}
              />
              <Button
                borderRadius={"2"}
                background="#172A4C"
                h="45px"
                px="30px"
                py="10px"
                fontWeight="700"
                lineHeight="27px"
                letterSpacing="0.02em"
                _hover={{
                  background: "#172A4C",
                }}
              >
                Subscribe
              </Button>
            </HStack>
            <br />
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Social media Links
            </Text>
            <Box>
              <HStack gap="20px" mt="5px">
                <Text
                  border="1px solid white"
                  padding="10px"
                  borderRadius="50%"
                >
                  <a
                    href="https://www.facebook.com/danaoscruise"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Image
                      _hover={{
                        transform: "rotate(360deg)",
                      }}
                      transition="0.7s ease-out"
                      src="./img/vishal/BFB.png"
                      w="19px"
                      alt="fbimg"
                    />
                  </a>
                </Text>
                <Text
                  border="1px solid white"
                  padding="10px"
                  borderRadius="50%"
                >
                  <Image
                    _hover={{
                      transform: "rotate(360deg)",
                    }}
                    transition="0.7s ease-out"
                    src="./img/vishal/Btwit.png"
                    w="19px"
                    alt="twitimg"
                  />
                </Text>
                <Text
                  border="1px solid white"
                  padding="10px"
                  borderRadius="50%"
                >
                  <a
                    href="https://www.instagram.com/danaoscruise"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      _hover={{
                        transform: "rotate(360deg)",
                      }}
                      transition="0.7s ease-out"
                      src="./img/vishal/Binsta.png"
                      w="19px"
                      alt="insta"
                    />
                  </a>
                </Text>
              </HStack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default React.memo(Footer);
