import React from "react";
import { birthData, sailing } from "../../UTIL/localstorageauth/PagesData/Data";
import { Box, Text, Image, Button, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Birthday = () => {
  return (
    <>
      {/* <Box w="90%" mx={"auto"} my="20px" pb="25px">
        {birthData?.map((item) => (
          <SimpleGrid columns={[1, 1, 2, 2]} spacing={5} mt="12" key={item.id}>
            <Box height={["240px", "240px", "400px", "400px"]}>
              <Image src={item.img} alt={item.alt} w="100%" h="100%"></Image>
            </Box>
            <Box
              textAlign={"center"}
              height={["240px", "240px", "400px", "400px"]}
            >
              <VStack
                h="100%"
                p="3"
                justifyContent={[
                  "center",
                  "center",
                  "space-between",
                  "space-between",
                ]}
              >
                <Text
                  fontWeight="700"
                  fontSize={["20px", "20px", "30px", "42px"]}
                >
                  {item.text}
                </Text>
                <Text
                  fontWeight="500"
                  fontSize={["15px", "20px", "25px", "36px"]}
                >
                  {item.start}
                </Text>
                <Box>
                  <Text
                    fontWeight="400"
                    fontSize={["13px", "17px", "20px", "24px"]}
                    textAlign="justify"
                    w="100%"
                    noOfLines={"2"}
                  >
                    {item.desc}
                  </Text>
                </Box>
                <Link to="/allpackages">
                  <Button
                    fontFamily="700"
                    fontSize={"18px"}
                    textTransform={"capitalize"}
                    backgroundColor={"#081839"}
                    color="#fff"
                    _hover={{ backgroundColor: "#081839" }}
                    px="50px"
                  >
                    Book package
                  </Button>
                </Link>
              </VStack>
            </Box>
          </SimpleGrid>
        ))}
      </Box> */}
      <Box w="90%" mx="auto" mt="2rem" mb="10px">
        <SimpleGrid mt="2" columns={[1, 1, 2, 3]} spacing="40px" pb="5">
          {sailing.map((e, ind) => (
            <Text key={ind} as="span" data-aos="flip-right">
              <Box
                height="auto"
                p="2"
                boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
                borderRadius="10px"
              >
                <SimpleGrid columns={[2, 2, 2, 2]} spacing="2">
                  <Box h="240px">
                    <Image
                      borderRadius={"10px"}
                      src={e.imgurl}
                      alt="d"
                      w="100%"
                      h="100%"
                    />
                  </Box>

                  <Box height={["240px", "240px", "240px"]} px="2">
                    <VStack
                      textAlign={"justify"}
                      h="100%"
                      alignItems={"flex-start"}
                      justifyContent={[
                        "center",
                        "space-between",
                        "space-between",
                      ]}
                      textTransform="capitalize"
                    >
                      <Text
                        letterSpacing={"2px"}
                        fontWeight="700"
                        fontSize={{ base: "18px", md: "18px", lg: "19px" }}
                        color="#000000"
                      >
                        {e.title}
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{ base: "14px", md: "12px", lg: "15px" }}
                        color="#000000"
                        textAlign={"justify"}
                        noOfLines="3"
                      >
                        {e.desc}
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{ base: "12px", md: "12px", lg: "15px" }}
                        color="#000000"
                        textAlign={"justify"}
                      >
                        Starts From Rs.{e.prise}
                      </Text>
                      <Link to="/allpackages">
                        <Button
                          w={{ base: "100%", md: "113px" }}
                          h="40px"
                          backgroundColor={"#081839"}
                          color="white"
                          _hover={{ backgroundColor: "#081839" }}
                          fontWeight={"700"}
                          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                          mt="20px"
                        >
                          Book Now
                        </Button>
                      </Link>
                    </VStack>
                  </Box>
                </SimpleGrid>
              </Box>
            </Text>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Birthday;
