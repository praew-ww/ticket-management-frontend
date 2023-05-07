import { Box, Container, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TicketCard from "../cards/TicketCard";
import { apiEndpoint } from "../../config";

interface Props {
  name: string;
}

const BoardCard: React.FC<Props> = ({ name }) => {
  const [ticketData, setTicketData] = useState<TicketInfo[]>([]);

  useEffect(() => {
    fetch(apiEndpoint.tickets.tickets)
      .then((response) => response.json())
      .then((data) => setTicketData(data))
      .catch((error) => console.error(error));
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
        {ticketData.map((td) => {
          if (td.status === name.toLocaleLowerCase()) {
            return <TicketCard ticket={td} />;
          }
        })}
      </Container>
    </>
  );
};

export default BoardCard;
