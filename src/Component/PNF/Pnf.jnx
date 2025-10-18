import { Box, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Pnf = () => {
  return (
    <Box
      h="100vh"
      position={"fixed"}
      top="0"
      bg="#DAF5FF"
      w="100%"
      zIndex={"99"}
      display="grid"
      placeItems={"center"}
    >
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2} fontWeight="600">
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6} fontWeight="600">
          The page you're looking for does not seem to exist
        </Text>

        <Link to="/">
          <Button
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Pnf;
