import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { ourProd } from "../../UTIL/localstorageauth/PagesData/Data";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const SailWithUs = () => {
  return (
    <>
      <Text
        lineHeight={"42px"}
        fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
        textAlign="center"
        fontWeight="700"
        mb="5"
        pb="2"
        borderBottom={"2px solid #1E1E1E"}
      >
        Our Services
      </Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {ourProd?.map((item) => (
          <Box height="auto" key={item.id}>
            <Link to="/allpackages">
              <Box
                w="90%"
                data-aos="fade-up"
                bg={`url(${item.img})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                mx="auto"
                backgroundSize="cover"
                height={{ base: "300px", md: "300px", lg: "300px" }}
                display="grid"
                placeItems={"center"}
                borderRadius={"10px"}
                boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
                _hover={{
                  cursor: "pointer",
                }}
              >
                <Text
                  w={["100%", "100%", "100%"]}
                  h="75px"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  backgroundColor={"rgba(8, 24, 57, 0.59)"}
                  color="#F9D33B"
                  fontSize="28px"
                  fontWeight="700"
                  data-aos="fade-right"
                >
                  {item.text}
                </Text>
              </Box>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default SailWithUs;
