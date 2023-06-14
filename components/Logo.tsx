import React from "react";

export default function Logo({ width = "52" }: { width?: string }) {
  return (
    <img
      src="https://cleansolutions.tech/wp-content/uploads/2022/09/clean-solution-logo-1024x337-1-2.png"
      className={`w-${width}`}
      alt=""
    />
  );
}
