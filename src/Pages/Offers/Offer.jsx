import {
  Box,
  Grid,
  GridItem,
  Image,
  ListItem,
  OrderedList,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

const Offer = () => {
  return (
    <>
      <Box w="100%" mx="auto" mt={["-20px", "-20px", "-70px", "-70px"]}>
        <Box
          w="100%"
          bg="url('./img/vishal/offers.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          height={["auto", "300px", "450px", "550px", "600px"]}
        >
          <Box w={{ base: "90%", md: "80%", lg: "80%" }} mx="auto" h="100%">
            <VStack
              justifyContent={"space-between"}
              spacing={{ base: "20px", md: "20px", lg: "50px" }}
              h="100%"
            >
              <Box>
                <Text
                  fontSize={{
                    base: "30px",
                    sm: "35px",
                    md: "55px",
                    lg: "100px",
                    xl: "100px",
                  }}
                  color={"#081839"}
                  textAlign="center"
                  fontWeight={"700"}
                  mt="2rem"
                >
                  Offers & Deals
                </Text>
                <Text
                  fontSize={{
                    base: "13px",
                    sm: "15px",
                    md: "20px",
                    lg: "24px",
                    xl: "24px",
                  }}
                  color={"#00000"}
                  fontWeight={"400"}
                  mt={{ base: "5px", md: "10px" }}
                  textAlign="center"
                >
                  Find the best offers and deals below and join us on India's
                  Danaos ship where you’re guaranteed open well-ventilated decks
                  and fresh sea breezes!
                </Text>
              </Box>
              <Box textAlign={"justify"}>
                <Text
                  mt="40px"
                  fontWeight="800"
                  fontSize={{
                    base: "19px",
                    sm: "19px",
                    md: "30px",
                    lg: "50px",
                    xl: "50px",
                  }}
                  color={"#fff"}
                >
                  <Text as="span">“The goal is not to sail the </Text>
                  <Text color={"#000000"} as="span">
                    boat, but rather &nbsp;
                  </Text>
                  to help the boat sail herself.”
                </Text>
              </Box>
            </VStack>
          </Box>
        </Box>

        <Box
          w={"90%"}
          m={"auto"}
          textAlign={"justify"}
          borderBottom={"2px solid #1E1E1E"}
          my="3"
          mb="2"
        >
          <Text
            fontWeight="800"
            fontSize={{ base: "15px", md: "20px", lg: "25px" }}
            color={"#5392F7"}
          >
            Exclusive Promotions & Discounts Onboard The Nauti Amigo
          </Text>
          <Text
            fontWeight="500"
            fontSize={{ base: "10px", md: "17px", lg: "20px" }}
            my={{ base: "10px", md: "20px" }}
          >
            Enjoy exclusive promotions and discounts onboard The Nauti Amigo -
            Asia's only luxury Danaos Tourism cruise. Use the promo code at
            checkout for savings and join us for a luxurious journey at sea!
          </Text>
        </Box>

        <SimpleGrid
          columns={[1, 1, 2, 3]}
          spacing={6}
          w={"90%"}
          m={"auto"}
          mt="10"
          data-aos="fade-up"
        >
          <Box
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius={"10px"}
          >
            <Image w={"100%"} h={"300px"} src={"./img/vishal/offer1.png"} />
            <VStack
              w={"90%"}
              m={"auto"}
              mt="6"
              spacing={3}
              alignItems="flex-start"
            >
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                RAISE YOUR GLASSES
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"xl"}
                fontFamily={"body"}
              >
                Promo Code not needed.
                <br />
                Valid till: 1 Feb – 31 March...
              </Heading>
              <Text color={"gray.500"}>
                Complimentary drink from our standard bar. Not applicable on
                special sailings.
              </Text>
            </VStack>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius={"10px"}
          >
            <Image w={"100%"} h={"300px"} src={"./img/vishal/offer2.png"} />
            <VStack
              w={"90%"}
              m={"auto"}
              mt="6"
              spacing={3}
              alignItems="flex-start"
            >
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                GREAT GOA SAIL Promo
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"xl"}
                fontFamily={"body"}
              >
                Promo Code: TAKEMEHOME
                <br />
                Valid till: June 2023...
              </Heading>
              <Text color={"gray.500"}>
                Free Single-way Limo Ride home worth Rs.7000. Every purchase of
                2x Adult City Lights Dinner.
              </Text>
            </VStack>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius={"10px"}
          >
            <Image w={"100%"} h={"300px"} src={"./img/vishal/offer3.png"} />
            <VStack
              w={"90%"}
              m={"auto"}
              my="6"
              spacing={3}
              alignItems="flex-start"
            >
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                COMPLIMENTARY PROSECCO
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"xl"}
                fontFamily={"body"}
              >
                Promo Code: FREEWINE
                <br />
                Valid till: June 2023
              </Heading>
              <Text color={"gray.500"}>
                A complimentary bottle of Prosecco with every purchase. And 2x
                Adult City Lights Dinner.
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>

        <Box
          w={"90%"}
          m={"auto"}
          textAlign={"justify"}
          mt="10"
          p={6}
          borderRadius={10}
          border={"1px solid #E3E6E6"}
        >
          <Text
            fontWeight="700"
            fontSize={["12px", "17px", "20px", "20px"]}
            my={{ base: "5px", md: "5px" }}
            color={"#5392F7"}
          >
            Terms & Conditions:
          </Text>
          <OrderedList
            fontSize={["10px", "15px", "15px", "18px"]}
            fontWeight="500"
          >
            <ListItem>
              Promo code requires the purchase of 2 regular-priced City Lights
              dinner cruise tickets (INR 225++) on danaostourism.com, enter
              promotion code “FREEWINE” at checkout.
            </ListItem>
            <ListItem>
              Promo code has no monetary value, single-use only and cannot be
              transferred, exchanged for cash, or offset for any other products
              or services.
            </ListItem>
            <ListItem>
              Danaos Tourism Ship reserves the right to change these terms and
              conditions at any time without prior notice.
            </ListItem>
            <ListItem>
              This promo code cannot be used in conjunction with any other
              ongoing promotions.
            </ListItem>
          </OrderedList>
        </Box>
      </Box>
    </>
  );
};

export default Offer;
