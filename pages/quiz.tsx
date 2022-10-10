/** @format */

import { useFormik, Form, Field } from "formik";
import { resolve } from "node:path/win32";
import React from "react";
import Flex from "../components/Flex";
import AnimatedTextWord from "../components/Headings/AnimatedText";
import H1 from "../components/Headings/H1";
import WavyText from "../components/Headings/WavyHeading";
import InputField from "../components/Inputs/Input";
import { formValidationSchema } from "../types/form";

type Props = {};

function quiz({}: Props) {
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    validateOnBlur,
  } = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
  });

  return (
    <Flex className="flex-col space-y-4">
      {/* <H1 Text="What is your Name ?" /> */}
      <WavyText text="What is your Name ?" replay={true} />
      {/* <AnimatedTextWord text="Awesome Animated Text!" /> */}
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex space-y-2 flex-col"
      >
        <InputField
          error={errors.name && touched.name ? errors.name : ""}
          name="name"
          onChange={handleChange}
          value={values.name}
          label="name"
          type="text"
          placeholder="First Name"
          onBlur={handleBlur}

          // error={errors.name}
        />
      </form>
    </Flex>
  );
}

export default quiz;
