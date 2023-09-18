import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Value from "../../../../web/src/presentation/components/Value/Value";
import growthIcon from "../../../../web/src/presentation/assets/icons/growth.png";
//👇 This default export determines where your story goes in the story list
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
