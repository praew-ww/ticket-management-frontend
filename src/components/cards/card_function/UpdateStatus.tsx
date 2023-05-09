import { Box, Center, Container, Flex, Tag } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { apiEndpoint } from "../../../config";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { fetchTicketList } from "../../../slice/ticket";

interface Props {
  ticket: TicketInfo;
}

const UpdateStatus: React.FC<Props> = ({ ticket }) => {
  const ticketStatus: Status[] = [
    { id: 0, name: "Pending", check: false },
    { id: 1, name: "Accepted", check: false },
    { id: 2, name: "Resolved", check: false },
    { id: 3, name: "Rejected", check: false },
  ];

  const [newStatus, setNewStatus] = useState(ticket.status);
  const dispatch = useDispatch<AppDispatch>();

  const updateStatus = async (status: any) => {
    await axios.put(apiEndpoint.tickets.update, {
      status: status,
      id: ticket.id,
      email: ticket.email,
      call_number: ticket.call_number,
      description: ticket.description,
      title: ticket.title,
    });

    dispatch(fetchTicketList());
  };
  return (
    <Container minW="200px">
      <Center>
        {ticketStatus.map((ts) => (
          <Box mr={2} cursor={"pointer"}>
            {" "}
            <Tag
              color={"white"}
              bg={
                newStatus == ts.name.toLocaleLowerCase() ? "#BACDDB" : "#19376D"
              }
              onClick={() => {
                setNewStatus(ts.name.toLocaleLowerCase()),
                  updateStatus(ts.name.toLocaleLowerCase());
              }}
              borderRadius={"2xl"}
              size={"lg"}
            >
              {ts.name}
            </Tag>
          </Box>
        ))}
      </Center>
    </Container>
  );
};

export default UpdateStatus;
