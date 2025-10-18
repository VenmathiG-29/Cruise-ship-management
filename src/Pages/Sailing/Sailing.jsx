import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Button,
  OrderedList,
  ListItem,
  HStack,
  Center,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { sailingsixdata } from "../../UTIL/localstorageauth/PagesData/Data";
import { BsCalendarCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
const Sailing = () => {
  return (
    <>
      <Box
        mt={["-20px", "-20px", "-70px", "-70px"]}
        w="100%"
        mx="auto"
        bg="url('./img/vishal/selling.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={{ base: "200px", md: "400px", lg: "600px" }}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection={"column"}
      >
        <Text
          mt="30px"
          fontSize={{ sm: "15px", md: "25px", lg: "40px", xl: "60px" }}
          color={"#fff"}
          textAlign="center"
          fontWeight={"700"}
        >
          Special Sailing
        </Text>
        <Box w="95%" mx="auto">
          <Text
            mt={["30px", "50px", "40px"]}
            fontSize={{ sm: "15px", md: "25px", lg: "40px", xl: "50px" }}
            color={"#fff"}
            fontWeight={"700"}
            textAlign="center"
          >
            If you love relaxing, discovering new places and having fun then
            cruising is the perfect vacation getaway.
          </Text>
        </Box>
      </Box>
      <Box w="90%" mx="auto" my="5">
        <Box w="100%" mx="auto" my="5">
          <Box
            pb="7"
            p={5}
            mb={7}
            borderRadius={"10px"}
            backgroundImage="url('./img/vishal/content-image.avif')"
            position="relative"
          >
            <Image
              className={"cimage1"}
              src="./img/vishal/circular-image.png"
              display={["none", "none", "none", "block"]}
              mt={"-100px"}
            ></Image>

            <Text
              fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
              lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
              color={"white"}
              fontWeight={"700"}
              borderBottom={"2px solid #EE961A"}
            >
              More About Nauti Amigo
            </Text>
            <Box background={"white"} borderRadius={"10px"} p={"10px"} mt={5}>
              <Text
                textAlign={"justify"}
                fontWeight="400"
                color={"black"}
                fontSize={{ sm: "5px", md: "5px", lg: "15px", xl: "18px" }}
              >
                Welcome to Goa Sunset Cruises, where you can experience the
                magical beauty of the sun setting over the Arabian Sea. Our
                sunset cruises offer an unforgettable way to witness the
                stunning vistas of Goa's coastline, while enjoying a relaxing
                and luxurious cruise with your loved ones.Our cruises depart
                from the Mandovi River, located in the heart of Panaji, the
                capital of Goa. As you step aboard our luxurious vessel, you'll
                be greeted by our friendly crew who will be at your service
                throughout the cruise. You can sit back and relax on the
                comfortable seating areas, or take a stroll on the open deck to
                take in the breathtaking views.As we set sail, you'll be able to
                witness the stunning colors of the sky as the sun sets behind
                the horizon. The orange, pink, and golden hues of the sky create
                a magical ambiance, perfect for a romantic evening with your
                partner, or a fun-filled outing with friends and family.Our
                sunset cruises also offer a delicious dining experience, with a
                selection of mouth-watering snacks and drinks. You can choose
                from a range of refreshing cocktails, mocktails, beer, and wine,
                as you savor the delectable snacks that are served onboard.
                Whether you're looking for a romantic date, a memorable family
                outing, or a fun-filled evening with friends, our sunset cruises
                are the perfect way to spend your time in Goa. Our experienced
                crew ensures that you have a comfortable and enjoyable time
                onboard, with safety being our top priority. Don't miss out on
                the opportunity to experience the beauty of the Mandovi waters.
                Experience the magic of the Arabian Sea as the sun sets over the
                horizon. you'll have a memorable and unforgettable experience
                that you'll cherish for years to come.
              </Text>
            </Box>
          </Box>
        </Box>

        <SimpleGrid
          mt="2"
          columns={[1, 1, 2, 3]}
          spacing="40px"
          borderBottom={"2px solid #1E1E1E"}
          pb="5"
        >
          {sailingsixdata.map((e, ind) => (
            <Box
              maxW={"450px"}
              w={"full"}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
              key={ind}
              height="auto"
            >
              <Stack spacing={"3"}>
                <Text
                  textAlign={"center"}
                  color={"gray.400"}
                  fontWeight={800}
                  noOfLines={1}
                >
                  {e.cruise} <span style={{ color: "#041d3e" }}>{e.title}</span>
                </Text>
                <Text
                  textTransform={"capitalize"}
                  fontWeight={700}
                  fontSize={"16px"}
                  letterSpacing={1.1}
                  textAlign={"center"}
                >
                  {e.timingInfo}
                </Text>
                <HStack justifyContent={"center"}>
                  <BsCalendarCheck style={{ color: "#ed8b49" }} />
                  <Text
                    color={"orange.400"}
                    fontSize={"16px"}
                    fontFamily={"body"}
                    fontWeight={600}
                    textAlign={"center"}
                  >
                    Sails Everyday
                  </Text>
                </HStack>
                <Text
                  color={"gray.500"}
                  textAlign={"justify"}
                  noOfLines={5}
                  fontWeight={600}
                >
                  {e.desc}
                </Text>
                <Text color={"gray.500"} fontWeight={600}>
                  Boarding point-{" "}
                  <span style={{ color: "#ed8b49" }}>{e.boardingPoint}</span>
                </Text>
                <Text color={"gray.500"} fontWeight={600} noOfLines={1}>
                  Book your spot on our{" "}
                  <span style={{ color: "#ed8b49" }}>{e.bookDescription}</span>
                </Text>
                <Center>
                  <Link to={"/allpackages"}>
                    <Button
                      w={"100px"}
                      border={"1px solid #81bbed"}
                      background={"white"}
                      color={"blue.300"}
                      fontWeight={600}
                      _hover={{
                        background: "blue.300",
                        color: "#fff",
                      }}
                    >
                      Book Now
                    </Button>
                  </Link>
                </Center>
                <Box h={"210px"} bg={"gray.100"} mb={"20px"}>
                  <Image h={"full"} w={"100%"} src={e.imgurl} layout={"fill"} />
                </Box>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>

        <Box
          textAlign={"justify"}
          mt="10"
          p={6}
          borderRadius={10}
          border={"1px solid #E3E6E6"}
        >
          <Text
            fontWeight="700"
            fontSize={["12px", "17px", "20px", "20px"]}
            my={{ base: "10px", md: "5px" }}
            color={"#5392F7"}
          >
            Terms & Conditions:
          </Text>
          <OrderedList
            fontSize={["10px", "15px", "15px", "15px"]}
            fontWeight="500"
            textAlign={"justify"}
          >
            <ListItem>
              Promo code redemption is only with the purchase of a pair of
              regular-priced City Lights dinner cruise tickets (INR 225++) on
              Danaos Tourism with promotion code “TAKEMEHOME” only. Promo code
              has no monetary value and is valid for same-day, one-way, single
              location drop-off, single-use only and cannot be transferred,
              exchanged for cash, or offset for any other products or services.
              Once Limousine booking has been confirmed this coupon will be
              considered claimed.
            </ListItem>
            <ListItem>
              Additional charges due to re-booking of limousine due to no-show,
              additional locations & added expenses from the ride will need to
              be at the customer’s expense and based on limousine service’s
              standard rates.
            </ListItem>
            <ListItem>
              Under no circumstances will Danaos Tourism be held responsible or
              liable in any way for any claims, damages, losses, expenses,
              costs, or liabilities whatsoever.
            </ListItem>
            <ListItem>
              Danaos Tourism reserves the right to change these terms and
              conditions at any time without prior notice. This promo code
              cannot be used in conjunction with any other ongoing promotions.
            </ListItem>
          </OrderedList>
        </Box>
      </Box>
    </>
  );
};

export default Sailing;
