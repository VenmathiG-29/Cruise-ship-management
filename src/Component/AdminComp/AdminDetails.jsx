import {
  Box,
  Button,
  HStack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiTwotoneDelete, AiFillPlusSquare } from "react-icons/ai";

const AdminDetails = () => {
  return (
    <>
      <Box w="90%" mx="auto" bg="#081839">
        <Box
          w="100%"
          mx="auto"
          mb="3"
          bg="#fff"
          border={"2px solid #081839"}
          borderTopLeftRadius={["0px", "0px", "0px", "150px"]}
          borderTopRightRadius={["0px", "0px", "0px", "150px"]}
        >
          <Box w="90%" mx="auto">
            <Box pt="5" pb="3" w="100%" mx="auto" mb="1">
              <HStack
                w="90%"
                mx="auto"
                justifyContent={"space-around"}
                flexDirection={["column", "column", "row", "row"]}
                // spacing="4rem"
              >
                <Box>
                  <InputGroup mb="5px">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BiSearch />}
                      py={["10px", "10px", "10px", "25px"]}
                      fontSize="25px"
                    />
                    <Input
                      fontSize={["10px", "10px", "15px", "17px", "18px"]}
                      py={["10px", "10px", "10px", "25px"]}
                      type="text"
                      letterSpacing={"5px"}
                      placeholder="Search with ID..."
                      w={{
                        base: "200px",
                        sm: "300px",
                        md: "400px",
                        lg: "450px",
                      }}
                      backgroundColor={"#FFFFFF"}
                      border="2px solid #000000"
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <HStack
                    spacing={"8"}
                    w="100%"
                    mx="auto"
                    justifyContent={[
                      "center",
                      "flex-start",
                      "flex-end",
                      "flex-end",
                    ]}
                  >
                    <Button
                      leftIcon={<AiFillPlusSquare />}
                      background="#F1CC5C"
                      borderRadius="5px"
                      fontWeight="700"
                      size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
                      fontSize={{
                        base: "10px",
                        sm: "12px",
                        md: "14px",
                        lg: "14px",
                      }}
                      lineHeight="15px"
                      color="#081839"
                    >
                      Add New
                    </Button>
                    <Button
                      leftIcon={<AiTwotoneDelete />}
                      background="#F1CC5C"
                      borderRadius="5px"
                      fontWeight="700"
                      size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
                      fontSize={{
                        base: "10px",
                        sm: "12px",
                        md: "14px",
                        lg: "14px",
                      }}
                      lineHeight="15px"
                      color="#081839"
                    >
                      Delete
                    </Button>
                  </HStack>
                </Box>
              </HStack>
            </Box>
          </Box>

          <Box
            w="100%"
            mx="auto"
            overflow={["scroll", "scroll", "scroll", "hidden"]}
            h="90vh"
          >
            <Table overflow={"scroll"}>
              <Thead>
                <Tr>
                  <Th
                    textAlign="center"
                    textTransform={"capitalize"}
                    border="1px solid #081839"
                    borderLeft="none"
                    fontWeight={"700"}
                    color={"#000000"}
                    fontSize={["10px", "14px", "15px", "15px"]}
                  >
                    customer names
                  </Th>
                  <Th
                    textAlign="center"
                    textTransform={""}
                    fontWeight={"700"}
                    color={"#000000"}
                    fontSize={["10px", "14px", "15px", "15px"]}
                    border="1px solid #081839"
                  >
                    Sent Date
                  </Th>
                  <Th
                    textAlign="center"
                    textTransform={""}
                    fontWeight={"700"}
                    color={"#000000"}
                    fontSize={["10px", "14px", "15px", "15px"]}
                    border="1px solid #081839"
                  >
                    Amount
                  </Th>
                  <Th
                    textAlign="center"
                    textTransform={""}
                    fontWeight={"700"}
                    color={"#000000"}
                    fontSize={["10px", "14px", "15px", "15px"]}
                    border="1px solid #081839"
                  >
                    ID
                  </Th>
                  <Th
                    textAlign="center"
                    textTransform={""}
                    fontWeight={"700"}
                    color={"#000000"}
                    fontSize={["10px", "14px", "15px", "15px"]}
                    border="1px solid #081839"
                  >
                    Date
                  </Th>
                  <Th
                    textAlign="center"
                    textTransform={""}
                    fontWeight={"700"}
                    color={"#000000"}
                    fontSize={["10px", "14px", "15px", "15px"]}
                    border="1px solid #081839"
                  >
                    Price
                  </Th>
                  <Th
                    textAlign="center"
                    textTransform={""}
                    fontWeight={"700"}
                    color={"#000000"}
                    fontSize={["10px", "14px", "15px", "15px"]}
                    border="1px solid #081839"
                    borderRight="none"
                  >
                    Status
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                    borderRight="1px solid #000000"
                  >
                    Customer Name
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                    borderRight="1px solid #000000"
                  >
                    Sent Date
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                    borderRight="1px solid #000000"
                  >
                    Amount
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                    borderRight="1px solid #000000"
                  >
                    ID
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                    borderRight="1px solid #000000"
                  >
                    Date
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                    borderRight="1px solid #000000"
                  >
                    Price
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                  >
                    Status
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                    borderRight="1px solid #000000"
                  >
                    Customer Name
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                    borderRight="1px solid #000000"
                  >
                    Sent Date
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                    borderRight="1px solid #000000"
                  >
                    Amount
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                    borderRight="1px solid #000000"
                  >
                    ID
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                    borderRight="1px solid #000000"
                  >
                    Date
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                    borderRight="1px solid #000000"
                  >
                    Price
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    py="2"
                  >
                    Status
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <Box textAlign="right" pr="100px" pt="20px" pb="50px">
            <Button
              fontWeight="700"
              background="#081839"
              border-radius="5px"
              color="#F2CD5C"
              px="40px"
              py="15px"
              fontSize="20px"
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminDetails;
