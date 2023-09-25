import type { Meta, StoryObj } from "@storybook/react";

import ArticleCard from "../../../web/src/presentation/components/ArticleCard";
import ImagePreview from "../../../web/src/presentation/assets/images/image-preview.jpg";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ArticleCard> = {
  component: ArticleCard,
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const DefaultArticleCard: Story = {
  args: {
    image: ImagePreview,
    imageAlt: "Article about Sass",
    date: "09/2023",
    title: "Injecting Sass @use via webpack",
    description:
      "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias",
    articleId: "sass-prepend-via-webpack",
  },
};
