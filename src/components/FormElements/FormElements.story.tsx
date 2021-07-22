import React from "react";
import { Form } from "../Form";
import { FormInput, FormSelect, FormTextArea } from ".";
import { FormDatePicker } from "./FormElements";

export default {
  title: "Form Elements",
};

const noop = () => {};

export const formInput = () => (
  <Form onSubmitFn={(r)=> console.log(r)} validationSchema={{}}>
    <FormInput label="Form Input" name="input" placeholder="Input here..." />
  </Form>
);

export const formTextArea = () => (
  <Form onSubmitFn={(r)=> console.log(r)} validationSchema={{}}>
    <FormTextArea label="Text Input" name="text input" placeholder="Input here..." />
  </Form>
);

export const formSelect = () => (
  <Form onSubmitFn={noop} validationSchema={{}}>
    <FormSelect
      label="Inputs"
      name="inputs"
      options={[
        { label: "Input 1", value: "input_1" },
        { label: "Input 2", value: "input_2" },
        { label: "Input 3", value: "input_3" },
      ]}
    />
  </Form>
);

export const formMulti = () => (
  <Form onSubmitFn={noop} validationSchema={{}}>
    <FormSelect
      label="Inputs"
      name="inputs"
      defaultValue={null}
      isMulti
      options={[
        { label: "Input 1", value: "input_1" },
        { label: "Input 2", value: "input_2" },
        { label: "Input 3", value: "input_3" },
      ]}
    />
  </Form>
);

export const formDatePicker = () => (
  <Form onSubmitFn={noop} validationSchema={{}}>
    <FormDatePicker
      name="date"
      label="Date"
    />
  </Form>
);
