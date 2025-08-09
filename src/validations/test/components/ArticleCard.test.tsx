import { render } from "@src/validations/utils/test-utils";
import ArticleCard from "../../../presentation/components/ArticleCard";
import ImagePreview from "@src/presentation/assets/images/image-preview.jpg";

const DEFAULT_ARTICLE_MOCK = {
  image: ImagePreview,
  imageAlt: "Article about Sass",
  date: "09/2023",
  title: "Injecting Sass @use via webpack",
  description:
    "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias",
  articleId: "sass-prepend-via-webpack",
};

const setup = () => {
  const context = render(
    <ArticleCard
      image={DEFAULT_ARTICLE_MOCK.image.src}
      imageAlt={DEFAULT_ARTICLE_MOCK.imageAlt}
      date={DEFAULT_ARTICLE_MOCK.date}
      title={DEFAULT_ARTICLE_MOCK.title}
      description={DEFAULT_ARTICLE_MOCK.description}
      articleId={DEFAULT_ARTICLE_MOCK.articleId}
      key={DEFAULT_ARTICLE_MOCK.articleId}
      visitText="Read more"
    />
  );

  return {
    context,
  };
};

describe("Article Card Test Suite", () => {
  it("should render the component", () => {
    const { context } = setup();

    const articleCard = context.getByTestId("article-card");
    const articleCardImage = context.getByTestId("article-card-image");
    const articleCardInformation = context.getByTestId(
      "article-card-information"
    );
    const articleCardInformationDate = context.getByTestId(
      "article-card-information-date"
    );
    const articleCardInformationWrapper = context.getByTestId(
      "article-card-information-wrapper"
    );
    const articleCardInformationTitle = context.getByTestId(
      "article-card-information-title"
    );
    const articleCardInformationDescription = context.getByTestId(
      "article-card-information-description"
    );

    expect(articleCard).toBeInTheDocument();
    expect(articleCardImage).toBeInTheDocument();
    expect(articleCardImage.getAttribute("alt")).toBe(
      DEFAULT_ARTICLE_MOCK.imageAlt
    );
    expect(articleCardInformation).toBeInTheDocument();
    expect(articleCardInformation.children.length).toBe(2);
    expect(articleCardInformationWrapper).toBeInTheDocument();
    expect(articleCardInformationWrapper.children.length).toBe(3);
    expect(articleCardInformationDate).toBeInTheDocument();
    expect(articleCardInformationDate).toHaveTextContent(
      DEFAULT_ARTICLE_MOCK.date
    );
    expect(articleCardInformationTitle).toBeInTheDocument();
    expect(articleCardInformationTitle).toHaveTextContent(
      DEFAULT_ARTICLE_MOCK.title
    );
    expect(articleCardInformationDescription).toBeInTheDocument();
    expect(articleCardInformationDescription).toHaveTextContent(
      DEFAULT_ARTICLE_MOCK.description
    );
  });
});
