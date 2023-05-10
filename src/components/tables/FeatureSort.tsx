import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Select,
  Spacer,
  Tag,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  sortVal: (sortValue: string) => void;
}

const FeatureSort: React.FC<Props> = ({ sortVal }) => {
  const ticketStatus: Status[] = [
    { id: 0, name: "Pending", check: true },
    { id: 1, name: "Accepted", check: true },
    { id: 2, name: "Resolved", check: true },
    { id: 3, name: "Rejected", check: true },
  ];

  const [sort, setSort] = useState("");
  const sortBy = (sort: string) => {
    sortVal(sort);
  };
  return (
    <>
      <AccordionItem border={"1px"} borderColor={"#212A3E"} minW={"450px"}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as={"b"}>Sort</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Date:
          <Spacer></Spacer>
          <Tag
            size={"lg"}
            mr={2}
            mt={4}
            cursor={"pointer"}
            borderRadius={"2xl"}
            mb={4}
            onClick={() => {
              sortBy("Latest"), setSort("Latest");
            }}
            color={"white"}
            bg={"Latest" === sort ? "#212A3E" : "#9BA4B5"}
          >
            Latest Date
          </Tag>
          <Divider />
          Status:
          <Spacer />
          {ticketStatus.map((status) => (
            <Tag
              size={"lg"}
              mr={2}
              mt={4}
              cursor={"pointer"}
              borderRadius={"2xl"}
              onClick={() => {
                sortBy(status.name), setSort(status.name);
              }}
              color={"white"}
              bg={status.name === sort ? "#212A3E" : "#9BA4B5"}
            >
              {status.name}
            </Tag>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default FeatureSort;
