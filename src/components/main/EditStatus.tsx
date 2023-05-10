import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import { RxUpdate } from "react-icons/rx";
import BoardCard from "./BoardCard";
import { GrStatusCriticalSmall } from "react-icons/gr";

const TicketStatus: Status[] = [
  { id: 0, name: "Pending", check: false },
  { id: 1, name: "Accepted", check: false },
  { id: 2, name: "Resolved", check: false },
  { id: 3, name: "Rejected", check: false },
];

export default function EditStatus() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Container fontSize={"sm"} minW={"90%"} mb={6}>
              <Box display={"inline"}>
                Here, you have the ability to edit a ticket's information by
                clicking the "Edit Ticket" button on board. Additionally, you
                can easily update a ticket's status by clicking icon top right
                on ticket
              </Box>{" "}
            </Container>

            <Flex>
              {TicketStatus.map((ts) => (
                <BoardCard name={ts.name} />
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
