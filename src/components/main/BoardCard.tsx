import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import TicketCard from "../cards/TicketCard";

function BoardCard() {
  return (
    <>
      <Container
        minW={"23%"}
        border={"1px"}
        bg={"#FDF4F5"}
        mr={2}
        minH={"550px"}
      >
        <Box mb={2}>
          <Text as={"b"} fontSize={"lg"} color={"#867070"}>
            {" "}
            Append
          </Text>
        </Box>
        <TicketCard />
      </Container>
    </>
  );
}

export default BoardCard;
