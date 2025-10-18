import {
  Box,
  Container,
  Flex,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  SimpleGrid,
  useBreakpointValue,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserApi } from "../../Redux/action/user.action";

const Checkout = () => {
  const auth = JSON.parse(localStorage.getItem("auth")) ?? { role: null };
  const user = useSelector((state) => state.user?.user);
  const details = useSelector((state) => state.cart.package[0]);
  const dispatch = useDispatch();
  const backgroundColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secodaryTextColor = useColorModeValue("gray.600", "gray.400");
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  const [isChecked, setIsChecked] = useState(false);

  let totalPrice = details?.prod[0]?.price - details?.prod[0]?.offerPrice;
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    dispatch(GetUserApi(auth._id));
  }, []);
  return (
    <Box>
      <Container padding="0" maxWidth="container.xl">
        <Flex
          // paddingY={["0", "10", "20"]}
          direction={{ base: "column", md: "row" }}
          height={{ base: "auto", md: "80vh" }}
          // bg='red'
        >
          <VStack
            width="full"
            height="full"
            padding="5"
            spacing="5"
            alignItems="flex-start"
          >
            <VStack spacing="3" alignItems="flex-start">
              <Heading size="2xl">Your details</Heading>
            </VStack>
            <SimpleGrid columns={2} columnGap="3" rowGap="6" width="full">
              <GridItem colSpan={colSpan}>
                <FormControl>
                  <FormLabel>First Name:</FormLabel>
                  <Text backgroundColor={"gray.200"} p={2} textAlign="left">
                    {user.firstName}
                  </Text>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan}>
                <FormControl>
                  <FormLabel>Last Name:</FormLabel>
                  <Text backgroundColor={"gray.200"} p={2} textAlign="left">
                    {user.lastName}
                  </Text>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Email:</FormLabel>
                  <Text backgroundColor={"gray.200"} p={2} textAlign="left">
                    {user.email}
                  </Text>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Address:</FormLabel>
                  <Text backgroundColor={"gray.200"} p={2} textAlign="left">
                    {user.address}
                  </Text>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Mobile No:</FormLabel>
                  <Text backgroundColor={"gray.200"} p={2} textAlign="left">
                    {user.mobilenumber}
                  </Text>
                </FormControl>
              </GridItem>
            </SimpleGrid>
          </VStack>

          <VStack
            width="full"
            height="full"
            padding="5"
            spacing="5"
            textTransform={"capitalize"}
            alignItems="flex-start"
            backgroundColor={backgroundColor}
          >
            <VStack spacing="3" alignItems="flex-start">
              <Heading size="2xl">Your cart</Heading>
            </VStack>
            <HStack
              justifyContent={{ base: "center", md: "space-between" }}
              width="full"
            >
              <HStack spacing="3">
                <Image src={"./img/vishal/footerlogo.png"} width={"80px"} />
                <VStack spacing="0" alignItems="flex-start">
                  <Heading size="md">Danaos Tourism</Heading>
                  <Text color={secodaryTextColor} fontSize="lg">
                    PNYCOMP27541
                  </Text>
                </VStack>
              </HStack>
            </HStack>
            <VStack width="100%" mx="auto" alignItems="flex-start">
              <Heading
                color="#2F0F5D"
                fontWeight={600}
                fontSize={{ base: "1xl", sm: "3xl", lg: "4xl" }}
              >
                {details?.details.packageName}
              </Heading>
              <Text
                mt="1"
                color="blue.600"
                fontSize={{ base: "1xl", sm: "1xl", lg: "1xl" }}
                fontWeight={"500"}
              >
                {details?.details.heading1}
              </Text>
            </VStack>
            <VStack spacing="4" width="full">
              <HStack justifyContent="space-between" width="full">
                <Text color="blue.400" as="b">
                  Table for Person
                </Text>
                <Text as="b">{details?.prod[0].personSize}</Text>
              </HStack>
              <HStack justifyContent="space-between" width="full">
                <Text as="b" color="blue.400">
                  Subtotal
                </Text>
                <Text as="b">Rs.{totalPrice}</Text>
              </HStack>

              {/* <HStack justifyContent="space-between" width="full">
                <Text>Taxes (estimated)</Text>
                <Text as="b">$23.80</Text>
              </HStack> */}
            </VStack>
            <Divider />
            <HStack justifyContent="space-between" width="full">
              <Text color="blue.400" as="b">
                Total
              </Text>
              <Heading size="lg">Rs.{totalPrice}</Heading>
            </HStack>
          </VStack>
        </Flex>
        <Box width="90%" mx="auto">
          <VStack>
            <Checkbox
              defaultChecked={isChecked}
              onChange={handleCheckboxChange}
              color="blue.600"
              fontSize={"19px"}
            >
              Term's and Conditions
            </Checkbox>

            <Button
              size="lg"
              variant="primary"
              bg="#081839"
              color="white"
              px="6rem"
              isDisabled={!isChecked}
              _hover={{ bg: "#081839" }}
            >
              Pay Now
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Checkout;
