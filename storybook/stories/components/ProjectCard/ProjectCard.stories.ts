import type { Meta, StoryObj } from "@storybook/react";
import ProjectCard from "../../../../web/src/presentation/components/ProjectCard/ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  component: ProjectCard,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const DefaultProjectCard: Story = {
  args: {
    projectId: "tell-us",
    projectName: "Tell Us",
    date: "07/2023",
    platform: "Web",
  },
};
