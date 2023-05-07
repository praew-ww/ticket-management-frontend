import {
  Accordion,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Table from "./components/tables/Tables";
import FeatureSort from "./components/tables/FeatureSort";
import FilterStatus from "./components/tables/FilterStatus";
import { useEffect, useState } from "react";
import { apiEndpoint } from "./config";

function Board() {
  const [ticketData, setTicketData] = useState<TicketInfo[]>([]);
  const [sortBy, setSortBy] = useState("");
  useEffect(() => {
    fetch(apiEndpoint.tickets.tickets)
      .then((response) => response.json())
      .then((data) => setTicketData(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    sortFeature(sortBy);
  }, [sortBy]);

  const sortFeature = (sort: string) => {
    const newSortData = [...ticketData];

    if (sort === "Lated") {
      newSortData.sort((a, b) => {
        const dateA = new Date(a.updated_at).getTime();
        const dateB = new Date(b.updated_at).getTime();
        return dateB - dateA;
      });
      setTicketData(newSortData);
    } else {
      const newData = ticketData.filter(
        (ticket) => ticket.status === sort.toLowerCase()
      );
      const oldData = ticketData.filter(
        (ticket) => ticket.status !== sort.toLowerCase()
      );
      setTicketData([...newData, ...oldData]);
    }
  };

  return (
    <Container minW={"90%"} mt={12}>
      <Container minW={"90%"}>
        <Heading fontSize={"4xl"} color={"#FFDD83"} mt={"-10"}>
          Dashboard
        </Heading>
      </Container>
      <Container
        bg={"white"}
        mt={8}
        minW={"90%"}
        borderRadius={"2xl"}
        pt={8}
        dropShadow={"2xl"}
      >
        <Center>
          <Accordion minW={"80%"} allowMultiple>
            <Flex>
              {" "}
              <Box mr={"4"}>
                <FeatureSort sortVal={setSortBy} />
              </Box>
              <FilterStatus />
            </Flex>
          </Accordion>
        </Center>

        <Divider mt={12} border={"2px"} />
        <Table ticketData={ticketData} />
      </Container>
    </Container>
  );
}

export default Board;
