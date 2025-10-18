import React from "react";
import {
  travelData,
  traveldest,
} from "../../UTIL/localstorageauth/PagesData/Data";
import { Box, Text, SimpleGrid, HStack } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { GiElectric } from "react-icons/gi";
AOS.init();

const BestAndTopTravel = () => {
  return (
    <>
      {/* best travel deals */}
      <Box w="90%" mx="auto" mt="3rem" mb="2rem">
        <Text
          textAlign={"center"}
          fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
          lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
          color={"#00000"}
          fontWeight={"700"}
          borderBottom={"2px solid #1E1E1E"}
          mb="5"
        >
          Best Cruising Deals
        </Text>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          data-aos="fade-up"
          spacing={10}
        >
          {travelData?.map((item, ind) => (
            <Box
              height="auto"
              key={ind}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              borderRadius={"10px"}
            >
              <Link to="/allpackages">
                <Box p={4} height={"460px"}>
                  <Box
                    w="100%"
                    // border={"1px solid red"}
                    bg={`url(${item.imgurl})`}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    height={{ base: "250px", md: "250px", lg: "250px" }}
                    display="grid"
                    placeItems={"center"}
                  ></Box>
                  <Box
                    p={2}
                    // border={"1px solid red"}
                    position={"relative"}
                    mt={"-20px"}
                    ml={"20px"}
                    w={"120px"}
                    textAlign={"Center"}
                    color={"white"}
                    bg={item.color}
                    fontWeight={"bold"}
                  >
                    {item.title}
                  </Box>
                  <Box
                    // border={"1px solid green"}
                    // fontSize="24px"
                    // backgroundColor={"white"}
                    borderBottomLeftRadius={"10px"}
                    borderBottomRightRadius={"10px"}
                    // data-aos="fade-up"
                    // height={{ base: "auto", md: "140px", lg: "130px" }}
                  >
                    <HStack alignItems={"center"}>
                      <Box>
                        <GiElectric
                          style={{
                            height: "20px",
                            width: "20px",
                            color: "#477ce3",
                          }}
                        />
                      </Box>
                      <Box>
                        <Text
                          w="100%"
                          textAlign="justify"
                          fontSize={["18px", "18px", "18px", "20px"]}
                          px="2"
                          pt={3}
                          // py={4}
                          fontWeight={"bold"}
                          noOfLines={1}
                        >
                          {item.heading}
                        </Text>
                      </Box>
                    </HStack>

                    <Text noOfLines={4} fontSize={"20px"}>
                      {item.para}
                    </Text>
                  </Box>
                </Box>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* top travel destination */}
      <Box w="90%" mx="auto" mt="10px" mb="10px">
        <Text
          textAlign={"center"}
          fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
          lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
          color={"#00000"}
          fontWeight={"700"}
          borderBottom={"2px solid #1E1E1E"}
          mb="5"
        >
          Top Travel Destinations
        </Text>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          {traveldest?.map((item) => (
            <Box height="auto" key={item.id}>
              <Link to="/allpackages">
                <Box
                  boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
                  w="100%"
                  bg={`url(${item.img})`}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  height={{ base: "300px", md: "500px", lg: "500px" }}
                  display="grid"
                  _hover={{
                    backgroundImage: `url(${item.img1})`,
                    cursor: "pointer",
                  }}
                  placeItems={"center"}
                >
                  <Text
                    w={["100%", "100%", "100%"]}
                    h="75px"
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                    backgroundColor={"rgba(242, 205, 91, 0.6)"}
                    fontSize="28px"
                    fontWeight="700"
                    data-aos="fade-right"
                    color="#081839"
                  >
                    {item.text}
                  </Text>
                </Box>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default BestAndTopTravel;
