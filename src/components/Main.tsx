import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Container, Flex, Spacer } from "@chakra-ui/layout";
import { Modal, ModalOverlay } from "@chakra-ui/modal";
import React from "react";
import { GiPopcorn } from "react-icons/gi";
import { RxUpdate } from "react-icons/rx";
import CreateTicket from "./main/CreateTicket";
import EditStatus from "./main/EditStatus";

function Main() {
  return (
    <Container mt={10}>
      <Flex>
        <CreateTicket />
        <EditStatus />
      </Flex>
    </Container>
  );
}

export default Main;
