/** @format */

import React from "react";
import Input from "../animation/Input";
import Flex from "../utils/Flex";

type Props = {
  handleChange: () => void;
  value: string;
  error: string;
};

function QInput({ handleChange, value, error }: Props) {
  return (
    <Flex className="flex-col items-center">
      <Input
        autoComplete="off"
        type="text"
        id="value"
        name="value"
        placeholder="Enter your answer"
        onChange={handleChange}
        value={value}
        error={error}
      />

      {error && <p className="text-red-500">{`${error}`}</p>}

      <button type="submit"></button>
    </Flex>
  );
}

export default QInput;
