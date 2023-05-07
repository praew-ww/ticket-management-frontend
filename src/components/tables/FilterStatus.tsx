import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tag,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  filterStatus: (status: string[]) => void;
}

const FilterStatus: React.FC<Props> = ({ filterStatus }) => {
  const ticketStatus: Status[] = [
    { id: 0, name: "Pending", check: false },
    { id: 1, name: "Accepted", check: false },
    { id: 2, name: "Resolved", check: false },
    { id: 3, name: "Rejected", check: false },
  ];

  const [filterItem, setFilterItem] = useState<string[]>([]);

  const filterByItem = (filter: string) => {
    let ft = filterItem;
    if (filterItem.includes(filter)) {
      ft = ft.filter((f) => f !== filter);

      setFilterItem(ft);
      filterStatus(ft);
    } else {
      setFilterItem([...filterItem, filter]);
      filterStatus([...filterItem, filter]);
    }
  };
  return (
    <>
      <AccordionItem border={"1px"} borderColor={"#212A3E"} minW={"450px"}>
        <h2>
          <AccordionButton>
            <Box as="b" flex="1" textAlign="left">
              Filter
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {ticketStatus.map((status) => (
            <Tag
              size={"lg"}
              mr={2}
              mt={4}
              cursor={"pointer"}
              borderRadius={"2xl"}
              color={"white"}
              // bg={status.check === true ? "#212A3E" : "#9BA4B5"}
              bg={filterItem.includes(status.name) ? "#212A3E" : "#9BA4B5"}
              onClick={() => filterByItem(status.name)}
            >
              {status.name}
            </Tag>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default FilterStatus;
