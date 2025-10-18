import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Button,
  Text,
  Select,
  Image,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/action/user.action";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    dateofbirth: "",
    mobilenumber: "",
    email: "",
    password: "",
  });
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUser = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = () => {
    if (
      form.firstName !== "" &&
      form.lastName !== "" &&
      form.gender !== "" &&
      form.address !== "" &&
      form.dateofbirth !== "" &&
      form.mobilenumber !== "" &&
      form.email !== "" &&
      form.password !== ""
    ) {
      dispatch(registerUser(form));

      toast({
        description: "SignUp successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-center",
      });

      setTimeout(() => {
        navigate("/loginpage");
      }, 2000);
    } else {
      toast({
        description: "Please enter your all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-center",
      });
    }
  };

  return (
    <>
      <Box
        bg="url('https://images.unsplash.com/photo-1580166463495-ab4d21922c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNydWlzZSUyMHNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60')"
        backgroundSize={"cover"}
        w="100%"
        // h="100vh"
        overflow={"hidden"}
        mb="5"
      >
        <Box>
          <HStack display="flex" flexDirection={"row"} justifyContent="center">
            <Image
              height={"80px"}
              src="./img/vishal/footerlogo.png"
              alt="d"
            ></Image>

            <Text
              color="#ffff"
              fontWeight="700"
              fontSize={{ sm: "14px", md: "20px", lg: "34px" }}
              lineHeight="41px"
            >
              DANAOS
            </Text>
          </HStack>
          <Box
            w={["90%", "70%", "500px", "50%", "50%"]}
            rounded="10px"
            py="3"
            bgColor="rgba(255, 255, 255, 0.5)"
            mt="10px"
            mx={"auto"}
            my="5"
          >
            <Text
              fontSize={["15px", "20px", "25px", "30px"]}
              fontWeight="700"
              color="#081839"
              textAlign="center"
              mb="10px"
            >
              Welcome to DANAOS
            </Text>

            <Box textAlign="center">
              <Text
                fontSize={["12px", "15px", "18px", "22px"]}
                fontWeight="400"
                color="#081839"
                borderBottom="1px"
                borderColor="#081839"
                // mx="150px"
                pb="10px"
                mb="7px"
              >
                SignUp to your account
              </Text>
            </Box>

            <Box w="90%" mx="auto">
              <SimpleGrid columns={[1, 1, 2, 2]} spacing={3}>
                <Box>
                  <FormControl>
                    <FormLabel fontSize={"20px"}>First Name</FormLabel>
                    <Input
                      type="text"
                      height={"58px"}
                      w="100%"
                      onChange={handleUser}
                      name="firstName"
                      value={form.firstName || ""}
                      backgroundColor={"#F2CD5C"}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel fontSize={"20px"}>Last Name</FormLabel>
                    <Input
                      type="text"
                      height={"58px"}
                      w="100%"
                      backgroundColor={"#F2CD5C"}
                      onChange={handleUser}
                      name="lastName"
                      value={form.lastName || ""}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel fontSize={"20px"}>Gender</FormLabel>
                    <Select
                      w="100%"
                      height={"58px"}
                      backgroundColor={"#F2CD5C"}
                      name="gender"
                      onChange={handleUser}
                    >
                      <option value="">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel fontSize={"20px"}>Address</FormLabel>
                    <Input
                      type="text"
                      w="100%"
                      height={"58px"}
                      backgroundColor={"#F2CD5C"}
                      onChange={handleUser}
                      name="address"
                      value={form.address || ""}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel fontSize={"20px"}>Date Of Birth</FormLabel>
                    <Input
                      type="date"
                      width={"100%"}
                      height={"58px"}
                      backgroundColor={"#F2CD5C"}
                      onChange={handleUser}
                      name="dateofbirth"
                      value={form.dateofbirth || ""}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel fontSize={"20px"}>Mobile No.</FormLabel>
                    <Input
                      type="number"
                      width={"100%"}
                      height={"58px"}
                      backgroundColor={"#F2CD5C"}
                      onChange={handleUser}
                      name="mobilenumber"
                      value={form.mobilenumber || ""}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel fontSize={"20px"}>Email address</FormLabel>
                    <Input
                      type="email"
                      w="100%"
                      height={"58px"}
                      backgroundColor={"#F2CD5C"}
                      name="email"
                      value={form.email || ""}
                      onChange={handleUser}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel fontSize={"20px"}>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        height={"58px"}
                        w="100%"
                        backgroundColor={"#F2CD5C"}
                        onChange={handleUser}
                        name="password"
                        m={"auto"}
                        value={form.password || ""}
                      />
                      <InputRightElement h={"full"}>
                        <Text
                          cursor={"pointer"}
                          fontSize={"20px"}
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? (
                            <AiFillEye />
                          ) : (
                            <AiFillEyeInvisible />
                          )}
                        </Text>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                </Box>
              </SimpleGrid>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="30px"
              gap="10px"
            >
              <Box
                rounded="10px"
                border="1px"
                borderColor="#F2CD5C"
                w="186px"
                h="55px"
                p="6px"
                mt="10px"
              >
                <Button
                  bgColor="#081839"
                  rounded="10px"
                  w="100%"
                  h="100%"
                  color="#F2CD5C"
                  fontSize="22px"
                  fontWeight="700"
                  _hover={{ bgColor: "#061536" }}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Sign-Up
                </Button>
              </Box>
              <Box fontSize={"15px"}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Text as="span" color={"#081839"} fontWeight="700">
                    <Link color={"blue"} to="/loginpage">
                      Login
                    </Link>
                  </Text>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
    </>
  );
};

export default SignUp;
