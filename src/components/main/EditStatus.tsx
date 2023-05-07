import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import Axios from "axios";
import { useEffect, useState } from "react";

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
import { apiEndpoint } from "../../config";

export default function EditStatus() {
  const ticketStatus: Status[] = [
    { id: 0, name: "Pending", check: false },
    { id: 1, name: "Accepted", check: false },
    { id: 2, name: "Resolved", check: false },
    { id: 3, name: "Rejected", check: false },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getTickets = () => {
    // Axios.get(apiEndpoint.tickets.tickets).then((response) => {
    //   setTicketData(response.data);
    // });
  };

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
              {ticketStatus.map((ts) => (
                <BoardCard name={ts.name} />
              ))}
            </Flex>
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
