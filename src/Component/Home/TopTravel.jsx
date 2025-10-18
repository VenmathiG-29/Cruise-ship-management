import React from "react";
import { Box, Text, Image, SimpleGrid } from "@chakra-ui/react";
const TopTravel = () => {
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
        Top Travel Articles
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={10} mt="5rem">
        <Box position={"relative"} _hover={{WebkitTransform:"scale(1.1)",transition: "1s ease",transfrom:"scale(1.5)" , msTransform:"scale(1.5)", borderRadius:"20px"}}>
          <Image src="./img/vishal/Mandovi3.png" alt="3" h="300px" w="100%" _hover={{
              borderRadius:"10px",
            }} />
          <Box
            position={"absolute"}
            top="-2rem"
            left="2rem"
            bg="#081839"
            w={["55px", "55px", "55px", "55px"]}
            borderRadius={"10px"}
            py="2"
            fontWeight={"600"}
            color={"#fff"}
            textAlign="center"
          >
            7th Mar
          </Box>
          <Text
            textAlign={"center"}
            fontWeight="500"
            w="70%"
            fontSize={{ sm: "18px", md: "16px", lg: "18px", xl: "20px" }}
            mx="auto"
            my="1"
          >
            Virtual Tourist – Goa Edition – Nauti Amigo
          </Text>
        </Box>
        <Box position={"relative"} _hover={{WebkitTransform:"scale(1.1)",transition: "1s ease",transfrom:"scale(1.5)" , msTransform:"scale(1.5)", borderRadius:"20px"}}>
          <Image src="./img/vishal/Mandovi1.png" alt="3" w="100%" h="300px"  _hover={{
              borderRadius:"10px",
            }} />
          <Box
            position={"absolute"}
            top="-2rem"
            left="2rem"
            bg="#081839"
            w={["55px", "55px", "55px", "55px"]}
            borderRadius={"10px"}
            py="2"
            fontWeight={"600"}
            color={"#fff"}
            textAlign="center"
          >
            7th Mar
          </Box>
          <Text
            textAlign={"center"}
            fontWeight="500"
            w="70%"
            fontSize={{ sm: "18px", md: "16px", lg: "18px", xl: "20px" }}
            mx="auto"
            my="1"
          >
            Mandovi River Cruise in Goa
          </Text>
        </Box>
        <Box position={"relative"} _hover={{WebkitTransform:"scale(1.1)",transition: "1s ease",transfrom:"scale(1.5)" , msTransform:"scale(1.5)", borderRadius:"20px"}}>
          <Box
            position={"absolute"}
            top="-2rem"
            left="2rem"
            bg="#081839"
            w={["55px", "55px", "55px", "55px"]}
            borderRadius={"10px"}
            py="2"
            fontWeight={"600"}
            color={"#fff"}
            textAlign="center"
          >
            7th Mar
          </Box>
          <Image src="./img/vishal/Mandovi2.png" alt="3" w="100%" h="300px"  _hover={{
              borderRadius:"10px",
            }} />
          <Text
            textAlign={"center"}
            fontWeight="500"
            w="70%"
            fontSize={{ sm: "18px", md: "16px", lg: "18px", xl: "20px" }}
            mx="auto"
            my="1"
            textTransform={"capitalize"}
          >
            Origin of Mandovi River and the Dams Aftermath
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TopTravel;