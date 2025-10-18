import React from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const images = [
    "./img/vishal/gall4.png",
    "./img/vishal/gall2.png",
    "./img/vishal/gall3.png",
    "./img/vishal/gall1.png",
  ];

  const settings = {
    margin: 10,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box w="90%" mx="auto">
      <Text
        textAlign={"center"}
        fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
        lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
        color={"#00000"}
        fontWeight={"700"}
        borderBottom={"2px solid #1E1E1E"}
      >
        Gallery
      </Text>

      <Box my={{ base: "5", md: "5" }}>
        <Slider key={images.join(",")} {...settings}>
          {images.map((imageUrl, index) => (
            <Box key={index}>
              <Image
                w="100%"
                h={["150px", "200px", "400px"]}
                borderRadius="10%"
                src={imageUrl}
                alt={`Image ${index + 1}`}
                px="10px"
              />
            </Box>
          ))}
        </Slider>
      </Box>

      <Box
        w="100%"
        mx="auto"
        textAlign={"center"}
        my={{ base: "10", md: "10" }}
      >
        <Link to="gallery">
          <Button
            p="1rem"
            py="1.5rem"
            fontWeight="700"
            fontSize={{ base: "18px", md: "30px" }}
            background={"linear-gradient(90deg, #f39c12 0%, #F2CD5C 100%)"}
            _hover={{
              background: "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)",
            }}
            textTransform={"capitalize"}
          >
            view more &nbsp;
            <HiOutlineArrowRight />
          </Button>
        </Link>
      </Box>

      <Box borderBottom={"2px solid #1E1E1E"} my="2">
        <Text
          textAlign={"center"}
          fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
          lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "50px" }}
          color={"#00000"}
          fontWeight={"700"}
        >
          Top Reviews from Customers
        </Text>
      </Box>
    </Box>
  );
};

export default Gallery;
