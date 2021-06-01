import React from "react";

export interface Button {
  label: string;
}

export const Button: React.FC<Button> = ({ label }) => {
  return <button type="button">{label}</button>;
};
