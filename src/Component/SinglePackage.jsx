import {
  Box,
  Stack,
  Text,
  Image,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  HStack,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { GetAPICALL } from "../../Config/Functions/getFun";
import { Rating } from "../../Rating/Rating";

const SinglePackage = () => {
  const [details, setDetails] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const packcart = useSelector((state) => state.cart.package);
  // console.log(packcart);

  const getPackageData = async () => {
    GetAPICALL(`managepackage/${params.package_id}`)
      .then((res) => {
        // console.log(res.data.length);
        setDetails(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [isChecked, setIsChecked] = useState(false);
  const [product, setProduct] = useState([]);
  const [checkedMap, setCheckedMap] = useState({});
  const handleCheckboxChange = (event, obj) => {
    const checkboxId = event.target.id;
    const isChecked = event.target.checked;

    setCheckedMap((prevCheckedMap) => {
      if (isChecked) {
        setIsChecked(isChecked);
        return { ...prevCheckedMap, [checkboxId]: obj };
      } else {
        setIsChecked(isChecked);
        const { [checkboxId]: removed, ...rest } = prevCheckedMap;
        return rest;
      }
    });

    const checkedObjects = Object.values({
      ...checkedMap,
      [checkboxId]: isChecked ? obj : undefined,
    }).filter(Boolean);

    setProduct(checkedObjects);
  };

  const handleChecout = () => {
    // console.log(details, "details");
    // console.log(product, "prod");

    const newData = [{ details: { ...details }, prod: { ...product } }];
    dispatch({ type: "UPDATE_TO_CART", payload: { ...newData } });

    navigate("/checkout");
  };

  useEffect(() => {
    getPackageData();
  }, []);

  return (
    <Box width="90%" margin="auto">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          h="100%"
          p="5"
        >
          <Image
            rounded={"md"}
            alt={"product image"}
            src={"https://curise.vercel.app/img/serv2.png"}
            align={"center"}
            w={"90%"}
            mx="auto"
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Box>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              color="#2F0F5D"
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {details.packageName}
            </Heading>
            <Text
              mt="1"
              color="blue.600"
              fontSize={{ base: "1xl", sm: "2xl", lg: "2xl" }}
              fontWeight={"500"}
            >
              {details.heading1}
            </Text>
          </Box>

          <Stack spacing={{ base: 4, sm: 6 }} direction={"column"}>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"capitalize"}
                mb={"2"}
              >
                Package Details
              </Text>

              <Box w="90%" mx="auto">
                <HStack justifyContent={"space-between"}>
                  <Text
                    as={"span"}
                    fontWeight={"bold"}
                    textTransform="capitalize"
                  >
                    Sailing Date:
                  </Text>
                  <Text fontWeight={"600"}>{details.sailingDate}</Text>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Text
                    as={"span"}
                    fontWeight={"bold"}
                    textTransform="capitalize"
                  >
                    Rating:
                  </Text>
                  <Text fontWeight={"600"}>
                    <Rating stars={details.rating} />{" "}
                  </Text>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Text
                    as={"span"}
                    fontWeight={"bold"}
                    textTransform="capitalize"
                  >
                    availability:
                  </Text>
                  <Text fontWeight={"600"}>{details.availability}</Text>
                </HStack>
              </Box>
            </Box>
            <Box mt={[2, 2, 2, 7, 7]}>
              <VStack w="100%" mx="auto" justifyContent={"space-between"}>
                <HStack
                  w="100%"
                  mx="auto"
                  justifyContent={"space-between"}
                  textTransform={"uppercase"}
                  fontWeight="600"
                  fontSize={["10px", "12px", "12px", "14px", "16px"]}
                  textAlign="center"
                  bg="#081839"
                  color="#F1CC5C"
                  py="2"
                >
                  <Text w="10%"></Text>
                  <Text w="25%">Tables</Text>
                  <Text w="20%">Price</Text>
                  <Text w="25%">OfferPrice</Text>
                  <Text w="20%">Changes</Text>
                </HStack>

                {details.tables &&
                  details?.tables.map((item) => (
                    <HStack
                      w="95%"
                      mx="auto"
                      justifyContent={"space-between"}
                      textTransform={"capitalize"}
                      fontWeight="600"
                      fontSize={["9px", "12px", "12px", "14px", "16px"]}
                      key={item._id}
                      textAlign="center"
                    >
                      <Text w="10%">
                        <Checkbox
                          type="checkbox"
                          id={item._id}
                          checked={!!checkedMap[item._id]}
                          onChange={(event) =>
                            handleCheckboxChange(event, item)
                          }
                        />
                      </Text>
                      <Text w="25%">For {item.personSize} Persons</Text>
                      <Text w="20%">Rs {item.price}</Text>
                      <Text w="25%">Rs {item.offerPrice}</Text>
                      <Text w="20%">Rs {item.price - item.offerPrice}</Text>
                    </HStack>
                  ))}
              </VStack>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            size={"lg"}
            py={["5", "6", "7"]}
            bg={"#081839"}
            color={useColorModeValue("#F1CC5C", "#F1CC5C")}
            textTransform={"uppercase"}
            _hover={{
              bg:"#081839",
            color:"useColorModeValue('#F1CC5C', '#F1CC5C')",
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={handleChecout}
            isDisabled={!isChecked}
          >
            Checkout
          </Button>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
export default SinglePackage;
