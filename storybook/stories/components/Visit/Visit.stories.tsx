import type { Meta, StoryObj } from "@storybook/react";

import Visit from "../../../../web/src/presentation/components/Visit/Visit";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Visit> = {
  component: Visit,
};

export default meta;
type Story = StoryObj<typeof Visit>;

export const DefaultVisit: Story = {
  args: {
    text: "Default text",
    href: "/",
  },
};
