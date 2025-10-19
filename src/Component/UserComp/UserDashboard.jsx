import React, { useEffect } from "react";
import { Box, Text, Image, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import EditProfileModal from "./ProfileModal/EditProfileModal";
import { GetUserApi } from "../../Redux/action/user.action";
import { useDispatch, useSelector } from "react-redux";

const UserDashboard = () => {
  const auth = JSON.parse(localStorage.getItem("auth")) ?? { role: null };
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUserApi(auth._id));
  }, []);

  return (
    <>
      <Box w="90%" mx="auto" bg="#081839">
        <Box
          w="100%"
          mx="auto"
          mb="3"
          border={"2px solid #081839"}
          bg="#fff"
          borderTopLeftRadius={["0px", "0px", "0px", "150px"]}
          borderTopRightRadius={["0px", "0px", "0px", "150px"]}
        >
          <Box pt="5" pb="3" w="80%" mx="auto" borderBottom="2px solid black">
            <HStack justifyContent={"space-between"}>
              <Text
                fontSize={["15px", "18px", "22px", "28px", "28px"]}
                fontWeight="700"
              >
                My Profile
              </Text>

              <EditProfileModal {...user} />
            </HStack>
          </Box>

          <Box w="80%" mx="auto">
            <SimpleGrid columns={[1, 1, 2, 2, 2]} spacing={[2, 2, 10]} py="10">
              <Box height={["150px", "200px", "200px", "370px"]}>
                <Image
                  objectFit={"contain"}
                  src="./img/vishal/profile.png"
                  width={"100%"}
                  height={"100%"}
                ></Image>
              </Box>
              <Box>
                <VStack
                  justifyContent={"space-between"}
                  w="100%"
                  alignItems={"flex-start"}
                  h="100%"
                >
                  <Box w="100%">
                    <Text
                      fontSize={["15px", "18px", "22px", "28px", "28px"]}
                      color={"#00000"}
                      fontWeight={"400"}
                    >
                      First Name
                    </Text>
                    <Text
                      py="2"
                      px="2"
                      fontSize={["15px", "19px", "20px", "24px", "24px"]}
                      fontWeight={"600"}
                      backgroundColor={"#D2E1FF"}
                      textTransform="capitalize"
                    >
                      {user.firstName}
                    </Text>
                  </Box>
                  <Box w="100%">
                    <Text
                      fontSize={["15px", "18px", "22px", "28px", "28px"]}
                      color={"#00000"}
                      fontWeight={"400"}
                    >
                      Last Name
                    </Text>
                    <Text
                      py="2"
                      px="2"
                      fontSize={["15px", "19px", "20px", "24px", "24px"]}
                      fontWeight={"600"}
                      backgroundColor={"#D2E1FF"}
                      textTransform="capitalize"
                    >
                      {user.lastName}
                    </Text>
                  </Box>
                  <Box w="100%">
                    <Text
                      fontSize={["15px", "18px", "22px", "28px", "28px"]}
                      color={"#00000"}
                      fontWeight={"400"}
                    >
                      Email
                    </Text>
                    <Text
                      py="2"
                      px="2"
                      fontSize={["15px", "19px", "20px", "24px", "24px"]}
                      fontWeight={"600"}
                      backgroundColor={"#D2E1FF"}
                    >
                      {user.email}
                    </Text>
                  </Box>
                </VStack>
              </Box>
              <Box>
                <Box w="100%">
                  <Text
                    fontSize={["15px", "18px", "22px", "28px", "28px"]}
                    color={"#00000"}
                    fontWeight={"400"}
                  >
                    Mobile No
                  </Text>
                  <Text
                    py="2"
                    px="2"
                    fontSize={["15px", "19px", "20px", "24px", "24px"]}
                    fontWeight={"600"}
                    backgroundColor={"#D2E1FF"}
                  >
                    {user.mobilenumber}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Box w="100%">
                  <Text
                    fontSize={["15px", "18px", "22px", "28px", "28px"]}
                    color={"#00000"}
                    fontWeight={"400"}
                  >
                    Gender
                  </Text>
                  <Text
                    py="2"
                    px="2"
                    fontSize={["15px", "19px", "20px", "24px", "24px"]}
                    fontWeight={"600"}
                    backgroundColor={"#D2E1FF"}
                  >
                    {user.gender}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Box w="100%">
                  <Text
                    fontSize={["15px", "18px", "22px", "28px", "28px"]}
                    color={"#00000"}
                    fontWeight={"400"}
                  >
                    Address
                  </Text>
                  <Text
                    py="2"
                    px="2"
                    fontSize={["15px", "19px", "20px", "24px", "24px"]}
                    fontWeight={"600"}
                    backgroundColor={"#D2E1FF"}
                  >
                    {user.address}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Box w="100%">
                  <Text
                    fontSize={["15px", "18px", "22px", "28px", "28px"]}
                    color={"#00000"}
                    fontWeight={"400"}
                  >
                    Date of Birth
                  </Text>
                  <Text
                    py="2"
                    px="2"
                    fontSize={["15px", "19px", "20px", "24px", "24px"]}
                    fontWeight={"600"}
                    backgroundColor={"#D2E1FF"}
                  >
                    {user.dateofbirth}
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserDashboard;
