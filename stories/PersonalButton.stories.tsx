import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PersonalButton } from "./PersonalButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/PersonalButton",
  component: PersonalButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PersonalButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PersonalButton> = (args) => (
  <PersonalButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
  onClick: () => alert("button was clicked"),
};
