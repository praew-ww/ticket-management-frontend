import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Spacer } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useState } from "react";
import { GiPopcorn } from "react-icons/gi";
import EditTicket from "../cards/card_function/EditTicket";

function CreateTicket() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [ticket, setTicket] = useState<TicketInfo>({
    title: "",
    description: "",
    call_number: "",
    website: "",
    status: "",
  });

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        leftIcon={<GiPopcorn />}
        size={"lg"}
        color={"#F0EB8D"}
        minH={"20"}
        fontSize={"xl"}
        bg={"#D21312"}
      >
        Create New Ticket
      </Button>
      <Spacer />
      <Modal
        closeOnOverlayClick={false}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <EditTicket
              ticket={ticket}
              type="create"
              onClose={() => setIsModalOpen(false)}
            />
          </ModalBody>

          <ModalFooter>
            {/* <Button onClick={() => console.log(onClose, "oc")}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateTicket;
