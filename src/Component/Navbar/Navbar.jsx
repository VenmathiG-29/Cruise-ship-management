import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "./Header";
// import { BsFillBagPlusFill } from "react-icons/bs";
// import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../Redux/actiontypes/auth.types";
import { FaUserAlt } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = JSON.parse(localStorage.getItem("auth")) ?? { role: null };
  const { isAuth } = useSelector((state) => state.auth);

  const handleSignup = () => {
    navigate("/signpage");
  };

  const handleLogin = () => {
    navigate("/loginpage");
  };

  return (
    <>
      <Header />

      <Box>
        <Flex w="90%" mx="auto" align={"center"} zIndex={9}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              fontSize={"23px"}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <MdClose w={3} h={3} />
                ) : (
                  <GiHamburgerMenu w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            {/* <Link to={"/"}>
              <Text
                display={["block", "block", "none"]}
                color="#081839"
                fontWeight="700"
                fontSize={{ sm: "17px", md: "25px", lg: "34px" }}
                lineHeight="41px"
              >
                DANAOS
              </Text>
            </Link> */}

            <Flex
              display={{ base: "none", md: "flex" }}
              alignItems={"center"}
              justifyContent="center"
              bg="#081839"
              color="#F2CD5C"
              fontWeight="600"
              fontSize={"22px"}
              py="30px"
              px="30px"
              w="fit-content"
              borderRadius={"20px"}
              mx="auto"
              h="25px"
              mt="-1.5rem"
              zIndex={9}
            >
              <DesktopNav />
            </Flex>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={4}
              alignItems={"center"}
              fontSize="20px"
              mr="10px"
            >
              {auth.role === "admin" ? (
                <Button
                  backgroundColor={"#081839"}
                  display={["block", "block", "none"]}
                  size={{ base: "sm", sm: "md" }}
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={["15px", "16px", "22px", "22px"]}
                  px={["5", "8", "8", "10"]}
                  onClick={() => {
                    dispatch({ type: LOGOUT });
                    navigate("/");
                  }}
                >
                  {isAuth && <RiLogoutCircleFill />}
                </Button>
              ) : auth.role ? (
                <Button
                  backgroundColor={"#081839"}
                  display={["block", "block", "none"]}
                  size={{ base: "sm", sm: "md" }}
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={["15px", "16px", "22px", "22px"]}
                  px={["5", "8", "8", "10"]}
                  onClick={() => {
                    dispatch({ type: LOGOUT });
                    navigate("/");
                  }}
                >
                  {isAuth && <RiLogoutCircleFill />}
                </Button>
              ) : (
                <Button
                  backgroundColor={"#081839"}
                  display={["block", "block", "none"]}
                  size={{ base: "sm", sm: "md" }}
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={["15px", "16px", "22px", "22px"]}
                  px={["5", "8", "8", "10"]}
                  onClick={handleLogin}
                >
                  Log-In
                  {/* <AiOutlineUser /> */}
                </Button>
              )}

              {auth.role === "admin" ? (
                <Button
                  onClick={() => navigate("/admindetails")}
                  backgroundColor={"#081839"}
                  display={["block", "block", "none"]}
                  size={{ base: "sm", sm: "md" }}
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={["15px", "16px", "22px", "22px"]}
                  px={["5", "8", "8", "10"]}
                >
                  Dashboard
                </Button>
              ) : auth.role ? (
                <Button
                  onClick={() => navigate("/userprofile")}
                  backgroundColor={"#081839"}
                  display={["block", "block", "none"]}
                  size={{ base: "sm", sm: "md" }}
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={["15px", "16px", "22px", "22px"]}
                  px={["5", "8", "8", "10"]}
                >
                  <FaUserAlt />
                </Button>
              ) : (
                <Button
                  onClick={handleSignup}
                  backgroundColor={"#081839"}
                  display={["block", "block", "none"]}
                  size={{ base: "sm", sm: "md" }}
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={["15px", "16px", "22px", "22px"]}
                  px={["5", "8", "8", "10"]}
                >
                  Sign-Up
                </Button>
              )}
            </Stack>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
        <br />
      </Box>
    </>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <Box>
        <HStack spacing={"25px"} alignItems="center">
          <Link to={"/"}>
            <Text
              _hover={{
                transform: "scale(1.2)",
                borderBottom: "1px solid #F2CD5C",
              }}
            >
              Home
            </Text>
          </Link>
          <Link to={"/package"}>
            <Text
              _hover={{
                transform: "scale(1.2)",
                borderBottom: "1px solid #F2CD5C",
              }}
            >
              Packages
            </Text>
          </Link>
          <Link to={"/sailing"}>
            <Text
              _hover={{
                transform: "scale(1.2)",
                borderBottom: "1px solid #F2CD5C",
              }}
            >
              Sailing
            </Text>
          </Link>
          <Link to={"/gallery"}>
            <Text
              _hover={{
                transform: "scale(1.2)",
                borderBottom: "1px solid #F2CD5C",
              }}
            >
              Gallery
            </Text>
          </Link>

          <Link to={"/offer"}>
            <Text
              _hover={{
                transform: "scale(1.2)",
                borderBottom: "1px solid #F2CD5C",
              }}
            >
              Offers
            </Text>
          </Link>
        </HStack>
      </Box>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <Box>
        <VStack fontWeight={"600"}>
          <Link to={"/"}>Home</Link>
          <Link to={"/package"}>Packages</Link>
          <Link to={"/sailing"}>Sailing</Link>
          <Link to={"/gallery"}>Gallery</Link>
          <Link to={"/offer"}>Offer</Link>
        </VStack>
      </Box>
    </Stack>
  );
};
