import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
        <Heading
          textTransform={"uppercase"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid"}
          m={"auto"}
        >
          Services
        </Heading>

        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={img5} h={["40", "400"]} filter={"hue-rotate(170deg)"} />
          <Text
            letterSpacing={"widest"}
            lineHeigth={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            maiores earum blanditiis, culpa dolore rerum eaque ipsum vitae
            eligendi, alias odit. Illum explicabo dolore doloribus nulla totam?
            Eos, eaque quo. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Suscipit dolor at, ipsa temporibus corporis architecto modi
            nostrum mollitia odit cupiditate molestias iusto iste tenetur qui
            voluptas consequuntur non, harum itaque. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Natus enim necessitatibus dignissimos
            aliquam numquam quidem totam reiciendis impedit, placeat earum! Sunt
            dicta suscipit tenetur nisi veniam temporibus hic, tempore
            similique?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={"full"} h={"100vh"}>
        <Image src={img1} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Watch the future
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Image src={img2} />
        <Heading bgColor={"whiteAlpha.700"} color={"black"} {...headingOptions}>
          Future is gaming
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Image src={img3} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
          Gaming console is cool
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Image src={img4} />
        <Heading bgColor={"whiteAlpha.500"} color={"black"} {...headingOptions}>
          Night life is cool
        </Heading>
      </Box>
    </Carousel>
  );
};
export default Home;
