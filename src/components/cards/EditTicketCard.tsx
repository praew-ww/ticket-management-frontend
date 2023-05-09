import {
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} from "@chakra-ui/react";
import React from "react";
import UpdateStatus from "./card_function/UpdateStatus";

interface Props {
  ticket: TicketInfo;
}

const EditTicketCard: React.FC<Props> = ({ ticket }) => {
  return (
    <div>
      <PopoverContent color="black" minW={"500px"} boxShadow={"lg"}>
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Update Status
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <UpdateStatus ticket={ticket} />
        </PopoverBody>
        <PopoverFooter
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        ></PopoverFooter>
      </PopoverContent>
    </div>
  );
};

export default EditTicketCard;
