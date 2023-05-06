import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/input";
import { Spacer, Stack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Textarea } from "@chakra-ui/textarea";
import axios from "axios";
import React, { useState } from "react";
import { GiLouvrePyramid, GiPopcorn } from "react-icons/gi";

function CreateTicket() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [ticketList, setTicketList] = useState<TicketInfo[]>([]);
  const [ticket, setTicket] = useState<TicketInfo>({
    title: "",
    description: "",
    call_number: "",
    website: "",
    status: "",
  });

  const addTicket = () => {
    axios
      .post("http://localhost:3001/create", {
        title: ticket.title,
        description: ticket.description,
        call_number: ticket.call_number,
        email: ticket.website,
        status: "pending",
      })
      .then(() => {
        setTicketList([
          ...ticketList,
          {
            title: ticket.title,
            description: ticket.description,
            call_number: ticket.call_number,
            website: ticket.website,
            status: "pending",
          },
        ]);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <>
      <Button
        onClick={onOpen}
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
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <GiLouvrePyramid count={2} />
            Title
            <Input
              placeholder="title"
              onChange={(event) =>
                setTicket({ ...ticket, title: event.target.value })
              }
            />
            {ticket.title}
            Description
            <Textarea
              placeholder="Here is a sample placeholder"
              onChange={(event) =>
                setTicket({ ...ticket, description: event.target.value })
              }
            />
            Contact
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftAddon children="+234" />
                <Input
                  type="tel"
                  placeholder="phone number"
                  onChange={(event) =>
                    setTicket({ ...ticket, call_number: event.target.value })
                  }
                />
              </InputGroup>

              {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
              <InputGroup size="sm">
                <InputLeftAddon children="https://" />
                <Input
                  placeholder="mysite"
                  onChange={(event) =>
                    setTicket({ ...ticket, website: event.target.value })
                  }
                />
                <InputRightAddon children=".com" />
              </InputGroup>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addTicket}>
              Save
            </Button>
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateTicket;
