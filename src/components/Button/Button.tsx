import React from "react";

export interface Button {
  label: string;
}

export const Button: React.FC<Button> = ({ label, ...props }) => {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};
