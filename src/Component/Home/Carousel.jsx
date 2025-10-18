import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { testimonials } from "../../UTIL/localstorageauth/PagesData/Data";
import SwiperCore, { Autoplay, Pagination ,Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = () => {
  return (
    <Box my="5" mx="5">
      <Swiper
        slidesPerView={2}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        autoplay={{ delay: 3000 }}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        {testimonials?.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Box
              maxH={["520px", "520px", "450px", "420px", "420px"]}
              h={["400px", "400px", "400px", "420px", "420px"]}
              p={["10px", "20px", "30px", "30px", "30px"]}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                p={["10px", "20px"]}
                borderRadius={["10px", "20px"]}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <Image
                  w={["60px", "80px", "100px"]}
                  h={["60px", "80px", "100px"]}
                  borderRadius={"50%"}
                  objectFit="cover"
                  mb={"10px"}
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <Text fontSize={["14px", "16px"]} noOfLines="2">
                  {testimonial.text}
                </Text>
                <Text
                  marginTop="10px"
                  marginBottom="5px"
                  fontSize={["20px", "24px"]}
                  fontWeight="600"
                  fontStyle="italic"
                >
                  {testimonial.name}
                </Text>
                {/* <Text
                  color="#3e54ac"
                  fontSize={["14px", "16px"]}
                  fontWeight="500"
                >
                  {testimonial.name}
                </Text> */}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
