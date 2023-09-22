import type { Meta, StoryObj } from "@storybook/react";

import ShareStack from "../../../../web/src/presentation/components/ShareStack/ShareStack";

const meta: Meta<typeof ShareStack> = {
  component: ShareStack,
};

export default meta;
type Story = StoryObj<typeof ShareStack>;

export const DefaultShareStack: Story = {
  args: {
    articleId: "sass-prepend-via-webpack",
    sendEmail: () => {},
  },
};
