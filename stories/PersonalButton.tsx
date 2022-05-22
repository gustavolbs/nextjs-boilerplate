import React from "react";
import { Button } from "../components/Button";

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction without any styling, just accessibility
 */
export const PersonalButton = ({ label, ...props }: ButtonProps) => {
  return <Button label={label} {...props} />;
};
