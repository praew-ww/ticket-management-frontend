import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { apiEndpoint } from "../../../config";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { fetchTicketList } from "../../../slice/ticket";

interface Props {
  ticket: TicketInfo | null;
  type: string;
  onClose: () => void;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("title is required"),
  description: Yup.string().required("description is required"),
  call_number: Yup.string().required("call is required"),
  website: Yup.string().required("website is required"),
});

const EditTicket: React.FC<Props> = ({ ticket, type, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();

  const toast = useToast();

  const SubmitForm = async (values: any) => {
    if (type == "create") {
      await axios.post(apiEndpoint.tickets.create, {
        title: values.title,
        description: values.description,
        website: values.website,
        call_number: values.call_number,
        status: "pending",
      });
      toast({
        title: "success!",
        description: "Ticket created successfully!",
        status: "success",
        position: "top-right",
        isClosable: true,
      });
    } else {
      console.log(values);
      await axios.put(apiEndpoint.tickets.update, {
        title: values.title,
        id: values.id,
        description: values.description,
        website: values.website,
        call_number: values.call_number,
        status: ticket.status,
      });
      toast({
        title: "success!",
        description: "Update successful",
        status: "success",
        position: "top-right",
        isClosable: true,
      });
    }

    dispatch(fetchTicketList());

    onClose();
  };

  return (
    <>
      <Formik
        initialValues={ticket}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          SubmitForm(values);
        }}
      >
        {(props) => (
          <Form>
            <Field name="title">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.title && form.touched.title}
                >
                  <FormLabel>Title</FormLabel>
                  <Input {...field} placeholder="Title" />
                  <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="description">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.description && form.touched.description
                  }
                >
                  <FormLabel>Description</FormLabel>
                  <Textarea {...field} placeholder="Description" />
                  <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="call_number">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.call_number && form.touched.call_number
                  }
                >
                  <FormLabel>Call</FormLabel>
                  <Input {...field} placeholder="Call" />
                  <FormErrorMessage>{form.errors.call}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="website">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.website && form.touched.website}
                >
                  <FormLabel>Website</FormLabel>
                  <Input {...field} placeholder="Website" />
                  <FormErrorMessage>{form.errors.website}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditTicket;
