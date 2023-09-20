import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ArticleInformation, { IArticleInformation } from "./ArticleInformation";
import ImagePreview from "@/presentation/assets/images/image-preview.jpg";

const DEFAULT_ARTICLE_MOCK: IArticleInformation = {
  image: ImagePreview,
  imageAlt: "Article about Sass",
  date: "09/2023",
  title: "Injecting Sass @use via webpack",
  paragraphs: [
    "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa blanditiis fugit quibusdam a nulla tempore accusantium incidunt ipsa, ipsum sed quod dolore eos, neque dignissimos pariatur eius beatae ratione consequatur! Rerum aperiam quo laudantium est amet dolore iure recusandae velit aspernatur culpa, non sapiente dignissimos maxime nostrum architecto nulla eos eum eius vero? Animi, quidem? Voluptatibus asperiores nemo perferendis id.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium ex et eveniet laudantium explicabo sed repudiandae, ut, voluptatum qui rem culpa ea fugit inventore, molestias temporibus doloremque nam. Sapiente.Cumque, necessitatibus voluptas molestias natus consequatur ab dolore minus. Ab minima distinctio nostrum? Aliquam error accusantium reprehenderit amet similique nostrum quam delectus esse est, vitae minus unde, nihil earum! Sint?Aliquid pariatur, cum quis ad doloremque dolores fugiat nostrum, quod rem accusamus aspernatur ullam animi repellendus, dolore beatae quisquam similique doloribus. In sunt, distinctio quam numquam ad deserunt perferendis consequuntur!Excepturi saepe quod error dolore sunt aspernatur quas id soluta, reprehenderit, aperiam debitis cumque velit tenetur, aliquam modi ex dignissimos officiis sed libero. Ad aliquam at laboriosam ipsam reprehenderit dignissimos?Deserunt officiis hic neque illum quasi iste repellat tempore eveniet libero nemo similique eaque, repudiandae blanditiis quisquam praesentium possimus dolorum consequuntur aspernatur magni alias animi adipisci cumque laborum. Neque, maxime?Atque fugiat ipsum, vitae ut dolores quia quaerat odio, quidem at eius ratione ducimus beatae? Et dolorem nesciunt, soluta amet corrupti ratione libero odit ducimus architecto in repellat. Laboriosam, et?",
  ],
};

const setup = () => {
  const context = render(
    <ArticleInformation
      image={DEFAULT_ARTICLE_MOCK.image}
      imageAlt={DEFAULT_ARTICLE_MOCK.imageAlt}
      date={DEFAULT_ARTICLE_MOCK.date}
      title={DEFAULT_ARTICLE_MOCK.title}
      paragraphs={DEFAULT_ARTICLE_MOCK.paragraphs}
    />
  );

  return {
    context,
  };
};

describe("Article Card Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const lastParagraphIndex = DEFAULT_ARTICLE_MOCK.paragraphs.length - 1;

    const articleInformation = utils.context.getByTestId("article-information");
    const articleInformationImage = utils.context.getByTestId(
      "article-information-image"
    );

    const articleInformationBodyDate = utils.context.getByTestId(
      "article-information-body-date"
    );
    const articleInformationBodyTitle = utils.context.getByTestId(
      "article-information-body-title"
    );
    const articleInformationBodyDescription = utils.context.getByTestId(
      `article-information-body-description-${lastParagraphIndex}`
    );

    expect(articleInformation).toBeInTheDocument();
    expect(articleInformationImage).toBeInTheDocument();
    expect(articleInformationImage.getAttribute("alt")).toBe(
      DEFAULT_ARTICLE_MOCK.imageAlt
    );
    expect(articleInformationBodyDate).toBeInTheDocument();
    expect(articleInformationBodyDate).toHaveTextContent(
      DEFAULT_ARTICLE_MOCK.date
    );
    expect(articleInformationBodyTitle).toBeInTheDocument();
    expect(articleInformationBodyTitle).toHaveTextContent(
      DEFAULT_ARTICLE_MOCK.title
    );
    expect(articleInformationBodyDescription).toBeInTheDocument();
    expect(articleInformationBodyDescription).toHaveTextContent(
      DEFAULT_ARTICLE_MOCK.paragraphs[lastParagraphIndex]
    );
  });
});
