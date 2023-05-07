import {
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
    <>
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
            {newTicket.map((td) => (
              <Tr>
                <Td>{td.id}</Td>
                <Td>{td.title}</Td>
                <Td> {td.description}</Td>
                <Td color="gray.600">{td.updated_at}</Td>

                <Td isNumeric>
                  <Tag borderRadius={"2xl"} color={"white"} bg={"green"}>
                    {td.status}
                  </Tag>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tables;
