import React from "react";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Flex, Text } from "@chakra-ui/react";

export const Rating = ({ stars }) => {
  let starpattern = Array.from({ length: 5 }, (el, ind) => {
    let half = ind + 0.5;
    return (
      <Flex key={ind} as="span">
        {stars >= ind + 1 ? (
          <FaStar style={{ color: "#277E1F" }} />
        ) : stars >= half ? (
          <FaStarHalfAlt style={{ color: "#277E1F" }} />
        ) : (
          <AiOutlineStar style={{ color: "#277E1F" }} />
        )}
      </Flex>
    );
  });

  return (
    <>
      <Text as="span" display={"flex"} alignItems="center">
        {starpattern}({stars})
      </Text>
    </>
  );
};
