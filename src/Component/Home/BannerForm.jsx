import React from "react";
import { Box, Text, Grid, Button, Input } from "@chakra-ui/react";

const BannerForm = () => {
  return (
    <Box mt="-1.5rem" mb="3rem" w="80%" mx="auto" bg="red">
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(6, 1fr)",
        ]}
        width="100%"
        mx="auto"
        // width={{ sm: "full", md: "full", lg: "80" }}
        background={"#F2CD5B"}
        boxShadow={"4px 4px 4px rgba(0, 0, 0, 0.25)"}
        py={["1", "1", "1", "5"]}
      >
        <Box
          padding={"15px"}
          borderRight={{ sm: "none", md: "none", lg: "1px solid black" }}
        >
          <Text
            margin={"10px 0px"}
            color={"#081839"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            Where to?
          </Text>
          <Input
            border={"2px solid #081839"}
            width={"100%"}
            placeholder="All destination"
          ></Input>
        </Box>

        <Box
          padding={"15px"}
          borderRight={{ sm: "none", md: "none", lg: "1px solid black" }}
        >
          <Text
            margin={"10px 0px"}
            color={"#081839"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            All Cruise Line
          </Text>
          <Input
            border={"2px solid #081839"}
            width={"100%"}
            placeholder="Holland America Line"
          ></Input>
        </Box>

        <Box padding={"15px"}>
          <Text
            margin={"10px 0px"}
            color={"#081839"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            Check-In
          </Text>
          <Input
            border={"2px solid #081839"}
            width={"100%"}
            placeholder="12 / 03 / 2023"
          ></Input>
        </Box>
        <Box
          padding={"15px"}
          borderRight={{ sm: "none", md: "none", lg: "1px solid black" }}
        >
          <Text
            margin={"10px 0px"}
            color={"#081839"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            Check-Out
          </Text>
          <Input
            border={"2px solid #081839"}
            width={"100%"}
            placeholder="12 / 03 / 2023"
          ></Input>
        </Box>

        <Box
          padding={"15px"}
          borderRight={{ sm: "none", md: "none", lg: "1px solid black" }}
        >
          <Text
            margin={"10px 0px"}
            color={"#081839"}
            fontWeight={"700"}
            fontSize={"18px"}
          >
            Persons & Room
          </Text>
          <Input
            border={"2px solid #081839"}
            width={"100%"}
            placeholder="2 Adults - 1 Children 1 Room"
          ></Input>
        </Box>
        <Box padding={"15px"}>
          <Text
            margin={"10px 0px"}
            color={"#081839"}
            fontWeight={"700"}
            fontSize={"18px"}
            visibility="hidden"
          >
            kjnk
          </Text>
          <Button
            background={"#081839"}
            color={"#FFFFFF"}
            fontSize={"16px"}
            size="md"
          >
            Search
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default BannerForm;
