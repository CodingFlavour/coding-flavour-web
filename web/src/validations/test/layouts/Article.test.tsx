import Article, { IArticleProps } from "@src/presentation/layouts/Article";
import { render } from "@src/validations/utils/test-utils";
import ImagePreviewTwo from "@/presentation/assets/images/image-preview-2.png";

const DEFAULT_PROPS_MOCK: IArticleProps = {
  article: {
    articleId: "sass-prepend-via-webpack",
    image: ImagePreviewTwo,
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
  },
  sendEmail: jest.fn()
};

const setup = () => {
  const context = render(
    <Article article={DEFAULT_PROPS_MOCK.article} sendEmail={DEFAULT_PROPS_MOCK.sendEmail} />
  );

  return {
    context,
  };
};

describe("Contact Us Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const article = utils.context.getByTestId("article");

    expect(article).toBeInTheDocument();
    expect(article.children.length).toBe(2);
  });
});
