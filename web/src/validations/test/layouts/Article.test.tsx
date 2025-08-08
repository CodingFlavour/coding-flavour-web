import Article from "@src/presentation/layouts/Article";
import { render } from "@src/validations/utils/test-utils";
import ImagePreviewTwo from "@/presentation/assets/images/image-preview-2.png";
import { getDictionary } from "@src/data/locales/dict/dict";
import { i18n } from "../../../../../i18n.config";
import { IArticle } from "@src/data/Models/Article";

const DEFAULT_PROPS_MOCK: {
  article: IArticle;
} = {
  article: {
    articleId: "sass-prepend-via-webpack",
    image: ImagePreviewTwo.src,
    imageAlt: "Article about Sass",
    date: "09/2023",
    title: "Injecting Sass @use via webpack",
    paragraphs: [
      `${Array.from(Array(10)).map(
        () =>
          "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
      )}`,
      `${Array.from(Array(3)).map(
        () =>
          "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
      )}`,
      `${Array.from(Array(6)).map(
        () =>
          "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
      )}`,
    ],
    author: "Daniel Sánchez",
  }
};

const setup = async () => {
  const dict = await getDictionary(i18n.defaultLocale);
  const common = await dict.common;

  const context = render(
    <Article
      article={DEFAULT_PROPS_MOCK.article}
      dict={common}
    />
  );

  return {
    context,
  };
};

describe("Contact Us Test Suite", () => {
  it("should render the component", async () => {
    const { context } = await setup();

    const article = context.getByTestId("article");

    expect(article).toBeInTheDocument();
    expect(article.children.length).toBe(2);
  });
});
