import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CollapsibleList } from "./CollapsibleList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/CollapsibleList",
  component: CollapsibleList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CollapsibleList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CollapsibleList> = (args) => (
  <CollapsibleList {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  data: [
    {
      age: 10,
      name: "John Doe",
    },
    {
      age: 26,
      name: "Mary Jane",
    },
  ],
  title: "Collapsible List",
};
