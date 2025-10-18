import { Box, Image, Text, Grid } from "@chakra-ui/react";
import React from "react";

const Gallery = () => {
  return (
    <Box w="90%" mx={"auto"}>
      <Box>
        <Text
          fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
          lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
          color={"#00000"}
          fontWeight={"700"}
          borderBottom={"2px solid #1E1E1E"}
        >
          Cruise Photos
        </Text>

        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/gall4.png" alt="pa1" w={"100%"} h="auto" />
          <Image src="./img/vishal/gall2.png" alt="pa2" w="100%" h="auto" />
        </Grid>

        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/gall3.png" alt="pa31" w="100%" h="auto" />
          <Image src="./img/vishal/gall1.png" alt="pa4" w="100%" h="auto" />
        </Grid>
      </Box>

      <Box my="5">
        <Text
          fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
          lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
          color={"#00000"}
          fontWeight={"700"}
          borderBottom={"2px solid #1E1E1E"}
        >
          Parties Photos
        </Text>
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/p1.png" alt="pa1" w="100%" h="auto" />
          <Image src="./img/vishal/p2.png" alt="pa2" w="100%" h="auto" />
        </Grid>

        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/p3.png" alt="pa31" w="100%" h="auto" />
          <Image src="./img/vishal/p4.png" alt="pa4" w="100%" h="auto" />
        </Grid>

        <Grid
          templateColumns={[
            "repeat(3, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/p5.png" alt="pa31" w="100%" h="auto" />
          <Image src="./img/vishal/p6.png" alt="pa4" w="100%" h="auto" />
          <Image src="./img/vishal/p7.png" alt="pa4" w="100%" h="auto" />
        </Grid>
      </Box>

      <Box my="5">
        <Text
          fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
          lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
          color={"#00000"}
          fontWeight={"700"}
          borderBottom={"2px solid #1E1E1E"}
        >
          Birthday Party Photos
        </Text>
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/Gal8.png" alt="pa1" w="100%" h="auto" />
          <Image src="./img/vishal/Gal9.png" alt="pa2" w="100%" h="auto" />
        </Grid>

        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/Gal11.png" alt="pa31" w="100%" h="auto" />
          <Image src="./img/vishal/Gal12.png" alt="pa4" w="100%" h="auto" />
        </Grid>

        <Grid
          templateColumns={[
            "repeat(3, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/Gal13.png" alt="pa31" w="100%" h="auto" />
          <Image src="./img/vishal/Gal14.png" alt="pa4" w="100%" h="auto" />
          <Image src="./img/vishal/Gal15.png" alt="pa4" w="100%" h="auto" />
        </Grid>
      </Box>

      <Box my="5">
        <Text
          fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
          lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
          color={"#00000"}
          fontWeight={"700"}
          borderBottom={"2px solid #1E1E1E"}
        >
          Wedding Photos
        </Text>
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/m1.png" alt="pa1" w="100%" h="auto" />
          <Image src="./img/vishal/m2.png" alt="pa2" w="100%" h="auto" />
        </Grid>

        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/m3.png" alt="pa31" w="100%" h="auto" />
          <Image src="./img/vishal/m4.png" alt="pa4" w="100%" h="auto" />
        </Grid>

        <Grid
          templateColumns={[
            "repeat(3, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/m5.png" alt="pa31" w="100%" h="auto" />
          <Image src="./img/vishal/m6.png" alt="pa4" w="100%" h="auto" />
          <Image src="./img/vishal/m7.png" alt="pa4" w="100%" h="auto" />
        </Grid>
      </Box>
    </Box>
  );
};

export default Gallery;
