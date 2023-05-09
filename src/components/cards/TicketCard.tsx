import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverTrigger,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiEdit, BiPhoneCall } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

import EditTicketCard from "./EditTicketCard";
import UpdateStatus from "./card_function/UpdateStatus";

interface Props {
  ticket: TicketInfo;
}

const TicketCard: React.FC<Props> = ({ ticket }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const date = new Date(ticket.updated_at);
  const newDate = date.toLocaleString("en-US");

  return (
    <>
      <Box
        borderRadius={"lg"}
        minW={"99%"}
        boxShadow={"lg"}
        bg={"white"}
        mb={4}
      >
        <Flex>
          <Box
            minW={"10%"}
            style={
              ticket.status === "pending"
                ? { backgroundColor: "#8294C4", color: "white" }
                : ticket.status === "accepted"
                ? { backgroundColor: "#0EA293", color: "white" }
                : ticket.status === "rejected"
                ? { backgroundColor: "#E74646", color: "white" }
                : ticket.status === "resolved"
                ? { backgroundColor: "#F7D060", color: "white" }
                : {}
            }
            borderRight={"1px"}
          />
          <Box minW={"90%"} pl={2}>
            <Box>
              <Flex justify="space-between" alignItems="center">
                <Text as={"b"} fontSize={"sm"} color={"#4D4D4D"}>
                  {ticket.title}
                </Text>

                <Popover placement="bottom" closeOnBlur={false}>
                  <EditTicketCard ticket={ticket} />
                  <PopoverTrigger>
                    <IconButton
                      aria-label="Call Segun"
                      size="sm"
                      icon={<BiEdit />}
                      mr={2}
                      bg={"white"}
                    />
                  </PopoverTrigger>
                </Popover>
              </Flex>
            </Box>
            <Spacer />
            <Text fontSize={"xs"}>{ticket.description}</Text>
            <Spacer />
            <Divider />
            <Flex color={"gray"}>
              <Box pb={2}>
                <BiPhoneCall />
              </Box>
              <Text pt={1} as="sub">
                {ticket.call_number}
              </Text>
            </Flex>
            <Spacer />

            <Flex color={"gray"}>
              <Box pb={2}>
                <TbWorld />
              </Box>
              <Text pt={1} as="sub">
                {ticket.email}
              </Text>
            </Flex>

            <Spacer />
            {/* <Text as="sub">{ticket.created_at}</Text>
            <Spacer /> */}
            <Flex color={"gray"}>
              <Box pb={2}>
                <MdUpdate />
              </Box>
              <Text pt={1} as="sub">
                {newDate}
              </Text>
            </Flex>

            <Spacer />
          </Box>
        </Flex>
        <Button minW={"100%"} onClick={onOpen}>
          Update status
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update status</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <UpdateStatus ticket={ticket} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Done
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default TicketCard;
