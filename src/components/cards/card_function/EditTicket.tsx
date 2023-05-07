import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { apiEndpoint } from "../../../config";

interface Props {
  ticket: TicketInfo;
}

// const initialValues = {
//   id: 1,
//   title: "hi",
//   description: "",
//   call: "",
//   email: "",
// };

const validationSchema = Yup.object().shape({
  title: Yup.string().required("title is required"),
  description: Yup.string().required("description is required"),
  call_number: Yup.string().required("call is required"),
});

const EditTicket: React.FC<Props> = ({ ticket }) => {
  const SubmitForm = async (values: any) => {
    console.log(values, "val");
    await axios.put(apiEndpoint.tickets.update, {
      title: values.title,
      id: values.id,
      description: values.description,
      email: values.website,
      call_number: values.call_number,
    });
  };

  return (
    <>
      {" "}
      <Formik
        initialValues={ticket}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
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
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder="Website" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
      </Formik>{" "}
    </>
  );
};

export default EditTicket;
