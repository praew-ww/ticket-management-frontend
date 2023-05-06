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

function TicketCard() {
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
                  head
                </Text>

                <Popover placement="bottom" closeOnBlur={false}>
                  <EditTicketCard />
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
            <Text>Infomation</Text>
            <Spacer />
            <Text>contact</Text>
            <Spacer />
            <Text as="sub">created at:</Text>
            <Spacer />
            <Text as="sub">update at:</Text>
            <Spacer />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default TicketCard;
