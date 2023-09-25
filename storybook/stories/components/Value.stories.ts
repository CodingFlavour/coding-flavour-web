import type { Meta, StoryObj } from "@storybook/react";
import growthIcon from "../../../web/src/presentation/assets/icons/growth.png";
import Value from "../../../web/src/presentation/components/Value";

const meta: Meta<typeof Value> = {
    component: Value,
};

export default meta;
type Story = StoryObj<typeof Value>;

export const DefaultValue: Story = {
    args: {
        value: {
            id: "Test Value",
            title: "Title Value",
            description: "Description Value",
            image: growthIcon,
        },
    },
};
