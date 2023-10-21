import type { Meta, StoryObj } from "@storybook/react";

import React, { useState } from "react";
import LanguageSelector from "../../../web/src/presentation/components/LanguageSelector";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LanguageSelector> = {
  component: LanguageSelector,
};

export default meta;
type Story = StoryObj<typeof LanguageSelector>;

const LanguageSelectorWithProps = () => {
  const [state, setState] = useState(false);
  const handleNewLanguage = (lang: string) => {
    setState(!state);
  };
  return (
    <LanguageSelector
      handleNewLanguage={handleNewLanguage}
      isLeftActive={state}
    />
  );
};

export const DefaultLanguageSelector: Story = {
  render: () => <LanguageSelectorWithProps />,
};
