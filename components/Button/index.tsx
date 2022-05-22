import { styled } from "@stitches/react";
import { FC, HTMLAttributes } from "react";

const ButtonStyle = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
});

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: FC<IButton> = ({ label, onClick }) => {
  return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>;
};
