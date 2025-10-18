import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../Redux/actiontypes/auth.types";
import { FaUserAlt } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";

const Header = () => {
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
    <Box w="100%" mb="2">
      <Box backgroundColor={"#D4E2FE"} py="1">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={[0, 2, 2, 4]}
        >
          <GridItem
            colSpan={{ base: 1, md: 1 }}
            textAlign={"center"}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            py="2"
          >
            <Link to={"/"}>
              <HStack>
                <Image
                  height={"100px"}
                  src="img/vishal/footerlogo.png"
                  alt="logo"
                />
              </HStack>
            </Link>
          </GridItem>
          <GridItem
            px="2"
            colSpan={{ base: 1, md: 1 }}
            display="flex"
            justifyContent={"center"}
            textAlign="center"
            alignItems="center"
            py="2"
            w="100%"
          >
            <InputGroup display={["none", "block", "block"]}>
              <InputLeftElement
                pointerEvents="none"
                children={<BiSearch />}
                py="25px"
                fontSize="25px"
              />
              <Input
                py="25px"
                type="text"
                letterSpacing={"5px"}
                placeholder="Search..."
                backgroundColor={"#FFFFFF"}
                mx="auto"
              />
            </InputGroup>
          </GridItem>
          <GridItem
            colSpan={{ base: 1, md: 1 }}
            display="flex"
            justifyContent={"center"}
            textAlign="center"
            alignItems="center"
          >
            <Box display={["none", "none", "block"]}>
              <Box
                gap={"10px"}
                display="flex"
                justifyContent={"center"}
                textAlign="center"
                alignItems="center"
                py="3"
              >
                {auth.role === "admin" ? (
                  <Button
                    backgroundColor={"#081839"}
                    size="lg"
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
                    size="lg"
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
                    size="lg"
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
                    Login
                  </Button>
                )}

                {auth.role === "admin" ? (
                  <Button
                    onClick={() => navigate("/admindetails")}
                    backgroundColor={"#081839"}
                    size="lg"
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
                    size="lg"
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
                    size="lg"
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
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* <HStack justifyContent={"flex-end"} w="90%" mx={"auto"}>
        {auth.role === "admin" ? (
          <Button onClick={() => navigate("/admindetails")}>Dashboard</Button>
        ) : auth.role ? (
          <Button onClick={() => navigate("/userprofile")}>Your Profile</Button>
        ) : null}
      </HStack> */}
    </Box>
  );
};
export default React.memo(Header);
