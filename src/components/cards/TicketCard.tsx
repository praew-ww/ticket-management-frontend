import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  FocusLock,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiEdit } from "react-icons/bi";
import EditTicketCard from "./EditTicketCard";

interface Props {
  ticket: TicketInfo;
}

const TicketCard: React.FC<Props> = ({ ticket }) => {
  const initialFocusRef = React.useRef();

  return (
    <>
      <Box borderRadius={"4px"} minW={"99%"} border={"1px"} bg={"white"} mb={4}>
        <Flex>
          <Box minW={"10%"} bg={"#D5B4B4"} borderRight={"1px"} />
          <Box minW={"90%"} pl={2}>
            <Box>
              <Flex justify="space-between" alignItems="center">
                <Text as={"b"} fontSize={"lg"} color={"#4D4D4D"}>
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
            <Text>{ticket.description}</Text>
            <Spacer />
            <Text>{ticket.call_number}</Text>
            <Spacer />
            <Text>{ticket.email}</Text>
            <Spacer />
            <Text as="sub">{ticket.created_at}</Text>
            <Spacer />
            <Text as="sub">{ticket.updated_at}</Text>
            <Spacer />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default TicketCard;
