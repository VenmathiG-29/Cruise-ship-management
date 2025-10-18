import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  HStack,
  Heading,
  Image,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAPICALL } from "../../Config/Functions/getFun";
import { Rating } from "../../Rating/Rating";

const AllPackage = () => {
  const [packages, setPackages] = useState([]);

  const getPackages = async () => {
    let res = await GetAPICALL("managepackage");
    setPackages(res);
  };

  useEffect(() => {
    getPackages();
  }, []);

  return (
    <Box w="95%" mx="auto">
      <SimpleGrid columns={[1, 1, 2, 3]} spacing="5">
        {packages?.map((item) => (
          <Card
            key={item._id}
            textTransform={"capitalize"}
            boxShadow=" rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
          >
            <CardBody>
              <Image
                src="./img/vishal/p4.png"
                alt="vishal/p4.png"
                borderRadius="lg"
                w="100%"
                _hover={{
                  WebkitTransform: "scale(0.9)",
                  transition: "1s ease",
                }}
              />
              <VStack mt="6" spacing="3">
                <Heading size="md">{item.packageName}</Heading>
                <Text>{item.heading1}</Text>
                <HStack w="100%" justifyContent={"space-between"}>
                  <VStack gap="0">
                    <Heading
                      fontSize={["12px", "15px", "15px", "15px"]}
                      fontWeight="600"
                      lineHeight={"15px"}
                      color="blue.600"
                    >
                      Selling Date
                    </Heading>
                    <Text
                      fontSize={["12px", "15px", "15px", "15px"]}
                      fontWeight="400"
                      lineHeight={"15px"}
                      color="#000000"
                    >
                      {item.sailingDate}
                    </Text>
                  </VStack>
                  <VStack gap="0">
                    <Heading
                      fontSize={["12px", "15px", "15px", "15px"]}
                      fontWeight="600"
                      lineHeight={"15px"}
                      color="blue.600"
                    >
                      Tables
                    </Heading>
                    <Text
                      fontSize={["12px", "15px", "15px", "15px"]}
                      fontWeight="400"
                      lineHeight={"15px"}
                      color="#000000"
                    >
                      For {item.tables[0]?.personSize} Persons
                    </Text>
                  </VStack>
                  <VStack gap="0">
                    <Heading
                      fontSize={["12px", "15px", "15px", "15px"]}
                      fontWeight="600"
                      lineHeight={"15px"}
                      color="blue.600"
                    >
                      Availability
                    </Heading>
                    <Text
                      fontSize={["12px", "15px", "15px", "15px"]}
                      fontWeight="400"
                      lineHeight={"15px"}
                      color="#000000"
                    >
                      {item.availability}
                    </Text>
                  </VStack>
                </HStack>
                <HStack
                  w="100%"
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  fontSize={["9px", "9px", "9px", "14px"]}
                  fontWeight="700"
                  lineHeight={"5px"}
                  p={"10px"}
                >
                  <HStack>
                    <Rating stars={item.rating} />
                  </HStack>
                  <HStack>
                    <Text
                      color={"#081839"}
                      fontSize={["10px", "10px", "10px", "16px"]}
                    >
                      From
                    </Text>
                    <Text
                      color={"#277E1F"}
                      fontSize={["10px", "10px", "10px", "16px"]}
                    >
                      Rs.{item.tables[0]?.price}
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
            </CardBody>
            <Divider />
            <CardFooter display={"flex"} justifyContent="center">
              <Link to={`/singlepackage/${item._id}`}>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  _hover={{ bgGradient: "linear(to-l, #7928CA, #FF0080)" }}
                >
                  Book Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AllPackage;
