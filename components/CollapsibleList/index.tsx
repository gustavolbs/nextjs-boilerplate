import { FC, useState } from "react";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";

import { IUser } from "../../interfaces/user";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Flex,
  IconButton,
  Repository,
  Text,
} from "./styles";

interface ICollapsibleList {
  data: IUser[];
  title: string;
}

const CollapsibleList: FC<ICollapsibleList> = ({ data, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Flex css={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text css={{ color: "white" }}>@peduarte starred 3 repositories</Text>
        <CollapsibleTrigger asChild>
          <IconButton>{open ? <Cross2Icon /> : <RowSpacingIcon />}</IconButton>
        </CollapsibleTrigger>
      </Flex>

      <Repository>
        <Text>{title}</Text>
      </Repository>

      <CollapsibleContent>
        {data.map((item, index) => (
          <Repository key={`item#${index}`}>
            <Text>
              {item.name} - age: {item.age}
            </Text>
          </Repository>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleList;
