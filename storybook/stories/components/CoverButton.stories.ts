import type { Meta, StoryObj } from "@storybook/react";

import CoverButton from "../../../web/src/presentation/components/CoverButton";

const meta: Meta<typeof CoverButton> = {
  component: CoverButton,
};

export default meta;
type Story = StoryObj<typeof CoverButton>;

export const DefaultCoverButton: Story = {
  args: {
  },
};
