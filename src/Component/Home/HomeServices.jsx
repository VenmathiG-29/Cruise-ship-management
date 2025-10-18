import React, { useEffect, useState } from "react";
import { Box, Text, Image, HStack, VStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Rating } from "../../Rating/Rating";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { GetAPICALL } from "../../Config/Functions/getFun";
AOS.init();

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HomeServices = () => {
  const [services, setservices] = useState([]);

  const getPackages = async () => {
    let res = await GetAPICALL("managepackage");
    setservices(res);
  };

  useEffect(() => {
    getPackages();
  }, []);
  return (
    <>
      <HStack
        gap={6}
        alignItems={"center"}
        flexDirection={["column", "column", "column", "row"]}
        mt="2rem"
      >
        <Box
          position={"relative"}
          height={["500px", "500px", "500px", "600px"]}
          width={["100%", "100%", "100%", "50%"]}
          overflow={"hidden"}
          pt={"50px"}
        >
          <Slider {...settings}>
            {services?.map((item, ind) => (
              <Box key={ind} width={"full"} px={["0px", "0px", "0px", "100px"]}>
                <Link to={`/singlepackage/${item._id}`}>
                  <VStack alignItems="left">
                    <Image
                      height={{
                        base: "300px",
                        sm: "200px",
                        md: "300px",
                        lg: "300px",
                      }}
                      src={"./img/vishal/p4.png"}
                      alt={item.alt}
                      borderTopLeftRadius="10px"
                      borderTopRightRadius="10px"
                    />
                    {/* <Text
                  w="35%"
                  h="40px"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  backgroundColor={
                    item.rating === "Cruise Only"
                      ? "#081839"
                      : item.rating === "Best Seler"
                      ? "#F2CD5B"
                      : item.rating === "Top Rated"
                      ? "#277E1F"
                      : ""
                  }
                  color={
                    item.text === "Cruise Only"
                      ? "#F2CD5B"
                      : item.text === "Best Seler"
                      ? "#081839"
                      : item.text === "Top Rated"
                      ? "#F2CD5B"
                      : ""
                  }
                  position={"absolute"}
                  top="10%"
                  left={"0"}
                  fontSize="12px"
                  fontWeight="700"
                  lineHeight={"15px"}
                  borderRightRadius={"20px"}
                >
                  {item.text}
                </Text> */}
                  </VStack>
                  <VStack
                    height={{ base: "auto", md: "190px", lg: "190px" }}
                    justifyContent={"space-between"}
                    alignItems="center"
                    textTransform={"capitalize"}
                    p="2"
                    border="1px solid teal"
                    borderBottomLeftRadius={"10px"}
                    borderBottomRightRadius={"10px"}
                  >
                    <Text
                      w="100%"
                      fontSize="22px"
                      fontWeight="600"
                      lineHeight={"28px"}
                      color="#000000"
                      textTransform={"capitalize"}
                    >
                      {item.packageName}
                    </Text>
                    <Text
                      w="100%"
                      textAlign="justify"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight={"19px"}
                      color="grey"
                    >
                      {item.heading1}
                    </Text>
                    <HStack mt="10px" justifyContent={"space-between"} w="100%">
                      <VStack gap="0">
                        <Heading
                          fontSize="12px"
                          fontWeight="800"
                          lineHeight={"15px"}
                          color="#000000"
                        >
                          Selling Date
                        </Heading>
                        <Text
                          fontSize="12px"
                          fontWeight="500"
                          lineHeight={"15px"}
                          color="#000000"
                        >
                          {item.sailingDate}
                        </Text>
                      </VStack>
                      <VStack gap="0">
                        <Heading
                          fontSize="12px"
                          fontWeight="800"
                          lineHeight={"15px"}
                          color="#000000"
                        >
                          Tables
                        </Heading>
                        <Text
                          fontSize="12px"
                          fontWeight="500"
                          lineHeight={"15px"}
                          color="#000000"
                        >
                          For {item.tables[0]?.personSize} Persons
                        </Text>
                      </VStack>
                      <VStack gap="0">
                        <Heading
                          fontSize="12px"
                          fontWeight="800"
                          lineHeight={"15px"}
                          color="#000000"
                        >
                          Availability
                        </Heading>
                        <Text
                          fontSize="12px"
                          fontWeight="500"
                          lineHeight={"15px"}
                          color="#000000"
                        >
                          {item.availability}
                        </Text>
                      </VStack>
                    </HStack>
                    <HStack
                      w="100%"
                      justifyContent={"space-between"}
                      fontSize="14px"
                      fontWeight="800"
                      lineHeight={"17px"}
                      mt="5"
                    >
                      <HStack>
                        <Rating stars={item.rating} />
                      </HStack>
                      <HStack>
                        <Text color={"#000"}>From</Text>
                        <Text color={"#277E1F"}>
                          Rs.{item.tables[0]?.price}
                        </Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </Link>
              </Box>
            ))}
          </Slider>
        </Box>

        <Box
          backgroundImage="url('./img/vishal/content-image.avif')"
          width={["100%", "100%", "100%", "50%"]}
          p={5}
          borderRadius={"10px"}
          position="relative"
        >
          <Image
            className={"cimage1"}
            src="./img/vishal/circular-image.png"
            display={["none", "block", "block", "block"]}
            mt={"-100px"}
          ></Image>
          <Text
            my="5"
            pb="2"
            color="white"
            fontWeight="700"
            fontSize="32px"
            lineHeight="39px"
            borderBottom={"2px solid white"}
            // data-aos="fade-up"
          >
            Services
          </Text>

          <Box background={"white"} borderRadius={"10px"} p={"10px"} mt={5}>
            <Text
              fontWeight="500"
              // mt={"-300px"}
              textAlign={"justify"}
              fontSize={{ base: "10px", md: "18px", lg: "20px" }}
              noOfLines={12}
              color={"black"}
            >
              Danaos Tourism Private Limited is a leader in the Asian Super
              yacht industry, offering unique and memorable experiences to
              hoteliers, event managers, convention planners, and private
              clients. Our mission is to provide exceptional, safe, and iconic
              dinner cruises in Indian waters while delivering excellent
              customer service and value for money. We also specialize in
              offering a wide range of services to hoteliers, event managers,
              convention planners, and private clients. From hosting corporate
              meetings and entertainment events to organizing private charters
              and alongside events, we offer a range of options to suit the
              needs of our clients. Our ultimate goal is to create memorable,
              inspirational, and celebration-worthy experiences for our
              customers. We take pride in our commitment to delivering
              high-quality services that exceed our customers' expectations and
              leave them with unforgettable memories.
            </Text>
          </Box>
        </Box>
      </HStack>
    </>
  );
};

export default HomeServices;
