import { Box, Center, Container, Heading, Stack } from "@chakra-ui/layout";
import React from "react";

const Header: React.FC = () => {
  return (
    <Container minH={"300px"} pt={14} minW={"75%"}>
      <Stack py={5} ml={4}>
        <Center>
          <Heading fontSize={"6xl"}>Welcome to our website!</Heading>
        </Center>

        <Center>
          <Heading fontSize={"2xl"} color={"gray.200"} mt={"10"}>
            {" "}
            Our platform is designed to help you provide better customer support
            <br />
            by efficiently managing all your support tickets in one place.
          </Heading>
        </Center>
      </Stack>
    </Container>
  );
};

export default Header;
