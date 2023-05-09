import { Box, Container, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TicketCard from "../cards/TicketCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchTicketList } from "../../slice/ticket";

interface Props {
  name: string;
}

const BoardCard: React.FC<Props> = ({ name }) => {
  const ticketList = useSelector((state: RootState) => state.ticket.ticketList);

  const toast = useToast();

  const dispatch = useDispatch<AppDispatch>();

  const getTickets = async () => {
    try {
      dispatch(fetchTicketList());
    } catch (error) {
      toast({
        title: "Cannot find a direction way",
        description: "Cannot find a ticket",
        status: "error",
        position: "top-right",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <>
      <Container
        minW={"23%"}
        border={"1px"}
        bg={"#FDF4F5"}
        mr={2}
        minH={"550px"}
      >
        <Box mb={2}>
          <Text as={"b"} fontSize={"lg"} color={"#867070"}>
            {name}
          </Text>
        </Box>
        {ticketList.map((td) => {
          if (td.status === name.toLocaleLowerCase()) {
            return <TicketCard ticket={td} />;
          }
        })}
      </Container>
    </>
  );
};

export default BoardCard;
