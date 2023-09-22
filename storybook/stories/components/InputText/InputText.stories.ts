import type { Meta, StoryObj } from "@storybook/react";

import InputText from "../../../../web/src/presentation/components/InputText/InputText";

const meta: Meta<typeof InputText> = {
  component: InputText,
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const DefaultInputTextInput: Story = {
  args: {
    id: "name",
    type: "text",
    value: "Name",
    isError: false,
    isSuccess: false,
    rows: 0
  },
};

export const DefaultInputTextArea: Story = {
  args: {
    id: "name",
    type: "textarea",
    value: "Name",
    isError: false,
    isSuccess: false,
    rows: 10,
  },
};
