import {
  Accordion,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Table from "../components/tables/Tables";
import FeatureSort from "../components/tables/FeatureSort";
import FilterStatus from "../components/tables/FilterStatus";
import React, { useEffect, useState } from "react";
import { apiEndpoint } from "../config";

const Board: React.FC = () => {
  const [ticketData, setTicketData] = useState<TicketInfo[]>([]);
  const [sortBy, setSortBy] = useState("");
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
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

    if (sort === "Latest") {
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
          <Accordion minW={"80%"} allowMultiple defaultIndex={[0, 1]}>
            <Flex>
              {" "}
              <Box mr={"4"}>
                <FeatureSort sortVal={setSortBy} />
              </Box>
              <FilterStatus filterStatus={setFilterStatus} />
            </Flex>
          </Accordion>
        </Center>

        <Divider mt={12} border={"2px"} />
        <Table ticketData={ticketData} filterStatus={filterStatus} />
      </Container>
    </Container>
  );
};

export default Board;
