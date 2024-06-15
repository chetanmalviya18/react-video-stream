import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";

const Footer = () => {
  return (
    <Box bg={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"} px={"4"}>
          <Heading size={"md"} textTransform={"uppercase"}>
            contact us
          </Heading>
          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input
              placeholder="Enter email here..."
              border={"none"}
              borderRadius={"none"}
              outline={"none"}
              focusBorderColor="none"
            />
            <Button
              p={"0"}
              colorScheme="blue"
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={"20"} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading textAlign={"center"} textTransform={"uppercase"}>
            VIDEO stream
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>
        <VStack w={"full"}>
          <Heading textTransform={"uppercase"} size={"md"}>
            Social Media
          </Heading>
          <HStack mt={"6"} w={"full"} justifyContent={"space-evenly"}>
            <Button variant={"link"}>
              <a href="https://www.linkedin.com/in/chetan-malviya/">
                <LiaLinkedinIn size={"24"} />
              </a>
            </Button>
            <Button variant={"link"}>
              <a href="https://github.com/chetanmalviya18">
                <GrGithub size={"24"} />
              </a>
            </Button>
            <Button variant={"link"}>
              <a href="https://twitter.com/chetan_malviyaa">
                <BsTwitterX size={"24"} />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
