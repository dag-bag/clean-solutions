/** @format */

import React from "react";
interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: any;
  error?: string;
  name: string;
  className?: string;
  onBlur?: any;
}
function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  name,
  className,
  onBlur,
}: InputFieldProps) {
  const classes = `w-full p-3 text-sm border  rounded-lg text-black ${className} ${
    error ? "border-red-500 focus: " : "border-gray-200"
  } invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 outline-none`;
  return (
    <div>
      <label className="sr-only" htmlFor={label}>
        {name}
      </label>

      <input
        className={classes}
        placeholder={placeholder}
        type={type}
        id={label}
        onChange={onChange}
        value={value}
        name={label}
        onBlur={onBlur}
      />

      <p className="text-xs text-red-500">{error}</p>
    </div>
  );
}

export default InputField;
