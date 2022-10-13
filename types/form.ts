/** @format */
import * as Yup from "yup";

export const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")

    .max(50, "Too Long!")
    .required("Required"),
  // lastName: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Required"),
  // email: Yup.string().email("Invalid email").required("Required"),
});

export const validateString = (value: string) => {
  let stringSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return stringSchema;
};
export let stringSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
