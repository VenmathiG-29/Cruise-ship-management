import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { worldwide } from "../../UTIL/localstorageauth/PagesData/Data";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const TopThings = () => {
  return (
    <Box w="90%" mx="auto" mt="2rem" mb="10px">
      <Text
        textAlign={"center"}
        fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
        lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
        color={"#00000"}
        fontWeight={"700"}
        borderBottom={"2px solid #1E1E1E"}
        mb="5"
      >
        Top Beaches In Goa
      </Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {worldwide?.map((item) => (
          <Box height="auto" key={item.id} data-aos="fade-up">
            <Box
              w="100%"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
              bg={`url(${item.img})`}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              height={{ base: "300px", md: "500px", lg: "500px" }}
              display="grid"
              placeItems={"center"}
              _hover={{
                WebkitTransform: "scale(0.9)",
                transition: "1s ease",
                transfrom: "scale(0.9)",
                msTransform: "scale(0.9)",
              }}
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
                color="#081839"
                data-aos="fade-right"
              >
                {item.text}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Box
        mt="10"
        w="100%"
        bg="url('./img/vishal/bus.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={{ base: "auto", md: "auto", lg: "500px" }}
        display="grid"
        placeItems={"center"}
        p="5"
      >
        <Box
          data-aos="fade-up"
          w="90%"
          mx="auto"
          bgColor={" rgba(217, 217, 217, 0.5)"}
          height={{ base: "auto", md: "auto", lg: "400px" }}
          display="grid"
          placeItems={"center"}
        >
          <SimpleGrid
            columns={[1, 1, 2]}
            spacing={[10]}
            w="90%"
            mx="auto"
            zIndex={"9999"}
          >
            <Box textAlign={"justify"} p="5">
              <Text
                fontWeight="700"
                fontSize={["15px", "20px", "32px"]}
                color="#081839"
              >
                Business Events & Charters
              </Text>
              <Text
                fontWeight="500"
                fontSize={["12px", "15px", "20px"]}
                color="#000000"
              >
                With our many years of experience in event planning, nautical
                expertise and loads of inspiration, we make corporate events on
                cruise ships and yachts.
              </Text>
            </Box>
            <Box>
              <Box
                bgColor={"#ffff"}
                w="70%"
                mx="auto"
                borderRadius={"20px"}
                p="5"
                my="4"
              >
                <Text
                  textAlign={"center"}
                  fontWeight="700"
                  fontSize={["12px", "15px", "22px"]}
                >
                  Corporate Package <br /> From 30PX
                </Text>
                <Text borderBottom={"2px solid #1E1E1E"} mt="5"></Text>
                <UnorderedList
                  fontWeight="600"
                  my="5"
                  fontSize={["10px", "13px", "18px"]}
                >
                  <ListItem>Weekday corporate charter.</ListItem>
                  <ListItem>Land And Sea Package.</ListItem>
                  <ListItem>Team Bonding Package.</ListItem>
                </UnorderedList>
                <Box w="100%" m="auto" textAlign={"center"}>
                  <Link to="/allpackages">
                    <Button
                      // px={{ base: "6", md: "6" }}
                      size="md"
                      fontWeight="700"
                      fontSize={{ base: "13px", md: "16px" }}
                      _hover={{
                        background:
                          "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)",
                      }}
                      background="linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)"
                      textTransform={"capitalize"}
                    >
                      view more &nbsp;
                      <HiOutlineArrowRight />
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default TopThings;
