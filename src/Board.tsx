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

function Board() {
  return (
    <Container minW={"90%"} mt={12}>
      <Container minW={"90%"}>
        <Heading fontSize={"4xl"} color={"#FFDD83"} mt={"-10"}>
          Dash Board
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
                <FeatureSort />
              </Box>
              <FilterStatus />
            </Flex>
          </Accordion>
        </Center>

        <Divider mt={12} border={"2px"} />
        <Table />
      </Container>
    </Container>
  );
}

export default Board;
