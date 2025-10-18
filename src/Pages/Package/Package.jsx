import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { packagePageData } from "../../UTIL/localstorageauth/PagesData/Data";

const Package = () => {
  return (
    <>
      <Box
        mt={["-20px", "-20px", "-70px", "-70px"]}
        w="100%"
        mx="auto"
        bg="url('./img/vishal/pack.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={{ base: "200px", md: "400px", lg: "600px" }}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection={"column"}
        position="relative"
      >
        <Box
          w="100%"
          position={"absolute"}
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Text
            mt={["0rem", "0rem", "-6rem", "-6rem"]}
            fontSize={{ sm: "15px", md: "25px", lg: "50px", xl: "50px" }}
            color={"#F2CD5B"}
            textAlign="center"
            fontWeight={"700"}
          >
            “ Set Sail On Your Dream Vacation.”
          </Text>
        </Box>
      </Box>
      <Box
        w="90%"
        mx={"auto"}
        my="20px"
        borderBottom={"2px solid #000000"}
        pb="25px"
      >
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={10} mt="12">
          {packagePageData?.map((item) => (
            <Box
              key={item.id}
              borderWidth="1px"
              m={"auto"}
              borderRadius="lg"
              padding={4}
              data-aos="flip-up"
            >
              <SimpleGrid columns={2} spacing={4}>
                <Box>
                  <Image
                    objectFit="cover"
                    src={item.img}
                    alt={item.alt}
                    h="250px"
                    w="100%"
                  />
                </Box>
                <Box>
                  <VStack h="100%" spacing={5}>
                    <Heading fontSize={"2xl"} fontFamily={"body"} noOfLines={1}>
                      {item.text}
                    </Heading>
                    <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                      {item.start}
                    </Text>
                    <Text textAlign={"center"} px={3} noOfLines={3}>
                      {item.desc}
                    </Text>
                    <Link to="/allpackages">
                      <Button
                        fontFamily="700"
                        fontSize={"18px"}
                        textTransform={"capitalize"}
                        backgroundColor={"#081839"}
                        color={"white"}
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          backgroundColor: "#081839",
                        }}
                      >
                        Book package
                      </Button>
                    </Link>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box w="90%" mx={"auto"} textAlign="center" mb="50px">
        <Text fontFamily="bold" fontSize={"22px"}>
          All prices are subject to 10% Service Charge + GSTat the prevailing
          rate.
        </Text>
      </Box>
    </>
  );
};

export default Package;
