import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import Axios from "axios";
import { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
import { Box, Flex } from "@chakra-ui/react";
import { RxUpdate } from "react-icons/rx";
import BoardCard from "./BoardCard";

export default function EditStatus() {
  const [ticket, setTicket] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getTickets = () => {
    Axios.get("http://localhost:3001/ticket").then((response) => {
      setTicket(response.data);
    });
  };

  console.log(ticket, "tk");

  return (
    <>
      {" "}
      <Button
        leftIcon={<RxUpdate />}
        size={"lg"}
        colorScheme="green"
        minH={"20"}
        fontSize={"xl"}
        onClick={onOpen}
      >
        Update Ticket
      </Button>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior={"inside"}
        size={"6xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <BoardCard />
              <BoardCard />
              <BoardCard />

              <BoardCard />
            </Flex>{" "}
            <Button onClick={getTickets}>click</Button>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
