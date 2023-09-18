import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '../../../../web/src/presentation/components/Navbar/Navbar';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Navbar> = {
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const DefaultNavbar: Story = {
  args: {
    menuOptions: ['Example 1', 'Example 2', 'Example 3'],
    activeId: 0
  },
};