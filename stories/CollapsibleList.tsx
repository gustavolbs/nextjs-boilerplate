import React, { HTMLAttributes } from "react";
import Component from "../components/CollapsibleList";
import { IUser } from "../interfaces/user";

interface CollapsibleListProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Array of user properties
   */
  data: IUser[];
  /**
   * Title to collapsible list
   */
  title: string;
}

/**
 * Primary UI component for listing users
 */
export const CollapsibleList = ({ ...props }: CollapsibleListProps) => {
  return <Component {...props} />;
};
