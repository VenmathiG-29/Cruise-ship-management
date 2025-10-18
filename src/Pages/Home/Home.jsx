import React from "react";
import { Box } from "@chakra-ui/react";

import Carousel from "../../Component/Home/Carousel";
import Gallery from "../../Component/Home/Gallery";
import TopTravel from "../../Component/Home/TopTravel";
import TopThings from "../../Component/Home/TopThings";
import BestAndTopTravel from "../../Component/Home/BestAndTopTravel";
import Birthday from "../../Component/Home/Birthday";
import HomeServices from "../../Component/Home/HomeServices";
import SailWithUs from "../../Component/Home/SailWithUs";
import Calender from "../../Component/Home/Calender";
import HomeBanner from "../../Component/Home/HomeBanner";
// import BannerForm from "../../Component/Home/BannerForm";

const Home = () => {
  return (
    <>
      {/* HomeBannerr */}
      <HomeBanner />

      {/* BannerDownForm */}
      {/* <BannerForm /> */}

      {/* calender */}
      <Calender />

      <Box w="90%" mx="auto" mt="2rem" mb="10px">
        {/* sailwuthus */}
        <SailWithUs />
        {/* home service and package map data */}
        <HomeServices />
      </Box>

      {/* birhtday  */}
      <Birthday />
      {/* best and top travel */}
      <BestAndTopTravel />
      {/* TopThings */}
      <TopThings />
      {/* top travel */}
      <TopTravel />
      {/* gallery */}
      <Gallery />
      {/* testimonial */}
      <Carousel />
    </>
  );
};

export default React.memo(Home);
