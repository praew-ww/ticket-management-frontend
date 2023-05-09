import {
  Box,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface Props {
  ticketData: TicketInfo[];
  filterStatus: string[];
}
const Tables: React.FC<Props> = ({ ticketData, filterStatus }) => {
  const [newTicket, setNewTicket] = useState<TicketInfo[]>([]);

  useEffect(() => {
    setNewTicket([...ticketData]);
    filterByStatus(filterStatus);
  }, [ticketData, filterStatus]);

  const filterByStatus = (status: string[]) => {
    if (status.length > 0) {
      status = status.map((st) => {
        return st.toLocaleLowerCase();
      });
      const newFilter = ticketData.filter((td) => status.includes(td.status));
      setNewTicket(newFilter);
    } else {
      setNewTicket(ticketData);
    }
  };
  return (
    <Box overflowX="scroll" overflowY={"scroll"} maxH={"550px"}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>

              <Th>Ticket name</Th>
              <Th>Infomation</Th>
              <Th>lated Updated</Th>
              <Th isNumeric> Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {newTicket.map((td) => {
              const date = new Date(td.updated_at);
              const newDate = date.toLocaleString("en-US");

              return (
                <Tr key={td.id}>
                  <Td>{td.id}</Td>
                  <Td>{td.title}</Td>
                  <Td>{td.description}</Td>
                  <Td color="gray.600">{newDate}</Td>
                  <Td isNumeric>
                    <Tag
                      size={"lg"}
                      borderRadius={"2xl"}
                      color={"white"}
                      style={
                        td.status === "pending"
                          ? { backgroundColor: "#8294C4", color: "white" }
                          : td.status === "accepted"
                          ? { backgroundColor: "#0EA293", color: "white" }
                          : td.status === "rejected"
                          ? { backgroundColor: "#E74646", color: "white" }
                          : td.status === "resolved"
                          ? { backgroundColor: "#F7D060", color: "white" }
                          : {}
                      }
                    >
                      {td.status}
                    </Tag>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Tables;
