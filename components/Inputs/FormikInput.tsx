/** @format */

import { Field } from "formik";
import React from "react";

type Props = {
  error?: string;
  type: string;
  id: string;
  name: string;
  autoComplete?: string;
  touched?: boolean;
  label: string;
};

function FormikInput({
  error,
  type,
  id,
  name,
  autoComplete,
  touched,
  label,
}: Props) {
  return (
    <div>
      <label
        htmlFor="firstName"
        className=" text-sm font-medium text-gray-700 flex justify-between"
      >
        <span>{label}</span>
        <span className="text-error ">{error ? error : null}*</span>
      </label>
      {/* <label className="label">
      <span className="block text-sm font-medium text-gray-700 ">
        What is your name?
      </span>
      <span className="label-text-alt">Alt label</span>
    </label> */}
      <div className="mt-1">
        <Field
          type={type}
          id={id}
          name={name}
          autoComplete={autoComplete}
          className={` block w-full border-gray-300 rounded-md shadow-sm  sm:text-sm ${
            error
              ? "border-error focus:border-error focus:ring-error"
              : "focus:border-blue-1 focus:ring-blue-1 "
          }`}
        />
      </div>
    </div>
  );
}

export default FormikInput;
