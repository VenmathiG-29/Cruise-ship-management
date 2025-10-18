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
import { IoMdDownload } from "react-icons/io";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdPictureAsPdf } from "react-icons/md";

const AdminInvoice = () => {
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
          <Box w="90%" mx="auto" h="10vh" display={"grid"} placeItems="center">
            <Box mt="5">
              <InputGroup>
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
                  w={{ base: "200px", sm: "300px", md: "400px", lg: "450px" }}
                  backgroundColor={"#FFFFFF"}
                  border="2px solid #000000"
                />
              </InputGroup>
            </Box>
          </Box>

          <Box w="90%" mx="auto">
            <Box pt="5" pb="3" w="100%" mx="auto" mb="1">
              <HStack
                justifyContent={"space-between"}
                flexDirection={["column", "row", "row", "row"]}
              >
                <Box>
                  <Text
                    fontSize={{ sm: "18px", md: "24px", lg: "30px" }}
                    fontWeight="700"
                  >
                    Invoices
                  </Text>
                  <Text
                    fontWeight="600"
                    fontSize={{ sm: "8px", md: "10px", lg: "13px" }}
                  >
                    Download your previous bills reciepts and details.
                  </Text>
                </Box>
                <Button
                  leftIcon={<AiTwotoneDelete />}
                  background="#F1CC5C"
                  borderRadius="5px"
                  fontWeight="700"
                  fontSize={{ sm: "12px", md: "14px", lg: "14px" }}
                  lineHeight="15px"
                  size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
                  color="#081839"
                >
                  Delete
                </Button>
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
                    px="0"
                    textAlign="center"
                    textTransform={"capitalize"}
                    border="1px solid #081839"
                    borderLeft="none"
                    fontWeight={"700"}
                    color={"#000000"}
                    fontSize={["10px", "14px", "15px", "15px"]}
                  >
                    Invoice
                  </Th>
                  <Th
                    textAlign="center"
                    textTransform={""}
                    fontWeight={"700"}
                    color={"#000000"}
                    fontSize={["10px", "14px", "15px", "15px"]}
                    border="1px solid #081839"
                  >
                    Billing Date
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
                    borderRight="none"
                  >
                    <Button
                      leftIcon={<IoMdDownload />}
                      fontWeight="700"
                      background="#081839"
                      _hover={{ background: "#081839" }}
                      border-radius="5px"
                      color="#F2CD5C"
                      size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
                      px="20px"
                      py="10px"
                    >
                      Download all
                    </Button>
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
                    borderRight="1px solid #000000"
                  >
                    <HStack
                      flexDirection={["column", "row", "row", "row"]}
                      fontSize={["10px", "12px", "14px", "14px"]}
                    >
                      <Text>
                        <MdPictureAsPdf fontSize={"24px"} />
                      </Text>
                      <Text>INVOICE #12345 - MAR 2023</Text>
                    </HStack>
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    color="black"
                    borderRight="1px solid #000000"
                  >
                    MAR, 01, 2023
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    borderRight="1px solid #000000"
                    color="#277E1F"
                  >
                    Rs. 4999
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                    borderRight="1px solid #000000"
                    color="#0B4D8A"
                  >
                    #12345
                  </Td>
                  <Td
                    fontSize={["10px", "12px", "14px", "14px"]}
                    fontWeight={"500"}
                    textAlign="center"
                    border="none"
                  >
                    <Button
                      leftIcon={<IoMdDownload />}
                      fontWeight="700"
                      size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
                      border="2px solid #081839"
                      border-radius="5px"
                      color="#081839"
                      px="20px"
                      py="10px"
                      background="#fff"
                      _hover={{
                        background: "#081839",
                        color: "#fff",
                      }}
                    >
                      Download
                    </Button>
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

export default AdminInvoice;
