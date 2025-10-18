import React from "react";
import { Box, Text, Button, HStack, VStack } from "@chakra-ui/react";

// import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
    <>
      <Box w="100%" mx="auto" mt={["-20px", "-20px", "-70px", "-70px"]}>
        <Box
          w="100%"
          height={{ base: "200px", md: "400px", lg: "600px" }}
          position="relative"
          overflow="hidden"
        >
          <video
            src="./img/vishal/boat-video.mp4"
            autoPlay
            muted
            loop
            style={{
              minWidth: "100%",
              zIndex: -1,
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></video>
          <Box
            w="90%"
            mx="auto"
            position={"absolute"}
            top="50%"
            left=" 50%"
            transform="translate(-50%, -50%)"
            zIndex={2}
          >
            <Box mt="0.5rem">
              <VStack
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={{ base: "20px", md: "20px", lg: "50px" }}
              >
                <Box>
                  <Text
                    w={"full"}
                    fontSize={{
                      base: "15px",
                      sm: "18px",
                      md: "25px",
                      lg: "20px",
                      xl: "20px",
                    }}
                    fontWeight={800}
                    color={"#f39c12"}
                    fontFamily={"Josefin Sans"}
                    textTransform={"capitalize"}
                  >
                    WELCOME TO DANAOS
                  </Text>
                  <Text
                    w={"full"}
                    color={"#081839"}
                    fontSize={{
                      base: "30px",
                      sm: "30px",
                      md: "40px",
                      lg: "80px",
                      xl: "80px",
                    }}
                    zIndex={1}
                    fontWeight={900}
                    fontFamily={"Playfair Display"}
                    textTransform={"capitalize"}
                  >
                    Nauti Amigo
                  </Text>
                  <Text
                    w={"full"}
                    fontSize={{
                      base: "15px",
                      sm: "18px",
                      md: "25px",
                      lg: "30px",
                      xl: "30px",
                    }}
                    fontWeight={800}
                    color={"white"}
                    fontFamily={"Josefin Sans"}
                    textTransform={"capitalize"}
                  >
                    India's Most Luxurious Dinner Cruise In GOA.
                  </Text>
                  <Link to="/allpackages">
                    <Button
                      mt="3"
                      background={
                        "linear-gradient(90deg, #f39c12 0%, #F2CD5C 100%)"
                      }
                      _hover={{
                        background:
                          "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)",
                      }}
                      fontWeight={"700"}
                      fontSize={["8px", "15px"]}
                      color={"#081839"}
                      size={["xs", "xs", "md"]}
                    >
                      Book Now
                    </Button>
                  </Link>
                </Box>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeBanner;
