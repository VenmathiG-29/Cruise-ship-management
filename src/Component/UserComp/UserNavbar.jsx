import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import {
  Box,
  HStack,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <Box>
      <Box
        w="90%"
        mx="auto"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottom="2px solid black"
        pb="2"
      >
        <Link to="/">
          <HStack display="flex" flexDirection="row">
            <Image
              height={"80px"}
              src="./img/vishal/footerlogo.png"
              alt="d"
            ></Image>

            <Text
              color="#081839"
              fontWeight="700"
              fontSize={{ sm: "14px", md: "20px", lg: "34px" }}
              lineHeight="41px"
            >
              DANAOS
            </Text>
          </HStack>
        </Link>

        <Menu paddingTop={"30px"}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<GiHamburgerMenu />}
            variant="outline"
            display={["block", "block", "block", "none"]}
            textAlign="center"
            p="3"
          />
          <MenuList>
            <Link to="/userprofile">
              <MenuItem>Dashboard</MenuItem>
            </Link>
            <Link to="/userbooking">
              <MenuItem>My Booking</MenuItem>
            </Link>
            <Link to="/userinvoice">
              <MenuItem>invoice</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>

      <Box
        mt="3"
        w="90%"
        mx="auto"
        height={"100px"}
        backgroundColor={"#081839"}
        display={["none", "none", "none", "block"]}
      >
        <Flex
          color={"white"}
          margin={"auto"}
          justifyContent={"space-around"}
          alignItems={"center"}
          paddingTop={"20px"}
          paddingLeft={"140px"}
          paddingRight={"140px"}
        >
          <Link to="/userprofile">
            <Text
              _hover={{
                textDecoration: "underline",
                textDecorationColor: "#F2CD5B",
                textUnderlineOffset: "8px",
                transform: "scale(1.2)",
                textDecorationThickness: "4px",
              }}
              cursor={"pointer"}
              fontWeight="700"
            >
              Dashboard
            </Text>
          </Link>
          <Link to="/userbooking">
            <Text
              _hover={{
                textDecoration: "underline",
                textDecorationColor: "#F2CD5B",
                textUnderlineOffset: "8px",
                transform: "scale(1.2)",
                textDecorationThickness: "4px",
              }}
              cursor={"pointer"}
              fontWeight="700"
            >
              My Booking
            </Text>
          </Link>
          <Link to="/userinvoice">
            <Text
              _hover={{
                textDecoration: "underline",
                textDecorationColor: "#F2CD5B",
                textUnderlineOffset: "8px",
                transform: "scale(1.2)",
                textDecorationThickness: "4px",
              }}
              cursor={"pointer"}
              fontWeight="700"
            >
              Invoice
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default UserNavbar;
