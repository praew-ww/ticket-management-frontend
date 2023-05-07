import {
  Table,
  TableCaption,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  ticketData: TicketInfo[];
}
const Tables: React.FC<Props> = ({ ticketData }) => {
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
            {ticketData.map((td) => (
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
