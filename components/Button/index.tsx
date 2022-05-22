import { styled } from "../../styles/stitches.config";
import { FC, HTMLAttributes } from "react";

const ButtonStyle = styled("button", {
  backgroundColor: "$gray400",
  borderRadius: "9999px",
  fontSize: "$md",
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
