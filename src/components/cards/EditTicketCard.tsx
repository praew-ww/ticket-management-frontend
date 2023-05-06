import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import EditTicket from "./card_function/EditTicket";
import UpdateStatus from "./card_function/UpdateStatus";

function EditTicketCard() {
  return (
    <div>
      <PopoverContent
        color="black"
        borderColor="blue.800"
        minW={"500px"}
        dropShadow={"lg"}
      >
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Edit Ticket Or Update Status
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Edit Infomation</Tab>
              <Tab>Update Status</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <EditTicket />
              </TabPanel>
              <TabPanel>
                <UpdateStatus />
              </TabPanel>
            </TabPanels>
          </Tabs>
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
}

export default EditTicketCard;
