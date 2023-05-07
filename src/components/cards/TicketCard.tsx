import {
  Box,
  Divider,
  Flex,
  IconButton,
  Popover,
  PopoverTrigger,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiEdit, BiPhoneCall } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

import EditTicketCard from "./EditTicketCard";

interface Props {
  ticket: TicketInfo;
}

const TicketCard: React.FC<Props> = ({ ticket }) => {
  const initialFocusRef = React.useRef();

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
          <Box minW={"10%"} bg={"#D5B4B4"} borderRight={"1px"} />
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
                      colorScheme="gray"
                      aria-label="Call Segun"
                      size="sm"
                      icon={<BiEdit />}
                      mr={2}
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
                {ticket.updated_at}
              </Text>
            </Flex>

            <Spacer />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default TicketCard;
